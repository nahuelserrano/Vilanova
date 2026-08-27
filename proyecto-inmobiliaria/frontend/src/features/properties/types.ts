export type Currency = "USD" | "ARS";
export type Operation = "venta" | "alquiler";

export interface PropertyPrice {
  currency: Currency;
  amount: number;
  hidden: boolean;
}

export interface PropertyLocation {
  city: string;
  address?: string;
  neighborhood?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PropertyFeatures {
  rooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  coveredSurface?: number;
  totalSurface?: number;
  garage?: number;
}

export interface PublicProperty {
  id: string;
  slug: string;
  title: string;
  description: string;
  operation: Operation;
  propertyType: string;
  price: PropertyPrice;
  location: PropertyLocation;
  features: PropertyFeatures;
  images: string[];
  publishedAt: string;
  condition?: string;
  antiquityYears?: number;
  orientation?: string;
  services?: string[];
  expensas?: string;
  isMortgageEligible?: boolean;
}

export interface PaginatedProperties {
  items: PublicProperty[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
