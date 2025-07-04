import React from "react";
import s from "./HeroCard.module.scss";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import backCard from "../../assets/card/CardBack.png";
import mascot from "../../assets/card/MascotPixel.png";
import { LeaderInfo } from "./components/LeaderInfo/LeaderInfo";
import { AbilityHeroCard } from "./components/HeroAbilityCard/HeroAbilityCard";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { PxToVw } from "@/app/utils";
import { CardInfo } from "@/app/store/cardStore";

export const HeroCard = ({
  scale = 1,
  isLeader = false,
  switchCard = false,
  heroInfo,
}: {
  scale?: number;
  isLeader: boolean;
  switchCard: boolean;
  heroInfo: CardInfo;
}) => {
  return (
    <div className={`${s.wrapper}`}>
      <div
        style={{
          width: `${PxToVw({ px: 330, scale: scale })}`,
          height: `${PxToVw({ px: 488, scale: scale })}`,
        }}
        className={`${s.flip_card} 
        ${switchCard ? s.switch : s.switchReturn}
        ${isLeader ? s.leader : s.hero}`}
      >
        <div
          style={{
            transform: `rotateY(${switchCard ? `180deg` : `0deg`}) rotateZ(${
              isLeader ? `180deg` : `0deg`
            })`,
          }}
          className={s.flip_card_inner}
        >
          <div
            style={{
              borderRadius: `${PxToVw({ px: 12, scale: scale })}`,
              border: `${PxToVw({ px: 4, scale: scale })} solid black`,
              padding: `${PxToVw({ px: 3, scale: scale })} ${PxToVw({
                px: 4,
                scale: scale,
              })}`,
              gap: `${PxToVw({ px: 4, scale: scale })}`,
            }}
            className={`${s.card}`}
          >
            <HeroInfo heroInfo={heroInfo} scale={scale} />
            <div
              style={{
                gap: PxToVw({ px: 3, scale: scale }),
              }}
              className="flex flex-col"
            >
              <AbilityHeroCard
                type="Vanguard"
                scale={scale}
                textAbility={heroInfo?.hero.abilitys.vanguard}
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                scale={scale}
                type="Flank"
                textAbility={heroInfo?.hero.abilitys.flank}
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                scale={scale}
                type="Rear"
                textAbility={heroInfo?.hero.abilitys.rear}
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                scale={scale}
                type="Order"
                textAbility={heroInfo?.hero.abilitys.order}
                iconsAbility={<>icons</>}
              />
            </div>
            <LeaderInfo heroInfo={heroInfo} scale={scale} />
          </div>
          <div
            style={{
              borderRadius: `${PxToVw({ px: 12, scale: scale })}`,
              border: `${PxToVw({ px: 4, scale: scale })} solid black`,
              padding: `${PxToVw({ px: 3, scale: scale })} ${PxToVw({
                px: 4,
                scale: scale,
              })}`,
            }}
            className={s.backCard}
          >
            <Image
              style={{
                width: `${PxToVw({ px: 325, scale: scale })}`,
                height: `${PxToVw({ px: 108, scale: scale })}`,
              }}
              src={logo}
              alt="hero"
            />

            <Image
              style={{
                width: `${PxToVw({ px: 142, scale: scale })}`,
                height: `${PxToVw({ px: 300, scale: scale })}`,
              }}
              className="self-center"
              src={backCard}
              alt="hero"
            />
            <div
              style={{
                bottom: PxToVw({ px: 15, scale: scale }),
                left: PxToVw({ px: 13, scale: scale }),
                width: `calc(100% - ${PxToVw({ px: 26, scale: scale })})`,
              }}
              className={s.backCardBottom}
            >
              <Image
                style={{
                  width: PxToVw({ px: 69, scale: scale }),
                  height: PxToVw({ px: 78, scale: scale }),
                }}
                src={mascot}
                alt="hero"
              />
              <Image
                style={{
                  width: `${PxToVw({ px: 69, scale: scale })}`,
                  height: `${PxToVw({ px: 78, scale: scale })}`,
                }}
                src={mascot}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
