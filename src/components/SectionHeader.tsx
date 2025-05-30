import { animate } from "animejs";
import React, { useEffect, useRef } from "react";

const SectionHeader = ({ text, color }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const node = lineRef.current;
    if (!node) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(node, {
            width: ["0%", "30%"],
            easing: "easeOutQuad",
            duration: 900,
          });

          // Optional: unobserve after animation
          observerRef.current?.unobserve(node);
        }
      },
      {
        threshold: 0.1, // adjust based on when you want it to trigger
      }
    );

    observerRef.current.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        ref={lineRef}
        className={`h-0.5 w-1 ${
          color === "white" ? "bg-white" : "bg-blue1"
        } rounded-full flex align-middle`}></div>
      <p style={color === "white" ? { color: "white" } : {}}>{text}</p>
    </div>
  );
};

export default SectionHeader;
