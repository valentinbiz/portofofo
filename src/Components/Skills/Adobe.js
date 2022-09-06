import React from "react";

import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";

export default function Adobe() {
  return (
    <div className="front-skills-container">
      <div className="list-container">
        <h3> Adobe Suite</h3>
        <p>
          {" "}
          <SiAdobexd /> &nbsp;&nbsp;AdobeXD 
        </p>
        <p>
          {" "}
          <SiAdobeaftereffects /> &nbsp;&nbsp;After Effects{" "}
        
        </p>
        <p>
          {" "}
          <SiAdobeillustrator /> &nbsp;&nbsp;Illustrator{" "}
         
        </p>
        <p>
          {" "}
          <SiAdobephotoshop /> &nbsp;&nbsp;Photoshop{" "}
        
        </p>
      </div>
    </div>
  );
}
