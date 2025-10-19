import React from "react";

export default function UIInput({
  placeholder = "Write text...",
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border-solid border-[2px] outline-gray-400 p-[6px] rounded-[8px] text-[18px] ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
