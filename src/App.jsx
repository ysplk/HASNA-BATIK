import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import BatikCard from './components/BatikCard';
import BatikDetailModal from './components/BatikDetailModal';
import AddBatikModal from './components/AddBatikModal';
import QuizModal from './components/QuizModal';
import PhilosophySection from './components/PhilosophySection';
import Footer from './components/Footer';
import { initialBatikList } from './data/batikData';
import { Sparkles, Heart, Search, Frown } from 'lucide-react';

export default function App() {
  // 1. Data Batik State with LocalStorage persistence
  const [batikList, setBatikList] = useState(() => {
    try {
      const saved = localStorage.getItem('batikpedia_list');
      return saved ? JSON.parse(saved) : initialBatikList;
    } catch {
      return initialBatikList;
    }
  });

  // 2. Favorites State with LocalStorage persistence
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('batikpedia_favorites');
      return saved ? JSON.parse(saved) : [1, 2, 4]; // Default favorite initial Mega Mendung, Parang, Truntum
    } catch {
      return [1, 2, 4];
    }
  });

  // 3. Filter and Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Semua Wilayah');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // 4. Modal States
  const [selectedBatik, setSelectedBatik] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const galleryRef = useRef(null);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('batikpedia_list', JSON.stringify(batikList));
    } catch (err) {
      console.error("Gagal menyimpan ke localStorage", err);
    }
  }, [batikList]);

  useEffect(() => {
    try {
      localStorage.setItem('batikpedia_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error("Gagal menyimpan favorit ke localStorage", err);
    }
  }, [favorites]);

  // Toggle Favorite Handler
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Add new Batik handler
  const handleAddBatik = (newBatik) => {
    setBatikList(prev => [newBatik, ...prev]);
    // Automatically open the newly added batik's detail
    setSelectedBatik(newBatik);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('Semua Wilayah');
    setSelectedCategory('Semua Kategori');
    setShowOnlyFavorites(false);
  };

  // Filtered List calculation
  const filteredBatik = useMemo(() => {
    return batikList.filter((item) => {
      // 1. Filter Region
      if (selectedRegion !== 'Semua Wilayah' && item.region !== selectedRegion) {
        return false;
      }

      // 2. Filter Category
      if (selectedCategory !== 'Semua Kategori' && item.category !== selectedCategory) {
        return false;
      }

      // 3. Filter Favorites
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }

      // 4. Filter Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchOrigin = item.origin.toLowerCase().includes(query);
        const matchPhilosophy = item.philosophy?.toLowerCase().includes(query);
        const matchTags = item.tags?.some(tag => tag.toLowerCase().includes(query));
        return matchName || matchOrigin || matchPhilosophy || matchTags;
      }

      return true;
    });
  }, [batikList, selectedRegion, selectedCategory, showOnlyFavorites, searchQuery, favorites]);

  // Scroll to gallery
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] selection:bg-[#C5A059] selection:text-[#2A1810]">
      
      {/* Navigation Bar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={favorites.length}
        onOpenFavorites={() => {
          setShowOnlyFavorites(true);
          scrollToGallery();
        }}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Hero Header */}
      <Hero 
        totalBatik={batikList.length}
        onExploreClick={scrollToGallery}
      />

      {/* Main Content Area */}
      <main className="flex-1" ref={galleryRef}>
        
        {/* Filters & Categories */}
        <FilterSection
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showOnlyFavorites={showOnlyFavorites}
          setShowOnlyFavorites={setShowOnlyFavorites}
          searchQuery={searchQuery}
          onResetFilters={handleResetFilters}
          totalResults={filteredBatik.length}
        />

        {/* Batik Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Active Filter Notice */}
          {showOnlyFavorites && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center justify-between text-red-800 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                <span>Menampilkan <strong>{filteredBatik.length}</strong> motif yang tersimpan di koleksi favoritmu.</span>
              </div>
              <button 
                onClick={() => setShowOnlyFavorites(false)}
                className="text-xs font-bold underline hover:text-red-950"
              >
                Tampilkan Semua
              </button>
            </div>
          )}

          {/* Cards Grid */}
          {filteredBatik.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredBatik.map((batik) => (
                <BatikCard
                  key={batik.id}
                  batik={batik}
                  isFavorite={favorites.includes(batik.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelect={setSelectedBatik}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-stone-50 rounded-3xl border border-dashed border-stone-300 max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-stone-200 flex items-center justify-center text-stone-500">
                <Frown className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-title text-xl font-bold text-stone-800">
                  Tidak Ada Motif Ditemukan
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-xs mx-auto">
                  Coba ubah kata kunci pencarian atau sesuaikan pilihan filter daerah dan kategori.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2 rounded-xl bg-[#8B4513] text-white text-xs font-semibold hover:bg-[#6b350e] transition-colors"
              >
                Reset Semua Filter
              </button>
            </div>
          )}

        </div>

        {/* Culture & Philosophy Education Section */}
        <PhilosophySection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BatikDetailModal
        batik={selectedBatik}
        isOpen={Boolean(selectedBatik)}
        onClose={() => setSelectedBatik(null)}
        isFavorite={selectedBatik ? favorites.includes(selectedBatik.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <AddBatikModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBatik={handleAddBatik}
      />

      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />

    </div>
  );
}
