import React from "react";

import Navbar from "./Sections/Navbar/Navbar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Partners from './Sections/Partners/Partners'

function App() {
  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Navbar sections={sections} scrollToSection={scrollToSection} />
      <div id="home">
        <HeroSection />
        <Partners />
      </div>
      <div id="about">About</div>
      <div id="services">Services</div>
      <div id="contact">Contact</div>
    </div>
  );
}

export default App;
