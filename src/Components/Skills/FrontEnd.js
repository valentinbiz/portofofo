import React from "react";

import { SiRedux } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiGatsby } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiSemanticuireact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";


export default function FrontEnd() {
  return(
    <div className="front-skills-container">
      <div className="list-container">
      <h3>Front End Skills </h3>
          <p> <RiReactjsLine />&nbsp;&nbsp;ReactJS </p>
          <p> <SiRedux />&nbsp;&nbsp; Redux  </p>
          <p> <SiGatsby /> &nbsp;&nbsp;GatsbyJS  </p>
          <p> <SiBootstrap /> &nbsp;&nbsp;Bootstrap </p>
          <p> <SiStyledcomponents/> &nbsp;&nbsp;StyledComponent</p>
          <p> <SiSemanticuireact /> &nbsp;&nbsp;SemanticUI</p>
          <p> <SiTailwindcss /> &nbsp;&nbsp;TailwindCSS </p>
          <p> <FaSass />&nbsp;&nbsp; SCSS/SASS </p>        
          </div>

    </div> 
  )
}