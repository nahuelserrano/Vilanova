import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildSearchString, type Filters } from "./filters";

function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 1) return [];

  const items: (number | "ellipsis")[] = [];
  const windowSize = 1;

  items.push(1);

  const start = Math.max(2, current - windowSize);
  const end = Math.min(total - 1, current + windowSize);

  if (start > 2) items.push("ellipsis");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total - 1) items.push("ellipsis");

  items.push(total);
  return items;
}

export default function Pagination({
  page,
  totalPages,
  filters,
}: {
  page: number;
  totalPages: number;
  filters: Filters;
}) {
  const items = getPageItems(page, totalPages);

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Paginación" className="mt-12 flex items-center justify-center gap-2">
      {page > 1 ? (
        <Link
          href={`/propiedades${buildSearchString(filters, page - 1)}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-charcoal transition-colors hover:border-gold hover:text-gold"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </Link>
      ) : (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-charcoal/40">
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </span>
      )}

      {items.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-2 text-charcoal/60">
            …
          </span>
        ) : (
          <Link
            key={item}
            href={`/propiedades${buildSearchString(filters, item)}`}
            aria-current={item === page ? "page" : undefined}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
              item === page
                ? "bg-gold text-charcoal"
                : "border border-line text-charcoal hover:border-gold hover:text-gold"
            }`}
          >
            {item}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link
          href={`/propiedades${buildSearchString(filters, page + 1)}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-charcoal transition-colors hover:border-gold hover:text-gold"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </Link>
      ) : (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-charcoal/40">
          <ChevronRight className="h-5 w-5" aria-hidden />
        </span>
      )}
    </nav>
  );
}
