'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Image as ImageIcon, Globe, Lock, Zap } from 'lucide-react';

export default function NFTPricing() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">NFT Web Solutions</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Build and launch your NFT marketplace, collection, or web3 platform with our comprehensive NFT web solutions.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* NFT Package 1 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <ImageIcon className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NFT Marketplace Basic</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 150,000</div>
                <p className="text-sm text-gray-600">Perfect for starting your NFT journey</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>NFT marketplace website</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Wallet integration</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic minting functionality</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Collection display</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic search & filters</span>
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

            {/* NFT Package 2 */}
            <div className="bg-white rounded-xl shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 p-8 border-2 border-corporate-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-corporate-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <div className="mb-6">
                <Globe className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NFT Marketplace Pro</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">LKR 300,000</div>
                <p className="text-sm text-gray-600">Full-featured NFT platform</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced marketplace</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-wallet support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Smart contract integration</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Royalty system</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>User profiles & collections</span>
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

            {/* NFT Package 3 */}
            <div className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">
                <Zap className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NFT Enterprise</h3>
                <div className="text-3xl font-bold text-corporate-blue mb-1">Custom Pricing</div>
                <p className="text-sm text-gray-600">Enterprise-grade NFT solutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom smart contracts</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-chain support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom features</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Ongoing maintenance</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">NFT Web Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Blockchain Security</h4>
                  <p className="text-sm text-gray-600">Secure smart contract integration and wallet connections</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ImageIcon className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">NFT Management</h4>
                  <p className="text-sm text-gray-600">Complete NFT minting, listing, and trading capabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-corporate-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Web3 Integration</h4>
                  <p className="text-sm text-gray-600">Seamless integration with popular blockchain networks</p>
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
              Contact Us for NFT Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

