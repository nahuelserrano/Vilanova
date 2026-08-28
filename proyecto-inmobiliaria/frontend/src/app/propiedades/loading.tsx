export default function PropertiesLoading() {
  return (
    <section className="mx-auto w-full max-w-384 px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-10 w-48 animate-pulse rounded-lg bg-line" />
      <div className="mt-4 h-5 w-72 max-w-full animate-pulse rounded bg-line" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
        <aside className="hidden animate-pulse space-y-4 lg:block">
          <div className="h-72 rounded-2xl bg-cream-soft" />
          <div className="h-40 rounded-2xl bg-cream-soft" />
        </aside>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="aspect-4/3 bg-line" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 rounded bg-line" />
                <div className="h-4 w-1/2 rounded bg-line" />
                <div className="h-5 w-1/3 rounded bg-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
