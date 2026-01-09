import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New Delhi, India",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Joining this franchise was the best decision I ever made. The support team is incredible, and the business model is proven. Within 6 months, I was already seeing consistent profits!",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Noida, Noida Uttar Pradesh",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 4,
      review:
        "The training program exceeded my expectations. From day one, I felt prepared and confident. The ongoing support has been invaluable in growing my franchise to multiple locations.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "What sets this franchise apart is their commitment to franchisee success. They don't just hand you a manual and leave you on your own. The continuous support and innovation keep us ahead of the competition.",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, USA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 3,
      review:
        "I was nervous about making such a big investment, but the ROI has been outstanding. The brand recognition and proven systems make operating this franchise incredibly smooth and profitable.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={`${
              index < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-600 text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="max-w-full w-full px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-gray-900 via-gray-950 to-black">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 leading-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Trusted by Franchisees</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 uppercase">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Partners Say
            </span>
          </h2>

          <span className="text-sm text-gray-400 max-w-2xl mx-auto uppercase">
            Real stories from real franchisees who transformed their dreams into
            thriving businesses
          </span>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 sm:p-12 border border-gray-700/50 overflow-hidden">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote size={120} className="text-amber-400" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                    <span className="text-sm font-bold text-black">✓</span>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {testimonials[currentIndex].location}
                  </p>
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xl text-gray-300 leading-relaxed text-center sm:text-left">
                "{testimonials[currentIndex].review}"
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 w-12 h-12 bg-gray-800/80 hover:bg-amber-600 border border-amber-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft
              className="text-gray-300 group-hover:text-white"
              size={24}
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 w-12 h-12 bg-gray-800/80 hover:bg-amber-600 border border-amber-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight
              className="text-gray-300 group-hover:text-white"
              size={24}
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-amber-500"
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/80">
            <span className="flex items-center gap-2">
              Join Our Success Stories
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
