import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT } from "@/features/contact/contact-info";

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.793.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.002 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.663 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.459-8.395" />
    </svg>
  );
}

const CONTACT_ICONS: Array<LucideIcon | typeof WhatsappIcon> = [
  MapPin,
  Phone,
  WhatsappIcon,
  Mail,
  Clock,
];

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
        <div className="order-2 hidden items-center md:order-1 md:flex md:-mt-12">
          <Link href="/" aria-label="Vilanova Propiedades">
            <Image
              src="/placa.png"
              alt="Vilanova Propiedades"
              width={960}
              height={1280}
              className="h-64 w-auto sm:h-72"
            />
          </Link>
        </div>

        <div className="order-1 grid grid-cols-1 gap-10 md:order-2 md:grid-cols-2 md:gap-24">
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
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
