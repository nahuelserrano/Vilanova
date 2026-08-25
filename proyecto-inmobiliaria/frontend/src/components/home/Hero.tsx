import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative lg:-mt-28">
      <div className="absolute inset-y-0 right-0 hidden lg:block">
        <Image
          src="/background-hero.png"
          alt="Interior de un hogar luminoso"
          width={1535}
          height={1024}
          priority
          className="h-full w-auto"
        />
      </div>

      <div className="container-page relative z-10 flex min-h-[560px] flex-col justify-center gap-10 pt-10 pb-16 lg:min-h-[660px] lg:flex-row lg:items-center lg:pt-32 lg:pb-0">
        <div className="order-2 flex max-w-xl flex-col justify-center space-y-7 lg:order-1">
          <h1 className="font-serif text-[2.5rem] leading-[1.08] text-charcoal sm:text-5xl lg:text-6xl">
            Tu próximo hogar,
            <br />
            <span className="text-gold">está más cerca de lo que imaginás</span>.
          </h1>
          <p className="max-w-md text-lg text-charcoal/80">
            Más de 75 años ayudando a familias a encontrar el lugar perfecto.
          </p>
          <Link href="/properties" className="btn btn-gold self-start">
            <ArrowRight className="h-4 w-4" aria-hidden />
            Ver propiedades
          </Link>
        </div>

        <div className="order-1 relative aspect-[3/2] lg:hidden">
          <Image
            src="/background-hero.png"
            alt="Interior de un hogar luminoso"
            fill
            priority
            sizes="100vw"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
