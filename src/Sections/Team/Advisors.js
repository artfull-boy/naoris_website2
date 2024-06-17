"use client";
import React from "react";
import advisorsJson from "./advisors.json";
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
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

const Advisors = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.innerWidth <= 1080
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container flex-col items-center justify-center gap-[50px] relative">
      <img
        src={`${process.env.PUBLIC_URL}/assets/stars4.svg`}
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
      >
        <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
          {t("Meet Our Advisors")}
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
            {advisorsJson.map((member) => (
              <CarouselItem>
                {" "}
                <div className="w-full justify-center">
                  <div className="card rounded-[8px] relative w-[100%] overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                      alt="Advisor member image"
                      className="relative top-0 right-0 z-0 rounded-[8px]"
                    />
                    <div className="card_background w-full h-[500px] absolute bottom-[-20%] right-0 z-[1]"></div>
                    <div className="card_content absolute bottom-[0%] left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ">
                      <div className="flex flex-col gap-1">
                        <p className="text-[30px] font-bold text-black leading-none ">
                          {member.name}
                        </p>
                        <p className="text-[23px] font-medium text-black ">
                          {member.position}
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href={member.linkedin}
                        className="ml-auto "
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/team/linkedin.png`}
                          alt="LinkedIn logo"
                        />
                      </a>
                    </div>
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
          {advisorsJson.map((member) => (
            <motion.div
              variants={cardContainerVariants}
              className="card focus:outline-none rounded-[8px] relative w-[417.5px] h-[500px] overflow-hidden "
            >
              <img
                src={`${process.env.PUBLIC_URL}/team/${member.img}`}
                alt="Advisor member image"
                className={`relative top-0 right-0 z-0 rounded-[8px] ${
                  member.name === "Raymond Farhat" || "Khalid Bouksib"
                    ? "h-full object-cover"
                    : ""
                }`}
              />
              <div className="card_background rounded-[8px] w-full h-[500px] absolute bottom-[-60%] right-0 z-[1]"></div>
              <div
                className={`card_content2 rounded-[8px] absolute  left-0 w-full h-full p-3 z-[1] flex flex-col gap-3 justify-end ${
                  member.name == "Zakaria Fahim" ||
                  member.name == "Khalid Bouksib"
                    ? "bottom-[-28%]"
                    : "bottom-[-23%]"
                } `}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[28px] font-bold text-black leading-none whitespace-nowrap">
                    {member.name}
                  </p>
                </div>
                <p
                  className="text-[16px] font-medium text-black"
                  dangerouslySetInnerHTML={{ __html: member.desc }}
                ></p>
                <a target="_blank" href={member.linkedin} className="ml-auto ">
                  <img
                    src={`${process.env.PUBLIC_URL}/team/linkedin.png`}
                    alt="LinkedIn Logo"
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

export default Advisors;
