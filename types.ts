
export interface FragranceNote {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  vibe: string;
  description: string;
  craftsmanship: string;
  notes: FragranceNote;
  longevity: string;
  occasion: string;
  collectionId: string;
  image: string;
  accentColor: string;
  liquidColor: string; // CSS color for the 3D liquid
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
}

export interface BrandFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  iconColor: string;
}

export interface FragranceFamily {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

export interface USP {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name mapping
}

export type ViewState = 'HOME' | 'PRODUCT_DETAIL' | 'COLLECTIONS_LIST';
