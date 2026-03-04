'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Loader2 } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: { rating: number, text: string, name: string, role: string } }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-professional hover:shadow-professional-lg transition-all duration-300 h-full border border-gray-100 relative">
      <Quote className="absolute top-6 right-6 h-12 w-12 text-corporate-blue/10" />
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{testimonial.text}</p>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-500">{testimonial.role}</div>
      </div>
    </div>
  );
};

const defaultTestimonials = [
  {
    rating: 5,
    text: "I recently had a website developed and I couldn't be happier with the experience. From start to finish, the communication was clear and consistent, which made the entire process smooth and stress-free. The team was extremely professional and always responsive to my questions and feedback.The project was completed on time, and the final result exceeded my expectations. Every detail I requested was implemented perfectly, and the site runs beautifully. I'm fully satisfied with the service and would highly recommend them to anyone looking for reliable and high-quality web development.",
    name: "Mr. Chamathka Nimsara",
    role: "CEO, outbaze"
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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portal');
        const json = await res.json();
        if (json.testimonials && json.testimonials.length > 0) {
          setTestimonials(json.testimonials);
        }
      } catch (e) {
        console.error('Failed to fetch testimonials', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-10 w-10 text-corporate-blue animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional software solutions.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <div className="flex justify-center items-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-corporate-blue hover:text-white transition-all duration-300 shadow-professional hover:shadow-professional-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-corporate-blue' : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-corporate-blue hover:text-white transition-all duration-300 shadow-professional hover:shadow-professional-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 