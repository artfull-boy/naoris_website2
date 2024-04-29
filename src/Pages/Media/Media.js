import React, { useEffect, useState } from "react";
import "./media.css";
import { Player } from "@lottiefiles/react-lottie-player";
import mediaJson from "./media.json";

const Media = () => {
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
    <div id="media" className="media overflow-hidden flex flex-col w-full relative items-center gap-8 container h-fit z-[2] mb-60">
      <img
        src={`${process.env.PUBLIC_URL}/assets/BACKGROUND_media.png`}
        className="absolute top-0 left-0 z-[2] w-[100%] object-cover h-[100%]"
      ></img>
 
      <div className="flex w-full justify-between items-center z-[2]">
        <div className="border-lef border-l-[5px] border-[#00FFA3]">
          <p className="text-white font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            MEDIA
          </p>
        </div>
        <div className="animation">
          <Player
            autoplay
            loop
            src="https://lottie.host/66b51737-4ed8-462c-af26-0899e333438a/NmHlr8CI0q.json"
            className="size-[300px] vsm:size-[200px]"
          ></Player>
        </div>
      </div>
      <div className="flex flex-col gap-7 z-[2] w-full">
        <video
          style={{ width: "100%"}}
          loop={true}
          autoPlay
          muted
          playsInline
          controls
          className="object-cover w-full"
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/naorisconsulting.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p className="text-white font-bold text-[30px] tracking-[2px]">
          Naoris announces the inauguration of its operations in Morocco with a
          presentation to national media, scheduled for April 18th at the
          Marriott Hotel Casablanca...
        </p>
      </div>
      <div className="flex  flex-wrap gap-[140px] w-full items-center justify-center z-[2]">
        {mediaJson.map((media) => (
          <>
            {isMobile ? (
              <a href={media.link} target="_blank">
                <div className="media_card flex flex-col w-[225px] h-[339px] bg-transparent rounded-[24px] border-0 border-b-4 border-[#00FFA3] pt-[75px]">
                <div className="flex flex-col">
                  <div className="size-[221px] flex ">
                    <img
                      src={`${process.env.PUBLIC_URL}${media.logo}`}
                      className="w-[100%] m-auto"
                    ></img>
                  </div>

                  <p className="text-white text-[25px]  w-full text-center">
                    {media.name}
                  </p>
                </div>
              </div>
              </a>
            ) : (
              <div className="media_card group flex flex-col w-[225px] h-[339px] bg-transparent rounded-[24px] border-0 border-b-4 hover:border-l-4 hover:border-r-4 border-[#00FFA3] pt-[75px] hover:pt-0 px-1 transition-all duration-[0.3s] ease-in-out">
                <div className="flex flex-col group-hover:flex-row group-hover:justify-between group-hover:px-2 group-hover:items-end transition-all duration-[0.3s] ease-in-out">
                  <div className="size-[221px] group-hover:size-[112px] flex transition-all duration-[0.3s] ease-in-out">
                    <img
                      src={`${process.env.PUBLIC_URL}${media.logo}`}
                      className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto"
                    ></img>
                  </div>

                  <p className="text-white text-[25px] group-hover:text-[18px] w-full text-center group-hover:whitespace-nowrap group-hover:pb-4 transition-all duration-[0.3s] ease-in-out">
                    {media.name}
                  </p>
                </div>
                <hr className="p-2 w-[80%] self-center rounded-[1px] hidden group-hover:block transition-all duration-[0.3s] ease-in-out"></hr>
                <div className=" flex-col justify-between items-center w-full h-full pb-[24px] hidden group-hover:flex transition-all duration-[0.3s] ease-in-out">
                  <div className="group-hover:max-h-[152px] overflow-hidden">
                    <p className=" text-white text-[14px] w-full pl-[20px]">
                      {media.description}
                    </p>
                  </div>
                  <a href={media.link} target="_blank" className=" w-full h-[30px] flex justify-center">
                  <button className="botona w-[175px] h-[30px] text-white self-center" href={media.link}>
                    Learn More
                  </button>
                  </a>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Media;
