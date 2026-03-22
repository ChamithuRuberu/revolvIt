'use client';

import Link from 'next/link';
import { XCircle, ArrowLeft, MessageSquare, RefreshCw, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-red-50/50 via-white to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Cancel Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-400 rounded-full blur-3xl opacity-10"></div>
            <div className="relative h-28 w-28 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-slate-500/20">
              <XCircle className="h-14 w-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-slate-500 font-bold mb-8 max-w-lg mx-auto leading-relaxed">
            No worries! Your payment was not processed and no charges were made to your account.
          </p>
        </motion.div>

        {/* Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 mb-8"
        >
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-corporate-blue" />
            Having Issues?
          </h3>
          <div className="space-y-4 text-left">
            {[
              {
                icon: RefreshCw,
                title: 'Try Again',
                desc: 'If you experienced a technical issue, you can retry the payment.',
                color: 'text-blue-500',
              },
              {
                icon: MessageSquare,
                title: 'Need Help?',
                desc: 'Our team is available on WhatsApp to assist you with any payment-related questions.',
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
            className="bg-corporate-blue text-white px-8 py-4 rounded-2xl font-black text-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center gap-2"
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
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
