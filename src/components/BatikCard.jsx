import React, { useState } from 'react';
import { Heart, MapPin, Eye, Sparkles, Feather } from 'lucide-react';

export default function BatikCard({ batik, isFavorite, onToggleFavorite, onSelect }) {
  const [imgError, setImgError] = useState(false);

  // Fallback image if remote URL fails
  const fallbackImage = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop";

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={imgError ? fallbackImage : (batik.image || fallbackImage)}
          alt={batik.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none"></div>

        {/* Region badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2A1810]/85 backdrop-blur-sm text-stone-100 text-xs font-medium border border-[#C5A059]/40 shadow">
          <MapPin className="w-3 h-3 text-[#C5A059]" />
          <span>{batik.region}</span>
        </div>

        {/* Favorite button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(batik.id);
          }}
          aria-label={isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-700 hover:text-red-500 hover:scale-110 active:scale-90 transition-all shadow-md group/fav"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'text-red-600 fill-red-600' : 'text-stone-600 group-hover/fav:text-red-500'
            }`}
          />
        </button>

        {/* Bottom image overlay: Name & Era */}
        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
          <h3 className="font-serif-title text-lg sm:text-xl font-bold tracking-wide text-white drop-shadow-md">
            {batik.name}
          </h3>
          <p className="text-xs text-[#C5A059] font-medium drop-shadow flex items-center gap-1">
            <Feather className="w-3 h-3 text-[#C5A059]" />
            {batik.origin}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        {/* Category & Technique */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#8B4513]/10 text-[#8B4513] border border-[#8B4513]/20">
              {batik.category}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
              {batik.technique}
            </span>
          </div>

          {/* Philosophy short snippet */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed pt-1">
            {batik.philosophy}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {batik.tags?.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action button */}
        <div className="pt-2 border-t border-stone-100">
          <button
            onClick={() => onSelect(batik)}
            className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-[#8B4513] text-stone-100 font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <Eye className="w-4 h-4 text-[#C5A059] group-hover/btn:text-white transition-colors" />
            <span>Pelajari Filosofi & Detail</span>
          </button>
        </div>

      </div>
    </div>
  );
}
