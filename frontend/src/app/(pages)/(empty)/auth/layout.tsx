import React from "react";
import Auth from "./Auth";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('/bg/bgAuth.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <Auth>{children}</Auth>
    </div>
  );
}
