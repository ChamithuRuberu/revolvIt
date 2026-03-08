'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
    Rocket,
    Menu,
    X,
    LayoutGrid,
    Activity,
    Database,
    LayoutPanelTop,
    Sparkles,
    TrendingDown,
    Upload,
    ImagePlus
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
    Rocket,
    LayoutGrid,
    Activity,
    Database,
    LayoutPanelTop,
    Sparkles,
    TrendingDown,
    Upload,
    ImagePlus
};

export default function Portal() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();

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
        team: [],
        brands: [],
        hardware: [],
        posPricing: {
            hero: { headline: '', subheadline: '', kokoText: '', joinText: '' },
            setups: [],
            softwarePlans: [],
            hardwareBundles: [],
            savings: { competitorMonthly: '', competitor5Year: '', savingsText: '' }
        }
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

    const handleLogout = async () => {
        try {
            const res = await fetch('/api/logout', { method: 'POST' });
            if (res.ok) router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            router.push('/login');
        }
    };

    const handleHardwareImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        const formDataPayload = new FormData();
        formDataPayload.append('file', file);
        try {
            const toastId = toast.loading('Uploading image...');
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formDataPayload
            });
            const result = await res.json();
            toast.dismiss(toastId);
            if (result.success) {
                const updated = [...formData.hardware];
                updated[idx] = { ...updated[idx], image: result.url };
                const newFormData = { ...formData, hardware: updated };
                setFormData(newFormData);
                setData(newFormData);
                
                fetch('/api/portal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newFormData),
                }).catch(console.error);

                toast.success('Image uploaded & saved automatically');
            } else {
                toast.error(result.error || 'Upload failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Upload failed');
        }
    };

    const handleHardwareHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        const formDataPayload = new FormData();
        formDataPayload.append('file', file);
        try {
            const toastId = toast.loading('Uploading hero image...');
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formDataPayload
            });
            const result = await res.json();
            toast.dismiss(toastId);
            if (result.success) {
                const updated = [...(formData.hardwareHero || [])];
                updated[idx] = { ...updated[idx], image: result.url };
                const newFormData = { ...formData, hardwareHero: updated };
                setFormData(newFormData);
                setData(newFormData);
                
                fetch('/api/portal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newFormData),
                }).catch(console.error);

                toast.success('Hero Image uploaded & saved automatically');
            } else {
                toast.error(result.error || 'Upload failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Upload failed');
        }
    };

    const handlePOSHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        const formDataPayload = new FormData();
        formDataPayload.append('file', file);
        try {
            const toastId = toast.loading('Uploading POS hero image...');
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formDataPayload
            });
            const result = await res.json();
            toast.dismiss(toastId);
            if (result.success) {
                const newFormData = { 
                    ...formData, 
                    posPricing: { 
                        ...(formData.posPricing || {}), 
                        hero: { ...(formData.posPricing?.hero || {}), image: result.url } 
                    } 
                };
                setFormData(newFormData);
                setData(newFormData);
                
                fetch('/api/portal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newFormData),
                }).catch(console.error);

                toast.success('Hero image updated successfully');
            } else {
                toast.error(result.error || 'Upload failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Upload failed');
        }
    };

    const handlePOSHardwareBundleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        const formDataPayload = new FormData();
        formDataPayload.append('file', file);
        try {
            const toastId = toast.loading('Uploading bundle image...');
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formDataPayload
            });
            const result = await res.json();
            toast.dismiss(toastId);
            if (result.success) {
                const updatedBundles = [...(formData.posPricing?.hardwareBundles || [])];
                updatedBundles[idx] = { ...updatedBundles[idx], image: result.url };

                const newFormData = { 
                    ...formData, 
                    posPricing: { 
                        ...(formData.posPricing || {}), 
                        hardwareBundles: updatedBundles 
                    } 
                };
                setFormData(newFormData);
                setData(newFormData);
                
                fetch('/api/portal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newFormData),
                }).catch(console.error);

                toast.success('Bundle image updated');
            } else {
                toast.error(result.error || 'Upload failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Upload failed');
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
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-all"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-50 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                w-72 flex flex-col
            `}>
                <div className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-corporate-blue rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-100">R</div>
                        <span className="font-black text-gray-900 tracking-tight text-xl">revolvIt</span>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-gray-400">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1 px-6 space-y-2 mt-4">
                    {[
                        { id: 'dashboard', label: 'Control Center', icon: LayoutGrid },
                        { id: 'management', label: 'Manage Content', icon: Edit },
                        { id: 'inventory', label: 'Inventory Sync', icon: Package },
                        { id: 'analytics', label: 'Live Analytics', icon: BarChart3 }
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === item.id ? 'bg-corporate-blue text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Plan</p>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-sm font-black text-gray-900">Enterprise Pro +</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Secure Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-400 hover:text-corporate-blue bg-gray-50 rounded-lg transition-colors">
                            <Menu className="h-6 w-6" />
                        </button>
                        <h1 className="text-lg sm:text-xl font-black text-gray-900 capitalize tracking-tight">{activeTab}</h1>
                        <span className="h-5 w-px bg-gray-200 hidden sm:block"></span>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:block">Welcome back to your workspace</p>
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
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start pb-10">
                                {/* Action Hero - Main Highlight */}
                                <div className="xl:col-span-8 bg-corporate-blue rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-100 overflow-hidden relative group min-h-[400px]">
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="bg-white/20 backdrop-blur-md border border-white/20 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-6">
                                                <Zap className="h-3 w-3 text-blue-200" />
                                                SYSTEM HEALTH: 100% OPERATIONAL
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight max-w-2xl">{welcome?.title}</h2>
                                            <p className="text-blue-100/80 text-base sm:text-lg max-w-xl leading-relaxed font-semibold mb-8">
                                                {welcome?.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-auto">
                                            <button className="bg-white text-corporate-blue px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-xs sm:text-sm hover:scale-105 transition-transform shadow-xl">
                                                Generate Sales Report
                                            </button>
                                            <button className="bg-blue-500/30 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-xs sm:text-sm hover:bg-white/10 transition-colors">
                                                Manage Terminals
                                            </button>
                                        </div>
                                    </div>
                                    {welcome?.image && (
                                        <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 opacity-20 lg:opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                            <Image
                                                src={welcome.image}
                                                alt="Analytics Background"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute -bottom-10 -right-10 p-12 opacity-5 pointer-events-none transition-transform duration-700 group-hover:rotate-12">
                                        <LayoutDashboard className="h-96 w-96 font-black" />
                                    </div>
                                </div>

                                {/* Quick Actions Link / Secondary Stats - Chained Bento Style */}
                                <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden relative">
                                        <div className="relative z-10">
                                            <div className="h-14 w-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <Star className="h-7 w-7 text-amber-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-gray-900 mb-2">New Reviews</h3>
                                            <p className="text-sm text-gray-400 font-bold mb-6">4 new testimonials awaiting approval in the CMS portal.</p>
                                        </div>
                                        <button
                                            onClick={() => setActiveTab('management')}
                                            className="relative z-10 flex items-center gap-2 text-corporate-blue font-black text-sm group-hover:gap-3 transition-all"
                                        >
                                            Review Now <ChevronRight className="h-4 w-4" />
                                        </button>
                                        <div className="absolute -top-6 -right-6 text-gray-50 opacity-50 group-hover:text-amber-50 transition-colors">
                                            <Star className="h-32 w-32" />
                                        </div>
                                    </div>

                                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative group overflow-hidden">
                                        <div className="relative z-10">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Active Sessions</p>
                                            <div className="flex items-end gap-3 mb-6">
                                                <p className="text-4xl font-black text-gray-900">1,200+</p>
                                                <span className="text-xs font-black text-green-600 bg-green-50 px-2 py-1 rounded-md mb-1">+8%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                <div className="bg-corporate-blue h-full w-[85%] rounded-full"></div>
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-bold mt-3 uppercase tracking-wider">Storage Capacity: 85% used</p>
                                        </div>
                                        <Database className="absolute -bottom-8 -right-8 h-32 w-32 text-gray-50 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>

                                {/* Dynamic Stats - Responsive Chain Grid */}
                                <div className="xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {stats?.map((stat: any, i: number) => {
                                        const StatIcon = IconMap[stat.icon] || TrendingUp;
                                        return (
                                            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-8">
                                                        <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md`}>
                                                            <StatIcon className="h-7 w-7" />
                                                        </div>
                                                        <span className="text-xs font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                                                            {stat.growth}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">{stat.label}</p>
                                                    <p className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</p>
                                                </div>
                                                <div className="mt-6 flex items-center justify-between">
                                                    <div className="flex -space-x-2">
                                                        {[1, 2, 3].map(x => (
                                                            <div key={x} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-400">
                                                                {x}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View Details</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Bonus "Chained" Stats - Like Infrastructure Status */}
                                <div className="xl:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm lg:col-span-2 flex flex-col sm:flex-row items-center gap-8 group">
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-xl font-black text-gray-900 mb-2">Global Infrastructure</h3>
                                            <p className="text-sm text-gray-400 font-bold mb-4">Your POS network is distributed across 6 regions with low latency synchronization.</p>
                                            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                                {['US-East', 'EU-West', 'AS-South', 'AU-East'].map(region => (
                                                    <span key={region} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-black text-gray-500 uppercase tracking-widest">{region}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="h-32 w-32 relative shrink-0">
                                            <div className="absolute inset-0 border-[10px] border-blue-50 rounded-full"></div>
                                            <div className="absolute inset-0 border-[10px] border-corporate-blue rounded-full border-t-transparent animate-spin-slow"></div>
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <p className="text-xl font-black text-corporate-blue">94%</p>
                                                <p className="text-[8px] font-black text-gray-400 uppercase">Load</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-corporate-gray to-gray-800 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between group overflow-hidden relative">
                                        <div className="relative z-10">
                                            <h3 className="text-lg font-black mb-1">Advanced Terminal Sync</h3>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Real-time Data Stream</p>
                                            <div className="flex items-center gap-2 text-green-400 mb-8">
                                                <Activity className="h-4 w-4 animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Active Connection</span>
                                            </div>
                                        </div>
                                        <button className="relative z-10 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-xs font-black transition-all">
                                            Open Monitoring Console
                                        </button>
                                        <div className="absolute -bottom-10 -right-10 opacity-10 rotate-45 group-hover:rotate-12 transition-transform duration-1000">
                                            <Cloud className="h-64 w-64" />
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
                                            { id: 'brands', label: 'Brands', icon: Globe },
                                            { id: 'hardware', label: 'Hardware', icon: Monitor },
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.solutions.map((solution: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
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
                                            <div className="p-5 lg:p-6 space-y-8 animate-fadeIn">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="bg-blue-50 p-3 rounded-2xl"><LayoutPanelTop className="h-6 w-6 text-corporate-blue" /></div>
                                                    <div>
                                                        <h3 className="font-black text-gray-900 text-xl tracking-tight">POS Landing Page Console</h3>
                                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global conversion strategy manager</p>
                                                    </div>
                                                </div>

                                                {/* Hero Editor */}
                                                <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-6">
                                                        <Sparkles className="h-4 w-4 text-orange-400" />
                                                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest italic">Hero & CTAs</h4>
                                                    </div>
                                                    <div className="flex items-center gap-6 mb-8">
                                                        <div className="w-1/3 aspect-[4/3] bg-white border border-gray-100 rounded-3xl overflow-hidden relative group/hero shadow-inner">
                                                            {formData.posPricing?.hero?.image ? (
                                                                <img src={formData.posPricing.hero.image} alt="Hero" className="w-full h-full object-cover transition-transform group-hover/hero:scale-105" />
                                                            ) : (
                                                                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                                                                    <Monitor className="h-10 w-10 mb-2 opacity-20" />
                                                                    <span className="text-[10px] font-black uppercase">No Hero Image</span>
                                                                </div>
                                                            )}
                                                            <label className="absolute inset-0 bg-black/40 opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]">
                                                                <input type="file" className="hidden" onChange={handlePOSHeroImageUpload} accept="image/*" />
                                                                <div className="bg-white text-corporate-blue p-3 rounded-full shadow-2xl">
                                                                    <Upload className="h-5 w-5" />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="flex-1 space-y-4">
                                                            <div className="p-4 bg-white/50 border border-gray-100 rounded-2xl">
                                                                <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1" style={{ fontSize: '12px' }}>Visual Strategy</h5>
                                                                <p className="text-xs font-bold text-gray-600">This image represents your flagship hardware on the landing page hero.</p>
                                                            </div>
                                                            <button 
                                                                type="button"
                                                                onClick={() => {
                                                                    const el = document.createElement('input');
                                                                    el.type = 'file';
                                                                    el.accept = 'image/*';
                                                                    el.onchange = (e: any) => handlePOSHeroImageUpload(e);
                                                                    el.click();
                                                                }}
                                                                className="w-full py-3 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-corporate-blue hover:bg-gray-50 hover:border-corporate-blue/30 transition-all flex items-center justify-center gap-2"
                                                            >
                                                                <ImagePlus className="h-4 w-4" /> Change Primary Visual
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="md:col-span-2">
                                                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Main Headline</label>
                                                            <input type="text" value={formData.posPricing?.hero?.headline || ''}
                                                                onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, hero: { ...formData.posPricing.hero, headline: e.target.value } } })}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all outline-none font-black text-gray-900 italic"
                                                                placeholder="Headline (e.g. Stop Renting. Own Your Profits.)" />
                                                        </div>
                                                        <div className="md:col-span-2">
                                                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Sub-headline</label>
                                                            <textarea value={formData.posPricing?.hero?.subheadline || ''}
                                                                onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, hero: { ...formData.posPricing.hero, subheadline: e.target.value } } })}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all outline-none font-bold text-gray-600 text-sm italic min-h-[80px]"
                                                                placeholder="Sub-headline copy" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Koko Installment Text</label>
                                                            <input type="text" value={formData.posPricing?.hero?.kokoText || ''}
                                                                onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, hero: { ...formData.posPricing.hero, kokoText: e.target.value } } })}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Footer Call-to-action text</label>
                                                            <input type="text" value={formData.posPricing?.hero?.joinText || ''}
                                                                onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, hero: { ...formData.posPricing.hero, joinText: e.target.value } } })}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Software Plans Editor */}
                                                <div className="space-y-6">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <ShieldCheck className="h-5 w-5 text-corporate-blue" />
                                                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest italic">Software Lifetime Licenses</h4>
                                                        </div>
                                                        <button type="button" 
                                                            onClick={() => {
                                                                const plans = [...(formData.posPricing.softwarePlans || [])];
                                                                plans.push({ name: 'New Plan', price: '0', description: '', features: [], badge: '', isPopular: false });
                                                                setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans } });
                                                            }}
                                                            className="text-[10px] font-black text-corporate-blue uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                                                            <Plus className="h-3 w-3" /> Add License Tier
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                        {(formData.posPricing?.softwarePlans || []).map((plan: any, idx: number) => (
                                                            <div key={idx} className={`p-6 rounded-3xl border-2 bg-white relative group transition-all ${plan.isPopular ? 'border-corporate-blue ring-8 ring-blue-50/50' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}>
                                                                <button type="button" onClick={() => {
                                                                    const plans = [...formData.posPricing.softwarePlans];
                                                                    plans.splice(idx, 1);
                                                                    setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans } });
                                                                }} className="absolute -top-3 -right-3 h-8 w-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-red-500 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    <Trash2 className="h-4 w-4" />
                                                                </button>
                                                                <div className="space-y-4">
                                                                    <div className="flex items-center justify-between gap-3">
                                                                        <input type="text" value={plan.name} onChange={(e) => {
                                                                            const plans = [...formData.posPricing.softwarePlans];
                                                                            plans[idx].name = e.target.value;
                                                                            setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                        }} className="w-full text-lg font-black text-gray-900 italic bg-transparent outline-none" placeholder="Plan Name" />
                                                                        <label className="shrink-0 flex items-center gap-1.5 cursor-pointer">
                                                                            <input type="checkbox" checked={plan.isPopular} onChange={(e) => {
                                                                                const plans = [...formData.posPricing.softwarePlans].map((p, i) => ({ ...p, isPopular: i === idx ? e.target.checked : false }));
                                                                                setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                            }} className="rounded h-3 w-3 text-corporate-blue" />
                                                                            <span className="text-[8px] font-black uppercase text-corporate-blue">Fav</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="flex items-baseline gap-1">
                                                                        <span className="text-[10px] font-black text-gray-400">LKR</span>
                                                                        <input type="text" value={plan.price} onChange={(e) => {
                                                                            const plans = [...formData.posPricing.softwarePlans];
                                                                            plans[idx].price = e.target.value;
                                                                            setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                        }} className="w-full text-2xl font-black text-gray-900 bg-transparent outline-none" />
                                                                    </div>
                                                                    <input type="text" value={plan.badge} onChange={(e) => {
                                                                        const plans = [...formData.posPricing.softwarePlans];
                                                                        plans[idx].badge = e.target.value;
                                                                        setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                    }} className="w-full text-[10px] font-black uppercase tracking-widest text-corporate-blue/70 bg-blue-50/50 rounded-lg px-3 py-1.5" placeholder="Badge (Optional)" />
                                                                    <textarea value={plan.description} onChange={(e) => {
                                                                        const plans = [...formData.posPricing.softwarePlans];
                                                                        plans[idx].description = e.target.value;
                                                                        setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                    }} className="w-full text-xs font-bold text-gray-500 italic bg-gray-50 rounded-xl p-3 outline-none" placeholder="Target audience description" />
                                                                    <div>
                                                                        <label className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">Features (One per line)</label>
                                                                        <textarea value={(plan.features || []).join('\n')} onChange={(e) => {
                                                                            const plans = [...formData.posPricing.softwarePlans];
                                                                            plans[idx].features = e.target.value.split('\n');
                                                                            setFormData({ ...formData, posPricing: { ...formData.posPricing, softwarePlans: plans }});
                                                                        }} className="w-full text-[10px] font-bold text-gray-700 bg-white border border-gray-100 rounded-xl p-3 outline-none min-h-[100px]" placeholder="Feature A \nFeature B" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Hardware Bundles Editor */}
                                                <div className="space-y-6 pt-6 border-t border-gray-100">
                                                    <div className="flex items-center gap-2">
                                                        <Monitor className="h-5 w-5 text-corporat-blue" />
                                                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest italic">Hardware Bundles</h4>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        {(formData.posPricing?.hardwareBundles || []).map((bundle: any, idx: number) => (
                                                            <div key={idx} className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 relative group">
                                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                                                                    <div className="lg:col-span-1">
                                                                        <div className="aspect-square bg-white border border-gray-200 rounded-3xl overflow-hidden relative group/bundle border-dashed shadow-sm">
                                                                            {bundle.image ? (
                                                                                <img src={bundle.image} alt={bundle.name} className="w-full h-full object-contain p-4 group-hover/bundle:scale-110 transition-transform duration-700" />
                                                                            ) : (
                                                                                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                                                                                    <Package className="h-8 w-8 mb-2 opacity-20" />
                                                                                    <span className="text-[8px] font-black uppercase">No Visual</span>
                                                                                </div>
                                                                            )}
                                                                            <label className="absolute inset-0 bg-corporate-blue/80 opacity-0 group-hover/bundle:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm">
                                                                                <input type="file" className="hidden" onChange={(e) => handlePOSHardwareBundleImageUpload(e, idx)} accept="image/*" />
                                                                                <Upload className="h-6 w-6 text-white mb-2" />
                                                                                <span className="text-[8px] font-black text-white uppercase tracking-widest">Update Photo</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="lg:col-span-2 space-y-4">
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <div>
                                                                                <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">Bundle Model</label>
                                                                                <input type="text" value={bundle.name} onChange={(e) => {
                                                                                    const bundles = [...formData.posPricing.hardwareBundles];
                                                                                    bundles[idx].name = e.target.value;
                                                                                    setFormData({ ...formData, posPricing: { ...formData.posPricing, hardwareBundles: bundles }});
                                                                                }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black italic shadow-inner" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">Bundle Price</label>
                                                                                <input type="text" value={bundle.price} onChange={(e) => {
                                                                                    const bundles = [...formData.posPricing.hardwareBundles];
                                                                                    bundles[idx].price = e.target.value;
                                                                                    setFormData({ ...formData, posPricing: { ...formData.posPricing, hardwareBundles: bundles }});
                                                                                }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black shadow-inner" />
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">Bundle USP/Description</label>
                                                                            <input type="text" value={bundle.description} onChange={(e) => {
                                                                                const bundles = [...formData.posPricing.hardwareBundles];
                                                                                bundles[idx].description = e.target.value;
                                                                                setFormData({ ...formData, posPricing: { ...formData.posPricing, hardwareBundles: bundles }});
                                                                            }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold italic shadow-inner" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                    <div>
                                                                        <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">ROI/Impact Copy</label>
                                                                        <textarea value={bundle.roiText} onChange={(e) => {
                                                                            const bundles = [...formData.posPricing.hardwareBundles];
                                                                            bundles[idx].roiText = e.target.value;
                                                                            setFormData({ ...formData, posPricing: { ...formData.posPricing, hardwareBundles: bundles }});
                                                                        }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[10px] font-bold text-gray-500 italic min-h-[100px] shadow-inner" />
                                                                    </div>
                                                                    <div>
                                                                        <label className="block text-[8px] font-black text-gray-400 uppercase mb-2">Hardware Inclusions (one per line)</label>
                                                                        <textarea value={(bundle.features || []).join('\n')} onChange={(e) => {
                                                                            const bundles = [...formData.posPricing.hardwareBundles];
                                                                            bundles[idx].features = e.target.value.split('\n');
                                                                            setFormData({ ...formData, posPricing: { ...formData.posPricing, hardwareBundles: bundles }});
                                                                        }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[10px] font-bold min-h-[100px] shadow-inner" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Savings Manager */}
                                                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                                                    <div className="relative z-10">
                                                        <div className="flex items-center gap-3 mb-8">
                                                            <div className="bg-white/10 p-3 rounded-2xl"><TrendingDown className="h-6 w-6 text-green-400" /></div>
                                                            <h4 className="text-lg font-black italic tracking-tighter uppercase">5-Year Savings Calculator</h4>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                            <div>
                                                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Comp. Monthly Fee</label>
                                                                <input type="text" value={formData.posPricing?.savings?.competitorMonthly || ''}
                                                                    onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, savings: { ...formData.posPricing.savings, competitorMonthly: e.target.value } } })}
                                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-black italic text-white outline-none focus:border-white/20 transition-all shadow-inner" />
                                                            </div>
                                                            <div>
                                                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Comp. 5-Year Total</label>
                                                                <input type="text" value={formData.posPricing?.savings?.competitor5Year || ''}
                                                                    onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, savings: { ...formData.posPricing.savings, competitor5Year: e.target.value } } })}
                                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-black italic text-white outline-none focus:border-white/20 transition-all shadow-inner" />
                                                            </div>
                                                            <div>
                                                                <label className="block text-[10px] font-black text-green-500 uppercase tracking-widest mb-3">TOTAL SAVED CLAIM</label>
                                                                <input type="text" value={formData.posPricing?.savings?.savingsText || ''}
                                                                    onChange={(e) => setFormData({ ...formData, posPricing: { ...formData.posPricing, savings: { ...(formData.posPricing?.savings || {}), savingsText: e.target.value } } })}
                                                                    className="w-full bg-green-500/10 border border-green-500/20 rounded-2xl px-6 py-4 text-2xl font-black italic text-green-400 outline-none focus:border-green-500/40 transition-all shadow-2xl" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform duration-700">
                                                        <TrendingUp className="h-96 w-96 font-black" />
                                                    </div>
                                                </div>

                                                {/* Standard Pricing Tiers (Desktop/Web) */}
                                                <div className="pt-10 border-t border-gray-100 space-y-6">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-amber-50 p-2 rounded-xl"><DollarSign className="h-5 w-5 text-amber-600" /></div>
                                                            <div>
                                                                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest italic">Standard Website Tiers</h4>
                                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Traditional subscription/one-time plans</p>
                                                            </div>
                                                        </div>
                                                        <button type="button" 
                                                            onClick={() => setFormData({ ...formData, pricing: [...(formData.pricing || []), { title: 'New Tier', price: '0', description: '', features: [], isRecommended: false }] })}
                                                            className="text-[10px] font-black text-corporate-blue uppercase tracking-widest flex items-center gap-1">
                                                            <PlusCircle className="h-4 w-4" /> Add Tier
                                                        </button>
                                                    </div>
                                                    <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                                        {(formData.pricing || []).map((plan: any, idx: number) => (
                                                            <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative group break-inside-avoid">
                                                                <button type="button" onClick={() => { const updated = [...formData.pricing]; updated.splice(idx, 1); setFormData({ ...formData, pricing: updated }); }}
                                                                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                                <div className="space-y-4">
                                                                    <div className="flex items-center justify-between gap-4">
                                                                        <input type="text" value={plan.title}
                                                                            onChange={(e) => { const updated = [...formData.pricing]; updated[idx].title = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                            className="w-full bg-transparent border-none p-0 text-lg font-black text-gray-900 focus:ring-0 outline-none italic" placeholder="Plan Title" />
                                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                                            <input type="checkbox" checked={plan.isRecommended}
                                                                                onChange={(e) => { const updated = [...formData.pricing]; updated[idx].isRecommended = e.target.checked; setFormData({ ...formData, pricing: updated }); }}
                                                                                className="rounded h-4 w-4 text-corporate-blue" />
                                                                            <span className="text-[10px] font-black text-gray-400">FAV</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="flex items-baseline gap-1">
                                                                        <span className="text-xs font-black text-gray-400">LKR</span>
                                                                        <input type="text" value={plan.price}
                                                                            onChange={(e) => { const updated = [...formData.pricing]; updated[idx].price = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                            className="w-full bg-transparent border-none p-0 text-2xl font-black text-gray-900 focus:ring-0 outline-none" />
                                                                    </div>
                                                                    <textarea value={plan.description}
                                                                        onChange={(e) => { const updated = [...formData.pricing]; updated[idx].description = e.target.value; setFormData({ ...formData, pricing: updated }); }}
                                                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold text-gray-500 min-h-[60px]" placeholder="Short description..." />
                                                                    <div>
                                                                        <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Features (one per line)</label>
                                                                        <textarea value={(plan.features || []).join('\n')}
                                                                            onChange={(e) => { const updated = [...formData.pricing]; updated[idx].features = e.target.value.split('\n'); setFormData({ ...formData, pricing: updated }); }}
                                                                            className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-[10px] font-bold min-h-[100px]" placeholder="Feature 1\nFeature 2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.jobs.map((job: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.portfolio.map((project: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
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
                                                                    <option value="POS Desktop POS">POS Desktop POS</option>
                                                                    <option value="Desktop + Cloud">Desktop + Cloud</option>
                                                                    <option value="Cloud Base Enterprise">Cloud Base Enterprise</option>
                                                                    <option value="Software & Apps">Software & Apps</option>
                                                                    <option value="Mobile development">Mobile development</option>
                                                                    <option value="NFT web">NFT web</option>
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
                                            <div className="p-5 lg:p-6 space-y-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-cyan-50 p-2.5 rounded-xl"><Code className="h-5 w-5 text-cyan-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Website Services</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Standard packages offered to clients</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, websiteServices: [...formData.websiteServices, { name: '', price: '', description: '', features: [], link: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Service
                                                    </button>
                                                </div>
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.websiteServices.map((service: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-3 break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                                                            <div className="absolute top-3 left-5"><span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Service #{idx + 1}</span></div>
                                                            <button type="button" onClick={() => { const updated = [...formData.websiteServices]; updated.splice(idx, 1); setFormData({ ...formData, websiteServices: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                                                                <input type="text" value={service.name}
                                                                    onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].name = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Service Name" />
                                                                <input type="text" value={service.price}
                                                                    onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].price = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Price" />
                                                            </div>
                                                            <textarea value={service.description}
                                                                onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].description = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[70px]" placeholder="Service Description" />
                                                            <input type="text" value={service.link}
                                                                onChange={(e) => { const updated = [...formData.websiteServices]; updated[idx].link = e.target.value; setFormData({ ...formData, websiteServices: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Link" />
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
                                            <div className="p-5 lg:p-6 space-y-4">
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.testimonials.map((testimonial: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-3 break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                                                            <div className="absolute top-3 left-5"><span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Testimonial #{idx + 1}</span></div>
                                                            <button type="button" onClick={() => { const updated = [...formData.testimonials]; updated.splice(idx, 1); setFormData({ ...formData, testimonials: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
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
                                            <div className="p-5 lg:p-6 space-y-4">
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.values.map((value: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-3 break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                                                            <button type="button" onClick={() => { const updated = [...formData.values]; updated.splice(idx, 1); setFormData({ ...formData, values: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <input type="text" value={value.title}
                                                                onChange={(e) => { const updated = [...formData.values]; updated[idx].title = e.target.value; setFormData({ ...formData, values: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Value Title" />
                                                            <select value={value.icon}
                                                                onChange={(e) => { const updated = [...formData.values]; updated[idx].icon = e.target.value; setFormData({ ...formData, values: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
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
                                            <div className="p-5 lg:p-6 space-y-4">
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
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {formData.team.map((member: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-3 break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
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

                                        {/* ── BRANDS SECTION ── */}
                                        {cmsSection === 'brands' && (
                                            <div className="p-5 lg:p-6 space-y-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-orange-50 p-2.5 rounded-xl"><Globe className="h-5 w-5 text-orange-600" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Partner Brands</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Logos shown in the scrolling marquee</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, brands: [...formData.brands, { name: '', logo: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Brand
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {formData.brands.map((brand: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group space-y-3">
                                                            <button type="button" onClick={() => { const updated = [...formData.brands]; updated.splice(idx, 1); setFormData({ ...formData, brands: updated }); }}
                                                                className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <input type="text" value={brand.name}
                                                                onChange={(e) => { const updated = [...formData.brands]; updated[idx].name = e.target.value; setFormData({ ...formData, brands: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Brand Name" />
                                                            <input type="text" value={brand.logo}
                                                                onChange={(e) => { const updated = [...formData.brands]; updated[idx].logo = e.target.value; setFormData({ ...formData, brands: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Logo Link (SVG preferred)" />
                                                            <div className="h-16 w-full flex items-center justify-center bg-white rounded-lg p-2">
                                                                {brand.logo ? <img src={brand.logo} alt="Preview" className="h-full object-contain" /> : <p className="text-[10px] font-bold text-gray-300">NO PREVIEW</p>}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* ── HARDWARE SECTION ── */}
                                        {cmsSection === 'hardware' && (
                                            <div className="p-4 lg:p-5 space-y-3">
                                                {/* Hero Carousel Section */}
                                                <div className="flex items-center justify-between mb-4 border-t border-gray-100 pt-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-blue-50 p-2.5 rounded-xl"><Monitor className="h-5 w-5 text-corporate-blue" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Hardware Hero Banner</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage slides and offers at the top of the hardware page</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, hardwareHero: [...(formData.hardwareHero || []), { badge: 'New Offer', title1: 'Title', titleHighlight: 'Highlight', description: '', features: [], image: '', statusLabel: '', statusValue: '' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Slide
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 mb-8">
                                                    {(formData.hardwareHero || []).map((slide: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100 relative group shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                                                            <button type="button" onClick={() => { const updated = [...(formData.hardwareHero || [])]; updated.splice(idx, 1); setFormData({ ...formData, hardwareHero: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                <input type="text" value={slide.badge} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].badge = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-full" placeholder="Badge (e.g. Special Offer)" />
                                                                <input type="text" value={slide.statusLabel} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].statusLabel = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-full" placeholder="Status Label (e.g. Offer Ends In)" />
                                                                <input type="text" value={slide.statusValue} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].statusValue = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-full" placeholder="Status Value (e.g. 5 Days)" />
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                <input type="text" value={slide.title1} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].title1 = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-full" placeholder="Main Title (e.g. Upgrade Your Business)" />
                                                                <input type="text" value={slide.titleHighlight} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].titleHighlight = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-full" placeholder="Title Highlight (e.g. Save 15%)" />
                                                            </div>
                                                            <textarea value={slide.description} onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].description = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[60px]" placeholder="Hero Description" />
                                                            
                                                            <div className="flex items-start gap-4 mb-3">
                                                                <div className="flex-1 space-y-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <input type="text" value={slide.image}
                                                                            onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].image = e.target.value; setFormData({ ...formData, hardwareHero: updated }); }}
                                                                            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Hero Image URL" />
                                                                        <label className="cursor-pointer bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-500 hover:text-corporate-blue hover:border-corporate-blue transition-colors whitespace-nowrap">
                                                                            Upload Hero Image
                                                                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleHardwareHeroImageUpload(e, idx)} />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="h-16 w-24 shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center p-1">
                                                                    {slide.image ? (
                                                                        /* eslint-disable-next-line @next/next/no-img-element */
                                                                        <img src={slide.image} alt="Preview" className="h-full w-full object-contain" />
                                                                    ) : (
                                                                        <span className="text-[8px] font-black text-gray-300 text-center uppercase tracking-widest">No<br/>Image</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Features (one per line)</label>
                                                                <textarea value={(slide.features || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.hardwareHero]; updated[idx].features = e.target.value.split('\n'); setFormData({ ...formData, hardwareHero: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[80px]" placeholder="Feature 1\nFeature 2\nFeature 3" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Categories Section */}
                                                <div className="flex items-center justify-between mb-4 border-t border-gray-100 pt-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-blue-50 p-2.5 rounded-xl"><Monitor className="h-5 w-5 text-corporate-blue" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Hardware Categories</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage categories for filtering products</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, hardwareCategories: [...(formData.hardwareCategories || []), { id: `cat_${Date.now()}`, name: 'New Category', icon: 'Package' }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Category
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                    {(formData.hardwareCategories || []).map((cat: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative group flex gap-3 shadow-sm items-center hover:shadow-md transition-shadow">
                                                            <button type="button" onClick={() => { const updated = [...(formData.hardwareCategories || [])]; updated.splice(idx, 1); setFormData({ ...formData, hardwareCategories: updated }); }}
                                                                className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <input type="text" value={cat.id} onChange={(e) => { const updated = [...formData.hardwareCategories]; updated[idx].id = e.target.value; setFormData({ ...formData, hardwareCategories: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-1/3" placeholder="ID (e.g. pos)" />
                                                            <input type="text" value={cat.name} onChange={(e) => { const updated = [...formData.hardwareCategories]; updated[idx].name = e.target.value; setFormData({ ...formData, hardwareCategories: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-1/3" placeholder="Category Name" />
                                                            <select value={cat.icon} onChange={(e) => { const updated = [...formData.hardwareCategories]; updated[idx].icon = e.target.value; setFormData({ ...formData, hardwareCategories: updated }); }} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold w-1/3">
                                                                {Object.keys(IconMap).map(k => <option key={k} value={k}>{k}</option>)}
                                                            </select>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between mb-4 border-t border-gray-100 pt-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-blue-50 p-2.5 rounded-xl"><Monitor className="h-5 w-5 text-corporate-blue" /></div>
                                                        <div>
                                                            <h3 className="font-black text-gray-900 text-lg">Hardware Catalog</h3>
                                                            <p className="text-xs text-gray-400 font-medium">Manage POS terminals, printers, and scanners</p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                        onClick={() => setFormData({ ...formData, hardware: [...(formData.hardware || []), { category: 'pos', name: '', model: '', price: '', description: '', specs: [], image: '', tag: '', onSale: false }] })}
                                                        className="inline-flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-corporate-blue-dark transition-colors">
                                                        <PlusCircle className="h-3.5 w-3.5" /> Add Hardware
                                                    </button>
                                                </div>
                                                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                                    {(formData.hardware || []).map((item: any, idx: number) => (
                                                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                                                            <button type="button" onClick={() => { const updated = [...formData.hardware]; updated.splice(idx, 1); setFormData({ ...formData, hardware: updated }); }}
                                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4" /></button>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                                                <input type="text" value={item.name}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].name = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Product Name" />
                                                                <input type="text" value={item.model}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].model = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Model Number" />
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                                                <select value={item.category}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].category = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold">
                                                                    {(formData.hardwareCategories || []).map((cat: any) => (
                                                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                                    ))}
                                                                </select>
                                                                <input type="text" value={item.price}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].price = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Price (LKR)" />
                                                                <input type="text" value={item.tag}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].tag = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Tag (Optional)" />
                                                            </div>
                                                            <textarea value={item.description}
                                                                onChange={(e) => { const updated = [...formData.hardware]; updated[idx].description = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold mb-3 min-h-[60px]" placeholder="Product Description" />
                                                            <div className="flex items-start gap-4 mb-3">
                                                                <div className="flex-1 space-y-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <input type="text" value={item.image}
                                                                            onChange={(e) => { const updated = [...formData.hardware]; updated[idx].image = e.target.value; setFormData({ ...formData, hardware: updated }); }}
                                                                            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold" placeholder="Image URL" />
                                                                        <label className="cursor-pointer bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-500 hover:text-corporate-blue hover:border-corporate-blue transition-colors whitespace-nowrap">
                                                                            Upload
                                                                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleHardwareImageUpload(e, idx)} />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="h-16 w-24 shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center p-1">
                                                                    {item.image ? (
                                                                        /* eslint-disable-next-line @next/next/no-img-element */
                                                                        <img src={item.image} alt="Preview" className="h-full w-full object-contain" />
                                                                    ) : (
                                                                        <span className="text-[8px] font-black text-gray-300 text-center uppercase tracking-widest">No<br/>Image</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 mb-3">
                                                                <input type="checkbox" checked={item.onSale || false}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].onSale = e.target.checked; setFormData({ ...formData, hardware: updated }); }}
                                                                    className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                                                                <label className="text-xs font-bold text-gray-500 uppercase">Show 'Sale' badge</label>
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Specifications (one per line)</label>
                                                                <textarea value={(item.specs || []).join('\n')}
                                                                    onChange={(e) => { const updated = [...formData.hardware]; updated[idx].specs = e.target.value.split('\n'); setFormData({ ...formData, hardware: updated }); }}
                                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold min-h-[80px]" placeholder="Spec 1\nSpec 2\nSpec 3" />
                                                            </div>
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
            </main >
        </div >
    );
}

