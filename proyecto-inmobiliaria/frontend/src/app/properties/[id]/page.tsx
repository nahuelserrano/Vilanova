import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { getProperty } from "@/features/properties/api";
import { formatPrice, formatPropertyType } from "@/features/properties/format";
import DetailGallery from "@/features/properties/DetailGallery";
import PropertyFeatures from "@/features/properties/PropertyFeatures";
import PropertyDescription from "@/features/properties/PropertyDescription";
import PropertyInterest from "@/features/properties/PropertyInterest";
import PropertyAdditionalInfo from "@/features/properties/PropertyAdditionalInfo";
import PropertyMap from "@/features/properties/map/PropertyMap";

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

  const title = property.location.address || property.title;
  const { lat, lng } = property.location.coordinates ?? {};

  return (
    <section className="mx-auto w-full max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Volver a propiedades
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0 lg:self-start">
          <DetailGallery images={property.images} alt={property.title} priority />
        </div>

        <div className="flex min-w-0 flex-col gap-6">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-gold px-4 py-1.5 text-sm font-bold text-charcoal">
                {property.operation.toUpperCase()}
              </span>
              <span className="rounded bg-charcoal px-4 py-1.5 text-sm font-bold text-white">
                {formatPropertyType(property.propertyType)}
              </span>
            </div>
            <h1 className="mt-4 text-3xl text-charcoal sm:text-4xl">{title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal/60">
              <MapPin className="h-4 w-4" aria-hidden />
              {property.location.city}
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-gold">
              {formatPrice(property)}
            </p>
            <p className="mt-1 text-sm text-charcoal/60">
              {property.operation === "venta" ? "Precio de venta" : "Precio de alquiler"}
            </p>
          </div>

          <PropertyFeatures property={property} />

          <PropertyDescription description={property.description} />
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h2 className="text-xl font-semibold text-charcoal">Ubicación</h2>
          <div className="mt-4">
            <PropertyMap lat={lat} lng={lng} />
          </div>
        </div>

        <PropertyAdditionalInfo property={property} />

        <PropertyInterest property={property} />
      </div>
    </section>
  );
}
