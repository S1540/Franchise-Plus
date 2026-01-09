import React, { useState } from "react";
import { Faqs } from "../data/franchiseTabsData";
import { Plus, Minus } from "lucide-react";

const FaqsSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="max-w-full w-full px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl w-full mx-auto text-white">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Got Questions?
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black  mb-4 uppercase">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-sm text-gray-400 max-w-2xl mx-auto uppercase">
            Everything you need to know about joining our franchise
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-2">
          {Faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="relative bg-gray-800/40 backdrop-blur-sm border-l-4 border-amber-500/50 rounded-lg overflow-hidden hover:border-amber-400 hover:bg-gray-800/60 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1 pointer-events-none">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-base sm:text-lg font-semibold ">
                    {faq.question}
                  </span>
                </div>
                {/* Toggle Icon */}
                <div
                  className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/20 ml-4 pointer-events-none transition-all duration-400 ${
                    openFaq === faq.id ? "rotate-180" : ""
                  }`}
                >
                  {openFaq === faq.id ? (
                    <Minus className="text-amber-400" size={18} />
                  ) : (
                    <Plus className="text-amber-400" size={18} />
                  )}
                </div>
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="pl-12">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/80">
            <span className="flex items-center gap-2">
              Contact Our Team
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

export default FaqsSection;
