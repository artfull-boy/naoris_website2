import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ sections, scrollToSection }) => {
  const { t, i18n } = useTranslation();

  const [activeSection, setActiveSection] = React.useState("home");

  /*React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; 
      const sectionIds = sections.map((section) => section.id);
      const currentActiveSection = sectionIds.find((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });
      console.log("Current active section:", currentActiveSection);
      setActiveSection(currentActiveSection || "");
    };
    
    if (activeSection !== "case_studies" && activeSection !== "media") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);*/
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar fixed bg-[#1D232880] top-0 z-10 2xl:px-24 xl:px-20 lg:px-16 md:px-14 sm:px-8 px-[10px]">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: "25px", height: "25px", color: "white" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={
                    activeSection === section.id ? "text-[#00FFA3]" : ""
                  }
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.id === "case_studies" ? (
                    <>
                      <Link
                        onClick={() => setActiveSection("case_studies")}
                        className="hover:text-[#00FFA3] hover:bg-transparent"
                        to={section.id}
                      >
                        {t(section.name)}
                      </Link>
                    </>
                  ) : section.id === "media" ? (
                    <>
                      <Link
                        onClick={() => setActiveSection("media")}
                        className="hover:text-[#00FFA3] hover:bg-transparent"
                        to={section.id}
                      >
                        {t(section.name)}
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={`/#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className="hover:text-[#00FFA3] hover:bg-transparent"
                    >
                      {t(section.name)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/footer_logo.png`}
            alt="Naoris Consulting Logo"
            width={200}
            className="relative z-10"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex h-fit">
        <ul className="menu menu-horizontal px-1 text-white h-full  gap-1">
          {sections.map((section) => (
            <li
              key={section.id}
              className={
                activeSection === section.id
                  ? "active_section"
                  : "not_active_section"
              }
              onClick={() => scrollToSection(section.id)}
            >
              {section.id === "case_studies" ? (
                <>
                  <Link
                    onClick={() => setActiveSection("case_studies")}
                    className={` hover:text-[#00FFA3] hover:bg-transparent bg-none h-full 2xl:text-[18px]`}
                    to={section.id}
                  >
                    {t(section.name)}
                  </Link>
                </>
              ) : (section.id === "media" || section.id === "multimedia") ? (
                <>
                  <Link
                    onClick={() => setActiveSection(section.id)}
                    className={` hover:text-[#00FFA3] hover:bg-transparent bg-none h-full 2xl:text-[18px]`}
                    to={section.id}
                  >
                    {t(section.name)}
                  </Link>
                </>
              ) : section.id === "contact" ? (
                <>
                  <Link
                    to={`/#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`active:bg-transparent active:text-[#00FFA3] hover:text-[#00FFA3] hover:bg-transparent bg-none h-full 2xl:text-[18px] bg-[#171616] rounded-[20px] border-b-2 border-[#00FFA3] p-[10px] `}
                  >
                    {t(section.name)}
                  </Link>
                </>
              ) : (
                <Link
                  to={`/#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`active:bg-transparent active:text-[#00FFA3] hover:text-[#00FFA3] hover:bg-transparent bg-none h-full 2xl:text-[18px]`}
                >
                  {t(section.name)}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="menu menu-horizontal text-white relative z-10 ">
          <li>
            <details>
              <summary>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icon_world.png`}
                ></img>
                Language
              </summary>
              <ul className="p-2 w-[100%]">
                <li>
                  <a
                    className={`${
                      i18n.language == "en" ? "text-[#00FFA3]" : ""
                    }`}
                    onClick={() => changeLanguage("en")}
                  >
                    {" "}
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/us.png`}
                      alt="US flag"
                    />{" "}
                    Ang
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      i18n.language == "fr" ? "text-[#00FFA3]" : ""
                    }`}
                    onClick={() => changeLanguage("fr")}
                  >
                    {" "}
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Fr.png`}
                      alt="FR flag"
                    />{" "}
                    Fr
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
