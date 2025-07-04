import { API_URL } from "../config";

export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string }> | never {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Ошибка при логине");
  }

  return res.json();
}
