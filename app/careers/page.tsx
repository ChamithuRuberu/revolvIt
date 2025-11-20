import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Colombo, Sri Lanka (On-site)',
    type: 'Full-time',
    department: 'Engineering',
    description: 'We are looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.',
    requirements: [
      'Minimum 5 years of experience in full-stack development',
      'Strong proficiency in React, Spring Boot, and TypeScript',
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

export default function Careers() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Help us build the future of technology. We're always looking for talented
            individuals who share our passion for innovation and excellence.
          </p>
        </div>
      </div>

      {/* Culture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Culture</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Green Code Solution, we believe in fostering a culture of innovation,
              collaboration, and continuous learning. Our team members are passionate
              about technology and committed to delivering excellence in everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We value diversity, creativity, and open communication. When you join our
              team, you'll be part of an environment that encourages growth, supports
              your development, and celebrates your achievements.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-professional-lg">
            <Image
              src="/careers/2150165607.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-corporate-blue" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-corporate-blue" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-corporate-blue" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-4 md:mt-0 inline-flex items-center bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-corporate-blue-dark transition-all duration-300 shadow-professional hover:shadow-professional-lg transform hover:-translate-y-0.5"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            We're always interested in meeting talented individuals. Send us your resume
            and let us know how you can contribute to our team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 