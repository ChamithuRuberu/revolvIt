import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    results: ['50% increase in conversion rate', '30% reduction in cart abandonment', 'Improved page load times by 40%']
  },
  {
    title: 'Healthcare Management System',
    category: 'Enterprise Solutions',
    image: '/portfolio/healthcare.jpg',
    results: ['Reduced wait times by 60%', 'Improved patient satisfaction by 45%', 'Streamlined administrative tasks']
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: '/portfolio/banking.jpg',
    description: 'A secure and user-friendly mobile banking application with features like real-time transactions, bill payments, and investment tracking.',
    results: ['4.8/5 App Store rating', '200,000+ downloads', 'Increased mobile banking adoption by 75%']
  },
  {
    title: 'Smart City Dashboard',
    category: 'IoT Solutions',
    image: '/portfolio/smart-city.jpg',
    description: 'An IoT-powered dashboard for monitoring and managing city infrastructure, including traffic, utilities, and public services.',
    results: ['20% reduction in energy consumption', 'Improved emergency response times by 35%', 'Real-time monitoring of 1000+ sensors']
  },
  {
    title: 'Supply Chain Platform',
    category: 'Enterprise Solutions',
    image: '/portfolio/supply-chain.jpg',
    description: 'A blockchain-based supply chain management platform that ensures transparency and traceability across the entire supply chain.',
    results: ['Reduced processing time by 40%', 'Improved supplier compliance by 65%', 'Enhanced inventory accuracy by 85%']
  },
  {
    title: 'AI-Powered Analytics',
    category: 'Data Analytics',
    image: '/portfolio/analytics.jpg',
    description: 'An advanced analytics platform that uses AI and machine learning to provide actionable business insights and predictive analytics.',
    results: ['Increased revenue by 25%', 'Improved decision accuracy by 40%', 'Reduced operational costs by 30%']
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-16 text-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl max-w-3xl">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's work together to bring your vision to life. Our team is ready to help
            you achieve your digital goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 