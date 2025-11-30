import { mockApiData } from "./server";

export async function baseApi<T>({
  url,
  method,
  data,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: unknown;
}): Promise<T> {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    return mockApiData[url] as T;
  }

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("ошибка");
  }

  return res.json();
}
