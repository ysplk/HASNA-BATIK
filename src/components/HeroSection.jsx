import React from 'react';
import { Sparkles, Search, X } from 'lucide-react';

export default function HeroSection({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-[#F4ECE1] border border-[#E9DFCE] rounded-3xl p-6 sm:p-10 mb-8 transition-all relative overflow-hidden">
      {/* Background Decorative subtle ornament */}
      <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-5 pointer-events-none select-none">
        <Sparkles className="w-64 h-64 text-[#8C7355]" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-3">
        {/* Subtitle tag */}
        <div className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] font-semibold text-[#8C6D46] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#8C6D46]" />
          <span>WARISAN BUDAYA NUSANTARA</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F1A17] tracking-tight leading-tight">
          Mahakarya Batik Indonesia
        </h2>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          Eksplorasi keindahan motif batik autentik, lengkap dengan kisah sejarah dan filosofi di balik setiap goresan cantingnya.
        </p>

        {/* Search input inside Hero */}
        <div className="pt-4 max-w-lg">
          <div className="relative bg-white rounded-xl shadow-xs border border-stone-200/90 overflow-hidden flex items-center transition-all focus-within:ring-2 focus-within:ring-[#8C7355]/30 focus-within:border-[#8C7355]">
            <Search className="w-4 h-4 text-stone-400 ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari motif, asal daerah, atau filosofi..."
              className="w-full pl-3 pr-4 py-3 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-2 text-stone-400 hover:text-stone-700 mr-2"
                title="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
