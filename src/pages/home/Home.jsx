import React, { useState, useEffect } from "react";
import "./Home.scss";
import ScrollDown from "../../components/scroll/scrollDown/scrollDown";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const downRoute = "/article";

  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [cameraOrbit, setCameraOrbit] = useState("0deg 60deg auto");
  let intervalId; // Zmienna do przechowywania ID interwału

  // Obsługa przewijania (scrolling)
  const handleScrollAttempt = (e) => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (e.deltaY > 0) {
        setDirection("down");
        if (intervalId) {
          clearInterval(intervalId);
          setTimeout(() => {
            // Zatrzymuje animację obracania czaszki po przewinięciu
            setCameraOrbit("30deg 70deg auto");
          }, 2000);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScrollAttempt);
    return () => window.removeEventListener("wheel", handleScrollAttempt);
  }, [isAnimating]);

  // Funkcja uruchamiana po zakończeniu animacji
  const handleAnimationComplete = () => {
    if (direction === "down") {
      navigate(downRoute, { replace: true });
    }

    setIsAnimating(false);
    setDirection(null);
  };

  // Ustawianie animacji obracania czaszki
  useEffect(() => {
    let startAngle = 0;
    let dir = 1;

    intervalId = setInterval(() => {
      startAngle += 0.15 * dir;
      if (startAngle >= 30 || startAngle <= -30) {
        dir *= -1;
      }
      setCameraOrbit(`${startAngle}deg 60deg auto`);
    }, 100);

    return () => clearInterval(intervalId); // Czyści interwał przy odmontowaniu
  }, []);
  return (
    <div className="container-home">
      <div className="home-title">
        <motion.span
          animate={{
            x: direction ? "100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            width: "100%",
          }}
          initial={{ width: 0, x: "0%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2.8 }}
          className="line"
        ></motion.span>

        <motion.h2
          animate={{
            x: direction ? "-100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            scale: 1,
          }}
          initial={{ scale: 0.1, x: "70%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 4 }}
        >
          AURUM
        </motion.h2>
        <motion.h2
          animate={{
            x: direction ? "100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            scale: 1,
          }}
          initial={{ scale: 0.1, x: "-70%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 4 }}
        >
          MOTIVATIO
        </motion.h2>

        <motion.span
          animate={{
            x: direction ? "-100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            width: "100%",
          }}
          initial={{ width: 0, x: "0%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2.8 }}
          className="underline"
        ></motion.span>
      </div>
      <motion.div
        animate={{
          opacity: direction ? 0 : 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScrollDown />
      </motion.div>
      <motion.div
        className="home-skull"
        animate={{
          x: direction === "down" ? `calc(-50% + 50%)` : "-50%",
          opacity: 1,
        }}
        initial={{ x: "-50%" }}
        transition={{ duration: 3.5 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <model-viewer
          src="./images/compressed_skull.glb"
          alt="Model czaszki 3D"
          camera-orbit={cameraOrbit}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
