import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function TopHeader({ 
  cartCount, 
  onOpenCart, 
  onToggleMobileMenu 
}) {
  return (
    <header className="flex items-center justify-between py-5 px-4 sm:px-8 bg-transparent">
      {/* Mobile Menu Button & Brand */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onToggleMobileMenu}
          className="p-2 rounded-lg bg-white border border-[#EFECE6] text-stone-700 hover:bg-stone-50 transition-colors"
          aria-label="Buka menu kategori"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Mobile Brand */}
        <span className="font-serif font-bold text-base text-[#1F1A17] tracking-wider">
          HASTNA BATIK
        </span>
      </div>

      <div className="hidden lg:block">
        {/* Spacer for desktop layout */}
      </div>

      {/* Right Action Button (Keranjang) */}
      <div className="flex items-center ml-auto">
        <button
          onClick={onOpenCart}
          className="bg-white border border-[#E8E4DC] hover:border-stone-400 text-stone-800 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-xs transition-all active:scale-95 group"
        >
          <ShoppingBag className="w-4 h-4 text-stone-700 group-hover:text-stone-900 transition-colors" />
          <span>Keranjang ({cartCount})</span>
        </button>
      </div>
    </header>
  );
}
