import React, {useEffect} from "react";
import {useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  cardContainerVariants,
  cardVariants,
  headingVariants,
} from "../../animations";
import "./faq.css";
import FaqData from "./faq.json";

const FAQ = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const FaqAnimation = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.5 // Adjust the stagger delay as needed
        }
    },
    hidden: {
        opacity: 0,
        scale: 0
    }
    }
    ;

  const toggleVisibility = (e) => {
    const element = e.currentTarget;
    if (element) {
      element.classList.toggle("faq_active");
    }
  };
  return (
    <>
      <div className="container flex-col items-center justify-center gap-[50px]">
        <motion.div
          className="heading relative w-fit"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          ref={ref}
        >
          <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
            Frequently Asked Questions
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[45px] w-full items-center"
          
      animate={controls}
      initial="hidden"
      variants={FaqAnimation}
          transition={{
            duration: 0.5,
            delayChildren: 0.3,
            delay: 0,
          }}
          viewport={{ once: true}}
        >
          {FaqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={cardContainerVariants}
              className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
              onClick={toggleVisibility}
            >
              <div className="flex w-full justify-between items-center">
                <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                  {faq.question}
                </p>
                <img
                  className="h-[24px]"
                  src={`${process.env.PUBLIC_URL}/assets/plus.png`}
                  alt="plus"
                  width={24}
                  height={24}
                  
                />
              </div>
              <div className="max-h-0 overflow-hidden answer duration-[0.4s]" suppressHydrationWarning={true}>
                <p className="text-white font-normal text-[20px] leading-[1.6] vsm:text-[18px]" dangerouslySetInnerHTML={{__html: faq.reponse}}>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FAQ;
