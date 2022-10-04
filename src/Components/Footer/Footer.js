import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStrava } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./FooterStyle.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <ul className="wrapper">
            <li className="icon github">
              <span className="tooltip">Github</span>
              <span>
              <a href="https://github.com/valentinbiz" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              </a>
              </span>
            </li>
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <span>
              <a href="https://www.linkedin.com/in/valentin-b%C3%AEzgan-997410147/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>

              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
              <a href="https://www.instagram.com/valentininimioara/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              </span>
            </li>
            <li className="icon strava">
              <span className="tooltip">Strava</span>
              <span>
                <a href="https://www.strava.com/athletes/11415772" target="_blank" rel="noreferrer"> 
                <FontAwesomeIcon icon={faStrava} />
                </a>
              </span>
            </li>
          </ul>
          <div className="bottom-info">
            <p>
              {" "}
              Made with <FontAwesomeIcon icon={faHeart} /> in Manchester{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
