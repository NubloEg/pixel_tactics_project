import { ReactElement } from "react";
import s from "../../HeroCard.module.scss";

// 👇 import local font
import localFont from "next/font/local";
import { AbilityTypeEnum } from "@/entities/models/Card";
import { useVariables } from "@/app/shared/hooks/useVariables";
import { scaleVariable } from "../../../utils/sscaleFn";

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

  const { Px12, Px62, Px2, Px5, Px4, Px34, Px32, Px9 } = useVariables();

  return (
    <div
      style={{
        minHeight: scaleVariable({ px: Px62, scale: scale }),
        borderRadius: scaleVariable({ px: Px12, scale: scale }),
        border: `${scaleVariable({ px: Px5, scale: scale })} solid black`,
        padding: scaleVariable({ px: Px2, scale: scale }),
        gap: scaleVariable({ px: Px4, scale: scale }),
      }}
      className={`${s.ability} ${styles[type] || ""}`}
    >
      <div
        style={{
          fontSize: scaleVariable({ px: Px34, scale: scale }),
          lineHeight: scaleVariable({ px: Px32, scale: scale }),
        }}
        className={s.iconsAbility}
      >
        {iconsAbility}
      </div>
      {scale >= 1 && (
        <div
          style={{
            ...pixelFontNumber.style,
            fontSize: scaleVariable({ px: Px9, scale: scale }),
          }}
          className={s.discription}
        >
          {textAbility}
        </div>
      )}
    </div>
  );
};
