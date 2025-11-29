import React, { ReactElement } from "react";

export const UIModal = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactElement;
  isOpen: boolean;
  onClose: (value: boolean) => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => onClose(false)}
          className="flex absolute index-9999999 bg-black/80  w-[100%] h-[100%] top-[0] left-[0] items-center justify-center"
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};
