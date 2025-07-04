import React from "react";
import Image from "next/image";
import logo from "@/entities/assets/Logo.png";
import Link from "next/link";
import UILink from "../UILink/UILink";
import s from "./SaidBar.module.scss";
import UIButton from "../UIButton/UIButton";
import UIAvatar from "../UIAvatar/UIAvatar";

export default function SaidBar() {
  return (
    <div
      className={`${s.wrapper} bg-gray-300 w-[10.156vw] flex flex-col gap-[0.313vw] flex-auto justify-between`}
    >
      <Link href="/">
        <Image className="h-[60px]" src={logo} alt="hero" />
      </Link>
      <nav className="flex flex-[0.8] flex-col justify-self-start gap-[0.313vw]">
        <UILink className="px-[0.833vw]" href="/">
          <UIButton variant="red">Home</UIButton>
        </UILink>
        {/* <UILink className="px-[0.833vw]" href="/auth/login">
          <UIButton variant="red">SignUp</UIButton>
        </UILink> */}
        <UILink className="px-[0.833vw]" href="/games">
          <UIButton variant="red">Rooms</UIButton>
        </UILink>
      </nav>
      <UILink href="/profile">
        <div className="sidBarProfile flex items-center gap-[0.313vw] bg-gray-400 py-[6px] px-[8px]">
          <UIAvatar size="3.125vw" />
          <div className="flex flex-col text-[0.825vw]">
            <span>Елизавета</span>
            <span>Уровень 1000</span>
          </div>
        </div>
      </UILink>
    </div>
  );
}
