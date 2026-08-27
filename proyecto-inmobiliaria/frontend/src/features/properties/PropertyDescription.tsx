"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PropertyDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const longText = description.length > 280;

  return (
    <div>
      <span className="text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
        Descripción
      </span>
      <p
        className={`mt-2 whitespace-pre-line text-charcoal/80 ${
          longText && !expanded ? "line-clamp-3" : ""
        }`}
      >
        {description}
      </p>
      {longText ? (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark"
        >
          {expanded ? "Ver menos" : "Ver más"}
          {expanded ? (
            <ChevronUp className="h-4 w-4" aria-hidden />
          ) : (
            <ChevronDown className="h-4 w-4" aria-hidden />
          )}
        </button>
      ) : null}
    </div>
  );
}
