import Image from "next/image";
import s from "../../HeroCard.module.scss";
//import hero from "../../../../assets/pixelHero/AssassinPixel.png";
//import hero from "../../../../assets/pixelHero/MascotPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";
import heroLabel from "../../../../assets/icons/heroLabel.png";

// 👇 import local font
//import localFont from "next/font/local";
import { CardInfo } from "@/app/store/cardStore";
import { useVariables } from "@/app/shared/hooks/useVariables";
import { scaleVariable } from "../../../utils/sscaleFn";

// //👇 Configure our local font object
// const pixelFontText = localFont({
//   src: "../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
// });
// const pixelFontNumber = localFont({
//   src: "../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
// });

export const HeroInfo = ({
  scale = 1,
  heroInfo,
}: {
  scale: number;
  heroInfo: CardInfo;
}) => {
  const {
    Px24,
    Px70,
    Px66,
    Px40,
    Px50,
    Px10,
    Px46,
    Px42,
    Px43,
    Px22,
    Px12,
    Px48,
    Px47,
    Px41,
    Px44,
  } = useVariables();

  return (
    <div
      style={{
        fontSize: `${scaleVariable({ px: Px24, scale: scale })}`,
        lineHeight: `${scaleVariable({ px: Px24, scale: scale })}`,
        maxHeight: `${scaleVariable({ px: Px70, scale: scale })}`,
      }}
      className={s.heroInfo}
    >
      <Image
        style={{
          height: `${scaleVariable({ px: Px66, scale: scale })}`,
          width: `${scaleVariable({ px: Px40, scale: scale })}`,
        }}
        src={heroInfo.iconHero}
        alt="hero"
      />
      <div
        style={{ paddingLeft: scaleVariable({ px: Px50, scale: scale }) }}
        className="flex flex-1 flex-col"
      >
        {/* style={pixelFontText.style} */}
        <div className="flex ">
          <Image
            style={{
              position: "absolute",
              top: `-${scaleVariable({ px: Px10, scale: scale })}`,
              left: `${scaleVariable({ px: Px46, scale: scale })}`,
              width: `${scaleVariable({ px: Px42, scale: scale })}`,
              height: `${scaleVariable({ px: Px43, scale: scale })}`,
            }}
            src={heroLabel}
            alt="heroLabel"
          />
          <span
            style={{
              fontSize: scaleVariable({ px: Px40, scale: scale }),
              lineHeight: scaleVariable({ px: Px22, scale: scale }),
            }}
          >
            {heroInfo.hero.name}
          </span>
        </div>
        <div
          style={{ gap: scaleVariable({ px: Px12, scale: scale }) }}
          className="flex flex-1 items-center justify-end "
        >
          <div
            style={{
              width: `${scaleVariable({ px: Px48, scale: scale })}`,
              height: `${scaleVariable({ px: Px47, scale: scale })}`,
            }}
            className={`${s.attack} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1] "
              src={attack}
              alt="attack"
            />
            {/* ...pixelFontNumber.style */}
            <span
              style={{
                fontSize: scaleVariable({ px: Px40, scale: scale }),
                lineHeight: scaleVariable({ px: Px22, scale: scale }),
              }}
              className="z-[2] text-[#CA2E21] white-text"
            >
              {heroInfo.hero.attack}
            </span>
          </div>
          <div
            style={{
              width: `${scaleVariable({ px: Px41, scale: scale })}`,
              height: `${scaleVariable({ px: Px44, scale: scale })}`,
            }}
            className={`${s.sheet} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1]"
              src={sheet}
              alt="sheet"
            />
            {/* ...pixelFontNumber.style, */}
            <span
              style={{
                fontSize: scaleVariable({ px: Px40, scale: scale }),
                lineHeight: scaleVariable({ px: Px22, scale: scale }),
              }}
              className="z-[2] text-[#24377D] white-text"
            >
              {heroInfo.hero.sheet}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
