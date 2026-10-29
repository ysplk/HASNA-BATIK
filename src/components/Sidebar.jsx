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
          {/* Logo Brand */}
          <div 
            onClick={() => {
              onResetView();
              if (onCloseMobile) onCloseMobile();
            }}
            className="cursor-pointer group select-none"
          >
            <h1 className="font-serif text-2xl font-bold tracking-[0.25em] text-[#1F1A17] group-hover:text-[#8C7355] transition-colors">
              LUMINA
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

        {/* Bottom Love Badge */}
        <div className="pt-6">
          <div className="bg-[#FAF6F0] border border-[#EFE8DF] rounded-xl p-3.5 text-xs text-stone-600 leading-relaxed font-normal">
            Dibuat dengan rasa cinta pada Budaya Indonesia.
          </div>
        </div>
      </aside>
    </>
  );
}
