import Link from "next/link";
import { ArrowRight, Building2, Home, Key, Store } from "lucide-react";
import { buildSearchString, type Filters } from "./filters";

const CATEGORIES: { icon: typeof Home; label: string; text: string; filters: Filters }[] = [
  { icon: Home, label: "Casas", text: "Hogares para toda la vida.", filters: { tipo: "casa" } },
  {
    icon: Building2,
    label: "Departamentos",
    text: "Comodidad en cada rincón.",
    filters: { tipo: "departamento" },
  },
  {
    icon: Key,
    label: "Alquileres",
    text: "Opciones para cada etapa.",
    filters: { operacion: "alquiler" },
  },
  {
    icon: Store,
    label: "Locales",
    text: "El espacio ideal para tu negocio.",
    filters: { tipo: "local_comercial" },
  },
];

export default function Categories() {
  return (
    <section className="container-page space-y-10 py-16">
      <div className="text-center">
        <h2 className="section-title">Encontrá lo que buscás</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map(({ icon: Icon, label, text, filters }) => (
          <Link
            key={label}
            href={`/properties${buildSearchString(filters)}`}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-line bg-cream-soft p-8 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Icon
              className="h-12 w-12 text-charcoal transition-colors group-hover:text-gold"
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="text-xl text-charcoal">{label}</h3>
            <p className="text-sm text-charcoal/70">{text}</p>
            <ArrowRight
              className="mt-2 h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-2"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
