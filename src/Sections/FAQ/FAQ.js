import React from "react";
import { motion } from "framer-motion";
import {
  cardContainerVariants,
  cardVariants,
  headingVariants,
} from "../../animations";
import plus from "../../assets/plus.png";
import "./faq.css";
import FaqData from "./faq.json";
import faq_elem from "../../assets/faq_element.png";

const FAQ = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  const toggleVisibility = (e) => {
    const element = e.currentTarget;
    if (element) {
      element.classList.toggle("faq_active");
    }
  };
  return (
    <>
      <motion.img
        src={faq_elem}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        width={600}
        transition={spring}
        viewport={{ once: true }}
        className="absolute left-[-10%] bottom-0"
      ></motion.img>
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
        >
          <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
            Frequently Asked Questions
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[45px] w-full items-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
            delayChildren: 0.3,
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          {FaqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={cardContainerVariants}
              className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
              onClick={toggleVisibility}
            >
              <div className="flex w-full justify-between items-center ">
                <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                  {faq.question}
                </p>
                <img
                  className="h-[24px]"
                  src={plus}
                  alt="plus"
                  width={24}
                  height={24}
                />
              </div>
              <div className="max-h-0 overflow-hidden answer duration-[0.6s]">
                <p className="text-white font-normal text-[20px] leading-[1.6] vsm:text-[18px]">
                  {faq.reponse}
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
