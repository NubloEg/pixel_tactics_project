import { baseApi } from "../baseApi";

export async function getAllGames(): Promise<
  {
    id: string;
    title: string;
    players: { username: string }[];
  }[]
> {
  return baseApi({ url: "/api/games", method: "GET" });
}

export async function createGame(data: {
  title: string;
  player1: string;
  player2: string;
}): Promise<
  {
    title: string;
    player1: string;
    player2: string;
  }[]
> {
  return baseApi({ url: "/api/games", method: "POST", data });
}
