'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Monitor, Tablet, Zap, ShieldCheck,
  PhoneCall, MessageSquare, ArrowRight, Info,
  TrendingDown, TrendingUp, HelpCircle, Check, X,
  Package, LayoutPanelTop, ShoppingCart, Clock, Award, Users,
  HeartPulse, Utensils, Store, Smartphone, MapPin, BadgePercent,
  History, Landmark, Gem, CreditCard, Sparkles, Infinity, Loader2, Plus
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TrustBadge = ({ icon: Icon, label, sublabel }: { icon: any, label: string, sublabel: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 rounded-3xl"
  >
    <div className="h-10 w-10 rounded-2xl bg-corporate-blue/20 flex items-center justify-center text-corporate-blue-light">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-white font-black text-xs uppercase tracking-widest">{label}</p>
      <p className="text-slate-400 text-[10px] font-bold ">{sublabel}</p>
    </div>
  </motion.div>
);

export default function POSPricing() {
  const router = useRouter();
  const { addToCart } = useCart();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('lifetime');
  const [setupType, setSetupType] = useState<'desktop' | 'touch'>('desktop');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/portal/public?fields=posPricing');
        const result = await response.json();
        if (result.posPricing) {
          setData(result.posPricing);
        }
      } catch (error) {
        console.error('Error fetching POS pricing data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
      </div>
    );
  }

  // Fallback to avoid errors if data is not loaded correctly
  const posData = data || {
    hero: { headline: "", subheadline: "", kokoText: "", joinText: "" },
    setups: [],
    softwarePlans: [],
    hardwareBundles: [],
    savings: { competitorMonthly: "", competitor5Year: "", savingsText: "" }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-corporate-blue/10">

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0F1C]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-corporate-blue/20 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-2xl">
                <Sparkles className="h-4 w-4 text-orange-400" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">The Last POS You'll Ever Buy</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]  whitespace-pre-line">
                {(posData?.hero?.headline && posData.hero.headline.includes('.')) ? (
                  <>
                    {posData.hero.headline.split('.')[0]}.<span className="text-slate-500"> {posData.hero.headline.split('.')[1]}</span>
                  </>
                ) : (
                  posData?.hero?.headline || 'Point of Sale'
                )}
              </h1>

              <p className="max-w-xl text-xl text-slate-400 font-medium mb-10 leading-relaxed ">
                {posData?.hero?.subheadline || 'Zero Monthly Fees · 100% Offline Resilience · Local Sri Lankan Support.'}
              </p>

              {/* Koko Installment Banner */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-10 p-5 rounded-3xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20">
                    <CreditCard className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      {posData?.hero?.kokoText?.includes('with')
                        ? posData.hero.kokoText.split('with')[0]
                        : (posData?.hero?.kokoText || 'Avilable Koko')} with <span className="text-indigo-400 uppercase">KOKO</span>
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <svg className="h-4 w-auto" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="9" r="7" fill="#EB001B" fillOpacity="0.8" />
                        <circle cx="17" cy="9" r="7" fill="#FF5F00" fillOpacity="0.8" />
                        <path d="M12 1.93311C10.2309 3.56064 9.11111 5.8647 9.11111 8.42392C9.11111 10.9831 10.2309 13.2872 12 14.9147C13.7691 13.2872 14.8889 10.9831 14.8889 8.42392C14.8889 5.8647 13.7691 3.56064 12 1.93311Z" fill="#F79E1B" />
                      </svg>
                      <svg className="h-3 w-auto" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.532 0.208H9.721L7.151 6.307H8.85L9.192 5.483H11.267L11.465 6.307H13.142L11.532 0.208ZM9.638 4.41L10.426 2.508L10.871 4.41H9.638ZM17.161 0.208L15.655 4.381L14.28 0.208H12.518L14.735 6.307H16.489L18.892 0.208H17.161ZM2.162 0.208L0.423 6.307H2.122L3.861 0.208H2.162ZM6.442 0.208L4.606 6.307H6.305L8.141 0.208H6.442Z" fill="#1A1F71" />
                      </svg>
                      <div className="w-px h-3 bg-white/10 mx-1"></div>
                      <p className="text-slate-500 text-[10px] font-bold ">Zero interest · split card payments</p>
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </motion.div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <Link
                  href="https://wa.me/94770000000"
                  className="bg-[#25D366] text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:shadow-[0_0_50px_rgba(37,211,102,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Book Free Demo
                </Link>
                <Link
                  href="#pricing"
                  className="bg-white/10 text-white border border-white/10 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust Badges Stacks */}
              <div className="grid grid-cols-2 gap-4">
                <TrustBadge icon={ShieldCheck} label="One-Time Payment" sublabel="No monthly 'rent'" />
                <TrustBadge icon={Zap} label="Offline Ready" sublabel="Works without net" />
                <TrustBadge icon={MapPin} label="Island-wide Support" sublabel="Technicians everywhere" />
                <TrustBadge icon={Users} label="Trusted by 500+" sublabel="Sri Lankan Retailers" />
              </div>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Main Product Showcase */}
              <div className="relative z-10 p-4 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm group">
                <div className="aspect-[4/3] relative rounded-[3rem] overflow-hidden bg-slate-900 border-4 border-slate-800 shadow-2xl">
                  <Image
                    src={posData.hero.image || "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"}
                    alt="Green Code Solution POS System"
                    fill
                    unoptimized={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Dashboard Element */}
                  <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-white/10 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl max-w-[240px] animate-bounce-slow">
                    <div className="absolute top-1/2 -right-12 bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl">
                      <p className="text-[10px] font-black text-corporate-blue-light uppercase tracking-[0.2em] mb-2 leading-none">Status</p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="text-xs font-black text-white uppercase ">100% Offline Ready</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Icon Elements */}
              <div className="absolute -top-10 -right-10 bg-corporate-blue p-6 rounded-[2.5rem] shadow-2xl animate-spin-slow cursor-pointer hover:bg-white hover:text-slate-900 transition-all text-white">
                <Infinity className="h-8 w-8" />
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUICK ANCHOR SECTION --- */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-sm font-black uppercase tracking-[0.3em]">RETAIL</span>
            <div className="h-1 w-1 rounded-full bg-slate-200"></div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">PHARMACY</span>
            <div className="h-1 w-1 rounded-full bg-slate-200"></div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">DINING</span>
            <div className="h-1 w-1 rounded-full bg-slate-200"></div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">GROCERY</span>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR POS SETUP (REDUCING STICKER SHOCK) */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 ">Step 1: Choose Your Experience</h2>
            <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed ">The cost difference is driven by hardware. Select the physical foundation that fits your floor space and speed requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {posData.setups.map((setup: any) => (
              <motion.button
                key={setup.id}
                whileHover={{ y: -8 }}
                onClick={() => setSetupType(setup.id as any)}
                className={`relative p-12 rounded-[3.5rem] border-4 text-left transition-all overflow-hidden group ${setupType === setup.id ? 'bg-white border-corporate-blue shadow-[0_30px_60px_-15px_rgba(0,102,204,0.15)]' : 'bg-slate-200/40 border-transparent hover:border-slate-300'
                  }`}
              >
                {setupType === setup.id && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-blue/5 rounded-bl-[100%] transition-transform -translate-y-4 translate-x-4"></div>
                )}
                <div className={`h-20 w-20 rounded-[2rem] flex items-center justify-center mb-10 transition-colors ${setupType === setup.id ? 'bg-corporate-blue text-white shadow-lg shadow-corporate-blue/20' : 'bg-white text-slate-300'}`}>
                  {setup.id === 'desktop' ? <Monitor className="h-10 w-10" /> : <Tablet className="h-10 w-10" />}
                </div>
                {setup.id === 'touch' && (
                  <div className="absolute top-10 right-10 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-orange-200 shadow-sm ">3x Faster Checkout</div>
                )}
                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter ">{setup.label}</h3>
                <p className="text-slate-500 font-bold mb-8 leading-relaxed ">{setup.description}</p>

                <ul className="space-y-4 mb-10">
                  {setup.features.map((feat: string) => (
                    <li key={feat} className="flex items-center gap-4 text-base font-bold text-slate-700 ">
                      <CheckCircle2 className={`h-5 w-5 ${setupType === setup.id ? 'text-corporate-blue' : 'text-slate-300'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-10 border-t border-slate-100 mt-auto">
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Start Full Setup for</div>
                    <div className="text-3xl font-black text-slate-900 tracking-tight ">LKR ~{setup.price}</div>
                  </div>
                  {setupType === setup.id ? (
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
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOFTWARE PLANS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-slate-900">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4 ">Step 2: Choose Your License</h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-black uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-indigo-600' : 'text-slate-400'}`}>Monthly Subscription</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'lifetime' : 'monthly')}
                className="relative w-16 h-8 rounded-full bg-slate-100 border border-slate-200 transition-colors group"
              >
                <div className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-corporate-blue shadow-md transition-transform duration-300 ${billingCycle === 'lifetime' ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </button>
              <span className={`text-sm font-black uppercase tracking-widest ${billingCycle === 'lifetime' ? 'text-corporate-blue' : 'text-slate-400'}`}>Lifetime Ownership</span>
              <div className="ml-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Best ROI</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posData.softwarePlans.map((plan: any, idx: number) => (
              <div
                key={idx}
                className={`p-8 rounded-[2.5rem] flex flex-col group hover:shadow-2xl transition-all relative ${plan.isPopular ? 'bg-white border-4 border-corporate-blue shadow-[0_45px_70px_-20px_rgba(0,102,204,0.2)] scale-105 z-20 ring-4 ring-blue-50 p-10' : 'bg-slate-50 border border-slate-100 overflow-hidden'}`}
              >
                {!plan.isPopular && <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200 rotate-45 translate-x-12 -translate-y-12 opacity-30"></div>}

                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-corporate-blue text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl  whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8 text-center">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md ${plan.isPopular ? 'bg-blue-50 text-corporate-blue' : 'bg-white text-slate-400'}`}>
                    {idx === 0 ? <Store className="h-5 w-5" /> : idx === 1 ? <HeartPulse className="h-6 w-6" /> : <Utensils className="h-5 w-5" />}
                  </div>
                  <h3 className={`text-lg font-black uppercase tracking-widest mb-1  ${plan.isPopular ? 'text-corporate-blue' : 'text-slate-400'}`}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-xs font-black text-slate-400">LKR</span>
                    <span className={`font-black text-slate-900 tracking-tighter  ${plan.isPopular ? 'text-5xl' : 'text-4xl'}`}>
                      {billingCycle === 'monthly' 
                        ? (plan.monthlyPrice || (idx === 0 ? '2,490' : idx === 1 ? '4,490' : '7,490')) 
                        : plan.price}
                    </span>
                    {billingCycle === 'monthly' && <span className="text-xs font-black text-slate-400">/mo</span>}
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-6 px-5 py-1.5 rounded-full inline-block ${plan.isPopular ? 'bg-corporate-blue text-white shadow-lg shadow-corporate-blue/20' : 'text-blue-600 border-2 border-blue-100 bg-blue-50/50'}`}>
                    {billingCycle === 'monthly' ? "Subscription" : "Lifetime License"}
                  </p>
                  <p className={`font-bold  leading-relaxed pt-6 border-t ${plan.isPopular ? 'text-slate-600 border-slate-100 text-sm' : 'text-slate-500 border-slate-200 text-xs'}`}>{plan.description}</p>
                </div>

                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat: string) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 className={`flex-shrink-0 ${plan.isPopular ? 'h-5 w-5 text-corporate-blue' : 'h-4 w-4 text-corporate-blue'}`} />
                      <span className={`font-black  ${plan.isPopular ? 'text-slate-900 text-sm' : 'text-slate-700 text-xs'}`}>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    addToCart({
                      name: `${plan.name} License (${billingCycle === 'monthly' ? 'Monthly' : 'Lifetime'})`,
                      price: billingCycle === 'monthly' ? (plan.monthlyPrice || (idx === 0 ? '2,490' : idx === 1 ? '4,490' : '7,490')) : plan.price,
                      image: '/logo1.jpeg',
                      model: `${plan.name}-${billingCycle}`
                    });
                    router.push('/checkout');
                  }}
                  className={`w-full py-5 font-black text-center text-[10px] uppercase tracking-widest transition-all ${plan.isPopular ? 'rounded-[1.5rem] bg-corporate-blue text-white hover:bg-corporate-blue-dark scale-105 shadow-2xl shadow-corporate-blue/30' : 'rounded-2xl bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-900/10'}`}
                >
                  {billingCycle === 'monthly' ? 'Subscribe Now' : 'Buy Lifetime License'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HARDWARE BUNDLES (LOWER SECTION) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4 ">Optional: One-Time Hardware Bundles</h2>
            <p className="text-slate-400 font-bold max-w-2xl mx-auto">We've negotiated massive discounts with manufacturers to bring you curated, industrial-grade hardware at the best rates in SL.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posData.hardwareBundles.map((bundle: any, idx: number) => (
              <div
                key={idx}
                className={`p-12 rounded-[3.5rem] bg-white/5 border-2 transition-all group ${setupType === (idx === 0 ? 'desktop' : 'touch') ? 'border-corporate-blue ring-8 ring-blue-500/10' : 'border-white/10 opacity-70 hover:opacity-100'}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h4 className="text-3xl font-black text-white  tracking-tighter mb-2">{bundle.name}</h4>
                    <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-orange-400'}`}>
                      {idx === 0 ? <Package className="h-3 w-3" /> : <Gem className="h-3 w-3" />} {bundle.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Bundle Price</div>
                    <div className={`text-3xl font-black tracking-tight ${idx === 0 ? 'text-white' : 'text-blue-400'}`}>LKR {bundle.price}</div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 mb-8 border border-white/10">
                  <Image
                    src={bundle.image || (idx === 0 ? "https://images.unsplash.com/photo-1556740753-b2904692b3cd?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800")}
                    alt={bundle.name}
                    fill
                    unoptimized={true}
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {idx === 1 && (
                  <div className="bg-blue-600/10 p-6 rounded-[2rem] border border-blue-500/20 mb-8">
                    <div className="flex items-center gap-3 text-xs font-black text-blue-400 uppercase tracking-widest mb-3">
                      <Zap className="h-4 w-4 fill-blue-400" /> The "Speed ROI" Case
                    </div>
                    <p className="text-sm font-bold text-slate-300  leading-relaxed">
                      {bundle.roiText}
                    </p>
                  </div>
                )}

                <ul className={`grid grid-cols-2 gap-x-8 gap-y-4 ${idx === 0 ? 'mb-10' : ''}`}>
                  {bundle.features.map((feat: string) => (
                    <li key={feat} className="flex items-center gap-3 text-xs font-bold text-slate-300 ">
                      <div className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${idx === 0 ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-8 mt-auto border-t border-white/10">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase ">{bundle.roiText}</p>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart({
                        name: bundle.name,
                        price: bundle.price,
                        image: bundle.image || (idx === 0 ? "https://images.unsplash.com/photo-1556740753-b2904692b3cd?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"),
                        model: `BUNDLE-${idx}`
                      });
                      router.push('/checkout');
                    }}
                    className="bg-corporate-blue text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 shadow-xl"
                  >
                    <Plus className="h-4 w-4" />
                    Buy Bundle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. TRUST & SUPPORT */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square relative rounded-[4rem] overflow-hidden bg-slate-100 border-8 border-white shadow-2xl">
                <Image src={posData.hero.image || "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"} alt="Local Support" fill unoptimized={true} className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-corporate-blue p-10 rounded-[3rem] text-white shadow-2xl max-w-[320px] ring-8 ring-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-blue-200">Local Service Shield</p>
                <p className="text-xl font-black  mb-6 leading-tight">"Our engineers are based in Colombo, Kandy & Galle for rapid island-wide support."</p>
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
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.9] ">Peace of Mind.<br /> Guaranteed locally.</h2>

              <div className="space-y-6">
                {[
                  { q: "Is it really a one-time payment for life?", a: "Yes. In Sri Lanka, monthly fees kill small businesses. Our TRUE Lifetime license means you pay once and own the software shell permanently. No hidden renewals." },
                  { q: "Will it work during power cuts?", a: "Green Code Solution runs on a local database. As long as your PC/Laptop has power (UPS/Battery), the bill prints. Zero internet needed for daily sales." },
                  { q: "Can I upgrade from Lite to Pro later?", a: "Absolutely. Simply pay the price difference and unlock professional inventory mastery without losing any of your existing data." }
                ].map((faq, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
                    <h4 className="font-black text-slate-900 mb-3 flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-corporate-blue" />
                      {faq.q}
                    </h4>
                    <p className="text-sm font-bold text-slate-500  leading-relaxed">{faq.a}</p>
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
            <h4 className="text-4xl md:text-5xl font-black  tracking-tighter mb-4">Securing your shop's future.</h4>
            <p className="text-slate-400 font-bold text-lg ">{posData?.hero?.joinText || 'Join 500+ leaders who stopped renting and started owning.'}</p>
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
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]  mb-4">REVOLVIT POS INFRASTRUCTURE · LKR 0 MONTHLY FEES · SRI LANKA · 2026</p>
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