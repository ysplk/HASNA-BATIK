import React from 'react';
import { ShoppingBag, Plus, Menu } from 'lucide-react';

export default function TopHeader({ 
  cartCount, 
  onOpenCart, 
  onOpenAddModal, 
  onToggleMobileMenu 
}) {
  return (
    <header className="flex items-center justify-between py-5 px-4 sm:px-8 bg-transparent">
      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onToggleMobileMenu}
          className="p-2 rounded-lg bg-white border border-[#EFECE6] text-stone-700 hover:bg-stone-50 transition-colors"
          aria-label="Buka menu kategori"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="font-serif font-bold text-lg text-[#1F1A17] tracking-wider">
          LUMINA
        </span>
      </div>

      <div className="hidden lg:block">
        {/* Spacer for desktop layout */}
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-3 ml-auto">
        {/* CRUD Add Button */}
        <button
          onClick={onOpenAddModal}
          className="bg-white border border-[#E8E4DC] hover:border-[#8C7355] hover:bg-[#FAF8F5] text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
          title="Tambah Koleksi Batik Baru (CRUD)"
        >
          <Plus className="w-3.5 h-3.5 text-[#8C7355]" />
          <span>Tambah Batik</span>
        </button>

        {/* Cart Button */}
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
