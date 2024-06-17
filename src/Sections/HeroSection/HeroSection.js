"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./herosection.css";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 420
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 420);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden w-[100%] h-[100vh] flex flex-col justify-center relative items-center gap-4">
      <video
        style={{ width: "100%", height: "100vh" }}
        loop={true}
        autoPlay
        muted
        playsInline
        className="absolute left-0 top-[0px] object-cover w-full z-0 opacity-70"
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/videoplayback.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="container flex gap-0 justify-center  items-center relative vsm:pt-12 h-[100%]"
      >
        {isMobile ? (
          <p className="font-sans hero_text lg:text-[60px] md:text-[50px] sm:text-[42px] text-[36px] font-bold text-center">
            {t("UNLEASHING THE FUTURE: LEADING THE WEB 3.0 REVOLUTION")}
          </p>
        ) : (
          <p className="font-sans hero_text lg:text-[60px] md:text-[50px] sm:text-[42px] text-[30px] font-bold text-center">
            {t("UNLEASHING THE FUTURE:")}
            <br />
            {t("LEADING THE WEB 3.0")}
            <br />
            {t("REVOLUTION")}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;
