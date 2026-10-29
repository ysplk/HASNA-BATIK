import React from 'react';
import { Sparkles, Compass, Award, BookOpen, Layers } from 'lucide-react';

export default function Hero({ totalBatik, onExploreClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2A1810] via-[#3B2215] to-[#2A1810] text-white py-16 lg:py-24 border-b border-[#C5A059]/20">
      {/* Decorative Traditional Batik Motifs in Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-xs sm:text-sm font-medium tracking-wide">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span>Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi (UNESCO 2009)</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
            Eksplorasi Keindahan & Filosofi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4ECE1] via-[#C5A059] to-[#E5C17B]">
              Batik Nusantara
            </span>
          </h1>

          {/* Description */}
          <p className="text-stone-300 text-sm sm:text-lg leading-relaxed font-light">
            Setiap goresan canting dan tetesan malam menyimpan makna sakral, doa leluhur, serta kearifan peradaban suku bangsa di kepulauan Indonesia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8B4513] text-[#2A1810] font-bold text-sm sm:text-base shadow-lg shadow-[#C5A059]/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <Compass className="w-5 h-5 text-[#2A1810]" />
              <span>Jelajahi Galeri Motif</span>
            </button>
            <a
              href="#filosofi-section"
              className="px-6 py-3.5 rounded-xl bg-stone-900/80 border border-stone-700 text-stone-200 font-medium text-sm sm:text-base hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-[#C5A059]" />
              <span>Filosofi & Sejarah</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-stone-800/80 max-w-4xl mx-auto">
            <div className="p-3 bg-stone-900/40 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-bold text-[#C5A059] font-serif-title">
                {totalBatik}+
              </div>
              <div className="text-xs text-stone-400 mt-0.5">Motif Terkatalog</div>
            </div>

            <div className="p-3 bg-stone-900/40 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-bold text-[#C5A059] font-serif-title">
                5+
              </div>
              <div className="text-xs text-stone-400 mt-0.5">Zona Wilayah Asal</div>
            </div>

            <div className="p-3 bg-stone-900/40 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-bold text-[#C5A059] font-serif-title">
                100%
              </div>
              <div className="text-xs text-stone-400 mt-0.5">Filosofi & Makna Adat</div>
            </div>

            <div className="p-3 bg-stone-900/40 rounded-xl border border-stone-800">
              <div className="text-2xl sm:text-3xl font-bold text-[#C5A059] font-serif-title">
                Interaktif
              </div>
              <div className="text-xs text-stone-400 mt-0.5">Kuis & Fitur Koleksi</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
