'use client';

import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { cart, removeFromCart, totalAmount, clearCart } = useCart();
    const router = useRouter();

    const handlePayNow = () => {
        // Here we would typically integrate with PayHere
        // For now, we'll just show an alert or proceed to a success page
        alert('Redirecting to PayHere Payment Gateway...');
        clearCart();
        router.push('/');
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
                    {/* Item List */}
                    <div className="lg:col-span-2 space-y-6">
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
                                className="w-full bg-gray-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-corporate-blue transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                            >
                                <CreditCard className="h-6 w-6" />
                                Pay with PayHere
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
