import { API_URL } from "@/lib/env";

export interface ContactPayload {
  name: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => null)) as (ContactResponse & {
    message?: string | string[];
  }) | null;

  if (!res.ok) {
    const message = Array.isArray(data?.message)
      ? data.message.join(" ")
      : (data?.message as string | undefined) ?? "";
    throw new Error(message || "No pudimos enviar tu consulta.");
  }

  return data as ContactResponse;
}
