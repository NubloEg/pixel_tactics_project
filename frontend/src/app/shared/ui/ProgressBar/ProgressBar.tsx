"use client";

import React, { useState } from "react";

export default function ProgressBar(lvl: { exp: number; maxExp: number }) {
  const [procentProgressBar, setProcentProgressBar] = useState(0);

  setTimeout(() => {
    const newProcent = (lvl.exp * 100) / lvl.maxExp;
    setProcentProgressBar(newProcent > 100 ? 100 : newProcent);
  }, 100);
  return (
    <div className="border-solid border-gray-500 border-[1px] w-[100%] h-[80%] flex-1 rounded-[4px]">
      <div
        style={{ width: `${procentProgressBar}%` }}
        className={`h-[100%] bg-[#33A7D1] transition-all duration-[0.3s] rounded-[4px]`}
      ></div>
    </div>
  );
}
