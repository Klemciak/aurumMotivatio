import React from "react";
import "./Slides.scss";
import goldBars2 from "../../../images/mini-images/gold-bars2.png";
import goldCard from "../../../images/mini-images/money.png";
import goldNeckles from "../../../images/mini-images/neckles.png";
const Slide1 = () => (
  <div className="slide2">
    <div className="slide-style">
      <h3>Nasza misja</h3>
      <h4>
        Blask <img src={goldBars2} alt="złota" />, blask wartości
      </h4>
      <p>
        Naszą misją jest dzielenie się pasją do{" "}
        <img src={goldCard} alt="złota" /> i jego niezwykłych zalet. Wierzymy,
        że <img src={goldNeckles} alt="złoto" /> to nie tylko cenny kruszec, ale
        także symbol bezpieczeństwa, trwałości i elegancji. Pragniemy budować
        świadomość jego wartości, łącząc tradycję z nowoczesnym spojrzeniem na
        świat inwestycji i luksusu.
      </p>
    </div>
  </div>
);

export default Slide1;
