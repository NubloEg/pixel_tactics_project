"use client";

import React, { useEffect } from "react";
import GameCard from "@/entities/ui/GameCard/GameCard";
import { UIModal } from "@/shared/ui/UIModal/UIModal";

export default function CreateRoom() {
  useEffect(() => {}, []);
  const [isOpen, setIsOpen] = React.useState(false);

  const rooms: {
    id: string;
    title: string;
    player1: string;
    player2: string;
  }[] = [
    {
      id: "1",
      player1: "Egor",
      player2: "Лиза",
      title: "Игра 1",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-4 min-h-[100%]">
        {rooms.length > 0 ? (
          <>
            {rooms.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </>
        ) : null}

        <div
          className="text-white bg-slate-400 w-[13.333vw] h-[9.163vw] transition-all duration-[0.3s] rounded-[0.625vw]  flex flex-col p-[0.625vw] justify-center items-center cursor-pointer hover:bg-slate-500"
          onClick={() => setIsOpen(true)}
        >
          Новая игра
        </div>
      </div>
      {isOpen ? (
        <UIModal onClose={setIsOpen}>
          <div className="w-[500px] h-[400px] bg-white rounded-2xl"></div>
        </UIModal>
      ) : null}
    </>
  );
}
