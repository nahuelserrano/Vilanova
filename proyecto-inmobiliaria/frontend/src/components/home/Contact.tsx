"use client";

import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const inputClass =
  "w-full rounded-lg border border-line bg-cream-soft px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none";

export default function Contact() {
  return (
    <section id="contacto" className="container-page scroll-mt-28 pt-4 pb-16 sm:scroll-mt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-7">
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            Estamos para ayudarte
          </p>
          <h2 className="text-4xl font-bold text-charcoal sm:text-5xl">Hablemos</h2>
          <p className="max-w-md text-charcoal/80">
            Contanos qué estás buscando o en qué podemos ayudarte. Te
            respondemos el mismo día.
          </p>

          <ul className="space-y-5">
            {CONTACT.map(({ icon: Icon, text, href }, index) => (
              <li key={`${text}-${index}`} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-cream-soft">
                  <Icon className="h-5 w-5 text-gold" aria-hidden />
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-charcoal">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-charcoal/5">
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-soft">
              <MessageCircle className="h-6 w-6 text-gold" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl text-charcoal">Envianos tu consulta</h3>
              <div className="mt-1 h-1 w-16 rounded-full bg-gold" />
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                  Nombre
                </span>
                <input type="text" name="nombre" required className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                  Teléfono
                </span>
                <input type="tel" inputMode="tel" name="contacto" required className={inputClass} />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold tracking-wide text-charcoal/70 uppercase">
                ¿En qué podemos ayudarte?
              </span>
              <textarea name="mensaje" rows={6} required className={inputClass} />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-4 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              <Send className="h-4 w-4 text-gold" aria-hidden />
              Enviar consulta
            </button>

            <p className="flex items-center gap-2 text-xs text-charcoal/60">
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              Tu consulta es confidencial. Te responderemos a la brevedad.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
