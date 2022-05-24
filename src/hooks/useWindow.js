// tarayıcının boyutu her değiştiğinde yeni boyutu söyleyen hook
import React, { useEffect, useState } from "react";

const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const changeWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [windowSize]);

  return windowSize;
};

export default useWindow;
