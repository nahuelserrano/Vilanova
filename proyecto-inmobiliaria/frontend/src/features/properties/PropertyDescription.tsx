"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PropertyDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const expandedRef = useRef(expanded);

  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () => {
      if (expandedRef.current) return;
      setHasOverflow(element.scrollHeight > element.clientHeight);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [description]);

  return (
    <div>
      <span className="text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
        Descripción
      </span>
      <p
        ref={textRef}
        className={`mt-2 whitespace-pre-line text-charcoal/80 ${
          !expanded ? "line-clamp-3" : ""
        }`}
      >
        {description}
      </p>
      {hasOverflow ? (
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
