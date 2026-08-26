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

const PROPERTY_TYPE_ACCENTS: Record<string, string> = {
  casa: "Casa",
  departamento: "Departamento",
  campo: "Campo",
  local_comercial: "Local comercial",
  lote: "Lote",
  quinta: "Quinta",
  galpon: "Galpón",
  cabanas_hoteles_otros: "Cabañas, hoteles y otros",
  fondo_comercio: "Fondo de comercio",
  cochera: "Cochera",
  al_pozo: "Al pozo",
};

export function formatPropertyType(propertyType: string): string {
  const key = propertyType.trim().toLowerCase();
  return PROPERTY_TYPE_ACCENTS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
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
