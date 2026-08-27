"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DetailGallery({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  function goTo(target: number) {
    setIndex((target + images.length) % images.length);
  }

  const image = images[index];

  return (
    <div className="space-y-3">
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
        {image ? (
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-cream-soft text-charcoal/40">
            Sin imagen
          </div>
        )}

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Imagen anterior"
              className="absolute top-1/2 left-4 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-charcoal shadow-sm transition-colors hover:bg-gold hover:text-charcoal"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Imagen siguiente"
              className="absolute top-1/2 right-4 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-charcoal shadow-sm transition-colors hover:bg-gold hover:text-charcoal"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
            <span className="absolute right-4 bottom-4 rounded bg-charcoal/70 px-2.5 py-1 text-sm font-semibold text-white">
              {index + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === index}
              className={`relative h-20 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors ${
                i === index ? "border-gold" : "border-transparent hover:border-line"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="112px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
