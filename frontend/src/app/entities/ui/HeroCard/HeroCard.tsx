import React from "react";
import s from "./HeroCard.module.scss";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import backCard from "../../assets/card/CardBack.png";
import mascot from "../../assets/card/MascotPixel.png";
import { LeaderInfo } from "./components/LeaderInfo/LeaderInfo";
import { AbilityHeroCard } from "./components/HeroAbilityCard/HeroAbilityCard";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";
import { CardInfo } from "@/app/store/cardStore";
import { useVariables } from "@/app/shared/hooks/useVariables";
import { scaleVariable } from "../utils/sscaleFn";

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
  const {
    Px340,
    Px488,
    Px12,
    Px4,
    Px3,
    Px26,
    Px69,
    Px78,
    Px13,
    Px15,
    Px142,
    Px300,
    Px325,
    Px108,
  } = useVariables();

  scaleVariable({ px: Px340, scale });

  return (
    <div className={`${s.wrapper}`}>
      <div
        style={{
          width: `${scaleVariable({ px: Px340, scale })}`,
          height: `${scaleVariable({ px: Px488, scale })}`,
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
              borderRadius: `${scaleVariable({ px: Px12, scale })}`,
              border: `${scaleVariable({ px: Px4, scale })} solid black`,
              padding: `${scaleVariable({ px: Px3, scale })} ${scaleVariable({
                px: Px4,
                scale,
              })}`,
              gap: `${scaleVariable({ px: Px4, scale })}`,
            }}
            className={`${s.card}`}
          >
            <HeroInfo heroInfo={heroInfo} scale={scale} />
            <div
              style={{ gap: scaleVariable({ px: Px3, scale }) }}
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
              borderRadius: `${scaleVariable({ px: Px12, scale })}`,
              border: `${scaleVariable({ px: Px4, scale })} solid black`,
              padding: `${scaleVariable({ px: Px3, scale })} ${scaleVariable({
                px: Px4,
                scale,
              })}`,
            }}
            className={s.backCard}
          >
            <Image
              style={{
                width: `${scaleVariable({ px: Px325, scale })}`,
                height: `${scaleVariable({ px: Px108, scale })}`,
              }}
              src={logo}
              alt="hero"
            />

            <Image
              style={{
                width: `${scaleVariable({ px: Px142, scale })}`,
                height: `${scaleVariable({ px: Px300, scale })}`,
              }}
              className="self-center"
              src={backCard}
              alt="hero"
            />
            <div
              style={{
                bottom: scaleVariable({ px: Px15, scale }),
                left: scaleVariable({ px: Px13, scale }),
                width: `calc(100% - ${scaleVariable({ px: Px26, scale })})`,
              }}
              className={s.backCardBottom}
            >
              <Image
                style={{
                  width: scaleVariable({ px: Px69, scale }),
                  height: scaleVariable({ px: Px78, scale }),
                }}
                src={mascot}
                alt="hero"
              />
              <Image
                style={{
                  width: `${scaleVariable({ px: Px69, scale })}`,
                  height: `${scaleVariable({ px: Px78, scale })}`,
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
