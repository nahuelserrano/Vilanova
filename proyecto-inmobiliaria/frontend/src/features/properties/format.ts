import type { PublicProperty } from "./types";

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

export const PROPERTY_TYPES: string[] = [
  "casa",
  "departamento",
  "local_comercial",
  "campo",
  "lote",
  "quinta",
  "galpon",
  "cabanas_hoteles_otros",
  "fondo_comercio",
  "cochera",
  "al_pozo",
];

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
  if (PROPERTY_TYPE_ACCENTS[key]) return PROPERTY_TYPE_ACCENTS[key];

  return key
    .split("_")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function resolvePropertyTypes(propertyTypes: string[]): string[] {
  return propertyTypes.length > 0 ? propertyTypes : PROPERTY_TYPES;
}

export function flattenSlug(slug: string): string {
  return slug.replaceAll("/", "-");
}

export function slugToId(slug: string): string | undefined {
  return slug.match(/(\d+)$/)?.[1];
}

export function formatFeatures(property: PublicProperty): string {
  const f = property.features;
  const parts: string[] = [];

  if (f.bedrooms != null) parts.push(`${f.bedrooms} dorm.`);
  if (f.bathrooms != null)
    parts.push(`${f.bathrooms} baño${f.bathrooms > 1 ? "s" : ""}`);
  if (f.garage != null) parts.push(`Cochera`);
  if (f.totalSurface != null) parts.push(`${f.totalSurface} m²`);

  return parts.join(" · ");
}
