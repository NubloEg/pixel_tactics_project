import React, { Suspense } from "react";
import Auth from "./ui/Auth";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

export default function Page() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <Image
        src="/bg/bgAuth.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <Suspense fallback={<span>Loading...</span>}>
        <Auth />
      </Suspense>
    </div>
  );
}
