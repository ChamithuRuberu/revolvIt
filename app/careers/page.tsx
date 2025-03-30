import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    department: 'Engineering',
    description: 'We are looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.',
    requirements: [
      'Minimum 5 years of experience in full-stack development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure/GCP)',
      'Excellent problem-solving and communication skills'
    ]
  },
  {
    title: 'UX/UI Designer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Design',
    description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.',
    requirements: [
      'Minimum 3 years of experience in UX/UI design',
      'Proficiency in Figma and design systems',
      'Strong portfolio demonstrating web and mobile design work',
      'Experience with user research and testing'
    ]
  },
  {
    title: 'DevOps Engineer',
    location: 'New York, NY (On-site)',
    type: 'Full-time',
    department: 'Operations',
    description: 'Help us build and maintain robust infrastructure and deployment pipelines for our growing portfolio of applications.',
    requirements: [
      'Minimum 4 years of DevOps experience',
      'Strong knowledge of containerization and orchestration',
      'Experience with CI/CD pipelines and automation',
      'Security-first mindset and experience with compliance'
    ]
  },
  {
    title: 'Product Manager',
    location: 'Remote',
    type: 'Full-time',
    department: 'Product',
    description: 'Lead product strategy and development for our enterprise solutions, working closely with clients and development teams.',
    requirements: [
      'Minimum 5 years of product management experience',
      'Strong technical background and understanding',
      'Excellent stakeholder management skills',
      'Experience with agile methodologies'
    ]
  }
];

const benefits = [
  {
    title: 'Health & Wellness',
    items: [
      'Comprehensive health insurance',
      'Dental and vision coverage',
      'Mental health support',
      'Gym membership reimbursement'
    ]
  },
  {
    title: 'Work-Life Balance',
    items: [
      'Flexible working hours',
      'Remote work options',
      'Unlimited PTO',
      'Paid parental leave'
    ]
  },
  {
    title: 'Growth & Development',
    items: [
      'Professional development budget',
      'Conference attendance',
      'Online learning subscriptions',
      'Mentorship programs'
    ]
  },
  {
    title: 'Team & Culture',
    items: [
      'Regular team events',
      'Home office setup allowance',
      'Annual company retreats',
      'Recognition programs'
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl">
            Help us build the future of technology. We're always looking for talented
            individuals who share our passion for innovation and excellence.
          </p>
        </div>
      </div>

      {/* Culture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-gray-600 mb-4">
              At Green Code Solution, we believe in fostering a culture of innovation,
              collaboration, and continuous learning. Our team members are passionate
              about technology and committed to delivering excellence in everything we do.
            </p>
            <p className="text-gray-600">
              We value diversity, creativity, and open communication. When you join our
              team, you'll be part of an environment that encourages growth, supports
              your development, and celebrates your achievements.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
        <div className="grid grid-cols-1 gap-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.department}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Don't See the Right Fit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always interested in meeting talented individuals. Send us your resume
            and let us know how you can contribute to our team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 