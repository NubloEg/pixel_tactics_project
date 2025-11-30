import React from "react";
import { Profile } from "./ui/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль",
};

export default function Page() {
  return (
    <React.Suspense fallback={<span>Загрузка...</span>}>
      <Profile />
    </React.Suspense>
  );
}
