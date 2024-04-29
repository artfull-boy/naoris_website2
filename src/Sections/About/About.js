
import React from "react";
import { motion } from "framer-motion";

import "./about.css";
import "../Testimonials/David.css";

const About = () => {
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined'&& window.innerWidth <= 508);

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
    stiffness: 100
  }
  return (
    <div className="relative flex-col" suppressHydrationWarning={true}>
      <div className="flex flex-col gap-20 relative z-[1]" suppressHydrationWarning={true}>
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
            className="font-semibold text-[30px] medium:text-[27px] vsm:text-[20px] text-white"
          >
            Naoris is an American company founded under a mandate from the North Atlantic Treaty Organization (NATO)

Hello All, this phrase on the website we need to change it to:

Naoris is an American company founded under a mandate from previous leaders of the North Atlantic Treaty Organization (NATO), whose protocol represents a key
            solution for sustainable, scalable, interoperable, and secure
            digitalization suited to future challenges. With several European
            cities as references, such as Dublin, Rijeka, Zurich, and Vienna
            under the Smart Cities Initiative, and the telecommunications giant
            T-Mobile, the company merges blockchain and artificial intelligence
            (AI) to revolutionize the digital world while offering advanced
            protection, including against post-quantum threats.
          </motion.p>
        </div>
        {isMobile ? (
          <div className=" flex justify-end w-[100%]">
            <div className="testimonials2 relative vsm:w-[100%] z-[1]">
              <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 md:gap-10 items-center justify-end pr-4 width-[100%] h-full">
                <div className=" relative z-[1]">
                  <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap">
                    key figures
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] ">
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                    A team of more than 100 people around the world{" "}
                  </p>
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                    Offices in 3 Continents, 5 Countries{" "}
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
                    key figures
                  </p>
                </div>
                <div className="relative vsm:hidden z-[1] w-[3px] h-[70%] origin-top-left bg-white"></div>
                <div className=" relative z-[1] ">
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white  vsm:whitespace-normal vsm:text-center leading-loose">
                    A team of more than 100 people around the world
                  </p>
                  <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[18px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center leading-loose">
                    Offices in 3 Continents, 5 Countries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <motion.img 
      src={`${process.env.PUBLIC_URL}/assets/about_element.png`}
      alt="World Shape"
      initial={{
        opacity:0,
        scale:0,
        rotate:180
      }}
      whileInView={{
        opacity:1,
        scale:1,
        rotate:180
      }}
      transition={spring}
      width={600}
      viewport={{ once: true }}
      className="absolute rotate-180 left-[-10%] lg:bottom-[-40%] vsm:w-[400px] vsm:hidden md:bottom-3"></motion.img>
    </div>
  );
};

export default About;
