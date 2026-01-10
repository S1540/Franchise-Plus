import React, { useState } from "react";
import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative flex items-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-700 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-900 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-900/30 backdrop-blur-sm border border-amber-700/50 rounded-full text-amber-400 text-sm font-medium">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Revolutionary Platform</span>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-black leading-tight uppercase">
                <span className="block text-white">Build The</span>
                <span className="block bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>

              {/* Underline */}
              <div className="w-32 h-1.5 bg-linear-to-r from-amber-500 to-amber-700 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed max-w-xl">
              Unleash unprecedented potential with our next-generation platform.
              Experience seamless integration, lightning-fast performance, and
              tools that adapt to your vision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="bg-amber-500/20 border border-amber-500/50 hover:border-amber-400  py-4 px-6 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <Zap className="w-4 h-4 inline-block group-hover:rotate-45 transition-all duration-300" />{" "}
                Start Free Trial
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-amber-500/50 rounded-lg font-bold hover:bg-white/20 hover:border-amber-400 transition-all duration-300 cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <span>View Demo</span>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/40 transition-all duration-300">
                    <div className="w-0 h-0 border-l-8 border-l-amber-400 border-y-4 border-y-transparent ml-0.5" />
                  </div>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              {[
                { value: "2M+", label: "Downloads" },
                { value: "150+", label: "Countries" },
                { value: "4.9★", label: "Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="text-3xl font-black bg-linear-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Floating Orbs Behind Image */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-700 rounded-full blur-3xl opacity-30 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-2 border-amber-500/30 hover:border-amber-400 transition-all duration-500 ">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-amber-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-12 -left-6 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-amber-500/30 shadow-xl hidden lg:block animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98.5%</div>
                  <div className="text-xs text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 -right-6 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-green-500/30 shadow-xl hidden lg:block animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ↑
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+127%</div>
                  <div className="text-xs text-gray-300">Revenue Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
