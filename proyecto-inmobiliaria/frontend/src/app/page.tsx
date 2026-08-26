import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Categories from "@/components/home/Categories";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Contact from "@/components/home/Contact";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedProperties />
      <Contact />
    </>
  );
}
