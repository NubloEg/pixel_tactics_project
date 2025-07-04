"use client";

import React from "react";

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [login, setLogin] = React.useState("");
  // const [password, setPassword] = React.useState("");

  return (
    <form className="flex flex-col min-w-[30%] max-h-[50%] min-h-[max-content] rounded-2xl gap-4 bg-gray-400 bg-opacity-80 p-3">
      {children}
    </form>
  );
}
