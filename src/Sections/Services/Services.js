"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { headingVariants } from "../../animations";
import serviceData from "./services.json";
import "./services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1150
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const fadeRight = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const fadeBottom = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  return (
    <div className="container relative flex flex-col gap-[50px] items-center justify-center">
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
        <p className="text-[50px] font-bold text-white text-center vsm:text-[35px] uppercase">
          {t("Our Services")}
        </p>
      </motion.div>
      <div className="flex flex-wrap w-full h-fit justify-between gap-y-[150px]">
        {serviceData.map((service, index) => {
          return (
            <div className="flex flex-col gap-[25px] w-[400px] justify-center items-center relative  vsm:z-[2] vsm:w-[100%]">
              <img
                src={`${process.env.PUBLIC_URL}/services/${service.image}`}
                width={140}
              ></img>
              <div className="heading relative w-fit">
                <p className="font-bold text-[30px] text-white text-center">
                  {t(`${service.title}`)}
                </p>
              </div>
              <p className="font-normal text-white text-[16px] text-justify vsm:text-center">
                {t(`${service.desc}`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
