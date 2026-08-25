import type { PublicProperty } from "@/lib/types";

export function formatPrice(property: PublicProperty): string {
  const { currency, amount, hidden } = property.price;

  if (hidden) {
    return "Consultar precio";
  }

  const value = amount.toLocaleString("es-AR");
  const currencyLabel = currency === "USD" ? "USD" : "$";

  if (property.operation === "alquiler") {
    return `${currencyLabel} ${value} /mes`;
  }

  return `${currencyLabel} ${value}`;
}

export function formatFeatures(property: PublicProperty): string {
  const f = property.features;
  const parts: string[] = [];

  if (f.rooms != null) parts.push(`${f.rooms} amb.`);
  if (f.totalSurface != null) parts.push(`${f.totalSurface} m²`);
  if (f.bathrooms != null)
    parts.push(`${f.bathrooms} baño${f.bathrooms > 1 ? "s" : ""}`);
  if (f.garage != null) parts.push(`Cochera`);

  return parts.join(" · ");
}
