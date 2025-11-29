export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string }> | never {
  if (
    email === "admin" &&
    password === "admin" &&
    process.env.NEXT_PUBLIC_USE_MOCK
  ) {
    const mockToken = "admin";
    document.cookie = `accessToken=${mockToken}; Path=/; SameSite=Lax`;
    return Promise.resolve({ accessToken: mockToken });
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
  if (process.env.NEXT_PUBLIC_USE_MOCK) {
    document.cookie = "name=; Max-Age=0";
    return;
  }

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
