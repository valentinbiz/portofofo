import React from "react";

import Sorting from "../../Components/ProjectsCards/Sorting";
import Productivity from "../../Components/ProjectsCards/Productivity";
import Picture from "../../Components/ProjectsCards/Picture";
import Ecom from "../../Components/ProjectsCards/Ecom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Projects.css";

AOS.init();

export default class Projects extends React.Component {
  render() {
    return (
      <section id="section-projects">
        <div className="projects-container">
          <div data-aos="fade-up" data-aos-duration="2000" className="header">
            <h1> .projects </h1>
          </div>
          <div className="projects-page">
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <div className="sorting">
                <Sorting className="sorting" />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="60"
            >
              <div className="productivity">
                <Productivity />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="70"
            >
              <div className="ecom">
                <Ecom />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="80"
            >
              <div className="pic">
                <Picture />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
