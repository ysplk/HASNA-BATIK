import React from 'react';
import { ArrowLeft, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../data/batikData';

export default function CartView({ 
  cartItems, 
  onBack, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors group mb-2"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Lanjut Pilih Batik</span>
      </button>

      {/* Page Title */}
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A17] mb-6">
        Keranjang Koleksi
      </h1>

      {/* Cart Content: Empty or Populated */}
      {cartItems.length === 0 ? (
        /* Empty State (Matches Screenshot Image 4) */
        <div className="bg-white border border-[#EFECE6] rounded-3xl p-16 sm:p-24 flex flex-col items-center justify-center text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-center text-stone-300">
            <ShoppingBag className="w-8 h-8 stroke-1" />
          </div>

          <p className="text-xs sm:text-sm text-stone-500 font-normal">
            Keranjang belanjaanmu masih kosong.
          </p>

          <div className="pt-2">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-[#261E1A] hover:bg-[#1A1411] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-xs transition-all active:scale-95"
            >
              LIHAT KOLEKSI BATIK
            </button>
          </div>
        </div>
      ) : (
        /* Populated State */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Item List */}
          <div className="lg:col-span-2 space-y-3">
            <div className="bg-white border border-[#EFECE6] rounded-2xl p-4 sm:p-6 shadow-xs divide-y divide-stone-100">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-xl bg-stone-100 shrink-0 border border-stone-100"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C6D46]">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1F1A17] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-stone-900">
                      {formatRupiah(item.price)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition-colors"
                        title="Kurangi kuantitas"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition-colors"
                        title="Tambah kuantitas"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                      title="Hapus dari keranjang"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center px-1">
              <button
                onClick={onClearCart}
                className="text-xs text-stone-500 hover:text-red-600 transition-colors"
              >
                Kosongkan Keranjang
              </button>
              <button
                onClick={onBack}
                className="text-xs font-semibold text-[#8C6D46] hover:underline"
              >
                + Tambah Motif Lain
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#EFECE6] rounded-2xl p-6 shadow-xs space-y-5 sticky top-24">
              <h2 className="font-serif text-lg font-bold text-[#1F1A17] border-b border-stone-100 pb-3">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>Total Koleksi ({totalItemsCount} item)</span>
                  <span className="font-semibold text-stone-900">{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pengiriman Aman Asuransi</span>
                  <span className="text-green-700 font-semibold">Gratis (Promo)</span>
                </div>
                <div className="border-t border-stone-100 pt-3 flex justify-between text-base font-bold text-[#1F1A17]">
                  <span>Total Tagihan</span>
                  <span>{formatRupiah(totalPrice)}</span>
                </div>
              </div>

              <button
                onClick={() => alert(`Terima kasih! Pesanan sejumlah ${formatRupiah(totalPrice)} sedang diproses.`)}
                className="w-full py-3.5 bg-[#261E1A] hover:bg-[#1A1411] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>LANJUT KE PEMBAYARAN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
