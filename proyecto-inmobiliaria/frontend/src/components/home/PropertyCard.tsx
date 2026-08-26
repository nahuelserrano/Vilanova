import Image from "next/image";
import Link from "next/link";
import type { PublicProperty } from "@/lib/types";
import { formatFeatures, formatPrice, formatPropertyType } from "@/lib/format";

export default function PropertyCard({
  property,
  priority = false,
}: {
  property: PublicProperty;
  priority?: boolean;
}) {
  const image = property.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/properties/${property.id}`} className="relative block aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading={priority ? "eager" : "lazy"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-cream-soft text-charcoal/40">
            Sin imagen
          </div>
        )}
        <span className="absolute top-3 left-3 flex gap-2">
          <span className="rounded bg-gold px-4 py-1.5 text-sm font-bold text-charcoal">
            {property.operation.toUpperCase()}
          </span>
          <span className="rounded bg-charcoal px-4 py-1.5 text-sm font-bold text-white">
            {formatPropertyType(property.propertyType)}
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl text-charcoal">
          <Link href={`/properties/${property.id}`} className="hover:text-gold">
            {property.title}
          </Link>
        </h3>
        <p className="text-sm text-charcoal/70">{formatFeatures(property)}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-semibold text-charcoal">
            {formatPrice(property)}
          </span>
        </div>
      </div>
    </article>
  );
}
