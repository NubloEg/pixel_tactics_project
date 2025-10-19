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
  private profile: Profile | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get getProfile(): Profile | null {
    return this.profile;
  }
}

const profileStore = new ProfileStore();

export default profileStore;
