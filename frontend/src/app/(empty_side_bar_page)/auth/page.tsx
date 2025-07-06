import React, { Suspense } from "react";
import Auth from "./Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

export default function Page() {
  return (
    <div className="bg-[url('/bg/bgAuth.jpg')] bg-cover bg-center h-full flex items-center justify-center">
      <Suspense fallback={<span>Loading...</span>}>
        <Auth />
      </Suspense>
    </div>
  );
}
