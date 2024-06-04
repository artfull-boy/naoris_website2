import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";

import "./David.css";

const David = () => {
  const {t, i18n} = useTranslation()
  const [isMobile, setIsMobile] = useState( typeof window !== 'undefined'&& window.innerWidth <= 508);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 508);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  const quoteVariants = {
    hidden: {
      opacity: 0,
      x: -500,
    },
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
  const testimonialsVariants = {
    hidden:{
      opacity:0,
      x:500
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        stiffness:100,
        damping:20
    }
    }
  }
  return (
    <div className="relative flex-col lg:mt-4 mt-12">
        
      <div className="flex xl:flex-row flex-col w-full relative items-center gap-8">
        <div className="container flex flex-wrap xl:content-start content-center min-w-0 xl:pr-0">
          {isMobile ? <div className="flex flex-col gap-0"
          >
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[50px] xl:text-[45px] lg:text-[40px] xl:whitespace-nowrap text-[35px] lg:text-left text-justify vsm:text-center">
              {t("As IoT grows, the vulnerabilities grow with it, not linearly, but exponentially. Decentralized Quantum Resistance is a must now, to ensure all secrets and all computing is kept safe into the future")}
            </p>
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </div> :
          <motion.div className="flex flex-col gap-0"
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[40px] xl:text-[30px] lg:text-[36px] xl:whitespace text-[30px] lg:text-left text-justify vsm:text-center">
            {t("As IoT grows, the vulnerabilities grow with it, not linearly, but exponentially. Decentralized Quantum Resistance is a must now, to ensure all secrets and all computing is kept safe into the future")}
            </p>
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </motion.div>}
        </div>
        {isMobile ?
        <div className="flex flex-col gap-0 items-end justify-start w-[100%]"
        >
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/David.png`}
              alt="David picture"
              className="2xl:max-w-[500px] lg:max-w-[600px] max-w-[300px]"
            />
          }
        </div>
        :
        <motion.div className="flex flex-col gap-0 items-end justify-start w-[100%]"
        variants={testimonialsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/David.png`}
              alt="David Picture"
              className="2xl:max-w-[500px] lg:max-w-[600px] max-w-[300px]"
            />
          }
        </motion.div>}
      </div>
      {isMobile ?
      <div 
      className=" flex justify-end w-[100%]"
      >
        <div className="testimonials relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pr-4 width-[100%] h-full">
            <div className=" relative z-[1]">
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                David
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                Holtzman
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              David Holtzman
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className="text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Naoris Consulting Strategy Director
              </p>
              <p className="text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Architect of the DNS server
              </p>
            </div>
          </div>
        </div>
      </div>
      :
      <motion.div 
      className=" flex justify-end w-[100%]"
      variants={testimonialsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className="testimonials relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pr-4 width-[100%] h-full">
            <div className=" relative z-[1]">
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                David
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                Holtzman
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              David Holtzman
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className=" text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Naoris Consulting Strategy Director
              </p>
              <p className=" text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Architect of the DNS server
              </p>
            </div>
          </div>
        </div>
      </motion.div>}
    </div>
  );
};

export default David;
