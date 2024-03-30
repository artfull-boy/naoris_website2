import React from "react";
import david from "../../assets/David.png";
import {motion} from "framer-motion";

import "./David.css";

const David = () => {
  const isMobile = window.innerWidth < 508;
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
        
      <div className="flex lg:flex-row flex-col w-full relative items-center gap-8">
        <div className="container flex flex-wrap lg:content-start content-center min-w-0 lg:pr-0">
          {isMobile ? <div className="flex flex-col gap-0"
          >
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[50px] xl:text-[45px] lg:text-[40px] xl:whitespace-nowrap text-[35px] lg:text-left text-center">
              As IoT grows, the vulnerabilities grow <br />
              with it, not linearly, but exponentially.
            </p>
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </div> :
          <motion.div className="flex flex-col gap-0"
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible">
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[50px] xl:text-[45px] lg:text-[40px] xl:whitespace-nowrap text-[35px] lg:text-left text-center">
              As IoT grows, the vulnerabilities grow <br />
              with it, not linearly, but exponentially.
            </p>
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </motion.div>}
        </div>
        {isMobile ?
        <div className="flex flex-col gap-0 items-end justify-start lg:w-auto w-[100%]"
        >
          {
            <img
              src={david}
              alt="David"
              className="2xl:max-w-[750px] lg:max-w-[600px] max-w-[450px]"
            />
          }
        </div>
        :
        <motion.div className="flex flex-col gap-0 items-end justify-start lg:w-auto w-[100%]"
        variants={testimonialsVariants}
        initial="hidden"
        whileInView="visible">
          {
            <img
              src={david}
              alt="David"
              className="2xl:max-w-[750px] lg:max-w-[600px] max-w-[450px]"
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
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                David
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                Holtzman
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              David Holtzman
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Naoris Consulting Strategy Director
              </p>
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
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
        whileInView="visible">
        <div className="testimonials relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pr-4 width-[100%] h-full">
            <div className=" relative z-[1]">
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                David
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                Holtzman
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              David Holtzman
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Naoris Consulting Strategy Director
              </p>
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
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
