import React from "react";

import './ButtonStyles.css';

export default function CustomButton({children, type="button"}) {

    return(
      <div className="button container">
        <button type={type}> {children} </button>
      </div>
    )
}