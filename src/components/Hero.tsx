'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import Image from 'next/image';

interface HeroProps {
  featuredProducts: Product[];
  onProductClick: (product: Product) => void;
}

export default function Hero({ featuredProducts, onProductClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % featuredProducts.length;
      products.push(featuredProducts[index]);
    }
    return products;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Typography */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold italic mb-4">
            Style <span className="text-gray-400">Revolved</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium apparel with minimalist design
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {visibleProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${
                  idx === 1 ? 'md:scale-110 md:-translate-y-8' : 'md:scale-95'
                }`}
              >
                <button
                  onClick={() => onProductClick(product)}
                  className="group relative w-full aspect-[3/4] bg-white rounded-[2rem] overflow-hidden floating-shadow hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative w-full h-full p-8">
                    <Image
                      src={product.mainImg}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-white/90 text-sm">₹{product.price.toLocaleString()}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
