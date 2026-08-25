import Link from "next/link";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="container-page relative z-10 -mt-12 pb-10">
      <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-lg shadow-charcoal/5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Operación
          </span>
          <select className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none">
            <option>Todas</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Tipo de propiedad
          </span>
          <select className="w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none">
            <option>Todas</option>
            <option>Casas</option>
            <option>Departamentos</option>
            <option>Locales</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
            Precio máximo
          </span>
          <div className="flex gap-2">
            <select className="w-24 rounded-lg border border-line bg-cream-soft px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none">
              <option>USD</option>
              <option>ARS</option>
            </select>
            <select className="flex-1 rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none">
              <option>Hasta cualquier precio</option>
            </select>
          </div>
        </label>

        <Link href="/properties" className="btn btn-gold">
          <Search className="h-4 w-4" aria-hidden />
          Buscar
        </Link>
      </div>
    </section>
  );
}
