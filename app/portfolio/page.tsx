import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AVAIRA',
    category: 'Web Development',
    image: '/portfolio/image.png',
    results: [
      'Implemented smooth full-screen photo gallery with zoom capabilities',
      'Integrated efficient Nodemailer system for instant customer notifications',
      'Enhanced user experience with responsive image loading'
    ],
  },
  {
    title: 'FIT PRO System',
    category: 'Enterprise Solutions',
    image: '/portfolio/gym.png',
    results: ['Improved patient satisfaction by 45%', 'Streamlined administrative tasks']
  },
  {
    title: 'Bedding.lk',
    category: 'Web Development',
    image: '/portfolio/sample.png',
    results: ['Improved emergency response times by 35%', 'Real-time monitoring of 1000+ sensors']
  },
  {
    title: 'CINETOON',
    category: 'Mobile Development',
    image: '/portfolio/banking.jpg',
    results: ['200,000+ downloads', 'Increased mobile banking adoption by 75%']
  },
 

];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-16 text-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
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
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-center"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Results */}
                <div className="mb-4">
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