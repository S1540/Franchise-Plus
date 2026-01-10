import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New Delhi, India",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Joining this franchise was the best decision I ever made. The support team is incredible and the business model is proven.",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Noida, Uttar Pradesh",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 4,
      review:
        "The training program exceeded my expectations. From day one, I felt confident and well supported.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      review:
        "Their commitment to franchise success is unmatched. Continuous innovation keeps us ahead of the competition.",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, USA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 3,
      review:
        "The ROI has been outstanding. The systems make daily operations smooth and predictable.",
    },
  ];

  const changeSlide = (newIndex) => {
    if (isFading) return;
    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-600 text-gray-600"
          }
        />
      ))}
    </div>
  );

  return (
    <section className="max-w-full w-full px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-t from-gray-900 via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* HEADING + SUBHEADING */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Happy Clients?
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 uppercase">
            What Our{" "}
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Partners Say
            </span>
          </h2>
          <p className="text-sm text-gray-400 uppercase">
            Real stories from real franchise owners
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 sm:p-12 border border-gray-700/50 overflow-hidden">
            <div
              className={`transition-opacity duration-300 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={120} className="text-amber-400" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-500/30"
                  />

                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {testimonials[currentIndex].location}
                    </p>
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  “{testimonials[currentIndex].review}”
                </p>
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <button
            onClick={prevSlide}
            className=" hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-gray-800/80 hover:bg-amber-600 border border-amber-500/30 rounded-full sm:flex items-center justify-center transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-gray-800/80 hover:bg-amber-600 border border-amber-500/30 rounded-full sm:flex items-center justify-center transition-all"
          >
            <ChevronRight className="text-white" />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-amber-500"
                    : "w-3 h-3 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
