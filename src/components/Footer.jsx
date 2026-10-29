import React from 'react';
import { Sparkles, Heart, Code2, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A1810] text-stone-300 border-t border-[#C5A059]/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <span className="font-serif-title text-xl font-bold text-white tracking-wider">
                BATIK<span className="text-[#C5A059]">PEDIA</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Platform ensiklopedia dan galeri digital batik Indonesia. Melestarikan filosofi, nilai luhur, dan ragam hias motif warisan leluhur nusantara untuk generasi masa kini.
            </p>
          </div>

          {/* Academic Info (UTS Pemrograman Web 4) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <GraduationCap className="w-4 h-4 text-[#C5A059]" />
              <span>Project UTS Pemrograman Web 4</span>
            </div>
            <ul className="text-xs text-stone-400 space-y-1.5">
              <li>Mata Kuliah: <strong className="text-stone-300">Pemrograman Web 4</strong></li>
              <li>Semester: <strong className="text-stone-300">5 (Lima)</strong></li>
              <li>Stack: <strong className="text-stone-300">React 18 + Vite + Tailwind CSS</strong></li>
              <li>Fitur: Multi-Filter, Pencarian Real-time, LocalStorage, Modal Detail, Kuis Interaktif, Input Motif Baru.</li>
            </ul>
          </div>

          {/* Cultural Heritage Notes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Code2 className="w-4 h-4 text-[#C5A059]" />
              <span>Dedikasi Budaya</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Diakui oleh UNESCO sejak 2 Oktober 2009 sebagai Masterpiece of Oral and Intangible Heritage of Humanity. Mari bangga mengenakan dan mencintai batik Indonesia.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} BatikPedia Nusantara — Dibuat untuk Ujian Tengah Semester (UTS).</p>
          <p className="flex items-center gap-1">
            Dirancang dengan penuh cinta budaya <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & React
          </p>
        </div>

      </div>
    </footer>
  );
}
