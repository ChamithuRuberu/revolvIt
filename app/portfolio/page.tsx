'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Globe, ShoppingCart, CheckCircle2, ExternalLink, TrendingUp, Building2, Image as ImageIcon } from 'lucide-react';

// Service categories with projects
const services = [
  {
    id: 'pos',
    name: 'POS',
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
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: Building2,
    description: 'Scalable enterprise-grade solutions for large organizations.',
    projects: [
      {
        title: 'Enterprise Management System',
        image: '/portfolio/image.png',
        features: [
          'Multi-branch management',
          'Advanced analytics and reporting',
          'Cloud infrastructure',
          'API integrations',
          '24/7 support and monitoring'
        ],
      },
    ],
  },
  {
    id: 'nft',
    name: 'NFT web',
    icon: ImageIcon,
    description: 'NFT marketplace and web3 platform solutions.',
    projects: [
      {
        title: 'NFT Marketplace Platform',
        image: '/portfolio/Gemini_Generated_Image_6g09cz6g09cz6g09.png',
        features: [
          'Blockchain integration',
          'Wallet connectivity',
          'Smart contract deployment',
          'Royalty system',
          'Multi-chain support'
        ],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    projects: [
      {
        title: 'CINETOON',
        image: '/portfolio/Gemini_Generated_Image_5ev5q5ev5q5ev5q5.png',
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
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredServices = activeFilter 
    ? services.filter(service => service.id === activeFilter)
    : services;

  const handleFilterClick = (categoryId: string | null) => {
    setActiveFilter(categoryId);
    // Scroll to top of services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

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

      {/* Filter Section - Dashboard Style */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => handleFilterClick(null)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === null
                  ? 'bg-corporate-blue text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleFilterClick(service.id)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    activeFilter === service.id
                      ? 'bg-corporate-blue text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-3.5 w-3.5" />
                  {service.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Sections - Dashboard Style */}
      <section id="services-section" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.map((service, serviceIndex) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} id={service.id} className={`mb-16 scroll-mt-24 ${serviceIndex === filteredServices.length - 1 ? 'mb-0' : ''}`}>
                {/* Service Header - Compact */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-corporate-blue rounded-lg shadow-sm">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {service.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {service.projects.length} {service.projects.length === 1 ? 'Project' : 'Projects'}
                  </div>
                </div>

                {/* Projects Grid - Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {service.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-white rounded-lg border border-gray-200 hover:border-corporate-blue/50 hover:shadow-md transition-all duration-200 overflow-hidden group"
                    >
                      <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-semibold text-corporate-blue">
                            {service.name}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                          {project.title}
                        </h3>
                        <ul className="space-y-1.5 mb-4">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-gray-600"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-corporate-blue mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-xs leading-snug line-clamp-1">{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-xs text-gray-400 pl-5.5">
                              +{project.features.length - 3} more
                            </li>
                          )}
                        </ul>
                        <Link
                          href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-dark font-medium text-xs group/link"
                        >
                          View Details
                          <ExternalLink className="ml-1.5 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
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

      {/* Stats Section - Dashboard Style */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-lg border border-corporate-blue/20 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Projects</span>
                <TrendingUp className="h-4 w-4 text-corporate-blue" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue">
                {filteredServices.reduce((sum, s) => sum + s.projects.length, 0)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Across all categories
              </div>
            </div>
            <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-lg border border-corporate-blue/20 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Categories</span>
                <Building2 className="h-4 w-4 text-corporate-blue" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue">
                {filteredServices.length}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Active service types
              </div>
            </div>
            <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-lg border border-corporate-blue/20 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Satisfaction</span>
                <CheckCircle2 className="h-4 w-4 text-corporate-blue" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue">100%</div>
              <div className="text-xs text-gray-500 mt-1">
                Client satisfaction rate
              </div>
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
