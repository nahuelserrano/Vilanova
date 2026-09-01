"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { Spinner } from "@/components/ui/Spinner";
import type { Currency, Operation } from "./types";
import { formatPropertyType, resolvePropertyTypes } from "./format";
import { type Bedrooms, buildSearchString, type Filters } from "./filters";

const BEDROOM_OPTIONS: { value: Bedrooms; label: string }[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3plus", label: "3+" },
];

export default function FiltersPanel({
  initialFilters,
  propertyTypes,
}: {
  initialFilters: Filters;
  propertyTypes: string[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [operacion, setOperacion] = useState<Operation | "">(initialFilters.operacion ?? "");
  const [tipo, setTipo] = useState(initialFilters.tipo ?? "");
  const [currency, setCurrency] = useState<Currency>(initialFilters.currency ?? "USD");
  const [minValue, setMinValue] = useState(initialFilters.minValue ?? "");
  const [maxValue, setMaxValue] = useState(initialFilters.maxValue ?? "");
  const [bedrooms, setBedrooms] = useState<Bedrooms | "">(initialFilters.bedrooms ?? "");
  const [garage, setGarage] = useState(initialFilters.garage ?? false);

  function reset() {
    setOperacion("");
    setTipo("");
    setCurrency("USD");
    setMinValue("");
    setMaxValue("");
    setBedrooms("");
    setGarage(false);
    router.push("/propiedades");
  }

  function apply(e: React.FormEvent) {
    e.preventDefault();

    const filters: Filters = {};
    if (operacion) filters.operacion = operacion;
    if (tipo) filters.tipo = tipo;
    if (bedrooms) filters.bedrooms = bedrooms;
    if (garage) filters.garage = true;
    if (minValue) filters.minValue = minValue;
    if (maxValue) filters.maxValue = maxValue;
    if (minValue || maxValue) filters.currency = currency;

    startTransition(() => {
      router.push(`/propiedades${buildSearchString(filters)}`);
    });
  }

  return (
    <form
      onSubmit={apply}
      className="font-inter rounded-2xl border border-line bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-lg font-semibold text-charcoal">
          <SlidersHorizontal className="h-5 w-5 text-charcoal" aria-hidden />
          Filtros
        </span>
        <button
          type="button"
          onClick={reset}
          className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Limpiar
        </button>
      </div>

      <div className="mt-6 space-y-6">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Operación
          </span>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value as Operation)}
            className="w-full cursor-pointer rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
          >
            <option value="">Todas</option>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Tipo de propiedad
          </span>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full cursor-pointer rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
          >
            <option value="">Todos</option>
            {resolvePropertyTypes(propertyTypes).map((type) => (
              <option key={type} value={type}>
                {formatPropertyType(type)}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Precio
          </legend>
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              aria-pressed={currency === "USD"}
              className={`flex-1 cursor-pointer rounded-lg border py-2.5 text-sm font-semibold transition-colors ${
                currency === "USD"
                  ? "border-gold bg-gold text-charcoal"
                  : "border-line bg-cream-soft text-charcoal/70 hover:text-charcoal"
              }`}
            >
              USD
            </button>
            <button
              type="button"
              onClick={() => setCurrency("ARS")}
              aria-pressed={currency === "ARS"}
              className={`flex-1 cursor-pointer rounded-lg border py-2.5 text-sm font-semibold transition-colors ${
                currency === "ARS"
                  ? "border-gold bg-gold text-charcoal"
                  : "border-line bg-cream-soft text-charcoal/70 hover:text-charcoal"
              }`}
            >
              ARS
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              min={0}
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              placeholder="Mínimo"
              className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
            />
            <input
              type="number"
              min={0}
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              placeholder="Máximo"
              className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Dormitorios
          </legend>
          <div className="flex gap-2">
            {BEDROOM_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setBedrooms((current) => (current === option.value ? "" : option.value))}
                aria-pressed={bedrooms === option.value}
                className={`flex-1 cursor-pointer rounded-lg border py-3 text-sm font-semibold transition-colors ${
                  bedrooms === option.value
                    ? "border-gold bg-gold text-charcoal"
                    : "border-line bg-cream-soft text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex cursor-pointer items-center justify-between gap-3">
          <span className="text-sm font-medium text-charcoal">Con garage</span>
          <span className="relative inline-flex">
            <input
              type="checkbox"
              checked={garage}
              onChange={(e) => setGarage(e.target.checked)}
              className="peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-line transition-colors checked:bg-gold"
            />
            <span aria-hidden className="pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-gold mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <Spinner className="h-4 w-4" />
        ) : (
          <Search className="h-4 w-4" aria-hidden />
        )}
        {isPending ? "Aplicando…" : "Aplicar filtros"}
      </button>
    </form>
  );
}
