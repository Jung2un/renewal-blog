import { useEffect, useState } from "react";

export function useWindowWidth() {
    const [width, setWidth] = useState(0);
    const isMobile = width < 540;
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
  }