'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2, Shield, Database, Users } from 'lucide-react';

export default function EnterprisePricing() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enterprise Solutions</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Comprehensive enterprise-grade solutions tailored for large organizations. Scalable, secure, and designed for growth.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Enterprise Package 1 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <Building2 className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Starter</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">Custom Pricing</div>
                <p className="text-sm text-gray-600">Perfect for mid-size organizations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-branch management</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 50 user accounts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced reporting & analytics</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cloud infrastructure</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>API integrations</span>
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
                Request Quote
              </Link>
            </div>

            {/* Enterprise Package 2 */}
            <div className="bg-white rounded-xl shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 p-8 border-2 border-corporate-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-corporate-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <Shield className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Professional</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">Custom Pricing</div>
                <p className="text-sm text-gray-600">Ideal for large enterprises</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited branches</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited user accounts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated server</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>On-site training</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Account manager</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>

            {/* Enterprise Package 3 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <Database className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Enterprise</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">Custom Pricing</div>
                <p className="text-sm text-gray-600">For Fortune 500 companies</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Global deployment</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom development</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated infrastructure</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support team</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-professional p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enterprise Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Management</h4>
                  <p className="text-sm text-gray-600">Advanced role-based access control and user management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-sm text-gray-600">Enterprise-grade security with encryption and compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Database className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Management</h4>
                  <p className="text-sm text-gray-600">Advanced data analytics and business intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/contact"
              className="group bg-corporate-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 inline-flex items-center shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
            >
              Contact Us for Enterprise Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

