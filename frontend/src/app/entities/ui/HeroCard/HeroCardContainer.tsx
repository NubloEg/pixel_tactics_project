"use client";

import React, { useState } from "react";
import { UIModal } from "@/shared/ui/UIModal/UIModal";
import ReactDOM from "react-dom";

import { HeroCardSettings } from "./HeroCardSettings";
import cardStore, { CardInfo } from "@/app/store/cardStore";

export function HeroCardContainer({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeaderInitial = false;
  const heroInfo: CardInfo = cardStore.getCard(id);

  return (
    <>
      <HeroCardSettings
        isLeaderInition={isLeaderInitial}
        setIsShow={setIsOpen}
        scale={0.5}
        heroInfo={heroInfo}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <UIModal isOpen={isOpen} onClose={setIsOpen}>
            <HeroCardSettings
              heroInfo={heroInfo}
              scale={1.3}
              isLeaderInition={isLeaderInitial}
            />
          </UIModal>,
          document.body
        )}
    </>
  );
}
