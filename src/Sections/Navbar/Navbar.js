import React, { useEffect, useState, useRef } from "react";
import './Navbar.css';
import logo from "../../assets/logo.png";
import US from "../../assets/us.png";
import FR from "../../assets/Fr.png";

const Navbar = ({ sections, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 
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
      setActiveSection(currentActiveSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
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
  return (
    <div className="navbar bg-[#110F48] xl:px-28 lg:px-20 md:px-16 sm:px-10 px-[10px]">
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
              style={{width: "25px",
                height: "25px",
                color: "white"}}
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
                  <a className="hover:text-[#00FFA3] hover:bg-transparent">
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="/">
          <img src={logo} width={140} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex h-full">
        <ul className="menu menu-horizontal px-1 gap-4 text-white h-full">
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeSection === section.id ? "h-full active_section" : "active_section"}
              onClick={() => scrollToSection(section.id)}
            >
              <a className={`hover:text-[#00FFA3] hover:bg-transparent h-full`}>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal text-white">
          <li>
            <details>
              <summary>Language</summary>
              <ul className="p-2 w-[100%]">
                <li>
                  <a>
                    {" "}
                    <img src={US} /> Ang
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <img src={FR} /> Fr
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
