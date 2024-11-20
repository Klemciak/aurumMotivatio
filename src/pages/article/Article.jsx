import React, { useState, useEffect } from "react";
import "./Article.scss";
import ScrollDown from "../../components/scroll/scrollDown/scrollDown";
import ScrollUp from "../../components/scroll/scrollUp/scrollUp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  const downRoute = "/about";
  const upRoute = "/";

  const [cameraOrbit, setCameraOrbit] = useState("30deg 70deg auto");
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  // Obsługa przewijania (scrolling)
  const handleScrollAttempt = (e) => {
    console.log(e.deltaY);
    if (e.deltaY > 0) {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCameraOrbit("-30deg 70deg auto");
        }, 2000);
        setDirection("down");
      }
    } else if (e.deltaY < 0) {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCameraOrbit("0deg 60deg auto");
        }, 2000);
        setDirection("up");
      }
    }
  };

  useEffect(() => {
    const articleElement = document.getElementById("article");

    articleElement?.addEventListener("wheel", handleScrollAttempt);

    return () => {
      articleElement?.removeEventListener("wheel", handleScrollAttempt);
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

  const togglePopup = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="article" id="article">
        <motion.div
          animate={{
            opacity: direction ? 0 : 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="article-text"
        >
          <h2>Złoto</h2>
          <div className="text">
            <h3>Złoto: Symbol Bogactwa i Pozytywnego Wpływu na Człowieka</h3>
            <p>
              Złoto od tysiącleci fascynuje ludzkość, symbolizując bogactwo,
              siłę oraz prestiż. Jego wartość materialna i symboliczna uczyniła
              z niego przedmiot pożądania oraz inspiracji, a jego wpływ na
              ludzką psychikę i motywację jest zauważalny do dziś. Ten cenny
              metal nie tylko odgrywa rolę w ekonomii, ale też oddziałuje na
              ludzkie postawy i cele. W jaki sposób złoto wpływa na człowieka?
              Co sprawia, że tak mocno działa na naszą motywację? Oto bliższe
              spojrzenie na te zagadnienia.
            </p>

            <h3>1. Złoto jako Symbol Sukcesu</h3>
            <p>
              Złoto symbolizuje sukces, a jego blask od wieków kojarzy się z
              realizacją marzeń. Wiele kultur traktuje złoto jako
              odzwierciedlenie wartości człowieka i jego osiągnięć. Właśnie
              dlatego złoto jest wykorzystywane do nagradzania zwycięzców
              sportowych, np. medalistów olimpijskich, czy wybitnych osiągnięć w
              różnych dziedzinach. W posiadaniu złota ludzie dostrzegają dowód
              swojego sukcesu i spełnienia, co silnie motywuje do dalszej pracy.
            </p>

            <h3>2. Wzrost Pewności Siebie i Motywacji</h3>
            <p>
              Noszenie złota, nawet w postaci biżuterii, potrafi zwiększać
              pewność siebie. Jest to szczególnie widoczne w kulturach, gdzie
              złote ozdoby to znak prestiżu. Biżuteria wykonana ze złota może
              przypominać człowiekowi o jego sukcesach, podkreślając jego
              wyjątkowość. To swoiste odzwierciedlenie wartości, które daje siłę
              do podejmowania kolejnych wyzwań. Widząc złoto jako oznakę
              sukcesu, człowiek motywuje się, by dążyć do większych celów.
            </p>

            <h3>3. Złoto jako Inwestycja w Przyszłość</h3>
            <p>
              Złoto jest stabilnym aktywem inwestycyjnym, cenionym przez wieki.
              W sytuacjach kryzysowych jego wartość pozostaje wysoka, co wpływa
              na poczucie bezpieczeństwa posiadacza. Posiadanie złota daje
              poczucie stabilizacji finansowej, co sprawia, że łatwiej
              podejmować ryzyko, realizować cele czy rozwijać się zawodowo.
              Mając taką zabezpieczającą rezerwę, można skupić się na rozwoju
              osobistym i zawodowym.
            </p>

            <h3>4. Pozytywny Wpływ na Zdrowie i Dobrostan</h3>
            <p>
              W niektórych kulturach uważa się, że złoto ma pozytywne
              właściwości zdrowotne. Starożytni wierzyli, że złoto pomaga w
              leczeniu ran i wzmacnia organizm. Współczesna medycyna stosuje
              złoto w niektórych terapiach, np. w reumatoidalnym zapaleniu
              stawów. Dla osób wierzących w dobroczynne właściwości złota,
              posiadanie go wpływa na zdrowie fizyczne i psychiczne. Przekonanie
              o korzystnym wpływie złota na zdrowie może poprawiać nastrój i
              obniżać poziom stresu.
            </p>

            <h3>5. Złoto jako Inspiracja do Pracy i Rozwoju</h3>
            <p>
              Dla wielu ludzi złoto jest inspiracją do ciężkiej pracy, co
              wywiera pozytywny wpływ na dążenie do sukcesu. W kulturach na
              całym świecie przyjęło się, że złote przedmioty są synonimem
              władzy i mocy, co wywołuje chęć rywalizacji i osiągania wyższych
              pozycji społecznych. Wartość, jaką złoto reprezentuje, motywuje do
              zdobywania wiedzy, rozwijania umiejętności i podnoszenia swoich
              kompetencji zawodowych.
            </p>

            <h3>6. Blask Złota jako Efekt Psychologiczny</h3>
            <p>
              Blask złota ma niezwykły wpływ na psychikę. Jest to kolor, który
              automatycznie przyciąga wzrok i wywołuje pozytywne emocje,
              związane z bogactwem i luksusem. Złoto podnosi samoocenę, pobudza
              do działania i sprawia, że ludzie czują się bardziej wartościowi.
              Posiadanie złota może zwiększać poczucie własnej wartości, co
              wpływa na lepsze samopoczucie i wzmacnia motywację.
            </p>

            <h3>7. Tradycja i Symboliczne Znaczenie Złota</h3>
            <p>
              Złoto odgrywa ogromną rolę w tradycjach i kulturach na całym
              świecie. Jest symbolem trwałości i wartości, które przetrwają
              przez pokolenia. Przekazywanie złota w rodzinie, np. w formie
              biżuterii, symbolizuje kontynuację dziedzictwa. Ta symbolika
              buduje poczucie tożsamości i wzmacnia więzi rodzinne. Utożsamiając
              się z takimi wartościami, człowiek odczuwa silniejszą motywację,
              by podtrzymywać te tradycje i przekazywać je dalej.
            </p>

            <h3>8. Złoto jako Wyraz Prestiżu i Statusu</h3>
            <p>
              Noszenie złota lub posiadanie złotych przedmiotów to wyraz
              statusu. W wielu społeczeństwach ludzie identyfikują się z
              posiadanymi dobrami, a złoto jest symbolem luksusu. Posiadanie
              złota zwiększa poczucie własnej wartości, co często przekłada się
              na większą motywację do osiągania celów. Widok złotych przedmiotów
              może inspirować innych do dążenia do sukcesu i rozwijania swoich
              umiejętności.
            </p>

            <h3>9. Inspiracja i Determinacja w Dążeniu do Bogactwa</h3>
            <p>
              Dla wielu ludzi posiadanie złota jest wyznacznikiem sukcesu
              finansowego. Złoto motywuje ich do inwestowania, oszczędzania i
              osiągania stabilizacji. Jest to także symbol, który przypomina o
              determinacji i ciężkiej pracy. Osoby posiadające złoto są często
              bardziej skłonne do wyznaczania celów i ich realizacji, wiedząc,
              że każdy wysiłek może przynieść podobne, trwałe korzyści.
            </p>

            <h3>10. Złoto a Duchowy Wzrost i Rozwój</h3>
            <p>
              W wielu kulturach złoto ma znaczenie duchowe, symbolizując
              czystość, światło i doskonałość. Widok złota przypomina o dążeniu
              do wyższych wartości oraz wewnętrznego rozwoju. Dzięki tej
              symbolice złoto zachęca do samodoskonalenia i budowania pozytywnej
              postawy życiowej. Złoto jest nie tylko symbolem materialnym, ale
              także inspiracją do pracy nad sobą i wzrostu duchowego.
            </p>

            <h3>Podsumowanie</h3>
            <p>
              Złoto jest znacznie więcej niż tylko cennym metalem - jest
              potężnym symbolem, który od wieków wywiera wpływ na człowieka i
              jego motywację. Z jego pomocą ludzie czują się bardziej pewni
              siebie, zmotywowani, zdeterminowani do działania i duchowego
              rozwoju. Posiadanie złota, jego widok lub nawet samo wyobrażenie,
              może inspirować do ciężkiej pracy, dążenia do sukcesu oraz
              podnoszenia standardów życiowych.
            </p>
          </div>
          <button onClick={togglePopup}>Czytaj więcej</button>
        </motion.div>
        <motion.div
          className="article-skull"
          animate={{
            x:
              direction === "down"
                ? `-100%`
                : direction === "up"
                ? `-50%`
                : "0",
            opacity: 1,
          }}
          initial={{ x: "0" }}
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
        <motion.span
          className="article-border-horizontally"
          animate={{
            x: direction ? "-100%" : "0%", // Jeśli direction jest różne od null, przesuwamy o -100%, w przeciwnym wypadku ustawiamy 0%
          }}
          initial={{ x: "120%" }} // Początkowa pozycja bez przesunięcia
          transition={{ duration: 2 }}
        ></motion.span>
        <motion.span
          className="article-border-vertically"
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

      <div className={`article-popup ${isOpen ? "fade-in" : "fade-out"}`}>
        <h2>Złoto</h2>
        <div className="text">
          <h3>Złoto: Symbol Bogactwa i Pozytywnego Wpływu na Człowieka</h3>
          <p>
            Złoto od tysiącleci fascynuje ludzkość, symbolizując bogactwo, siłę
            oraz prestiż. Jego wartość materialna i symboliczna uczyniła z niego
            przedmiot pożądania oraz inspiracji, a jego wpływ na ludzką psychikę
            i motywację jest zauważalny do dziś. Ten cenny metal nie tylko
            odgrywa rolę w ekonomii, ale też oddziałuje na ludzkie postawy i
            cele. W jaki sposób złoto wpływa na człowieka? Co sprawia, że tak
            mocno działa na naszą motywację? Oto bliższe spojrzenie na te
            zagadnienia.
          </p>

          <h3>1. Złoto jako Symbol Sukcesu</h3>
          <p>
            Złoto symbolizuje sukces, a jego blask od wieków kojarzy się z
            realizacją marzeń. Wiele kultur traktuje złoto jako odzwierciedlenie
            wartości człowieka i jego osiągnięć. Właśnie dlatego złoto jest
            wykorzystywane do nagradzania zwycięzców sportowych, np. medalistów
            olimpijskich, czy wybitnych osiągnięć w różnych dziedzinach. W
            posiadaniu złota ludzie dostrzegają dowód swojego sukcesu i
            spełnienia, co silnie motywuje do dalszej pracy.
          </p>

          <h3>2. Wzrost Pewności Siebie i Motywacji</h3>
          <p>
            Noszenie złota, nawet w postaci biżuterii, potrafi zwiększać pewność
            siebie. Jest to szczególnie widoczne w kulturach, gdzie złote ozdoby
            to znak prestiżu. Biżuteria wykonana ze złota może przypominać
            człowiekowi o jego sukcesach, podkreślając jego wyjątkowość. To
            swoiste odzwierciedlenie wartości, które daje siłę do podejmowania
            kolejnych wyzwań. Widząc złoto jako oznakę sukcesu, człowiek
            motywuje się, by dążyć do większych celów.
          </p>

          <h3>3. Złoto jako Inwestycja w Przyszłość</h3>
          <p>
            Złoto jest stabilnym aktywem inwestycyjnym, cenionym przez wieki. W
            sytuacjach kryzysowych jego wartość pozostaje wysoka, co wpływa na
            poczucie bezpieczeństwa posiadacza. Posiadanie złota daje poczucie
            stabilizacji finansowej, co sprawia, że łatwiej podejmować ryzyko,
            realizować cele czy rozwijać się zawodowo. Mając taką
            zabezpieczającą rezerwę, można skupić się na rozwoju osobistym i
            zawodowym.
          </p>

          <h3>4. Pozytywny Wpływ na Zdrowie i Dobrostan</h3>
          <p>
            W niektórych kulturach uważa się, że złoto ma pozytywne właściwości
            zdrowotne. Starożytni wierzyli, że złoto pomaga w leczeniu ran i
            wzmacnia organizm. Współczesna medycyna stosuje złoto w niektórych
            terapiach, np. w reumatoidalnym zapaleniu stawów. Dla osób
            wierzących w dobroczynne właściwości złota, posiadanie go wpływa na
            zdrowie fizyczne i psychiczne. Przekonanie o korzystnym wpływie
            złota na zdrowie może poprawiać nastrój i obniżać poziom stresu.
          </p>

          <h3>5. Złoto jako Inspiracja do Pracy i Rozwoju</h3>
          <p>
            Dla wielu ludzi złoto jest inspiracją do ciężkiej pracy, co wywiera
            pozytywny wpływ na dążenie do sukcesu. W kulturach na całym świecie
            przyjęło się, że złote przedmioty są synonimem władzy i mocy, co
            wywołuje chęć rywalizacji i osiągania wyższych pozycji społecznych.
            Wartość, jaką złoto reprezentuje, motywuje do zdobywania wiedzy,
            rozwijania umiejętności i podnoszenia swoich kompetencji zawodowych.
          </p>

          <h3>6. Blask Złota jako Efekt Psychologiczny</h3>
          <p>
            Blask złota ma niezwykły wpływ na psychikę. Jest to kolor, który
            automatycznie przyciąga wzrok i wywołuje pozytywne emocje, związane
            z bogactwem i luksusem. Złoto podnosi samoocenę, pobudza do
            działania i sprawia, że ludzie czują się bardziej wartościowi.
            Posiadanie złota może zwiększać poczucie własnej wartości, co wpływa
            na lepsze samopoczucie i wzmacnia motywację.
          </p>

          <h3>7. Tradycja i Symboliczne Znaczenie Złota</h3>
          <p>
            Złoto odgrywa ogromną rolę w tradycjach i kulturach na całym
            świecie. Jest symbolem trwałości i wartości, które przetrwają przez
            pokolenia. Przekazywanie złota w rodzinie, np. w formie biżuterii,
            symbolizuje kontynuację dziedzictwa. Ta symbolika buduje poczucie
            tożsamości i wzmacnia więzi rodzinne. Utożsamiając się z takimi
            wartościami, człowiek odczuwa silniejszą motywację, by podtrzymywać
            te tradycje i przekazywać je dalej.
          </p>

          <h3>8. Złoto jako Wyraz Prestiżu i Statusu</h3>
          <p>
            Noszenie złota lub posiadanie złotych przedmiotów to wyraz statusu.
            W wielu społeczeństwach ludzie identyfikują się z posiadanymi
            dobrami, a złoto jest symbolem luksusu. Posiadanie złota zwiększa
            poczucie własnej wartości, co często przekłada się na większą
            motywację do osiągania celów. Widok złotych przedmiotów może
            inspirować innych do dążenia do sukcesu i rozwijania swoich
            umiejętności.
          </p>

          <h3>9. Inspiracja i Determinacja w Dążeniu do Bogactwa</h3>
          <p>
            Dla wielu ludzi posiadanie złota jest wyznacznikiem sukcesu
            finansowego. Złoto motywuje ich do inwestowania, oszczędzania i
            osiągania stabilizacji. Jest to także symbol, który przypomina o
            determinacji i ciężkiej pracy. Osoby posiadające złoto są często
            bardziej skłonne do wyznaczania celów i ich realizacji, wiedząc, że
            każdy wysiłek może przynieść podobne, trwałe korzyści.
          </p>

          <h3>10. Złoto a Duchowy Wzrost i Rozwój</h3>
          <p>
            W wielu kulturach złoto ma znaczenie duchowe, symbolizując czystość,
            światło i doskonałość. Widok złota przypomina o dążeniu do wyższych
            wartości oraz wewnętrznego rozwoju. Dzięki tej symbolice złoto
            zachęca do samodoskonalenia i budowania pozytywnej postawy życiowej.
            Złoto jest nie tylko symbolem materialnym, ale także inspiracją do
            pracy nad sobą i wzrostu duchowego.
          </p>

          <h3>Podsumowanie</h3>
          <p>
            Złoto jest znacznie więcej niż tylko cennym metalem - jest potężnym
            symbolem, który od wieków wywiera wpływ na człowieka i jego
            motywację. Z jego pomocą ludzie czują się bardziej pewni siebie,
            zmotywowani, zdeterminowani do działania i duchowego rozwoju.
            Posiadanie złota, jego widok lub nawet samo wyobrażenie, może
            inspirować do ciężkiej pracy, dążenia do sukcesu oraz podnoszenia
            standardów życiowych.
          </p>
        </div>
        <button onClick={togglePopup}>X</button>
      </div>
    </>
  );
};

export default Article;
