import { makeAutoObservable } from "mobx";

export interface Room {
  id: string;
  title: string;
  player1: string;
  player2: string;
}

class RoomStore {
  gameCards: Room[] = [
    {
      id: "1",
      player1: "Елизавет",
      player2: "Егор",
      title: "Игра 1",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get getGameCards(): Room[] {
    return this.gameCards;
  }

  get isGamePlayer1(): number {
    return this.gameCards.length;
  }

  addGameCard(): void {
    this.gameCards.push({
      id: "2",
      player1: "Маха",
      player2: "Какаха",
      title: "Игра 2",
    });
  }
}

const gameCardsStore = new RoomStore();

export default gameCardsStore;
