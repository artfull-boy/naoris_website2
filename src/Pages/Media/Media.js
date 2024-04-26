import React from "react";
import "./media.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Media = () => {
  return (
    <div className="media overflow-hidden flex flex-col w-full relative items-center gap-8 container h-fit z-[2] mb-14">
      <img
        src={`${process.env.PUBLIC_URL}/assets/BACKGROUND_media.png`}
        className="absolute top-0 left-0 z-[2] w-[100%]"
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
          style={{ width: "100%", height: "100vh" }}
          loop={true}
          autoPlay
          muted
          playsInline
          controls
          className="object-cover w-full"
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/videoplayback.mp4`}
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
      <div className="flex flex-wrap gap-[140px] w-full items-center vsm:justify-center">
        <div className="media_card group flex flex-col w-[225px] h-[339px] bg-transparent rounded-[24px] border-0 border-b-4 hover:border-l-4 hover:border-r-4 border-[#00FFA3] pt-[75px] hover:pt-0 px-1 transition-all duration-[0.3s] ease-in-out">
          <div className="flex flex-col group-hover:flex-row group-hover:justify-between group-hover:items-end transition-all duration-[0.3s] ease-in-out">
            <img
              src={`${process.env.PUBLIC_URL}/assets/medi1tv.png`}
              className="size-[221px] group-hover:size-[112px] transition-all duration-[0.3s] ease-in-out"
            ></img>
            <p className="text-white text-[25px] group-hover:text-[18px] w-full text-center group-hover:whitespace-nowrap group-hover:pb-4 transition-all duration-[0.3s] ease-in-out">
              Medi 1 Tv
            </p>
          </div>
          <hr className="p-2 w-[80%] self-center rounded-[1px] hidden group-hover:block transition-all duration-[0.3s] ease-in-out"></hr>
          <div className=" flex-col justify-between items-center w-full h-full pb-[24px] hidden group-hover:flex transition-all duration-[0.3s] ease-in-out">
            <p className=" text-white text-[14px] w-full pl-[20px]">
              Naoris Consulting successfully organized a significant event in
              Tanger. During this event, the integration and optimization of
              emerging...
            </p>
            <button className="botona w-[175px] h-[30px] text-white self-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
