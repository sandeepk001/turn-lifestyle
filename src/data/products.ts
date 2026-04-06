export interface Product {
  id: string;
  name: string;
  category: 'Night Pants' | 'T-Shirts' | 'Trousers' | 'Shirts' | 'Hoodies';
  price: number;
  rating: number;
  description: string;
  colors: string[];
  mainImg: string;
  gallery: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Night Pant',
    category: 'Night Pants',
    price: 1299,
    rating: 4.8,
    description: 'Ultra-soft premium cotton night pants designed for maximum comfort. Features elastic waistband and relaxed fit for a perfect night\'s sleep.',
    colors: ['#1a1a1a', '#4a5568', '#718096'],
    mainImg: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '2',
    name: 'Classic Oversized T-Shirt',
    category: 'T-Shirts',
    price: 899,
    rating: 4.9,
    description: 'Minimalist oversized t-shirt crafted from premium cotton. Perfect blend of comfort and style with a contemporary fit.',
    colors: ['#ffffff', '#1a1a1a', '#94a3b8'],
    mainImg: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '3',
    name: 'Tailored Slim Fit Trousers',
    category: 'Trousers',
    price: 2499,
    rating: 4.7,
    description: 'Sophisticated slim-fit trousers with impeccable tailoring. Versatile design suitable for both formal and casual occasions.',
    colors: ['#1a1a1a', '#2d3748', '#4a5568'],
    mainImg: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '4',
    name: 'Luxury Lounge Night Pant',
    category: 'Night Pants',
    price: 1499,
    rating: 4.9,
    description: 'Premium lounge pants with superior fabric quality. Designed for ultimate relaxation with a modern aesthetic.',
    colors: ['#2d3748', '#4a5568', '#718096'],
    mainImg: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '5',
    name: 'Essential Crew Neck Tee',
    category: 'T-Shirts',
    price: 799,
    rating: 4.6,
    description: 'Wardrobe essential crew neck t-shirt. Clean lines and premium fabric make this a timeless piece.',
    colors: ['#ffffff', '#1a1a1a', '#ef4444', '#3b82f6'],
    mainImg: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '6',
    name: 'Premium Casual Shirt',
    category: 'Shirts',
    price: 1899,
    rating: 4.8,
    description: 'Refined casual shirt with attention to detail. Perfect for smart-casual occasions with a contemporary fit.',
    colors: ['#ffffff', '#60a5fa', '#1a1a1a'],
    mainImg: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '7',
    name: 'Comfort Fit Chino Trousers',
    category: 'Trousers',
    price: 2199,
    rating: 4.7,
    description: 'Classic chino trousers with modern comfort fit. Versatile styling options for the contemporary wardrobe.',
    colors: ['#92400e', '#1a1a1a', '#4a5568'],
    mainImg: 'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '8',
    name: 'Minimalist Hoodie',
    category: 'Hoodies',
    price: 2799,
    rating: 4.9,
    description: 'Premium heavyweight hoodie with minimalist design. Superior comfort meets contemporary streetwear aesthetic.',
    colors: ['#1a1a1a', '#4a5568', '#94a3b8'],
    mainImg: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '9',
    name: 'Graphic Print T-Shirt',
    category: 'T-Shirts',
    price: 999,
    rating: 4.5,
    description: 'Statement graphic t-shirt with artistic print. Express your style with this unique design piece.',
    colors: ['#1a1a1a', '#ffffff'],
    mainImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    ],
  },
];

export const CATEGORIES = ['All', 'Night Pants', 'T-Shirts', 'Trousers', 'Shirts', 'Hoodies'] as const;

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);
