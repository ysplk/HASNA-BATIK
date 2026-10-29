import React, { useState } from 'react';
import { Sparkles, Heart, PlusCircle, HelpCircle, Search, Menu, X, Compass } from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  favoritesCount, 
  onOpenFavorites, 
  onOpenAddModal, 
  onOpenQuiz,
  activeSection,
  setActiveSection
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#2A1810]/95 backdrop-blur-md text-white border-b border-[#C5A059]/30 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8B4513] p-0.5 shadow-md flex items-center justify-center group-hover:rotate-6 transition-transform">
              <div className="w-full h-full bg-[#2A1810] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#C5A059]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-wider text-[#FDFBF7]">
                  BATIK<span className="text-[#C5A059]">PEDIA</span>
                </span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 tracking-wider">
                  Nusantara
                </span>
              </div>
              <p className="text-xs text-stone-300 font-light tracking-wide hidden sm:block">
                Mahakarya & Filosofi Budaya Indonesia
              </p>
            </div>
          </div>

          {/* Search bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Cari motif, asal daerah, atau filosofi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-900/60 border border-stone-700 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 rounded-full text-sm text-stone-100 placeholder-stone-400 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-stone-200 hover:text-[#C5A059] hover:bg-stone-800/60 transition-all border border-transparent hover:border-stone-700"
            >
              <HelpCircle className="w-4 h-4 text-[#C5A059]" />
              <span>Kuis Batik</span>
            </button>

            <button
              onClick={onOpenFavorites}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-800/60 transition-all border border-stone-800 hover:border-stone-700"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-stone-300'}`} />
              <span>Favorit</span>
              {favoritesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-xs font-bold bg-red-600 text-white rounded-full min-w-[20px] text-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAddModal}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C5A059] to-[#8B4513] text-[#2A1810] font-semibold text-sm rounded-lg hover:shadow-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#C5A059]/20"
            >
              <PlusCircle className="w-4 h-4 text-[#2A1810]" />
              <span>Tambah Motif</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-stone-300 hover:text-white"
              title="Favorit"
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-5 pt-2 border-t border-stone-800 space-y-3 animate-fadeIn">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Cari motif batik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-100 placeholder-stone-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  onOpenQuiz();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm bg-stone-800 text-stone-200"
              >
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                Kuis Batik
              </button>
              <button
                onClick={() => {
                  onOpenAddModal();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm bg-[#C5A059] text-[#2A1810] font-semibold"
              >
                <PlusCircle className="w-4 h-4" />
                Tambah Motif
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
