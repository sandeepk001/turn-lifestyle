'use client';

import { X, Star, MessageCircle, Instagram } from 'lucide-react';
import { Product } from '@/data/products';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedImage(0);
      setShowForm(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleWhatsAppClick = () => {
    const message = `Hi TURN! I am interested in ${product.name} (₹${product.price.toLocaleString()}).`;
    const whatsappUrl = `https://wa.me/918549065824?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/turn_lifestyle', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', { ...formData, product: product.name });
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '' });
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-gray-50 rounded-[2rem] overflow-hidden">
                <Image
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square bg-gray-50 rounded-2xl overflow-hidden transition-all ${
                      selectedImage === idx ? 'ring-4 ring-black' : 'hover:ring-2 ring-gray-300'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-contain p-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 leading-tight break-words">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{product.category}</p>

                <div className="flex items-center gap-4 mb-6">
                  <p className="text-4xl font-bold">₹{product.price.toLocaleString()}</p>
                  <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 rounded-full">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                {/* Color Swatches */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Available Colors</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mt-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Inquire via WhatsApp
                </button>

                <button
                  onClick={handleInstagramClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </button>

                <button
                  onClick={() => setShowForm(!showForm)}
                  className="w-full px-6 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  {showForm ? 'Hide Inquiry Form' : 'Send Inquiry via Form'}
                </button>
              </div>

              {/* Inquiry Form */}
              {showForm && (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4 p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-semibold text-lg mb-4">Send us your inquiry</h3>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
