import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Multimedia.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const Multimedia = () => {
  const { t, i18n } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 719
  );
  const [isMobile2, setIsMobile2] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1420
  );
  const playVideo = () => {
    setShowVideo(!showVideo);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 719);
      setIsMobile2(window.innerWidth <= 1420);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  const plugins = [];
  return (
    <div
      id="multimedia"
      className="media overflow-hidden flex flex-col justify-start w-full relative items-center gap-8 pt-24 container z-[2] pb-[190px] h-fit bg-[#0A0D17]"
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/stars.svg`}
        className="absolute left-0 top-0"
      ></img>
      <div className="flex w-full justify-between items-center z-[2]">
        <div className="border-lef border-l-[5px] border-[#00FFA3]">
          <p className=" usecase_size:hidden text-white uppercase vsm:text-[20px] font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            {t("MultiMedia Library")}
          </p>
          <p className="hidden usecase_size:block text-white uppercase vsm:text-[20px] font-bold text-[40px] pl-[37px] leading-normal tracking-[16px]">
            {t("Multi")} {t("media")} {t("Library")}
          </p>
        </div>
        <div className="mt-[-20px] vsm:mt-[-40px]">
          <Player
            autoplay
            loop
            src="https://lottie.host/b0c85c74-cf75-4d48-a7d0-6eef7163fd63/7tmOzKrVDP.json"
            className="size-[300px] vsm:size-[130px]"
          ></Player>
        </div>
      </div>
      <div className="flex flex-col bg-[#ffffff04] border-[2px] border-[#0A0D1705] rounded-[20px] w-full h-full py-[50px] gap-[90px] mt-[90px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="line_design w-[40%] h-[1px] rotate-180"></div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/gitex.png`}
          ></img>
          <div className="line_design w-[40%] h-[1px]"></div>
        </div>
        <div className="flex flex-row gap-5 pl-[45px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/calendar.svg`}
          ></img>
          <p className="font-normal text-[#ffffff90] text-[20px]">
            29/05/2024 - 31/05/2024
          </p>
        </div>
        <div className={`w-full   ${isMobile2 ? "px-[20px]" : "px-[45px]"}`}>
          {!showVideo && (
            <div className="w-full relative">
              <img
                src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/thumbnail.png`}
                alt="Cover Image"
                className="w-full object-cover relative z-0"
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
              controls
              autoPlay
              className={`w-full  rounded-[30px] object-cover`}
              onEnded={() => setShowVideo(false)}
            >
              <source
                src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {isMobile2 ? (
          <Carousel
            className="relative z-[2] px-[20px]"
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
            <CarouselContent className="flex flex-row ">
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/1.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/2.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/3.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/4.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/5.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/6.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/7.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/8.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/9.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/10.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/11.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
              <CarouselItem className=" relative w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/12.png`}
                  className="relative cursor-pointer rounded-[20px]"
                ></img>
              </CarouselItem>
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        ) : (
          <>
            <div className="flex flex-row w-full justify-center items-center">
              <Dialog className="w-full bg-black">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/1.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] rotate-[-9deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/1.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/2.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[4deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/2.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/3.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[-5deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/3.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/4.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-3 hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/4.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/5.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[-5deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/5.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/6.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-3 hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/6.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <Dialog className="w-full bg-black">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/7.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] rotate-[-9deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/7.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/8.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[4deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/8.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/9.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[-5deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/9.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/10.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-3 hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/10.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/11.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-[-5deg] hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/11.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog className="w-full">
                <DialogTrigger asChild>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/12.png`}
                    className="relative border-[3px] border-[#E2E2E2] w-[280px] ml-[-50px] rotate-3 hover:rotate-0 hover:z-[3] hover:w-[320px] transition-all duration-[0.8] ease-in-out cursor-pointer"
                  ></img>
                </DialogTrigger>
                <DialogContent className="max-w-[40%]  p-[20px] gap-0 bg-[#141620] border-[2px] border-[#ffffff30]">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/multimedia/gitex/12.png`}
                    className=" py-[20px] w-full"
                  ></img>
                  <DialogFooter
                    className={"flex justify-start sm:justify-start w-[150px]"}
                  >
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="botona w-full text-white"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Multimedia;
