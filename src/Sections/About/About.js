import React from "react";
import { motion } from "framer-motion";

import "./about.css";
import "../Testimonials/David.css";
import { headingVariants } from "../../animations";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
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
    <div className="relative flex-col">
      <img
        src={`${process.env.PUBLIC_URL}/assets/stars2.svg`}
        className="absolute top-0 left-0"
      ></img>

      <div className="flex flex-col items-center gap-20 relative z-[1]">
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
            className="font-medium text-[20x] vsm:text-[18px] vsm:leading-[40px] text-justify text-white vsm:text-center leading-[60px]"
          >
            {t(
              "Naoris is an American company founded under a mandate from previous leaders of the North Atlantic Treaty Organization (NATO), whose protocol represents a key solution for sustainable, scalable, interoperable, and secure digitalization suited to future challenges. With several European cities as references, such as Dublin, Rijeka, Zurich, and Vienna under the Smart Cities Initiative, and the telecommunications giant T-Mobile, the company merges blockchain and artificial intelligence (AI) to revolutionize the digital world while offering advanced protection, including against post-quantum threats."
            )}
          </motion.p>
        </div>
        {isMobile ? (
          <div className=" flex justify-end w-[100%]">
            <div className="testimonials2 relative vsm:w-[100%] z-[1]">
              <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 md:gap-10 items-center justify-end pr-4 width-[100%] h-full py-3">
                <div className=" relative z-[1]">
                  <p
                    className={`font-bold lg:text-[25px] text-[22px] text-white whitespace-nowrap`}
                  >
                    {t("key figures")}
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] flex flex-col gap-2 ">
                  <p
                    className={`text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center`}
                  >
                    {t("A team of more than 100 people around the world")}{" "}
                  </p>
                  <p
                    className={`text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center`}
                  >
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
            <div className="testimonials relative vsm:w-[100%] py-3">
              <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 md:gap-10 gap-2 pl-2 items-center justify-end pr-4 width-[100%] h-full">
                <div className=" relative z-[1]">
                  <p
                    className={`font-bold lg:text-[25px] text-[22px] text-white whitespace-nowrap`}
                  >
                    {t("key figures")}
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] flex flex-col gap-2">
                  <p
                    className={`text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center`}
                  >
                    {t("A team of more than 100 people around the world")}
                  </p>
                  <p
                    className={`text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center`}
                  >
                    {t("Offices in 3 Continents, 5 Countries")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
