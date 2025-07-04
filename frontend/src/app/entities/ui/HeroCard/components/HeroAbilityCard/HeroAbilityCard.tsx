import { ReactElement } from "react";
import s from "../../HeroCard.module.scss";

// 👇 import local font
import localFont from "next/font/local";
import { AbilityTypeEnum } from "@/entities/models/Card";
import { PxToVw } from "@/app/utils";

//👇 Configure our local font object
// const pixelFontText = localFont({
//   src: "../../../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
// });
const pixelFontNumber = localFont({
  src: "../../../../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
});

export const AbilityHeroCard = ({
  type,
  textAbility = <>Пусто</>,
  iconsAbility = <>Пусто</>,
  scale,
}: {
  type: keyof typeof AbilityTypeEnum;
  textAbility: ReactElement;
  iconsAbility: ReactElement;
  scale: number;
}) => {
  const styles = {
    Vanguard: s.Vanguard,
    Flank: s.Flank,
    Rear: s.Rear,
    Order: s.Order,
  };

  return (
    <div
      style={{
        minHeight: PxToVw({ px: 62, scale: scale }),
        borderRadius: PxToVw({ px: 12, scale: scale }),
        border: `${PxToVw({ px: 5, scale: scale })} solid black`,
        padding: PxToVw({ px: 2, scale: scale }),
        gap: PxToVw({ px: 4, scale: scale }),
      }}
      className={`${s.ability} ${styles[type] || ""}`}
    >
      <div
        style={{
          fontSize: PxToVw({ px: 34, scale: scale }),
          lineHeight: PxToVw({ px: 32, scale: scale }),
        }}
        className={s.iconsAbility}
      >
        {iconsAbility}
      </div>
      {scale >= 1 && (
        <div
          style={{
            ...pixelFontNumber.style,
            fontSize: PxToVw({ px: 8.659, scale: scale }),
          }}
          className={s.discription}
        >
          {textAbility}
        </div>
      )}
    </div>
  );
};
