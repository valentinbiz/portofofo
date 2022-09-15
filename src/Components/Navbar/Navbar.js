import React, { useEffect, useState } from "react";

import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { HiMenu } from "react-icons/hi"



import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Navbar.css";

AOS.init();

export default function Navbar() {
  const [icon, setIcon] = useState(faMoon);

  useEffect(() => {
    const doc = document;
    const menuOpen = doc.querySelector(".menu");
    const menuClose = doc.querySelector(".close");
    const overlay = doc.querySelector(".overlay");

    menuOpen.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });

    menuClose.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });

    const toggleSwitch = document.querySelector('input[type="checkbox"]');

    function changeIcon(event) {
      if (event.target.checked) {
        setIcon(faSun);
      } else {
        setIcon(faMoon);
      }
    }

    function switchTheme(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme);
    toggleSwitch.addEventListener("change", changeIcon);
  });

  return (
    <div className="navbar-container"  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
      <header>
        <p className="logo">
          <HashLink smooth to="/#main" className="logo-name">
            tinek
          </HashLink>
        </p>
        <nav>
          <ul className="nav__links">
            <li>
              <HashLink smooth to="/#projects">
                projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
               
                about
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                contact
              </HashLink>
            </li>
            <div className="theme-switch">

              <input type="checkbox" id="nightmode" />
              <label className="label-icon" htmlFor="nightmode">
  
                <FontAwesomeIcon icon={icon} />
              </label>
            </div>
          </ul>
        </nav>
        <p className="menu cta"> <HiMenu size="30"/></p>
      </header>
      <div id="mobile__menu" className="overlay">
        <p className="close">&times;</p>
        <div className="overlay__content">
          <HashLink smooth to="/#about">
            About{" "}
          </HashLink>
          <HashLink smooth to="/#projects">
            Projects{" "}
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
          <div className="theme-switch">

              <input type="checkbox" id="nightmode" />
              <label className="label-icon" htmlFor="nightmode">
  
                <FontAwesomeIcon icon={icon} />
              </label>{" "}
            </div>
        </div>
      </div>
    </div>
  );
}
