import { Trophy, Target, Users, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Chamithu Ruberu',
    role: 'CEO & Founder',
    image: '/team/john-smith.jpg',
    bio: 'With over 5 years of experience in software development and business leadership.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/team/sarah-johnson.jpg',
    bio: 'Expert in cloud architecture and emerging technologies.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: '/team/michael-chen.jpg',
    bio: 'Full-stack developer with a passion for clean code and innovation.'
  },
  {
    name: 'Emily Brown',
    role: 'UX Director',
    image: '/team/emily-brown.jpg',
    bio: 'Creating user-centered designs that drive engagement and satisfaction.'
  }
];

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and approaches to solve complex problems.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together with our clients to achieve the best possible outcomes.'
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Committed to continuous learning and professional development.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Green Code Solution</h1>
          <p className="text-xl max-w-3xl">
            We're a team of passionate technologists dedicated to creating innovative
            software solutions that drive business success.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2020, Green Code Solution emerged from a vision to transform how businesses
              approach digital solutions. We recognized that many organizations struggled
              with digital transformation and needed a partner who could guide them through
              the process.
            </p>
            <p className="text-gray-400 mb-4">
              Today, we're proud to have helped numerous businesses across various
              industries achieve their digital goals. Our team has grown to include
              talented developers, designers, and consultants who share our passion
              for excellence and innovation.
            </p>
            <p className="text-gray-400">
              We continue to evolve and adapt to the changing technology landscape,
              always staying ahead of the curve to provide our clients with the best
              possible solutions.
            </p>
          </div>
          <div className="relative h-[400px] rounded-sm overflow-hidden">
            <Image
              src="/about/image.png"
              alt="Green Code Solution office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16 text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Link href="/careers">
        <div className="bg-blue-600 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for
              technology and innovation. Check out our current openings.
            </p>
            <a
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </Link>
    </div>

  );
} 