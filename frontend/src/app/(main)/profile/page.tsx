"use client";

import Achievement from "@/app/entities/ui/Achievement/Achievement";
// import Achievement from "@/entities/ui/Achievement/Achievement";
// import ProfileInfo from "@/shared/ui/ProfileInfo/ProfileInfo";
import { logout } from "@/app/shared/api/auth/api";
import { getAllAchivments, getUserProfile } from "@/app/shared/api/user/api";
import { useVariables } from "@/app/shared/hooks/useVariables";
import UIButton from "@/app/shared/ui/UIButton/UIButton";
import ProgressBar from "@/shared/ui/ProgressBar/ProgressBar";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Profile() {
  const {
    Px24,
    Px8,
    Px20,
    Px12,
    Px330,
    Px140,
    Px18,
    Px42,
    Px16,
    Px26,
    Px60,
    Px210,
    Px36,
  } = useVariables();

  const {
    data: profile,
    isError: isErrorProfile,
    isLoading: isLoadingProfile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });

  const {
    data: achivements,
    isError: isErrorAchivements,
    isLoading: isLoadingAchivements,
  } = useQuery({
    queryKey: ["achivements"],
    queryFn: getAllAchivments,
  });

  async function onClickLogout() {
    await logout();
    location.replace("/auth");
  }

  if (isLoadingProfile) {
    return <div>Загрузка...</div>;
  }

  if (isErrorProfile || !profile) {
    return <div>Нет данных</div>;
  }

  const styleContainer: React.CSSProperties = {
    gap: Px24,
  };

  const styleBaseInfoContainer: React.CSSProperties = {
    height: Px330,
    paddingTop: Px20,
    paddingBottom: Px20,
    borderRadius: Px12,
  };

  const styleUserName: React.CSSProperties = {
    fontSize: Px36,
    lineHeight: Px36,
    marginTop: Px8,
  };

  const styleUserRating: React.CSSProperties = {
    fontSize: Px16,
  };

  const styleUserLvl: React.CSSProperties = {
    fontSize: Px24,
  };

  const styleProgressBarContainer: React.CSSProperties = {
    height: Px60,
    borderRadius: Px12,
    padding: `0 ${Px16}`,
  };

  const styleAchivContainer: React.CSSProperties = {
    padding: `${Px12} ${Px18}`,
    borderRadius: Px12,
    rowGap: Px26,
    columnGap: Px42,
  };

  return (
    <div style={styleContainer} className="flex flex-col">
      <div
        style={styleBaseInfoContainer}
        className="bg-gray-300 w-[100%]  flex justify-center relative"
      >
        <div className="flex flex-col items-center">
          <UIAvatar image={profile.img} isChange size={Px210} />
          <span style={styleUserName}>{profile.name}</span>
          <span style={styleUserRating} className="text-gray-500">
            Рейтинг:{profile.rating}
          </span>
        </div>
        <UIButton
          onClick={onClickLogout}
          className="absolute right-5"
          style={{ width: "max-content" }}
          variant="red"
        >
          Выйти
        </UIButton>
      </div>
      <div
        style={styleProgressBarContainer}
        className={`bg-gray-300 w-[100%] flex items-center `}
      >
        <div style={styleUserLvl} className="flex-[0.12]">
          Уровень {profile.lvl.value}
        </div>
        <ProgressBar exp={profile?.lvl.exp} maxExp={profile?.lvl.maxExp} />
      </div>
      <div className="flex justify-between">
        {/* {profile.bestInfo.map((info, index) => (
          <ProfileInfo key={index} info={info} />
        ))} */}
      </div>
      <div
        style={styleAchivContainer}
        className={`bg-gray-300 w-[100%] flex flex-wrap `}
      >
        <>
          {isErrorAchivements && <div>Нет Ачивок</div>}
          {!isLoadingAchivements &&
            achivements &&
            achivements.map((achivement) => (
              <Achievement
                isDisabled={!profile.achivments.includes(achivement.id)}
                key={achivement.id}
                size={Px140}
                achievement={achivement}
              />
            ))}
        </>
      </div>
    </div>
  );
}
