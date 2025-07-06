"use client";

// import Achievement from "@/entities/ui/Achievement/Achievement";
// import ProfileInfo from "@/shared/ui/ProfileInfo/ProfileInfo";
import { logout } from "@/app/shared/api/auth/api";
import UIButton from "@/app/shared/ui/UIButton/UIButton";
import ProgressBar from "@/shared/ui/ProgressBar/ProgressBar";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import React from "react";

export default function Profile() {
  const profile = {
    name: "Egor",
    rating: 232,
    lvl: {
      value: 2,
      exp: 3000,
      maxExp: 10000,
    },
  };

  async function onClickLogout() {
    await logout();
    location.replace("/auth");
  }

  return (
    <div className="flex flex-col gap-[1.25vw]">
      <div className="bg-gray-300 w-[100%] h-[17.188vw] py-[1.042vw] rounded-[0.625vw] flex justify-center">
        <div className="flex flex-col items-center">
          <UIAvatar isChange size="10.938vw" />
          <span className="text-[1.875vw] leading-[1.875vw] mt-[0.4vw]">
            {profile.name}
          </span>
          <span className="text-[0.875vw] text-gray-500">
            Рейтинг:{profile.rating}
          </span>
        </div>
      </div>
      <div className="bg-gray-300 w-[100%] h-[3.125vw] rounded-[0.625vw] flex items-center px-[0.875vw]">
        <div className="flex-[0.12] text-[1.275vw]">
          Уровень {profile.lvl.value}
        </div>
        <ProgressBar exp={profile?.lvl.exp} maxExp={profile?.lvl.maxExp} />
      </div>
      <div className="flex justify-between">
        {/* {profile.bestInfo.map((info, index) => (
          <ProfileInfo key={index} info={info} />
        ))} */}
      </div>
      <div className="bg-gray-300 w-[100%] py-[0.625vw] px-[0.938vw] flex flex-wrap gap-x-[2.188vw] gap-y-[1.354vw] rounded-[0.625vw]">
        {/* {AllAchievements.map((achivement) => (
          <Achievement
            isDisabled={!profile.achivments.includes(achivement.id)}
            key={achivement.id}
            size="7.292vw"
            achievement={achivement}
          />
        ))} */}
      </div>
      <UIButton onClick={onClickLogout} className="align-bottom" variant="red">
        Выйти
      </UIButton>
    </div>
  );
}
