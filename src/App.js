import React from "react";
import mesh1 from "./assets/mesh1.png";
import mesh from "./assets/mesh.png";
import Navbar from "./Sections/Navbar/Navbar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Partners from './Sections/Partners/Partners'
import David from "./Sections/Testimonials/David";

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
      <>
      <Navbar sections={sections} scrollToSection={scrollToSection} />
    <div className="flex flex-col gap-[54px]">
      <div className="relative flex flex-col gap-[54px]" id="home">
        <img src={mesh} className="absolute top-0 z-0 "/>
        <HeroSection />
      </div>
        
        <Partners />
        <David />
      <div id="about">About</div>
      <div id="services">Services</div>
      <div id="contact">Contact</div>
    </div>
      </>
  );
}

export default App;
