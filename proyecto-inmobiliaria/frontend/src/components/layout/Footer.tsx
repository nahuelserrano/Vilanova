import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT } from "@/features/contact/contact-info";

const CONTACT_ICONS: LucideIcon[] = [MapPin, Phone, Mail, Clock];

const QUICK_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="container-page flex flex-col items-center gap-10 py-14 md:flex-row md:items-start md:justify-center md:gap-24">
        <div className="hidden items-center md:flex md:self-center">
          <Link href="/" aria-label="Vilanova Propiedades">
            <Image
              src="/logo-cloudinary.png"
              alt="Vilanova Propiedades"
              width={1587}
              height={991}
              className="h-35 w-auto sm:h-40"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
          <div className="space-y-5">
            <h3 className="text-lg text-charcoal">Contacto</h3>
            <ul className="space-y-4">
              {CONTACT.map(({ text, href }, index) => {
                const Icon = CONTACT_ICONS[index];
                return (
                  <li key={text} className="flex items-start gap-3 text-sm text-charcoal">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                    {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg text-charcoal">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-charcoal py-5">
          <div className="container-page flex justify-center">
            <p className="text-xs text-cream">
              © {new Date().getFullYear()} Vilanova Propiedades. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
        <p className="absolute right-0 bottom-full flex items-center gap-2 pr-6 pb-4 text-sm text-charcoal/70">
          <span className="hidden md:inline">Forma parte de</span>
          <Link href="https://tandilprop.com.ar" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo-tandilprop.png"
              alt="Logo TandilProp"
              width={963}
              height={259}
              className="h-12 w-auto"
            />
          </Link>
        </p>
      </div>
    </footer>
  );
}
