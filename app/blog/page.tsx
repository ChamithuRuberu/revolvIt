import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-of-web-development-2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI-powered tools to WebAssembly and edge computing.',
    image: '/blog/web-dev-trends.jpg',
    category: 'Web Development',
    author: 'John Smith',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    title: 'Building Scalable Cloud Solutions: Best Practices',
    slug: 'building-scalable-cloud-solutions',
    excerpt: 'Learn the essential best practices for building scalable and resilient cloud solutions that can handle growing business demands.',
    image: '/blog/cloud-solutions.jpg',
    category: 'Cloud Computing',
    author: 'Sarah Johnson',
    date: 'March 10, 2024',
    readTime: '7 min read'
  },
  {
    title: 'The Impact of AI on Software Development',
    slug: 'ai-impact-software-development',
    excerpt: 'Discover how artificial intelligence is transforming the software development landscape and what it means for developers.',
    image: '/blog/ai-software.jpg',
    category: 'Artificial Intelligence',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    readTime: '6 min read'
  },
  {
    title: 'Mobile App Development: Native vs Cross-Platform',
    slug: 'native-vs-cross-platform',
    excerpt: 'A comprehensive comparison of native and cross-platform mobile app development approaches to help you make the right choice.',
    image: '/blog/mobile-dev.jpg',
    category: 'Mobile Development',
    author: 'Emily Brown',
    date: 'March 1, 2024',
    readTime: '8 min read'
  },
  {
    title: 'Cybersecurity Best Practices for Businesses',
    slug: 'cybersecurity-best-practices',
    excerpt: 'Essential cybersecurity practices that every business should implement to protect their digital assets and customer data.',
    image: '/blog/cybersecurity.jpg',
    category: 'Cybersecurity',
    author: 'David Wilson',
    date: 'February 25, 2024',
    readTime: '6 min read'
  },
  {
    title: 'Digital Transformation Success Stories',
    slug: 'digital-transformation-success',
    excerpt: 'Real-world examples of successful digital transformation initiatives and the lessons learned from them.',
    image: '/blog/digital-transform.jpg',
    category: 'Digital Transformation',
    author: 'Lisa Anderson',
    date: 'February 20, 2024',
    readTime: '5 min read'
  }
];

const categories = [
  'All',
  'Web Development',
  'Cloud Computing',
  'Artificial Intelligence',
  'Mobile Development',
  'Cybersecurity',
  'Digital Transformation'
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl">
            Insights, updates, and expert perspectives on technology and digital innovation.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights and updates
            in technology and digital innovation.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 