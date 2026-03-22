'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Code, Globe, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function MobilePricing() {
  const plans = [
    {
      title: 'Startup Launch',
      price: '200,000',
      description: 'Perfect for validating your idea on a single platform.',
      icon: Smartphone,
      features: [
        'Single Platform (iOS or Android)',
        'Modern UI/UX Design (Up to 8 screens)',
        'Core Functionality & Business Logic',
        'Email/Social Auth Integration',
        'Basic API Connectivity',
        'App Store Submission Support',
        '3 Months Maintenance SLA'
      ]
    },
    {
      title: 'Growth Pro',
      price: '450,000',
      description: 'Cross-platform excellence for scaling businesses.',
      icon: Tablet,
      isRecommended: true,
      features: [
        'Hybrid Development (iOS & Android)',
        'Premium UX with Custom Animations',
        'Unlimited Screens & Workflows',
        'Push Notifications & Cloud Messaging',
        'Advanced Analytics Dashboard',
        'Payment Gateway Integration',
        '6 Months Priority Support'
      ]
    },
    {
      title: 'Enterprise Suite',
      price: 'Custom',
      description: 'Bespoke mobile infrastructure for global reach.',
      icon: Code,
      features: [
        'Full Native Performance (Swift/Kotlin)',
        'Complex Third-Party Integrations',
        'Military-Grade Security Layers',
        'Scalable Microservices Backend',
        'Real-time Data Synchronization',
        'Dedicated Project Lead',
        'Ongoing Lifetime Maintenance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-corporate-blue/5 text-corporate-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-corporate-blue/10"
            >
              <Sparkles className="h-4 w-4" />
              <span>Premium Mobile Engineering</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
              Apps that <span className="text-corporate-blue">Convert.</span><br />
              Experiences that <span className="text-indigo-600">Stick.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              From high-performance native Swift & Kotlin apps to cost-effective React Native solutions, we build mobile entry points that drive business growth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-gray-400">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-500" /> High Performance</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> Secure by Default</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-blue-500" /> Global Scalability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-[3rem] p-10 border ${plan.isRecommended ? 'border-2 border-corporate-blue shadow-2xl shadow-blue-500/10' : 'border-gray-100 hover:border-gray-200'} transition-all flex flex-col group`}
              >
                {plan.isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-corporate-blue text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corporate-blue group-hover:text-white transition-all">
                    <plan.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{plan.title}</h3>
                  <div className="text-sm font-bold text-gray-400 mb-6">{plan.description}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-black text-gray-400 uppercase">LKR</span>
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                    <span className="text-xs font-black text-gray-400 ml-1">Starting</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-100 fill-corporate-blue flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-700 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={`w-full py-5 rounded-2xl font-black text-center text-sm transition-all active:scale-95 ${plan.isRecommended ? 'bg-corporate-blue text-white shadow-xl hover:shadow-blue-500/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Initiate Project
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Bar */}
          <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black mb-4 tracking-tight">Our Technology Stack</h3>
                <p className="text-gray-400 font-bold leading-relaxed">We utilize industry-leading frameworks to ensure your application is fast, secure, and maintainable.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-60">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400 mb-1 leading-none">Swift</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Native iOS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400 mb-1 leading-none">Kotlin</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Native Android</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-sky-400 mb-1 leading-none">React</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Cross-Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-500 mb-1 leading-none">Flutter</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Google UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-8">Ready to put your business in their pockets?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-corporate-blue text-white px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-95 group">
            Consult our Mobile Experts
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

