import type { PublicProperty } from "./types";

export const WHATSAPP_PHONE = "5492494550518";

export function buildPropertyWhatsAppUrl(property: PublicProperty): string {
  const reference = property.location.address || property.title;
  const message = encodeURIComponent(
    `Hola, quiero consultar por esta propiedad que vi en tu web: ${reference}`,
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
}
