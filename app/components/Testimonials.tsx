'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    text: "The team delivered an exceptional solution that transformed our business operations. Their expertise and professionalism are unmatched.",
    name: "John Smith",
    role: "CEO, AVAIRA"
  },
  {
    rating: 5,
    text: "The team behind Cinetoon's website did an outstanding job! They delivered a fast, responsive, and visually appealing site that perfectly represents our brand. Communication was smooth, Highly recommended for web design and development!",
    name: "Mr. Thathsara Dananjana",
    role: "CEO, CINETOON"
  },
  {
    rating: 5,
    text: "A true technology partner that understands our business needs. Their solutions have significantly improved our efficiency.",
    name: "Michael Chen",
    role: "Director, Global Solutions"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: { rating: number, text: string, name: string, role: string } }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{testimonial.text}</p>
      <div className="font-semibold">{testimonial.name}</div>
      <div className="text-gray-500">{testimonial.role}</div>
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional software solutions.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 