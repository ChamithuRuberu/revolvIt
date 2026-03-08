'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Loader2, Globe, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch('/api/portal');
        const data = await res.json();
        const portfolio = data.portfolio || [];

        const found = portfolio.find(
          (p: any) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
        );
        setProject(found);
      } catch (e) {
        console.error('Failed to fetch project', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="h-12 w-12 text-corporate-blue animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm inline-block">
            <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Project Not Found</h1>
            <p className="text-gray-500 font-bold mb-8">The case study you are looking for might have been moved or renamed.</p>
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-corporate-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-corporate-blue-dark transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      {/* Premium Header */}
      <div className="bg-gradient-to-br from-corporate-gray to-gray-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='white' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-gray-300 hover:text-white mb-10 font-bold text-sm transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Solutions
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="inline-block bg-corporate-blue/20 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Case Study: {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {project.title}
              </h1>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-corporate-gray px-8 py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all shadow-xl shadow-black/20"
              >
                Launch Live Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modern Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Visual & Overview */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200 overflow-hidden mb-12 relative group">
              <div className="relative h-[400px] md:h-[600px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                  <div className="h-8 w-2 bg-corporate-blue rounded-full"></div>
                  Solution Overview
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Technologies Leveraged</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-50 border border-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-black shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Insights */}
          <div className="lg:col-span-4">
            <div className="space-y-8 sticky top-32">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="h-5 w-5 text-corporate-blue" />
                  Key Outcomes
                </h3>
                <ul className="space-y-6">
                  {(project.features || project.results || []).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-white p-1 rounded-full shadow-sm mt-1">
                        <CheckCircle2 className="h-3 w-3 text-corporate-blue" />
                      </div>
                      <span className="text-sm text-gray-600 font-bold leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.testimonial && (
                <div className="bg-corporate-blue rounded-3xl p-8 text-white shadow-xl shadow-blue-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                    <CheckCircle2 className="h-32 w-32" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-blue-200 relative z-10">Client Testimonial</h3>
                  <p className="text-lg font-bold leading-relaxed italic relative z-10">
                    "{project.testimonial}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
