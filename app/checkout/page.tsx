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

    const shippingOptions = [
        { value: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'Free', cost: 0 },
        { value: 'express', label: 'Express Delivery', desc: '2-3 business days', price: 'LKR 500', cost: 500 },
        { value: 'overnight', label: 'Next Day Delivery', desc: '1 business day', price: 'LKR 1,000', cost: 1000 },
    ];

    const currentShippingOption = shippingOptions.find(o => o.value === deliveryInfo.deliveryOption) || shippingOptions[0];
    const shippingCost = currentShippingOption.cost;
    const finalTotal = totalAmount + shippingCost;

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
            const amount = finalTotal.toString();
            const currency = 'LKR';

            // Save order to database
            await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId: order_id,
                    items: cart,
                    deliveryInfo,
                    shippingCost,
                    subtotal: totalAmount,
                    totalAmount: finalTotal,
                    paymentStatus: 'PENDING',
                    paymentGateway: 'directpay'
                }),
            });

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

                dp.doInAppCheckout().then(async (result: any) => {
                    console.log('Payment result:', result);
                    if (result.transaction && result.transaction.status === 'success') {
                        await fetch('/api/orders', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ orderId: order_id, action: 'update_status', paymentStatus: 'SUCCESS' }),
                        });
                        clearCart();
                        router.push(`/checkout/success?gateway=directpay&order_id=${order_id}`);
                    } else if (result.transaction && result.transaction.status === 'FAILED') {
                        const failureReason = result.transaction?.message || 'Payment failed';
                        await fetch('/api/orders', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ orderId: order_id, action: 'update_status', paymentStatus: 'FAILED', failureReason }),
                        });
                        router.push(`/checkout/fail?gateway=directpay&order_id=${order_id}&reason=${encodeURIComponent(failureReason)}`);
                    } else {
                        await fetch('/api/orders', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ orderId: order_id, action: 'update_status', paymentStatus: 'CANCELLED' }),
                        });
                        router.push(`/checkout/cancel?gateway=directpay&order_id=${order_id}`);
                    }
                }).catch(async (error: any) => {
                    console.error('Payment error:', error);
                    await fetch('/api/orders', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ orderId: order_id, action: 'update_status', paymentStatus: 'FAILED', failureReason: 'Payment error occurred' }),
                    });
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
        <div className="bg-white relative flex flex-col font-sans">
            {/* Split Background Layer for Desktop */}
            <div className="hidden lg:block absolute top-0 right-0 w-[45%] xl:w-[40%] h-full bg-[#f8f9fa] border-l border-gray-200 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row flex-1 relative z-10">
                {/* Left Column: Form & Details */}
                <div className="w-full lg:w-[55%] xl:w-[60%] bg-white px-4 sm:px-8 lg:px-16 xl:px-24 pt-8 lg:pt-28 pb-16 order-2 lg:order-1">
                    <div className="max-w-xl mx-auto lg:ml-auto lg:mr-12 w-full">
                        <div className="hidden lg:flex items-center gap-3 mb-10">
                            <ShoppingBag className="h-8 w-8 text-corporate-blue" />
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Checkout</h1>
                        </div>

                        <div className="space-y-10">
                            {/* Delivery Information */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery</h2>
                                <div className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <input
                                            type="text"
                                            value={deliveryInfo.fullName}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                                            placeholder="Full name"
                                            className={`w-full px-4 py-3.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-300 ${formErrors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue bg-white'
                                                }`}
                                        />
                                        {formErrors.fullName && <p className="text-red-500 text-xs font-bold mt-1.5">{formErrors.fullName}</p>}
                                    </div>

                                    {/* Phone & Address Grid */}
                                    <div>
                                        <input
                                            type="tel"
                                            value={deliveryInfo.phone}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                                            placeholder="Phone number"
                                            className={`w-full px-4 py-3.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-300 ${formErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue bg-white'
                                                }`}
                                        />
                                        {formErrors.phone && <p className="text-red-500 text-xs font-bold mt-1.5">{formErrors.phone}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            value={deliveryInfo.address}
                                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                                            placeholder="Address"
                                            className={`w-full px-4 py-3.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-300 ${formErrors.address ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue bg-white'
                                                }`}
                                        />
                                        {formErrors.address && <p className="text-red-500 text-xs font-bold mt-1.5">{formErrors.address}</p>}
                                    </div>

                                    {/* City & Postal Code */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                value={deliveryInfo.city}
                                                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                                                placeholder="City"
                                                className={`w-full px-4 py-3.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-300 ${formErrors.city ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue bg-white'
                                                    }`}
                                            />
                                            {formErrors.city && <p className="text-red-500 text-xs font-bold mt-1.5">{formErrors.city}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                value={deliveryInfo.postalCode}
                                                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })}
                                                placeholder="Postal code"
                                                className={`w-full px-4 py-3.5 rounded-lg border text-sm font-medium focus:outline-none transition-all duration-300 ${formErrors.postalCode ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue bg-white'
                                                    }`}
                                            />
                                            {formErrors.postalCode && <p className="text-red-500 text-xs font-bold mt-1.5">{formErrors.postalCode}</p>}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Shipping Method */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping method</h2>
                                <div className="border border-gray-300 rounded-lg overflow-hidden divide-y divide-gray-300 bg-white">
                                    {shippingOptions.map((option) => (
                                        <label key={option.value} className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${deliveryInfo.deliveryOption === option.value ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                                            }`}>
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="delivery"
                                                    value={option.value}
                                                    checked={deliveryInfo.deliveryOption === option.value}
                                                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryOption: e.target.value })}
                                                    className="w-4 h-4 text-corporate-blue border-gray-300 focus:ring-corporate-blue cursor-pointer"
                                                />
                                                <div>
                                                    <span className="block text-sm font-medium text-gray-900">{option.label}</span>
                                                    <span className="block text-xs text-gray-500 mt-0.5">{option.desc}</span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">{option.price}</span>
                                        </label>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="w-full lg:w-[45%] xl:w-[40%] bg-[#f8f9fa] px-4 sm:px-8 lg:px-12 xl:px-16 pt-24 lg:pt-28 pb-16 order-1 lg:order-2 border-b lg:border-b-0 border-gray-200 lg:border-transparent">
                    <div className="max-w-md mx-auto lg:mr-auto lg:ml-8 w-full sticky top-28">
                        {/* Mobile Header (Shows only on mobile) */}
                        <div className="lg:hidden flex items-center gap-3 mb-8">
                            <ShoppingBag className="h-6 w-6 text-corporate-blue" />
                            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Checkout</h1>
                        </div>

                        {/* Items List */}
                        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div className="relative h-16 w-16 rounded-lg border border-gray-200 bg-white flex-shrink-0">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-1" unoptimized />
                                        ) : (
                                            <ShoppingBag className="m-auto h-6 w-6 text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                        <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-[11px] font-bold z-10 shadow-sm border border-white">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                                        <div className="text-xs text-gray-500 uppercase mt-0.5">{item.model}</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-sm font-medium text-gray-900">LKR {item.price}</div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            title="Remove Item"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Subtotals */}
                        <div className="py-4 border-y border-gray-200 space-y-3 mb-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium text-gray-900">LKR {totalAmount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium text-gray-900">{shippingCost === 0 ? 'Free' : `LKR ${shippingCost.toLocaleString()}`}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium text-gray-900">Calculated at next step</span>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-base font-semibold text-gray-900">Total</span>
                            <div className="flex items-end gap-2">
                                <span className="text-xs text-gray-500 mb-1">LKR</span>
                                <span className="text-2xl font-semibold text-gray-900">{finalTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePayNow}
                            disabled={isProcessing}
                            className={`w-full bg-corporate-blue text-white py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-md flex items-center justify-center gap-3 active:scale-[0.98] ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isProcessing ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Pay LKR {finalTotal.toLocaleString()}
                                </>
                            )}
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs font-medium">
                            <ShieldCheck className="h-4 w-4 text-gray-400" />
                            Secure 256-bit encrypted checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
