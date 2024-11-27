import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { cardContainerVariants, headingVariants } from "../../animations";
import "./faq.css";
import FaqData from "./faq.json";

const FAQ = () => {
  const { t } = useTranslation();
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
        staggerChildren: 0.5, // Adjust the stagger delay as needed
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };
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
            {t("Frequently Asked Questions")}
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col w-full items-center"
          animate={controls}
          initial="hidden"
          variants={FaqAnimation}
          transition={{
            duration: 0.5,
            delayChildren: 0.3,
            delay: 0,
          }}
          viewport={{ once: true }}
        >
          {FaqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={cardContainerVariants}
              className="flex question flex-col overflow-hidden gap-[20px] md:w-[80%] w-[100%] relative items-center cursor-pointer border-b-[1.7px] border-[white] pt-[55px] pb-[35px] "
              onClick={toggleVisibility}
            >
              {faq.question ==
                "What kind of organizations can benefit from Naoris Consulting?" ||
              faq.question ==
                "Quels types d'organisations peuvent bénéficier des services de Naoris Consulting ?" ? (
                <>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                      {t(`${faq.question}`)}
                    </p>
                    <img
                      className="h-[24px]"
                      src={`${process.env.PUBLIC_URL}/assets/plus.png`}
                      alt="plus"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className="max-h-0 overflow-hidden answer duration-[0.4s]"
                    suppressHydrationWarning={true}
                  >
                    <ul className="custom_bullet text-white font-normal text-[20px] leading-[1.6] vsm:text-[18px] list-disc">
                      {t(
                        "Naoris Consulting can assist a wide range of organizations including:"
                      )}
                      <li className="mt-3">
                        <span className="font-semibold text-[#00FFA3]">
                          {"Governments:"}
                        </span>{" "}
                        {t(
                          "Enhancing national security, streamlining public services, and supporting smart governance models."
                        )}
                      </li>
                      <li>
                        <span className="font-semibold text-[#00FFA3]">
                          {t("Educational Institutions:")}
                        </span>{" "}
                        {t(
                          "Securing personal and research data, improving operational efficiencies."
                        )}
                      </li>
                      <li>
                        <span className="font-semibold text-[#00FFA3]">
                          {t("Healthcare Providers:")}
                        </span>{" "}
                        {t(
                          "Protecting sensitive health data and optimizing service delivery."
                        )}
                      </li>
                      <li>
                        <span className="font-semibold text-[#00FFA3]">
                          {t("Non-Profit Organizations:")}
                        </span>{" "}
                        {t(
                          "Ensuring transparency and trust in transactions and donations."
                        )}
                      </li>
                      <li className="pb-[20px]">
                        <span className="font-semibold text-[#00FFA3]">
                          {t("Private Corporations:")}
                        </span>{" "}
                        {t(
                          "Protecting intellectual property, ensuring operational resilience, and leveraging blockchain for supply chain management"
                        )}
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full justify-between items-center">
                    <p className="text-white font-bold text-[30px] vsm:text-[23px]">
                      {t(`${faq.question}`)}
                    </p>
                    <img
                      className="h-[24px]"
                      src={`${process.env.PUBLIC_URL}/assets/plus.png`}
                      alt="plus"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className="max-h-0 overflow-hidden answer duration-[0.4s]"
                    suppressHydrationWarning={true}
                  >
                    <p className="text-white font-normal text-[20px] leading-[1.6] vsm:text-[18px] pb-[20px]">
                      {t(`${faq.reponse}`)}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FAQ;
