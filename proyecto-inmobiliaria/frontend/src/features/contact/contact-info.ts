export interface ContactItem {
  text: string;
  href?: string;
}

export const CONTACT: ContactItem[] = [
  { text: "Paz 578, Tandil" },
  { text: "2494 23-1265", href: "tel:+542494231265" },
  { text: "2494 55-0518", href: "https://wa.me/5492494550518" },
  { text: "propiedadesvilanova@gmail.com" },
  { text: "Lunes a viernes de 9 a 12:30 y de 14 a 17 h" },
];
