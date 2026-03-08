'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Star, Monitor, Printer, ScanLine,
  Package, Loader2, ShieldCheck, Zap, Layers, Globe,
  ChevronRight, Smartphone, LayoutPanelTop, HeartPulse
} from 'lucide-react';

export default function POSPricing() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal');
        const json = await res.json();
        if (json.pricing) setData(json.pricing);
      } catch (e) {
        console.error('Failed to fetch pricing', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin mb-4" />
        <p className="text-gray-400 font-medium">Loading POS Infrastructure...</p>
      </div>
    );
  }

  const pricingPlans = data || [
    {
      title: 'Desktop Basic',
      price: '25,000',
      description: '100% Offline performance. No internet required.',
      isRecommended: false,
      features: [
        'Lifetime Core License',
        'Works 100% Offline',
        'Fast Billing Logic',
        'Integrated AI Support',
        'Inventory Tracking',
        'Standard PDF Reporting'
      ]
    },
    {
      title: 'Hybrid Pro',
      price: '45,000',
      description: 'The best of both worlds. Local + Cloud sync.',
      isRecommended: true,
      features: [
        'Real-time Cloud Sync',
        'Mobile Sales Dashboard',
        'Auto Cloud Backups',
        'WhatsApp Receipts',
        'Customer Profile Management',
        'Inventory Alerts'
      ]
    },
    {
      title: 'Cloud Enterprise',
      price: '85,000',
      description: 'Scalable management for multi-branch chains.',
      isRecommended: false,
      features: [
        'Multi-shop Central Control',
        'Global Inventory View',
        'Super Power AI Analytics',
        'API & Webhook Access',
        'Dedicated Cloud Support',
        'Priority 2h SLA'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Industry standard "Split" design */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/20"
              >
                <Zap className="h-4 w-4 fill-blue-400" />
                <span>Modern Retail Ecosystems</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                The Last POS System You'll <span className="text-blue-500 text-glow">Ever Need.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 font-medium leading-relaxed max-w-2xl">
                Engineered for speed, built for scale. Our point-of-sale solutions combine military-grade reliability with an intuitive interface your staff will love.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Request Demo
                </Link>
                <div className="flex items-center gap-2 text-slate-500 font-bold">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span>Free Site Audit Included</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
                <Image
                  src="https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg"
                  alt="POS Dashboard Preview"
                  width={800}
                  height={600}
                  className="rounded-[2.5rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                    <div className="text-white font-black uppercase tracking-widest text-[10px]">System Status: Ready</div>
                  </div>
                  <div className="text-white/40 font-black text-[10px]">ULTRA-LOW LATENCY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-12 border-b border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
          <span className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">Inventory++</span>
          <span className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">CloudSync</span>
          <span className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">ScanMaster</span>
          <span className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">PaySafe</span>
        </div>
      </div>

      {/* Software Licensing Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Software Licensing Plans</h2>
            <p className="text-gray-500 font-bold">Subscription-free core licenses. One-time payment, lifetime ownership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan: any, index: number) => (
              <div key={plan.title} className={`relative bg-white rounded-[2.5rem] p-10 border ${plan.isRecommended ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/10' : 'border-slate-100 hover:border-slate-200'} transition-all flex flex-col group`}>
                {plan.isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Recommended
                  </div>
                )}

                <div className="mb-10 text-center">
                  <h3 className="text-lg font-black text-slate-400 uppercase tracking-widest mb-1">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-black text-slate-400 uppercase">LKR</span>
                    <span className="text-6xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                  </div>
                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-2 px-4 py-1 bg-blue-50 rounded-full inline-block group-hover:bg-blue-500 group-hover:text-white transition-colors">Perpetual License</div>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature: string) => (
                    <div key={feature} className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-600 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={`w-full py-5 rounded-2xl font-black text-center text-sm transition-all active:scale-95 ${plan.isRecommended ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-700 shadow-blue-600/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Secure This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Configuration - High Impact Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs mb-4">
                <Monitor className="h-4 w-4" />
                <span>Hardware Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Industrial Grade Hardware.</h2>
              <p className="text-slate-500 font-bold leading-relaxed text-lg">We supply industry-leading brands like Beldon and XPrinter, vetted for 24/7 reliability in the most demanding retail and restaurant environments.</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <Link href="/hardware" className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 text-sm font-black text-slate-900 hover:bg-slate-50 transition-all shadow-sm group">
                Browse Full Catalog
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">Shipping Status</div>
                  <div className="text-sm font-black text-green-600 uppercase">Available Now</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature Component 1 - Terminals */}
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-none italic">Touch<br />Terminals</h3>
                  <p className="text-slate-500 font-bold mb-8 italic">Beldon BN-SP999 series featuring high-performance i7 processors and dual-touch displays.</p>
                  <ul className="space-y-3 mb-8">
                    {['Capacitive Touch', 'Aluminum Cast Stand', 'Industrial i7 Core'].map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-sm font-black text-slate-800">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-black text-blue-600 tracking-tighter">Starting LKR 162,400</div>
                </div>
                <div className="w-56 h-56 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-700 font-black">
                  <Image src="https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg" alt="Terminal" fill className="object-contain rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Feature Component 2 - Printing */}
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-none italic">Thermal<br />Eco-System</h3>
                  <p className="text-slate-500 font-bold mb-8 italic">XPrinter high-speed bill and label systems for seamless high-volume operation.</p>
                  <ul className="space-y-3 mb-8">
                    {['250mm/s Auto-Cut', 'LAN / Wifi Support', 'Anti-Jamming Gear'].map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-sm font-black text-slate-800">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-black text-blue-600 tracking-tighter">Starting LKR 13,500</div>
                </div>
                <div className="w-56 h-56 relative flex-shrink-0 group-hover:-translate-y-4 transition-transform duration-700">
                  <Image src="https://elitepos.lk/wp-content/uploads/2026/01/WhatsApp-Image-2024-11-28-at-17.10.37_1a90d96d.jpg" alt="Printer" fill className="object-contain rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Dashboard Comparison Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Centralized Control for Every <span className="text-blue-500">Business Size.</span></h2>

              <div className="space-y-8">
                {[
                  { title: 'Cloud Dashboard', desc: 'Real-time analytics across all branches from your mobile.', icon: LayoutPanelTop },
                  { title: 'Offline Operations', desc: 'Network failure? No problem. Ring up sales offline.', icon: Smartphone },
                  { title: 'Inventory Intel', desc: 'Automated re-order points and waste calculation.', icon: Layers }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group cursor-default">
                    <div className="h-16 w-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-blue-600 group-hover:border-blue-500">
                      <item.icon className="h-8 w-8 text-blue-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square lg:aspect-auto h-[600px] border border-white/10 rounded-[3rem] overflow-hidden bg-black/40 shadow-2xl">
              <Image
                src="https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg"
                alt="POS in action"
                fill
                className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-xl">R</div>
                    <div>
                      <div className="text-white font-black tracking-tight leading-none uppercase text-lg italic">Revolvit OS</div>
                      <div className="text-blue-400 font-black text-[10px] tracking-widest uppercase">Verified System Partner</div>
                    </div>
                  </div>
                  <p className="text-white/60 font-medium italic">"The transition to Revolvit's cloud-enabled hardware saved us 40 hours of manual reconciliation every month."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-tight">Ready to modernise your checkout experience?</h2>
            <p className="text-xl text-slate-500 font-bold mb-12 leading-relaxed italic">Join 500+ Sri Lankan businesses who switched to Revolvit for zero-latency point of sale infrastructure.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-2xl active:scale-95 flex items-center gap-3 group">
                Get My Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="bg-blue-50 text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-100 transition-all active:scale-95">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">REVOLVIT POS INFRASTRUCTURE · 2024 GLOBAL STANDARDS</p>
      </footer>
    </div>
  );
}
