'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Monitor, Tablet, Zap, ShieldCheck, 
  PhoneCall, MessageSquare, ArrowRight, Info,
  TrendingDown, TrendingUp, HelpCircle, Check, X,
  Package, LayoutPanelTop, ShoppingCart, Clock, Award, Users,
  HeartPulse, Utensils, Store, Smartphone, MapPin, BadgePercent,
  History, Landmark, Gem
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function POSPricing() {
  const [setupType, setSetupType] = useState<'desktop' | 'touch'>('desktop');

  return (
    <div className="min-h-screen bg-white selection:bg-corporate-blue/10">
      
      {/* 1. HERO / HOOK SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1200px] bg-gradient-to-b from-corporate-blue/30 via-slate-900 to-slate-900 -z-10 rounded-b-[100%] blur-[120px] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-2xl"
          >
            <ShieldCheck className="h-4 w-4 text-corporate-blue-light" />
            <span className="text-xs font-black text-white uppercase tracking-[0.3em]">LKR 0 Monthly Fees · Lifetime Ownership</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] italic"
          >
            Own Your System.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-light to-blue-400">Never Pay Rent.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 font-medium mb-12 leading-relaxed"
          >
            The only system in Sri Lanka with a <strong className="text-white">True Lifetime License.</strong> No monthly fees, no annual renewals, and no currency fluctuation stress. Just <strong className="text-corporate-blue-light">100% Offline resilience</strong> your business can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="https://wa.me/94770000000" 
              className="bg-[#25D366] text-white px-12 py-6 rounded-3xl font-black text-xl hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:scale-105 transition-all flex items-center gap-4 group"
            >
              <WhatsAppIcon className="h-8 w-8" />
              Get Free Demo via WhatsApp
            </Link>
            <div className="text-left">
              <p className="text-white font-black text-lg">Trusted by 500+ Local Retailers</p>
              <p className="text-slate-500 font-bold text-sm italic">Sri Lankan company · Island-wide Support</p>
            </div>
          </motion.div>

          {/* Strategic Anchor Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 max-w-5xl mx-auto p-1 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="px-8 py-6 flex flex-wrap items-center justify-between gap-8 md:gap-4">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Typical SL POS Subscription</p>
                    <p className="text-slate-100 font-bold text-sm line-through">LKR 300,000+ over 5 years</p>
                  </div>
               </div>
               <div className="hidden md:block w-px h-10 bg-white/10" />
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-corporate-blue-light text-[10px] font-black uppercase tracking-widest">Revolvit Lifetime POS</p>
                    <p className="text-white font-black text-xl tracking-tighter italic">One-time from LKR 24,900</p>
                  </div>
               </div>
               <div className="bg-green-500/10 px-6 py-3 rounded-2xl border border-green-500/20">
                  <p className="text-green-400 text-xs font-black uppercase tracking-widest leading-none mb-1">Total Savings</p>
                  <p className="text-white font-black text-lg tracking-tight">Save LKR 255,100+</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR POS SETUP (REDUCING STICKER SHOCK) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">Step 1: Choose Your Experience</h2>
            <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed italic">The cost difference is driven by hardware. Select the physical foundation that fits your floor space and speed requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Desktop Option */}
            <motion.button
              whileHover={{ y: -8 }}
              onClick={() => setSetupType('desktop')}
              className={`relative p-12 rounded-[3.5rem] border-4 text-left transition-all overflow-hidden group ${
                setupType === 'desktop' ? 'bg-white border-corporate-blue shadow-[0_30px_60px_-15px_rgba(0,102,204,0.15)]' : 'bg-slate-200/40 border-transparent hover:border-slate-300'
              }`}
            >
              {setupType === 'desktop' && (
                 <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-blue/5 rounded-bl-[100%] transition-transform -translate-y-4 translate-x-4"></div>
              )}
              <div className={`h-20 w-20 rounded-[2rem] flex items-center justify-center mb-10 transition-colors ${setupType === 'desktop' ? 'bg-corporate-blue text-white shadow-lg shadow-corporate-blue/20' : 'bg-white text-slate-300'}`}>
                <Monitor className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Desktop Standard</h3>
              <p className="text-slate-500 font-bold mb-8 leading-relaxed italic">"The reliable workhorse for Pharmacists, Groceries & Retailers who want a massive display at the lowest cost."</p>
              
              <ul className="space-y-4 mb-10">
                {['Reliable i3/i5 Tower PC', 'Large 19" LED Monitor', 'Easily service/upgrade anywhere', 'Rugged industrial build'].map(feat => (
                  <li key={feat} className="flex items-center gap-4 text-base font-bold text-slate-700 italic">
                    <CheckCircle2 className={`h-5 w-5 ${setupType === 'desktop' ? 'text-corporate-blue' : 'text-slate-300'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-10 border-t border-slate-100 mt-auto">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Start Full Setup for</div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight italic">LKR ~114,800</div>
                </div>
                {setupType === 'desktop' ? (
                  <div className="bg-corporate-blue text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-corporate-blue/20">
                    Selected Setup <Check className="h-4 w-4" strokeWidth={4} />
                  </div>
                ) : (
                  <div className="bg-white text-slate-400 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                    Choose Setup
                  </div>
                )}
              </div>
            </motion.button>

            {/* Touch Option */}
            <motion.button
              whileHover={{ y: -8 }}
              onClick={() => setSetupType('touch')}
              className={`relative p-12 rounded-[3.5rem] border-4 text-left transition-all overflow-hidden group ${
                setupType === 'touch' ? 'bg-white border-corporate-blue shadow-[0_30px_60px_-15px_rgba(0,102,204,0.15)]' : 'bg-slate-200/40 border-transparent hover:border-slate-300'
              }`}
            >
              {setupType === 'touch' && (
                 <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-blue/5 rounded-bl-[100%] transition-transform -translate-y-4 translate-x-4"></div>
              )}
              <div className={`h-20 w-20 rounded-[2rem] flex items-center justify-center mb-10 transition-colors ${setupType === 'touch' ? 'bg-corporate-blue text-white shadow-lg shadow-corporate-blue/20' : 'bg-white text-slate-300'}`}>
                <Tablet className="h-10 w-10" />
              </div>
              <div className="absolute top-10 right-10 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-orange-200 shadow-sm italic">3x Faster Checkout</div>
              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Professional Touch</h3>
              <p className="text-slate-500 font-bold mb-8 leading-relaxed italic">"The speed king for busy Restaurants, Cafes & Boutiques. Spill-proof and space-saving."</p>
              
              <ul className="space-y-4 mb-10">
                {['High-Sensitivity Industrial Touch', 'Integrated Bill Printer', 'Fanless & Spill-Proof Design', 'Premium Customer Presence'].map(feat => (
                  <li key={feat} className="flex items-center gap-4 text-base font-bold text-slate-700 italic">
                    <CheckCircle2 className={`h-5 w-5 ${setupType === 'touch' ? 'text-corporate-blue' : 'text-slate-300'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-10 border-t border-slate-100 mt-auto">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Start Full Setup for</div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight italic">LKR ~189,800</div>
                </div>
                {setupType === 'touch' ? (
                  <div className="bg-corporate-blue text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-corporate-blue/20">
                    Selected Setup <Check className="h-4 w-4" strokeWidth={4} />
                  </div>
                ) : (
                  <div className="bg-white text-slate-400 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                    Choose Setup
                  </div>
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* 3. LIFETIME LICENSE SOFTWARE PLANS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 text-slate-900">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4 italic">Step 2: Choose Your Features</h2>
            <p className="text-xl text-slate-500 font-bold">Pick your permanent license. Pay once, own forever. <span className="text-corporate-blue border-b-2 border-corporate-blue italic">Zero monthly fees forever.</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Essential Lite */}
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col group hover:shadow-2xl transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200 rotate-45 translate-x-12 -translate-y-12 opacity-30"></div>
              <div className="mb-10 text-center">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-8 text-slate-400">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-2 italic">Essential Lite</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-sm font-black text-slate-400">LKR</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">24,900</span>
                </div>
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-8 border-2 border-blue-100 bg-blue-50/50 px-6 py-2 rounded-full inline-block">LKR 0/mo Lifetime</p>
                <p className="text-sm font-bold text-slate-500 italic leading-relaxed pt-8 border-t border-slate-200">"Modernize your grocery or small kiosk. Stop manual billing today."</p>
              </div>
              <div className="flex-1 space-y-4 mb-10">
                {['Direct Receipt Billing', 'Daily Sales Management', 'Offline Local Database', 'Standard Profit Reporting', 'Free Remote Install'].map(feat => (
                  <div key={feat} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-corporate-blue flex-shrink-0" />
                    <span className="text-sm font-black text-slate-700 italic">{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full py-6 rounded-2xl bg-slate-900 text-white font-black text-center text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10">
                Purchase Lite License
              </Link>
            </div>

            {/* Business Pro (Most Popular) */}
            <div className="p-12 rounded-[3.5rem] bg-white border-4 border-corporate-blue flex flex-col relative shadow-[0_45px_70px_-20px_rgba(0,102,204,0.2)] scale-105 z-20 group ring-4 ring-blue-50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-corporate-blue text-white px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl italic whitespace-nowrap">
                The Pharmacist's Peace of Mind · Most Popular
              </div>
              <div className="mb-10 text-center">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-8 text-corporate-blue shadow-sm">
                  <HeartPulse className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-corporate-blue uppercase tracking-widest mb-2 italic">Business Pro</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-sm font-black text-slate-400">LKR</span>
                  <span className="text-7xl font-black text-slate-900 tracking-tighter italic">44,900</span>
                </div>
                <p className="text-xs font-black text-white uppercase tracking-widest mb-8 bg-corporate-blue px-6 py-2.5 rounded-full inline-block shadow-lg shadow-corporate-blue/20">LKR 0/mo Lifetime</p>
                <p className="text-base font-bold text-slate-600 italic leading-relaxed pt-8 border-t border-slate-100">"Master your pharmacy or retail empire. Total stock intelligence."</p>
              </div>
              <div className="flex-1 space-y-5 mb-10">
                {['Advanced Expiry Tracking', 'Low-Stock Early Warnings', 'Loyalty Rewards & SMS', '24/7 Priority VIP Hotline', 'Batch & Serial Tracking'].map(feat => (
                  <div key={feat} className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-corporate-blue flex-shrink-0" />
                    <span className="text-base font-black text-slate-900 italic">{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full py-6 rounded-[2rem] bg-corporate-blue text-white font-black text-center text-sm uppercase tracking-widest hover:bg-corporate-blue-dark transition-all scale-105 shadow-2xl shadow-corporate-blue/30">
                Secure Pro License
              </Link>
            </div>

            {/* Specialist Max */}
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col group hover:shadow-2xl transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200 rotate-45 translate-x-12 -translate-y-12 opacity-30"></div>
              <div className="mb-10 text-center">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-8 text-slate-400">
                   <Utensils className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-2 italic">Specialist Max</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-sm font-black text-slate-400">LKR</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">74,900</span>
                </div>
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-8 border-2 border-blue-100 bg-blue-50/50 px-6 py-2 rounded-full inline-block">LKR 0/mo Lifetime</p>
                <p className="text-sm font-bold text-slate-500 italic leading-relaxed pt-8 border-t border-slate-200">"Build for the Restaurant Rush. Zero-latency multi-terminal speed."</p>
              </div>
              <div className="flex-1 space-y-4 mb-10">
                {['Visual Table Management', 'Direct Kitchen Printing (KOT)', 'Ingredient-Level Costing', 'Multi-Branch HQ Sync', 'Full Enterprise API Access'].map(feat => (
                  <div key={feat} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-corporate-blue flex-shrink-0" />
                    <span className="text-sm font-black text-slate-700 italic">{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full py-6 rounded-2xl bg-slate-900 text-white font-black text-center text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10">
                Choose Max License
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HARDWARE BUNDLES (LOWER SECTION) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4 italic">Optional: One-Time Hardware Bundles</h2>
            <p className="text-slate-400 font-bold max-w-2xl mx-auto">We've negotiated massive discounts with manufacturers to bring you curated, industrial-grade hardware at the best rates in SL.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Desktop Bundle */}
            <div className={`p-12 rounded-[3.5rem] bg-white/5 border-2 transition-all group ${setupType === 'desktop' ? 'border-corporate-blue ring-8 ring-blue-500/10' : 'border-white/10 opacity-70 hover:opacity-100'}`}>
              <div className="flex justify-between items-start mb-10">
                 <div>
                    <h4 className="text-3xl font-black text-white italic tracking-tighter mb-2">Desktop Starter Kit</h4>
                    <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest">
                       <Package className="h-3 w-3" /> Industrial Grade Parts
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Bundle Price</div>
                    <div className="text-3xl font-black text-white tracking-tight">LKR 89,900</div>
                 </div>
              </div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 mb-8 border border-white/10">
                  <Image src="https://elitepos.lk/wp-content/uploads/2026/02/WhatsApp-Image-2024-11-28-at-17.10.37_1a90d96d.jpg" alt="Desktop Bundle" fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {['i3/i5 Optimized PC', '80mm Thermal Printer', 'Automatic Blue-Steel Drawer', '1D Laser Scanner Stack'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300 italic">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                 <p className="text-[10px] font-black text-slate-500 uppercase italic">Ideal for: Pharmacists & Retail counters</p>
              </div>
            </div>

            {/* Touch Bundle */}
            <div className={`p-12 rounded-[3.5rem] bg-white/5 border-2 transition-all group ${setupType === 'touch' ? 'border-corporate-blue ring-8 ring-blue-500/10' : 'border-white/10 opacity-70 hover:opacity-100'}`}>
              <div className="flex justify-between items-start mb-10">
                 <div>
                    <h4 className="text-3xl font-black text-white italic tracking-tighter mb-2">Premium Touch Kit</h4>
                    <div className="flex items-center gap-2 text-orange-400 font-black text-[10px] uppercase tracking-widest">
                       <Gem className="h-3 w-3" /> Elite Reliability
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Bundle Price</div>
                    <div className="text-3xl font-black text-blue-400 tracking-tight">LKR 144,900</div>
                 </div>
              </div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 mb-8 border border-white/10">
                  <Image src="https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg" alt="Touch Bundle" fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="bg-blue-600/10 p-6 rounded-[2rem] border border-blue-500/20 mb-8">
                 <div className="flex items-center gap-3 text-xs font-black text-blue-400 uppercase tracking-widest mb-3">
                   <Zap className="h-4 w-4 fill-blue-400" /> The "Speed ROI" Case
                 </div>
                 <p className="text-sm font-bold text-slate-300 italic leading-relaxed">
                   "If you bill 100 customers daily, saving 5s per order saves you 50+ hours of staff time per year. The Touch system pays for itself in ~3 months through pure efficiency."
                 </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {['15" Industrial Touch', 'Spill-Proof Panel', 'Integrated Printer', 'Advanced 2D Scanner'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300 italic">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAVINGS COMPARISON TABLE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic mb-4">You are losing LKR 255,100.</h2>
            <p className="text-slate-500 font-bold text-lg italic">Every 5 years spent on a subscription model is money stolen from your business expansion.</p>
          </div>

          <div className="overflow-hidden bg-slate-900 rounded-[3rem] shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-slate-50">
             <table className="w-full text-left">
                <thead>
                   <tr className="border-b border-white/10 text-center">
                      <th className="py-10 px-10 text-xs font-black text-slate-500 uppercase tracking-[0.3em] text-left">The Metric</th>
                      <th className="py-10 px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Typical Cloud Subscription</th>
                      <th className="py-10 px-4 text-xs font-black text-blue-400 uppercase tracking-widest bg-white/5 border-l border-white/5 italic">Revolvit Lifetime POS</th>
                   </tr>
                </thead>
                <tbody>
                   <tr className="border-b border-white/5">
                      <td className="py-8 px-10 text-white font-bold italic">Monthly Fee</td>
                      <td className="py-8 px-4 text-center text-slate-500">LKR 5,000+</td>
                      <td className="py-8 px-4 text-center text-green-400 font-black bg-white/5 border-l border-white/5 uppercase">LKR 0 (Permanently)</td>
                   </tr>
                   <tr className="border-b border-white/5">
                      <td className="py-8 px-10 text-white font-bold italic">Internet Resilience</td>
                      <td className="py-8 px-4 text-center text-red-400/80 italic">Stops during outages</td>
                      <td className="py-8 px-4 text-center text-white font-black bg-white/5 border-l border-white/5">100% Offline (Local DB)</td>
                   </tr>
                   <tr className="border-b border-white/5">
                      <td className="py-8 px-10 text-white font-bold italic">5-Year Total Cost</td>
                      <td className="py-8 px-4 text-center text-slate-500">LKR 300,000+</td>
                      <td className="py-8 px-4 text-center text-white font-black bg-white/5 border-l border-white/5">LKR 44,900</td>
                   </tr>
                   <tr className="bg-corporate-blue/20">
                      <td className="py-12 px-10 text-white font-black text-xl italic uppercase tracking-widest">Cash Kept In Your Pocket</td>
                      <td className="py-12 px-4 text-center text-slate-600 line-through italic font-black">LKR 0 Saved</td>
                      <td className="py-12 px-4 text-center text-blue-300 font-black text-3xl tracking-tighter bg-corporate-blue/30 border-l border-white/10">LKR 255,100 Saved</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 6. TRUST & SUPPORT */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="aspect-square relative rounded-[4rem] overflow-hidden bg-slate-100 border-8 border-white shadow-2xl">
                  <Image src="https://elitepos.lk/wp-content/uploads/2026/02/BN-SP999-DUAL-1.jpg" alt="Local Support" fill className="object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-corporate-blue p-10 rounded-[3rem] text-white shadow-2xl max-w-[320px] ring-8 ring-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-blue-200">Local Service Shield</p>
                  <p className="text-xl font-black italic mb-6 leading-tight">"Our engineers are based in Colombo, Kandy & Galle for rapid island-wide support."</p>
                  <div className="flex items-center gap-3 font-black text-blue-100 text-sm">
                     <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                     Live Response on WhatsApp
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="inline-flex items-center gap-2 text-corporate-blue font-black uppercase tracking-widest text-xs mb-6">
                <MapPin className="h-4 w-4" />
                <span>Made for Sri Lankan SMBs</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.9] italic">Peace of Mind.<br /> Guaranteed locally.</h2>
              
              <div className="space-y-6">
                 {[
                   { q: "Is it really a one-time payment for life?", a: "Yes. In Sri Lanka, monthly fees kill small businesses. Our TRUE Lifetime license means you pay once and own the software shell permanently. No hidden renewals." },
                   { q: "Will it work during power cuts?", a: "Revolvit runs on a local database. As long as your PC/Laptop has power (UPS/Battery), the bill prints. Zero internet needed for daily sales." },
                   { q: "Can I upgrade from Lite to Pro later?", a: "Absolutely. Simply pay the price difference and unlock professional inventory mastery without losing any of your existing data." }
                 ].map((faq, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
                       <h4 className="font-black text-slate-900 mb-3 flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-corporate-blue" />
                          {faq.q}
                       </h4>
                       <p className="text-sm font-bold text-slate-500 italic leading-relaxed">{faq.a}</p>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BAR */}
      <section className="py-20 bg-slate-900 relative overflow-hidden group">
         <div className="absolute inset-0 bg-corporate-blue/5 blur-[150px] group-hover:bg-corporate-blue/10 transition-colors"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
           <div className="text-white text-center md:text-left">
              <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">Securing your shop's future.</h4>
              <p className="text-slate-400 font-bold text-lg italic">Join 500+ leaders who stopped renting and started owning.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="https://wa.me/94770000000" className="bg-[#25D366] text-white px-10 py-6 rounded-3xl font-black text-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-3">
                 <WhatsAppIcon className="h-6 w-6" /> WhatsApp Free Demo
              </Link>
              <Link href="/contact" className="bg-white text-slate-900 px-10 py-6 rounded-3xl font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl">
                 Get Full Quote <ArrowRight className="h-5 w-5" />
              </Link>
           </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic mb-4">REVOLVIT POS INFRASTRUCTURE · LKR 0 MONTHLY FEES · SRI LANKA · 2026</p>
        <div className="flex items-center justify-center gap-8 opacity-40 grayscale scale-75">
           <div className="text-xs font-black">RETAIL</div>
           <div className="text-xs font-black">PHARMACY</div>
           <div className="text-xs font-black">DINING</div>
           <div className="text-xs font-black">GROCERY</div>
        </div>
      </footer>
    </div>
  );
}
