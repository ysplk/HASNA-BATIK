import React, { useState } from 'react';
import { X, PlusCircle, Upload, Image as ImageIcon } from 'lucide-react';
import { regions, categories } from '../data/batikData';

export default function AddBatikModal({ isOpen, onClose, onAddBatik }) {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    region: 'DI Yogyakarta',
    category: 'Spiritual & Ketenangan',
    technique: 'Batik Tulis',
    era: 'Modern',
    image: '',
    tags: '',
    description: '',
    philosophy: '',
    usage: 'Busana Formal & Keseharian',
    dominantColor: 'Sogan Klasik'
  });

  const [previewUrl, setPreviewUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'image') {
      setPreviewUrl(value);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('Ukuran file maksimal 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.origin.trim() || !formData.philosophy.trim()) {
      setErrorMsg('Mohon lengkapi Nama Motif, Asal Daerah, dan Filosofi.');
      return;
    }

    const newBatik = {
      ...formData,
      id: Date.now(),
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : ['Tradisional', 'Koleksi Baru'],
      image: formData.image || 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
      featured: false
    };

    onAddBatik(newBatik);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#2A1810] text-white flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-title text-xl font-bold tracking-wide">
              Tambah Motif Batik Baru
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-sm">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Nama Motif Batik *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Contoh: Batik Sekar Arum"
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Kota / Asal Spesifik *
              </label>
              <input
                type="text"
                name="origin"
                required
                value={formData.origin}
                onChange={handleChange}
                placeholder="Contoh: Solo, Jawa Tengah"
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Zona Wilayah
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none bg-white"
              >
                {regions.filter(r => r !== 'Semua Wilayah').map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Makna & Kategori
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none bg-white"
              >
                {categories.filter(c => c !== 'Semua Kategori').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Image input & file upload */}
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
                placeholder="Masukkan link gambar (https://...)"
                className="flex-1 px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none text-xs"
              />
              <label className="cursor-pointer px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl flex items-center gap-1 text-xs border border-stone-300">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {previewUrl && (
              <div className="relative aspect-video w-full max-h-40 rounded-xl overflow-hidden border border-stone-200 mt-2">
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Makna & Filosofi Batik *
            </label>
            <textarea
              name="philosophy"
              required
              rows={3}
              value={formData.philosophy}
              onChange={handleChange}
              placeholder="Jelaskan doa, ajaran moral, atau simbol spiritual motif ini..."
              className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Deskripsi Visual Ragam Hias
            </label>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              placeholder="Bentuk ornamen, pola lengkung, dedaunan, dsb..."
              className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
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
                placeholder="Batik Tulis Canting / Cap"
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tagar (pisahkan dengan koma)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Klasik, Keraton, Sakral"
                className="w-full px-3.5 py-2 border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit buttons */}
          <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8B4513] text-[#2A1810] font-bold text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              Simpan Motif Baru
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
