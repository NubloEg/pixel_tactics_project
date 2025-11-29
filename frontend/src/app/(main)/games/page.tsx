"use client";

import React from "react";
import GameCard from "@/entities/ui/GameCard/GameCard";

import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "@/app/shared/api/games/api";
import { CreateGameButton } from "@/app/feature/CreateGameButton/CreateGameButton";

export default function CreateRoom() {
  const { data: games } = useQuery({
    queryKey: ["games"],
    queryFn: getAllGames,
  });

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {games && games.length > 0 ? (
          <>
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </>
        ) : null}
        <CreateGameButton />
      </div>
    </>
  );
}
