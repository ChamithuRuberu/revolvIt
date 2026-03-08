'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Building2, Shield, Database, Users, Globe, Zap, ShieldCheck, Server, Cpu } from 'lucide-react';

export default function EnterprisePricing() {
  return (
    <div className="min-h-screen bg-slate-50/30">
      {/* Hero Section - Executive Style */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 pointer-events-none opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Enterprise Ready · Global Scale</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] lg:leading-[0.85]">
              Architected for <span className="text-corporate-blue">Global</span> Operations.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 border-l-4 border-slate-200 pl-8">
              Reliable, secure, and infinitely scalable systems for organizations that demand nothing less than perfection. We bridge the gap between complex legacy data and modern cloud performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="bg-corporate-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-95 text-center">
                Talk to a Systems Architect
              </Link>
              <Link href="/portfolio" className="text-slate-900 px-10 py-5 rounded-2xl font-black text-lg border-2 border-slate-100 hover:bg-slate-50 transition-all text-center">
                Review Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Uptime SLA', val: '99.99%', icon: Zap },
              { label: 'Data Encryption', val: 'AES-256', icon: Shield },
              { label: 'Global Nodes', val: '50+', icon: Globe },
              { label: 'Support SLA', val: '2-Hour', icon: Users }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-corporate-blue group-hover:text-white transition-all">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</div>
                </div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest pl-14">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers - Large Visual Cards */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Starter',
                icon: Building2,
                desc: 'Perfect for mid-size organizations scaling their digital infrastructure.',
                features: ['Multi-branch management', 'Up to 50 user accounts', 'Advanced reporting & analytics', 'Cloud infrastructure', 'Core API integrations']
              },
              {
                title: 'Professional Suite',
                icon: Shield,
                desc: 'The gold standard for multi-regional enterprises requiring bespoke security.',
                popular: true,
                features: ['Unlimited branches', 'Unlimited user accounts', 'Custom ERP integrations', 'Dedicated production server', '24/7 Priority Support Desk', 'Dedicated Account Manager']
              },
              {
                title: 'Global Enterprise',
                icon: Database,
                desc: 'Bespoke infrastructure engineering for global distribution chains.',
                features: ['Global deployment nodes', 'White-label source options', 'Custom core development', 'Bare-metal infrastructure', 'Custom SLA Guarantees', 'On-site Engineering Support']
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-white rounded-[3rem] p-12 border ${plan.popular ? 'border-2 border-corporate-blue ring-8 ring-corporate-blue/5 shadow-2xl' : 'border-slate-100 hover:border-slate-300'} transition-all flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-12 -translate-y-1/2 bg-corporate-blue text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Most Selected
                  </div>
                )}

                <div className="mb-10">
                  <div className={`h-16 w-16 rounded-[1.5rem] flex items-center justify-center mb-8 border transition-all ${plan.popular ? 'bg-corporate-blue text-white border-corporate-blue' : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900'}`}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">{plan.title}</h3>
                  <div className="text-sm font-bold text-slate-400 leading-relaxed mb-8">{plan.desc}</div>
                  <div className="text-4xl font-black text-corporate-blue mb-2 tracking-tighter uppercase italic">Custom Quote</div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Billed according to SLA</div>
                </div>

                <div className="flex-1 space-y-4 mb-12">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex gap-4">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={`w-full py-5 rounded-2xl font-black text-center text-sm transition-all active:scale-95 ${plan.popular ? 'bg-corporate-blue text-white shadow-xl shadow-blue-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
                  Inquire About {plan.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Serverless Core', desc: 'Auto-scaling nodes that handle millions of requests without breaking a sweat.', icon: Server },
                { title: 'Real-time Sync', desc: 'Proprietary sync engine for instant multi-branch data consistency.', icon: Zap },
                { title: 'Edge Analytics', desc: 'Process massive datasets directly where they are generated for instant insights.', icon: Cpu },
                { title: 'SLA Guarantee', desc: 'We don\'t just promise uptime; we back it with legally binding penalties.', icon: ShieldCheck }
              ].map((pill, i) => (
                <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 group hover:border-corporate-blue/20 transition-all">
                  <pill.icon className="h-10 w-10 text-corporate-blue mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-black text-slate-800 mb-2">{pill.title}</h4>
                  <p className="text-sm font-bold text-slate-400 leading-relaxed">{pill.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">Infrastructure Built for <span className="text-corporate-blue">Generational</span> Stability.</h2>
              <p className="text-lg text-slate-500 font-bold mb-10 leading-relaxed italic">
                "Revolvit didn't just provide a software package; they re-engineered our entire digital backbone. Our system capacity increased by 400% in the first quarter."
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400">J</div>
                <div>
                  <div className="text-slate-900 font-black tracking-tight leading-none uppercase italic">Jameson K.</div>
                  <div className="text-slate-400 font-black text-[10px] tracking-widest uppercase">CTO · Logistics Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Building2 className="h-[800px] w-[800px] absolute -top-40 -left-40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-none uppercase italic">Scale Beyond <br /><span className="text-corporate-blue">Boundaries.</span></h2>
          <Link href="/contact" className="bg-white text-slate-900 px-16 py-6 rounded-[2rem] font-black text-xl hover:bg-corporate-blue hover:text-white transition-all shadow-2xl active:scale-95 inline-flex items-center gap-4 group">
            Start Your Engineering Consult
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100/5 bg-slate-900 text-center">
        <p className="text-xs font-black text-slate-600 uppercase tracking-[0.3em]">REVOLVIT ENTERPRISE · ISO 27001 CERTIFIED PIPELINES</p>
      </footer>
    </div>
  );
}
