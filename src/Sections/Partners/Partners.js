import React from "react";
import {motion} from "framer-motion"
import Marquee from "react-fast-marquee";
import {
  headingVariants
} from "../../animations";
import { useTranslation } from "react-i18next";
import "./partners.css";


function App() {
  const logo1 = `${process.env.PUBLIC_URL}/assets/logos/1.png`;
const logo2 = `${process.env.PUBLIC_URL}/assets/logos/2.png`;
const logo3 = `${process.env.PUBLIC_URL}/assets/logos/3.png`;
const logo4 = `${process.env.PUBLIC_URL}/assets/logos/4.png`;
const logo5 = `${process.env.PUBLIC_URL}/assets/logos/5.png`;
const logo6 = `${process.env.PUBLIC_URL}/assets/logos/6.png`;
const logo8 = `${process.env.PUBLIC_URL}/assets/logos/8.png`;
const logo10 = `${process.env.PUBLIC_URL}/assets/logos/10.png`;
const logo11 = `${process.env.PUBLIC_URL}/assets/logos/11.png`;
const logo12 = `${process.env.PUBLIC_URL}/assets/logos/12.png`;
const logo13 = `${process.env.PUBLIC_URL}/assets/logos/13.png`;
const logo14 = `${process.env.PUBLIC_URL}/assets/logos/14.png`;
const logo15 = `${process.env.PUBLIC_URL}/assets/logos/15.png`;
const logo16 = `${process.env.PUBLIC_URL}/assets/logos/16.png`;
const logo17 = `${process.env.PUBLIC_URL}/assets/logos/17.png`;
const logo18 = `${process.env.PUBLIC_URL}/assets/logos/18.png`;
const logo19 = `${process.env.PUBLIC_URL}/assets/logos/19.png`;
const logo20 = `${process.env.PUBLIC_URL}/assets/logos/20.png`;
const logo21 = `${process.env.PUBLIC_URL}/assets/logos/21.png`;
const logo22 = `${process.env.PUBLIC_URL}/assets/logos/22.png`;
const logo23 = `${process.env.PUBLIC_URL}/assets/logos/23.png`;
const logo24 = `${process.env.PUBLIC_URL}/assets/logos/24.png`;
const logo25 = `${process.env.PUBLIC_URL}/assets/logos/25.png`;
const logo26 = `${process.env.PUBLIC_URL}/assets/logos/26.png`;
const logo27 = `${process.env.PUBLIC_URL}/assets/logos/27.png`;
const logo28 = `${process.env.PUBLIC_URL}/assets/logos/28.png`;
const logo29 = `${process.env.PUBLIC_URL}/assets/logos/29.png`;
const logo30 = `${process.env.PUBLIC_URL}/assets/logos/30.png`;
  const logos = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo8,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30
  ];
const {t, i18n} = useTranslation();
  return (
    <div className="relative">

    <div className="container relative slider-container">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden gap-[50px]">
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
            {t("They Trust Us")}
          </p>
        </motion.div>
        <Marquee
          direction="right"
          speed={100}
          pauseOnHover
          style={{
            width:"100%",
            userSelect: "none",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
          }}
        >
          {logos.map((el) => (
            <div className="image_wrapper">
              <img src={el} alt="Partner Logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
    </div>
  );
}

export default App;