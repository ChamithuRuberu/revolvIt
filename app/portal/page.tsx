'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    LayoutDashboard,
    Settings,
    HelpCircle,
    LogOut,
    Bell,
    User,
    ChevronRight,
    Plus,
    Building2,
    ShoppingCart,
    Cloud,
    Smartphone,
    Users,
    MapPin,
    DollarSign,
    Briefcase,
    Globe,
    Trash2,
    PlusCircle,
    TrendingUp,
    CreditCard,
    Package,
    Clock,
    ShieldCheck,
    Zap,
    BarChart3,
    Monitor,
    Loader2,
    Save,
    Edit,
    Star,
    Code,
    Layout,
    Server,
    Shield,
    Cpu,
    Trophy,
    Target,
    Rocket
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

// Icon Map for dynamic rendering
const IconMap: Record<string, any> = {
    Edit,
    Building2,
    ShoppingCart,
    Cloud,
    Smartphone,
    Users,
    MapPin,
    DollarSign,
    Briefcase,
    Globe,
    TrendingUp,
    CreditCard,
    Package,
    Clock,
    ShieldCheck,
    Zap,
    BarChart3,
    Monitor,
    LayoutDashboard,
    Settings,
    HelpCircle,
    LogOut,
    Bell,
    User,
    ChevronRight,
    Star,
    Code,
    Layout,
    Server,
    Shield,
    Cpu,
    Trophy,
    Target,
    Rocket
};

export default function Portal() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // CMS sub-section tab
    const [cmsSection, setCmsSection] = useState('hero');

    // Form states for Management
    const [formData, setFormData] = useState<any>({
        welcome: { title: '', description: '', image: '' },
        stats: [],
        services: [],
        solutions: [],
        pricing: [],
        jobs: [],
        websiteServices: [],
        portfolio: [],
        testimonials: [],
        values: [],
        team: []
    });

    useEffect(() => {
        fetchPortalData();
    }, []);

    const fetchPortalData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/portal');
            const json = await res.json();
            if (json.error) throw new Error(json.error);
            setData(json);
            setFormData(json);
        } catch (error: any) {
            console.error('Failed to fetch portal data:', error);
            toast.error('Failed to load portal content');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (payload = data) => {
        try {
            setIsSaving(true);
            const res = await fetch('/api/portal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            if (json.error) throw new Error(json.error);
            setData(json);
            toast.success('System content updated successfully');
            if (activeTab === 'management') setActiveTab('dashboard');
        } catch (error: any) {
            console.error('Failed to save portal data:', error);
            toast.error('Failed to save changes');
        } finally {
            setIsSaving(false);
        }
    };

    const handleCMSUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        handleSave(formData);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
                    <p className="text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs">Initializing Secure Portal...</p>
                </div>
            </div>
        );
    }

    const { user, welcome, stats, services } = data || {};

    return (
        <div className="min-h-screen bg-[#f8fafc] flex">
            <ToastContainer position="bottom-right" theme="colored" />
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen">
                <div className="p-8">
                    <Link href="/" className="text-2xl font-black text-corporate-blue tracking-tighter flex items-center gap-2">
                        <div className="bg-corporate-blue text-white p-1.5 rounded-lg">
                            <Zap className="h-6 w-6 fill-current" />
                        </div>
                        revolv<span className="text-gray-900">It</span>
                    </Link>
                </div>

                <nav className="flex-1 px-6 space-y-2 mt-4">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'dashboard' ? 'bg-corporate-blue text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        Control Center
                    </button>
                    <button
                        onClick={() => setActiveTab('management')}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'management' ? 'bg-corporate-blue text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Edit className="h-5 w-5" />
                        Manage Content
                    </button>
                    <button
                        onClick={() => setActiveTab('inventory')}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'inventory' ? 'bg-corporate-blue text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Package className="h-5 w-5" />
                        Inventory Sync
                    </button>
                    <button
                        onClick={() => setActiveTab('analytics')}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === 'analytics' ? 'bg-corporate-blue text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <BarChart3 className="h-5 w-5" />
                        Live Analytics
                    </button>
                </nav>

                <div className="p-6 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Plan</p>
                        <p className="text-sm font-black text-gray-900">Enterprise Pro +</p>
                    </div>
                    <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                        <LogOut className="h-5 w-5" />
                        Secure Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-5 px-8 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-black text-gray-900 capitalize tracking-tight">{activeTab}</h1>
                        <span className="h-5 w-px bg-gray-200"></span>
                        <p className="text-sm text-gray-500 font-medium hidden sm:block">Welcome back to your workspace</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="p-2 text-gray-400 hover:text-corporate-blue relative bg-gray-50 rounded-full transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-gray-900 leading-none">{user?.name}</p>
                                <p className="text-[10px] font-bold text-corporate-blue uppercase tracking-widest mt-1">{user?.role}</p>
                            </div>
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-corporate-blue to-corporate-blue-dark shadow-lg shadow-blue-200 text-white flex items-center justify-center font-black">
                                {user?.initials}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content Area */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-3">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'dashboard' && (
                            <div className="space-y-10">
                                {/* Action Hero */}
                                <div className="bg-corporate-blue rounded-3xl p-6 text-white shadow-2xl shadow-blue-100 overflow-hidden relative group">
                                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                        <div>
                                            <div className="bg-white/20 backdrop-blur-md border border-white/20 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-4">
                                                <Zap className="h-3 w-3 text-blue-200" />
                                                SYSTEM HEALTH: 100% OPERATIONAL
                                            </div>
                                            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{welcome?.title}</h2>
                                            <p className="text-blue-100/80 text-lg max-w-xl leading-relaxed font-semibold">
                                                {welcome?.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 mt-10">
                                                <button className="bg-white text-corporate-blue px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-xl">
                                                    Generate Sales Report
                                                </button>
                                                <button className="bg-blue-500/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-colors">
                                                    Manage Terminal Group
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative h-64 lg:h-80 w-full hidden lg:block">
                                            {welcome?.image && (
                                                <Image
                                                    src={welcome.image}
                                                    alt="POS Terminal Analytics"
                                                    fill
                                                    className="object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
                                                />
                                            )}
                                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl text-corporate-blue animate-bounce">
                                                <TrendingUp className="h-8 w-8" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                        <LayoutDashboard className="h-[30rem] w-[30rem]" />
                                    </div>
                                </div>

                                {/* Premium Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {stats?.map((stat: any, i: number) => {
                                        const StatIcon = IconMap[stat.icon] || TrendingUp;
                                        return (
                                            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                                                        <StatIcon className="h-7 w-7" />
                                                    </div>
                                                    <span className="text-xs font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                                                        {stat.growth}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                                <p className="text-3xl font-black text-gray-900 mt-2 tracking-tight">{stat.value}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Specialized Services Table */}
                                    <div className="lg:col-span-2">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                            <div className="p-5 sm:p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
                                                <div>
                                                    <h3 className="font-black text-gray-900 text-lg tracking-tight">System Infrastructure</h3>
                                                    <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-widest">Active nodes & Deployment Status</p>
                                                </div>
                                            </div>
                                            <div className="divide-y divide-gray-50">
                                                {services?.map((service: any, i: number) => (
                                                    <div key={i} className="p-5 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                                        <div className="flex items-center gap-5">
                                                            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center text-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300 font-black text-xl">
                                                                {service.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <p className="text-base font-black text-gray-900 tracking-tight">{service.name}</p>
                                                                <div className="flex items-center gap-3 mt-1.5">
                                                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{service.type}</span>
                                                                    <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                                                                    <span className="text-[10px] font-black text-corporate-blue uppercase tracking-widest">{service.usage} Resources Used</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="flex items-center gap-2 justify-end mb-2">
                                                                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                                                                <span className="text-xs font-black text-gray-900 uppercase">Operational</span>
                                                            </div>
                                                            <p className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 justify-end">
                                                                <Clock className="h-3 w-3" />
                                                                Next Sync: {service.expiry}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Utility Panel */}
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center relative overflow-hidden group">
                                            <div className="relative z-10">
                                                <div className="bg-white/10 backdrop-blur-md p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                                                    <HelpCircle className="h-10 w-10 text-white" />
                                                </div>
                                                <h3 className="font-black text-white text-2xl mb-4">Enterprise Support</h3>
                                                <p className="text-gray-400 font-medium mb-10 leading-relaxed text-sm">
                                                    Direct line to your dedicated solution architect. Standard response time: &lt; 15 mins.
                                                </p>
                                                <Link href="/contact" className="block w-full bg-white text-gray-900 py-4.5 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-xl">
                                                    Open Priority Channel
                                                </Link>
                                            </div>
                                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                                <ShieldCheck className="h-48 w-48 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="max-w-7xl mx-auto animate-fadeInUp pb-10">
                                {/* CMS Sub-Navigation */}
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-4 sticky top-0 z-20">
                                    <div className="flex items-center gap-1 p-1 overflow-x-auto scrollbar-hide">
                                        {[
                                            { id: 'hero', label: 'Hero', icon: Zap },
                                            { id: 'solutions', label: 'Solutions', icon: Building2 },
                                            { id: 'pricing', label: 'Pricing', icon: DollarSign },
                                            { id: 'careers', label: 'Careers', icon: Briefcase },
                                            { id: 'portfolio', label: 'Portfolio', icon: Globe },
                                            { id: 'services', label: 'Services', icon: Code },
                                            { id: 'testimonials', label: 'Testimonials', icon: Star },
                                            { id: 'values', label: 'Values', icon: Trophy },
                                            { id: 'team', label: 'Team', icon: Users },
                                        ].map(tab => (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setCmsSection(tab.id)}
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${cmsSection === tab.id
                                                    ? 'bg-corporate-blue text-white shadow-md shadow-blue-100'
                                                    : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                                                    }`}
                                            >
                                                <tab.icon className="h-3 w-3" />
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <form onSubmit={handleCMSUpdate}>
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">

                                        {/* ── HERO SECTION ── */}
                                        {cmsSection === 'hero' && (
                                            <div className="p-5 lg:p-6 space-y-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="bg-blue-50 p-2.5 rounded-xl"><Zap className="h-5 w-5 text-corporate-blue" /></div>
                                                    <div>
                                                        <h3 className="font-black text-gray-900 text-base">Hero Section</h3>
                                                        <p className="text-xs text-gray-400 font-medium">Update your homepage banner content</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Banner Title</label>
                                                        <input type="text" value={formData.welcome.title}
                                                            onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, title: e.target.value } })}
                                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all outline-none font-semibold text-gray-900"
                                                            placeholder="Enter powerful headline" required />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Banner Description</label>
                                                        <textarea value={formData.welcome.description}
                                                            onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, description: e.target.value } })}
                                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all outline-none font-semibold text-gray-900 h-28"
                                                            placeholder="Describe your system infrastructure" required />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Banner Image URL</label>
                                                        <input type="text" value={formData.welcome.image}
                                                            onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, image: e.target.value } })}
                                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all outline-none font-semibold text-gray-900 text-sm"
                                                            placeholder="https://images.unsplash.com/..." required />
                                                    </div>
                                                    <div className="relative h-44 w-full bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-200">
                                                        {formData.welcome.image ? (
                                                            <Image src={formData.welcome.image} alt="Preview" fill className="object-cover" />
                                                        ) : (
                                                            <div className="flex items-center justify-center h-full text-gray-400 font-bold uppercase text-xs">No Preview</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* ── SOLUTIONS SECTION ── */}
                                        {cmsSection === 'solutions' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-blue-50 p-2.5 rounded-xl"><Building2 className="h-5 w-5 text-corporate-blue" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Solutions</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage your solutions page content</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, solutions: [...formData.solutions, { title: 'New Solution', description: '', features: [], image: '', icon: 'Zap', color: 'bg-blue-600' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Solution
                                                    </button>
                                                </div>
                                                <div className="space-y-4">
                                                    {formData.solutions.map((solution: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <button type="button" onClick={() => { const updated = [...formData.solutions]; updated.splice(idx, 1); setFormData({ ...formData, solutions: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                                <input type="text" value={solution.title}
                                                                    onChange={(e) => { const updated = [...formData.solutions]; updated[idx].title = e.target.value; setFormData({ ...formData, solutions: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Solution Title" />
                                                                <select value={solution.icon}
                                                                    onChange={(e) => { const updated = [...formData.solutions]; updated[idx].icon = e.target.value; setFormData({ ...formData, solutions: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                                                                    {Object.keys(IconMap).map(k => <option key={k} value={k}>{k}</option>)}
                                                                </select>
                                                            </div>
                                                            <textarea value={solution.description}
                                                                onChange={(e) => { const updated = [...formData.solutions]; updated[idx].description = e.target.value; setFormData({ ...formData, solutions: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-4 min-h-[70px]" placeholder="Description" />
                                                            <input type="text" value={solution.image}
                                                                onChange={(e) => { const updated = [...formData.solutions]; updated[idx].image = e.target.value; setFormData({ ...formData, solutions: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Image URL" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── PRICING SECTION ── */}
                                        {cmsSection === 'pricing' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-green-50 p-2.5 rounded-xl"><DollarSign className="h-5 w-5 text-green-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Pricing Plans</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage subscription tiers and features</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, pricing: [...formData.pricing, { title: 'New Plan', price: '0', description: '', features: [], isRecommended: false }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Plan
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {formData.pricing.map((plan: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <button type="button" onClick={() => { const updated = [...formData.pricing]; updated.splice(idx, 1); setFormData({ ...formData, pricing: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <input type="text" value={plan.title}
                                                                onChange={(e) => { const updated = [...formData.pricing]; updated[idx].title = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3" placeholder="Plan Name" />
                                                            <div className="grid grid-cols-2 gap-3 mb-3">
                                                                <input type="text" value={plan.price}
                                                                    onChange={(e) => { const updated = [...formData.pricing]; updated[idx].price = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Price (LKR)" />
                                                                <label className="flex items-center gap-2 text-sm font-bold text-gray-500 cursor-pointer">
                                                                    <input type="checkbox" checked={plan.isRecommended || false}
                                                                        onChange={(e) => { const updated = [...formData.pricing]; updated[idx].isRecommended = e.target.checked; setFormData({ ...formData, pricing: updated }); }}
                                                                        className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                                                                    Recommended
                                                                </label>
                                                            </div>
                                                            <textarea value={plan.description}
                                                                onChange={(e) => { const updated = [...formData.pricing]; updated[idx].description = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3 min-h-[60px]" placeholder="Plan Description" />
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Features (one per line)</label>
                                                                <textarea value={(plan.features || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.pricing]; updated[idx].features = e.target.value.split('\n'); setFormData({ ...formData, pricing: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[80px]" placeholder="Feature 1\nFeature 2\nFeature 3" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── CAREERS SECTION ── */}
                                        {cmsSection === 'careers' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-purple-50 p-2.5 rounded-xl"><Briefcase className="h-5 w-5 text-purple-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Job Openings</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage career opportunities</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, jobs: [...formData.jobs, { title: 'New Position', location: '', type: 'Full-time', department: '', description: '', requirements: [] }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Job
                                                    </button>
                                                </div>
                                                <div className="space-y-4">
                                                    {formData.jobs.map((job: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <button type="button" onClick={() => { const updated = [...formData.jobs]; updated.splice(idx, 1); setFormData({ ...formData, jobs: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                                                <input type="text" value={job.title}
                                                                    onChange={(e) => { const updated = [...formData.jobs]; updated[idx].title = e.target.value; setFormData({ ...formData, jobs: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Job Title" />
                                                                <input type="text" value={job.location}
                                                                    onChange={(e) => { const updated = [...formData.jobs]; updated[idx].location = e.target.value; setFormData({ ...formData, jobs: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Location" />
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                                                <input type="text" value={job.type}
                                                                    onChange={(e) => { const updated = [...formData.jobs]; updated[idx].type = e.target.value; setFormData({ ...formData, jobs: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Type (e.g. Full-time)" />
                                                                <input type="text" value={job.department}
                                                                    onChange={(e) => { const updated = [...formData.jobs]; updated[idx].department = e.target.value; setFormData({ ...formData, jobs: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Department" />
                                                            </div>
                                                            <textarea value={job.description}
                                                                onChange={(e) => { const updated = [...formData.jobs]; updated[idx].description = e.target.value; setFormData({ ...formData, jobs: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3 min-h-[60px]" placeholder="Job Description" />
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Requirements (one per line)</label>
                                                                <textarea value={(job.requirements || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.jobs]; updated[idx].requirements = e.target.value.split('\n'); setFormData({ ...formData, jobs: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[70px]" placeholder="Requirement 1\nRequirement 2" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── PORTFOLIO SECTION ── */}
                                        {cmsSection === 'portfolio' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-indigo-50 p-2.5 rounded-xl"><Globe className="h-5 w-5 text-indigo-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Portfolio Projects</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Showcase your best work</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, portfolio: [...formData.portfolio, { title: 'New Project', category: 'POS', image: '', description: '', features: [], link: '', technologies: [] }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Project
                                                    </button>
                                                </div>
                                                <div className="space-y-4">
                                                    {formData.portfolio.map((project: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <div className="absolute top-3 left-5"><span className="text-[10px] font-black uppercase tracking-widest text-corporate-blue bg-blue-50 px-3 py-1 rounded-full">Project #{idx + 1}</span></div>
                                                            <button type="button" onClick={() => { const updated = [...formData.portfolio]; updated.splice(idx, 1); setFormData({ ...formData, portfolio: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 mt-6">
                                                                <input type="text" value={project.title}
                                                                    onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].title = e.target.value; setFormData({ ...formData, portfolio: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Project Name" />
                                                                <select value={project.category}
                                                                    onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].category = e.target.value; setFormData({ ...formData, portfolio: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                                                                    <option value="POS">POS</option>
                                                                    <option value="Enterprise Solutions">Enterprise Solutions</option>
                                                                    <option value="NFT web">NFT web</option>
                                                                    <option value="Mobile development">Mobile development</option>
                                                                </select>
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                                                <input type="text" value={project.image}
                                                                    onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].image = e.target.value; setFormData({ ...formData, portfolio: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Image Path" />
                                                                <input type="text" value={project.link}
                                                                    onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].link = e.target.value; setFormData({ ...formData, portfolio: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Project Link" />
                                                            </div>
                                                            <textarea value={project.description}
                                                                onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].description = e.target.value; setFormData({ ...formData, portfolio: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3 min-h-[60px]" placeholder="Project Description" />
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Features (one per line)</label>
                                                                <textarea value={(project.features || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.portfolio]; updated[idx].features = e.target.value.split('\n'); setFormData({ ...formData, portfolio: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[70px]" placeholder="Feature 1\nFeature 2" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── WEBSITE SERVICES SECTION ── */}
                                        {cmsSection === 'services' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-cyan-50 p-2.5 rounded-xl"><Code className="h-5 w-5 text-cyan-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Website Services</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Services displayed on your homepage</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, websiteServices: [...formData.websiteServices, { icon: 'Code', title: 'New Service', description: '', features: [] }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Service
                                                    </button>
                                                </div>
                                                <div className="space-y-4">
                                                    {formData.websiteServices.map((service: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <div className="absolute top-3 left-5"><span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Service #{idx + 1}</span></div>
                                                            <button type="button" onClick={() => { const updated = [...formData.websiteServices]; updated.splice(idx, 1); setFormData({ ...formData, websiteServices: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 mt-6">
                                                                <input type="text" value={service.title}
                                                                    onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].title = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Service Title" />
                                                                <select value={service.icon}
                                                                    onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].icon = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                                                                    {Object.keys(IconMap).map(k => <option key={k} value={k}>{k}</option>)}
                                                                </select>
                                                            </div>
                                                            <textarea value={service.description}
                                                                onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].description = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3 min-h-[70px]" placeholder="Service Description" />
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Features (one per line)</label>
                                                                <textarea value={(service.features || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].features = e.target.value.split('\n'); setFormData({ ...formData, websiteServices: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[80px]" placeholder="Feature 1\nFeature 2\nFeature 3" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── TESTIMONIALS SECTION ── */}
                                        {cmsSection === 'testimonials' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-amber-50 p-2.5 rounded-xl"><Star className="h-5 w-5 text-amber-500" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Testimonials</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Client reviews and feedback</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, testimonials: [...formData.testimonials, { rating: 5, text: '', name: '', role: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Testimonial
                                                    </button>
                                                </div>
                                                <div className="space-y-4">
                                                    {formData.testimonials.map((testimonial: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group">
                                                            <div className="absolute top-3 left-5"><span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Testimonial #{idx + 1}</span></div>
                                                            <button type="button" onClick={() => { const updated = [...formData.testimonials]; updated.splice(idx, 1); setFormData({ ...formData, testimonials: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 mt-6">
                                                                <input type="text" value={testimonial.name}
                                                                    onChange={(e) => { const updated = [...formData.testimonials]; updated[idx].name = e.target.value; setFormData({ ...formData, testimonials: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Client Name" />
                                                                <input type="text" value={testimonial.role}
                                                                    onChange={(e) => { const updated = [...formData.testimonials]; updated[idx].role = e.target.value; setFormData({ ...formData, testimonials: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Role / Company" />
                                                                <select value={testimonial.rating}
                                                                    onChange={(e) => { const updated = [...formData.testimonials]; updated[idx].rating = parseInt(e.target.value); setFormData({ ...formData, testimonials: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                                                                    {[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>)}
                                                                </select>
                                                            </div>
                                                            <textarea value={testimonial.text}
                                                                onChange={(e) => { const updated = [...formData.testimonials]; updated[idx].text = e.target.value; setFormData({ ...formData, testimonials: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[80px]" placeholder="Testimonial text..." />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── COMPANY VALUES SECTION ── */}
                                        {cmsSection === 'values' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-emerald-50 p-2.5 rounded-xl"><Trophy className="h-5 w-5 text-emerald-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Company Values</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Core values shown on the About page</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, values: [...formData.values, { icon: 'Trophy', title: 'New Value', description: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Value
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {formData.values.map((value: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group">
                                                            <button type="button" onClick={() => { const updated = [...formData.values]; updated.splice(idx, 1); setFormData({ ...formData, values: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <input type="text" value={value.title}
                                                                onChange={(e) => { const updated = [...formData.values]; updated[idx].title = e.target.value; setFormData({ ...formData, values: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3" placeholder="Value Title" />
                                                            <select value={value.icon}
                                                                onChange={(e) => { const updated = [...formData.values]; updated[idx].icon = e.target.value; setFormData({ ...formData, values: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3">
                                                                {Object.keys(IconMap).map(k => <option key={k} value={k}>{k}</option>)}
                                                            </select>
                                                            <textarea value={value.description}
                                                                onChange={(e) => { const updated = [...formData.values]; updated[idx].description = e.target.value; setFormData({ ...formData, values: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[60px]" placeholder="Value Description" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── TEAM MEMBERS SECTION ── */}
                                        {cmsSection === 'team' && (
                                            <div className="p-6 lg:p-8 space-y-5">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-violet-50 p-2.5 rounded-xl"><Users className="h-5 w-5 text-violet-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Team Members</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Your team displayed on the About page</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, team: [...formData.team, { name: '', role: '', image: '', bio: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Member
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {formData.team.map((member: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-2">
                                                            <button type="button" onClick={() => { const updated = [...formData.team]; updated.splice(idx, 1); setFormData({ ...formData, team: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                <input type="text" value={member.name}
                                                                    onChange={(e) => { const updated = [...formData.team]; updated[idx].name = e.target.value; setFormData({ ...formData, team: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Full Name" />
                                                                <input type="text" value={member.role}
                                                                    onChange={(e) => { const updated = [...formData.team]; updated[idx].role = e.target.value; setFormData({ ...formData, team: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Role / Title" />
                                                            </div>
                                                            <input type="text" value={member.image}
                                                                onChange={(e) => { const updated = [...formData.team]; updated[idx].image = e.target.value; setFormData({ ...formData, team: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Image URL (e.g. /team/photo.jpg)" />
                                                            <textarea value={member.bio}
                                                                onChange={(e) => { const updated = [...formData.team]; updated[idx].bio = e.target.value; setFormData({ ...formData, team: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[60px]" placeholder="Short Bio" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Publish Button — always visible */}
                                    <div className="mt-6">
                                        <button type="submit" disabled={isSaving}
                                            className="w-full bg-corporate-blue text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-100 hover:bg-corporate-blue-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase tracking-wider">
                                            {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
                                            {isSaving ? 'Publishing Changes...' : 'Publish All Changes'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}

