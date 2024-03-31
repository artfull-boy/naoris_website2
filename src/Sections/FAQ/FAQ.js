import React from "react";
import { motion } from "framer-motion";
import { headingVariants } from "../../animations";
import eclipse from "../../assets/Ellipse_4.png";
import plus from "../../assets/plus.png";
import "./faq.css";

const FAQ = () => {
  const toggleVisibility = (e) => {
    const element = e.currentTarget;
    console.log(element);
    if (element) {
      element.classList.toggle("faq_active");
    }
  };
  return (
    <>
      <img src={eclipse} className="absolute left-0" width={400}></img>
      <div className="container flex-col items-center justify-center">
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
        <div className="flex flex-col gap-[45px] w-full items-center">
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
          <div
            className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] py-[20px] "
            onClick={toggleVisibility}
          >
            <div className="flex w-full justify-between items-center ">
              <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                What differentiates the Naoris partnership program from others?
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna quam. Phasellus cursus quam lorem, ut lobortis tellus
                blandit nec. Suspendisse potenti. Vestibulum pretium ut justo
                quis molestie. Suspendisse in mauris quam. Sed facilisis eros
                non elit congue scelerisque. Ut orci purus, fermentum in sem at,
                commodo porttitor ipsum.Nam molestie, neque eget semper
                suscipit, risus risus sollicitudin eros, nec placerat sem mauris
                a justo. Curabitur tincidunt vulputate massa, et vulputate neque
                convallis id. Nunc eu lacus aliquam lectus tincidunt luctus in
                sed ante. Nulla malesuada volutpat ligula vitae malesuada. Nunc
                nunc ipsum, pretium vel blandit id, sodales in nisl. Mauris
                tincidunt a nunc imperdiet vehicula. Donec posuere luctus est,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
