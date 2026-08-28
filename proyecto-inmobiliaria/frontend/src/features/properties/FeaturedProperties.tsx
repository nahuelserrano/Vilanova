import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProperties } from "./api";
import PropertyCard from "./PropertyCard";

export default async function FeaturedProperties() {
  let data;
  let hasError = false;

  try {
    data = await getFeaturedProperties();
  } catch {
    hasError = true;
  }

  const items = data?.items ?? [];

  return (
    <section className="container-page space-y-8 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="section-title">Últimos ingresos</h2>
        <Link
          href="/propiedades"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
        >
          Ver todas las propiedades
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {hasError ? (
        <div className="rounded-2xl border border-line bg-cream-soft p-10 text-center">
          <p className="text-charcoal/70">
            No pudimos cargar las propiedades en este momento.
          </p>
          <Link
            href="/propiedades"
            className="btn btn-outline mt-6 px-5 py-2.5 text-sm"
          >
            Ver todas las propiedades
          </Link>
        </div>
      ) : items.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index === 0} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-cream-soft p-10 text-center text-charcoal/70">
          No hay propiedades disponibles en este momento.
        </div>
      )}
    </section>
  );
}
