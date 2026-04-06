export interface Product {
  id: string;
  name: string;
  category: 'night-pants' | 't-shirts' | 'trousers' | 'baggy-pants';
  price: string;
  rating: number;
  description: string;
  colors: string[];
  mainImg: string;
  gallery: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'np-01',
    name: 'Noir Enchanté Premium Night Gown',
    category: 'night-pants',
    price: '₹1,299',
    rating: 4.9,
    description: 'A masterpiece of loungewear comfort. Crafted from premium 100% long-staple cotton, this night gown offers a weightless feel with a sophisticated, draped silhouette.',
    colors: ['#1a1a1a', '#2c3e50', '#7f8c8d'],
    mainImg: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'ts-01',
    name: 'Oversized Boxy Essential Tee',
    category: 't-shirts',
    price: '₹899',
    rating: 4.8,
    description: 'The foundation of the modern wardrobe. Features a dropped shoulder design and heavyweight 240 GSM fabric that holds its shape wash after wash.',
    colors: ['#ffffff', '#000000', '#f5f5dc'],
    mainImg: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'tr-01',
    name: 'Urban Multi-Pocket Cargo Trousers',
    category: 'trousers',
    price: '₹1,899',
    rating: 4.7,
    description: 'Utility meets luxury. These cargos feature precision tailoring and functional storage, finished with custom TURN-lifestyle hardware and reinforced seams.',
    colors: ['#3d3d3d', '#4b5320'],
    mainImg: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'bp-01',
    name: 'Shadow Street Baggy Joggers',
    category: 'baggy-pants',
    price: '₹1,499',
    rating: 4.6,
    description: 'Designed for the motion of modern life. These joggers provide a relaxed baggy fit without compromising on aesthetic precision or premium feel.',
    colors: ['#000000', '#f3f4f6'],
    mainImg: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const CATEGORIES = [
  { name: 'All', slug: 'all' },
  { name: 'Night Pants', slug: 'night-pants' },
  { name: 'T-Shirts', slug: 't-shirts' },
  { name: 'Trousers', slug: 'trousers' },
  { name: 'Baggy Pants', slug: 'baggy-pants' }
];

export const BRAND_WHATSAPP = "918549065824";
