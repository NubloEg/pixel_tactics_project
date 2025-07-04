import React from "react";
import s from "./CardField.module.scss";

export default function CardField({
  className,
  order,
}: {
  className?: string;
  order?: number;
}) {
  const translationFN = () => {
    if (order === 1) {
      return { top: "0%", transform: "translate(0, 0)" };
    }
    if (order === 2) {
      return { top: "50%", transform: "translate(0, -50%)" };
    }
    if (order === 3) {
      return { top: "100%", transform: "translate(0, -100%)" };
    }

    return { top: "", transform: "" };
  };
  const translation = translationFN();

  return (
    <div
      className={`w-[8.594vw] h-[12.865vw] flex items-center justify-center transition-all duration-[0.3s] ${className} ${s.CardField}`}
      style={{ top: translation.top, transform: translation.transform }}
    >
    </div>
  );
}
