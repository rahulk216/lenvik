import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

const Tab = ({ item, onClick }) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (underlineRef.current) {
      animate(underlineRef.current, {
        width: ["0%", "100%"],
        easing: "easeOutQuad",
        duration: 700,
      });
    }

    if (item.isSelected && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [item.isSelected]);

  return (
    <button
      ref={tabRef}
      key={item.id}
      className="flex-col cursor-pointer"
      onClick={() => onClick(Number(item.id))}>
      <span className="text-blue1 font-medium text-lg">{item.title}</span>
      {item.isSelected && (
        <div
          className="h-0.5 w-full bg-blue1 rounded-sm mt-2"
          ref={underlineRef}></div>
      )}
    </button>
  );
};

export default Tab;
