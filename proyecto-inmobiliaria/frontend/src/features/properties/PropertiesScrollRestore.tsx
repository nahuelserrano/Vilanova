"use client";

import { useEffect } from "react";

const DETAIL_LINK = /^\/properties\/[^/?]+/;

let savedY: number | null = null;

export default function PropertiesScrollRestore() {
  useEffect(() => {
    if (savedY !== null) {
      window.scrollTo({ top: savedY });
      savedY = null;
    }

    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest("a");
      const href = anchor?.getAttribute("href");
      if (href && DETAIL_LINK.test(href)) {
        savedY = window.scrollY;
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
