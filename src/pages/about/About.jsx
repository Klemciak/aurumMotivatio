import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./About.scss";
import ScrollDown from "../../components/scroll/scrollDown/scrollDown";
import ScrollUp from "../../components/scroll/scrollUp/scrollUp";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import left from "../../images/mini-images/slideLeft.png";
import right from "../../images/mini-images/slideRight.png";
const About = () => {
  const [cameraOrbit, setCameraOrbit] = useState("-30deg 70deg auto");
  //---- slider slider
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
  //---- slider slider

  //======== skull
  //======== skull
  const navigate = useNavigate();
  const downRoute = "/courses";
  const upRoute = "/article";

  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  // Obsługa przewijania (scrolling)
  const handleScrollAttempt = (e) => {
    console.log(e.deltaY);

    if (e.deltaY > 0) {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCameraOrbit("0deg 65deg auto");
        }, 2000);
        setDirection("down");
      }
    } else if (e.deltaY < 0) {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCameraOrbit("30deg 70deg auto");
        }, 2000);
        setDirection("up");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScrollAttempt);

    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
    };
  }, [isAnimating]);

  const handleAnimationComplete = () => {
    if (direction === "down") {
      navigate(downRoute, { replace: true });
    } else if (direction === "up") {
      navigate(upRoute, { replace: true });
    }

    setIsAnimating(false);
    setDirection(null);
  };
  //======== skull
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
