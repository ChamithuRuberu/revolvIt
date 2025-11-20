'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star, Monitor, Printer, ScanLine, Package } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Choose the perfect POS solution for your business needs. All packages include installation, training, and support.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Package 1: Basic */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic POS System</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 75,000</div>
                <p className="text-sm text-gray-600">Perfect for small shops and startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 2 user accounts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 1000 products</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic POS & Billing</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Inventory Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic Reports</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>2 hours training</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>12 months support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Package 2: Standard - Recommended */}
            <div className="bg-white rounded-xl shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 p-8 border-2 border-corporate-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-corporate-blue text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Recommended
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard POS System</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 120,000</div>
                <p className="text-sm text-gray-600">Best value for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 5 user accounts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Barcode scanner support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customer Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Returns & Refunds</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced Reports</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 2 terminals</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>4 hours training</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Package 3: Professional */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional POS System</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 150,000</div>
                <p className="text-sm text-gray-600">Perfect for expanding businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 10 user accounts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Supplier Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Purchase Order Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Credit Sales Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Expense Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cloud Backup</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>6 hours training</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Package 4: Premium */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium POS System</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 250,000</div>
                <p className="text-sm text-gray-600">Complete enterprise solution</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-store (2 branches)</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Loyalty Points Program</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Employee Management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Accounting Integration</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 5 terminals</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>8 hours training</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Complete Package Pricing (With Hardware) */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Complete Package Pricing (With Hardware)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Package A: Complete Basic Setup */}
              <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Package A</h4>
                  <div className="text-2xl font-bold text-corporate-blue mb-1">LKR 111,000</div>
                  <p className="text-xs text-gray-600">Complete Basic Setup</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basic POS Software: LKR 75,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>XPrinter XP-K200L: LKR 18,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>USB Barcode Scanner: LKR 14,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Thermal Paper Rolls (20): LKR 3,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation & Training</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 months support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-corporate-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 text-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Package B: Complete Standard Setup */}
              <div className="bg-white rounded-xl shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 p-6 border-2 border-corporate-blue relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-corporate-blue text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Popular
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Package B</h4>
                  <div className="text-2xl font-bold text-corporate-blue mb-1">LKR 156,000</div>
                  <p className="text-xs text-gray-600">Complete Standard Setup</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Standard POS Software: LKR 120,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>XPrinter XP-K200L: LKR 18,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>USB Barcode Scanner: LKR 14,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Thermal Paper Rolls (20): LKR 3,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation & Training</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 months support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-corporate-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 text-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Package C: Complete Professional Setup */}
              <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Package C</h4>
                  <div className="text-2xl font-bold text-corporate-blue mb-1">LKR 186,000</div>
                  <p className="text-xs text-gray-600">Complete Professional Setup</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional POS Software: LKR 150,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>XPrinter XP-K200L: LKR 18,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>USB Barcode Scanner: LKR 14,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Thermal Paper Rolls (20): LKR 3,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation & Training</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 months support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-corporate-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 text-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Package D: Complete Premium Setup */}
              <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Package D</h4>
                  <div className="text-2xl font-bold text-corporate-blue mb-1">LKR 286,000</div>
                  <p className="text-xs text-gray-600">Complete Premium Setup</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium POS Software: LKR 250,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>XPrinter XP-K200L: LKR 18,000</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>USB Barcode Scanner: LKR 14,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Thermal Paper Rolls (20): LKR 3,500</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation & Training</span>
                  </li>
                  <li className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 months support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-corporate-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Package with Computer Option */}
            <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-blue/5 rounded-xl p-6 border border-corporate-blue/20">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Monitor className="h-5 w-5 text-corporate-blue" />
                Package with Computer (Optional)
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                Add a Basic PC (i3, 4GB RAM, 128GB SSD) to any package above for an additional <strong className="text-corporate-blue">LKR 45,000</strong>
              </p>
            </div>
          </div>

          {/* Hardware Requirements */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Hardware Requirements & Recommendations</h3>
            
            {/* Computer Requirements */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="h-6 w-6 text-corporate-blue" />
                <h4 className="text-xl font-bold text-gray-900">Computer/PC Requirements</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-4">Minimum Specification</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Processor: Intel Core i3 or equivalent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>RAM: 4GB DDR3/DDR4</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Storage: 128GB SSD or 500GB HDD</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Display: 15.6" or larger monitor</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>OS: Windows 10 (64-bit) or Windows 11</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-600">
                        <strong>Market Price:</strong> LKR 45,000 - 65,000
                      </p>
                    </div>
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/image.png"
                        alt="Minimum Specification Computer"
                        fill
                        className="object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-4">Recommended Specification</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Processor: Intel Core i5 or Ryzen 5</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>RAM: 8GB DDR4</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Storage: 256GB SSD</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>Display: 19" monitor or touchscreen</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                          <span>OS: Windows 10/11 Pro</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-600">
                        <strong>Market Price:</strong> LKR 85,000 - 120,000 (Touchscreen AIO)
                      </p>
                    </div>
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/pos.webp"
                        alt="Recommended Specification Computer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thermal Printer */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Printer className="h-6 w-6 text-corporate-blue" />
                <h4 className="text-xl font-bold text-gray-900">Thermal Receipt Printer</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Xprinter XP-58</h5>
                      <p className="text-xs text-gray-600 mb-1">58mm • USB Interface</p>
                      <p className="text-xs text-gray-500 mb-2">Compact 2-inch thermal printer. Ideal for small receipts and mobile POS systems. Low power consumption.</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 20,500 - 28,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/Xprinter XP-58 .png"
                        alt="Xprinter XP-58"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional-lg p-6 border-2 border-corporate-blue">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">XPrinter XP-K200L</h5>
                      <p className="text-xs text-gray-600 mb-1">80mm • USB • Auto Cutter</p>
                      <p className="text-xs text-gray-500 mb-2">⭐ Recommended • High-speed 80mm thermal printer with auto-cutter. Resume from cutter jam automatically. Optional sound and light alarm. Compatible with Windows, Linux, Android, iOS, macOS.</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 18,000 - 22,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/XPrinter XP-K200L .jpg"
                        alt="XPrinter XP-K200L"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">POS-8220</h5>
                      <p className="text-xs text-gray-600 mb-1">80mm • USB • Network (LAN)</p>
                      <p className="text-xs text-gray-500 mb-2">Network-enabled thermal printer with USB and LAN connectivity. Print speed: 230mm/s. Compatible with Windows, Linux, Android, iOS, macOS.</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 18,000 - 22,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/POS-8220 .webp"
                        alt="POS-8220"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">XPrinter XP-Q805K</h5>
                      <p className="text-xs text-gray-600 mb-1">80mm • USB • Auto Cutter</p>
                      <p className="text-xs text-gray-500 mb-2">Budget-friendly 80mm thermal printer. Print speed: 230mm/s. Wall mountable design. Supports ESC/POS commands. Compatible with Windows, Linux, Android, iOS, macOS.</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 14,000 - 16,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/POSX805K.jpg"
                        alt="XPrinter XP-Q805K"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">BELDON BNPP-991</h5>
                      <p className="text-xs text-gray-600 mb-1">80mm • USB • Auto Cutter</p>
                      <p className="text-xs text-gray-500 mb-2">Reliable 80mm thermal printer with fast printing up to 300mm/s. Supports ESC/POS commands. Compatible with Windows, Linux, Android, iOS, macOS, OPOS.</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 16,900 - 18,900</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="/pricing/BNPP-991-USB_0.jpeg"
                        alt="BELDON BNPP-991"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-professional p-4 border border-gray-100">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Features:</strong> Paper width: 80mm (recommended) or 58mm • USB interface • Auto-cutter optional • Speed: 150-250mm/sec
                </p>
              </div>
            </div>

            {/* Barcode Scanner */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <ScanLine className="h-6 w-6 text-corporate-blue" />
                <h4 className="text-xl font-bold text-gray-900">Barcode Scanner</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Generic USB Scanner</h5>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 3,500 - 5,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                        alt="Generic USB Scanner"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional-lg p-6 border-2 border-corporate-blue">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Honeywell 1D Scanner</h5>
                      <p className="text-xs text-gray-600 mb-2">⭐ Recommended</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 8,500 - 12,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                        alt="Honeywell 1D Scanner"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Honeywell Voyager 1200g</h5>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 18,000 - 22,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                        alt="Honeywell Voyager 1200g"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Zebra DS2208</h5>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 25,000 - 30,000</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                        alt="Zebra DS2208"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-professional p-4 border border-gray-100">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Features:</strong> 1D barcode support • USB connection (plug and play) • 100+ scans per second • Works with EAN-13, UPC, Code-128
                </p>
              </div>
            </div>

            {/* Additional Hardware */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-corporate-blue" />
                <h4 className="text-xl font-bold text-gray-900">Additional Hardware (Optional)</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Customer Display Pole</h5>
                      <p className="text-sm text-gray-700 mb-2">VFD Display (2×20 characters)</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 12,000 - 18,000</p>
                      <p className="text-xs text-gray-600 mt-2">Shows items and prices to customer</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80"
                        alt="Customer Display Pole"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">UPS (Backup Power)</h5>
                      <p className="text-sm text-gray-700 mb-1">600VA: LKR 8,000 - 12,000</p>
                      <p className="text-sm text-gray-700 mb-2">1000VA: LKR 15,000 - 20,000 ⭐</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80"
                        alt="UPS Backup Power"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Barcode Label Printer</h5>
                      <p className="text-sm text-gray-700 mb-2">Basic model</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 25,000 - 35,000</p>
                      <p className="text-xs text-gray-600 mt-2">For printing product labels</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80"
                        alt="Barcode Label Printer"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-professional p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2">Weighing Scale</h5>
                      <p className="text-sm text-gray-700 mb-2">Basic digital scale</p>
                      <p className="text-sm font-semibold text-corporate-blue">LKR 8,000 - 15,000</p>
                      <p className="text-xs text-gray-600 mt-2">For grocery/retail by weight</p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1607613009820-a38f1e0a9d08?w=500&q=80"
                        alt="Weighing Scale"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add-on Features */}
          <div className="mb-20 mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Add-On Features</h3>
            <div className="bg-white rounded-xl shadow-professional p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Price (LKR)</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Additional User License</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">3,000/user</td>
                    <td className="py-4 px-4 text-gray-600">Beyond package limit</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Additional Terminal</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">15,000</td>
                    <td className="py-4 px-4 text-gray-600">Extra computer setup</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Barcode Scanner</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">8,500</td>
                    <td className="py-4 px-4 text-gray-600">USB barcode scanner + integration</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Additional Branch</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">35,000</td>
                    <td className="py-4 px-4 text-gray-600">Per branch setup</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">SMS Module</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">25,000 + per SMS</td>
                    <td className="py-4 px-4 text-gray-600">Customer notifications</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">WhatsApp Integration</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">20,000</td>
                    <td className="py-4 px-4 text-gray-600">Receipt via WhatsApp</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Mobile App</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">85,000</td>
                    <td className="py-4 px-4 text-gray-600">Android app for reports</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Cloud Backup</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">2,500/month</td>
                    <td className="py-4 px-4 text-gray-600">Automatic cloud storage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Weighing Scale</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">12,000</td>
                    <td className="py-4 px-4 text-gray-600">For grocery/retail by weight</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Customer Display</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">25,000</td>
                    <td className="py-4 px-4 text-gray-600">Pole display for customers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Biometric Login</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">30,000</td>
                    <td className="py-4 px-4 text-gray-600">Fingerprint authentication</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Accounting Integration</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">40,000</td>
                    <td className="py-4 px-4 text-gray-600">Tally/QuickBooks sync</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-700">Custom Feature</td>
                    <td className="py-4 px-4 font-semibold text-corporate-blue">12,000</td>
                    <td className="py-4 px-4 text-gray-600">Based on requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
          
        </div>
        
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to discuss which package is right for your business.
            </p>
            <Link
              href="/contact"
              className="group bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

