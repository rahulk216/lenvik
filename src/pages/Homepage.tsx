import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import Employee from "../components/Employee";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Gallery />
      <Projects />
      <Employee />
      <Footer />
    </div>
  );
};

export default Homepage;
