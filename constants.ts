import { Product, Collection, BrandFeature, FragranceFamily, Testimonial, USP } from './types';

// Using high-quality, editorial-style studio shots for a cohesive premium look
export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    name: 'Eve Intense',
    description: 'Nature Reborn',
    slug: 'eve-intense',
    image: 'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=800&auto=format&fit=crop' // Premium studio green/fresh
  },
  {
    id: 'c2',
    name: 'Ignite Quest',
    description: 'Floral Passion',
    slug: 'ignite-quest',
    image: 'https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?q=80&w=800&auto=format&fit=crop' // Soft pink/floral elegance
  },
  {
    id: 'c3',
    name: 'D\'Arcy Dark',
    description: 'Midnight Mystery',
    slug: 'darcy-dark',
    image: 'https://images.unsplash.com/photo-1585386959960-83d31405149a?q=80&w=800&auto=format&fit=crop' // Dark, moody, premium wood
  },
  {
    id: 'c4',
    name: 'Radiant Aura',
    description: 'Golden Hour',
    slug: 'radiant-aura',
    image: 'https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?q=80&w=800&auto=format&fit=crop' // Glowing gold/amber
  }
];

export const BRAND_FEATURES: BrandFeature[] = [
  {
    id: 'f1',
    title: 'Woody Notes',
    description: 'Cedar & Sandalwood depth.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=600&auto=format&fit=crop', 
    gradient: 'bg-white/40',
    iconColor: 'text-[#3E2723]'
  },
  {
    id: 'f2',
    title: 'Fresh Accents',
    description: 'Crisp Citrus & Bergamot.',
    image: 'https://images.unsplash.com/photo-1541625983790-276632c253c0?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#006064]'
  },
  {
    id: 'f3',
    title: 'Floral Heart',
    description: 'Jasmine & Rose bouquet.',
    image: 'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#880E4F]'
  },
  {
    id: 'f4',
    title: 'Long-Lasting',
    description: 'Aura that stays all day.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#FF6F00]'
  },
  {
    id: 'f5',
    title: 'Unisex Crafted',
    description: 'Perfectly balanced notes.',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#263238]'
  },
    {
    id: 'f1',
    title: 'Woody Notes',
    description: 'Cedar & Sandalwood depth.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=600&auto=format&fit=crop', 
    gradient: 'bg-white/40',
    iconColor: 'text-[#3E2723]'
  },
  {
    id: 'f2',
    title: 'Fresh Accents',
    description: 'Crisp Citrus & Bergamot.',
    image: 'https://images.unsplash.com/photo-1541625983790-276632c253c0?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#006064]'
  },
  {
    id: 'f3',
    title: 'Floral Heart',
    description: 'Jasmine & Rose bouquet.',
    image: 'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#880E4F]'
  },
  {
    id: 'f4',
    title: 'Long-Lasting',
    description: 'Aura that stays all day.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#FF6F00]'
  },
  {
    id: 'f5',
    title: 'Unisex Crafted',
    description: 'Perfectly balanced notes.',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop',
    gradient: 'bg-white/40',
    iconColor: 'text-[#263238]'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Eve Intense',
    vibe: 'Fresh / Vitality',
    description: 'A vibrant fusion of nature and intensity. Eve Intense captures the essence of a blooming garden after rain, blending crisp green notes with a deep, lasting heart.',
    craftsmanship: 'Steam-distilled green apple essence blended with cold-pressed bergamot oil. Matured in glass vats for 45 days to ensure crystal clarity and scent stability.',
    notes: {
      top: ['Green Apple', 'Bergamot'],
      heart: ['Gardenia', 'Lily of the Valley'],
      base: ['White Musk', 'Cedarwood']
    },
    longevity: '8-10 Hours',
    occasion: 'Daywear, Brunch',
    collectionId: 'c1',
    image: 'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=800&auto=format&fit=crop',
    accentColor: 'bg-[#E8F5E9] text-[#2E7D32]',
    liquidColor: 'rgba(165, 214, 167, 0.7)' // Light Green
  },
  {
    id: 'p2',
    name: 'Ignite Quest',
    vibe: 'Floral / Passion',
    description: 'A spark of elegance. Ignite Quest is a romantic yet powerful blend that embodies the thrill of new beginnings. Soft florals meet a spicy, intriguing edge.',
    craftsmanship: 'Hand-picked rose petals from Kannauj, distilled using traditional copper pots. Infused with Madagascar vanilla for a warm, embracing finish.',
    notes: {
      top: ['Pink Pepper', 'Mandarin'],
      heart: ['Rose Absolute', 'Peony'],
      base: ['Sandalwood', 'Vanilla']
    },
    longevity: '10-12 Hours',
    occasion: 'Date Night, Evening',
    collectionId: 'c2',
    image: 'https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?q=80&w=800&auto=format&fit=crop',
    accentColor: 'bg-[#FCE4EC] text-[#C2185B]',
    liquidColor: 'rgba(244, 143, 177, 0.7)' // Pink
  },
  {
    id: 'p3',
    name: 'D\'Arcy Dark',
    vibe: 'Bold / Mystery',
    description: 'For those who command the room. D\'Arcy Dark is an enigmatic composition of rare woods and spices, designed to leave an unforgettable, powerful trail.',
    craftsmanship: 'Aged Agarwood oil sourced sustainably, blended with smoked leather accords. The mixture is rested in oak barrels for 3 months to deepen its complexity.',
    notes: {
      top: ['Black Pepper', 'Cardamom'],
      heart: ['Oud Wood', 'Incense'],
      base: ['Leather', 'Dark Amber']
    },
    longevity: '12+ Hours',
    occasion: 'Gala, Formal Events',
    collectionId: 'c3',
    image: 'https://images.unsplash.com/photo-1585386959960-83d31405149a?q=80&w=800&auto=format&fit=crop',
    accentColor: 'bg-[#263238] text-[#CFD8DC]',
    liquidColor: 'rgba(78, 52, 46, 0.8)' // Dark Brown
  },
  {
    id: 'p4',
    name: 'Radiant Aura',
    vibe: 'Warm / Luxe',
    description: 'Liquid gold. Radiant Aura exudes warmth and sophistication with its amber-rich profile. A scent that glows with confidence and timeless elegance.',
    craftsmanship: 'Golden amber resin dissolved slowly in warm sandalwood oil. Enhanced with hand-crushed saffron threads for a luxurious, metallic opening.',
    notes: {
      top: ['Saffron', 'Ginger'],
      heart: ['Ambergris', 'Jasmine'],
      base: ['Fir Resin', 'Cedar']
    },
    longevity: '10-12 Hours',
    occasion: 'Signature, Office',
    collectionId: 'c4',
    image: 'https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?q=80&w=800&auto=format&fit=crop',
    accentColor: 'bg-[#FFF8E1] text-[#FF6F00]',
    liquidColor: 'rgba(238, 232, 170, 0.6)' // Pale Champagne Gold
  }
];

export const FRAGRANCE_FAMILIES: FragranceFamily[] = [
  {
    id: 'ff1',
    name: 'Woods',
    description: 'Earthy, warm, and grounded profiles like Cedar & Sandalwood.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop',
    color: 'from-amber-950/70 to-amber-800/70'
  },
  {
    id: 'ff2',
    name: 'Citrus',
    description: 'Zesty, energetic bursts of Lemon, Bergamot & Orange.',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600&auto=format&fit=crop',
    color: 'from-yellow-700/70 to-orange-600/70'
  },
  {
    id: 'ff3',
    name: 'Floral',
    description: 'Soft, romantic bouquets of Rose, Jasmine & Peony.',
    image: 'https://images.unsplash.com/photo-1563241527-300c2783e130?q=80&w=600&auto=format&fit=crop',
    color: 'from-pink-900/70 to-rose-700/70'
  },
  {
    id: 'ff4',
    name: 'Amber',
    description: 'Sweet, resinous warmth with Vanilla & Tonka Bean.',
    image: 'https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=600&auto=format&fit=crop',
    color: 'from-orange-900/70 to-amber-700/70'
  },
  {
    id: 'ff5',
    name: 'Musk',
    description: 'Sensual, skin-like scents that linger intimately.',
    image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&w=600&auto=format&fit=crop',
    color: 'from-gray-800/70 to-slate-600/70'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lekha Menon',
    location: 'Kochi',
    text: 'Amary has redefined luxury for me. Eve Intense feels like a walk through a Kerala spice garden after rain.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Aarav Malhotra',
    location: 'New Delhi',
    text: 'D\'Arcy Dark is my absolute favorite. It has this incredible depth that lasts all night at weddings.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Riya Kapoor',
    location: 'Mumbai',
    text: 'I love how modern yet traditional these scents feel. Radiant Aura gives me so much confidence.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Kabir Singh',
    location: 'Bangalore',
    text: 'The packaging, the scent, the vibe—everything is top notch. Finally a premium Indian brand!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];

export const US_POINTS: USP[] = [
  {
    id: 'u1',
    title: 'Pure Oils',
    description: 'High concentration, no alcohol burn.',
    icon: 'droplet'
  },
  {
    id: 'u2',
    title: 'Unisex Crafted',
    description: 'Scents designed for everyone.',
    icon: 'users'
  },
  {
    id: 'u3',
    title: 'Indian Heritage',
    description: 'Rooted in Kannauj craftsmanship.',
    icon: 'globe'
  },
  {
    id: 'u4',
    title: 'Long Lasting',
    description: 'Designed to last 12+ hours.',
    icon: 'clock'
  }
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/919876543210', 
  instagram: 'https://www.instagram.com/amary.aroma',
  email: 'mailto:amaryaroma@gmail.com'
};