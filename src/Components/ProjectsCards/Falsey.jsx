import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { SiReact } from "react-icons/si";
import { SiJest } from "react-icons/si";

import { SiPostgresql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { SiNetlify } from "react-icons/si";

import Axios from "../../logo.svg";

import "./CardStyles.css";

export default function Falsey() {
  return (
    <div className="center second">
      <div className="card four">
        <div className="additional">
          <div className="user-card">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
          </div>
          <div className="more-info">
            <div className="info-title">
              <h1> !falsey News </h1>
            </div>
            <div className="info-tech">
              <div className="tech-icons">
                <div className="tech-icon">
                  <SiNodedotjs size={20} />
                  <h5>Node.js</h5>
                </div>
                <div className="tech-icon">
                  <SiJest size={20} />
                  <h5>Jest</h5>
                </div>
                <div className="tech-icon">
                  <SiNetlify size={20} />
                  <h5> Netlify</h5>
                </div>
                <div className="tech-icon">
                  <SiPostgresql size={20} />
                  <h5> PostgreSQL</h5>
                </div>
                <div className="tech-icon">
                  <img src={Axios} alt="axios-icon" />
                  <h5> Axios</h5>
                </div>{" "}
                <div className="tech-icon">
                  <SiReact size={20} />
                  <h5> ReactJS</h5>
                </div>
              </div>
            </div>

            <div className="info-buttons">
              <a
                href="https://github.com/valentinbiz/news-api"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>API Repo</h5>
              </a>
              <a
                href="https://github.com/valentinbiz/news-fe"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>!falsey Repo</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>!falsey News</h1>
          <p>
            Articles application created to test a news API developed as a
            project while being a trainee software developer in the Northcoders
            bootcamp.
          </p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
