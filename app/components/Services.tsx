"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Shield, Layout, Server, Cpu, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

const IconMap: Record<string, any> = { Code, Cloud, Shield, Layout, Server, Cpu };

// Motion variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal/public?fields=websiteServices');
        const json = await res.json();
        if (json.websiteServices && json.websiteServices.length > 0) {
          setServices(json.websiteServices);
        } else {
          // Fallback defaults
          setServices([
            { icon: 'Code', title: 'Software Development', description: 'Enterprise-grade software solutions built with cutting-edge technologies and best practices.', features: ['Custom Software Solutions', 'Enterprise Applications', 'Microservices Architecture', 'API Development', 'Code Quality & Testing'] },
            { icon: 'Layout', title: 'UI/UX Design', description: 'User-centered design solutions that create engaging and intuitive interfaces.', features: ['User Interface Design', 'User Experience Design', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility Compliance'] },
            { icon: 'Server', title: 'Web Development', description: 'Modern web applications built with Next.js and Spring Boot.', features: ['Design Systems', 'Full-stack Development', 'RESTful APIs', 'Real-time Applications'] },
            { icon: 'Cloud', title: 'Cloud Services', description: 'Comprehensive cloud solutions leveraging AWS, Azure, and Google Cloud.', features: ['Cloud Migration', 'Container Orchestration', 'Serverless Architecture', 'Cloud Security', 'DevOps & CI/CD'] },
            { icon: 'Shield', title: 'Security & Compliance', description: 'Enterprise-grade security solutions to protect your applications and data.', features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Data Protection', 'Security Monitoring'] },
            { icon: 'Cpu', title: 'Custom Software Solutions', description: 'Robust backend solutions using Spring Boot and modern backend technologies.', features: ['Database Design', 'Performance Optimization'] },
          ]);
        }
      } catch (e) {
        console.error('Failed to fetch services', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-10 w-10 text-corporate-blue animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of software development and IT services
            to help your business thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const IconComponent = IconMap[service.icon] || Code;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-6 group-hover:bg-corporate-blue group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-corporate-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {(service.features || []).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-corporate-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-dark rounded-2xl p-12 text-center text-white shadow-professional-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We specialize in creating tailored solutions to meet your specific business needs.
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
