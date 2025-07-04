"uce client";

import React, { useState } from "react";
import { HeroCard } from "./HeroCard";
import UIButton from "@/shared/ui/UIButton/UIButton";
import { CardInfo } from "@/app/store/cardStore";

export const HeroCardSettings = ({
  setIsShow,
  isLeaderInition,
  scale,
  heroInfo,
}: {
  setIsShow?: (value: boolean) => void;
  isLeaderInition: boolean;
  scale: number;
  heroInfo: CardInfo;
}) => {
  const [switchCard, setSwitchCard] = useState<boolean>(false);
  const [isLeader, setIsLeader] = useState<boolean>(isLeaderInition);

  return (
    <div className="relative w-[max-content] h-[max-content]">
      <HeroCard
        heroInfo={heroInfo}
        switchCard={switchCard}
        isLeader={isLeader}
        scale={scale}
      />
      <div className="absolute bg-gray-500/70 top-0 w-[100%] h-[100%] rounded-[.625vw] flex flex-col p-[12px] gap-[8px] transition-all duration-[0.3s] opacity-0 hover:opacity-100">
        <UIButton onClick={() => setSwitchCard((e) => !e)}>Switch</UIButton>
        {!setIsShow && (
          <UIButton onClick={() => setIsLeader((e) => !e)}>Revolt</UIButton>
        )}
        {setIsShow && <UIButton onClick={() => setIsShow(true)}>Show</UIButton>}
      </div>
    </div>
  );
};
