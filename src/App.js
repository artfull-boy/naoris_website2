import React from "react";
import mesh1 from "./assets/mesh1.png";
import mesh from "./assets/mesh.png";
import Navbar from "./Sections/Navbar/Navbar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Partners from './Sections/Partners/Partners'
import David from "./Sections/Testimonials/David";
import Team from "./Sections/Team/Team";
import Advisors from "./Sections/Team/Advisors";
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "./Sections/FAQ/FAQ";

function App() {
  const lenis = new Lenis()
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
  
  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'team', name: 'Team' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact Us' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <>
      <Navbar sections={sections} scrollToSection={scrollToSection} />
    <div className="flex flex-col relative gap-[54px] overflow-x-hidden">
      <img src={mesh1} className="absolute top-0 z-0 p-0 w-full" style={{"height": "-webkit-fill-available"}}/>
      <div className="relative flex flex-col gap-[54px]" id="home">
        <HeroSection />
        <Partners />
      </div>
        
      <div id="about">
        <David />

      </div>
      <div id="services">Services</div>
      <div className="relative flex flex-col gap-[54px]" id="team">
        <Team />
        <Advisors />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">Contact Us</div>
    </div>
      </>
  );
}

export default App;
