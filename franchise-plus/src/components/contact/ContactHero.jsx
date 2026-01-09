import React from "react";

const ContactHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-gray-950 to-gray-900 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Let’s Talk Business
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide mb-6">
          Get in Touch with{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Team
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
          Have questions about franchise opportunities or need expert guidance?
          Our team is here to help you take the next confident step.
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <span className="w-24 h-[3px] rounded-full bg-gradient-to-r from-amber-500 to-amber-700" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
