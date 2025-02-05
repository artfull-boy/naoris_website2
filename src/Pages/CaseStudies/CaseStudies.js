import React from "react";
import { Link } from "react-router-dom";
import "./caseStudies.css";
import { Player } from "@lottiefiles/react-lottie-player";
import CaseStudiesJson from "./cases.json";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t, i18n } = useTranslation();
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      id="case_studies"
      className="media overflow-hidden flex flex-col justify-start w-full relative items-center gap-8 pt-24 container z-[2] pb-[190px] h-fit bg-[#0A0D17]"
    >
      <div className="absolute top-0 flex flex-col gap-6 items-center justify-center left-0">
        <img src={`${process.env.PUBLIC_URL}/assets/Stars.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars2.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars4.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars2.svg`}></img>
      </div>
      <div className="flex w-full justify-between items-center z-[2]">
        <div className="border-lef border-l-[5px] border-[#00FFA3]">
          <p className="text-white uppercase vsm:text-[25px] font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            {t("Use Cases")}
          </p>
        </div>
        <div className="animation">
          <Player
            autoplay
            loop
            src="https://lottie.host/ca2dc6b8-3201-409a-acfc-523011f9dd42/bd12pEceex.json"
            className="size-[300px] vsm:size-[200px]"
          ></Player>
        </div>
      </div>
      <div className="flex w-full flex-wrap z-[2] items-start gap-x-[100px] gap-y-[100px] justify-center ">
        {CaseStudiesJson.map((usecase) => (
          <Link
            className="group usecase_size:w-[90%] w-[40%]"
            to={`${usecase.id}`}
            onClick={goUp}
          >
            <div className="flex relative flex-col w-[100%] gap-[13px] ">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo_main.png`}
                className="w-[70px] absolute left-[27px] top-[27px]"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${usecase.cover}.png`}
                className="w-full h-[317px] object-cover object-top group-hover:object transition-all duration-1000 ease-in-out rounded-[20px] cards:object-left-top"
              ></img>
              <p className="text-[32px] font-[700] text-white cards:text-[24px]">
                {t(`${usecase.title}`)}
              </p>
              <p className="usecase_link text-[24px] cards:text-[18px] tracking-[2.4px] text-white font-normal group-hover:font-bold transition-all duration-1w00  ease-in-out">
                {t("VIEW DETAILS")}{" "}
                <span className="text-[32px] text-[#00ffa3]">&#8594;</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
