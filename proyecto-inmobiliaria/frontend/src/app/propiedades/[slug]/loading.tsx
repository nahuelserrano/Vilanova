export default function PropertyLoading() {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
      <div className="h-5 w-44 animate-pulse rounded bg-line" />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="animate-pulse space-y-3 lg:self-start">
          <div className="aspect-16/10 rounded-2xl bg-line" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-20 w-28 rounded-lg bg-line" />
            ))}
          </div>
        </div>

        <div className="animate-pulse space-y-4">
          <div className="h-6 w-32 rounded bg-line" />
          <div className="h-10 w-3/4 rounded-lg bg-line" />
          <div className="h-8 w-40 rounded bg-line" />
          <div className="h-40 rounded-2xl bg-cream-soft" />
        </div>
      </div>

      <div className="mt-12 grid animate-pulse gap-8 lg:grid-cols-[1.5fr_1.2fr_1fr]">
        <div className="h-64 rounded-2xl bg-cream-soft" />
        <div className="h-64 rounded-2xl bg-cream-soft" />
        <div className="h-64 rounded-2xl bg-cream-soft" />
      </div>
    </section>
  );
}
