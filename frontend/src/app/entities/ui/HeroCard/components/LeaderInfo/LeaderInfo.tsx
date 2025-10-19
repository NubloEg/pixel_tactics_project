import leaderLabel from "../../../../assets/icons/leaderLabel.png";
import partOne from "../../../../assets/icons/partOne.png";
import Image from "next/image";
//import hero from "../../../../assets/pixelHero/AssassinPixel.png";
//import hero from "../../../../assets/pixelHero/MascotPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";

// 👇 import local font
import localFont from "next/font/local";
import { CardInfo } from "@/app/store/cardStore";
import { useVariables } from "@/app/shared/hooks/useVariables";
import { scaleVariable } from "../../../utils/sscaleFn";

//👇 Configure our local font object
const pixelFontText = localFont({
  src: "../../../../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
});
const pixelFontNumber = localFont({
  src: "../../../../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
});

export const LeaderInfo = ({
  scale,
  heroInfo,
}: {
  scale: number;
  heroInfo: CardInfo;
}) => {
  const {
    Px24,
    Px40,
    Px10,
    Px42,
    Px22,
    Px12,
    Px47,
    Px44,
    Px137,
    Px63,
    Px69,
    Px14,
    Px2,
    Px54,
    Px86,
    Px4,
    Px16,
    Px15,
    Px1,
    Px30,
    Px25,
    Px18,
  } = useVariables();

  return (
    <div
      style={{
        height: scaleVariable({ px: Px137, scale: scale }),
      }}
      className="flex rotate-180"
    >
      <div
        style={{
          width: scaleVariable({ px: Px63, scale: scale }),
        }}
        className="flex flex-col items-start relative justify-end "
      >
        <Image
          style={{
            width: scaleVariable({ px: Px63, scale: scale }),
            height: scaleVariable({ px: Px69, scale: scale }),
            top: `-${scaleVariable({ px: Px14, scale: scale })}`,
            left: `-${scaleVariable({ px: Px2, scale: scale })}`,
          }}
          className="absolute"
          src={leaderLabel}
          alt="leaderLabel"
        />
        <Image
          style={{
            width: scaleVariable({ px: Px54, scale: scale }),
            height: scaleVariable({ px: Px86, scale: scale }),
            marginLeft: `${scaleVariable({ px: Px4, scale: scale })}`,
          }}
          className="z-[2]"
          src={heroInfo.iconHero}
          alt="hero"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div style={pixelFontText.style} className="flex flex-col">
          <span
            style={{
              fontSize: scaleVariable({ px: Px40, scale: scale }),
              lineHeight: scaleVariable({ px: Px22, scale: scale }),
            }}
          >
            {heroInfo.leader.name}
          </span>
          <span
            style={{
              fontSize: scaleVariable({ px: Px16, scale: scale }),
              lineHeight: scaleVariable({ px: Px15, scale: scale }),
              paddingLeft: scaleVariable({ px: Px1, scale: scale }),
            }}
          >
            {heroInfo.leader.description}
          </span>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <Image
            style={{
              width: scaleVariable({ px: Px24, scale: scale }),
              height: scaleVariable({ px: Px30, scale: scale }),
            }}
            src={partOne}
            alt="partOne"
          />
          <div
            style={{
              gap: scaleVariable({ px: Px12, scale: scale }),
            }}
            className="flex items-center justify-between"
          >
            <div
              style={{
                width: scaleVariable({ px: Px47, scale: scale }),
                height: scaleVariable({ px: Px47, scale: scale }),
              }}
              className={` relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={attack}
                alt="attack"
              />
              <span
                style={{
                  ...pixelFontNumber.style,
                  fontSize: scaleVariable({ px: Px40, scale: scale }),
                  lineHeight: scaleVariable({ px: Px25, scale: scale }),
                }}
                className=" z-[2] white-text text-[#CA2E21] "
              >
                {heroInfo.leader.attack}
              </span>
            </div>
            <div
              style={{
                width: scaleVariable({ px: Px42, scale: scale }),
                height: scaleVariable({ px: Px44, scale: scale }),
              }}
              className={`relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={sheet}
                alt="sheet"
              />
              <span
                style={{
                  ...pixelFontNumber.style,
                  fontSize: scaleVariable({ px: Px40, scale: scale }),
                  lineHeight: scaleVariable({ px: Px25, scale: scale }),
                }}
                className=" z-[2] white-text text-[#24377D] "
              >
                {heroInfo.leader.sheet}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            ...pixelFontText.style,
            fontSize: scaleVariable({ px: Px18, scale: scale }),
            lineHeight: scaleVariable({ px: Px10, scale: scale }),
          }}
          className="tracking-[0.036vw] flex-1"
        >
          {heroInfo.leader.ability}
        </div>
      </div>
    </div>
  );
};
