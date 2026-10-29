import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { formatRupiah } from '../data/batikData';

export default function BatikCard({ 
  batik, 
  onSelect 
}) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#EFECE6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      
      {/* Top Image Container */}
      <div 
        onClick={() => onSelect(batik)}
        className="relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer"
      >
        <img
          src={imgError ? fallbackImage : (batik.image || fallbackImage)}
          alt={batik.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Region Badge (Top Left) */}
        <div className="absolute top-3 left-3 bg-[#1F1A17] text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
          {batik.region}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#8C6D46] mb-1">
            {batik.category}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(batik)}
            className="font-serif text-base sm:text-lg font-bold text-[#1F1A17] group-hover:text-[#8C6D46] transition-colors leading-snug mb-1.5 cursor-pointer line-clamp-1"
          >
            {batik.name}
          </h3>

          {/* Philosophy / Description Snippet */}
          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed italic mb-4">
            "{batik.philosophy || batik.description}"
          </p>
        </div>

        {/* Footer (Price & Detail Link) */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-3.5 mt-auto">
          <span className="font-bold text-sm text-[#1F1A17]">
            {formatRupiah(batik.price)}
          </span>

          <button
            onClick={() => onSelect(batik)}
            className="text-xs font-semibold text-stone-700 hover:text-[#8C6D46] flex items-center gap-1 cursor-pointer transition-colors group/btn"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
}
