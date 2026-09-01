import { Suspense } from "react";
import Hero from "@/features/properties/Hero";
import SearchBar from "@/features/properties/SearchBar";
import Categories from "@/features/properties/Categories";
import FeaturedProperties from "@/features/properties/FeaturedProperties";
import Contact from "@/features/contact/Contact";
import { getPropertyTypes } from "@/features/properties/api";

function FeaturedSkeleton() {
  return (
    <section className="container-page space-y-8 py-16">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-line" />
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
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
    </section>
  );
}

export default async function Home() {
  const propertyTypes = await getPropertyTypes().catch(() => []);

  return (
    <>
      <Hero />
      <SearchBar propertyTypes={propertyTypes} />
      <Categories />
      <Suspense fallback={<FeaturedSkeleton />}>
        <FeaturedProperties />
      </Suspense>
      <Contact />
    </>
  );
}
