'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Shield, Briefcase, Ban, RefreshCw } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-100">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: March 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-4">
            <FileText className="h-6 w-6 text-corporate-blue mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Agreement Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the website{' '}
                <a href="https://www.greencodesolution.web.lk" className="text-corporate-blue hover:underline font-medium">
                  www.greencodesolution.web.lk
                </a>{' '}
                and all services provided by Green Code Solution (Pvt) Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), 
                a company registered in Sri Lanka. By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Services
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Green Code Solution provides the following services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'POS (Point of Sale) Software Solutions',
                'Custom Software Development',
                'Cloud-Based Business Solutions',
                'IT Consulting & Support',
                'Hardware Sales (POS Terminals & Accessories)',
                'Software Licensing & Subscriptions',
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Briefcase className="h-4 w-4 text-corporate-blue flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            User Accounts
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              When creating an account on our platform, you agree to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Provide accurate, current, and complete information during registration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Maintain the security and confidentiality of your account credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Be responsible for all activities that occur under your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Notify us immediately of any unauthorized use of your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Not share your account credentials with third parties</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Payment Terms
          </h2>
          <div className="pl-11">
            <div className="bg-gray-50 p-5 rounded-xl mb-4">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-5 w-5 text-corporate-blue" />
                <h3 className="font-semibold text-gray-900">Payment Processing</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                All payments are processed securely through <strong>PayHere</strong>, our authorized payment gateway partner. 
                We accept major credit/debit cards and online banking methods available in Sri Lanka.
              </p>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>All prices are quoted in <strong>Sri Lankan Rupees (LKR)</strong> unless otherwise stated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Subscription fees are billed in advance on a monthly or annual basis as selected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Hardware purchases require full payment before shipment or delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Custom development projects follow the payment schedule outlined in the project agreement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>We reserve the right to suspend services for overdue payments</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Intellectual Property
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              All content, features, and functionality of our website and services, including but not limited to text, 
              graphics, logos, software, and code, are the exclusive property of Green Code Solution (Pvt) Ltd and are 
              protected by intellectual property laws.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Software licenses are granted as non-exclusive, non-transferable rights to use the software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>You may not copy, modify, distribute, or reverse-engineer our software without explicit written permission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Custom-developed solutions ownership is determined by the specific project agreement</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Service Level & Availability
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We strive to maintain high availability of our services. However:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>We do not guarantee uninterrupted or error-free operation of our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Scheduled maintenance windows will be communicated in advance whenever possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>We shall not be liable for any downtime caused by factors beyond our reasonable control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Specific SLA terms may be outlined in individual service agreements</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            Limitation of Liability
          </h2>
          <div className="pl-11">
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  To the fullest extent permitted by applicable law in Sri Lanka, Green Code Solution shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, or business opportunities, arising from the use or inability to use our services.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our total liability for any claim arising from or related to these Terms shall not exceed the amount paid 
              by you to us during the twelve (12) months preceding the claim.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            Prohibited Activities
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Users are prohibited from:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Using our services for any unlawful purpose or in violation of any laws</span>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Attempting to gain unauthorized access to our systems or other users&apos; accounts</span>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Interfering with or disrupting the integrity of our services or servers</span>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Uploading or transmitting malicious software or harmful data</span>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Reselling or redistributing our services without authorization</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            Termination
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, with or without 
              cause, and with or without notice. Upon termination:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Your right to use the services will cease immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>You may request export of your data within 30 days of termination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Any outstanding payments will become immediately due</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span>Provisions that by their nature should survive termination shall remain in effect</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
            Governing Law
          </h2>
          <div className="pl-11">
            <div className="flex items-start gap-3">
              <Scale className="h-5 w-5 text-corporate-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Democratic Socialist 
                Republic of Sri Lanka. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction 
                of the courts of Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">10</span>
            Changes to Terms
          </h2>
          <div className="pl-11">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-5 w-5 text-corporate-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                posting on this page. Your continued use of our services after any modifications indicates your 
                acceptance of the updated Terms. We recommend reviewing these Terms periodically.
              </p>
            </div>
          </div>
        </section>

        {/* Related Policies */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/policies/privacy-policy"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Shield className="h-5 w-5 text-corporate-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Privacy Policy</p>
                <p className="text-gray-500 text-xs">How we handle your data</p>
              </div>
            </Link>
            <Link
              href="/policies/return-policy"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <RefreshCw className="h-5 w-5 text-corporate-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Return & Refund Policy</p>
                <p className="text-gray-500 text-xs">Our return and refund guidelines</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 p-6 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Questions About Our Terms?</h3>
          <p className="text-blue-100 mb-4">
            If you have any questions or concerns about these Terms & Conditions, please reach out to us.
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
