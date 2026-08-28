import { Heart, Home, ShieldCheck, Users } from "lucide-react";

const VALUES: { icon: typeof Home; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Confianza",
    text: "Relaciones basadas en la honestidad y el compromiso.",
  },
  {
    icon: Home,
    title: "Experiencia",
    text: "Conocemos Tandil y su mercado como nadie.",
  },
  {
    icon: Users,
    title: "Acompañamiento",
    text: "Te guiamos en cada paso para que tomes siempre la mejor decisión.",
  },
  {
    icon: Heart,
    title: "Pasión",
    text: "Amamos lo que hacemos y eso se refleja en cada cliente y propiedad.",
  },
];

export default function AboutValues() {
  return (
    <section className="container-page pb-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-cream-soft p-8 text-center shadow-sm"
          >
            <Icon
              className="h-12 w-12 text-gold"
              strokeWidth={1.25}
              aria-hidden
            />
            <h2 className="text-xl text-charcoal">{title}</h2>
            <p className="text-sm text-charcoal/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
