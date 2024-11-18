import React from "react";
import "./Slides.scss";
import goldPirate from "../../../images/mini-images/pirate-coin.png";
import goldCrown from "../../../images/mini-images/party.png";

const Slide1 = () => (
  <div className="slide3">
    <div className="slide-style">
      <h3>Jak działamy?</h3>
      <h4>
        Eksperci od <img src={goldPirate} alt="złota" />
      </h4>
      <p>
        Wspieramy naszych klientów w odkrywaniu potencjału
        <img src={goldCrown} alt="złota" />. Oferujemy wiedzę na temat jego
        właściwości, możliwości inwestycyjnych oraz kulturowego znaczenia. Każdy
        krok naszej działalności jest oparty na uczciwości i dążeniu do
        najwyższych standardów jakości.
      </p>
    </div>
  </div>
);

export default Slide1;
