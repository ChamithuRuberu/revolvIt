'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Globe, ShoppingCart, CheckCircle2, ExternalLink, TrendingUp } from 'lucide-react';

// Service categories with projects
const services = [
  {
    id: 'pos',
    name: 'POS Systems',
    icon: ShoppingCart,
    description: 'Complete Point of Sale solutions for retail and hospitality businesses.',
    projects: [
      {
        title: 'Kumara Enterprises',
        image: '/portfolio/kumara_pos.png',
        features: [
          'User Management & Customer Management',
          'Order Processing & Order History',
          'Product Management',
          'Loyalty Card System',
          'Order creation with item details'
        ],
      },
      {
        title: 'FIT PRO System',
        image: '/portfolio/gym.png',
        features: [
          'Improved customer satisfaction by 45%',
          'Streamlined administrative tasks',
          'Real-time inventory tracking',
          'Comprehensive reporting system'
        ],
      },
    ],
  },
  {
    id: 'websites',
    name: 'Websites',
    icon: Globe,
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    projects: [
      {
        title: 'AVAIRA',
        image: '/portfolio/image.png',
        features: [
          'Smooth full-screen photo gallery with zoom',
          'Efficient Nodemailer system for notifications',
          'Enhanced user experience with responsive loading',
          'SEO optimized for better rankings'
        ],
      },
      {
        title: 'Bedding.lk',
        image: '/portfolio/sample.png',
        features: [
          'Improved user engagement by 60%',
          'Real-time product updates',
          'Secure payment integration',
          'Mobile-responsive design'
        ],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    projects: [
      {
        title: 'CINETOON',
        image: '/portfolio/banking.jpg',
        features: [
          '200,000+ downloads',
          'Increased mobile engagement by 75%',
          'Seamless user experience',
          'Real-time synchronization'
        ],
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-corporate-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Your Brand. Our Technology.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, serviceIndex) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className={`mb-24 ${serviceIndex === services.length - 1 ? 'mb-0' : ''}`}>
                {/* Service Header */}
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="p-4 bg-corporate-blue rounded-xl shadow-professional">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h2>
                      <p className="text-lg text-gray-600 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1"
                    >
                      <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {project.title}
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-gray-600"
                            >
                              <CheckCircle2 className="h-5 w-5 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-dark font-semibold text-sm group"
                        >
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-corporate-blue mb-3">
                {services.reduce((sum, s) => sum + s.projects.length, 0)}
              </div>
              <div className="text-gray-600 font-medium text-lg">Total Projects</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-corporate-blue mb-3">
                {services.length}
              </div>
              <div className="text-gray-600 font-medium text-lg">Service Categories</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-corporate-blue mb-3">100%</div>
              <div className="text-gray-600 font-medium text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to bring your vision to life. Our team is ready to help
            you achieve your digital goals with cutting-edge solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-lg shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
