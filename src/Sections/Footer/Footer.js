import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation()
  return (
    <div className="container flex flex-col relative justify-between items-center w-full z-[1] overflow-hidden  pt-[160px] bg-[#011223]">
      <div className="flex w-full flex-row relative justify-between items-center medium:flex-col medium:gap-12 z-[2]">
        <div className="hidden vsm:flex justify-between items-center w-full order-3">
          <img src={`${process.env.PUBLIC_URL}/assets/footer_logo.png`} width={90} className="medium:order-6" alt="Logo Footer"></img>
          <div className="flex gap-2 w-fit h-fit medium:order-3 vsm:flex-col vsm:items-start">
            <div className="border-r vsm:border-none px-3">
              <Link to={"/"}
                onClick={() => scrollToSection("home")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Home")}
              </Link>
            </div>
            <div className="border-r vsm:border-none px-3">
              <Link to={"/#about"}
                onClick={() => scrollToSection("about")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("About Us")}
              </Link>
            </div>
            <div className="border-r vsm:border-none px-3">
              <Link to={"/#services"}
                onClick={() => scrollToSection("services")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Services")}
              </Link>
            </div>
            <div className="border-r vsm:border-none px-3">
              <Link to={"/#team"}
                onClick={() => scrollToSection("team")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Team")}
              </Link>
            </div>
            <div className="border-r vsm:border-none px-3">
              <Link to={"/#faq"}
                onClick={() => scrollToSection("faq")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("FAQ")}
              </Link>
            </div>
            <div className="px-3">
              <Link to={"/#contact"}
                onClick={() => scrollToSection("contact")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Contact Us")}
              </Link>
            </div>
            <div className="px-3">
              <Link to={"/case_studies"}
                onClick={() => scrollToSection("case_studies")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Use Cases")}
              </Link>
  </div>
            <div className="px-3">
              <Link to={"/media"}
                onClick={() => scrollToSection("media")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Media")}
              </Link>
            </div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/footer_logo.png`} width={100} className="medium:order-6 vsm:hidden" alt="Logo Footer"></img>
        <div className="vsm:hidden flex gap-2 w-fit h-fit medium:order-3 vsm:flex-col vsm:items-start">
          <div className="border-r vsm:border-none px-3">
            <Link to={"/"}
              onClick={() => scrollToSection("home")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("Home")}
            </Link>
          </div>
          <div className="border-r vsm:border-none px-3">
            <Link to={"/#about"}
              onClick={() => scrollToSection("about")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("About Us")}
            </Link>
          </div>
          <div className="border-r vsm:border-none px-3">
            <Link to={"/#services"}
              onClick={() => scrollToSection("services")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("Services")}
            </Link>
          </div>
          <div className="border-r vsm:border-none px-3">
            <Link to={"/#team"}
              onClick={() => scrollToSection("team")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("Team")}
            </Link>
          </div>
          <div className="border-r vsm:border-none px-3">
            <Link to={"/#faq"}
              onClick={() => scrollToSection("faq")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("FAQ")}
            </Link>
          </div>
          <div className="px-3 border-r vsm:border-none">
            <Link to={"/#contact"}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              {t("Contact Us")}
            </Link>
          </div>
         
            <div className="px-3 border-r vsm:border-none">
              <Link to={"/media"}
                onClick={() => scrollToSection("media")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Media")}
              </Link>
            </div>
            <div className="px-3 ">
              <Link to={"/case_studies"}
                onClick={() => scrollToSection("case_studies")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                {t("Use Cases")}
              </Link>
</div>
        </div>
        <div className="text-white flex flex-col gap-3 w-[26%] medium:w-[100%] medium:order-1">
          <p className="font-normal text-[40px] ">
            {t("Subscribe to Our")} <br className="medium:hidden" />{" "}
            <span className="font-semibold">{t("NewsLetter")}</span>
          </p>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder={`${t("Enter your email address")}`}
              className="h-[50px] bg-white text-black rounded-[10px] px-3"
            ></input>
            <button className="submit_subscription h-[50px] rounded-[10px]">
              {t("Subscribe")}
            </button>
          </div>
        </div>
      </div>
      <p className="text-[16px] text-white font-bold vsm:text-[14px] z-[2] pb-5">© 2024 Naoris Consulting. {t("All rights reserved")}.</p>
      
      <img src={`${process.env.PUBLIC_URL}/assets/clip_footer.png`} className="absolute top-0 left-0 z-[1] cards:top-0 cards:h-full cards:w-full" />
    

    </div>
  );
};

export default Footer;
