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
    if (e.deltaY > 0) {
      if (!isAnimating) {
        setIsAnimating(true);
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
    let startAngle = 0; // Kąt początkowy dla poziomu
    let verticalAngle = 60; // Początkowy kąt pionowy
    let dir = 1; // Kierunek obrotu poziomego (1 to w prawo, -1 to w lewo)

    let intervalHorizontal, intervalVertical;

    // Jeśli animacja nie jest aktywna
    if (isAnimating === false) {
      // Animacja pozioma - obracanie w lewo i prawo
      intervalHorizontal = setInterval(() => {
        startAngle += 0.15 * dir; // Zwiększamy kąt

        if (startAngle >= 30 || startAngle <= -30) {
          dir *= -1; // Zmieniamy kierunek obrotu, gdy osiągniemy granice
        }

        // Ustawiamy kamerę z poziomym kątem
        setCameraOrbit(`${startAngle}deg ${verticalAngle}deg auto`);
      }, 100);
    }

    // Jeśli animacja jest aktywna
    if (isAnimating === true) {
      // Animacja pozioma - animacja do kąta 30
      intervalHorizontal = setInterval(() => {
        if (startAngle < 30) {
          setCameraOrbit((prevOrbit) => {
            const currentAngle = parseFloat(prevOrbit.split(" ")[0]); // Pobieramy aktualny kąt poziomy
            const newAngle =
              currentAngle < 30 ? currentAngle + 1 : currentAngle;
            setCameraOrbit(`${newAngle}deg ${verticalAngle}deg auto`);
          });
        } else {
          clearInterval(intervalHorizontal); // Zatrzymujemy animację poziomą po osiągnięciu kąta 30
        }
      }, 50);

      // Animacja pionowa - animacja do kąta 70
      intervalVertical = setInterval(() => {
        if (verticalAngle < 70) {
          verticalAngle += 0.5; // Zwiększamy kąt pionowy
          setCameraOrbit(`${startAngle}deg ${verticalAngle}deg auto`);
        } else {
          clearInterval(intervalVertical); // Zatrzymujemy animację pionową po osiągnięciu kąta 70
        }
      }, 100);
    }

    // Czyszczenie interwałów po zakończeniu
    return () => {
      clearInterval(intervalHorizontal);
      clearInterval(intervalVertical);
    };
  }, [isAnimating]); // Zależność od isAnimating
  return (
    <div className="container-home">
      <div className="home-title">
        <motion.span
          animate={{
            x: direction ? "100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            width: "100%",
          }}
          initial={{ width: 0, x: "0%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2.4 }}
          className="line"
        ></motion.span>

        <motion.h2
          animate={{
            x: direction ? "-110%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            scale: 1,
          }}
          initial={{ scale: 0.1, x: "70%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          AURUM
        </motion.h2>
        <motion.h2
          animate={{
            x: direction ? "110%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            scale: 1,
          }}
          initial={{ scale: 0.1, x: "-70%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          MOTIVATIO
        </motion.h2>

        <motion.span
          animate={{
            x: direction ? "-100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
            width: "100%",
          }}
          initial={{ width: 0, x: "0%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2.4 }}
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
        transition={{ duration: 3.5, ease: "easeInOut" }}
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
