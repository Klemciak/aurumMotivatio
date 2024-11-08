import React, { useState, useEffect } from "react";
import "./Home.scss";
import ScrollDown from "../../components/scroll/scrollDown/scrollDown";
import { motion } from "framer-motion";

const Home = () => {
  // Początkowy stan kąta kamery
  const [cameraOrbit, setCameraOrbit] = useState("0deg 60deg auto");

  useEffect(() => {
    let startAngle = 0;
    let direction = 1;

    const intervalId = setInterval(() => {
      startAngle += 0.15 * direction;

      if (startAngle >= 30 || startAngle <= -30) {
        direction *= -1;
      }
      setCameraOrbit(`${startAngle}deg 60deg auto`);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container-home">
      <div className="home-title">
        <h2>AURUM</h2>
        <h2>MOTIVATIO</h2>
      </div>
      <ScrollDown />
      <div className="skull">
        <model-viewer
          src="./images/skullLepszaJakosc.glb"
          alt="Model czaszki 3D"
          camera-orbit={cameraOrbit} // Dynamicznie ustawione wartości kamery
          // camera-controls
          // auto-rotate
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Home;
