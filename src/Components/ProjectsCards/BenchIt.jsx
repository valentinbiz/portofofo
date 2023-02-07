import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Axios from "../../logo.svg";
import { SiFirebase } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import "./CardStyles.css";

export default function BenchIt() {
  return (
    <div className="center second">
      <div className="card two">
        <div className="additional">
          <div className="user-card">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
          </div>
          <div className="more-info">
            <div className="info-title">
              <h1> BenchIt </h1>
            </div>
            <div className="info-tech">
              <div className="tech-icons">
                <div className="tech-icon">
                  <SiReact size={20} />
                  <h5>React Native</h5>
                </div>
                <div className="tech-icon">
                  <SiFirebase size={20} />
                  <h5>Firebase</h5>
                </div>
                <div className="tech-icon">
                  <SiCypress size={20} />
                  <h5> Cypress</h5>
                </div>
                <div className="tech-icon">
                  <SiExpo size={20} />
                  <h5> Expo</h5>
                </div>
                <div className="tech-icon">
                  <img src={Axios} alt="axios-icon" />
                  <h5> Axios</h5>
                </div>
                <div className="tech-icon">
                  <TbApi size={20} />
                  <h5> Various API's</h5>
                </div>
              </div>
            </div>

            <div className="info-buttons">
              <a
                href="https://github.com/valentinbiz/benchIt"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>Github Repo</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>BenchIt</h1>
          <p>
            BenchIt is a mobile application created with the mission to combat
            loneliness by connecting individuals in their local community
            through the shared experience of sitting on a bench and discussing.
          </p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
