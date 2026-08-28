import AboutIntro from "@/features/about/AboutIntro";
import AboutValues from "@/features/about/AboutValues";

export const metadata = {
  title: "Nosotros | Vilanova Propiedades",
  description:
    "Conocé la historia de más de 75 años de Vilanova Propiedades en Tandil y los valores que nos guían.",
};

export default function NosotrosPage() {
  return (
    <>
      <AboutIntro />
      <AboutValues />
    </>
  );
}
