"use client";

import React, { Fragment, useState } from "react";
import { UIModal } from "@/shared/ui/UIModal/UIModal";
import ReactDOM from "react-dom";
import assassin from "@/entities/assets/pixelHero/AssassinPixel.png";

import { HeroCardSettings } from "./HeroCardSettings";
import { CardInfo } from "@/app/store/cardStore";

export function HeroCardContainer({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeaderInitial = false;
  const heroInfo: CardInfo = {
    id: id,
    iconHero: assassin,
    hero: {
      name: "Ассасин",
      attack: 3,
      sheet: 1,
      abilitys: {
        vanguard: <span>Базовая сила атаки удваивается против лидеров.</span>,
        flank: (
          <span>
            Базовая сила атаки впередистоящего удваивается против героев
          </span>
        ),
        rear: (
          <span>
            <strong>Заклинание:</strong> нанесите 3 урона лидеру соперника
          </span>
        ),
        order: <span>Любовй герой повержен</span>,
      },
    },
    leader: {
      name: "Регицид Хекетч",
      description: "Специальный Отряд Зачистки",
      attack: 8,
      sheet: 15,
      ability: "ЧТо то атквоатв оатыов лтаывл атыолвтслывт о",
    },
  };

  return (
    <Fragment data-testid="hero-card">
      <HeroCardSettings
        isLeaderInition={isLeaderInitial}
        setIsShow={setIsOpen}
        scale={0.5}
        heroInfo={heroInfo}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <UIModal onClose={setIsOpen}>
            <HeroCardSettings
              heroInfo={heroInfo}
              scale={1.3}
              isLeaderInition={isLeaderInitial}
            />
          </UIModal>,
          document.body
        )}
    </Fragment>
  );
}
