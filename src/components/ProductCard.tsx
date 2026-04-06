'use client';

import { Star, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onWishlistToggle?: (productId: string) => void;
  isWishlisted?: boolean;
}

export default function ProductCard({ product, onClick, onWishlistToggle, isWishlisted }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative">
      <button
        onClick={onClick}
        className="w-full bg-white rounded-[2rem] overflow-hidden floating-shadow hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative w-full aspect-[3/4] bg-gray-50">
          <Image
            src={product.mainImg}
            alt={product.name}
            fill
            className={`object-contain p-8 group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 text-left line-clamp-2">{product.name}</h3>
              <p className="text-sm text-gray-500 text-left">{product.category}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">₹{product.price.toLocaleString()}</p>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>

          {/* Color Swatches */}
          <div className="flex gap-2 mt-3">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-100 text-xs">
                +{product.colors.length - 4}
              </div>
            )}
          </div>
        </div>
      </button>

      {/* Wishlist Button */}
      {onWishlistToggle && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all z-10"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      )}
    </div>
  );
}
