'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Code, Globe } from 'lucide-react';

export default function MobilePricing() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Mobile Development</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Native and cross-platform mobile applications for iOS and Android. Build powerful, scalable mobile solutions.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Mobile Package 1 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <Smartphone className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile App Basic</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 200,000</div>
                <p className="text-sm text-gray-600">Simple mobile application</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Single platform (iOS or Android)</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic UI/UX design</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Core features</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>API integration</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>App store submission</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>3 months support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Package 2 */}
            <div className="bg-white rounded-xl shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 p-8 border-2 border-corporate-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-corporate-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <div className="mb-6">
                <Tablet className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile App Pro</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 400,000</div>
                <p className="text-sm text-gray-600">Cross-platform mobile app</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>iOS & Android</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Premium UI/UX design</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Push notifications</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Analytics integration</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Backend API development</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>6 months support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Package 3 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <Code className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile App Enterprise</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">Custom Pricing</div>
                <p className="text-sm text-gray-600">Enterprise mobile solutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-platform support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom design & branding</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Complex integrations</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Ongoing maintenance</span>
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
                Request Quote
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-professional p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mobile Development Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <Smartphone className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Native Development</h4>
                  <p className="text-sm text-gray-600">iOS and Android native app development</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cross-Platform</h4>
                  <p className="text-sm text-gray-600">React Native and Flutter for multi-platform apps</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Code className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Features</h4>
                  <p className="text-sm text-gray-600">Tailored features based on your requirements</p>
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
              Contact Us for Mobile Development
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

