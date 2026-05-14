'use client';

import Link from 'next/link';
import { AlertCircle, ArrowLeft, MessageSquare, RefreshCw, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function PaymentFail() {
  const searchParams = useSearchParams();
  const failureReason = searchParams.get('reason') || 'Payment Failed';
  const orderId = searchParams.get('order_id') || '';

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-red-50 via-white to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Error Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative h-28 w-28 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-red-500/30">
              <AlertCircle className="h-14 w-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Payment Failed
          </h1>
          <p className="text-xl text-slate-500 font-bold mb-2 max-w-lg mx-auto leading-relaxed">
            Unfortunately, your payment could not be processed.
          </p>
          <p className="text-lg font-bold text-red-600 mb-8 max-w-lg mx-auto">
            Reason: {failureReason}
          </p>
          {orderId && (
            <p className="text-sm text-slate-400 mb-8">Order ID: {orderId}</p>
          )}
        </motion.div>

        {/* Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 mb-8"
        >
          <h3 className="text-lg font-black text-slate-900 mb-6">What Can You Do?</h3>
          <div className="space-y-4 text-left">
            {[
              {
                icon: RefreshCw,
                title: 'Retry Payment',
                desc: 'Please verify your payment details and try again.',
                color: 'text-blue-500',
              },
              {
                icon: Phone,
                title: 'Contact Support',
                desc: 'Our team can help troubleshoot payment issues.',
                color: 'text-green-500',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <item.icon className={`h-5 w-5 ${item.color} mt-0.5 flex-shrink-0`} />
                <div>
                  <p className="font-black text-slate-900 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500 font-bold mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/checkout"
            className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/20 transition-all flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Link>
          <Link
            href="/pricing"
            className="text-slate-600 border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pricing
          </Link>
          <a
            href="https://wa.me/94770000000"
            className="text-[#25D366] border-2 border-[#25D366]/20 px-8 py-4 rounded-2xl font-black text-sm hover:bg-[#25D366]/5 transition-all flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Chat Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}

