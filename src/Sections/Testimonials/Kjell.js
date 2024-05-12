import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

import "./David.css";

const Kjell = () => {
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
    <div className="relative flex-col lg:mt-4 mt-12" suppressHydrationWarning={true}>
        
      <div className="flex xl:flex-row-reverse flex-col w-full relative items-center gap-8" suppressHydrationWarning={true}>
      {isMobile ?
        <div className="flex flex-col gap-0 items-end justify-center w-[100%] order-1"
        >
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/general.png`}
              alt="Kjell picture"
              className="2xl:max-w-[500px] lg:max-w-[600px] max-w-[300px]"
            />
          }
        </div>
        :
        <motion.div className="flex flex-col gap-0 items-start justify-start w-[100%] order-1"
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
          {
            <img
              src={`${process.env.PUBLIC_URL}/assets/general.png`}
              alt="Kjell Picture"
              className="2xl:max-w-[500px] lg:max-w-[600px] max-w-[300px]"
            />
          }
        </motion.div>}
        <div className="container flex flex-wrap xl:content-start content-center min-w-0">
          {isMobile ? <div className="flex flex-col gap-0 order-3"
          >
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[50px] xl:text-[45px] lg:text-[40px] xl:whitespace-normal text-[35px] lg:text-left text-justify vsm:text-center">
            The centralized model where the hacking of a single device that could compromise an entire network is categorically flawed. This needs to change. We don’t need to play a better game against cyber-criminals, we need to play a different game. With Naoris Protocol, there is no single point of failure. Naoris Protocol uses Blockchain technology so that no single device exists in a silo.
            </p>
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </div> :
          <motion.div className="flex flex-col gap-0 xl:order-1 order-3"
          variants={testimonialsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[35px] xl:text-[30px] lg:text-[36px] text-[30px] lg:text-left text-justify vsm:text-center">
            The centralized model where the hacking of a single device that could compromise an entire network is categorically flawed. This needs to change. We don’t need to play a better game against cyber-criminals, we need to play a different game. With Naoris Protocol, there is no single point of failure. Naoris Protocol uses Blockchain technology so that no single device exists in a silo.
            </p>
            <span className="text-white 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </motion.div>}
        </div>
        
      </div>
      {isMobile ?
      <div 
      className=" flex justify-start w-[100%]"
      >
        <div className="testimonials2 relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pr-4 width-[100%] h-full">
            <div className=" relative z-[1]">
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
              Kjell
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
              GRANDHAGEN
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              Kjell GRANDHAGEN
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className="text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
              Former Chairman Of NATO/OTAN
              </p>
              <p className="text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
              Intelligence Committee
              </p>
            </div>
          </div>
        </div>
      </div>
      :
      <motion.div 
      className=" flex justify-start w-[100%]"
      variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className="testimonials2 relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pl-4 width-[100%] h-full">
            <div className=" relative z-[1]">
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
              Kjell
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap vsm:hidden">
              GRANDHAGEN
              </p>
              <p className="font-bold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] text-[22px] text-white whitespace-nowrap hidden vsm:block">
              Kjell GRANDHAGEN
              </p>
            </div>
            <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-[1] ">
              <p className=" text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
              Former Chairman Of NATO/OTAN
              </p>
              <p className=" text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
              Intelligence Committee
              </p>
            </div>
          </div>
        </div>
      </motion.div>}
    </div>
  );
};

export default Kjell;
