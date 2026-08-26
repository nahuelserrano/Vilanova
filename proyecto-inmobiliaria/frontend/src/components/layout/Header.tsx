import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/properties" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur">
      <div className="flex h-28 items-center justify-between px-6 sm:px-12 lg:px-16">
        <Link href="/" className="ml-4 flex translate-y-2 items-center sm:ml-5 lg:ml-6" aria-label="Vilanova Propiedades">
          <Image
            src="/logo.png"
            alt="Vilanova Propiedades"
            width={831}
            height={300}
            priority
            className="h-28 w-auto sm:h-32"
          />
        </Link>

        <nav aria-label="Principal" className="mr-4 md:mr-8 lg:mr-14">
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
      </div>
    </header>
  );
}
