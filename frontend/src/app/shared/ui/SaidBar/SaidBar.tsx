"use client";

import React from "react";
import Image from "next/image";
import logo from "@/entities/assets/Logo.png";
import Link from "next/link";
import UILink from "../UILink/UILink";
import UIButton from "../UIButton/UIButton";
import UIAvatar from "../UIAvatar/UIAvatar";
import { useVariables } from "../../hooks/useVariables";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../api/user/api";

export default function SaidBar() {
  const { Px24, Px16, Px224, Px6, Px195, Px65, Px8, Px60 } = useVariables();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });

  const styleProfileInfo: React.CSSProperties = {
    gap: Px6,
    padding: `${Px6} ${Px8}`,
  };

  return (
    <div
      style={{
        width: Px224,
        paddingTop: Px24,
      }}
      className={`bg-gray-300 flex flex-col gap-[${Px6}] flex-auto justify-between `}
    >
      <Link href="/">
        <Image
          style={{
            width: Px195,
            height: Px65,
          }}
          src={logo}
          alt="hero"
        />
      </Link>
      <nav
        style={{
          padding: Px16,
          gap: Px6,
        }}
        className={`flex flex-[0.8] flex-col justify-self-start`}
      >
        <UILink className={`px-[${Px16}]`} href="/games">
          <UIButton variant="red">Игры</UIButton>
        </UILink>
        <UILink className={`px-[${Px16}]`} href="/">
          <UIButton variant="red">Персонажи</UIButton>
        </UILink>
      </nav>
      <UILink href="/profile">
        <div
          style={styleProfileInfo}
          className={`sidBarProfile flex items-center bg-gray-400  `}
        >
          <UIAvatar image={profile?.img} size={Px60} />
          <div className={`flex flex-col text-[${Px16}]`}>
            <span>{profile?.name}</span>
            <span>{`Уровень ${profile?.lvl.value}`}</span>
          </div>
        </div>
      </UILink>
    </div>
  );
}
