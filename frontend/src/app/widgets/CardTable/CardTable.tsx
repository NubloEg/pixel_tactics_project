"use client";

import { WaveTypeEnum } from "@/entities/models/Card";
import CardField from "@/entities/ui/CardField/CardField";
import React, { useState } from "react";

export default function CardTable({ isLeft }: { isLeft?: boolean }) {
  const [currentWave] = useState<keyof typeof WaveTypeEnum>("Vanguard");

  const indexWave = () => {
    if (currentWave === "Vanguard") {
      return 1;
    } else if (currentWave === "Flank") {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className="items-center flex flex-1 ">
      {!isLeft ? (
        <div className="flex flex-col gap-[2.917vw] mr-[1.667vw]">
          <CardField />
          <CardField />
        </div>
      ) : (
        <div className="mr-[1.354vw] ">
          <div className="flex flex-col gap-[0.417vw] relative ">
            <CardField order={indexWave()} className="absolute" />
            <CardField className="opacity-0 order-1" />
            <CardField className="opacity-0 order-2" />
            <CardField className="opacity-0 order-3" />
          </div>
        </div>
      )}

      <div className="gameSpace">
        <CardField />
        <CardField />
        <CardField />
        <CardField />
        <CardField className="rotate-180" />
        <CardField />
        <CardField />
        <CardField />
        <CardField />
      </div>
      {!isLeft ? (
        <div className=" ml-[1.354vw] ">
          <div className="flex flex-col gap-[0.417vw] relative ">
            <CardField order={indexWave()} className="absolute" />
            <CardField className="opacity-0 order-1" />
            <CardField className="opacity-0 order-2" />
            <CardField className="opacity-0 order-3" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[2.917vw] ml-[1.667vw]">
          <CardField />
          <CardField />
        </div>
      )}
    </div>
  );
}
