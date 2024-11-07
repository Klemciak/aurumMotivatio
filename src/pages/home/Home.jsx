import React from "react";
import "./Home.scss";
import mouseDown from "../../images/mouseDown.png";

const Home = () => {
  // Określ kąt startowy w formacie: "[obrót wokół osi X]deg [obrót wokół osi Y]deg [odległość od modelu]"
  const initialCameraOrbit = "0deg 70deg auto"; // 90 stopni wokół osi Y ustawi widok z boku
  return (
    <div className="container-home">
      <div className="home-title">
        <h2>AURUM</h2>
        <h2>MOTIVATIO</h2>
      </div>
      <img src={mouseDown} alt="" />
      <model-viewer
        src="./images/skullLepszaJakosc.glb"
        alt="Model czaszki 3D"
        // camera-controls
        // auto-rotate
        camera-orbit={initialCameraOrbit} // Ustawienie początkowego kąta kamery
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Home;
