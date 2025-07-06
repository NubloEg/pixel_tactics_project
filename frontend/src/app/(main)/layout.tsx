import React from "react";
import MainPageLayout from "../shared/ui/MainPageLayout/MainPageLayout";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainPageLayout> {children}</MainPageLayout>;
}
