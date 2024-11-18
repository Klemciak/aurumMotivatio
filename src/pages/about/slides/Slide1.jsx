import React from "react";
import "./Slides.scss";
import goldBars from "../../../images/mini-images/gold-bars.png";
import goldIngot from "../../../images/mini-images/ingot.png";
import goldCoin from "../../../images/mini-images/coin.png";
const Slide1 = () => (
  <div className="slide1">
    <div className="slide-style">
      <h3>Kim jesteśmy ?</h3>
      <h4>
        Twoje <img src={goldBars} alt="Złoto" /> - Twoja Przyszłość
      </h4>
      <p>
        Jesteśmy pasjonatami <img src={goldIngot} alt="złota" />, którzy od lat
        zgłębiają jego niezwykłe właściwości. Naszą misją jest promowanie tego
        wyjątkowego metalu jako symbolu stabilności, luksusu i mądrych
        inwestycji. Uważamy, że <img src={goldCoin} alt="złoto" /> to nie tylko
        cenny kruszec, ale również klucz do zrównoważonej przyszłości.
      </p>
    </div>
  </div>
);

export default Slide1;
