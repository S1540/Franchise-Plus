import React from "react";
import Hero from "../components/Hero";
import FranchiseTabs from "../components/FranchiseTabs";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqsSection from "../components/FaqsSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FranchiseTabs />
      <TestimonialsSection />
      <FaqsSection />
    </div>
  );
};

export default HomePage;
