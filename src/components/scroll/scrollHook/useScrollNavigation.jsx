import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const useScrollNavigation = (routeDown, routeUp) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollAttempt = (e) => {
      if (e.deltaY > 0) {
        navigate(routeDown, { replace: true }); // Scroll w dół - dodaje nową stronę do historii
      } else if (e.deltaY < 0) {
        navigate(routeUp, { replace: true }); // Scroll w górę - dodaje nową stronę do historii
      }
    };

    window.addEventListener("wheel", handleScrollAttempt);

    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
    };
  }, [navigate, routeDown, routeUp]);
};

export default useScrollNavigation;
