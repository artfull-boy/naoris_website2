"use client";
import React, { useEffect, useState } from "react";
import teamJson from "./team.json";
import { motion } from "framer-motion";
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
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from "react-i18next";


const Team = () => {
  const [isMobile, setIsMobile] = useState( typeof window !== 'undefined'&& window.innerWidth <= 1080);
  const {t, i18n} = useTranslation()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container flex-col items-center justify-center gap-[50px]">
      <motion.div
        className="heading relative w-fit"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
          {t("Meet Our Team")}
        </p>
      </motion.div>
      {isMobile ? (
        <Carousel className="w-[100%] rounded-box"
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
              <CarouselItem key={index}
              
              >
 
                  <div className="card rounded-[8px] relative w-[100%] overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                      alt="Team member image"
                      className="relative top-0 right-0 z-0 rounded-[8px]"
                    />
                    <div className="card_background w-full h-[500px] absolute bottom-[0%] right-0 z-[1]"></div>
                    <div className="card_content absolute bottom-[0%] left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ">
                      <div className="flex flex-col gap-1">
                        <p className="text-[30px] font-bold text-white leading-none whitespace-nowrap vsm:text-[23px]">
                          {member.name}
                        </p>
                        <p className="text-[23px] vsm:text-[15px] font-medium text-white">
                          {member.desc}
                        </p>
                      </div>
                      <a target="_blank" href={member.linkedin} className="ml-auto ">
                        <img src={`${process.env.PUBLIC_URL}/team/linkedin.png`} alt="Linkedin logo" />
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
          whileInView="visible"
          transition={{
            duration: 0.5,
            delayChildren: 0.3,
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          {teamJson.map((member) => (
            <motion.div
              className="card focus:outline-none rounded-[8px] relative w-[300px] overflow-hidden"
              variants={cardContainerVariants}
            >
              <img
                src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                alt="Team member image"
                className="relative top-0 right-0 z-0 rounded-[8px]"
              />
              <div className="card_background rounded-[8px] w-full h-[500px] absolute bottom-[-60%] right-0 z-[1]"></div>
              <div className={`card_content rounded-[8px] absolute ${member.name === "Reda Temsamani" ? "bottom-[-70%]": "bottom-[-78%]"} left-0 w-full h-full p-[6px] z-[1] flex flex-col gap-3`}>
                <div className="flex flex-col gap-1">
                  {member.name === "Reda Temsamani" ? (
                    <p className="text-[30px] font-bold text-white leading-none whitespace-normal">
                      {member.name}
                    </p>
                  ) : (
                    <p className="text-[30px] font-bold text-white leading-none whitespace-nowrap">
                      {member.name}
                    </p>
                  )}
                  <p className="text-[23px] font-medium text-white">
                    {member.position}
                  </p>
                </div>
                <p className="text-[15px] font-medium text-white ">
                  {member.desc}
                </p>
                <a target="_blank" href={member.linkedin} className="ml-auto ">
                  <img src={`${process.env.PUBLIC_URL}/team/linkedin.png`} alt="linkedin logo" />
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
