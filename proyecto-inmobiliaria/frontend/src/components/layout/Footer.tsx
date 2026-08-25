import Link from "next/link";
import { Camera, Clock, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

const QUICK_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/properties" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const CONTACT = [
  { icon: MapPin, text: "Av. Mitre 1234, Quilmes" },
  { icon: Phone, text: "11 4242 4242" },
  { icon: Mail, text: "hola@vilanovapropiedades.com.ar" },
  { icon: Clock, text: "Lunes a viernes de 9 a 18 h" },
];

const SOCIAL = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Share2, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-center font-serif text-lg font-bold leading-tight text-charcoal">
            Desde
            <br />
            1947
          </div>
          <p className="max-w-xs text-sm text-charcoal/80">
            Tradición, confianza y compromiso. Acompañando a generaciones en cada
            paso.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-lg text-charcoal">Contacto</h3>
          <ul className="space-y-4">
            {CONTACT.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-charcoal">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-lg text-charcoal">Enlaces rápidos</h3>
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

          <div>
            <h3 className="mb-3 font-serif text-lg text-charcoal">Seguinos</h3>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-charcoal py-5">
        <p className="container-page text-center text-xs text-cream">
          © {new Date().getFullYear()} Vilanova Propiedades. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
