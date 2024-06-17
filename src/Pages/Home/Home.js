import React, { useEffect } from "react";
import HeroSection from "../../Sections/HeroSection/HeroSection";
import Partners from "../../Sections/Partners/Partners";
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
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div className="flex flex-col relative overflow-hidden pb-10 bg-[#0A0D17]">
      <div className="relative flex flex-col gap-[54px] bg-[#0A0D17]" id="home">
        <HeroSection />
      </div>

      <div
        id="about"
        className="relative flex flex-col gap-[100px] p-0 m-0 bg-[#0A0D17]"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/stars.svg`}
          className="absolute top-0 left-0 w-full"
        ></img>
        <David />
        <Kjell />
        <About />
      </div>

      <div
        id="services"
        className="relative flex flex-col gap-[54px] bg-[#0A0D17] pt-[500px] vsm:pt-[100px]"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/planet.svg`}
          alt="World Shape"
          width={600}
          className="absolute left-0 top-[-8%] vsm:hidden"
        ></img>
        <img
          src={`${process.env.PUBLIC_URL}/assets/shape.svg`}
          alt="World Shape"
          width={70}
          className="absolute right-[20%] top-[5%]"
        ></img>
        <Services />
        <img
          src={`${process.env.PUBLIC_URL}/assets/stars.svg`}
          className="absolute top-0 left-0 w-full"
        ></img>
        <img
          src={`${process.env.PUBLIC_URL}/assets/stars.svg`}
          className="absolute bottom-[-10%] left-0 w-full"
        ></img>
      </div>
      <div
        className="relative flex flex-col gap-[54px] bg-[#0A0D17] pt-[300px]"
        id="team"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/team_back.svg`}
          alt="World Shape"
          width={800}
          className="absolute right-[0%] top-[-20%] vsm:top-[-10%]"
        ></img>
        <img
          src={`${process.env.PUBLIC_URL}/assets/big_stars.svg`}
          alt="World Shape"
          width={150}
          className="absolute right-[40%] top-[5%]"
        ></img>
        <Team />
        <Advisors />
        <Partners />
      </div>
      <div
        id="faq"
        className="relative flex flex-col gap-[160px] z-[2] bg-[#0A0D17] pt-[160px]"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/Stars6.svg`}
          alt="World Shape"
          className="absolute left-0 top-[2%]"
        ></img>
        <FAQ />
      </div>
      <div
        id="contact"
        className="relative flex flex-col gap-[54px] z-[2] bg-[#0A0D17] pt-[160px]"
      >
        <div className="absolute size-[134px] bg-[#763AF5] rounded-[50%] right-[5%] top-[20%] opacity-[80%] blur-[110px]"></div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/eclipse_contact.svg`}
          alt="World Shape"
          className="absolute left-0 top-[2%] opacity-80"
          width={220}
        ></img>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
