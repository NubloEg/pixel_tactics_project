import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import UILink from "@/shared/ui/UILink/UILink";
import React from "react";

export default function GameCard(game: {
  id: string;
  title: string;
  player1: string;
  player2: string;
}) {
  return (
    <UILink key={game.id} href={`/game`}>
      <div className="bg-slate-400 w-[13.333vw] h-[max-content] transition-all duration-[0.3s] rounded-[0.625vw]  flex flex-col p-[0.625vw] cursor-pointer hover:bg-slate-500">
        <div className="sgamef-center">{game.title}</div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center gap-[0.208vw]">
            <UIAvatar />
            <div>{game.player1}</div>
          </div>
          <div className="flex flex-col items-center gap-[0.208vw]">
            <UIAvatar />
            <div>{game.player2}</div>
          </div>
        </div>
      </div>
    </UILink>
  );
}
