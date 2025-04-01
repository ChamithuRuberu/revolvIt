import { Code, Cloud, Smartphone, Database, Shield, Users, Layout, Server, Cpu } from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Enterprise-grade software solutions built with cutting-edge technologies and best practices. We specialize in creating scalable, maintainable, and efficient applications.',
    features: [
      'Custom Software Solutions',
      'Enterprise Applications',
      'Microservices Architecture',
      'API Development',
      'Code Quality & Testing'
    ]
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive interfaces. We focus on creating beautiful, accessible, and user-friendly experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Accessibility Compliance'
    ]
  },
  {
    icon: Server,
    title: 'Web Development',
    description: 'Modern web applications built with Next.js and Spring Boot. We create fast, secure, and scalable web solutions that deliver exceptional user experiences.',
    features: [
      'Next.js Development',
      'Spring Boot Applications',
      'Full-stack Development',
      'RESTful APIs',
      'Real-time Applications'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions leveraging AWS, Azure, and Google Cloud. We help businesses migrate, optimize, and manage their cloud infrastructure.',
    features: [
      'Cloud Migration',
      'Container Orchestration',
      'Serverless Architecture',
      'Cloud Security',
      'DevOps & CI/CD'
    ]
  },
  {
    icon: Cpu,
    title: 'Backend Development',
    description: 'Robust backend solutions using Spring Boot and modern backend technologies. We build scalable and secure server-side applications.',
    features: [
      'Spring Boot Development',
      'Database Design',
      'API Integration',
      'Authentication & Authorization',
      'Performance Optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security solutions to protect your applications and data. We ensure your systems meet industry standards and best practices.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Data Protection',
      'Security Monitoring'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
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