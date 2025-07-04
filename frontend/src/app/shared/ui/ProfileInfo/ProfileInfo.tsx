import React from "react";
import UIAvatar from "../UIAvatar/UIAvatar";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ProfileInfo({
  info = { value: "—", title: "Некая инфа" },
}: {
  info?: {
    value: string;
    title: string;
    image?: string | StaticImport;
  };
}) {
  return (
    <div className="bg-gray-300 w-[18.646vw] h-[12.344vw] rounded-[0.625vw] flex flex-col items-center px-[1.67vw] py-[1.2vw] gap-[12px] text-center">
      <UIAvatar image={info.image} />
      <div className="text-[1.25vw] leading-[1.25vw]">{info.value}</div>
      <div className="text-[1.05vw] leading-[1.05vw]">{info.title}</div>
    </div>
  );
}
