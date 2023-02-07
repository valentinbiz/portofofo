import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { RiReactjsLine } from "../../../node_modules/react-icons/ri";
import { GrGlobe } from "../../../node_modules/react-icons/gr";
import { SiGithub } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";

import "./CardStyles.css";

export default function Sorting() {
  return (
    <div className="card">
      <div className="additional">
        <div className="user-card">
          <FontAwesomeIcon icon={faSquarePollVertical} size="3x" />
        </div>
        <div className="more-info">
          <div className="info-title">
            <h1> VisualSort </h1>
          </div>
          <div className="info-tech">
            <div className="tech-icons">
              <div className="tech-icon">
                <RiReactjsLine size={20} />
                <h5>ReactJS</h5>
              </div>
              <div className="tech-icon">
                <SiNetlify size={20} />
                <h5>Netlify</h5>
              </div>
              <div className="tech-icon">
                <SiNodedotjs size={20} />
                <h5>NodeJS</h5>
              </div>
              <div className="tech-icon">
                <SiMaterialui size={20} />
                <h5>MaterialUI</h5>
              </div>
            </div>
          </div>

          <div className="info-buttons">
            <a
              href="https://visualgosort.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <GrGlobe size={20} color="black" padding="3px" />{" "}
              <h5>Live Version</h5>
            </a>
            <a
              href="https://github.com/valentinbiz/superwaffle"
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
        <h1>VisualSort</h1>
        <p>
          {" "}
          Visualisation tool built to help better understand how sorting
          algorithms work. Application developed while preparing for the
          technical side of an interwiew. This is still a work in progress, with
          several other algorithms scheduled for the near future.
        </p>
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
}
