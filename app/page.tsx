import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Database, Shield, Zap, Network, Code, Cloud, Smartphone, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        {/* AI Visualization Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/ai-visualization.jpg"
            alt="AI Visualization"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Business with
            <span className="block text-blue-400">Artificial Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We leverage cutting-edge AI technology to transform your business operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              Start AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-colors"
            >
              View AI Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/tech-pattern.jpg"
            alt="Tech Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Brain className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models and algorithms to automate processes and make data-driven decisions.
              </p>
            </div>

            {/* Natural Language Processing */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Cpu className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                Advanced text analysis and language understanding for improved communication and insights.
              </p>
            </div>

            {/* Computer Vision */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow border border-gray-700">
              <Network className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Image and video analysis solutions for visual recognition and processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Transform raw data into actionable insights with advanced analytics.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security with AI-powered threat detection.
              </p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalable AI</h3>
              <p className="text-gray-600">
                Cloud-native AI solutions that scale with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can revolutionize your operations.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            Get Started with AI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
