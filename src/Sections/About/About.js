import React from "react";
import { motion } from "framer-motion";

import "./about.css";
import "../Testimonials/David.css";
import { headingVariants } from "../../animations";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t, i18n} = useTranslation()
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.innerWidth <= 508
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 508);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  const quoteVariants = {
    hidden: {
      opacity: 0,
      x: 500,
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
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <div className="relative flex-col" suppressHydrationWarning={true}>
      <div
        className="flex flex-col items-center gap-20 relative z-[1]"
        suppressHydrationWarning={true}
      >
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
            {t("About Us")}
          </p>
        </motion.div>
        <div className="container">
          <motion.p
            initial={{
              opacity: 0,
              x: -300,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="font-semibold text-[30px] medium:text-[27px] vsm:text-[20px] text-justify text-white vsm:text-center"
          >
            {t("Naoris is an American company founded under a mandate from previous leaders of the North Atlantic Treaty Organization (NATO), whose protocol represents a key solution for sustainable, scalable, interoperable, and secure digitalization suited to future challenges. With several European cities as references, such as Dublin, Rijeka, Zurich, and Vienna under the Smart Cities Initiative, and the telecommunications giant T-Mobile, the company merges blockchain and artificial intelligence (AI) to revolutionize the digital world while offering advanced protection, including against post-quantum threats.")}
          </motion.p>
        </div>
        {isMobile ? (
          <div className=" flex justify-end w-[100%]">
            <div className="testimonials2 relative vsm:w-[100%] z-[1]">
              <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 md:gap-10 items-center justify-end pr-4 width-[100%] h-full">
                <div className=" relative z-[1]">
                  <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap">
                    {t("key figures")}
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] ">
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                    {t("A team of more than 100 people around the world")}{" "}
                  </p>
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                    {t("Offices in 3 Continents, 5 Countries")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className=" flex justify-end w-[100%]"
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="testimonials relative vsm:w-[100%]">
              <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 md:gap-10 gap-2 pl-2 items-center justify-end pr-4 width-[100%] h-full">
                <div className=" relative z-[1]">
                  <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap">
                    {t("key figures")}
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] ">
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white  vsm:whitespace-normal vsm:text-center leading-loose">
                    {t("A team of more than 100 people around the world")}
                  </p>
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center leading-loose">
                    {t("Offices in 3 Continents, 5 Countries")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <motion.img
        src={`${process.env.PUBLIC_URL}/assets/PLANET.png`}
        alt="World Shape"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={spring}
        width={400}
        viewport={{ once: true }}
        className="absolute left-[-10%] lg:bottom-[-35%] vsm:w-[400px] vsm:hidden md:bottom-3"
      ></motion.img>
    </div>
  );
};

export default About;
