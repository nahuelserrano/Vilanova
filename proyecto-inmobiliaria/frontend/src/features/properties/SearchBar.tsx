"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import type { Currency, Operation } from "./types";
import { formatPropertyType, PROPERTY_TYPES } from "./format";
import { buildSearchString, type Filters } from "./filters";

export default function SearchBar() {
  const router = useRouter();

  const [operacion, setOperacion] = useState<Operation | "">("");
  const [tipo, setTipo] = useState("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [maxValue, setMaxValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const filters: Filters = {};
    if (operacion) filters.operacion = operacion;
    if (tipo) filters.tipo = tipo;
    if (maxValue) filters.maxValue = maxValue;
    if (maxValue) filters.currency = currency;

    router.push(`/properties${buildSearchString(filters)}`);
  }

  return (
    <section className="container-page relative z-10 -mt-12 pb-10">
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-2xl bg-white p-6 shadow-lg shadow-charcoal/5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
      >
        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Operación
          </span>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value as Operation)}
            className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
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
            className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
          >
            <option value="">Todas</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {formatPropertyType(type)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Precio máximo
          </span>
          <div className="flex gap-2">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="w-24 rounded-lg border border-line bg-cream-soft px-3 py-3 text-sm text-charcoal focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="ARS">ARS</option>
            </select>
            <input
              type="number"
              min={0}
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              placeholder="Hasta..."
              className="flex-1 rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:outline-none"
            />
          </div>
        </label>

        <button type="submit" className="btn btn-gold">
          <Search className="h-4 w-4" aria-hidden />
          Buscar
        </button>
      </form>
    </section>
  );
}
