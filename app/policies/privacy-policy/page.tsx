'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, Bell } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: March 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-corporate-blue mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Green Code Solution (Pvt) Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of 
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website{' '}
                <a href="https://www.greencodesolution.web.lk" className="text-corporate-blue hover:underline font-medium">
                  www.greencodesolution.web.lk
                </a>{' '}
                or use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 - Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Information We Collect
          </h2>
          <div className="pl-11 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-corporate-blue" />
                Personal Information
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                We may collect the following personal information when you use our services or interact with our website:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span><strong>Contact Information:</strong> Name, email address, phone number, business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span><strong>Business Information:</strong> Company name, business registration details, industry type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span><strong>Payment Information:</strong> Billing address, payment method details (processed securely via PayHere payment gateway)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span><strong>Account Credentials:</strong> Username and encrypted password for account access</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-corporate-blue" />
                Automatically Collected Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span>IP address, browser type, and operating system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span>Pages visited, time spent on pages, and navigation patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-corporate-blue mt-1">•</span>
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 - How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            How We Use Your Information
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Globe, title: 'Service Delivery', desc: 'To provide, maintain, and improve our software products and services' },
                { icon: Lock, title: 'Payment Processing', desc: 'To process transactions securely through PayHere payment gateway' },
                { icon: Bell, title: 'Communications', desc: 'To send important updates, billing information, and service notifications' },
                { icon: Eye, title: 'Analytics', desc: 'To analyze usage patterns and improve user experience' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="h-5 w-5 text-corporate-blue" />
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Data Protection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Data Protection & Security
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Encryption:</strong> All data transmissions are encrypted using SSL/TLS protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Secure Payment Processing:</strong> Payment information is processed through PayHere, a PCI-DSS compliant payment gateway. We do not store your credit/debit card details on our servers</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Access Controls:</strong> Strict access controls are in place to ensure only authorized personnel can access your data</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600"><strong>Regular Audits:</strong> We conduct periodic security assessments to identify and address vulnerabilities</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 - Third-Party Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Third-Party Sharing
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Payment Processing:</strong> With PayHere to process your payments securely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Legal Requirements:</strong> When required by law or to comply with legal obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Service Providers:</strong> With trusted service providers who assist in operating our services, subject to confidentiality agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Your Rights
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Right to Access', desc: 'Request a copy of the personal information we hold about you' },
                { title: 'Right to Rectification', desc: 'Request correction of inaccurate or incomplete information' },
                { title: 'Right to Deletion', desc: 'Request deletion of your personal information, subject to legal obligations' },
                { title: 'Right to Object', desc: 'Object to the processing of your personal information for certain purposes' },
                { title: 'Right to Data Portability', desc: 'Request your data in a structured, commonly used format' },
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <UserCheck className="h-5 w-5 text-corporate-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{right.title}:</strong>
                    <span className="text-gray-600 ml-1">{right.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            Cookies Policy
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Essential Cookies:</strong> Required for the website to function properly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Analytics Cookies:</strong> To understand how visitors interact with our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-corporate-blue mt-1">•</span>
                <span><strong>Functional Cookies:</strong> To remember your preferences and settings</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </div>
        </section>

        {/* Section 7 - Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-corporate-blue text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            Changes to This Policy
          </h2>
          <div className="pl-11">
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically to stay informed about 
              how we protect your information. Continued use of our services after changes constitutes acceptance of the 
              updated policy.
            </p>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Privacy Concerns?</h3>
          <p className="text-blue-100 mb-4">
            If you have any questions or concerns about our Privacy Policy or how we handle your data, 
            please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-block bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
              Contact Us
            </Link>
            <a
              href="mailto:privacy@greencodesolution.web.lk"
              className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center"
            >
              privacy@greencodesolution.web.lk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
