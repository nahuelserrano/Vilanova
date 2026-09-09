import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

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
            Desde el 13 de mayo de 1947, construyendo una historia que continúa de generación en generación.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/80">
            En Vilanova Propiedades, la experiencia y el compromiso se transmiten de generación en generación. En esta foto, la segunda y tercera generación de nuestra familia, continuando una historia construida con dedicación, confianza y vocación de servicio.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/80">
            Porque detrás de cada propiedad hay una historia, y detrás de Vilanova, una familia que sigue creciendo. </p>

          <Link href="/#contacto" className="btn btn-gold px-8 py-4 text-base">
            <MessageCircle className="h-5 w-5" aria-hidden />
            Contactanos
          </Link>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/nosotros.jpeg"
            alt="Equipo de Vilanova Propiedades"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
