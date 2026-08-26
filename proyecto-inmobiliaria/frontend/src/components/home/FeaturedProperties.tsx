import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/home/PropertyCard";

export default async function FeaturedProperties() {
  let data;

  try {
    data = await getProperties({ page: 1, pageSize: 3 });
  } catch {
    data = null;
  }

  const items = data?.items ?? [];

  return (
    <section className="container-page space-y-8 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="section-title">Últimos ingresos</h2>
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
        >
          Ver todas las propiedades
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {items.length > 0 ? (
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
