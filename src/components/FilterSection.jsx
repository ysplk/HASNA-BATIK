import React from 'react';
import { Filter, MapPin, Tag, RotateCcw, Heart } from 'lucide-react';
import { regions, categories } from '../data/batikData';

export default function FilterSection({
  selectedRegion,
  setSelectedRegion,
  selectedCategory,
  setSelectedCategory,
  showOnlyFavorites,
  setShowOnlyFavorites,
  searchQuery,
  onResetFilters,
  totalResults
}) {
  const isFiltered = selectedRegion !== "Semua Wilayah" || selectedCategory !== "Semua Kategori" || showOnlyFavorites || searchQuery !== "";

  return (
    <div className="bg-[#F4ECE1] border-y border-[#C5A059]/20 py-6 px-4 sm:px-6 lg:px-8 mb-8 transition-all">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Top bar filter status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#8B4513]" />
            <h2 className="text-base font-bold text-[#2A1810]">
              Filter & Kategori Koleksi Batik
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8B4513]/10 text-[#8B4513] font-semibold">
              {totalResults} Motif Ditemukan
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Favorit */}
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                showOnlyFavorites
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-red-400'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-white' : 'text-red-500'}`} />
              <span>Hanya Favorit</span>
            </button>

            {/* Reset Filter Button */}
            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-stone-600 hover:text-red-700 hover:bg-stone-200 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Region Filter Chips */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#8B4513]" />
            <span>Asal Daerah:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedRegion === reg
                    ? 'bg-[#2A1810] text-[#C5A059] shadow-md font-semibold'
                    : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category / Meaning Filter Chips */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-2">
            <Tag className="w-3.5 h-3.5 text-[#8B4513]" />
            <span>Makna & Filosofi:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#8B4513] text-white shadow-md font-semibold'
                    : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
