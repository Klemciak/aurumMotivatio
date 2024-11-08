import React from "react";
import "./scrollDown.scss";
import mouseDown from "../../../images/mouseDown.png";
const scrollDown = () => {
  return (
    <div className="scroll">
      <span>
        scroll
        <br />
        down
      </span>
      <img src={mouseDown} alt="" />
    </div>
  );
};

export default scrollDown;
