import Link from "next/link";
import { getProperties } from "@/features/properties/api";
import { buildPropertiesQuery, buildSearchString, parseFilters, type RawSearchParams } from "@/features/properties/filters";
import PropertyCard from "@/features/properties/PropertyCard";
import PropertiesScrollRestore from "@/features/properties/PropertiesScrollRestore";
import RememberListContext from "@/features/properties/RememberListContext";
import FiltersPanel from "@/features/properties/FiltersPanel";
import Pagination from "@/features/properties/Pagination";
import ContactBanner from "@/features/properties/ContactBanner";

export const metadata = {
  title: "Propiedades | Vilanova Propiedades",
  description: "Explorá nuestra selección de propiedades en Tandil. Casas, departamentos y más.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const params = await searchParams;

  const filters = parseFilters(params);
  const rawPage = Array.isArray(params.page) ? params.page[0] : params.page;
  const page = Math.max(1, Number(rawPage) || 1);

  const { items, pagination } = await getProperties(buildPropertiesQuery(filters, page));

  return (
    <section className="mx-auto w-full max-w-384 px-4 py-16 sm:px-6 lg:px-8">
      <PropertiesScrollRestore />
      <RememberListContext />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="section-title font-bold">Propiedades</h1>
          <p className="mt-4 text-charcoal/70">
            Explorá nuestros inmuebles disponibles y encontrá el lugar ideal para vos.
          </p>
        </div>

        <ContactBanner
          title="¿No encontrás lo que buscás?"
          subtitle="Contanos y te ayudamos a encontrar tu próximo hogar."
          actionLabel="Contáctanos"
          actionHref="/contacto"
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
        <aside className="lg:sticky lg:top-36 lg:self-start">
          <FiltersPanel key={buildSearchString(filters)} initialFilters={filters} />
        </aside>

        <div>
          {items.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  priority={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white py-20 text-center">
              <h2 className="text-2xl text-charcoal">No encontramos propiedades</h2>
              <p className="mt-2 max-w-md text-charcoal/70">
                No hay propiedades que coincidan con los filtros seleccionados. Probá quitando
                algunos filtros o ampliando el rango de precios.
              </p>
              <Link href="/propiedades" className="btn btn-gold mt-6">
                Ver todas las propiedades
              </Link>
            </div>
          )}
        </div>
      </div>

      {items.length > 0 ? (
        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          filters={filters}
        />
      ) : null}
    </section>
  );
}
