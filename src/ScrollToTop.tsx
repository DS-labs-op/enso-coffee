import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      AOS.refreshHard(); // 🔑 FIX: force AOS to re-detect elements
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
