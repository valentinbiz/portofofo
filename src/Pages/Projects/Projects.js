import React from "react";

import Sorting from "../../Components/ProjectsCards/Sorting";
import Productivity from "../../Components/ProjectsCards/Productivity";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Projects.css";
import BenchIt from "../../Components/ProjectsCards/BenchIt";
import Falsey from "../../Components/ProjectsCards/Falsey";

AOS.init();

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <div className="projects-container">
          <div data-aos="fade-up" data-aos-duration="1000" className="header">
            <h1> .projects </h1>
          </div>
          <div className="projects-page">
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <div className="sorting">
                <Sorting className="sorting" />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <div className="sorting">
                <BenchIt className="sorting" />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="60"
            >
              <div className="productivity">
                <Productivity />
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="70"
            >
              <div className="ecom">
                <Falsey />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
