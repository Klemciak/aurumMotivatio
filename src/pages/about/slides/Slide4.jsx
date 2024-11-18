import React from "react";
import "./Slides.scss";
import goldRing from "../../../images/mini-images/ring.png";
import goldStar from "../../../images/mini-images/star-coin.png";
import goldBars from "../../../images/mini-images/gold-bars.png";
import goldIngot from "../../../images/mini-images/ingot.png";
import goldCoin from "../../../images/mini-images/coin.png";
const Slide1 = () => (
  <div className="slide4">
    <div className="slide-style">
      <h3>
        <img src={goldIngot} alt="Złoto" /> dla każdego
      </h3>
      <h4>
        Twoja podróż ze <img src={goldCoin} alt="złotem" /> zaczyna się tutaj
      </h4>
      <p>
        Niezależnie od tego, czy szukasz sposobu na zabezpieczenie oszczędności,
        czy chcesz dowiedzieć się więcej o magicznych właściwościach
        <img src={goldStar} alt="złota" /> - jesteśmy tutaj dla Ciebie.
        <img src={goldBars} alt="Złoto" /> to nasza pasja, a Ty jesteś naszą
        inspiracją. Dołącz do naszej społeczności i pozwól, aby
        <img src={goldRing} alt="złoto" /> odmieniło Twoje życie.
      </p>
    </div>
  </div>
);

export default Slide1;
