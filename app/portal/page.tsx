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
    Edit
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
    ChevronRight
};

export default function Portal() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Form states for Management
    const [formData, setFormData] = useState<any>({
        welcome: { title: '', description: '', image: '' },
        stats: [],
        services: [],
        solutions: [],
        pricing: [],
        jobs: []
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
                <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'dashboard' && (
                            <div className="space-y-10">
                                {/* Action Hero */}
                                <div className="bg-corporate-blue rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-100 overflow-hidden relative group">
                                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                        <div>
                                            <div className="bg-white/20 backdrop-blur-md border border-white/20 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {stats?.map((stat: any, i: number) => {
                                        const StatIcon = IconMap[stat.icon] || TrendingUp;
                                        return (
                                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
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

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    {/* Specialized Services Table */}
                                    <div className="lg:col-span-2">
                                        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                                            <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
                                                <div>
                                                    <h3 className="font-black text-gray-900 text-lg tracking-tight">System Infrastructure</h3>
                                                    <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-widest">Active nodes & Deployment Status</p>
                                                </div>
                                            </div>
                                            <div className="divide-y divide-gray-50">
                                                {services?.map((service: any, i: number) => (
                                                    <div key={i} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors group">
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
                                    <div className="space-y-10">
                                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-10 text-center relative overflow-hidden group">
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
                            <div className="max-w-4xl mx-auto animate-fadeInUp pb-20">
                                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden mb-10">
                                    <div className="p-10 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                                        <div>
                                            <h3 className="font-black text-gray-900 text-2xl tracking-tight">System Content Manager</h3>
                                            <p className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-widest italic">Update images and dashboard text instantly</p>
                                        </div>
                                        <div className="bg-corporate-blue/10 p-3 rounded-2xl">
                                            <Edit className="h-8 w-8 text-corporate-blue" />
                                        </div>
                                    </div>

                                    <form onSubmit={handleCMSUpdate} className="p-10 space-y-12">
                                        {/* Welcome Section Form */}
                                        <section className="space-y-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Zap className="h-5 w-5 text-corporate-blue" />
                                                <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">Hero Section</h4>
                                            </div>

                                            <div className="grid grid-cols-1 gap-6">
                                                <div>
                                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Banner Title</label>
                                                    <input
                                                        type="text"
                                                        value={formData.welcome.title}
                                                        onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, title: e.target.value } })}
                                                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-corporate-blue transition-all outline-none font-bold text-gray-900"
                                                        placeholder="Enter powerful headline"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Banner Description</label>
                                                    <textarea
                                                        value={formData.welcome.description}
                                                        onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, description: e.target.value } })}
                                                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-corporate-blue transition-all outline-none font-bold text-gray-900 h-32"
                                                        placeholder="Describe your system infrastructure"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                                <div className="space-y-4">
                                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Banner Image URL</label>
                                                    <input
                                                        type="text"
                                                        value={formData.welcome.image}
                                                        onChange={(e) => setFormData({ ...formData, welcome: { ...formData.welcome, image: e.target.value } })}
                                                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-corporate-blue transition-all outline-none font-bold text-gray-900 text-sm"
                                                        placeholder="https://images.unsplash.com/..."
                                                        required
                                                    />
                                                </div>
                                                <div className="relative h-48 w-full bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200">
                                                    {formData.welcome.image ? (
                                                        <Image src={formData.welcome.image} alt="Preview" fill className="object-cover" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-400 font-bold uppercase text-xs">No Preview</div>
                                                    )}
                                                </div>
                                            </div>
                                        </section>

                                        <div className="h-px bg-gray-100"></div>

                                        {/* Solutions Manager */}
                                        <section className="space-y-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Building2 className="h-5 w-5 text-corporate-blue" />
                                                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">Solutions Section</h4>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({
                                                        ...formData,
                                                        solutions: [...formData.solutions, { title: 'New Solution', description: '', features: [], image: '', icon: 'Zap', color: 'bg-blue-600' }]
                                                    })}
                                                    className="inline-flex items-center gap-2 text-corporate-blue font-black text-xs uppercase hover:underline"
                                                >
                                                    <PlusCircle className="h-4 w-4" /> Add Solution
                                                </button>
                                            </div>

                                            <div className="space-y-6">
                                                {formData.solutions.map((sol: any, idx: number) => (
                                                    <div key={idx} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 relative group">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const updated = formData.solutions.filter((_: any, i: number) => i !== idx);
                                                                setFormData({ ...formData, solutions: updated });
                                                            }}
                                                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <input
                                                                type="text"
                                                                value={sol.title}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.solutions];
                                                                    updated[idx].title = e.target.value;
                                                                    setFormData({ ...formData, solutions: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Title"
                                                            />
                                                            <select
                                                                value={sol.icon}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.solutions];
                                                                    updated[idx].icon = e.target.value;
                                                                    setFormData({ ...formData, solutions: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                            >
                                                                {Object.keys(IconMap).map(k => <option key={k} value={k}>{k}</option>)}
                                                            </select>
                                                            <textarea
                                                                value={sol.description}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.solutions];
                                                                    updated[idx].description = e.target.value;
                                                                    setFormData({ ...formData, solutions: updated });
                                                                }}
                                                                className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium h-20"
                                                                placeholder="Description"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={sol.image}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.solutions];
                                                                    updated[idx].image = e.target.value;
                                                                    setFormData({ ...formData, solutions: updated });
                                                                }}
                                                                className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium"
                                                                placeholder="Image URL"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <div className="h-px bg-gray-100"></div>

                                        {/* Pricing Manager */}
                                        <section className="space-y-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <DollarSign className="h-5 w-5 text-corporate-blue" />
                                                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">Pricing Section</h4>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({
                                                        ...formData,
                                                        pricing: [...formData.pricing, { title: 'New Plan', price: '0', description: '', features: [], isRecommended: false }]
                                                    })}
                                                    className="inline-flex items-center gap-2 text-corporate-blue font-black text-xs uppercase hover:underline"
                                                >
                                                    <PlusCircle className="h-4 w-4" /> Add Plan
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {formData.pricing.map((plan: any, idx: number) => (
                                                    <div key={idx} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 relative">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const updated = formData.pricing.filter((_: any, i: number) => i !== idx);
                                                                setFormData({ ...formData, pricing: updated });
                                                            }}
                                                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                        <div className="space-y-4">
                                                            <input
                                                                type="text"
                                                                value={plan.title}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.pricing];
                                                                    updated[idx].title = e.target.value;
                                                                    setFormData({ ...formData, pricing: updated });
                                                                }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Plan Name"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={plan.price}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.pricing];
                                                                    updated[idx].price = e.target.value;
                                                                    setFormData({ ...formData, pricing: updated });
                                                                }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-black text-corporate-blue"
                                                                placeholder="Price (LKR)"
                                                            />
                                                            <div className="flex items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={plan.isRecommended}
                                                                    onChange={(e) => {
                                                                        const updated = [...formData.pricing];
                                                                        updated[idx].isRecommended = e.target.checked;
                                                                        setFormData({ ...formData, pricing: updated });
                                                                    }}
                                                                    id={`rec-${idx}`}
                                                                />
                                                                <label htmlFor={`rec-${idx}`} className="text-xs font-bold uppercase text-gray-500">Recommended Plan</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <div className="h-px bg-gray-100"></div>

                                        {/* Careers Manager */}
                                        <section className="space-y-8">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Briefcase className="h-5 w-5 text-corporate-blue" />
                                                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">Careers Section</h4>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({
                                                        ...formData,
                                                        jobs: [...formData.jobs, { title: 'New Role', location: 'Remote', type: 'Full-time', department: 'Engineering', description: '', requirements: [] }]
                                                    })}
                                                    className="inline-flex items-center gap-2 text-corporate-blue font-black text-xs uppercase hover:underline"
                                                >
                                                    <PlusCircle className="h-4 w-4" /> Add Job
                                                </button>
                                            </div>

                                            <div className="space-y-6">
                                                {formData.jobs.map((job: any, idx: number) => (
                                                    <div key={idx} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 relative group">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const updated = formData.jobs.filter((_: any, i: number) => i !== idx);
                                                                setFormData({ ...formData, jobs: updated });
                                                            }}
                                                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <input
                                                                type="text"
                                                                value={job.title}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.jobs];
                                                                    updated[idx].title = e.target.value;
                                                                    setFormData({ ...formData, jobs: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Job Title"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={job.location}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.jobs];
                                                                    updated[idx].location = e.target.value;
                                                                    setFormData({ ...formData, jobs: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Location"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                        <section className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 shadow-xl">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-purple-600 p-3 rounded-2xl shadow-lg">
                                                        <Briefcase className="text-white h-6 w-6" />
                                                    </div>
                                                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">PORTFOLIO PROJECTS</h3>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, portfolio: [...(formData.portfolio || []), { title: '', category: 'POS', description: '', image: '', link: '', features: [], technologies: [] }] })}
                                                    className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-xl font-bold hover:bg-purple-50 transition-all flex items-center gap-2"
                                                >
                                                    <PlusCircle className="h-5 w-5" /> ADD PROJECT
                                                </button>
                                            </div>
                                            <div className="space-y-6">
                                                {(formData.portfolio || []).map((project: any, idx: number) => (
                                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                                        <div className="flex justify-between items-center">
                                                            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-black">PROJECT #{idx + 1}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const updated = [...formData.portfolio];
                                                                    updated.splice(idx, 1);
                                                                    setFormData({ ...formData, portfolio: updated });
                                                                }}
                                                                className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all"
                                                            >
                                                                <Trash2 className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <input
                                                                type="text"
                                                                value={project.title}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.portfolio];
                                                                    updated[idx].title = e.target.value;
                                                                    setFormData({ ...formData, portfolio: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Project Title"
                                                            />
                                                            <select
                                                                value={project.category}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.portfolio];
                                                                    updated[idx].category = e.target.value;
                                                                    setFormData({ ...formData, portfolio: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                            >
                                                                <option value="POS">POS</option>
                                                                <option value="Enterprise Solutions">Enterprise Solutions</option>
                                                                <option value="NFT web">NFT web</option>
                                                                <option value="Mobile development">Mobile development</option>
                                                            </select>
                                                            <input
                                                                type="text"
                                                                value={project.image}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.portfolio];
                                                                    updated[idx].image = e.target.value;
                                                                    setFormData({ ...formData, portfolio: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Image URL"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={project.link}
                                                                onChange={(e) => {
                                                                    const updated = [...formData.portfolio];
                                                                    updated[idx].link = e.target.value;
                                                                    setFormData({ ...formData, portfolio: updated });
                                                                }}
                                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold"
                                                                placeholder="Project Link"
                                                            />
                                                        </div>
                                                        <textarea
                                                            value={project.description}
                                                            onChange={(e) => {
                                                                const updated = [...formData.portfolio];
                                                                updated[idx].description = e.target.value;
                                                                setFormData({ ...formData, portfolio: updated });
                                                            }}
                                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold min-h-[80px]"
                                                            placeholder="Short Description"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <div className="pt-6">
                                            <button
                                                type="submit"
                                                disabled={isSaving}
                                                className="w-full bg-corporate-blue text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-200 hover:bg-corporate-blue-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {isSaving ? <Loader2 className="h-6 w-6 animate-spin" /> : <Save className="h-6 w-6" />}
                                                {isSaving ? 'UPDATING GLOBAL SYSTEM...' : 'PUBLISH ALL CHANGES'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
