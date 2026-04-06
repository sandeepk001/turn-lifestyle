'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import SearchOverlay from '@/components/SearchOverlay';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import { PRODUCTS, CATEGORIES, FEATURED_PRODUCTS } from '@/data/products';
import { Product } from '@/data/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const wishlistProducts = useMemo(() => {
    return PRODUCTS.filter((product) => wishlist.includes(product.id));
  }, [wishlist]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    
    if (typeof window !== 'undefined') {
      console.log('Product viewed:', product.name);
    }
  };

  const handleWishlistToggle = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleWishlistClick = () => {
    setShowWishlist(!showWishlist);
  };

  useEffect(() => {
    if (showWishlist) {
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showWishlist]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onSearchClick={() => setIsSearchOpen(true)} onWishlistClick={handleWishlistClick} />

      <Hero featuredProducts={FEATURED_PRODUCTS} onProductClick={handleProductClick} />

      {/* Collection Section */}
      <section id="collection" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {showWishlist ? 'Your Wishlist' : 'Our Collection'}
            </h2>
            <p className="text-lg text-gray-600">
              {showWishlist
                ? `${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'} saved`
                : 'Discover premium pieces for your wardrobe'}
            </p>
          </div>

          {!showWishlist && (
            <div className="mb-8 flex justify-center">
              <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          )}

          {showWishlist && wishlist.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-4">Your wishlist is empty</p>
              <button
                onClick={() => setShowWishlist(false)}
                className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(showWishlist ? wishlistProducts : filteredProducts).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                  onWishlistToggle={handleWishlistToggle}
                  isWishlisted={wishlist.includes(product.id)}
                />
              ))}
            </div>
          )}

          {!showWishlist && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">About TURN</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            TURN Lifestyle is a premium apparel brand based in Bangalore, India. We believe in the
            power of minimalist design and quality craftsmanship. Each piece in our collection is
            carefully curated to bring you timeless style that transcends trends.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Our philosophy is simple: <span className="italic font-semibold">Style Revolved</span>.
            We reimagine classic wardrobe essentials with a contemporary twist, creating pieces that
            are both comfortable and sophisticated.
          </p>
        </div>
      </section>

      <Footer />

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onProductClick={handleProductClick}
      />
    </main>
  );
}
