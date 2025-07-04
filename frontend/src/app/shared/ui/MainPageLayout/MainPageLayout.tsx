import { ReactNode } from "react";
import SaidBar from "../SaidBar/SaidBar";
import s from "./MainPageLayout.module.scss";

export default function MainPageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex w-[100vw] h-[100dvh]">
      <SaidBar />
      <div
        className={`${s.wrapper} ${className} w-[100%] h-[100%] overflow-auto p-3 bg-[url('/bg/bgMascot.png')]`}
      >
        {children}
      </div>
    </div>
  );
}
