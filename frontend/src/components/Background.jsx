import React from "react";
import background from "../assets/background-mustang.png";
import "./Background.css";

function Background() {
  return (
    <div className="conteneur">
      <img className="bg" src={background} alt="mustang" />
    </div>
  );
}

export default Background;
