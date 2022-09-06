import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

import { GrGlobe } from "react-icons/gr";
import { SiHtml5 } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import "./CardStyles.css";

export default function Productivity() {
  return (
    <div class="center second">
      <div class="card green">
        <div class="additional">
          <div class="user-card">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
          </div>
          <div class="more-info">
            <div className="info-title">
              <h1> Productivity App </h1>
            </div>
            <div className="info-tech">
              <div className="tech-icons">
                <div className="tech-icon">
                  <SiHtml5 size={20} />
                  <h5>HTML</h5>
                </div>
                <div className="tech-icon">
                  <SiSass size={20} />
                  <h5>SCSS</h5>
                </div>
                <div className="tech-icon">
                  <SiNetlify size={20} />
                  <h5> Netlify</h5>
                </div>
                <div className="tech-icon">
                  <TbApi size={20} />
                  <h5> Various API's</h5>
                </div>
              </div>
            </div>

            <div className="info-buttons">
              <a href="https://doitdoneit.netlify.app/" target="_blank"  rel="noreferrer">
                {" "}
                <GrGlobe size={20} color="black" padding="3px" />{" "}
                <h5>Live Version</h5>
              </a>
              <a href="https://github.com/valentinbiz/Productivity" target="_blank"  rel="noreferrer">
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>Github Repo</h5>
              </a>
            </div>
          </div>
        </div>
        <div class="general">
          <h2>Productivity App</h2>
          <p>
            <br /> With procrastination being one of the biggest enemies when
            teaching yourself a new subject, the purpose of this application is
            to maximize productivity while helping you keep track of your daily
            tasks.
          </p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
