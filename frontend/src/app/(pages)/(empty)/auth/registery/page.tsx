import UIButton from "@/app/shared/ui/UIButton/UIButton";
import UIInput from "@/app/shared/ui/UIInput/UIInput";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className="text-[48px] text-center">Логин</h1>
      <div className="flex flex-col h-[100%] gap-4">
        <UIInput name="login" placeholder="Логин" />
        <UIInput name="email" type="email" placeholder="Логин" />
        <UIInput name="password" type="password" placeholder="Пароль" />
      </div>
      <Link href="/auth/login">login</Link>

      <UIButton>Регистрация</UIButton>
    </>
  );
}
