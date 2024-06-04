"use client";
import React,{useState, useEffect} from "react";
import { motion } from "framer-motion";
import { headingVariants } from "../../animations";
import serviceData from "./services.json";
import "./services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t, i18n} = useTranslation()
  const [isMobile, setIsMobile] = useState( typeof window !== 'undefined'&& window.innerWidth <= 1150);

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
        <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
          {t("Our Services")}
        </p>
      </motion.div>
      {isMobile
        ? serviceData.map((service, index) => {
            return (
              <div className="flex flex-col gap-5 relative h-full">
                <motion.div
                                    initial={{ opacity: 0, x: -300 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    viewport={{ once: true }}
                                    whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col gap-5 w-[50%] medium:w-[100%]"
                >
                  <div className="heading relative w-fit">
                    <p className="font-bold text-[30px] text-white">
                      {t(`${service.title}`)}
                    </p>
                  </div>
                  <p className="font-normal text-white text-[20px]  inline-block w-full text-justify vsm:text-left">
                    {t(`${service.desc}`)}
                  </p>
                </motion.div>

                <motion.img
                  src={`${process.env.PUBLIC_URL}/services/${service.image}`}
                  alt="service image"
                  className="w-[370px] m-auto"
                  initial={{ opacity: 0, x: 300 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                ></motion.img>
              </div>
            );
          })
        : serviceData.map((service, index) => {
            if (service.position === "Left") {
              return (
                <div className="flex items-center medium:flex-col medium:gap-3 relative gap-[1%] h-full">
                  <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-5 w-[50%] medium:w-[100%]"
                  >
                    <div className="heading relative w-fit">
                      <p className="font-bold text-[40px] text-white">
                        {t(`${service.title}`)}
                      </p>
                    </div>
                    <p className="font-normal text-white text-[30px]  inline-block w-full text-justify vsm:text-left">
                      {t(`${service.desc}`)}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={fadeBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="seperator 2xl:h-[500px] lg:h-[600px] medium:hidden"
                  ></motion.div>
                  <motion.img
                    src={`${process.env.PUBLIC_URL}/services/${service.image}`}
                    alt="service image"
                    className="w-[500px] ml-auto medium:m-auto"
                    variants={fadeRight}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                  ></motion.img>
                </div>
              );
            } else {
              return (
                <div className="flex items-center medium:flex-col medium:gap-3 relative gap-[1%] h-full">
                  <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    className="w-[50%]"
                    viewport={{ once: true }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/services/${service.image}`}
                      alt="service image"
                      className="w-[500px] mr-[50px] medium:m-auto"
                    ></img>
                  </motion.div>
                  <motion.div
                    variants={fadeBottom}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    className="seperator 2xl:h-[500px] lg:h-[600px] medium:hidden ml-[40px]"
                  ></motion.div>
                  <motion.div
                    variants={fadeRight}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col gap-5 w-[50%] medium:w-[100%] pl-3"
                  >
                    <div className="heading relative w-fit">
                      <p className="font-bold text-[40px] text-white">
                        {t(`${service.title}`)}
                      </p>
                    </div>
                    <p className="font-normal text-white text-[30px]  inline-block w-full text-justify vsm:text-center vsm:text-center">
                      {t(`${service.desc}`)}
                    </p>
                  </motion.div>
                </div>
              );
            }
          })}
    </div>
  );
};

export default Services;
