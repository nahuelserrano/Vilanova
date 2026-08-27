import Hero from "@/features/properties/Hero";
import SearchBar from "@/features/properties/SearchBar";
import Categories from "@/features/properties/Categories";
import FeaturedProperties from "@/features/properties/FeaturedProperties";
import Contact from "@/features/contact/Contact";

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
