import React from 'react';
import { categories } from '../data/batikData';

export default function Sidebar({ 
  selectedCategory, 
  onSelectCategory,
  onResetView,
  isOpenMobile,
  onCloseMobile 
}) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 sm:w-72 bg-white border-r border-[#EFECE6] p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-8">
          {/* Logo & Brand Section */}
          <div 
            onClick={() => {
              onResetView();
              if (onCloseMobile) onCloseMobile();
            }}
            className="cursor-pointer group select-none block"
          >
            {/* Logo Emblem di bagian atas title */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8C6D46] via-[#C5A059] to-[#2A1810] p-0.5 shadow-xs mb-3 flex items-center justify-center group-hover:scale-105 group-hover:shadow-md transition-all">
              <div className="w-full h-full bg-[#1F1A17] rounded-[14px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#EAD8C3]">
                  {/* Central core */}
                  <circle cx="12" cy="12" r="2.2" fill="#C5A059" />
                  {/* 4 Kawung Petals */}
                  <path 
                    d="M12 2.5C9.5 6 6 9.5 2.5 12 6 14.5 9.5 18 12 21.5 14.5 18 18 14.5 21.5 12 18 9.5 14.5 6 12 2.5Z" 
                    stroke="#C5A059" 
                    strokeWidth="1.25" 
                    strokeLinejoin="round" 
                    fill="#8C6D46" 
                    fillOpacity="0.25" 
                  />
                  {/* Decorative dots */}
                  <circle cx="12" cy="6.5" r="0.9" fill="#EAD8C3" />
                  <circle cx="12" cy="17.5" r="0.9" fill="#EAD8C3" />
                  <circle cx="6.5" cy="12" r="0.9" fill="#EAD8C3" />
                  <circle cx="17.5" cy="12" r="0.9" fill="#EAD8C3" />
                  {/* Corner accents */}
                  <path d="M7.5 7.5L8.5 8.5M16.5 7.5L15.5 8.5M7.5 16.5L8.5 15.5M16.5 16.5L15.5 15.5" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                </svg>
              </div>
            </div>

            {/* Brand Title & Subtitle */}
            <h1 className="font-serif text-2xl font-bold tracking-[0.2em] text-[#1F1A17] group-hover:text-[#8C7355] transition-colors leading-tight">
              HASTNA BATIK
            </h1>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-[#8C7355] uppercase mt-1">
              Batik & Craft Gallery
            </p>
          </div>

          {/* Navigation Categories */}
          <div>
            <h2 className="text-[11px] font-bold text-stone-400 tracking-wider uppercase mb-3 px-1">
              KATEGORI MOTIF
            </h2>
            <nav className="space-y-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#F4EDE4] text-[#1F1A17] font-semibold' 
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                    }`}
                  >
                    <span>{cat}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B4B3E] shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="pt-6">
          <div className="bg-[#FAF6F0] border border-[#EFE8DF] rounded-xl p-3.5 text-xs text-stone-600 leading-relaxed font-normal">
            Dibuat dengan rasa cinta pada Budaya Indonesia.
          </div>
        </div>
      </aside>
    </>
  );
}
