import { Bath, BedDouble, Building2, Car, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PublicProperty } from "./types";

interface FeatureItem {
  label: string;
  value: string;
  Icon: LucideIcon;
}

function buildFeatureItems(property: PublicProperty): FeatureItem[] {
  const f = property.features;
  const items: FeatureItem[] = [];

  if (f.bedrooms != null && f.bedrooms > 0) {
    items.push({ label: "Dormitorios", value: String(f.bedrooms), Icon: BedDouble });
  }
  if (f.bathrooms != null && f.bathrooms > 0) {
    items.push({ label: "Baños", value: String(f.bathrooms), Icon: Bath });
  }
  if (f.garage != null && f.garage > 0) {
    items.push({ label: "Cocheras", value: String(f.garage), Icon: Car });
  }
  if (f.coveredSurface != null && f.coveredSurface > 0) {
    items.push({
      label: "Sup. cubierta",
      value: `${f.coveredSurface} m²`,
      Icon: Building2,
    });
  }
  if (f.totalSurface != null && f.totalSurface > 0) {
    items.push({
      label: "Superficie total",
      value: `${f.totalSurface} m²`,
      Icon: Ruler,
    });
  }

  return items;
}

export default function PropertyFeatures({ property }: { property: PublicProperty }) {
  const items = buildFeatureItems(property);
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map(({ label, value, Icon }) => (
        <div key={label} className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cream-soft text-charcoal">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-xs text-charcoal/60">{label}</p>
            <p className="text-lg font-semibold text-charcoal">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
