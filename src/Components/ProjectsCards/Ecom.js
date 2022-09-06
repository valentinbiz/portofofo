import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { GrGlobe } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import "./CardStyles.css";

export default function Ecom() {
  return (
    <div class="center fourth">
      <div class="card gray">
        <div class="additional">
          <div class="user-card">
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          </div>
          <div class="more-info">
            <div className="info-title">
              <h1> E-Commerce Website </h1>
            </div>

            <div className="info-tech">
              <div className="tech-icons">
                <div className="tech-icon">
                  <SiRedux size={20} />
                  <h5>Redux</h5>
                </div>
                <div className="tech-icon">
                  <SiFirebase size={20} />
                  <h5>Firebase</h5>
                </div>
                <div className="tech-icon">
                  <SiReact size={20} />
                  <h5>ReactJS</h5>
                </div>
                <div className="tech-icon">
                  <SiGraphql size={20} />
                  <h5>GraphQL</h5>
                </div>

                <div className="tech-icon">
                  <SiTypescript size={20} />
                  <h5> Typescript </h5>
                </div>
              </div>
            </div>

            <div className="info-buttons">
              <a href="https://www.google.com/">
                {" "}
                <GrGlobe size={20} color="black" padding="3px" />{" "}
                <h5>Live Version</h5>
              </a>
              <a href="https://www.google.com/">
                {" "}
                <SiGithub size={20} color="black" padding="3px" />{" "}
                <h5>Github Repo</h5>
              </a>
            </div>
          </div>
        </div>
        <div class="general">
          <h2>E-Commerce Website</h2>
          <p>
            {" "}
            <br /> This fully fledged e-commerce website was created to offer
            the possibility of selling architectural models. The project
            comprises of a mix of back-end and front-end technologies to ensure
            the full functionality of the project.
          </p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
