import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative hero-bg lg:-mt-8">
      <div className="absolute inset-y-0 right-0 hidden lg:block">
        <Image
          src="/background-hero.png"
          alt="Interior de un hogar luminoso"
          width={1535}
          height={1024}
          loading="eager"
          className="h-full w-auto"
        />
      </div>

      <div className="relative z-10 flex min-h-140 flex-col justify-center gap-10 px-6 pt-10 pb-16 sm:px-12 lg:min-h-165 lg:flex-row lg:items-center lg:justify-start lg:px-16 lg:pb-0">
        <div className="flex max-w-2xl flex-col justify-center space-y-7 lg:pl-14">
          <h1 className="text-[2.5rem] leading-[1.08] text-charcoal sm:text-5xl lg:text-6xl">
            Tu próximo hogar
            <br />
            <span className="font-bold text-gold">está más cerca de lo que imaginás.</span>
          </h1>
          <p className="max-w-md text-lg text-charcoal/80 lg:text-xl">
            Más de 75 años ayudando a familias a encontrar el lugar perfecto.
          </p>
          <Link href="/propiedades" className="btn btn-gold self-start lg:px-8 lg:py-4 lg:text-base">
            <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden />
            Ver propiedades
          </Link>
        </div>
      </div>
    </section>
  );
}
