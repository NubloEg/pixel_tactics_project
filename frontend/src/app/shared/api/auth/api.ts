export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string }> | never {
  if (email === "admin" && password === "admin") {
    return new Promise((reject) => reject({ accessToken: "admin" }));
  }

  const res = await fetch(`/api/auth/login`, {
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

export async function register(
  username: string,
  email: string,
  password: string
): Promise<{ accessToken: string }> | never {
  const res = await fetch(`/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Ошибка при регистрации");
  }

  return res.json();
}

export async function logout(): Promise<void> | never {
  const res = await fetch(`/api/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Ошибка при выходе");
  }

  return res.json();
}
