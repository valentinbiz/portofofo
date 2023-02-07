import React from "react";

import { SiTypescript } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiCypress } from "react-icons/si";

export default function OtherSkills() {
  return (
    <div className="front-skills-container">
      <div className="list-container">
        <h3> Other Skills</h3>
        <p>
          {" "}
          <SiTypescript /> &nbsp; &nbsp;Typescript{" "}
        </p>
        <p>
          {" "}
          <SiNetlify /> &nbsp; &nbsp;Netlify{" "}
        </p>
        <p>
          {" "}
          <SiJest /> &nbsp; &nbsp;Jest{" "}
        </p>
        <p>
          {" "}
          <TbApi />
          &nbsp; &nbsp; REST API{" "}
        </p>
        <p>
          {" "}
          <SiGit /> &nbsp; &nbsp;Git{" "}
        </p>
        <p>
          {" "}
          <SiNpm /> &nbsp; &nbsp;NPM{" "}
        </p>
        <p>
          {" "}
          <SiCypress /> &nbsp; &nbsp;Cypress{" "}
        </p>
      </div>
    </div>
  );
}
