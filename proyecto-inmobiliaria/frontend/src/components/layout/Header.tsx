"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/75 backdrop-blur">
      <div className="flex h-24 items-center justify-between px-4 sm:h-28 sm:px-12 lg:px-16">
        <Link href="/" className="flex items-center" aria-label="Vilanova Propiedades">
          <Image
            src="/logo.png"
            alt="Vilanova Propiedades"
            width={831}
            height={300}
            loading="eager"
            className="h-20 w-auto sm:h-28"
          />
        </Link>

        <div className="flex items-center md:mr-8 lg:mr-14">
          <nav aria-label="Principal">
            <ul className="hidden items-center gap-14 md:flex lg:gap-20">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-charcoal transition-colors hover:text-gold sm:text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream-soft text-charcoal transition-colors hover:border-gold hover:text-gold md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menú móvil" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-charcoal transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
