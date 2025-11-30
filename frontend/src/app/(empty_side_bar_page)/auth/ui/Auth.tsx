"use client";

import { login, register } from "@/app/shared/api/auth/api";
import Loading from "@/app/shared/ui/Loading/Loading";
import UIButton from "@/app/shared/ui/UIButton/UIButton";
import UIInput from "@/app/shared/ui/UIInput/UIInput";
import UILink from "@/app/shared/ui/UILink/UILink";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type AuthParams = {
  username?: string;
  email: string;
  password: string;
};

export default function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login" || mode === null;

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (!mode) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("mode", "login");
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: ({ username, email, password }: AuthParams) =>
      isLogin ? login(email, password) : register(username!, email, password),
    onSuccess: () => {
      router.push("/");
    },
    onError: (err) => {
      console.error(err?.message || "Ошибка при авторизации");
    },
  });

  const handleClick = () => {
    mutation.mutate({ username, email, password });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className="relative z-10 backdrop-blur-xs flex flex-col min-w-[20%] max-h-[50%] min-h-[max-content] rounded-2xl gap-4 bg-white/30 p-3 border-black border-1 transition-all"
    >
      <h1 className="text-[48px] text-center">
        {isLogin ? "Вход" : "Регистрация"}
      </h1>

      <div className="flex flex-col h-[100%] gap-4">
        {!isLogin && (
          <UIInput
            name="login"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <UIInput
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UIInput
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <UILink
        href={isLogin ? "/auth?mode=register" : "/auth?mode=login"}
        className=""
      >
        {isLogin ? "Регистрация" : "Вход"}
      </UILink>

      <UIButton type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? <Loading /> : isLogin ? "Вход" : "Регистрация"}
      </UIButton>
    </form>
  );
}
