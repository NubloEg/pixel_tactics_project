import { makeAutoObservable } from "mobx";

export interface Profile {
  id: string;
  name: string;
  img: string;
  rating: string;
  lvl: {
    value: number;
    exp: number;
    maxExp: number;
  };
  bestInfo: {
    title: string;
    value: string;
  }[];
  achivments: string[];
}

class ProfileStore {
  private profile: Profile = {
    id: "user-123",
    name: "Иван Иванов",
    img: "https://example.com/profile.jpg",
    rating: "4.8",
    lvl: {
      value: 12,
      exp: 3450,
      maxExp: 50000,
    },
    bestInfo: [
      {
        title: "Сыграно игр",
        value: "14",
      },
      {
        title: "Максимальная разница в рейтинге",
        value: "27",
      },
      {
        title: "Любимый лидер",
        value: "Рыцарь",
      },
      {
        title: "Время самой долгой игры",
        value: "1:10:32",
      },
    ],
    achivments: ["1", "4", "8"],
  };

  constructor() {
    makeAutoObservable(this);
  }

  get getProfile(): Profile {
    return this.profile;
  }
}

const profileStore = new ProfileStore();

export default profileStore;
