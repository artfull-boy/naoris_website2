import React from "react";
import logo from "../../assets/logo_footer.png";
import "./footer.css";

const Footer = ({ scrollToSection }) => {
  return (
    <div className="container flex flex-col relative justify-between items-center w-full z-[2]">
      <div className="flex w-full flex-row relative justify-between items-center medium:flex-col medium:gap-12">
        <div className="hidden vsm:flex justify-between items-center w-full order-3">
          <img src={logo} width={180} className="medium:order-6"></img>
          <div className="flex gap-2 w-fit h-fit medium:order-3 vsm:flex-col vsm:items-start">
            <div className="border-r vsm:border-none px-3">
              <p
                onClick={() => scrollToSection("home")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                Home
              </p>
            </div>
            <div className="border-r vsm:border-none px-3">
              <p
                onClick={() => scrollToSection("about")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                About Us
              </p>
            </div>
            <div className="border-r vsm:border-none px-3">
              <p
                onClick={() => scrollToSection("services")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                Services
              </p>
            </div>
            <div className="border-r vsm:border-none px-3">
              <p
                onClick={() => scrollToSection("team")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                Team
              </p>
            </div>
            <div className="border-r vsm:border-none px-3">
              <p
                onClick={() => scrollToSection("faq")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                FAQ
              </p>
            </div>
            <div className="px-3">
              <p
                onClick={() => scrollToSection("contact")}
                className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
              >
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <img src={logo} width={250} className="medium:order-6 vsm:hidden"></img>
        <div className="vsm:hidden flex gap-2 w-fit h-fit medium:order-3 vsm:flex-col vsm:items-start">
          <div className="border-r vsm:border-none px-3">
            <p
              onClick={() => scrollToSection("home")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              Home
            </p>
          </div>
          <div className="border-r vsm:border-none px-3">
            <p
              onClick={() => scrollToSection("about")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              About Us
            </p>
          </div>
          <div className="border-r vsm:border-none px-3">
            <p
              onClick={() => scrollToSection("services")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              Services
            </p>
          </div>
          <div className="border-r vsm:border-none px-3">
            <p
              onClick={() => scrollToSection("team")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              Team
            </p>
          </div>
          <div className="border-r vsm:border-none px-3">
            <p
              onClick={() => scrollToSection("faq")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              FAQ
            </p>
          </div>
          <div className="px-3">
            <p
              onClick={() => scrollToSection("contact")}
              className="font-normal cursor-pointer text-[18px] text-[#00FFA3]"
            >
              Contact Us
            </p>
          </div>
        </div>
        <div className="text-white flex flex-col gap-3 w-[26%] medium:w-[100%] medium:order-1">
          <p className="font-normal text-[40px] ">
            Subscribe to Our <br className="medium:hidden" />{" "}
            <span className="font-semibold">NewsLetter</span>
          </p>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="h-[50px] bg-white rounded-[10px] px-3"
            ></input>
            <button className="submit_subscription h-[50px] rounded-[10px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-[16px] text-white font-bold vsm:text-[14px]">© 2024 Naoris Consulting. All rights reserved.</p>
    </div>
  );
};

export default Footer;
