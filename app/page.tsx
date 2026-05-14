'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Users, ShoppingCart, CreditCard, BarChart3, UserPlus, Database, Rocket, Globe, ShieldCheck } from 'lucide-react';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/portal/public?fields=brands')
      .then(res => res.json())
      .then(data => {
        if (data && data.brands) {
          setBrands(data.brands);
        }
      })
      .catch(err => console.error('Error fetching brands:', err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Light Professional Hero - Reverted style but condensed */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-corporate-blue/10 text-corporate-blue px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <ShoppingCart className="h-3 w-3" />
                <span>Enterprise POS Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Modern Operations.<br />
                <span className="text-corporate-blue">Reliable Growth.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
                Deploy high-performance Point of Sale infrastructure designed for retail and hospitality in Sri Lanka.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group bg-corporate-blue text-white px-8 py-4 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 inline-flex items-center justify-center shadow-xl shadow-blue-500/10 transform hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group border border-slate-200 text-slate-600 px-8 py-4 rounded-lg font-black text-[11px] uppercase tracking-widest hover:border-corporate-blue hover:text-corporate-blue transition-all duration-300 inline-flex items-center justify-center bg-white"
                >
                  Our Solutions
                </Link>
              </div>

              {/* Trust Sub-section */}
              <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start opacity-70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">50+ Active Merchants</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-corporate-blue" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secure & Reliable</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[450px] w-full group">
                <Image
                  src="https://queuebuster.co/_next/image?url=%2Fassets%2FEnterprise%2Fhero-img.png&w=3840&q=75"
                  alt="Enterprise POS"
                  fill
                  className="object-contain transform transition-transform duration-700"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Section - Full Color & Large */}
      {brands.length > 0 && (
        <section className="py-16 bg-white border-y border-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center flex-wrap gap-x-20 gap-y-12 items-center">
              {brands.map((brand: any, idx: number) => (
                <div key={idx} className="inline-flex items-center justify-center group/brand transition-transform duration-500 hover:scale-110">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 md:h-24 w-auto object-contain max-w-[250px] md:max-w-[350px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Workflow Section - Reduced Padding */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Launch Strategy.</h2>
            <div className="h-1 w-10 bg-corporate-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">A refined three-step onboarding process</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', icon: UserPlus, title: 'Identity Setup', desc: 'Securely initialize your merchant account and operational parameters.' },
              { id: '02', icon: Database, title: 'Data Migration', desc: 'Automated ingestion of your inventory and sales logs with zero downtime.' },
              { id: '03', icon: Rocket, title: 'Growth Launch', desc: 'Activate your system with direct local support and ongoing optimizations.' }
            ].map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 group"
              >
                <div className="w-10 h-10 bg-blue-50 text-corporate-blue rounded flex items-center justify-center mb-6 group-hover:bg-corporate-blue group-hover:text-white transition-colors">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      {/* CTA Section - Condensed */}
      <section className="py-24 bg-corporate-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Modernize your checkout experience.</h2>
            <p className="text-blue-100 font-bold mb-10 text-sm">Join the network of forward-thinking merchants in Sri Lanka.</p>
            <Link
              href="/contact"
              className="group bg-white text-corporate-blue px-10 py-4 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 inline-flex items-center shadow-2xl shadow-black/10 transform hover:-translate-y-0.5"
            >
              Start Free Consultation
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
