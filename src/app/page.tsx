'use client';

import { useState, useMemo, useRef } from 'react';
import { 
  Search, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  Filter, 
  X,
  Star,
  Trash2,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, BRAND_WHATSAPP, Product } from '@/data/products';
import Image from 'next/image';

const Navbar = ({ onSearch, onOpenContact, onOpenWishlist, onScrollToCollection, wishlistCount }: {
  onSearch: () => void;
  onOpenContact: () => void;
  onOpenWishlist: () => void;
  onScrollToCollection: () => void;
  wishlistCount: number;
}) => (
  <nav className="fixed top-0 left-0 right-0 h-20 bg-white/70 backdrop-blur-xl z-50 border-b border-neutral-100 px-6 md:px-12 flex items-center justify-between">
    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-180 duration-500 shadow-lg">
        <span className="text-white font-black text-sm">T</span>
      </div>
      <h1 className="text-2xl font-black tracking-tighter uppercase">TURN</h1>
    </div>
    
    <div className="hidden lg:flex items-center gap-10">
      <button onClick={onScrollToCollection} className="text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition">Collection</button>
      <button onClick={onOpenContact} className="text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition">About Label</button>
    </div>

    <div className="flex items-center gap-3">
      <button className="p-2.5 rounded-full hover:bg-gray-100 transition" onClick={onSearch} aria-label="Search">
        <Search size={20} />
      </button>
      <button 
        className="p-2.5 rounded-full hover:bg-gray-100 transition relative" 
        aria-label="Wishlist"
        onClick={onOpenWishlist}
      >
        <Heart size={20} fill={wishlistCount > 0 ? "black" : "none"} />
        {wishlistCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-in zoom-in duration-300">
            {wishlistCount}
          </span>
        )}
      </button>
      <button 
        onClick={onOpenContact}
        className="ml-2 hidden sm:flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition shadow-xl shadow-black/10"
      >
        <Mail size={14} />
        Contact
      </button>
    </div>
  </nav>
);

const WishlistOverlay = ({ isOpen, onClose, likedItems, onToggleLike, onProductClick }: {
  isOpen: boolean;
  onClose: () => void;
  likedItems: Product[];
  onToggleLike: (id: string) => void;
  onProductClick: (product: Product) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-white animate-in slide-in-from-right duration-500 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex justify-between items-end mb-16 border-b border-neutral-100 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Your Saved Pieces</h2>
            <p className="text-neutral-400 font-medium mt-4 uppercase tracking-[0.2em] text-xs">A curated selection of your Turn-lifestyle favorites</p>
          </div>
          <button onClick={onClose} className="p-4 hover:bg-neutral-50 rounded-full transition group">
            <X size={40} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {likedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {likedItems.map((product) => (
              <div 
                key={product.id}
                className="group relative cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-50 mb-6">
                  <img src={product.mainImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-xl uppercase italic tracking-tight">{product.name}</h3>
                    <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest mt-1">{product.category.replace('-', ' ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{product.price}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike(product.id);
                      }}
                      className="text-neutral-300 hover:text-black transition-colors mt-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h3 className="text-3xl font-black uppercase italic mb-4">Your list is empty.</h3>
            <p className="text-neutral-400 font-medium mb-10">Start saving pieces to create your perfect collection.</p>
            <button onClick={onClose} className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-800 transition shadow-xl">Back to Gallery</button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product, onClick, isLiked, onToggleLike }: {
  product: Product;
  onClick: (product: Product) => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
}) => (
  <div 
    className="group cursor-pointer bg-white rounded-[2rem] p-4 border border-gray-100 hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
    onClick={() => onClick(product)}
  >
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 mb-4">
      <img src={product.mainImg} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <button 
        className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-all z-20 ${
          isLiked ? 'bg-black text-white scale-110' : 'bg-white/90 backdrop-blur-sm hover:bg-black hover:text-white'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleLike(product.id);
        }}
      >
        <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
      </button>
    </div>
    <div className="px-2">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-lg leading-tight line-clamp-1">{product.name}</h3>
        <span className="font-bold text-lg">{product.price}</span>
      </div>
      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <span className="text-orange-400">★</span>
        <span className="font-medium text-black">{product.rating}</span>
        <span>•</span>
        <span className="capitalize">{product.category.replace('-', ' ')}</span>
      </div>
    </div>
  </div>
);

const ProductModal = ({ product, onClose, isLiked, onToggleLike }: {
  product: Product;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
}) => {
  const [activeImg, setActiveImg] = useState(product.mainImg);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const whatsappMessage = encodeURIComponent(`Hi TURN! I am interested in ${product.name} (${product.price}).`);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate email submission
    setTimeout(() => {
      setSubmitStatus('success');
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 3000);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-6xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-x-hidden animate-in zoom-in-95 duration-500">
        
        <button className="absolute top-8 right-8 z-[110] p-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg hover:scale-110 transition active:scale-95" onClick={onClose}>
          <X size={28} />
        </button>

        <div className="w-full md:w-[55%] p-6 md:p-12 flex flex-col gap-6 bg-neutral-50/50">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-inner relative">
             <img src={activeImg} className="w-full h-full object-cover" alt={product.name} />
             <button 
                className={`absolute top-6 right-6 p-3 rounded-full shadow-lg transition-all z-20 ${
                  isLiked ? 'bg-black text-white' : 'bg-white/90 backdrop-blur-sm hover:bg-black hover:text-white'
                }`}
                onClick={() => onToggleLike(product.id)}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {product.gallery.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(img)} className={`w-24 h-24 rounded-3xl overflow-hidden border-2 flex-shrink-0 transition-all ${activeImg === img ? 'border-black scale-105 shadow-xl' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[45%] p-8 md:p-16 flex flex-col">
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 bg-neutral-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-6">{product.category.replace('-', ' ')}</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic leading-[0.9] text-neutral-900 break-words">{product.name}</h2>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-light text-neutral-900">{product.price}</p>
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold">
                <Star size={18} className="fill-black" />
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h4 className="text-[10px] font-black uppercase mb-4 text-neutral-300 tracking-[0.4em]">Product Intel</h4>
            <p className="text-neutral-500 text-base leading-relaxed italic">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <a href={`https://wa.me/${BRAND_WHATSAPP}?text=${whatsappMessage}`} target="_blank" className="flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:scale-[1.03] transition shadow-xl">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="https://instagram.com/turn-lifestyle" target="_blank" className="flex items-center justify-center gap-3 py-5 bg-neutral-950 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:scale-[1.03] transition shadow-xl">
              <Instagram size={18} /> Instagram
            </a>
          </div>

          <form 
            ref={formRef}
            onSubmit={handleEmailSubmit}
            className="space-y-4 pt-10 border-t border-neutral-100"
          >
            <h4 className="text-xs font-black uppercase text-black mb-1 italic tracking-widest underline">Show Interest</h4>
            
            {submitStatus === 'success' ? (
              <div className="p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 size={20} />
                <p className="text-xs font-bold uppercase tracking-widest">Inquiry Sent Successfully!</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="p-4 bg-red-50 text-red-700 rounded-2xl flex items-center gap-3 animate-in fade-in duration-300">
                <X size={20} />
                <p className="text-xs font-bold uppercase tracking-widest">Something went wrong. Try again.</p>
              </div>
            ) : null}

            <input 
              type="text" 
              name="customer_name"
              placeholder="Full Name" 
              className="w-full p-5 bg-neutral-50 border border-transparent rounded-2xl text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition" 
              required 
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="tel" 
                name="customer_phone"
                placeholder="Phone" 
                className="w-full p-5 bg-neutral-50 border border-transparent rounded-2xl text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition" 
                required 
              />
              <input 
                type="email" 
                name="customer_email"
                placeholder="Email" 
                className="w-full p-5 bg-neutral-50 border border-transparent rounded-2xl text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition" 
                required 
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 bg-black text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition active:scale-95 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <>Register Interest <ArrowRight size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [heroIndex, setHeroIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState(new Set<string>());

  const collectionRef = useRef<HTMLDivElement>(null);

  const toggleLike = (productId: string) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  const likedItemsList = useMemo(() => {
    return PRODUCTS.filter(p => likedProducts.has(p.id));
  }, [likedProducts]);

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  const heroProducts = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(PRODUCTS[(heroIndex + i) % PRODUCTS.length]);
    }
    return items;
  }, [heroIndex]);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      <Navbar 
        onSearch={() => setIsSearchOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onScrollToCollection={scrollToCollection}
        wishlistCount={likedProducts.size}
      />

      {/* WISHLIST OVERLAY */}
      <WishlistOverlay 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        likedItems={likedItemsList}
        onToggleLike={toggleLike}
        onProductClick={(p) => {
          setIsWishlistOpen(false);
          setViewProduct(p);
        }}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[#FDFDFD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center relative">
          <div className="flex gap-4 md:gap-10 items-end justify-center mb-20 h-72 md:h-[500px] w-full relative group">
            <button onClick={prevHero} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur shadow-2xl rounded-full border border-neutral-100 hover:scale-110 active:scale-95 transition opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300">
              <ChevronLeft size={24} />
            </button>

            {heroProducts.map((p, idx) => (
              <div 
                key={`${p.id}-${idx}`}
                onClick={() => setViewProduct(p)}
                className={`relative group/item transition-all hover:-translate-y-6 duration-700 cursor-pointer animate-in fade-in slide-in-from-bottom-10
                  ${idx === 0 ? 'w-1/4 h-[65%]' : idx === 1 ? 'w-1/3 h-full' : 'w-1/4 h-[80%]'}`}
              >
                <img src={p.mainImg} className={`w-full h-full object-contain drop-shadow-2xl ${idx === 1 ? 'scale-110' : ''}`} alt={p.name} />
              </div>
            ))}

            <button onClick={nextHero} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur shadow-2xl rounded-full border border-neutral-100 hover:scale-110 active:scale-95 transition opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none italic">Style Revolved.</h2>
            <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-lg font-medium italic tracking-tight">Premium minimalist apparel designed for turn-lifestyle.</p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section ref={collectionRef} className="sticky top-20 z-40 bg-white/80 backdrop-blur-md py-6 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.slug} 
                onClick={() => setSelectedCategory(cat.slug)} 
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                  selectedCategory === cat.slug ? 'bg-black text-white shadow-lg scale-105' : 'bg-neutral-50 text-neutral-400 hover:bg-neutral-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-neutral-400 text-[10px] font-black uppercase tracking-widest">
            <Filter size={14} />
            <span>Refine Collection</span>
          </div>
        </div>
      </section>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 min-h-[60vh]">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={setViewProduct}
                isLiked={likedProducts.has(product.id)}
                onToggleLike={toggleLike}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h3 className="text-4xl font-black uppercase italic mb-4">Void found.</h3>
            <button onClick={() => {setSearchQuery(''); setSelectedCategory('all');}} className="font-black underline uppercase tracking-[0.3em] text-xs">Reset All Filters</button>
          </div>
        )}
      </main>

      {viewProduct && (
        <ProductModal 
          product={viewProduct} 
          onClose={() => setViewProduct(null)} 
          isLiked={likedProducts.has(viewProduct.id)}
          onToggleLike={toggleLike}
        />
      )}

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-white py-24 px-6 md:px-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          <div className="space-y-10">
            <h3 className="text-5xl font-black tracking-tighter italic uppercase">TURN</h3>
            <p className="text-neutral-500 leading-relaxed text-lg italic max-w-sm">Handcrafted in Bangalore. We prioritize craftsmanship over trends.</p>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase text-neutral-700 tracking-[0.4em]">Navigation</h4>
            <div className="flex flex-col gap-4 text-2xl font-light italic">
              <button onClick={scrollToCollection} className="hover:text-neutral-400 transition w-fit">Collection</button>
              <a href="https://instagram.com/turn-lifestyle" className="hover:text-neutral-400 transition w-fit">Instagram</a>
              <a href={`https://wa.me/${BRAND_WHATSAPP}`} className="hover:text-neutral-400 transition w-fit">WhatsApp</a>
            </div>
          </div>
          <div className="space-y-10">
             <h4 className="text-[10px] font-black uppercase text-neutral-700 tracking-[0.4em]">Support</h4>
             <button onClick={() => setIsContactOpen(true)} className="w-full py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest hover:bg-neutral-200 transition shadow-2xl active:scale-95">Contact Us</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
