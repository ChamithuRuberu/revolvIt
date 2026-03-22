'use client';

import Link from 'next/link';
import { ArrowLeft, RotateCcw, Clock, CheckCircle, XCircle, Mail } from 'lucide-react';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
          <p className="text-xl text-blue-100">
            Our commitment to your satisfaction with clear and fair return guidelines.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: March 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-4">
            <RotateCcw className="h-6 w-6 text-corporate-blue mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                At Green Code Solution, we strive to ensure complete satisfaction with our software products and services. 
                This Return & Refund Policy outlines the conditions under which you may request a return or refund for 
                purchases made through our website or platform.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Software & Digital Products
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Since our primary offerings are software solutions, POS systems, and digital services, the following terms apply:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Subscription-based services may be cancelled within <strong>14 days</strong> of the initial purchase for a full refund, provided the service has not been substantially used.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">If a software product is found to have critical defects that we are unable to resolve within <strong>30 days</strong>, you are entitled to a full refund.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Custom-developed software solutions are non-refundable once development has commenced, unless otherwise agreed in the project contract.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Hardware Products
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              For hardware products such as POS terminals, receipt printers, and other peripherals:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Hardware may be returned within <strong>7 days</strong> of delivery if it is unused, in its original packaging, and in resalable condition.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Defective hardware will be replaced or refunded within the <strong>warranty period</strong> as specified at the time of purchase.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Hardware that has been physically damaged by the customer, modified, or shows signs of misuse is not eligible for return.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Refund Process
          </h2>
          <div className="pl-11">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Clock className="h-6 w-6 text-corporate-blue mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">Processing Time</p>
                <p className="text-gray-600 text-sm">5-10 business days</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <RotateCcw className="h-6 w-6 text-corporate-blue mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">Refund Method</p>
                <p className="text-gray-600 text-sm">Original payment method</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Mail className="h-6 w-6 text-corporate-blue mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">Request Via</p>
                <p className="text-gray-600 text-sm">Email or contact form</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To initiate a return or refund request, please contact our support team at{' '}
              <a href="mailto:support@greencodesolution.web.lk" className="text-corporate-blue hover:underline font-medium">
                support@greencodesolution.web.lk
              </a>{' '}
              with your order details and reason for the return. Our team will review your request and respond within 2 business days.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Exceptions
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              The following are not eligible for returns or refunds:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Services that have been fully rendered and completed</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Subscription fees for periods that have already been utilized</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Setup, installation, and consultation fees</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Third-party software licenses purchased through our platform</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-blue-100 mb-4">
            If you have any questions about our return and refund policy, please don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
