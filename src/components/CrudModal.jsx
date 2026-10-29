import React, { useState, useEffect } from 'react';
import { X, Upload, Sparkles, Check } from 'lucide-react';
import { categories } from '../data/batikData';

export default function CrudModal({ 
  isOpen, 
  onClose, 
  onSave, 
  initialData 
}) {
  const isEditing = Boolean(initialData);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Kain Tradisional',
    region: 'YOGYAKARTA',
    price: 350000,
    image: '',
    description: '',
    philosophy: '',
    technique: 'Batik Tulis',
    material: 'Katun Primisima'
  });

  const [previewImage, setPreviewImage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Sync form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        category: initialData.category || 'Kain Tradisional',
        region: initialData.region || 'YOGYAKARTA',
        price: initialData.price || 350000,
        image: initialData.image || '',
        description: initialData.description || '',
        philosophy: initialData.philosophy || '',
        technique: initialData.technique || 'Batik Tulis',
        material: initialData.material || 'Katun Primisima'
      });
      setPreviewImage(initialData.image || '');
    } else {
      setFormData({
        name: '',
        category: 'Kain Tradisional',
        region: 'YOGYAKARTA',
        price: 350000,
        image: '',
        description: '',
        philosophy: '',
        technique: 'Batik Tulis',
        material: 'Katun Primisima'
      });
      setPreviewImage('');
    }
    setErrorMsg('');
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'image') {
      setPreviewImage(value);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('Ukuran file gambar maksimal 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.region.trim() || !formData.philosophy.trim()) {
      setErrorMsg('Mohon lengkapi Nama Motif, Asal Daerah, dan Filosofi.');
      return;
    }

    const itemToSave = {
      ...formData,
      price: Number(formData.price) || 0,
      image: formData.image || 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
      id: initialData ? initialData.id : Date.now()
    };

    onSave(itemToSave);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#EFECE6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#FAF8F5] border-b border-[#EFECE6] flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#1F1A17]">
              {isEditing ? 'Edit Data Motif Batik' : 'Tambah Motif Batik Baru'}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Operasi CRUD Koleksi Galeri LUMINA
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200/60 text-stone-500 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Nama Produk / Motif *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Contoh: Selendang Batik Sekar Jagad"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Kategori Motif *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none bg-white"
              >
                {categories.filter(c => c !== 'Semua').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Asal Daerah (Badge) *
              </label>
              <input
                type="text"
                name="region"
                required
                value={formData.region}
                onChange={handleChange}
                placeholder="Contoh: PEKALONGAN, JAWA TENGAH"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Harga (Rupiah) *
              </label>
              <input
                type="number"
                name="price"
                required
                min="0"
                step="5000"
                value={formData.price}
                onChange={handleChange}
                placeholder="Contoh: 275000"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
              />
            </div>
          </div>

          {/* Image URL & File Upload */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-700">
              Gambar Motif (URL atau Upload File)
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 px-3.5 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none text-xs"
              />
              <label className="cursor-pointer px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl flex items-center gap-1.5 text-xs border border-stone-200 shrink-0">
                <Upload className="w-3.5 h-3.5 text-stone-600" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {previewImage && (
              <div className="relative aspect-video w-full max-h-40 rounded-xl overflow-hidden border border-stone-200 mt-2 bg-stone-50">
                <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Filosofi & Makna Motif *
            </label>
            <textarea
              name="philosophy"
              required
              rows={3}
              value={formData.philosophy}
              onChange={handleChange}
              placeholder="Contoh: Sekar Jagad mengandung arti keindahan bunga di seluruh dunia..."
              className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Deskripsi Singkat Ragam Hias
            </label>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              placeholder="Deskripsi bahan, fungsi atau tampilan visual..."
              className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Teknik Pembuatan
              </label>
              <input
                type="text"
                name="technique"
                value={formData.technique}
                onChange={handleChange}
                placeholder="Batik Tulis / Batik Cap"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Bahan Kain
              </label>
              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
                placeholder="Atbm Silk / Katun Primisima"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#8C7355]/30 focus:border-[#8C7355] focus:outline-none"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-stone-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-semibold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#261E1A] hover:bg-[#1A1411] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isEditing ? 'Simpan Perubahan' : 'Tambah ke Katalog'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
