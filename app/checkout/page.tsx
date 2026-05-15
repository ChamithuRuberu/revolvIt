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
        <div className="min-h-screen pt-32 pb-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 tracking-tighter">Secure Checkout.</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Delivery Information Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Delivery Info Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MapPin className="h-6 w-6 text-corporate-blue" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900">Delivery Information</h2>
                            </div>

                            <div className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-black text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.fullName}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition ${
                                            formErrors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-corporate-blue'
                                        }`}
                                    />
                                    {formErrors.fullName && <p className="text-red-500 text-sm font-bold mt-1">{formErrors.fullName}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-black text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={deliveryInfo.phone}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                                        placeholder="+94 77 XXX XXXX"
                                        className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition ${
                                            formErrors.phone ? 'border-red-500' : 'border-gray-200 focus:border-corporate-blue'
                                        }`}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-sm font-bold mt-1">{formErrors.phone}</p>}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-black text-gray-700 mb-2">Delivery Address</label>
                                    <input
                                        type="text"
                                        value={deliveryInfo.address}
                                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                                        placeholder="123 Main Street, Building A"
                                        className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition ${
                                            formErrors.address ? 'border-red-500' : 'border-gray-200 focus:border-corporate-blue'
                                        }`}
                                    />
                                    {formErrors.address && <p className="text-red-500 text-sm font-bold mt-1">{formErrors.address}</p>}
                                </div>

                                {/* City and Postal Code */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-black text-gray-700 mb-2">City</label>
                                        <input
                                            type="text"
                                            value={deliveryInfo.city}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                                            placeholder="Colombo"
                                            className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition ${
                                                formErrors.city ? 'border-red-500' : 'border-gray-200 focus:border-corporate-blue'
                                            }`}
                                        />
                                        {formErrors.city && <p className="text-red-500 text-sm font-bold mt-1">{formErrors.city}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-gray-700 mb-2">Postal Code</label>
                                        <input
                                            type="text"
                                            value={deliveryInfo.postalCode}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })}
                                            placeholder="12345"
                                            className={`w-full px-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition ${
                                                formErrors.postalCode ? 'border-red-500' : 'border-gray-200 focus:border-corporate-blue'
                                            }`}
                                        />
                                        {formErrors.postalCode && <p className="text-red-500 text-sm font-bold mt-1">{formErrors.postalCode}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Options Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-50 rounded-full">
                                    <Truck className="h-6 w-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900">Delivery Options</h2>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { value: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'FREE' },
                                    { value: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '+LKR 500' },
                                    { value: 'overnight', label: 'Next Day Delivery', desc: 'Next business day', price: '+LKR 1,000' },
                                ].map((option) => (
                                    <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 transition"
                                        style={{ borderColor: deliveryInfo.deliveryOption === option.value ? '#0066cc' : '' }}>
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value={option.value}
                                            checked={deliveryInfo.deliveryOption === option.value}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryOption: e.target.value })}
                                            className="w-5 h-5 text-corporate-blue"
                                        />
                                        <div className="ml-4 flex-1">
                                            <p className="font-black text-gray-900">{option.label}</p>
                                            <p className="text-sm text-gray-500 font-bold">{option.desc}</p>
                                        </div>
                                        <p className="font-black text-gray-900">{option.price}</p>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 flex gap-6 items-center shadow-sm">
                                <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    {item.image ? (
                                        <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                                    ) : (
                                        <ShoppingBag className="m-auto h-8 w-8 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.model}</div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">{item.name}</h3>
                                    <div className="text-lg font-black text-gray-900 mt-1">LKR {item.price}</div>
                                </div>
                                <div className="flex flex-col items-end gap-2 px-4">
                                    <div className="text-xs font-bold text-gray-400">Qty: {item.quantity}</div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Summary Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-[3rem] border border-gray-200 shadow-xl sticky top-32">
                            <h2 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-4">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-500 font-bold">
                                    <span>Subtotal</span>
                                    <span>LKR {totalAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-500 font-bold">
                                    <span>Shipping</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-between">
                                    <span className="text-xl font-black text-gray-900">Total</span>
                                    <span className="text-2xl font-black text-corporate-blue">LKR {totalAmount.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePayNow}
                                disabled={isProcessing}
                                className={`w-full bg-gray-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-corporate-blue transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isProcessing ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CreditCard className="h-6 w-6" />
                                        Pay with DirectPay
                                    </>
                                )}
                            </button>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                                    <ShieldCheck className="h-6 w-6 text-green-500" />
                                    Secure 256-bit encrypted checkout. Authorized Green Code Solution Hardware.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
