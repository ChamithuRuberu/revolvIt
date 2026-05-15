'use client';

import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, ArrowRight, CreditCard, ShieldCheck, MapPin, Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
    const { cart, removeFromCart, totalAmount, clearCart } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        deliveryOption: 'standard',
    });
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.directpay.lk/v3/directpayipg.min.js';
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => console.error('Failed to load DirectPay script');
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handlePayNow = async () => {
        if (!scriptLoaded) {
            alert('Payment system is loading, please try again in a moment.');
            return;
        }

        // Validate delivery information
        const errors: { [key: string]: string } = {};
        if (!deliveryInfo.fullName.trim()) errors.fullName = 'Full name is required';
        if (!deliveryInfo.phone.trim()) errors.phone = 'Phone number is required';
        if (!deliveryInfo.address.trim()) errors.address = 'Address is required';
        if (!deliveryInfo.city.trim()) errors.city = 'City is required';
        if (!deliveryInfo.postalCode.trim()) errors.postalCode = 'Postal code is required';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        setIsProcessing(true);
        try {
            const order_id = `order_${Date.now()}`;
            const amount = totalAmount.toString();
            const currency = 'LKR';

            const response = await fetch('/api/directpay/initiate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order_id,
                    amount,
                    currency,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // @ts-ignore
                const dp = new DirectPayIpg.Init({
                    signature: data.signature,
                    dataString: data.dataString,
                    stage: 'PROD',
                });

                dp.doInAppCheckout().then((result: any) => {
                    console.log('Payment result:', result);
                    if (result.transaction && result.transaction.status === 'success') {
                        clearCart();
                        router.push(`/checkout/success?gateway=directpay&order_id=${order_id}`);
                    } else if (result.transaction && result.transaction.status === 'FAILED') {
                        const failureReason = result.transaction?.message || 'Payment failed';
                        router.push(`/checkout/fail?gateway=directpay&order_id=${order_id}&reason=${encodeURIComponent(failureReason)}`);
                    } else {
                        router.push(`/checkout/cancel?gateway=directpay&order_id=${order_id}`);
                    }
                }).catch((error: any) => {
                    console.error('Payment error:', error);
                    router.push(`/checkout/fail?gateway=directpay&order_id=${order_id}&reason=${encodeURIComponent('Payment error occurred')}`);
                });
            } else {
                alert('Payment initiation failed: ' + data.error);
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('An error occurred while processing payment.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-slate-50">
                <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-md border border-gray-100">
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-corporate-blue">
                        <ShoppingBag className="h-10 w-10" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Your cart is empty</h1>
                    <p className="text-gray-500 font-medium mb-8">It looks like you haven't added any industrial hardware to your cart yet.</p>
                    <Link href="/hardware" className="inline-flex items-center gap-2 bg-corporate-blue text-white px-8 py-4 rounded-2xl font-black hover:shadow-2xl transition-all">
                        Explore Hardware
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <div className="bg-corporate-blue p-2 rounded-xl">
                        <ShoppingBag className="h-6 w-6 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter">Secure Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Form & Details */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-8">
                        {/* Delivery Info Card */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-blue-50 text-corporate-blue rounded-2xl">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-xl font-black text-gray-900">Delivery Address</h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.fullName}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium focus:outline-none transition-all duration-300 ${
                                            formErrors.fullName ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-corporate-blue focus:ring-4 focus:ring-corporate-blue/10 bg-gray-50/50 focus:bg-white'
                                        }`}
                                    />
                                    {formErrors.fullName && <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>{formErrors.fullName}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={deliveryInfo.phone}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                                        placeholder="+94 77 XXX XXXX"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium focus:outline-none transition-all duration-300 ${
                                            formErrors.phone ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-corporate-blue focus:ring-4 focus:ring-corporate-blue/10 bg-gray-50/50 focus:bg-white'
                                        }`}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>{formErrors.phone}</p>}
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.address}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                                        placeholder="123 Main Street, Apartment, Studio, or Floor"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium focus:outline-none transition-all duration-300 ${
                                            formErrors.address ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-corporate-blue focus:ring-4 focus:ring-corporate-blue/10 bg-gray-50/50 focus:bg-white'
                                        }`}
                                    />
                                    {formErrors.address && <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>{formErrors.address}</p>}
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.city}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                                        placeholder="Colombo"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium focus:outline-none transition-all duration-300 ${
                                            formErrors.city ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-corporate-blue focus:ring-4 focus:ring-corporate-blue/10 bg-gray-50/50 focus:bg-white'
                                        }`}
                                    />
                                    {formErrors.city && <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>{formErrors.city}</p>}
                                </div>
                                
                                {/* Postal Code */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Postal Code</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.postalCode}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })}
                                        placeholder="00100"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium focus:outline-none transition-all duration-300 ${
                                            formErrors.postalCode ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-corporate-blue focus:ring-4 focus:ring-corporate-blue/10 bg-gray-50/50 focus:bg-white'
                                        }`}
                                    />
                                    {formErrors.postalCode && <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>{formErrors.postalCode}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Delivery Options Card */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                                    <Truck className="h-6 w-6" />
                                </div>
                                <h2 className="text-xl font-black text-gray-900">Shipping Method</h2>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { value: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'FREE', icon: '📦' },
                                    { value: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '+LKR 500', icon: '🚀' },
                                    { value: 'overnight', label: 'Next Day Delivery', desc: '1 business day', price: '+LKR 1,000', icon: '⚡' },
                                ].map((option) => (
                                    <label key={option.value} className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        deliveryInfo.deliveryOption === option.value ? 'border-corporate-blue bg-blue-50/30' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                                    }`}>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 transition-colors ${
                                            deliveryInfo.deliveryOption === option.value ? 'border-corporate-blue' : 'border-gray-300'
                                        }`}>
                                            {deliveryInfo.deliveryOption === option.value && (
                                                <div className="w-2.5 h-2.5 rounded-full bg-corporate-blue"></div>
                                            )}
                                        </div>
                                        
                                        <div className="text-2xl mr-4">{option.icon}</div>
                                        
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900 text-base">{option.label}</p>
                                            <p className="text-sm text-gray-500 font-medium mt-0.5">{option.desc}</p>
                                        </div>
                                        
                                        <p className={`font-black ${option.price === 'FREE' ? 'text-green-600' : 'text-gray-900'} text-sm`}>
                                            {option.price}
                                        </p>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary & Checkout (Sticky) */}
                    <div className="lg:col-span-5 xl:col-span-4 relative">
                        <div className="sticky top-8 space-y-6">
                            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
                                <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>

                                {/* Items List (Compact) */}
                                <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-center group">
                                            <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                                                {item.image ? (
                                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                                                ) : (
                                                    <ShoppingBag className="m-auto h-6 w-6 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                                )}
                                                <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10 shadow-sm border-2 border-white">
                                                    {item.quantity}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-tight line-clamp-2 leading-snug">{item.name}</h3>
                                                <div className="text-xs font-black text-gray-500 uppercase tracking-wider mt-1">{item.model}</div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="text-sm font-black text-gray-900 whitespace-nowrap">LKR {item.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-gray-600 font-medium">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-gray-900">LKR {totalAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-600 font-medium">
                                        <span>Shipping</span>
                                        <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-600 font-medium">
                                        <span>Tax</span>
                                        <span className="font-bold text-gray-900">Calculated at checkout</span>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className="font-black text-gray-900 text-lg">Total</span>
                                        <span className="font-black text-corporate-blue text-2xl">LKR {totalAmount.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Pay Button */}
                                <button
                                    onClick={handlePayNow}
                                    disabled={isProcessing}
                                    className={`w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-base hover:bg-corporate-blue transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-corporate-blue/30 flex items-center justify-center gap-3 active:scale-[0.98] ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                            </svg>
                                            Processing Secure Payment...
                                        </>
                                    ) : (
                                        <>
                                            <CreditCard className="h-6 w-6" />
                                            Pay LKR {totalAmount.toLocaleString()}
                                        </>
                                    )}
                                </button>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold bg-gray-50 py-3 rounded-xl">
                                        <ShieldCheck className="h-5 w-5 text-green-500" />
                                        Secure 256-bit encrypted checkout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
