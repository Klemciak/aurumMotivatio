import React from "react";

import useScrollNavigation from "../../components/scroll/scrollHook/useScrollNavigation";
const About = () => {
  const downRoute = "/"; // Przykład ścieżki przy przewijaniu w dół
  const upRoute = "/"; // Przykład ścieżki przy przewijaniu w górę

  // Używamy naszego custom hooka z dwoma zmiennymi
  useScrollNavigation(downRoute, upRoute);
  return <div>About</div>;
};

export default About;
