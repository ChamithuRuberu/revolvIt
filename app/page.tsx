import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
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
          <div className="inline-block bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300">Innovating the Future of Software</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Digital Excellence with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Modern Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            We create powerful software solutions using Next.js, Spring Boot, and cloud technologies
            to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border-2 border-blue-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss how our software development expertise can help achieve your goals.
          </p>
          <Link
            href="/contact"
            className="group bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
