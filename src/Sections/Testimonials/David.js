import React from "react";
import david from "../../assets/David.png";

import "./David.css";

const David = () => {
  return (
    <div className="relative flex-col lg:mt-4 mt-12">
        
      <div className="flex lg:flex-row flex-col w-full relative items-center gap-8">
        <div className="container flex flex-wrap lg:content-start content-center min-w-0 lg:pr-0">
          <div className="flex flex-col gap-0">
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] text-[120px] font-normal leading-[0]">
              “
            </span>
            <p className="quote text-white font-sans 2xl:text-[50px] xl:text-[45px] lg:text-[40px] xl:whitespace-nowrap text-[35px] lg:text-left text-center">
              As IoT grows, the vulnerabilities grow <br />
              with it, not linearly, but exponentially.
            </p>
            <span className="text-[#00FFA3] 2xl:text-[200px] xl:text-[170px] lg:text-[150px] font-normal transform rotate-180 leading-[0] text-[120px]">
              “
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0 items-end justify-start lg:w-auto w-[100%]">
          {
            <img
              src={david}
              alt="David"
              className="2xl:max-w-[750px] lg:max-w-[600px] max-w-[450px]"
            />
          }
        </div>
      </div>
      <div className=" flex justify-end w-[100%]">
        <div className="testimonials relative vsm:w-[100%]">
          <div className="flex lg:flex-row vsm:flex-col vsm:gap-0 gap-10 items-center justify-end pr-4 width-[100%] h-full">
            <div className=" relative z-10">
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                David
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[22px] text-white whitespace-nowrap vsm:hidden">
                Holtzman
              </p>
              <p className="font-bold 2xl:text-[40px] xl:text-[35px] lg:text-[28px] text-[24px] text-white whitespace-nowrap hidden vsm:block">
              David Holtzman
              </p>
            </div>
            <div className="relative vsm:hidden z-10 w-[3px] h-[70%] origin-top-left bg-white"></div>
            <div className=" relative z-10 ">
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Naoris Consulting Strategy Director
              </p>
              <p className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] text-[20px] text-white whitespace-nowrap vsm:whitespace-normal vsm:text-center">
                Architect of the DNS server
              </p>
            </div>
          </div>
        </div>
        {/*<svg className='absolute right-0 bottom-[10px] z-0 2xl:w-[1050px] 2xl:h-[145px] xl:w-[900px] xl:h-[145px] lg:w-[750px] lg:h-[120px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1059 141" fill="none">
  <path d="M0.877136 0.697998H1059V140.668H220.237L0.877136 0.697998Z" fill="url(#paint0_linear_142_354)"/>
  <defs>
    <linearGradient id="paint0_linear_142_354" x1="0.877136" y1="70.683" x2="1059" y2="70.683" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFA3"/>
      <stop offset="1" stop-color="#6729FA"/>
    </linearGradient>
  </defs>
    </svg>*/}
      </div>
    </div>
  );
};

export default David;
