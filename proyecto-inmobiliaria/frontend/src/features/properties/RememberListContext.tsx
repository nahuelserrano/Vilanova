"use client";

import { useEffect } from "react";

export const PROPERTIES_BACK_KEY = "propiedades.back";

export default function RememberListContext() {
  useEffect(() => {
    sessionStorage.setItem(
      PROPERTIES_BACK_KEY,
      window.location.pathname + window.location.search,
    );
  }, []);

  return null;
}
