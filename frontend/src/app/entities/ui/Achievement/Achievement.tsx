"use client";

import { IAchievement } from "@/app/store/bd";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Achievement({
  achievement,
  size,
  isDisabled,
  isLock,
}: {
  size?: string;
  achievement?: IAchievement;
  isDisabled?: boolean;
  isLock?: boolean;
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      style={{
        filter: `grayscale(${isDisabled && !isLock ? 1 : 0})`,
        cursor: isLock ? "auto" : "pointer",
      }}
    >
      <UIAvatar
        onClick={() => setIsShow(true)}
        image={
          isLock
            ? "https://i.pinimg.com/736x/6f/df/35/6fdf3511fd3fbdc1a5977e518207b930.jpg"
            : achievement?.icon
        }
        size={size}
      />
      {isShow &&
        !isLock &&
        ReactDOM.createPortal(
          <div
            onClick={() => setIsShow(false)}
            style={{ filter: `grayscale(${isDisabled ? 1 : 0})` }}
            className="flex absolute index-9999999 bg-black/80  w-[100%] h-[100%] top-[0] left-[0] items-center justify-center"
          >
            <div
              className="bg-gradient-to-t to-[#B3DFFE] via-[#307CAB] from-[#270E97] p-[12px] rounded-[12px] flex flex-col items-center max-w-[450px] text-white "
              onClick={(e) => e.stopPropagation()}
            >
              <UIAvatar
                className="bg-transparent rounded-none"
                image={achievement?.icon}
                size={"20rem"}
              />
              <h1 className="text-[2vw] text-center">
                {achievement?.name || "Name achive"}
              </h1>
              <p className="text-gray-400 text-center">
                {achievement?.description ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit rem dolore eligendi saepe, fugit tempora in ea quis
                deserunt enim error nihil asperiores perferendis recusandae quo,
                explicabo, iste dolorum facilis.`}
              </p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
