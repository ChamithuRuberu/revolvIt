'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ShoppingCart, Shield, Lock, CreditCard, Smartphone,
  Building2, CheckCircle2, ArrowLeft, Loader2, AlertCircle,
  Package, Tag, Receipt, Sparkles
} from 'lucide-react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  type: 'software' | 'hardware' | 'bundle';
}

const PAYHERE_ACTION_URL = process.env.NEXT_PUBLIC_PAYHERE_SANDBOX === 'true'
  ? 'https://sandbox.payhere.lk/pay/checkout'
  : 'https://www.payhere.lk/pay/checkout';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.greencodesolution.web.lk';

// Available products catalog
const PRODUCT_CATALOG: Record<string, { name: string; price: number; type: CartItem['type'] }> = {
  'lite': { name: 'POS Lite License', price: 24900, type: 'software' },
  'pro': { name: 'POS Pro License', price: 44900, type: 'software' },
  'max': { name: 'POS Max License', price: 69900, type: 'software' },
  'desktop-core': { name: 'Desktop Core License', price: 25000, type: 'software' },
  'hybrid-pro': { name: 'Hybrid Professional License', price: 45000, type: 'software' },
  'enterprise': { name: 'Enterprise Cloud License', price: 85000, type: 'software' },
  'restaurant': { name: 'Restaurant Elite License', price: 55000, type: 'software' },
  'essential-bundle': { name: 'Essential Starter Bundle', price: 95000, type: 'bundle' },
  'retail-bundle': { name: 'Retail Pro Bundle', price: 145000, type: 'bundle' },
  'restaurant-bundle': { name: 'Restaurant Bundle', price: 185000, type: 'bundle' },
  'supermarket-bundle': { name: 'Supermarket Elite Bundle', price: 320000, type: 'bundle' },
  'desktop-bundle': { name: 'Desktop Setup Bundle', price: 75000, type: 'hardware' },
  'touch-bundle': { name: 'Touch Setup Bundle', price: 175000, type: 'hardware' },
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [paymentData, setPaymentData] = useState<{
    merchant_id: string;
    hash: string;
    order_id: string;
  } | null>(null);

  // Initialize cart from URL params
  useEffect(() => {
    const product = searchParams.get('product');
    const billing = searchParams.get('billing') || 'lifetime';
    if (product && PRODUCT_CATALOG[product]) {
      const catalogItem = PRODUCT_CATALOG[product];
      setCartItems([{
        name: catalogItem.name + (billing === 'monthly' ? ' (Monthly)' : ' (Lifetime)'),
        price: billing === 'monthly' 
          ? (product === 'lite' ? 2490 : product === 'pro' ? 4490 : product === 'max' ? 7490 : catalogItem.price / 10)
          : catalogItem.price,
        quantity: 1,
        type: catalogItem.type,
      }]);
    }
  }, [searchParams]);

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `GCS-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (cartItems.length === 0) {
      setError('Your cart is empty. Please select a product.');
      return;
    }
    if (!customerInfo.first_name || !customerInfo.last_name || !customerInfo.email || !customerInfo.phone) {
      setError('Please fill in all required customer details.');
      return;
    }

    setIsProcessing(true);

    try {
      const order_id = generateOrderId();
      const amount = totalAmount.toFixed(2);
      const currency = 'LKR';

      // Generate hash from server
      const response = await fetch('/api/payhere/generate-hash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id, amount, currency }),
      });

      if (!response.ok) {
        throw new Error('Failed to initialize payment');
      }

      const data = await response.json();

      setPaymentData({
        merchant_id: data.merchant_id,
        hash: data.hash,
        order_id,
      });

      // Small delay to ensure state updates, then submit the hidden form
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.submit();
        }
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-LK');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3c] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/pricing" className="inline-flex items-center text-blue-300 hover:text-white mb-4 transition-colors duration-300 text-sm font-bold">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pricing
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-corporate-blue/20 flex items-center justify-center">
              <ShoppingCart className="h-7 w-7 text-corporate-blue-light" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">Secure Checkout</h1>
              <p className="text-slate-400 font-bold text-sm mt-1">Complete your purchase securely with PayHere</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left Column - Customer Form */}
          <div className="lg:col-span-3">
            {/* Error Banner */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-fadeInUp">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-bold text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Customer Details Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-corporate-blue text-white flex items-center justify-center text-sm font-black">1</div>
                  <h2 className="text-lg font-black text-slate-900">Customer Details</h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.first_name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, first_name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="Kamal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.last_name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, last_name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="Perera"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="kamal@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="077 123 4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Business Address</label>
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="123 Galle Road"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">City</label>
                    <input
                      type="text"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-corporate-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300"
                      placeholder="Colombo"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden mt-6">
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-corporate-blue text-white flex items-center justify-center text-sm font-black">2</div>
                  <h2 className="text-lg font-black text-slate-900">Payment Method</h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* PayHere Gateway Info */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-corporate-blue" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm mb-1">Powered by PayHere</p>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">
                        Your payment is processed securely through PayHere, Sri Lanka&apos;s leading PCI-DSS compliant payment gateway. 
                        We never store your card details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accepted Payment Methods */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { icon: CreditCard, label: 'Visa / Mastercard', sublabel: 'Credit & Debit' },
                    { icon: Smartphone, label: 'Mobile Banking', sublabel: 'All major banks' },
                    { icon: Building2, label: 'Bank Transfer', sublabel: 'Direct payment' },
                    { icon: Tag, label: 'KOKO', sublabel: 'Buy now, pay later' },
                  ].map((method, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center hover:border-corporate-blue/30 transition-colors">
                      <method.icon className="h-5 w-5 text-corporate-blue mx-auto mb-2" />
                      <p className="text-xs font-black text-slate-900">{method.label}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{method.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isProcessing || cartItems.length === 0}
              className="w-full mt-6 py-5 rounded-2xl font-black text-lg text-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed bg-corporate-blue text-white hover:bg-corporate-blue-dark shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Pay LKR {formatPrice(totalAmount)} Securely
                </>
              )}
            </button>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-6 mt-4 opacity-60">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Lock className="h-3 w-3" /> SSL Encrypted
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Shield className="h-3 w-3" /> PCI-DSS Certified
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <CheckCircle2 className="h-3 w-3" /> Verified Merchant
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-28">
              <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="flex items-center gap-3">
                  <Receipt className="h-5 w-5 text-blue-400" />
                  <h2 className="text-lg font-black">Order Summary</h2>
                </div>
              </div>

              <div className="p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-sm font-bold text-slate-400">Your cart is empty</p>
                    <Link href="/pricing" className="text-xs font-black text-corporate-blue mt-2 inline-block hover:underline">
                      Browse Products →
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="flex items-start gap-3">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              item.type === 'software' ? 'bg-blue-100 text-corporate-blue' :
                              item.type === 'bundle' ? 'bg-purple-100 text-purple-600' :
                              'bg-amber-100 text-amber-600'
                            }`}>
                              {item.type === 'software' ? <Sparkles className="h-5 w-5" /> :
                               item.type === 'bundle' ? <Package className="h-5 w-5" /> :
                               <Package className="h-5 w-5" />}
                            </div>
                            <div>
                              <p className="text-sm font-black text-slate-900">{item.name}</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                {searchParams.get('billing') === 'monthly' ? 'Monthly Subscription' : 'Lifetime License'} × {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm font-black text-slate-900 whitespace-nowrap">LKR {formatPrice(item.price * item.quantity)}</p>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t-2 border-dashed border-slate-100 my-6"></div>

                    {/* Subtotal */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-500">Subtotal</span>
                        <span className="text-sm font-black text-slate-900">LKR {formatPrice(totalAmount)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-500">Shipping</span>
                        <span className="text-sm font-black text-green-600">Free</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-500">Installation</span>
                        <span className="text-sm font-black text-green-600">Included</span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-corporate-blue to-blue-700 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Total Amount</p>
                          <p className="text-3xl font-black tracking-tight mt-1">LKR {formatPrice(totalAmount)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Billing Cycle</p>
                          <p className="text-2xl font-black tracking-tight mt-1 uppercase">
                            {searchParams.get('billing') === 'monthly' ? 'Monthly' : 'One-Time'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-6 space-y-3">
                      {[
                        'Lifetime license - No monthly fees',
                        'Free on-site installation & training',
                        '12-month priority support included',
                        '14-day money-back guarantee',
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs font-bold text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Policy Links */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold text-center leading-relaxed">
                  By completing this purchase, you agree to our{' '}
                  <Link href="/policies/terms-and-conditions" className="text-corporate-blue hover:underline">Terms & Conditions</Link>,{' '}
                  <Link href="/policies/privacy-policy" className="text-corporate-blue hover:underline">Privacy Policy</Link>, and{' '}
                  <Link href="/policies/return-policy" className="text-corporate-blue hover:underline">Return Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden PayHere Form - submitted programmatically */}
      {paymentData && (
        <form
          ref={formRef}
          method="POST"
          action={PAYHERE_ACTION_URL}
          style={{ display: 'none' }}
        >
          <input type="hidden" name="merchant_id" value={paymentData.merchant_id} />
          <input type="hidden" name="return_url" value={`${BASE_URL}/checkout/success`} />
          <input type="hidden" name="cancel_url" value={`${BASE_URL}/checkout/cancel`} />
          <input type="hidden" name="notify_url" value={`${BASE_URL}/api/payhere/notify`} />
          <input type="hidden" name="order_id" value={paymentData.order_id} />
          <input type="hidden" name="items" value={cartItems.map(i => i.name).join(', ')} />
          <input type="hidden" name="currency" value="LKR" />
          <input type="hidden" name="amount" value={totalAmount.toFixed(2)} />
          <input type="hidden" name="first_name" value={customerInfo.first_name} />
          <input type="hidden" name="last_name" value={customerInfo.last_name} />
          <input type="hidden" name="email" value={customerInfo.email} />
          <input type="hidden" name="phone" value={customerInfo.phone} />
          <input type="hidden" name="address" value={customerInfo.address || 'N/A'} />
          <input type="hidden" name="city" value={customerInfo.city || 'Colombo'} />
          <input type="hidden" name="country" value="Sri Lanka" />
          <input type="hidden" name="hash" value={paymentData.hash} />
        </form>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
