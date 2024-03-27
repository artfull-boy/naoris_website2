import React from "react";
import eclipse from "../../assets/eclipse.png";
import mesh from "../../assets/nesh.png";
import earth from "../../assets/earth.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden w-[100%] h-screen">
      <img
        src={eclipse}
        alt="eclipse"
        className="absolute max-w[100%] object-contain right-0"
      />
      <img
        src={mesh}
        alt="eclipse"
        className="absolute max-w[100%] object-contain right-0"
      />
      {/*<img src={earth} alt='eclipse' className='absolute max-w[100%] object-contain right-0'/>*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="container flex gap-0  h-[50%] justify-end  items-center relative"
      >
        <p className="font-sans text-white lg:text-[60px] md:text-[50px] sm:text-[42px] text-[30px] font-bold text-center">
          UNLEASHING THE FUTURE:{" "}
        </p>
        <p className="font-sans text-white lg:text-[60px] md:text-[50px] sm:text-[42px] text-[30px] font-bold text-center">
          LEADING THE WEB 3.0
        </p>
        <p className="font-sans text-white lg:text-[60px] md:text-[50px] sm:text-[42px] text-[30px] font-bold text-center">
          REVOLUTION
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
