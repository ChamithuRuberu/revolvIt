'use client';

import { useState, useEffect } from 'react';
import { Trophy, Target, Users, Rocket, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const IconMap: Record<string, any> = { Trophy, Target, Users, Rocket };

const defaultTeam = [
  { name: 'Chamithu Ruberu', role: 'CEO & Founder', image: '/team/john-smith.jpg', bio: 'With over 5 years of experience in software development and business leadership.' },
  { name: 'Sarah Johnson', role: 'CTO', image: '/team/sarah-johnson.jpg', bio: 'Expert in cloud architecture and emerging technologies.' },
  { name: 'Michael Chen', role: 'Lead Developer', image: '/team/michael-chen.jpg', bio: 'Full-stack developer with a passion for clean code and innovation.' },
  { name: 'Emily Brown', role: 'UX Director', image: '/team/emily-brown.jpg', bio: 'Creating user-centered designs that drive engagement and satisfaction.' }
];

const defaultValues = [
  { icon: 'Trophy', title: 'Excellence', description: 'We strive for excellence in everything we do, from code quality to client service.' },
  { icon: 'Target', title: 'Innovation', description: 'Constantly exploring new technologies and approaches to solve complex problems.' },
  { icon: 'Users', title: 'Collaboration', description: 'Working together with our clients to achieve the best possible outcomes.' },
  { icon: 'Rocket', title: 'Growth', description: 'Committed to continuous learning and professional development.' }
];

export default function About() {
  const [values, setValues] = useState<any[]>(defaultValues);
  const [team, setTeam] = useState<any[]>(defaultTeam);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal');
        const json = await res.json();
        if (json.values && json.values.length > 0) setValues(json.values);
        if (json.team && json.team.length > 0) setTeam(json.team);
      } catch (e) {
        console.error('Failed to fetch about data', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Green Code Solution</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            We&apos;re a team of passionate technologists dedicated to creating innovative
            software solutions that drive business success.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, Green Code Solution emerged from a vision to transform how businesses
              approach digital solutions. We recognized that many organizations struggled
              with digital transformation and needed a partner who could guide them through
              the process.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today, we&apos;re proud to have helped numerous businesses across various
              industries achieve their digital goals. Our team has grown to include
              talented developers, designers, and consultants who share our passion
              for excellence and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We continue to evolve and adapt to the changing technology landscape,
              always staying ahead of the curve to provide our clients with the best
              possible solutions.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-professional-lg">
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
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: any, index: number) => {
              const IconComponent = IconMap[value.icon] || Trophy;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block p-4 bg-blue-50 rounded-xl mb-4">
                    <IconComponent className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Link href="/careers">
        <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              We&apos;re always looking for talented individuals who share our passion for
              technology and innovation. Check out our current openings.
            </p>
            <a
              className="inline-block bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5"
            >
              View Careers
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
} 