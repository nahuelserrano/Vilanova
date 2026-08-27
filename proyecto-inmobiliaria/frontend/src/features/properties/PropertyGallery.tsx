"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery({
  images,
  alt,
  href,
  priority = false,
  children,
}: {
  images: string[];
  alt: string;
  href: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  function showImage(e: React.MouseEvent, target: number) {
    e.preventDefault();
    e.stopPropagation();
    setIndex((target + images.length) % images.length);
  }

  const image = images[index];

  return (
    <div className="relative aspect-4/3 overflow-hidden">
      <Link href={href} className="relative block h-full w-full">
        {image ? (
          <Image
            src={image}
            alt={alt}
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
      </Link>

      {children}

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={(e) => showImage(e, index - 1)}
            aria-label="Imagen anterior"
            className="absolute top-1/2 left-3 z-10 inline-flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-charcoal shadow-sm transition-colors hover:bg-gold hover:text-charcoal"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(e) => showImage(e, index + 1)}
            aria-label="Imagen siguiente"
            className="absolute top-1/2 right-3 z-10 inline-flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-charcoal shadow-sm transition-colors hover:bg-gold hover:text-charcoal"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <span className="absolute right-3 bottom-3 z-10 rounded bg-charcoal/70 px-2 py-0.5 text-xs font-semibold text-white">
            {index + 1} / {images.length}
          </span>
        </>
      ) : null}
    </div>
  );
}
