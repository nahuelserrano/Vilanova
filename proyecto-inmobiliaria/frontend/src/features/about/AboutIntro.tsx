import Link from "next/link";
import { ImageIcon, MessageCircle } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-charcoal sm:text-5xl">Nosotros</h1>
            <div className="mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <p className="text-lg leading-relaxed text-charcoal/80">
            Somos una inmobiliaria familiar con más de 75 años de trayectoria en
            Tandil.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/80">
            Acompañamos a cada cliente con compromiso, transparencia y un profundo
            conocimiento del mercado local.
          </p>

          <Link href="/#contacto" className="btn btn-gold px-8 py-4 text-base">
            <MessageCircle className="h-5 w-5" aria-hidden />
            Contactanos
          </Link>
        </div>

        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-line bg-cream-soft p-8 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
            <ImageIcon className="h-7 w-7 text-gold" strokeWidth={1.25} aria-hidden />
          </span>
          <p className="text-sm font-medium text-charcoal/60">
            Foto del equipo (pendiente)
          </p>
        </div>
      </div>
    </section>
  );
}
