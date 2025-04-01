import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Layout, Server, Cpu, Cloud, Shield, Zap, Database, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        {/* Tech Visualization Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="Tech Visualization"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Digital Excellence with
            <span className="block text-blue-400">Modern Technology</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We create powerful software solutions using Next.js, Spring Boot, and cloud technologies
            to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/image2.png"
            alt="Tech Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Server className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-300">
                Modern web applications built with Next.js and Spring Boot, delivering exceptional user experiences.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Layout className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-300">
                User-centered design solutions that create beautiful, intuitive, and accessible interfaces.
              </p>
            </div>

            {/* Cloud Services */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Cloud className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-300">
                Scalable cloud solutions leveraging AWS, Azure, and Google Cloud for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Modern Tech Stack</h3>
              <p className="text-gray-600">
                Leveraging Next.js, Spring Boot, and cloud technologies for robust solutions.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Comprehensive security measures to protect your applications and data.
              </p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Cloud-native architecture that grows with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our software development expertise can help achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
