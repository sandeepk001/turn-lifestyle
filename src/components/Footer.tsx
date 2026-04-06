'use client';

import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">TURN</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium apparel with minimalist design. Style revolved for the modern wardrobe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Bangalore, India</span>
              </li>
              <li>
                <a
                  href="https://wa.me/918549065824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+91 8549065824</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@turn-lifestyle.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@turn-lifestyle.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} TURN Lifestyle. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/turn_lifestyle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918549065824"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
