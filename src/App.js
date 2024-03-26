import React from "react";

import Navbar from "./Sections/Navbar/Navbar";
import HeroSection from "./Sections/HeroSection/HeroSection";

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
    <div>
      <Navbar sections={sections} scrollToSection={scrollToSection} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">About</div>
      <div id="services">Services</div>
      <div id="contact">Contact</div>
    </div>
  );
}

export default App;
