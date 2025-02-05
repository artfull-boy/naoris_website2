import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Sections/Footer/Footer";
import "./App.css";
import CaseStudies from "./Pages/CaseStudies/CaseStudies";
import Media from "./Pages/Media/Media";
import Home from "./Pages/Home/Home";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import UseCase from "./Pages/UseCase/UseCase";
import Multimedia from "./Pages/Multimedia/Multimedia";
import { Player } from "@lottiefiles/react-lottie-player";
function App() {
  // Reset scrolling when route changes
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);

    return null;
  };

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "services", name: "Services" },
    { id: "team", name: "Team" },
    { id: "faq", name: "FAQ" },
    { id: "media", name: "They spoke about us" },
    { id: "case_studies", name: "Use Cases" },
    { id: "multimedia", name: "Multimedia Library" },
    { id: "contact", name: "Contact Us" },
  ];

  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToSection = (sectionId) => {
    if (
      window.location.href === "/case_studies" ||
      window.location.href === "/media"
    ) {
      if (sectionId !== "case_studies" && sectionId !== "media") {
        window.location.href = `/#${sectionId}`;
      }
    } else if (sectionId !== "case_studies" && sectionId !== "media") {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -50; // Adjust this value as needed, negative values scroll a bit above the section, positive values scroll below
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div
          className="fixed bottom-[50px] right-[50px] size-[70px] rounded-[50%] bg-white z-[10] cursor-pointer overflow-hidden vsm:bottom-[40px] vsm:right-[20px]"
          onClick={goUp}
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/0dc5f333-6b40-4dc3-866e-5b463d7a3d84/sXXy2LCV0y.json"
            className="size-[60px]"
          ></Player>
        </div>
        <ScrollToTop />

        <Navbar sections={sections} scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="case_studies" element={<CaseStudies />}></Route>
          <Route path="media" element={<Media />}></Route>
          <Route path="multimedia" element={<Multimedia />}></Route>
          <Route path="case_studies/:id" element={<UseCase />}></Route>
        </Routes>

        <Footer scrollToSection={scrollToSection} />
      </Router>
    </I18nextProvider>
  );
}

export default App;
