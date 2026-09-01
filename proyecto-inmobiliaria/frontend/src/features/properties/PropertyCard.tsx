import Link from "next/link";
import type { PublicProperty } from "./types";
import { flattenSlug, formatFeatures, formatPrice, formatPropertyType } from "./format";
import PropertyGallery from "./PropertyGallery";

export default function PropertyCard({
  property,
  priority = false,
}: {
  property: PublicProperty;
  priority?: boolean;
}) {
  const slugKey = property.slug ? flattenSlug(property.slug) : property.id;
  const detailHref = `/propiedades/${slugKey}`;

  return (
    <article className="font-inter group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <PropertyGallery
        images={property.images}
        alt={property.title}
        href={detailHref}
        priority={priority}
      >
        <span className="absolute top-3 left-3 flex gap-2">
          <span className="rounded bg-gold px-4 py-1.5 text-sm font-bold text-charcoal">
            {property.operation.toUpperCase()}
          </span>
          <span className="rounded bg-charcoal px-4 py-1.5 text-sm text-white">
            {formatPropertyType(property.propertyType)}
          </span>
        </span>
      </PropertyGallery>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-inter text-xl text-charcoal">
          <Link href={detailHref} className="hover:text-gold">
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
