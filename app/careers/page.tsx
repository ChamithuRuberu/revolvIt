'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase, Globe, ShieldCheck, Zap, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Careers() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal');
        const json = await res.json();
        if (json.jobs) setData(json.jobs);
      } catch (e) {
        console.error('Failed to fetch jobs', e);
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

  const jobOpenings = data || [];
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-4 border-corporate-blue pl-6">Our Culture</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              At Green Code Solution, we believe in fostering a culture of innovation,
              collaboration, and continuous learning. Our team members are passionate
              about technology and committed to delivering excellence in everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We value diversity, creativity, and open communication. When you join our
              team, you'll be part of an environment that encourages growth, supports
              your development, and celebrates your achievements.
            </p>
          </div>
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-corporate-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">We offer more than just a job. We offer a platform for you to excel and grow your career in a supportive environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Remote Flexibility", desc: "Work from anywhere with our flexible remote-first policy for many roles.", icon: Globe },
              { title: "Global Projects", desc: "Work on exciting projects for clients across different industries worldwide.", icon: Briefcase },
              { title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and family.", icon: ShieldCheck },
              { title: "Learning Fund", desc: "Dedicated budget for your certifications, books, and professional growth.", icon: Zap }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                <benefit.icon className="h-10 w-10 mb-6 text-blue-300" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
            {[
              { step: "01", title: "Apply", desc: "Submit your CV and portfolio through our portal." },
              { step: "02", title: "Review", desc: "Our team reviews your profile within 48 hours." },
              { step: "03", title: "Technical", desc: "Showcase your skills in a practical interview." },
              { step: "04", title: "Offer", desc: "Get a competitive offer and join the family." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-corporate-blue flex items-center justify-center mx-auto mb-6 shadow-professional text-2xl font-black text-corporate-blue">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Job Openings */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {jobOpenings.map((job: any, index: number) => (
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
                    {job.requirements.map((requirement: string, reqIndex: number) => (
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