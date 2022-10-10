import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import FrontEnd from "../../Components/Skills/FrontEnd";
import BackEnd from "../../Components/Skills/BackEnd";
import OtherSkills from "../../Components/Skills/OtherSkills";
import Adobe from "../../Components/Skills/Adobe";

import { TbExternalLink } from "react-icons/tb";

import "./About.css";

AOS.init();

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="about-page">
          <div className="header" data-aos="fade-up" data-aos-duration="1000">
            <h1> .about </h1>
          </div>
          <div className="about-me">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              A few things about me
            </h2>
            <h3 data-aos="fade-up" data-aos-duration="1000">
              I am a self taught{" "}
              <strong className="highlighted-text">Full Stack Developer</strong>
              . With a huge passion for technology and IT ever since a very
              young age, I have started teaching myself programming in my spare
              time, building different sized projects in order to expand my
              knowledge. All this while drinking ungodly amounts of coffee.{" "}
              <br />
              <br />I am a{" "}
              <strong className="highlighted-text">
                dedicated, responsible and commited{" "}
              </strong>{" "}
              person, always focused on bringing out the best in myself and
              people around me. <br />
              <br /> Although I consider myself language agnostic, I am
              currently using{" "}
              <strong className="highlighted-text">Javascript</strong> and{" "}
              <strong className="highlighted-text">Python</strong> in most of my
              projects. I am also interested in
              <strong className="highlighted-text"> UI/UX </strong>,{" "}
              <strong className="highlighted-text">cloud </strong> technologies
              and platforms, <strong className="highlighted-text">Agile</strong>{" "}
              and <strong className="highlighted-text">TDD</strong> principles.
              On this page you can see some of my favourite tools to work with.{" "}
            </h3>
            <div
              className="cv"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              {" "}
              <h4>
                {" "}
                <br /> <br />
                For more information about my studies and experience, please
                check the attached CV{" "}
                <a
                  href="https://drive.google.com/file/d/1ZDUXVNFMJ6_5Pqa0MkqwaNb8ZMtQLrtC/view?usp=sharing"
                  className="cv-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong className="highlighted-text">
                    here. <TbExternalLink />
                  </strong>{" "}
                </a>{" "}
              </h4>
            </div>
          </div>

          <div
            className="front-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <FrontEnd />
          </div>
          <div
            className="back-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <BackEnd />
          </div>
          <div
            className="other-skills"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <OtherSkills />
          </div>
          <div
            className="adobe"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <Adobe />
          </div>
        </div>
      </section>
    );
  }
}
