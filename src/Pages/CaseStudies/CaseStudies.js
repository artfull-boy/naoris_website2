import React, { useEffect, useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import CaseStudiesJson from "./cases.json";

const CaseStudies = () => {
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
    <div id="case_studies" className="media overflow-hidden flex flex-col justify-start h-[2000px] w-full relative items-center gap-8 container z-[2] mb-60">
      <img
        src={`${process.env.PUBLIC_URL}/assets/BACKGROUND_media.png`}
        className="absolute top-0 left-0 z-[2] w-[100%]"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/assets/BACKGROUND_media.png`}
        className="absolute bottom-0 left-0 z-[2] w-[100%]"
      ></img>
      <div className="flex w-full justify-between items-center z-[2]">
        <div className="border-lef border-l-[5px] border-[#00FFA3]">
          <p className="text-white uppercase vsm:text-[25px] font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            Case Studies
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
    </div>
  );
};

export default CaseStudies;
