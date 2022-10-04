import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

import { RiReactjsLine } from "../../../node_modules/react-icons/ri";
import { TbApi } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import { GrGlobe } from "react-icons/gr";
import { SiGithub } from "react-icons/si";

import "./CardStyles.css";

export default function Picture() {
  return (
    <div className="center third">
      <div className="card blue">
        <div className="additional">
          <div className="user-card">
            <FontAwesomeIcon icon={faImages} size="3x" />
          </div>
          <div className="more-info">
            <div className="info-title">
              <h1> Picture in Picture </h1>
            </div>
            <div className="info-tech">
              <div className="tech-icons">
                <div className="tech-icon">
                  <RiReactjsLine size={20} color="black" />
                  <h5>ReactJS</h5>
                </div>
                <div className="tech-icon">
                  <TbApi size={20} />
                  <h5>PiP Api</h5>
                </div>
                <div className="tech-icon">
                  <SiNetlify size={20} />
                  <h5> Netlify</h5>
                </div>
              </div>
            </div>
            <div className="info-buttons">
              <a href="https://everythingpip.netlify.app/" target="_blank" rel="noreferrer">
                {" "}
                <GrGlobe size={20} color="black" padding="3px" />{" "}
                <h5>Live Version</h5>
              </a>
              <a href="https://github.com/valentinbiz/everything-pip" target="_blank" rel="noreferrer">
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>Github Repo</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>Picture in Picture</h1>
          <p>
            {" "}
            Application created with the purpose to help people make use
            of their screens in a more efficient way while studying/watching
            tutorials (or just pretending to work). <br />{" "}
          </p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
