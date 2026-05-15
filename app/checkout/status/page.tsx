'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function StatusChecker() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const order_id = searchParams.get('order_id');

      if (!order_id) {
        router.push('/checkout');
        return;
      }

      try {
        // Wait a moment for the notification callback to be processed
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch(`/api/directpay/status?order_id=${order_id}`);
        const data = await response.json();

        if (data.status === 'success' || data.status === 'SUCCESS') {
          router.push(`/checkout/success?gateway=directpay&order_id=${order_id}`);
        } else if (data.status === 'failed' || data.status === 'FAILED') {
          const reason = encodeURIComponent(data.message || 'Payment failed');
          router.push(`/checkout/fail?gateway=directpay&order_id=${order_id}&reason=${reason}`);
        } else if (data.status === 'cancelled' || data.status === 'CANCELLED') {
          router.push(`/checkout/cancel?gateway=directpay&order_id=${order_id}`);
        } else {
          // Pending - try again
          setTimeout(checkPaymentStatus, 2000);
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        // If there's an error, redirect to the checkout page
        router.push('/checkout');
      }
    };

    checkPaymentStatus();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-block">
            <div className="relative h-28 w-28 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30">
              <svg className="animate-spin h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Confirming Payment...
        </h1>
        <p className="text-xl text-slate-500 font-bold mb-8 max-w-lg mx-auto leading-relaxed">
          Please wait while we confirm your payment status. This may take a few moments.
        </p>
      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-white flex items-center justify-center">
        <div className="text-center">
          <div className="h-28 w-28 bg-blue-100 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-slate-500 font-bold">Loading...</p>
        </div>
      </div>
    }>
      <StatusChecker />
    </Suspense>
  );
}

