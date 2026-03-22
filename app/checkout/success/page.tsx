'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight, Download, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-green-50 via-white to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative h-28 w-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30">
              <CheckCircle2 className="h-14 w-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-slate-500 font-bold mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you for choosing Green Code Solution. Your order has been confirmed and our team will reach out shortly.
          </p>
        </motion.div>

        {/* Order Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 mb-8"
        >
          <h3 className="text-lg font-black text-slate-900 mb-6">What Happens Next?</h3>
          <div className="space-y-5 text-left">
            {[
              {
                step: '1',
                title: 'Order Confirmation Email',
                desc: 'You will receive an email with your order details and invoice within a few minutes.',
                color: 'bg-blue-100 text-corporate-blue',
              },
              {
                step: '2',
                title: 'Installation Scheduling',
                desc: 'Our technical team will contact you within 24 hours to schedule on-site installation.',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                step: '3',
                title: 'Setup & Training',
                desc: 'We will install and configure your system, followed by free staff training session.',
                color: 'bg-amber-100 text-amber-600',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center text-sm font-black flex-shrink-0`}>
                  {item.step}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500 font-bold mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900 rounded-3xl p-8 text-white mb-8"
        >
          <h3 className="text-lg font-black mb-4">Need Immediate Assistance?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="tel:+94770000000" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              <Phone className="h-4 w-4 text-green-400" />
              <span className="text-sm font-bold">Call Us</span>
            </a>
            <a href="https://wa.me/94770000000" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-colors">
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span className="text-sm font-bold">WhatsApp</span>
            </a>
            <a href="mailto:support@greencodesolution.web.lk" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              <Mail className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-bold">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="bg-corporate-blue text-white px-8 py-4 rounded-2xl font-black text-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            Return to Homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
