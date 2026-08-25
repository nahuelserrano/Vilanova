import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/properties" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/50">
      <div className="flex h-28 items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link href="/" className="flex translate-y-2 items-center" aria-label="Vilanova Propiedades">
          <Image
            src="/logo.png"
            alt="Vilanova Propiedades"
            width={831}
            height={300}
            priority
            className="h-28 w-auto sm:h-32"
          />
        </Link>

        <nav aria-label="Principal">
          <ul className="hidden items-center gap-12 md:flex lg:gap-16">
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
      </div>
    </header>
  );
}
