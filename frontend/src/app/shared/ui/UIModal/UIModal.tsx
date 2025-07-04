import React, { ReactElement } from "react";

export const UIModal = ({
  children,
  onClose,
}: {
  children: ReactElement;
  onClose: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={() => onClose(false)}
      className="flex absolute index-9999999 bg-black/80  w-[100%] h-[100%] top-[0] left-[0] items-center justify-center"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
