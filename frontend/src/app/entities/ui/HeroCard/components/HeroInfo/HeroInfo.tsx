import Image from "next/image";
import s from "../../HeroCard.module.scss";
//import hero from "../../../../assets/pixelHero/AssassinPixel.png";
//import hero from "../../../../assets/pixelHero/MascotPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";
import heroLabel from "../../../../assets/icons/heroLabel.png";

// 👇 import local font
//import localFont from "next/font/local";
import { PxToVw } from "@/app/utils";
import { CardInfo } from "@/app/store/cardStore";

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
  return (
    <div
      style={{
        fontSize: `${PxToVw({ px: 24, scale: scale })}`,
        lineHeight: `${PxToVw({ px: 24, scale: scale })}`,
        maxHeight: `${PxToVw({ px: 70, scale: scale })}`,
      }}
      className={s.heroInfo}
    >
      <Image
        style={{
          height: `${PxToVw({ px: 66, scale: scale })}`,
          width: `${PxToVw({ px: 40, scale: scale })}`,
        }}
        src={heroInfo.iconHero}
        alt="hero"
      />
      <div
        style={{ paddingLeft: PxToVw({ px: 50, scale: scale }) }}
        className="flex flex-1 flex-col"
      >
        {/* style={pixelFontText.style} */}
        <div className="flex ">
          <Image
            style={{
              position: "absolute",
              top: `-${PxToVw({ px: 10, scale: scale })}`,
              left: `${PxToVw({ px: 46, scale: scale })}`,
              width: `${PxToVw({ px: 42, scale: scale })}`,
              height: `${PxToVw({ px: 43, scale: scale })}`,
            }}
            src={heroLabel}
            alt="heroLabel"
          />
          <span
            style={{
              fontSize: PxToVw({ px: 40, scale: scale }),
              lineHeight: PxToVw({ px: 22, scale: scale }),
            }}
          >
            {heroInfo.hero.name}
          </span>
        </div>
        <div
          style={{ gap: PxToVw({ px: 12, scale: scale }) }}
          className="flex flex-1 items-center justify-end "
        >
          <div
            style={{
              width: `${PxToVw({ px: 48, scale: scale })}`,
              height: `${PxToVw({ px: 47, scale: scale })}`,
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
                fontSize: PxToVw({ px: 40, scale: scale }),
                lineHeight: PxToVw({ px: 22, scale: scale }),
              }}
              className="z-[2] text-[#CA2E21] white-text"
            >
              {heroInfo.hero.attack}
            </span>
          </div>
          <div
            style={{
              width: `${PxToVw({ px: 41, scale: scale })}`,
              height: `${PxToVw({ px: 44, scale: scale })}`,
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
                fontSize: PxToVw({ px: 40, scale: scale }),
                lineHeight: PxToVw({ px: 22, scale: scale }),
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
