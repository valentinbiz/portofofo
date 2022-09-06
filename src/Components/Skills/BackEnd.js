import React from "react";

import "./SkillsStyles.css";

import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function BackEnd() {
  return (
    <div className="front-skills-container">
      <div className="list-container">
        <h3>Back End Skills</h3>
        <p>
          <SiPython /> &nbsp;&nbsp;Python
        </p>
        <p>
          <SiNodedotjs /> &nbsp;&nbsp;NodeJS
        </p>
        <p>
          <SiExpress /> &nbsp;&nbsp;ExpressJS{" "}
        </p>
        <p>
          <SiMongodb /> &nbsp;&nbsp;MongoDB
        </p>
        <p>
          <SiPostgresql /> &nbsp;&nbsp;PostgreSQL
        </p>
      </div>
    </div>
  );
}
