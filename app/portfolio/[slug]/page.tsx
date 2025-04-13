import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  results: string[];
  challenge: string;
  solution: string;
  technologies: string[];
  testimonial: string;
}

const projects: Project[] = [
  {
    title: 'AVAIRA',
    category: 'Web Development',
    image: '/portfolio/image.png',
    description: 'Just launched a stunning new wedding website for AVAIRA by Green Code Solutions! this beautifully crafted site showcases elegant design and seamless functionality. From breathtaking galleries to easy planning tools, we\'ve created the perfect digital space for couples beginning their forever journey.',
    link: 'https://avaira.com.au/',
    results: [
      'Implemented smooth full-screen photo gallery with zoom capabilities',
      'Integrated efficient Nodemailer system for instant customer notifications',
      'Enhanced user experience with responsive image loading'
    ],
    challenge: 'The client needed a scalable e-commerce solution that could handle high traffic and provide a smooth user experience.',
    solution: 'We implemented a modern tech stack with Next.js, optimized performance, and integrated advanced analytics.',
    technologies: ['Next.js', 'Spring Boot', 'MySQL', 'AWS'],
    testimonial: 'I recently had a website developed and I couldn\'t be happier with the experience. From start to finish, the communication was clear and consistent, which made the entire process smooth and stress-free. The team was extremely professional and always responsive to my questions and feedback. The project was completed on time, and the final result exceeded my expectations. Every detail I requested was implemented perfectly, and the site runs beautifully. I\'m fully satisfied with the service and would highly recommend them to anyone looking for reliable and high-quality web development.'
  },
  {
    title: 'GYM Management System',
    category: 'Enterprise Solutions',
    image: '/portfolio/gym.png',
    description: 'A comprehensive healthcare management system designed to streamline patient care and administrative processes.',
    results: ['Reduced wait times by 60%', 'Improved patient satisfaction by 45%', 'Streamlined administrative tasks'],
    challenge: 'The healthcare facility needed a system to manage patient records, appointments, and billing efficiently.',
    solution: 'We developed a secure, HIPAA-compliant system with automated scheduling and billing features.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    testimonial: 'The system has revolutionized how we manage our healthcare facility. Everything is now more organized and efficient.'
  },
  {
    title: 'CINETOON',
    category: 'Mobile Development',
    image: '/portfolio/banking.jpg',
    description: 'A secure and user-friendly mobile banking application with features like real-time transactions, bill payments, and investment tracking.',
    results: ['4.8/5 App Store rating', '200,000+ downloads', 'Increased mobile banking adoption by 75%'],
    challenge: 'The bank needed a modern, secure mobile banking solution that could handle complex financial transactions while maintaining high security standards.',
    solution: 'We developed a robust mobile app with end-to-end encryption, biometric authentication, and real-time transaction processing.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase'],
    testimonial: 'The team behind Cinetoon\'s website did an outstanding job! They delivered a fast, responsive, and visually appealing site that perfectly represents our brand. Communication was smooth, Highly recommended for web design and development!'
  },
  {
    title: 'Bedding.lk',
    category: 'IoT Solutions',
    image: '/portfolio/sample.png',
    description: 'An IoT-powered dashboard for monitoring and managing city infrastructure, including traffic, utilities, and public services.',
    results: ['20% reduction in energy consumption', 'Improved emergency response times by 35%', 'Real-time monitoring of 1000+ sensors'],
    challenge: 'The city needed a centralized system to monitor and manage various urban services efficiently while reducing operational costs.',
    solution: 'We created an integrated IoT platform that connects various city services and provides real-time analytics and control capabilities.',
    technologies: ['React', 'AWS IoT', 'Grafana'],
    testimonial: 'The smart city dashboard has transformed how we manage our city services. The real-time insights have helped us make better decisions.'
  },
  
];

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link href="/portfolio" className="text-blue-600 hover:text-blue-700">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-white hover:text-gray-200 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl">{project.category}</p>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-8">
                {project.description}
                <br />
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-0"
                  >
                    Visit Website →
                  </a>
                )}
              </p>

              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Key Results</h3>
              <ul className="space-y-3">
                {project.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-600 italic">
                  "{project.testimonial}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 