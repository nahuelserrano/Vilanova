import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

export interface ContactItem {
  icon: LucideIcon;
  text: string;
}

export const CONTACT: ContactItem[] = [
  { icon: MapPin, text: "Paz 578, Tandil" },
  { icon: Phone, text: "2494 231265" },
  { icon: Mail, text: "propiedadesvilanova@gmail.com" },
  { icon: Clock, text: "Lunes a viernes de 9 a 12:30 y de 14 a 17 h" },
];
