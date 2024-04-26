import React,{useEffect} from 'react'
import HeroSection from "../../Sections/HeroSection/HeroSection";
import Partners from '../../Sections/Partners/Partners';
import David from "../../Sections/Testimonials/David";
import Team from "../../Sections/Team/Team";
import Advisors from "../../Sections/Team/Advisors";
import FAQ from "../../Sections/FAQ/FAQ";
import About from "../../Sections/About/About";
import Services from "../../Sections/Services/Services";
import Contact from "../../Sections/Contact/Contact";
import Kjell from "../../Sections/Testimonials/Kjell";

const Home = () => {
    useEffect(() => {
        // Scroll to the section specified in the URL fragment
        const sectionId = window.location.hash.substring(1); // Get the section ID from the URL fragment
        if (sectionId) {
          const section = document.getElementById(sectionId);
          if (section) {
            const yOffset = -50; // Adjust this value as needed, negative values scroll a bit above the section, positive values scroll below
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, []);
  return (
    <div className="flex flex-col relative gap-[54px] overflow-x-hidden pb-10">
        <img src={`${process.env.PUBLIC_URL}/assets/mesh1.png`} className="absolute top-0 z-0 p-0 w-full" style={{"height": "-webkit-fill-available"}}/>
        <div className="relative flex flex-col gap-[54px]" id="home">
          <HeroSection />
          <Partners />
        </div>
          
        <div id="about" className="relative flex flex-col gap-[100px]">
          <David />
          <Kjell />
          <About />
        </div>
          
        <div id="services" className="relative flex flex-col gap-[54px]">
          <Services />
        </div>
        <div className="relative flex flex-col gap-[54px]" id="team">
          <Team />
          <Advisors />
        </div>
        <div id="faq" className="relative flex flex-col gap-[54px] z-[2]">
          <FAQ />
        </div>
        <div id="contact" className="relative flex flex-col gap-[54px] z-[2]">
          <Contact />
        </div>

      </div>
  )
}

export default Home