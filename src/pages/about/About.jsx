import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./About.scss";
import ScrollDown from "../../components/scroll/scrollUpDown/scrollDown";
import ScrollUp from "../../components/scroll/scrollUpDown/scrollUp";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import left from "../../images/mini-images/slideLeft.png";
import right from "../../images/mini-images/slideRight.png";
const About = () => {
  const [cameraOrbit, setCameraOrbit] = useState("-30deg 70deg auto");
  //---- slider slider
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const prevSlide = () => {
    setSlideIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };
  //---- slider slider

  //======== skull
  const navigate = useNavigate();
  const downRoute = "/courses";
  const upRoute = "/article";

  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  //-------animacja czaszki---------
  let currentAngle = -30;
  const targetAngleDown = 0;
  const targetAngleUp = 30;

  let currentVerticalAngle = 70;
  const targetVerticalAngleDown = 65;
  let intervalHorizontal, intervalVertical;
  //-------animacja czaszki---------

  // Zmienna do przechowywania początkowej pozycji dotyku
  let touchStartY = 0;

  // Obsługa scrolla
  const handleScrollAttempt = (e) => {
    if (e.deltaY > 0 && !isAnimating) {
      startAnimation("down");
    } else if (e.deltaY < 0 && !isAnimating) {
      startAnimation("up");
    }
  };

  // Obsługa dotyku (swipe)
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY; // Początkowa pozycja dotyku
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY;

    // Swipe w dół
    if (touchStartY - touchEndY > 50 && !isAnimating) {
      startAnimation("down");
    }
    // Swipe w górę
    else if (touchEndY - touchStartY > 50 && !isAnimating) {
      startAnimation("up");
    }
  };

  // Funkcja rozpoczynająca animację
  const startAnimation = (dir) => {
    setIsAnimating(true);
    setDirection(dir);

    if (dir === "down") {
      intervalHorizontal = setInterval(() => {
        if (currentAngle < targetAngleDown) {
          currentAngle += 1; // Zwiększamy kąt poziomy
          setCameraOrbit(`${currentAngle}deg ${currentVerticalAngle}deg auto`);
        } else {
          clearInterval(intervalHorizontal);
        }
      }, 100);

      intervalVertical = setInterval(() => {
        if (currentVerticalAngle > targetVerticalAngleDown) {
          currentVerticalAngle += -0.2; // Zmniejszamy kąt pionowy
          setCameraOrbit(`${currentAngle}deg ${currentVerticalAngle}deg auto`);
        } else {
          clearInterval(intervalVertical);
        }
      }, 100);
    } else if (dir === "up") {
      intervalHorizontal = setInterval(() => {
        if (currentAngle < targetAngleUp) {
          currentAngle += 1; // Zwiększamy kąt poziomy
          setCameraOrbit(`${currentAngle}deg ${currentVerticalAngle}deg auto`);
        } else {
          clearInterval(intervalHorizontal);
        }
      }, 50);
    }
  };

  // Funkcja wykonywana po zakończeniu animacji
  const handleAnimationComplete = () => {
    if (direction === "down") {
      navigate(downRoute, { replace: true });
    } else if (direction === "up") {
      navigate(upRoute, { replace: true });
    }

    setIsAnimating(false);
    setDirection(null);
  };

  // Nasłuchiwanie zdarzeń scrolla i swipe
  useEffect(() => {
    window.addEventListener("wheel", handleScrollAttempt);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isAnimating]);
  //======== skull

  return (
    <div className="about">
      <motion.div
        className="about-skull"
        animate={{
          x: direction === "down" ? `-50%` : direction === "up" ? `0` : "-100%",
          opacity: 1,
        }}
        initial={{ x: "-100%" }}
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
      <motion.div
        className="about-slider"
        animate={{
          opacity: direction ? 0 : 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>O nas</h2>
        <div className="slider">
          <button className="prev" onClick={prevSlide}>
            <img src={left} alt="arrow left" />
          </button>
          <motion.div
            className="slide"
            key={slideIndex}
            initial={{
              y: "-10%", // Lekko przekręcony
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              y: 0, // Prostowanie
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7, // Czas trwania animacji
            }}
          >
            {slides[slideIndex]}
          </motion.div>
          <button className="next" onClick={nextSlide}>
            <img src={right} alt="arrow right" />
          </button>
        </div>
      </motion.div>
      <motion.span
        className="about-border-horizontally"
        animate={{
          x: direction ? "-100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
        }}
        initial={{ x: "120%" }} // Początkowa pozycja bez przesunięcia
        transition={{ duration: 2 }}
      ></motion.span>
      <motion.span
        className="about-border-vertically"
        animate={{
          y: direction ? "-100%" : "0%",
        }}
        initial={{ y: "120%" }}
        transition={{ duration: 2 }}
      ></motion.span>
      <motion.div
        animate={{
          opacity: direction ? 0 : 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScrollUp />
        <ScrollDown />
      </motion.div>
    </div>
  );
};

export default About;
