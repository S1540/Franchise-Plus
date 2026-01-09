import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FranchiseTabs from "./components/FranchiseTabs";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <FranchiseTabs />
      <TestimonialsSection />
    </>
  );
}

export default App;
