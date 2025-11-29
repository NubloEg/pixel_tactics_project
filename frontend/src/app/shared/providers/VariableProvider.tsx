// shared/providers/VariableProvider.tsx
"use client";

import React from "react";
import Image from "next/image";

const PIXEL_SIZES = [
  0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28,
  30, 32, 34, 36, 40, 41, 42, 43, 44, 46, 47, 48, 50, 52, 54, 56, 60, 62, 63,
  64, 65, 66, 69, 70, 72, 78, 80, 86, 96, 108, 128, 137, 140, 142, 150, 160,
  192, 195, 210, 224, 256, 300, 325, 330, 340, 440, 450, 488, 550, 600,
] as const;

type PixelSizes = (typeof PIXEL_SIZES)[number];
type Variables = {
  [K in `Px${PixelSizes}`]: string;
};

interface VariableContextType {
  variables: Variables;
  isLoading: boolean;
}

export const VariableContext = React.createContext<
  VariableContextType["variables"] | undefined
>(undefined);

export const VariableProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [variables, setVariables] = React.useState<Variables>({} as Variables);

  React.useEffect(() => {
    // Создаем объект со всеми переменными
    const variablesValue = PIXEL_SIZES.reduce((acc, size) => {
      const screenWidth = window.innerWidth;
      const vw = (size * 100) / screenWidth;
      const vwValue = `${screenWidth > 2200 ? vw * 1.1 : vw}vw`;
      acc[`Px${size}` as keyof Variables] = vwValue;
      return acc;
    }, {} as Variables);

    setVariables(variablesValue);
    setIsLoading(false);
  }, []);

  return (
    <VariableContext.Provider value={variables}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Image
            src="/loading.gif"
            alt="Loading animation"
            width={64}
            height={64}
            unoptimized
          />
        </div>
      ) : (
        children
      )}
    </VariableContext.Provider>
  );
};
