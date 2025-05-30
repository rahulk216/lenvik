import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

const AnimatedText = ({ text, type, style, delay }) => {
  const textRef: any = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.textContent.split("");
      textRef.current.innerHTML = letters
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");

      animate(".letter", {
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 750,
        delay: (el, i) => i * delay,
      });
    }
  }, [text]);

  const handleTextType = (type: string, style: string, text: string) => {
    switch (type) {
      case "h1":
        return (
          <h1 className={style} ref={textRef}>
            {text}
          </h1>
        );

      case "p":
        return (
          <p className={style} ref={textRef}>
            {text}
          </p>
        );

      default:
        return null;
    }
  };

  return handleTextType(type, style, text);
};

export default AnimatedText;
