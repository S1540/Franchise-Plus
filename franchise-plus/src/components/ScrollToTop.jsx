import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    behavior: "smooth";
  }, [pathname]);
  return null;
};

export default ScrollToTop;
