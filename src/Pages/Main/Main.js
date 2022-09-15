import React, { useEffect } from "react";

import Lottie from "lottie-web";

import AnimationScroll from "../../Components/Animation/scroll.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

import { HashLink } from "react-router-hash-link";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Main.css";

AOS.init();

export default function Main() {
  let animationContainerScroll = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainerScroll.current,
      animationData: AnimationScroll,
      loop: true,
      speed: 6,
    });

    return () => Lottie.destroy();
  });
  return (
    <section id="main">
      <div className="main-page">
        <div className="text-container">
          <p
            className="first-p"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            {" "}
            Hi, I am Valentin <FontAwesomeIcon
              icon={faHandPointer}
              size="1"
            />{" "}
            <br />{" "}
          </p>
          <h2 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
            I am a self-thought Full Stack Developer, <br /> sports and
            literature enthusiast, <br />
            coffee lover and a die hard The Office fan.
          </h2>
          <HashLink smooth to="/page#section-projects">
            <h4
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="2000"
            >
              {" "}
              check some of my work{" "}
            </h4>
          </HashLink>
        </div>
        <div
          className="footer-animation"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          <div className="scroll-container" ref={animationContainerScroll} />
        </div>
        <div className="background-image">
          <div
            id="background"
            data-aos="zoom-in"
            data-aos-duration="2000"
          ></div>
        </div>
      </div>
    </section>
  );
}
