import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Courses.scss";
import ScrollUp from "../../components/scroll/scrollUpDown/scrollUp";
const Courses = () => {
  const [cameraOrbit, setCameraOrbit] = useState("0deg 65deg auto");
  const [expandedIndex7, setExpandedIndex7] = useState(null);
  const [expandedIndex30, setExpandedIndex30] = useState(null);

  //======== skull
  const navigate = useNavigate();
  const upRoute = "/about";

  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [lookEffect, setLookEffect] = useState(true);

  let currentAngle = 0;
  const targetAngleUp = -30;

  let currentVerticalAngle = 65;
  const targetVerticalAngleUp = 70;
  let intervalHorizontal, intervalVertical;

  // Zmienna do przechowywania początkowej pozycji dotyku
  let touchStartY = 0;

  // Obsługa przewijania (scrolling)
  const handleScrollAttempt = (e) => {
    if (e.deltaY < 0 && !isAnimating) {
      setLookEffect(false);
      startAnimation("up");
    }
  };

  // Obsługa dotyku (swipe)
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY; // Początkowa pozycja dotyku
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY;

    // Swipe w górę
    if (touchEndY - touchStartY > 50 && !isAnimating) {
      setLookEffect(false);
      startAnimation("up");
    }
  };

  // Funkcja rozpoczynająca animację
  const startAnimation = (dir) => {
    setIsAnimating(true);
    setDirection(dir);

    if (dir === "up") {
      intervalHorizontal = setInterval(() => {
        if (currentAngle > targetAngleUp) {
          currentAngle += -1; // Zmniejszamy kąt poziomy
          setCameraOrbit(`${currentAngle}deg ${currentVerticalAngle}deg auto`);
        } else {
          clearInterval(intervalHorizontal);
        }
      }, 100);

      intervalVertical = setInterval(() => {
        if (currentVerticalAngle < targetVerticalAngleUp) {
          currentVerticalAngle += 0.5; // Zwiększamy kąt pionowy
          setCameraOrbit(`${currentAngle}deg ${currentVerticalAngle}deg auto`);
        } else {
          clearInterval(intervalVertical);
        }
      }, 100);
    }
  };

  // Funkcja wykonywana po zakończeniu animacji
  const handleAnimationComplete = () => {
    if (direction === "up") {
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

  /// dodatek
  const look7 = () => {
    setCameraOrbit("30deg 60deg auto");
  };

  const look30 = () => {
    setCameraOrbit("-30deg 60deg auto");
  };

  const resetCamera = () => {
    setCameraOrbit("0deg 65deg auto"); // Stan domyślny
  };

  useEffect(() => {
    if (!lookEffect) return;

    const hoverCourse7 = document.getElementById("offered-7");
    const hoverCourse30 = document.getElementById("offered-30");

    hoverCourse7?.addEventListener("mouseover", look7);
    hoverCourse30?.addEventListener("mouseover", look30);

    hoverCourse7?.addEventListener("mouseout", resetCamera);
    hoverCourse30?.addEventListener("mouseout", resetCamera);

    return () => {
      hoverCourse7?.removeEventListener("mouseover", look7);
      hoverCourse30?.removeEventListener("mouseover", look30);

      hoverCourse7?.removeEventListener("mouseout", resetCamera);
      hoverCourse30?.removeEventListener("mouseout", resetCamera);
    };
  });

  const toggleExpand7 = (index) => {
    setExpandedIndex7((prev) => (prev === index ? null : index));
  };

  const toggleExpand30 = (index) => {
    setExpandedIndex30((prev) => (prev === index ? null : index));
  };
  const course7 = [
    {
      title: "Wprowadzenie do historii złota",
      description: "Wykład o roli złota w różnych kulturach i epokach.",
    },
    {
      title: "Warsztaty: Rozpoznawanie prawdziwego złota",
      description: "Praktyczne zajęcia z identyfikacji i oceny jakości.",
    },
    {
      title: "Zwiedzanie muzeum złota",
      description:
        "Wycieczka po wyjątkowej wystawie na temat historii złotnictwa.",
    },
    {
      title: "Podstawy inwestowania w złoto ",
      description: "Szybki kurs na temat rynków i opcji inwestycyjnych.",
    },
    {
      title: "Hotel i wyżywienie",
      description:
        "Komfortowe zakwaterowanie w 4-gwiazdkowym hotelu z pełnym wyżywieniem.",
    },
    {
      title: "Certyfikat ukończenia kursu",
      description: "Dokument potwierdzający udział i zdobycie wiedzy.",
    },
  ];
  const course30 = [
    {
      title: "Zaawansowane techniki inwestowania",
      description: "Szczegółowe strategie i analizy rynków złota.",
    },
    {
      title: "Ekskluzywne warsztaty jubilerskie",
      description:
        "Tworzenie prostych projektów biżuterii pod okiem ekspertów.",
    },
    {
      title: "Rozpoznawanie i certyfikacja złota",
      description:
        "Dogłębne zajęcia z oceniania jakości złota oraz certyfikowania.",
    },
    {
      title: "Wycieczka do kopalni złota",
      description: "Poznanie procesu wydobycia złota od podstaw.",
    },
    {
      title: "Networking z ekspertami branży",
      description: "Sesje z liderami rynku złota i inwestycji.",
    },
    {
      title: "Ekskluzywne warsztaty finansowe",
      description: "Szkolenia z dywersyfikacji inwestycji.",
    },
    {
      title: "Indywidualne konsultacje",
      description: "Mentoring od ekspertów w dziedzinie złota.",
    },
    {
      title: "Ekskluzywne wydarzenie zamykające",
      description: "Gala w eleganckiej restauracji, wręczenie certyfikatów.",
    },
    {
      title: "Pakiet VIP: Złoty prezent",
      description: "Drobny upominek w postaci złotego medalionu lub monety.",
    },
  ];

  return (
    <div className="courses">
      <motion.h2
        className="courses-title"
        animate={{
          opacity: direction ? 0 : 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        Kursy
      </motion.h2>
      <div className="courses-offered">
        <motion.div
          className="offered-7"
          id="offered-7"
          animate={{
            opacity: direction ? 0 : 1,
            x: direction ? "-100%" : 0,
          }}
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 2 }}
        >
          <h3>
            Kurs 18-karatowy <span>(7-dniowy)</span>
          </h3>
          <ul>
            {course7.map((course, index) => (
              <li key={index} className="course-item">
                <div
                  className="course-title"
                  onClick={() => toggleExpand7(index)}
                >
                  <span>{course.title}</span>
                  <button
                    className="toggle-btn"
                    aria-expanded={expandedIndex7 === index}
                  >
                    {expandedIndex7 === index ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`course-description ${
                    expandedIndex7 === index ? "show" : ""
                  }`}
                >
                  {course.description}
                </div>
              </li>
            ))}
          </ul>
          <div className="join">
            <button>Dołącz</button>
            <span className="price">499 zł</span>
          </div>
        </motion.div>
        <motion.div
          className="offered-30"
          id="offered-30"
          animate={{
            opacity: direction ? 0 : 1,
            x: direction ? "100%" : 0,
          }}
          initial={{ opacity: 0, x: "100%" }}
          transition={{ duration: 2 }}
        >
          <h3>
            Kurs 24-karatowy <span>(30-dniowy)</span>
          </h3>
          <ul>
            {course30.map((course, index) => (
              <li key={index} className="course-item">
                <div
                  className="course-title"
                  onClick={() => toggleExpand30(index)}
                >
                  <span>{course.title}</span>
                  <button
                    className="toggle-btn"
                    aria-expanded={expandedIndex30 === index}
                  >
                    {expandedIndex30 === index ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`course-description ${
                    expandedIndex30 === index ? "show" : ""
                  }`}
                >
                  {course.description}
                </div>
              </li>
            ))}
          </ul>
          <div className="join">
            <button>Dołącz</button>
            <span className="price">1799 zł</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="courses-skull"
        animate={{
          x: direction === "up" ? `-100%` : "-50%",
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
      <motion.div
        animate={{
          opacity: direction ? 0 : 1,
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <ScrollUp />
      </motion.div>
    </div>
  );
};

export default Courses;
