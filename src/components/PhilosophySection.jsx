import React from 'react';
import { Sparkles, BookOpen, Compass, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section id="filosofi-section" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B4513]/10 text-[#8B4513] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kearifan Leluhur</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#2A1810]">
            Mengenal Ragam & Karakter Batik Nusantara
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Batik bukan sekadar corak pada kain, melainkan representasi tata krama, perjalanan spiritual, dan akulturasi peradaban kepulauan nusantara.
          </p>
        </div>

        {/* 3 Pillars / Styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/30 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#2A1810] text-[#C5A059] flex items-center justify-center font-bold text-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#2A1810]">
              Batik Pedalaman (Keraton)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Berkembang di Solo dan Yogyakarta. Berorientasi pada warna sogan (cokelat bumi, nila, dan putih). Sarat makna simbolis, tata tertib pemakaian, dan doa permohonan keselamatan.
            </p>
            <div className="text-xs text-[#8B4513] font-semibold pt-1">
              Contoh: Parang Rusak, Kawung, Sidomukti, Truntum.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/30 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#8B4513] text-white flex items-center justify-center font-bold text-lg">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#2A1810]">
              Batik Pesisiran
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tumbuh di daerah pesisir pantai utara seperti Cirebon, Pekalongan, Lasem, dan Madura. Dinamis, penuh akulturasi pedagang Tiongkok, Arab, dan Eropa dengan palet warna cerah mencolok.
            </p>
            <div className="text-xs text-[#8B4513] font-semibold pt-1">
              Contoh: Mega Mendung, Tujuh Rupa, Batik Gentongan Madura.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/30 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-[#2A1810] flex items-center justify-center font-bold text-lg">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#2A1810]">
              Batik Nusantara Luar Jawa
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Berkembang di Kalimantan, Papua, Sumatra, hingga Bali. Memadukan teknik perintangan malam dengan ukiran etnis lokal, flora fauna endemik, dan simbol kekuatan suku asli.
            </p>
            <div className="text-xs text-[#8B4513] font-semibold pt-1">
              Contoh: Batik Shaho Dayak, Batik Cenderawasih & Asmat Papua.
            </div>
          </div>

        </div>

        {/* 3 Main Techniques Banner */}
        <div className="bg-[#2A1810] text-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-[#C5A059]">
              3 Teknik Pembuatan Batik Asli
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              UNESCO menetapkan batik berdasarkan proses perintangan lilin panas (malam) menggunakan alat tradisional:
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-center">
              <strong className="block text-[#C5A059]">Batik Tulis</strong>
              <span className="text-stone-400">Canting Tembaga Manual</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-center">
              <strong className="block text-[#C5A059]">Batik Cap</strong>
              <span className="text-stone-400">Cap Tembaga Presisi</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-center">
              <strong className="block text-[#C5A059]">Batik Kombinasi</strong>
              <span className="text-stone-400">Cap + Sentuhan Tulis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
