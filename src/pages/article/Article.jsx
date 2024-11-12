import React from "react";
import "./Article.scss";
import useScrollNavigation from "../../components/scroll/scrollHook/useScrollNavigation";
const Article = () => {
  const downRoute = "/"; // Przykład ścieżki przy przewijaniu w dół
  const upRoute = "/"; // Przykład ścieżki przy przewijaniu w górę

  // Używamy naszego custom hooka z dwoma zmiennymi
  useScrollNavigation(downRoute, upRoute);
  return <div>Article</div>;
};

export default Article;
