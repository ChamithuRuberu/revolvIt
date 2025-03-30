import { Code, Cloud, Smartphone, Database, Shield, Users } from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and technologies. We create responsive, scalable, and user-friendly solutions that drive business growth.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Website Maintenance & Support'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Mobile App Maintenance'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that help businesses optimize their operations and reduce costs.',
    features: [
      'Cloud Migration',
      'Cloud Architecture Design',
      'DevOps Services',
      'Serverless Solutions',
      'Cloud Security'
    ]
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Robust database design and management services to help you store, manage, and analyze your data effectively.',
    features: [
      'Database Design',
      'Data Migration',
      'Performance Optimization',
      'Backup & Recovery',
      'Database Administration'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Security Monitoring',
      'Compliance Management',
      'Security Training'
    ]
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you make informed decisions and achieve your business objectives.',
    features: [
      'Technology Assessment',
      'Digital Transformation',
      'Project Management',
      'Technology Stack Selection',
      'Process Optimization'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            We offer a comprehensive range of software development and IT services
            to help your business thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
              >
                <IconComponent className="h-12 w-12 text-blue-600 mb-6" />
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We specialize in creating tailored solutions to meet your specific business needs.
            Let's discuss how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 