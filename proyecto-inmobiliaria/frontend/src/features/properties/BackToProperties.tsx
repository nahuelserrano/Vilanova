"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROPERTIES_BACK_KEY } from "./RememberListContext";

const subscribe = () => () => {};

function getSnapshot(): string {
  return sessionStorage.getItem(PROPERTIES_BACK_KEY) ?? "";
}

function getServerSnapshot(): string {
  return "";
}

export default function BackToProperties({ fallback = "/propiedades" }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const href = stored && stored.startsWith("/propiedades") ? stored : fallback;

  return (
    <Link
      href={href}
      scroll={false}
      className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden />
      Volver a propiedades
    </Link>
  );
}
