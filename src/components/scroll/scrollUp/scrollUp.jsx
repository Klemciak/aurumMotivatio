import React from "react";
import "./scrollUp.scss";
import mouseUp from "../../../images/mouseUp.png";
const scrollUp = () => {
  return (
    <div className="scrollUp">
      <span>
        scroll
        <br />
        Up
      </span>
      <img src={mouseUp} alt="" />
    </div>
  );
};

export default scrollUp;
