import type { Currency, Operation } from "./types";

export type Bedrooms = "1" | "2" | "3plus";

export interface Filters {
  operacion?: Operation;
  tipo?: string;
  currency?: Currency;
  minValue?: string;
  maxValue?: string;
  bedrooms?: Bedrooms;
  garage?: boolean;
}

export type RawSearchParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function parseFilters(searchParams: RawSearchParams): Filters {
  const filters: Filters = {};

  const operacion = first(searchParams.operacion);
  if (operacion === "venta" || operacion === "alquiler") filters.operacion = operacion;

  const tipo = first(searchParams.tipo);
  if (tipo) filters.tipo = tipo;

  const currency = first(searchParams.currency);
  if (currency === "USD" || currency === "ARS") filters.currency = currency;

  const minValue = first(searchParams.minValue);
  if (minValue) filters.minValue = minValue;

  const maxValue = first(searchParams.maxValue);
  if (maxValue) filters.maxValue = maxValue;

  const bedrooms = first(searchParams.bedrooms);
  if (bedrooms === "1" || bedrooms === "2" || bedrooms === "3plus") {
    filters.bedrooms = bedrooms;
  }

  if (first(searchParams.garage) === "true") filters.garage = true;

  return filters;
}

function toParams(filters: Filters, page?: number): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.operacion) params.set("operacion", filters.operacion);
  if (filters.tipo) params.set("tipo", filters.tipo);
  if (filters.currency) params.set("currency", filters.currency);
  if (filters.minValue) params.set("minValue", filters.minValue);
  if (filters.maxValue) params.set("maxValue", filters.maxValue);
  if (filters.bedrooms) params.set("bedrooms", filters.bedrooms);
  if (filters.garage) params.set("garage", "true");
  if (page && page !== 1) params.set("page", String(page));

  return params;
}

function toQuery(filters: Filters, page?: number): Record<string, string | number> {
  const params = toParams(filters, page);
  const query: Record<string, string | number> = {};

  for (const key of params.keys()) {
    const value = params.get(key);
    if (value === null) continue;
    query[key] = key === "minValue" || key === "maxValue" ? Number(value) : value;
  }

  return query;
}

export function buildPropertiesQuery(filters: Filters, page = 1): Record<string, string | number> {
  return toQuery(filters, page);
}

export function buildSearchString(filters: Filters, page?: number): string {
  const qs = toParams(filters, page).toString();
  return qs ? `?${qs}` : "";
}
