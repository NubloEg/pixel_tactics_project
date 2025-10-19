import { mockApiData } from "./server";

export async function baseApi<T>({
  url,
  method,
  data,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: Body;
}): Promise<T> {
  console.log(process.env.NEXT_PUBLIC_USE_MOCK);
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    return mockApiData[url] as T;
  }

  const token = JSON.parse(localStorage.getItem("accessToken") || "");

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("ошибка");
  }

  return res.json();
}
