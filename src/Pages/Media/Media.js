import React, { useEffect, useState } from "react";
import "./media.css";
import { Player } from "@lottiefiles/react-lottie-player";
import mediaJson from "./media.json";
import naorisProtocol from "./mediaProtocol.json";
import rewards from "./rewards.json";
import socialMedia from "./socialMedia.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import NewsTicker from "../../Sections/BreakingNews/BreakingNews";

const Media = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 719
  );
  const [isMobile2, setIsMobile2] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1420
  );
  const breakingNews = [
    t(
      "Get ready to explore our groundbreaking tools and cutting-edge innovations, coming your way soon with exciting announcements!"
    ),
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 719);
      setIsMobile2(window.innerWidth <= 1420);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="media"
      className="media overflow-hidden flex flex-col w-full relative items-center gap-[150px] container h-fit z-[2] pb-[190px] pt-24 bg-[#0A0D17]"
    >
      <div className="absolute top-0 flex flex-col gap-6 items-center justify-center left-0">
        <img src={`${process.env.PUBLIC_URL}/assets/Stars.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars2.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/Stars3.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars4.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars4.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/stars2.svg`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/Stars6.svg`}></img>
      </div>
      <div className="flex w-full justify-between items-center z-[2] ">
        <div className="border-left border-l-[5px] border-[#00FFA3]">
          <p className="text-white font-bold text-[40px] pl-[37px] leading-normal tracking-[16px] uppercase">
            {t("They Spoke About Us")}
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
      <div
        className="flex flex-col media:flex-row gap-[40px] relative z-[2] h-fit w-full"
        id="naorisconsulting"
      >
        <div className="relative z-[2] flex flex-col gap-[40px] media:w-[80%] w-[100%]  h-fit">
          <div className="heading relative z-[2] w-fit flex self-start">
            <p className="text-[50px] font-bold text-white vsm:text-[35px]">
              Naoris Consulting
            </p>
          </div>
          <div className="background_media flex flex-col items-center z-[2] w-full h-[600px]  overflow-hidden pl-[60px] pb-[20px] vsm:pl-[20px] vsm:pb-0 object-cover relative">
            <div className="flex flex-col gap-[57px] h-[100%] justify-center items-center">
              <div className="flex gap-[75px] items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/bdoLogo.png`}
                  className="h-[93px]"
                ></img>
                <div className="w-[5px] h-[100%] rounded-xl bg-white"></div>
                <img
                  className="h-[93px]"
                  src={`${process.env.PUBLIC_URL}/assets/naorisLogo.png`}
                ></img>
              </div>
              <p className="text-[43px] font-bold text-white text-center">
                {t("United for a secure and sovereign digital transformation")}
              </p>
            </div>
            <NewsTicker news={breakingNews} />
          </div>
          {isMobile2 && (
            <Carousel
              className="relative z-[2]"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="flex flex-row">
                {socialMedia.map((post, index) => (
                  <>
                    {post.company === "Naoris Consulting" && (
                      <CarouselItem
                        key={index}
                        className=" relative z-[2] md:basis-1/2 lg:basis-1/3  lg:h-[370px] md:h-[410px] rounded-[20px]"
                      >
                        <a href={post.link} target="_blank">
                          <div className=" flex flex-col gap-[14px] rounded-[20px] bg-white   relative lg:h-[370px] md:h-[410px] h-fit">
                            <img
                              className="w-full h-[176] rounded-t-[20px] "
                              src={`${process.env.PUBLIC_URL}${post.cover}.png`}
                            ></img>
                            <p className="text-black text-[14px] font-normal text-justify px-[14px]">
                              {post.desc}
                            </p>
                            {post.platform == "Youtube" ? (
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/youtube.png`}
                                className="w-[50px] h-[50px] md:absolute md:bottom-0 md:left-[14px] relative ml-4 mb-4"
                              ></img>
                            ) : (
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/linkedin.png`}
                                className="w-[30px] h-[30px] md:absolute md:bottom-1 md:left-[14px] relative ml-4 mb-4"
                              ></img>
                            )}
                          </div>
                        </a>
                      </CarouselItem>
                    )}
                  </>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          )}
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
                              src={`${process.env.PUBLIC_URL}${media.logo}white.png`}
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
                      <div
                        className={`size-[221px] group-hover:size-[112px] flex transition-all duration-[0.3s] ease-in-out`}
                      >
                        {media.name == "LesEco.ma" ||
                        media.name == "La vie éco" ||
                        media.name == "Le Temps Mag" ? (
                          <>
                            <img
                              src={`${process.env.PUBLIC_URL}${media.logo}white.png`}
                              className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto  group-hover:hidden "
                            ></img>
                            <img
                              src={`${process.env.PUBLIC_URL}${media.logo}.png`}
                              className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto hidden  group-hover:block "
                            ></img>
                          </>
                        ) : (
                          <img
                            src={`${process.env.PUBLIC_URL}${media.logo}`}
                            className={`w-[100%] ${
                              media.name == "Assureur.ma" ||
                              media.name == "Challenge" ||
                              media.name == "L’opinion" ||
                              media.name == "La vie éco" ||
                              media.name == "Médias24" ||
                              media.name == "Hiba Press"
                                ? "group-hover:h-[23px]"
                                : "group-hover:h-auto"
                            } transition-all duration-[0.3s] ease-in-out m-auto filter brightness-0 invert group-hover:filter-none`}
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
                          {t("Learn More")}
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <hr className="seperator w-[4px] rounded-lg h-[2780px] relative z-[2] media:block hidden"></hr>
        {!isMobile2 && (
          <div className="relative z-[2] flex flex-col gap-[23px] w-[25%] h-fit items-end ">
            {socialMedia.map((post) => (
              <a href={post.link} target="_blank">
                {post.company == "Naoris Consulting" && (
                  <div className="w-[340px] h-[319px] flex flex-col gap-[14px] rounded-[20px] bg-white  relative">
                    <img
                      className="w-full h-[176] rounded-t-[20px]"
                      src={`${process.env.PUBLIC_URL}${post.cover}.png`}
                    ></img>
                    <p className="text-black text-[14px] font-normal text-justify px-[14px]">
                      {post.desc}
                    </p>
                    {post.platform == "Youtube" ? (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/youtube.png`}
                        className="w-[60px] h-[60px] absolute left-[14px] bottom-0"
                      ></img>
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/linkedin.png`}
                        className="w-[30px] h-[30px] absolute left-[14px] bottom-2"
                      ></img>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
      <div
        className="flex flex-col media:flex-row gap-[40px] relative z-[2] h-fit w-full"
        id="naorisprotocol"
      >
        <div className="relative z-[2] flex flex-col gap-[40px] media:w-[80%] w-[100%]  h-fit">
          <div className="heading relative z-[2] w-fit flex self-start">
            <p className="text-[50px] font-bold text-white vsm:text-[35px]">
              Naoris Protocol
            </p>
          </div>
          <div className="flex flex-col gap-7 z-[2] w-full rounded-[20px]">
            <div className="w-full relative group">
              <a href="https://www.naorisprotocol.com/blog" target="_blank">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/media/naorisprotocol.png`}
                  alt="Cover Image"
                  className="w-full relative z-0"
                />
              </a>
              <a
                href="https://www.naorisprotocol.com/blog"
                target="_blank"
                className="group-hover:left-[50%] group-hover:bottom-[50%] group-hover:translate-x-[-50%] group-hover:translate-y-[50%] absolute left-[30px] bottom-[16px] text-white font-bold text-[30px] tracking-[2px] transition-all duration-[0.3s] ease-in-out"
              >
                View Blog
              </a>
            </div>
          </div>
          {isMobile2 && (
            <Carousel
              className="relative z-[2]"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="flex flex-row">
                {socialMedia.map((post, index) => (
                  <>
                    {post.company === "Naoris Protocol" && (
                      <CarouselItem
                        key={index}
                        className=" relative z-[2] md:basis-1/2 lg:basis-1/3  lg:h-[370px] md:h-[410px] rounded-[20px]"
                      >
                        <a href={post.link} target="_blank">
                          <div className=" flex flex-col gap-[14px] rounded-[20px] bg-white   relative lg:h-[370px] md:h-[410px] h-fit">
                            <img
                              className="w-full h-[176] rounded-t-[20px] "
                              src={`${process.env.PUBLIC_URL}${post.cover}.png`}
                            ></img>
                            <p className="text-black text-[14px] font-normal text-justify px-[14px]">
                              {post.desc}
                            </p>
                            {post.platform == "Youtube" ? (
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/youtube.png`}
                                className="w-[50px] h-[50px] md:absolute md:bottom-0 md:left-[14px] relative ml-4 mb-4"
                              ></img>
                            ) : (
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/linkedin.png`}
                                className="w-[30px] h-[30px] md:absolute md:bottom-1 md:left-[14px] relative ml-4 mb-4"
                              ></img>
                            )}
                          </div>
                        </a>
                      </CarouselItem>
                    )}
                  </>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          )}
          <div className="flex flex-col gap-7 z-[2] w-full">
            <div className="heading relative z-[2] w-fit m-auto">
              <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
                Articles
              </p>
            </div>
            <div className="flex  flex-wrap gap-y-[100px] gap-x-[50px] w-full items-center justify-center z-[2]">
              {naorisProtocol.map((media) => (
                <>
                  {isMobile ? (
                    <a href={media.link} target="_blank">
                      <div className="media_card flex flex-col w-[220px] h-[330px] bg-transparent rounded-[24px] border-0 border-b-4 border-[#00FFA3] pt-[75px]">
                        <div className="flex flex-col">
                          <div className="size-[216px] flex ">
                            {media.name == "Cointelegraph" ? (
                              <img
                                src={`${process.env.PUBLIC_URL}${media.logo}.png`}
                                className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto filter brightness-0 invert"
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
                        <div
                          className={`size-[221px] group-hover:size-[112px] flex transition-all duration-[0.3s] ease-in-out`}
                        >
                          {media.name == "Cointelegraph" ? (
                            <>
                              <img
                                src={`${process.env.PUBLIC_URL}${media.logo}.png`}
                                className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto  group-hover:hidden "
                              ></img>
                              <img
                                src={`${process.env.PUBLIC_URL}${media.logo}1.png`}
                                className="w-[100%] transition-all duration-[0.3s] ease-in-out m-auto hidden  group-hover:block group-hover:h-[23px] "
                              ></img>
                            </>
                          ) : (
                            <img
                              src={`${process.env.PUBLIC_URL}${media.logo}`}
                              className={`w-[100%] ${
                                media.name == "Blockonomi" ||
                                media.name == "TechCrunch" ||
                                media.name == "Coindesk" ||
                                media.name == "Nasdaq" ||
                                media.name == "VentureBeat" ||
                                media.name == "Techbullion"
                                  ? "group-hover:h-[24px]"
                                  : "group-hover:h-auto"
                              } transition-all duration-[0.3s] ease-in-out m-auto filter brightness-0 invert group-hover:filter-none`}
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
                            {t("Learn More")}
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-28 z-[2] w-full">
            <div className="heading relative z-[2] w-fit m-auto">
              <p className="text-[50px] font-bold text-white text-center vsm:text-[35px]">
                {t("Awards")}
              </p>
            </div>
            <div className="flex  flex-wrap gap-y-[100px] gap-x-[50px] w-full items-center justify-center z-[2]">
              {rewards.map((reward) => (
                <div className="flex flex-col gap-[38px] items-center justify-center w-[290px]">
                  <img src={`${process.env.PUBLIC_URL}${reward.img}`}></img>
                  <p className="text-white text-[25px] font-medium ">
                    {reward.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="seperator w-[4px] rounded-lg h-[3750px] relative z-[2] media:block hidden"></hr>
        {!isMobile2 && (
          <div className="relative z-[2] flex flex-col gap-[23px] w-[25%] h-fit items-end">
            {socialMedia.map(
              (post) =>
                post.company == "Naoris Protocol" && (
                  <a href={post.link} target="_blank">
                    <div className="w-[340px] h-[319px] flex flex-col gap-[14px] rounded-[20px] bg-white  relative">
                      <img
                        className="w-full h-[176] rounded-t-[20px]"
                        src={`${process.env.PUBLIC_URL}${post.cover}.png`}
                      ></img>
                      <p className="text-black text-[14px] font-normal text-justify px-[14px]">
                        {post.desc}
                      </p>
                      {post.platform == "Youtube" ? (
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/youtube.png`}
                          className="w-[60px] h-[60px] absolute left-[14px] bottom-0"
                        ></img>
                      ) : (
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/media/socialmedia/linkedin.png`}
                          className="w-[30px] h-[30px] absolute left-[14px] bottom-2"
                        ></img>
                      )}
                    </div>
                  </a>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
