import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProperty } from "@/features/properties/api";
import { formatFeatures, formatPrice, formatPropertyType } from "@/features/properties/format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getProperty(id).catch(() => null);
  return {
    title: property ? `${property.title} | Vilanova Propiedades` : "Propiedad | Vilanova Propiedades",
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getProperty(id).catch(() => notFound());

  const image = property.images[0];

  return (
    <section className="container-page py-20">
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Volver a propiedades
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          {image ? (
            <Image
              src={image}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-cream-soft text-charcoal/40">
              Sin imagen
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-gold px-4 py-1.5 text-sm font-bold text-charcoal">
                {property.operation.toUpperCase()}
              </span>
              <span className="rounded bg-charcoal px-4 py-1.5 text-sm font-bold text-white">
                {formatPropertyType(property.propertyType)}
              </span>
            </div>
            <h1 className="mt-4 text-3xl text-charcoal sm:text-4xl">{property.title}</h1>
          </div>

          <p className="text-2xl font-semibold text-charcoal">{formatPrice(property)}</p>

          <div className="rounded-xl border border-line bg-cream-soft p-5">
            <span className="text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
              Características
            </span>
            <p className="mt-2 text-charcoal">{formatFeatures(property)}</p>
          </div>

          <div className="space-y-2 text-sm text-charcoal">
            <p className="text-charcoal/70">{property.location.city}</p>
            {property.features.totalSurface ? (
              <p className="text-charcoal/70">{property.features.totalSurface} m² totales</p>
            ) : null}
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
              Descripción
            </span>
            <p className="mt-2 whitespace-pre-line text-charcoal/80">{property.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
