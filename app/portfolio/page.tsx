'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, ShoppingCart, CheckCircle2, ExternalLink, TrendingUp, Building2, Loader2, Sparkles, LayoutPanelTop } from 'lucide-react';

export default function Portfolio() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal');
        const json = await res.json();
        if (json.portfolio) setData(json.portfolio);
      } catch (e) {
        console.error('Failed to fetch portfolio', e);
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
        <p className="text-gray-400 font-medium animate-pulse">Curating our best work...</p>
      </div>
    );
  }

  const rawProjects = data || [];

  const categories = [
    { id: 'pos-desktop', name: 'Desktop POS', icon: ShoppingCart, description: 'Standalone desktop solutions for local reliability.' },
    { id: 'desktop-cloud', name: 'Hybrid POS', icon: Globe, description: 'Local reliability with cloud synchronization.' },
    { id: 'cloud-enterprise', name: 'Enterprise Cloud', icon: Building2, description: 'Scalable cloud-native management systems.' },
    { id: 'software-apps', name: 'Software & Apps', icon: Smartphone, description: 'Custom mobile and web applications.' },
  ];

  const dynamicServices = categories.map(cat => ({
    ...cat,
    projects: rawProjects.filter((p: any) => {
      const pCat = (p.category || '').toLowerCase().trim();
      const cName = cat.name.toLowerCase().trim();
      const cId = cat.id.toLowerCase().trim();

      if (pCat === cName || pCat === cId) return true;
      if (cId === 'pos-desktop' && pCat === 'pos') return true;
      if (cId === 'cloud-enterprise' && (pCat === 'enterprise solutions' || pCat === 'enterprise')) return true;
      if (cId === 'software-apps' && (
        pCat === 'mobile development' ||
        pCat === 'mobile' ||
        pCat === 'nft web' ||
        pCat === 'nft' ||
        pCat === 'web development' ||
        pCat === 'web'
      )) return true;

      return false;
    })
  })).filter(s => s.projects.length > 0);

  const allProjects = dynamicServices.flatMap(s => s.projects.map((p: any) => ({ ...p, serviceName: s.name })));

  const filteredProjects = activeFilter
    ? allProjects.filter(p => {
      const pCat = (p.category || '').toLowerCase().trim();
      const cat = categories.find(c => c.id === activeFilter);
      if (!cat) return false;
      const cName = cat.name.toLowerCase().trim();
      const cId = cat.id.toLowerCase().trim();

      if (pCat === cName || pCat === cId) return true;
      if (cId === 'pos-desktop' && pCat === 'pos') return true;
      if (cId === 'cloud-enterprise' && (pCat === 'enterprise solutions' || pCat === 'enterprise')) return true;
      if (cId === 'software-apps' && (
        pCat === 'mobile development' ||
        pCat === 'mobile' ||
        pCat === 'nft web' ||
        pCat === 'nft' ||
        pCat === 'web development' ||
        pCat === 'web'
      )) return true;

      return false;
    })
    : allProjects;

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section - Professional & Immersive */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 select-none pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 select-none pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-corporate-blue/5 text-corporate-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-corporate-blue/10"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Excellence in Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight"
            >
              Innovation in <span className="text-corporate-blue">Every Detail.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              We don't just build software; we engineer growth. Explore our portfolio of industry-leading POS systems and enterprise digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section - Premium Tabs */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-gray-100/50 p-1.5 rounded-2xl w-fit mx-auto border border-gray-200/50">
            <button
              onClick={() => setActiveFilter(null)}
              className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeFilter === null ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {activeFilter === null && (
                <motion.div layoutId="filter-pill" className="absolute inset-0 bg-corporate-blue rounded-xl shadow-lg shadow-blue-500/20" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
              )}
              <span className="relative z-10">All Solutions</span>
            </button>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeFilter === cat.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {activeFilter === cat.id && (
                    <motion.div layoutId="filter-pill" className="absolute inset-0 bg-corporate-blue rounded-xl shadow-lg shadow-blue-500/20" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: any, idx: number) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                    <div className="relative h-[300px] w-full rounded-[2rem] overflow-hidden bg-gray-200 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-corporate-blue/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="mb-4">
                          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                            {project.category || project.serviceName}
                          </span>
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 text-blue-300 font-bold text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          View Case Study
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <LayoutPanelTop className="h-16 w-16 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">No projects found in this category</h3>
              <p className="text-gray-500 mt-2">Try selecting a different filter or view all projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats - Redesigned */}
      <section className="py-24 bg-corporate-gray text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">50+</div>
              <div className="text-blue-300 font-black uppercase tracking-widest text-xs">Businesses Transformed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">10k+</div>
              <div className="text-blue-300 font-black uppercase tracking-widest text-xs">Daily Transactions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">99.9%</div>
              <div className="text-blue-300 font-black uppercase tracking-widest text-xs">System Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-corporate-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="h-64 w-64" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                Have a vision? We have the <span className="text-blue-300">technology.</span>
              </h2>
              <p className="text-xl text-blue-100/80 mb-10 font-medium leading-relaxed">
                Join our list of successful partners and transform your business operations with our custom enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-corporate-blue px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-white/20 transition-all active:scale-95 translate-y-0 hover:-translate-y-1"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all"
                >
                  Learn Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
