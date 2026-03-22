'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Users, ShoppingCart, CreditCard, BarChart3, UserPlus, Database, Rocket, Globe } from 'lucide-react';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/portal/public?fields=brands')
      .then(res => res.json())
      .then(data => {
        if (data && data.brands) {
          setBrands(data.brands);
        }
      })
      .catch(err => console.error('Error fetching brands:', err));
  }, []);
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
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
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Logo Marquee Section */}
      {brands.length > 0 && (
        <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Powering Global Success</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-corporate-blue/20"></span>
              <p className="text-corporate-blue font-bold uppercase tracking-wider text-[10px]">Our ecosystem</p>
              <span className="h-px w-8 bg-corporate-blue/20"></span>
            </div>
          </motion.div>
          <div className="flex justify-center flex-wrap gap-10 md:gap-20 items-center px-6 max-w-6xl mx-auto">
            {brands.map((brand: any, idx: number) => (
              <div key={idx} className="inline-flex items-center justify-center transition-all duration-500 cursor-pointer py-6 group/brand">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-24 md:h-36 w-auto object-contain max-w-[220px] md:max-w-[300px] transform transition-all group-hover/brand:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Get Started Section */}
      <section className="py-20 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Get Started in Minutes</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-corporate-blue/20"></span>
              <p className="text-corporate-blue font-bold uppercase tracking-wider text-[10px]">Simple Setup, Powerful Results</p>
              <span className="h-px w-8 bg-corporate-blue/20"></span>
            </div>
            <p className="text-gray-500 font-medium text-sm">Get your business up and running with Poze in three easy steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { id: '01', icon: UserPlus, title: 'Sign Up & Setup', desc: 'Create your account in under 2 minutes. No credit card required for the 14-day trial. Configure your business settings with our intuitive wizard.' },
              { id: '02', icon: Database, title: 'Import Your Data', desc: 'Easily import your existing products, customers, and inventory. Our team helps migrate your data from any previous system seamlessly.' },
              { id: '03', icon: Rocket, title: 'Start Selling', desc: 'Begin processing transactions immediately. Access training resources and onboarding support to master all features quickly.' }
            ].map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group"
              >
                <div className="w-9 h-9 bg-corporate-blue/10 text-corporate-blue rounded-lg flex items-center justify-center font-bold text-xs mb-6">{step.id}</div>
                <div className="mb-4 text-corporate-blue transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
