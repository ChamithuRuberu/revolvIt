'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Users, ShoppingCart, CreditCard, BarChart3 } from 'lucide-react';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-corporate-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="h-4 w-4" />
                <span>Complete POS Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Enterprise Systems For
                <span className="block text-corporate-blue mt-2">
                  Modern Businesses
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Complete Point of Sale solutions with order processing, inventory management, and customer loyalty systems to streamline your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group bg-corporate-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 inline-flex items-center justify-center shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-corporate-blue hover:text-corporate-blue transition-all duration-300 inline-flex items-center justify-center bg-white"
                >
                  View Solutions
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Trusted by 50+ Businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Secure & Reliable</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fadeIn">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden ">
                <Image
                  src="https://queuebuster.co/_next/image?url=%2Fassets%2FEnterprise%2Fhero-img.png&w=3840&q=75"
                  alt="POS System Hero"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/4 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">10+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">5+</div>
              <div className="text-gray-600 font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Digital Solution?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our software development expertise can help achieve your goals.
            </p>
            <Link
              href="/contact"
              className="group bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
