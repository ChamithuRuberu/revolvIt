'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Monitor, Printer, ScanLine, Package,
    CreditCard, Search, ChevronRight,
    ShieldCheck, Zap, ArrowRight, Sparkles,
    Calculator, Cpu, ShoppingBag
} from 'lucide-react';

const IconMap: { [key: string]: any } = {
    Monitor, Printer, ScanLine, Package,
    CreditCard, Search, ChevronRight,
    ShieldCheck, Zap, ArrowRight, Sparkles,
    Calculator, Cpu, ShoppingBag
};

export default function HardwareCatalog() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [hardwareData, setHardwareData] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [heroSlides, setHeroSlides] = useState<any[]>([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (heroSlides.length > 0) {
            const timer = setInterval(() => {
                setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
            }, 6000); // 6 seconds per slide
            return () => clearInterval(timer);
        }
    }, [heroSlides.length]);

    useEffect(() => {
        const fetchHardware = async () => {
            try {
                const res = await fetch('/api/portal', { cache: 'no-store' });
                const data = await res.json();
                
                if (data.hardware) {
                    setHardwareData(data.hardware);
                }
                if (data.hardwareCategories) {
                    setCategories(data.hardwareCategories);
                }
                if (data.hardwareHero) {
                    setHeroSlides(data.hardwareHero);
                }
            } catch (error) {
                console.error('Error fetching hardware:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHardware();
    }, []);

    const filteredHardware = hardwareData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.model.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Premium Hero Hybrid */}
            <section className="relative pt-32 pb-24 bg-white overflow-hidden border-b border-gray-100 min-h-[500px]">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* LEFT SIDE: Static content based on the first slide (or default) */}
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-corporate-blue/5 text-corporate-blue px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-corporate-blue/10">
                                <Cpu className="h-3.5 w-3.5" />
                                <span>{heroSlides[0]?.badge || 'Authorized Hardware Provider'}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
                                {heroSlides[0]?.title1 || 'Industrial Grade'} <br />
                                <span className="text-corporate-blue">{heroSlides[0]?.titleHighlight || 'Hardware Ecosystem.'}</span>
                            </h1>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
                                {heroSlides[0]?.description || 'Build your perfect checkout stack with our vetted selection of POS terminals, printers, and accessories. Engineered for 24/7 reliability.'}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-400">
                                {(heroSlides[0]?.features || ['Direct Local Warranty', 'Next-Day Delivery', 'Priority Installation']).map((feat: string, i: number) => (
                                    <div key={i} className={`flex items-center gap-2 ${i % 3 === 0 ? 'text-green-600' : i % 3 === 1 ? 'text-blue-600' : 'text-amber-600'}`}>
                                        {i % 3 === 0 ? <ShieldCheck className="h-4 w-4" /> : i % 3 === 1 ? <Zap className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Animated Image Carousel */}
                        <div className="flex-1 relative w-full max-w-md lg:max-w-none h-[400px] lg:h-[450px]">
                            <div className="absolute inset-0 bg-blue-500 rounded-[3rem] blur-[100px] opacity-10 animate-pulse"></div>
                            
                            <AnimatePresence mode="wait">
                                {heroSlides.length > 0 && heroSlides[currentSlideIndex] ? (
                                    <motion.div
                                        key={currentSlideIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative bg-white border border-gray-100 rounded-[3rem] p-4 shadow-2xl overflow-hidden group w-full h-full flex items-center justify-center"
                                    >
                                        {heroSlides[currentSlideIndex].image ? (
                                            <Image
                                                src={heroSlides[currentSlideIndex].image}
                                                alt="Slide Image"
                                                fill
                                                unoptimized={true}
                                                className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2.5rem]"
                                            />
                                        ) : (
                                            <div className="h-full w-full rounded-[2.5rem] bg-gray-100 flex items-center justify-center">
                                                <Package className="h-12 w-12 text-gray-300" />
                                            </div>
                                        )}
                                        {heroSlides[currentSlideIndex].statusValue && (
                                            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-100 shadow-xl">
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{heroSlides[currentSlideIndex].statusLabel}</div>
                                                <div className="text-lg font-black text-green-600">{heroSlides[currentSlideIndex].statusValue}</div>
                                            </div>
                                        )}
                                    </motion.div>
                                ) : (
                                    <div className="h-full w-full bg-slate-100 rounded-[3rem] animate-pulse"></div>
                                )}
                            </AnimatePresence>

                            {/* Carousel Nav Rings anchored to the image box */}
                            {heroSlides.length > 1 && (
                                <div className="absolute -bottom-8 left-12 flex gap-2">
                                    {heroSlides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlideIndex(idx)}
                                            className={`h-2 rounded-full transition-all ${idx === currentSlideIndex ? 'w-8 bg-corporate-blue' : 'w-2 bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-2 p-1 bg-gray-100/50 rounded-2xl border border-gray-100 w-fit">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${activeCategory === 'all' ? 'bg-corporate-blue text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                All Products
                            </button>
                            {categories.map(cat => {
                                const IconComp = IconMap[cat.icon] || Package;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-black transition-all ${activeCategory === cat.id ? 'bg-corporate-blue text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <IconComp className="h-4 w-4" />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative w-full lg:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-corporate-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Search models, brands..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-6 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {isLoading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="bg-white rounded-[3rem] p-2 border border-gray-100 animate-pulse">
                                        <div className="aspect-[4/3] rounded-[2.5rem] bg-gray-200 mb-8"></div>
                                        <div className="p-8 space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                                            <div className="h-12 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                ))
                            ) : filteredHardware.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="group bg-white rounded-[3rem] p-2 border border-gray-100 hover:border-corporate-blue/20 hover:shadow-2xl hover:shadow-corporate-blue/5 transition-all"
                                >
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                unoptimized={true}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 flex-col gap-2">
                                                <Package className="h-10 w-10 text-gray-300" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Image Pending</span>
                                            </div>
                                        )}
                                        {item.tag && (
                                            <div className="absolute top-6 left-6 bg-corporate-blue/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                                {item.tag}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.model}</span>
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                {categories.find(c => c.id === item.category)?.name || item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-corporate-blue transition-colors">{item.name}</h3>
                                        <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6 line-clamp-2">
                                            {item.description}
                                        </p>

                                        <div className="bg-slate-50/50 rounded-2xl p-4 mb-8">
                                            <div className="grid grid-cols-2 gap-y-2">
                                                {item.specs.map((spec: string) => (
                                                    <div key={spec} className="flex items-center gap-2">
                                                        <div className="h-1 w-1 bg-corporate-blue rounded-full"></div>
                                                        <span className="text-[10px] font-bold text-gray-600">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 leading-none">Investment</div>
                                                <div className="flex flex-col">
                                                    {item.originalPrice && (
                                                        <span className="text-xs font-bold text-gray-400 line-through tracking-tighter decoration-red-500/50">LKR {item.originalPrice}</span>
                                                    )}
                                                    <div className="text-2xl font-black text-gray-900 tracking-tighter">LKR {item.price}</div>
                                                </div>
                                            </div>
                                            <Link href="/contact" className="bg-gray-900 text-white p-4 rounded-2xl hover:bg-corporate-blue transition-all active:scale-95 shadow-xl shadow-gray-900/10">
                                                <ShoppingBag className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredHardware.length === 0 && (
                        <div className="py-24 text-center">
                            <Package className="h-16 w-16 text-gray-200 mx-auto mb-4" />
                            <h3 className="text-xl font-black text-gray-900">No hardware matches your search</h3>
                            <p className="text-gray-500 font-bold mt-2">Try adjusting your filters or search keywords.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Global Warranty Section */}
            <section className="py-24 bg-corporate-gray overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-corporate-blue rounded-[3rem] p-12 md:p-20 text-white relative flex flex-col items-center text-center overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                            <ShieldCheck className="h-96 w-96" />
                        </div>

                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Authorized <span className="text-blue-300">Warranty</span> Support.</h2>
                            <p className="text-xl text-blue-100/80 mb-10 font-medium leading-relaxed">
                                Every piece of hardware we supply includes a minimum 12-month direct warranty. We maintain a local buffer of replacement units to ensure your business never stops during hardware issues.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact" className="bg-white text-corporate-blue px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-white/20 transition-all active:scale-95">
                                    Claim Warranty
                                </Link>
                                <Link href="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all active:scale-95">
                                    Download Maintenance Manual
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-8 italic">Need a Complete Bundle?</h2>
                    <p className="text-xl text-gray-500 font-bold mb-12 max-w-2xl mx-auto">Skip the modular selection and pick one of our optimized hardware + software bundles for maximum savings.</p>
                    <Link href="/pricing" className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-corporate-blue transition-all active:scale-95 group shadow-2xl shadow-gray-900/20">
                        Explore Hardware Bundles
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
