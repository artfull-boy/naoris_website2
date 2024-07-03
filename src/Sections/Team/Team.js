"use client";
import React, { useEffect, useState } from "react";
import teamJson from "./team.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  cardContainerVariants,
  cardVariants,
  headingVariants,
} from "../../animations";
import "./team.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

const Team = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1080
  );

  const [clicked, setClicked] = useState(Array(teamJson.length).fill(true));
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index) => {
    setClicked((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="container flex-col items-center justify-center gap-[50px]">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Stars3.svg`}
        className="absolute right-0 top-[10%]"
      ></img>

      <motion.div
        className="heading relative w-fit"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        ref={ref}
      >
        <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
          {t("Meet Our Team")}
        </p>
      </motion.div>
      {isMobile ? (
        <Carousel
          className="w-[100%] rounded-box"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {teamJson.map((member, index) => (
              <CarouselItem key={index} onClick={() => handleCardClick(index)}>
                <div className="card_mobile rounded-[8px] relative w-[100%] overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                    alt="Team member image"
                    className={`relative top-0 right-0 z-0 rounded-[8px] transition-transform duration-300 ${
                      clicked[index] ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`card_background w-full h-[500px] absolute bottom-[0%] block right-0 z-[1] ${
                      clicked[index] ? "opacity-0" : "opacity-100"
                    }`}
                  ></div>
                  <div
                    className={` absolute bottom-[0%] left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ${
                      clicked[index] ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-[30px] font-bold text-white leading-none whitespace-nowrap vsm:text-[23px]">
                        {member.name}
                      </p>
                      <p className="text-[23px] vsm:text-[15px] font-medium text-white">
                        {member.desc}
                      </p>
                    </div>
                    <a
                      target="_blank"
                      href={member.linkedin}
                      className="ml-auto "
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/team/linkedin.png`}
                        alt="Linkedin logo"
                      />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="small:hidden" />
          <CarouselNext className="small:hidden" />
        </Carousel>
      ) : (
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={cardVariants}
          initial="hidden"
          transition={{
            duration: 0.5,
            delayChildren: 0.3,
            delay: 1,
          }}
          animate={controls}
          viewport={{ once: true }}
        >
          {teamJson.map((member, index) => (
            <motion.div
              className="card focus:outline-none w-[350px] h-[400px] rounded-[8px] relative  overflow-hidden"
              variants={cardContainerVariants}
              key={index}
            >
              <img
                src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                alt="Team member image"
                className="relative top-0 right-0 z-0 rounded-[8px]"
              />
              <div className="card_background rounded-[8px] w-full absolute right-0 z-[1]"></div>
              <div
                className={`card_content rounded-[8px] absolute ${
                  member.name === "Réda Belkassem Tamssamani"
                    ? "bottom-[-82%]"
                    : "bottom-[-82%]"
                } left-0 w-full h-full p-[6px] z-[1] flex flex-col gap-3`}
              >
                <div className="flex flex-col gap-1">
                  {member.name === "Réda Belkassem Tamssamani" ? (
                    <p className="text-[22px] font-bold text-white leading-none whitespace-normal">
                      {member.name}
                    </p>
                  ) : (
                    <p className="text-[22px] font-bold text-white leading-none whitespace-nowrap">
                      {member.name}
                    </p>
                  )}
                  <p className={`font-medium text-white text-[20px]`}>
                    {member.position}
                  </p>
                </div>
                <p className="text-[15px] font-medium text-white">
                  {member.desc}
                </p>
                <a target="_blank" href={member.linkedin} className="ml-auto">
                  <img
                    src={`${process.env.PUBLIC_URL}/team/linkedin.png`}
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Team;
