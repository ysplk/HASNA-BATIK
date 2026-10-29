# 🌟 LUMINA — Batik & Craft Gallery

> **Project Ujian Tengah Semester (UTS)**  
> **Mata Kuliah:** Pemrograman Web 4  
> **Semester:** 5 (Lima)  
> **Teknologi:** React 18 (SPA) + Vite + Tailwind CSS + Lucide Icons  

---

## 📖 Tentang Aplikasi
**LUMINA** adalah aplikasi katalog dan galeri digital batik modern Indonesia dengan desain elegan, minimalis, dan berkelas (*warm off-white, soft tan, dan typography serif Playfair Display*). Aplikasi ini dilengkapi dengan operasi **CRUD lengkap** serta keranjang belanja koleksi (*Shopping Cart*).

---

## ✨ Fitur-Fitur Utama (Sesuai Kriteria Penilaian UTS)

1. **🎨 Desain & Layout Eksklusif (Sesuai Mockup Desain)**
   - **Sidebar Navigasi Kiri:**
     - Logo *LUMINA - Batik & Craft Gallery*.
     - Kategori motif (*Semua, Kain Tradisional, Kemeja Pria, Gaun & Outer, Aksesoris*) dengan indikator aktif (*dot accent*).
     - Kartu catatan budaya di bagian bawah sidebar.
   - **Hero Card Elegan:**
     - Badge *Warisan Budaya Nusantara*, headline *Mahakarya Batik Indonesia*, dan kolom pencarian terintegrasi.
   - **Kartu Produk Estetik:**
     - Badge asal daerah (e.g. `PEKALONGAN, JAWA TENGAH`, `CIREBON, JAWA BARAT`, `SOLO, JAWA TENGAH`, `YOGYAKARTA`).
     - Judul serif, cuplikan filosofi motif, harga format Rupiah, dan tautan *Lihat Detail →*.

2. **⚡ Operasi CRUD Penuh (Create, Read, Update, Delete)**
   - **Create (Tambah):** Tambah motif/produk batik baru dengan form modal lengkap (Nama, Kategori, Daerah, Harga, Filosofi, Deskripsi, Teknik Pembuatan, Bahan Kain, serta Upload Gambar/URL).
   - **Read (Tampil & Detail):**
     - Filter berdasarkan kategori motif.
     - Pencarian real-time (nama motif, daerah, filosofi).
     - Halaman detail komprehensif menampilkan foto resolusi tinggi, filosofi mendalam, spesifikasi teknik, dan bahan kain.
   - **Update (Edit):** Edit data motif batik yang sudah ada langsung dari kartu maupun dari halaman detail.
   - **Delete (Hapus):** Hapus motif batik dari katalog dengan dialog konfirmasi aman.
   - **Penyimpanan Persisten:** Semua data otomatis tersimpan di `localStorage` peramban web.

3. **🛍️ Keranjang Koleksi (Shopping Cart)**
   - Tombol *Keranjang (N)* di bagian atas kanan.
   - Tambah produk ke keranjang dari halaman detail.
   - Halaman keranjang dengan tampilan kosong (*empty state* estetik) dan daftar belanjaan dengan pengatur jumlah (*+ / -*), hapus item, dan ringkasan tagihan pesanan.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Custom palette: `lumina-bg`, `lumina-hero`, `lumina-card`, `lumina-accent`)
- **Typography:** Playfair Display & Plus Jakarta Sans (Google Fonts)
- **Icons:** Lucide React
- **Storage:** Web Browser LocalStorage

---

## 🚀 Cara Menjalankan Project

```bash
# 1. Jalankan development server
npm run dev
```

Buka URL di browser: `http://localhost:5173`
