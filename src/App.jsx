import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import HeroSection from './components/HeroSection';
import BatikCard from './components/BatikCard';
import DetailView from './components/DetailView';
import CartView from './components/CartView';
import { initialBatikList } from './data/batikData';

export default function App() {
  // 1. Batik Catalog State with LocalStorage
  const [batikList] = useState(() => {
    try {
      const saved = localStorage.getItem('lumina_batik_list');
      return saved ? JSON.parse(saved) : initialBatikList;
    } catch {
      return initialBatikList;
    }
  });

  // 2. Shopping Cart State with LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lumina_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 3. Navigation & Views State
  const [currentView, setCurrentView] = useState('catalog'); // 'catalog' | 'detail' | 'cart'
  const [selectedBatik, setSelectedBatik] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('lumina_cart', JSON.stringify(cart));
    } catch (err) {
      console.error("Gagal menyimpan keranjang ke localStorage", err);
    }
  }, [cart]);

  // Cart Operations
  const handleAddToCart = (batik) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === batik.id);
      if (existing) {
        return prev.map(item => 
          item.id === batik.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...batik, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  // View navigation handlers
  const handleSelectBatik = (batik) => {
    setSelectedBatik(batik);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setCurrentView('catalog');
    setSelectedBatik(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCart = () => {
    setCurrentView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetView = () => {
    setSelectedCategory('Semua');
    setSearchQuery('');
    setCurrentView('catalog');
    setSelectedBatik(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter calculation
  const filteredBatikList = useMemo(() => {
    return batikList.filter((item) => {
      // Category filter
      if (selectedCategory !== 'Semua' && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchRegion = item.region?.toLowerCase().includes(query);
        const matchPhilosophy = item.philosophy?.toLowerCase().includes(query);
        const matchDescription = item.description?.toLowerCase().includes(query);
        return matchName || matchRegion || matchPhilosophy || matchDescription;
      }
      return true;
    });
  }, [batikList, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex">
      
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetView={handleResetView}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Top Header Bar */}
        <TopHeader
          cartCount={totalCartCount}
          onOpenCart={handleOpenCart}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Dynamic View Container */}
        <main className="flex-1 px-4 sm:px-8 pb-16 max-w-7xl w-full mx-auto">
          
          {/* VIEW: CATALOG */}
          {currentView === 'catalog' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Hero Banner */}
              <HeroSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              {/* Product Grid */}
              {filteredBatikList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {filteredBatikList.map((batik) => (
                    <BatikCard
                      key={batik.id}
                      batik={batik}
                      onSelect={handleSelectBatik}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state when search or filter returns 0 */
                <div className="bg-white border border-[#EFECE6] rounded-3xl p-12 text-center space-y-3">
                  <h3 className="font-serif text-lg font-bold text-stone-800">
                    Tidak Ada Motif Ditemukan
                  </h3>
                  <p className="text-xs text-stone-500 max-w-md mx-auto">
                    Koleksi dengan kategori "{selectedCategory}" {searchQuery && `dan kata kunci "${searchQuery}"`} belum tersedia.
                  </p>
                  <button
                    onClick={handleResetView}
                    className="px-5 py-2.5 rounded-xl bg-[#261E1A] text-white text-xs font-semibold hover:bg-[#1A1411] transition-all"
                  >
                    Tampilkan Semua Motif
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW: DETAIL */}
          {currentView === 'detail' && selectedBatik && (
            <DetailView
              batik={selectedBatik}
              onBack={handleBackToCatalog}
              onAddToCart={handleAddToCart}
            />
          )}

          {/* VIEW: CART */}
          {currentView === 'cart' && (
            <CartView
              cartItems={cart}
              onBack={handleBackToCatalog}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveFromCart}
              onClearCart={handleClearCart}
            />
          )}

        </main>
      </div>

    </div>
  );
}
