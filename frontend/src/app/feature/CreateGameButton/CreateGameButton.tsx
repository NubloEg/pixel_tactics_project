import { CreateGameModal } from "@/app/widgets/CreateGameModal/CreateGameModal";
import React from "react";

export const CreateGameButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="text-white bg-slate-400 w-[13.333vw] transition-all text-[0.8vw] duration-[0.3s] rounded-[0.625vw]  flex flex-col p-[0.625vw] justify-center items-center cursor-pointer hover:bg-slate-500"
        onClick={() => setIsOpen(true)}
      >
        Новая игра
      </div>
      <CreateGameModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
