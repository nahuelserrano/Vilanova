import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { PublicProperty } from "./types";
import { buildPropertyWhatsAppUrl, WHATSAPP_PHONE } from "./whatsapp";

export default function PropertyInterest({ property }: { property: PublicProperty }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-cream-soft p-6">
      <div>
        <h2 className="text-xl font-semibold text-charcoal">¿Te interesa esta propiedad?</h2>
        <p className="mt-2 text-sm text-charcoal/70">
          Escribinos y te ayudamos con tu consulta. Coordinamos visitas y resolvemos todas tus
          dudas.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={buildPropertyWhatsAppUrl(property)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Consultar por WhatsApp
        </a>

        <a
          href={`tel:${WHATSAPP_PHONE}`}
          className="btn btn-outline"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Llamar
        </a>

        <Link
          href="/#contacto"
          className="btn btn-outline"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Dejar consulta
        </Link>
      </div>
    </div>
  );
}
