'use client';

import { Search, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSearchClick: () => void;
  onWishlistClick: () => void;
}

export default function Header({ onSearchClick, onWishlistClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6">
      <nav className="max-w-7xl mx-auto glassmorphism rounded-[2rem] px-6 py-4 shadow-lg border border-white/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl md:text-3xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            TURN
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={onSearchClick}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onWishlistClick}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-black/10 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={onSearchClick}
              className="text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <Search className="w-4 h-4" /> Search
            </button>
            <button
              onClick={onWishlistClick}
              className="text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <Heart className="w-4 h-4" /> Wishlist
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors text-center"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
