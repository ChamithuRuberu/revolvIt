'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Zap,
    Users,
    Loader2,
    ShoppingCart,
    Building2,
    Cloud,
    Smartphone,
    ArrowRight,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { useState, useEffect } from 'react';

const IconMap: Record<string, any> = {
    ShoppingCart,
    Building2,
    Cloud,
    Smartphone,
    ShieldCheck,
    Zap,
    Users
};

export default function Solutions() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/portal');
                const json = await res.json();
                if (json.solutions) setData(json.solutions);
            } catch (e) {
                console.error('Failed to fetch solutions', e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const displaySolutions = data || [];

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-corporate-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Powerful Solutions for <span className="text-blue-200">Modern Enterprises</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed">
                            We bridge the gap between complex business challenges and innovative technology. Our solutions are designed to scale with your growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-white text-corporate-blue px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1">
                                Start a Conversation
                            </Link>
                            <Link href="/pricing" className="bg-corporate-blue-dark border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Service Offerings</h2>
                        <div className="w-24 h-1 bg-corporate-blue mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {displaySolutions.map((solution: any, index: number) => {
                            const IconComponent = IconMap[solution.icon] || solution.icon || ShoppingCart;
                            return (
                                <div key={index} className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <div className={`${solution.color} p-4 rounded-2xl text-white shadow-lg`}>
                                                {typeof IconComponent === 'string' ? <ShoppingCart className="h-6 w-6" /> : <IconComponent className="h-6 w-6" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                                        <p className="text-gray-600 mb-8 leading-relaxed">{solution.description}</p>
                                        <div className="space-y-3 mb-8">
                                            {solution.features.map((feature: string, fIndex: number) => (
                                                <div key={fIndex} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-corporate-blue flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <Link href="/contact" className="inline-flex items-center text-corporate-blue font-bold hover:gap-3 transition-all">
                                                Learn More <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Why Businesses Choose revolvIt</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                            <p className="text-gray-600">Bank-level encryption and security protocols to keep your business data safe and compliant.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                <Zap className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Unmatched Speed</h3>
                            <p className="text-gray-600">Lightning-fast performance powered by the latest technology stacks and global CDN delivery.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                            <p className="text-gray-600">Our team of experienced developers and consultants are available around the clock to help you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-24 bg-corporate-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-200 uppercase tracking-widest text-xs font-bold">Uptime Guaranteed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-blue-200 uppercase tracking-widest text-xs font-bold">Active Deployments</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">24/7</div>
                            <div className="text-blue-200 uppercase tracking-widest text-xs font-bold">Priority Support</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">15ms</div>
                            <div className="text-blue-200 uppercase tracking-widest text-xs font-bold">Avg Response Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Ready to revolutionize your business model?</h2>
                    <p className="text-xl text-gray-600 mb-12">Join hundreds of businesses that have scaled with revolvIt solutions.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-corporate-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-corporate-blue-dark transition-all transform hover:scale-105 shadow-professional-xl">
                        Get a Free Consultation <ArrowRight className="h-6 w-6" />
                    </Link>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-blue-50 to-transparent -z-10 opacity-50"></div>
            </section>
        </div>
    );
}
