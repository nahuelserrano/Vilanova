"use client";

import Link from "next/link";

export default function PropertiesError({ reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto w-full max-w-[96rem] px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white py-20 text-center">
        <h2 className="text-2xl text-charcoal">No pudimos cargar las propiedades</h2>
        <p className="mt-2 max-w-md text-charcoal/70">
          Ocurrió un problema al consultar el listado. Probá nuevamente en unos instantes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn btn-gold">
            Reintentar
          </button>
          <Link href="/" className="btn btn-outline">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
