import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container flex flex-col relative justify-start items-center w-full z-[1] overflow-hidden gap-14  py-[40px] bg-[#0A0D17]">
      <div className="flex w-full flex-row relative justify-between items-start z-[2] flex-wrap gap-10 vsm:justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/footer_logo.png`}
          width={250}
          alt="Logo Footer"
        ></img>
        <div className="flex flex-col gap-4 items-start w-[240px] vsm:w-full vsm:items-center">
          <p className="font-bold text-[16px] text-white">
            {t("Our Services")}
          </p>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Audits and Evaluations")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Digital Strategy and Cybersecurity")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Risk Management and Compliance")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Solutions Architecture")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Infrastructure and Applications Optimization")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Training and Awareness")}
          </Link>
          <Link
            to={"/"}
            onClick={() => scrollToSection("services")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Artificial Intelligence and Data Analysis")}
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-start w-[240px] vsm:w-full  vsm:items-center">
          <p className="font-bold text-[16px] text-white">{t("Use Cases")}</p>
          <Link
            to={"/case_studies/1"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Autonomous Fraud Detection System")}
          </Link>
          <Link
            to={"/case_studies/2"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Secure Quantum Blockchain for Real-Time Fraud Detection")}
          </Link>
          <Link
            to={"/case_studies/3"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Enhanced Cybersecurity Mesh for Enterprise Clients")}
          </Link>
          <Link
            to={"/case_studies/4"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Personalized AI-Based Financial Advisory Services")}
          </Link>
          <Link
            to={"/case_studies/5"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("Transforming the Insurance Sector with AI and Blockchain")}
          </Link>
          <Link
            to={"/case_studies/6"}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            {t("IntelliChain Inventory System")}
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-start w-[240px] vsm:w-full  vsm:items-center">
          <p className="font-bold text-[16px] text-white">
            {t("They Spoke About Us")}
          </p>
          <Link
            to={"media"}
            onClick={() => scrollToSection("naorisconsulting")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            Naoris Consulting
          </Link>
          <Link
            to={"media"}
            onClick={() => scrollToSection("naorisprotocol")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            Naoris Protocol
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-start w-[240px] vsm:w-full  vsm:items-center">
          <p className="font-bold text-[16px] text-white">
            {t("MultiMedia Library")}
          </p>
          <Link
            to={"multimedia"}
            onClick={() => scrollToSection("gitex")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            Gitex Africa 2024
          </Link>
          <Link
            to={"multimedia"}
            onClick={() => scrollToSection("openning")}
            className="font-normal cursor-pointer text-[14px] text-[#ffffff80] hover:text-[#00FFA3]"
          >
            Launch Event of Naoris
          </Link>
        </div>
      </div>
      <p className=" text-[#ffffff50] font-semibold text-[14px] z-[2]">
        © 2024 Naoris Consulting. {t("All rights reserved")}.
      </p>
    </div>
  );
};

export default Footer;
