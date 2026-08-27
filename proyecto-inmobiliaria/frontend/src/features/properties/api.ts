import { unstable_cache } from "next/cache";
import { API_URL } from "@/lib/env";
import type { PaginatedProperties, PublicProperty } from "./types";


async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${await res.text()}`);
  }

  return res.json() as Promise<T>;
}

export async function getProperties(
  query: Record<string, string | number> = {},
): Promise<PaginatedProperties> {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  }

  const qs = params.toString();
  return request<PaginatedProperties>(`properties${qs ? `?${qs}` : ""}`);
}

export async function getProperty(id: string): Promise<PublicProperty> {
  return request<PublicProperty>(`properties/${id}`);
}

export const getFeaturedProperties = unstable_cache(
  async (): Promise<PaginatedProperties> => getProperties({ page: 1, pageSize: 3 }),
  ["featured-properties"],
  { revalidate: 3600 },
);
