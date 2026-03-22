'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Monitor, Printer, ScanLine, Package, Loader2, Info, ChevronDown, Sparkles, Building2, Smartphone, ShieldCheck } from 'lucide-react';

export default function Pricing() {
  const [pricingPlans, setPricingPlans] = useState<any>([]);
  const [posData, setPosData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('lifetime');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal/public?fields=pricing,posPricing');
        const json = await res.json();
        if (json.pricing) setPricingPlans(json.pricing);
        if (json.posPricing) setPosData(json.posPricing);
      } catch (e) {
        console.error('Failed to fetch pricing', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin mb-4" />
        <p className="text-gray-400 font-medium animate-pulse">Configuring elite solutions...</p>
      </div>
    );
  }

  const defaultPricingPlans = [
    {
      title: 'Desktop Core',
      price: '25,000',
      monthlyPrice: '2,500',
      description: '100% Offline performance for single-station retail.',
      isRecommended: false,
      features: [
        'Works 100% Offline',
        'Lifetime License (No Monthly Fees)',
        'Inventory Management',
        'Sales & PDF Reports',
        'Support for All Printers/Scanners',
        'Staff Performance Tracking'
      ]
    },
    {
      title: 'Hybrid Professional',
      price: '45,000',
      monthlyPrice: '4,500',
      description: 'Local reliability with cloud-sync & mobile access.',
      isRecommended: true,
      features: [
        'Cloud-Sync Technology',
        'Mobile Sales Dashboard',
        'Automated Cloud Backups',
        'WhatsApp/Sms Receipts',
        'Customer Loyalty System',
        'Includes All Desktop Features'
      ]
    },
    {
      title: 'Enterprise Cloud',
      price: '85,000',
      monthlyPrice: '8,500',
      description: 'Centralized management for multi-branch chains.',
      isRecommended: false,
      features: [
        'Unlimited Branch Support',
        'Centralized Inventory Control',
        'Advanced AI Analytics',
        'Multi-Warehouse Logistics',
        'Dedicated API Access',
        'Priority 2-Hour Support'
      ]
    },
    {
      title: 'Restaurant Elite',
      price: '55,000',
      monthlyPrice: '5,500',
      description: 'Tailored for cafes and high-volume dining.',
      isRecommended: false,
      features: [
        'KOT Kitchen Printing',
        'Table Management Grid',
        'Recipe/Ingredient Costing',
        'Waiter App Integration',
        'Split-Bill & Dynamic Tax',
        'QR Menu Ordering'
      ]
    }
  ];

  const plansToDisplay = pricingPlans.length > 0 ? pricingPlans : defaultPricingPlans;

  const comparisonFeatures = [
    { name: 'Works Offline', basic: true, standard: true, pro: 'Hybrid', premium: true },
    { name: 'Lifetime License', basic: true, standard: true, pro: true, premium: true },
    { name: 'Mobile Dashboard', basic: false, standard: 'Rs. 5k/year', pro: true, premium: true },
    { name: 'Multi-store Sync', basic: false, standard: false, pro: true, premium: true },
    { name: 'AI Chatbot Support', basic: true, standard: true, pro: true, premium: true },
    { name: 'WhatsApp Receipts', basic: 'Module', standard: 'Included', pro: true, premium: true },
    { name: 'Multi-user Access', basic: 'Limited', standard: true, pro: true, premium: true },
    { name: 'Staff App', basic: false, standard: false, pro: 'Optional', premium: true },
  ];

  const hardwareBundles = [
    {
      id: 'A',
      name: 'Essential Starter',
      price: '95,000',
      description: 'Best for small boutiques and start-up grocers.',
      includes: ['POS Software Desktop', 'XPrinter XP-58 Mobile', 'Beldon 1D Wired Scanner', 'Cash Drawer Starter'],
      popular: false
    },
    {
      id: 'B',
      name: 'Retail Pro Bundle',
      price: '145,000',
      description: 'The standard choice for growing supermarkets.',
      includes: ['POS Software Hybrid', 'Beldon 80mm High-Speed Printer', 'Beldon 1D Wireless Scanner', 'Heavy-Duty Cash Drawer'],
      popular: true
    },
    {
      id: 'C',
      name: 'Restaurant Bundle',
      price: '185,000',
      description: 'Complete setup for cafes and dining outlets.',
      includes: ['POS Kitchen Integration', 'Dual KOT Printers', 'Android Touch Terminal', 'Receipt Printer Elite'],
      popular: false
    },
    {
      id: 'D',
      name: 'Supermarket Elite',
      price: '320,000',
      description: 'Ultimate multi-terminal hardware infrastructure.',
      includes: ['POS Multi-Branch License', 'Zebra DS9308 2D Desktop', 'Dual 80mm Printers', 'UPS 1000VA Backup'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section - Elite Branding */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50/70 rounded-full blur-3xl opacity-50 select-none pointer-events-none transition-all duration-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-corporate-blue/5 text-corporate-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-corporate-blue/10"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Professional Solutions · One-time Purchase</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-tight max-w-5xl mx-auto">
            Transparent Pricing for <span className="text-corporate-blue">Unstoppable Growth.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            No hidden monthly fees for core operations. From simple 100% offline desktop versions to advanced multi-branch cloud ecosystems, choose the stability your business deserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#pricing-grid" className="bg-corporate-blue px-8 py-4 rounded-xl text-white font-black hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-95">
              View Licensing Plans
            </Link>
            <Link href="#hardware-bundles" className="text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-black hover:bg-gray-50 transition-all">
              Explore Hardware Bundles
            </Link>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
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
      {/* Pricing Cards Grid */}
      <section id="pricing-grid" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plansToDisplay.map((plan: any, index: number) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-[2rem] p-6 border ${plan.isRecommended ? 'border-2 border-corporate-blue ring-8 ring-corporate-blue/5' : 'border-gray-100'} transition-all hover:shadow-2xl flex flex-col`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-corporate-blue text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap z-10">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black text-gray-900 mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-400 font-bold mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black text-gray-400 uppercase">LKR</span>
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">
                    {billingCycle === 'monthly' ? (plan.monthlyPrice || plan.price / 10) : plan.price}
                  </span>
                  {billingCycle === 'monthly' && <span className="text-xs font-black text-gray-400">/mo</span>}
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest mt-2 ${billingCycle === 'monthly' ? 'text-indigo-600' : 'text-corporate-blue'}`}>
                  {billingCycle === 'monthly' ? 'Monthly Subscription' : 'One-time License Fee'}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                <div className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">What's Included</div>
                <ul className="space-y-3.5">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 font-bold leading-snug">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-2.5 w-2.5 text-corporate-blue" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/checkout?product=${index === 0 ? 'desktop-core' : index === 1 ? 'hybrid-pro' : index === 2 ? 'enterprise' : 'restaurant'}&billing=${billingCycle}`}
                className={`w-full py-4 rounded-2xl font-black text-sm text-center transition-all active:scale-95 ${plan.isRecommended ? 'bg-corporate-blue text-white shadow-xl shadow-blue-500/20' : 'bg-slate-100 text-gray-900 hover:bg-slate-200'}`}
              >
                Get Started Today
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Comparison table */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Compare our Capabilities</h2>
            <p className="text-gray-500 font-bold">Deep dive into the features that power your business.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200">
                  <th className="py-8 px-8 text-sm font-black text-gray-400 uppercase tracking-widest">Business Requirements</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-gray-900 uppercase tracking-widest">Basic</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-gray-900 uppercase tracking-widest">Standard</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-gray-900 uppercase tracking-widest">Pro</th>
                  <th className="py-8 px-6 text-center text-sm font-black text-gray-900 uppercase tracking-widest">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonFeatures.map((item) => (
                  <tr key={item.name} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-6 px-8 text-base font-bold text-gray-700">{item.name}</td>
                    {[item.basic, item.standard, item.pro, item.premium].map((val, i) => (
                      <td key={i} className="py-6 px-6 text-center">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <div className="h-1 w-4 bg-slate-200 rounded-full mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-black text-corporate-blue uppercase">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Complete Hardware Bundles - New Section */}
      <section id="hardware-bundles" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Package className="h-3.5 w-3.5" />
                Done-for-you Setup
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">All-in-One POS Bundles</h2>
              <p className="text-gray-500 font-bold leading-relaxed">Everything you need to start ringing up sales—hardware, software, and onsite expert installation. No tech experience required.</p>
            </div>
            <div className="bg-white p-2 rounded-2xl border border-gray-200 flex items-center gap-2">
              <span className="px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Pricing Model</span>
              <div className="bg-corporate-blue px-6 py-2 rounded-xl text-white text-xs font-black tracking-widest">One-time Payment</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(posData?.hardwareBundles || hardwareBundles).map((bundle: any, idx: number) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden flex flex-col">
                {bundle.popular && (
                  <div className="absolute right-0 top-0 mt-4 -mr-8 rotate-45 bg-amber-400 text-white px-10 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Best Value
                  </div>
                )}
                
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-50 mb-8 border border-gray-100">
                  {bundle.image ? (
                    <Image 
                      src={bundle.image} 
                      alt={bundle.name} 
                      fill 
                      unoptimized={true}
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="h-12 w-12 text-slate-200" />
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{bundle.name || `Package ${bundle.id}`}</h3>
                  <div className="text-sm font-bold text-gray-400 leading-snug">{bundle.description}</div>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Bundle Cost</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-black text-gray-400 uppercase">LKR</span>
                    <span className="text-4xl font-black text-gray-900 tracking-tighter">{bundle.price}</span>
                  </div>
                </div>

                <div className="flex-1 mb-8">
                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="h-1 w-4 bg-blue-500 rounded-full"></div>
                    Included Equipment
                  </div>
                  <ul className="space-y-2.5">
                    {(bundle.features || bundle.includes || []).map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-100 fill-corporate-blue" />
                        {item}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-100 fill-corporate-blue" />
                      On-Site Installation
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-100 fill-corporate-blue" />
                      On-Site Staff Training
                    </li>
                  </ul>
                </div>

                <Link href={`/checkout?product=${idx === 0 ? 'essential-bundle' : idx === 1 ? 'retail-bundle' : idx === 2 ? 'restaurant-bundle' : 'supermarket-bundle'}`} className="group-hover:bg-corporate-blue group-hover:text-white border-2 border-gray-100 rounded-2xl py-4 text-center text-sm font-black transition-all">
                  Buy Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Monitor className="h-10 w-10 text-corporate-blue" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-1 leading-none">Need a Computer/PC?</h4>
                <p className="text-sm font-bold text-gray-400">Add a high-performance business desktop to any bundle.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Added Investment</div>
                <div className="text-2xl font-black text-corporate-blue uppercase">LKR 30,000</div>
              </div>
              <Link href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-black text-sm active:scale-95 transition-all">
                Add to Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Shop / Catalog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Modular Hardware Catalog</h2>
              <p className="text-gray-500 font-bold">Industry-leading brands vetted for speed and thermal reliability.</p>
            </div>
            <Link href="/hardware" className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl text-sm font-black hover:bg-corporate-blue transition-all active:scale-95 shadow-xl shadow-gray-900/10 group">
              Browse All Products
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Thermal Printers',
                icon: Printer,
                items: [
                  { name: 'XPrinter XP-K200L', price: '13,500', tag: 'Best Seller' },
                  { name: 'Beldon BN-PP991', price: '17,000' },
                  { name: 'XPrinter Q80B Wifi', price: '27,500' }
                ]
              },
              {
                title: 'Barcode Scanners',
                icon: ScanLine,
                items: [
                  { name: 'Beldon 1D Wireless', price: '16,500', tag: 'Fast' },
                  { name: 'Zebra DS9308 2D Desktop', price: '37,500' },
                  { name: 'Beldon CCD Handheld', price: '5,000' }
                ]
              },
              {
                title: 'Terminals & Drawers',
                icon: Package,
                items: [
                  { name: 'Beldon i7 Dual Touch', price: '214,500' },
                  { name: 'Posmax 6N Cash Drawer', price: '11,500' },
                  { name: 'Senraise Android Handheld', price: '150,000' }
                ]
              }
            ].map((cat) => (
              <div key={cat.title} className="bg-slate-50/50 rounded-3xl p-8 border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <cat.icon className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">{cat.title}</h3>
                </div>
                <div className="space-y-6">
                  {cat.items.map(item => (
                    <div key={item.name} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div>
                        <div className="text-sm font-black text-gray-900 flex items-center gap-2">
                          {item.name}
                          {item.tag && <span className="text-[8px] bg-blue-100 text-corporate-blue px-2 py-0.5 rounded-full uppercase tracking-tighter">{item.tag}</span>}
                        </div>
                      </div>
                      <div className="text-xs font-black text-corporate-blue">LKR {item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise Section */}
      <section className="py-24 bg-corporate-gray overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-corporate-blue rounded-[3rem] p-12 md:p-24 text-white relative flex flex-col lg:flex-row items-center gap-16 overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Building2 className="h-96 w-96" />
            </div>

            <div className="flex-1 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Need a Custom <span className="text-blue-300">Enterprise</span> Workflow?</h2>
              <p className="text-xl text-blue-100/80 mb-10 font-medium leading-relaxed">
                For multi-national distribution, high-frequency logistics, or specialized manufacturing requirements, we engineer bespoke platforms from the ground up.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  'Dedicated Dev Instance',
                  'Custom ERP Integration',
                  'Global 24/7 SLA',
                  'Source Code Access Options'
                ].map(feat => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
                    <span className="font-bold text-blue-50">{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="bg-white text-corporate-blue px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-white/20 transition-all inline-block active:scale-95">
                Consult our Strategy Team
              </Link>
            </div>
            <div className="relative w-full lg:w-1/3 h-80 lg:h-[500px] flex-shrink-0 group">
              <Image
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
                alt="Enterprise Engineering"
                fill
                className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">Investment FAQ</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Clearing Doubts, Closing Deals</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Why is it a one-time purchase?', a: 'We believe you should own your business tools. While many SaaS providers charge monthly, we offer a lifetime license for our local system management software. Optional cloud sync services are the only items that carry a recurring fee.' },
              { q: 'Do you offer on-site support if things go wrong?', a: 'Yes. Every license comes with 12 months of priority support. Within major regions, we provide on-site technical assistance within 24-48 hours. Remote support is instant.' },
              { q: 'Is there a limit to how many items I can add?', a: 'Unlike tiered cloud POS, our Standard and higher plans have no artificial caps on products, transactions, or historical data. You own the database.' },
              { q: 'Can I integrate my existing hardware?', a: 'Most standard thermal printers and barcode scanners (USB/Network) are compatible. During our initial consultation, we provide a free hardware audit to see what you can reuse.' }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50/50 rounded-[2rem] p-8 border border-gray-100 hover:border-corporate-blue/20 transition-all group"
              >
                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-corporate-blue transition-colors leading-tight">{faq.q}</h3>
                <p className="text-gray-500 font-bold leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <div className="sticky bottom-8 z-50 px-4 md:hidden">
        <Link href="/contact" className="bg-corporate-blue text-white w-full py-5 rounded-2xl font-black text-center shadow-2xl flex items-center justify-center gap-2">
          Build Your Own Plan
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
