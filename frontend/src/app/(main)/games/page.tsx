"use client";

import React, { useEffect } from "react";
import GameCard from "@/entities/ui/GameCard/GameCard";
import { UIModal } from "@/shared/ui/UIModal/UIModal";
import UIAvatar from "@/app/shared/ui/UIAvatar/UIAvatar";
import UIInput from "@/app/shared/ui/UIInput/UIInput";

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
      <div className="flex flex-wrap gap-4">
        {rooms.length > 0 ? (
          <>
            {rooms.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </>
        ) : null}

        <div
          className="text-white bg-slate-400 w-[13.333vw]  max-h-[175.97px] h-[9.166vw] transition-all duration-[0.3s] rounded-[0.625vw]  flex flex-col p-[0.625vw] justify-center items-center cursor-pointer hover:bg-slate-500"
          onClick={() => setIsOpen(true)}
        >
          Новая игра
        </div>
      </div>
      {isOpen ? (
        <UIModal onClose={setIsOpen}>
          <div className="w-[800px] h-[600px] bg-white rounded-2xl">
            <div className="flex flex-col p-[0.625vw]  gap-[24px] h-[100%]">
              <div className="text-center">
                <UIInput
                  placeholder="Введите название комнаты"
                  className="w-full"
                />
              </div>
              <div className="flex justify-between ">
                <div className="flex flex-col items-center gap-[0.408vw]">
                  <UIAvatar />
                  <div>
                    <UIInput placeholder="Введите название первого игрока" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[0.408vw]">
                  <UIAvatar />
                  <div>
                    <UIInput placeholder="Введите название второго игрока" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UIModal>
      ) : null}
    </>
  );
}
