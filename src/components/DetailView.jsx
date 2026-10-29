import React, { useState } from 'react';
import { ArrowLeft, Sparkles, ShoppingBag, Edit3, Trash2, Check } from 'lucide-react';
import { formatRupiah } from '../data/batikData';

export default function DetailView({ 
  batik, 
  onBack, 
  onAddToCart, 
  onEdit, 
  onDelete 
}) {
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop";

  if (!batik) return null;

  const handleAddToCart = () => {
    onAddToCart(batik);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors group mb-2"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Kembali ke Katalog</span>
      </button>

      {/* Main Detail Container Card */}
      <div className="bg-white rounded-3xl border border-[#EFECE6] p-6 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Image with Region Badge */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-xs">
          <img
            src={imgError ? fallbackImage : (batik.image || fallbackImage)}
            alt={batik.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />

          {/* Region Badge */}
          <div className="absolute top-4 left-4 bg-[#1F1A17] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
            {batik.region}
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category */}
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D46]">
              {batik.category}
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1A17] leading-tight">
              {batik.name}
            </h1>

            {/* Price */}
            <div className="text-2xl font-bold text-[#1F1A17]">
              {formatRupiah(batik.price)}
            </div>

            {/* Philosophy Box (Beige background matching screenshot) */}
            <div className="bg-[#FBF8F2] border border-[#EBE3D5] rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D46] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6D46]" />
                <span>FILOSOFI & MAKNA MOTIF</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                "{batik.philosophy}"
              </p>
            </div>

            {/* Specifications list */}
            <div className="divide-y divide-stone-100 text-xs sm:text-sm pt-2">
              <div className="py-3 flex items-center justify-between">
                <span className="text-stone-500 font-medium">Teknik Pembuatan</span>
                <span className="font-semibold text-stone-900">{batik.technique || 'Batik Tulis'}</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span className="text-stone-500 font-medium">Bahan Kain</span>
                <span className="font-semibold text-stone-900">{batik.material || 'Atbm Silk'}</span>
              </div>
            </div>
          </div>

          {/* Action Button & Admin Controls */}
          <div className="space-y-3 pt-4 border-t border-stone-100">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99] ${
                added 
                  ? 'bg-green-700 text-white' 
                  : 'bg-[#261E1A] hover:bg-[#1A1411] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>BERHASIL DITAMBAHKAN!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>TAMBAH KE KERANJANG</span>
                </>
              )}
            </button>

            {/* Admin CRUD Actions (Edit & Delete) */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => onEdit(batik)}
                className="flex-1 py-2.5 px-3 border border-stone-200 hover:border-[#8C7355] hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>Edit Motif (CRUD)</span>
              </button>

              <button
                onClick={() => onDelete(batik.id)}
                className="py-2.5 px-3 border border-stone-200 hover:border-red-300 hover:bg-red-50 text-stone-600 hover:text-red-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                title="Hapus Motif"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
