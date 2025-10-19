import { IAchievement } from "@/app/store/bd";
import { baseApi } from "../baseApi";
import { Profile } from "@/app/store/profileStore";

export async function getUserProfile(): Promise<Profile> {
  return baseApi({ url: "/api/users/profile", method: "GET" });
}

export async function getAllAchivments(): Promise<IAchievement[]> {
  return baseApi({ url: "/api/achivments", method: "GET" });
}
