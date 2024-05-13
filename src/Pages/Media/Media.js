import React, { useEffect, useState } from "react";
import "./media.css";
import { Player } from "@lottiefiles/react-lottie-player";
import mediaJson from "./media.json";

const Media = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 700
  );
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="media"
      className="media overflow-hidden flex flex-col w-full relative items-center gap-[150px] container h-fit z-[2] pb-96 vsm:pb-60 pt-24"
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/bg_use.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:hidden block"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/assets/bg_useM.png`}
        className="absolute top-[-68px] left-0 z-[2]  w-full h-full cards:block hidden"
      ></img>

      <div className="flex w-full justify-between items-center z-[2] ">
        <div className="border-lef border-l-[5px] border-[#00FFA3]">
          <p className="text-white font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            MEDIA
          </p>
        </div>
        <div className="animation mr-[-100px] vsm:mr-0">
          <Player
            autoplay
            loop
            src="https://lottie.host/66b51737-4ed8-462c-af26-0899e333438a/NmHlr8CI0q.json"
            className="size-[300px] vsm:size-[170px]"
          ></Player>
        </div>
      </div>
      <div className="flex flex-row gap-[40px] relative z-[2] h-fit">
        <div className="relative z-[2] flex flex-col gap-[70px] w-[80%] h-fit">
          <div className="heading relative z-[2] w-fit flex self-start">
            <p className="text-[50px] font-bold text-white vsm:text-[35px]">
              Naoris Consulting
            </p>
          </div>
          <div className="flex flex-col gap-7 z-[2] w-full rounded-[20px]">
            {!showVideo && (
              <div className="w-full relative">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/media/thumbnail.png`}
                  alt="Cover Image"
                  className="w-full relative z-0"
                  onClick={playVideo}
                />
                <div className="bg-[#1212126c] absolute left-0 bottom-0 w-full z-[1] h-full rounded-[20px]"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/media/play.png`}
                  className=" absolute left-[50%] bottom-[50%] translate-x-[-50%] translate-y-[50%] z-[1] w-[90px] cursor-pointer rounded-[20px] cards:w-[60px]"
                  onClick={playVideo}
                />
              </div>
            )}
            {showVideo && (
              <video
                style={{ width: "100%" }}
                controls
                autoPlay
                className="object-cover w-full rounded-[20px]"
                onEnded={() => setShowVideo(false)}
              >
                <source
                  src={`${process.env.PUBLIC_URL}/assets/naorisconsulting.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="text-white font-bold text-[25px] tracking-[2px] text-justify vsm:text-left">
              Naoris announced the launch of its operations in Morocco with a
              presentation to the national media, which took place on April 18th
              at the Marriott Hotel in Casablanca.
            </p>
          </div>
          <div className="heading relative z-[2] w-fit m-auto">
            <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
              Articles
            </p>
          </div>
          <div className="flex  flex-wrap gap-y-[100px] gap-x-[50px] w-full items-center justify-center z-[2]">
            {mediaJson.map((media) => (
              <>
                {isMobile ? (
                  <a href={media.link} target="_blank">
                    <div className="media_card flex flex-col w-[220px] h-[330px] bg-transparent rounded-[24px] border-0 border-b-4 border-[#00FFA3] pt-[75px]">
                      <div className="flex flex-col">
                        <div className="size-[216px] flex ">
                          {media.name == "LesEco.ma" ||
                          media.name == "La vie éco" ||
                          media.name == "Le Temps Mag" ? (
                            <img
                              src={`${process.env.PUBLIC_URL}${media.logo}`}
                              className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto grayscale-[100%] "
                            ></img>
                          ) : (
                            <img
                              src={`${process.env.PUBLIC_URL}${media.logo}`}
                              className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto filter brightness-0 invert"
                            ></img>
                          )}
                        </div>

                        <p className="text-white text-[25px]  w-full text-center">
                          {media.name}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="media_card relative group flex flex-col w-[225px] h-[339px] bg-transparent rounded-[24px] border-0 border-b-4 hover:border-l-4 hover:border-r-4 border-[#00FFA3] pt-[75px] hover:pt-0 px-1 transition-all duration-[0.3s] ease-in-out">
                    <div className="flex flex-col group-hover:flex-row group-hover:justify-between group-hover:px-2 group-hover:items-end transition-all duration-[0.3s] ease-in-out">
                      <div className="size-[221px] group-hover:size-[112px] flex transition-all duration-[0.3s] ease-in-out">
                        {media.name == "LesEco.ma" ||
                        media.name == "La vie éco" ||
                        media.name == "Le Temps Mag" ? (
                          <img
                            src={`${process.env.PUBLIC_URL}${media.logo}`}
                            className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto grayscale-[100%] group-hover:grayscale-0 "
                          ></img>
                        ) : (
                          <img
                            src={`${process.env.PUBLIC_URL}${media.logo}`}
                            className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto filter brightness-0 invert group-hover:filter-none"
                          ></img>
                        )}
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
                      <a
                        href={media.link}
                        target="_blank"
                        className=" w-full h-[30px] flex justify-center"
                      >
                        <button
                          className="botona w-[175px] h-[30px] text-white self-center"
                          href={media.link}
                        >
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
        <hr className="bg-[#00ffa3] w-[4px] rounded-lg h-[2780px] relative z-[2] block"></hr>
        <div className="relative z-[2] flex flex-col gap-[23px] w-[15%] h-fit">
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7193273065189822465" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe width="300" height="260" src="https://www.youtube.com/embed/IUy_yvUUprM?si=1u2F0s6vLFtXveJI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-[20px]"></iframe>
        <iframe width="300" height="260" src="https://www.youtube.com/embed/ewsWbSkU-DA?si=N-Oa7P7f74Zd2-j7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7191371671398711296" height="260" width="300" title="Embedded post" className="rounded-[20px]"></iframe>
        </div>
      </div>
      <div className="absolute bottom-[-90px] left-[-20px] z-[0] w-full last_hope"></div>
    </div>
  );
};

export default Media;
