import React from "react";

import {SiTypescript} from "react-icons/si";
import {SiNetlify} from "react-icons/si";
import {SiGraphql} from "react-icons/si";
import {SiGit} from "react-icons/si";
import {SiNpm} from "react-icons/si";
import {TbApi } from 'react-icons/tb';
import { AiOutlineConsoleSql } from "react-icons/ai"


export default function OtherSkills() {
  return(
    <div className="front-skills-container">
      <div className="list-container">
      <h3>  Other Skills</h3>
          <p> <SiTypescript /> &nbsp; &nbsp;Typescript </p>
          <p> <SiNetlify/>  &nbsp; &nbsp;Netlify </p>
          <p> <SiGraphql/>  &nbsp; &nbsp;GraphQL  </p>
          <p> <TbApi />&nbsp; &nbsp;  REST API  </p>
          <p> <SiGit/>  &nbsp; &nbsp;Git  </p>
          <p> <SiNpm /> &nbsp; &nbsp;NPM  </p>
          <p> <AiOutlineConsoleSql /> &nbsp; &nbsp;SQL </p>
        </div>

    </div> 
  )
}