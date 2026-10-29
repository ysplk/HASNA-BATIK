import React, { useEffect, useState } from 'react';
import { X, Heart, MapPin, Feather, Sparkles, Calendar, Palette, Shirt, Share2, Check } from 'lucide-react';

export default function BatikDetailModal({ batik, isOpen, onClose, isFavorite, onToggleFavorite }) {
  const [copied, setCopied] = useState(false);
  const [imgZoom, setImgZoom] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !batik) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#C5A059]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          title="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Section */}
        <div className="w-full md:w-1/2 relative bg-stone-900 min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden">
          <img
            src={batik.image || "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop"}
            alt={batik.name}
            className={`w-full h-full object-cover transition-transform duration-500 cursor-zoom-in ${
              imgZoom ? 'scale-150' : 'hover:scale-105'
            }`}
            onClick={() => setImgZoom(!imgZoom)}
            title="Klik untuk zoom motif"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-stone-200">
            {imgZoom ? 'Klik untuk perkecil' : 'Klik gambar untuk memperbesar detail'}
          </div>
        </div>

        {/* Right Column: Detailed Info Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh] space-y-6">
          
          {/* Header Title */}
          <div className="border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#8B4513]/10 text-[#8B4513] border border-[#8B4513]/20">
                {batik.category}
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {batik.origin}
              </span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2A1810]">
              {batik.name}
            </h2>
          </div>

          {/* Philosophy Section */}
          <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#C5A059]/30 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#8B4513]">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Makna & Filosofi Mendalam</span>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed italic">
              "{batik.philosophy}"
            </p>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Karakter Visual & Ragam Hias
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {batik.description}
            </p>
          </div>

          {/* Grid Attributes */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium mb-1">
                <Feather className="w-3.5 h-3.5 text-[#8B4513]" />
                <span>Teknik Pembuatan</span>
              </div>
              <p className="font-semibold text-stone-800">{batik.technique || 'Batik Tradisional'}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#8B4513]" />
                <span>Asal Usul & Era</span>
              </div>
              <p className="font-semibold text-stone-800">{batik.era || 'Warisan Leluhur'}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium mb-1">
                <Palette className="w-3.5 h-3.5 text-[#8B4513]" />
                <span>Warna Dominan</span>
              </div>
              <p className="font-semibold text-stone-800">{batik.dominantColor || 'Sogan & Alami'}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium mb-1">
                <Shirt className="w-3.5 h-3.5 text-[#8B4513]" />
                <span>Penggunaan Tradisi</span>
              </div>
              <p className="font-semibold text-stone-800">{batik.usage || 'Upacara Adat & Busana Resmi'}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {batik.tags?.map((t, i) => (
              <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">
                #{t}
              </span>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
            <button
              onClick={() => onToggleFavorite(batik.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                isFavorite
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : 'text-red-500'}`} />
              <span>{isFavorite ? 'Tersimpan di Favorit' : 'Simpan ke Favorit'}</span>
            </button>

            <button
              onClick={handleShare}
              className="py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 text-sm font-medium flex items-center gap-1.5 transition-colors"
              title="Salin tautan"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Tersalin' : 'Bagikan'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
