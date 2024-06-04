import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './caseStudies.css'
import { Player } from "@lottiefiles/react-lottie-player";
import CaseStudiesJson from "./cases.json";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const {t, i18n} = useTranslation()
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 700
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div id="case_studies" className="media overflow-hidden flex flex-col justify-start w-full relative items-center gap-8 pt-24 container z-[2] pb-96 vsm:pb-60 h-fit">
       <img
        src={`${process.env.PUBLIC_URL}/assets/bg_use.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:hidden block"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/assets/bg_useM.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:block hidden"
      ></img>

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
      <div className="flex w-full flex-wrap z-[2] items-center gap-[100px] justify-center ">
        {CaseStudiesJson.map(usecase => (
          <Link className="group cards:w-[90%]" to={`${usecase.id}`}>
          <div className="flex relative flex-col w-[681px] h-[433px] gap-[13px] cards:w-[100%] ">
            <img src={`${process.env.PUBLIC_URL}/assets/media/logo.png`} className="w-[70px] absolute left-[27px] top-[27px]"></img>
            <img src={`${process.env.PUBLIC_URL}/assets/${usecase.cover}.png`} className="w-full h-[317px] object-cover object-top group-hover:object transition-all duration-1000 ease-in-out rounded-[20px] cards:object-left-top"></img>
            <p className="text-[32px] font-[700] text-white cards:text-[24px]">{t(`${usecase.title}`)}</p>
            <p className="usecase_link text-[24px] cards:text-[18px] tracking-[2.4px] text-white font-normal group-hover:font-bold transition-all duration-1w00  ease-in-out" >{t('VIEW DETAILS')} <span className="text-[32px] text-[#00ffa3]">&#8594;</span></p>
          </div></Link>
        ))}
      </div>
      <div className="absolute bottom-[-90px] left-[-20px] w-full last_hope"></div>
    </div>
  );
};

export default CaseStudies;
