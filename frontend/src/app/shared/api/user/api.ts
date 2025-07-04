import { API_URL } from "../config";

export async function getUserProfile() {
  const token = JSON.parse(localStorage.getItem("accessToken") || "");

  const res = await fetch(`${API_URL}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("ошибка");
  }

  return res.json();
}
