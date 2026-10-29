# 🌟 BatikPedia Nusantara — Galeri & Ensiklopedia Batik Interaktif

> **Project Ujian Tengah Semester (UTS)**  
> **Mata Kuliah:** Pemrograman Web 4  
> **Semester:** 5 (Lima)  
> **Teknologi:** React 18 (SPA) + Vite + Tailwind CSS + Lucide Icons  

---

## 📖 Tentang Aplikasi
**BatikPedia Nusantara** adalah aplikasi berbasis web interaktif yang menyajikan keindahan ragam hias, asal daerah, dan filosofi mendalam di balik berbagai motif batik tradisional Indonesia. Batik telah diakui oleh **UNESCO** sejak 2 Oktober 2009 sebagai *Masterpiece of the Oral and Intangible Heritage of Humanity*. Aplikasi ini dibangun untuk mempermudah generasi muda menjelajahi, mempelajari filosofi, mengoleksi motif favorit, dan menguji wawasan kebudayaan batik nusantara.

---

## ✨ Fitur-Fitur Utama (Sesuai Kriteria Penilaian UTS)

1. **🎨 Katalog & Galeri Visual Menawan**
   - Kartu motif batik berdesain estetik dengan palet warna khas sogan Jawa dan nuansa nusantara.
   - Efek hover gambar interaktif, tag daerah, dan cuplikan filosofi.

2. **🔍 Pencarian Cepat (Real-Time Search)**
   - Cari motif seketika berdasarkan nama motif, nama kota/daerah, filosofi, atau tagar.

3. **📍 Multi-Filter Dinamis (Kategori & Wilayah)**
   - Filter asal daerah: *DI Yogyakarta, Jawa Tengah, Jawa Barat, Jawa Timur, hingga Luar Jawa (Kalimantan & Papua)*.
   - Filter makna filosofis: *Keberanian & Kepemimpinan, Cinta & Kesetiaan, Spiritual & Ketenangan, Kesucian, Kemakmuran, Harmoni Alam*.

4. **🔍 Modal Detail Interaktif & Fitur Zoom**
   - Tampilan modal komprehensif memuat:
     - Foto resolusi tinggi dengan kemampuan *interactive click to zoom*.
     - Penjelasan makna & ajaran moral leluhur.
     - Karakter visual dan ragam hias ornamen.
     - Era sejarah dan teknik pembuatan (*Tulis Canting, Cap, atau Kombinasi*).
     - Acara adat penggunaan busana (*pernikahan, penobatan keraton, dsb.*).
     - Tombol salin tautan (share).

5. **❤️ Sistem Koleksi Favorit (Persistent LocalStorage)**
   - Pengguna dapat menandai motif batik favorit mereka.
   - Filter instan *"Hanya Favorit"* untuk melihat daftar motif yang disukai.
   - Data otomatis tersimpan di `localStorage` peramban, tidak hilang ketika halaman direfresh.

6. **➕ Fitur Tambah Motif Baru (CRUD Input Interaktif)**
   - Formulir modal untuk menambahkan motif batik baru lengkap dengan nama, asal daerah, kategori filosofi, teknik, filosofi mendalam, serta unggah file gambar (otomatis dikonversi ke Data URL) atau link URL.
   - Data motif baru otomatis tersimpan ke `localStorage`.

7. **🏆 Kuis Edukatif "Tebak Batik Nusantara"**
   - Mini game kuis 5 pertanyaan seputar sejarah dan makna motif batik.
   - Validasi jawaban langsung dengan pembahasan mendalam.
   - Perhitungan skor akhir dan pemberian gelar kehormatan pelestari budaya.

8. **📜 Bagian Edukasi Budaya & Filosofi**
   - Penjelasan perbedaan karakteristik Batik Pedalaman (Keraton), Batik Pesisiran, dan Batik Luar Jawa.
   - Penjelasan 3 teknik utama pembuatan batik (*Batik Tulis, Batik Cap, Batik Kombinasi*).

---

## 🛠️ Arsitektur & Teknologi

- **Library UI:** [React.js](https://react.dev/) (Functional Components + Hooks: `useState`, `useEffect`, `useMemo`, `useRef`)
- **Bundler / Build Tool:** [Vite](https://vitejs.dev/) (Fast HMR & Optimized production build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) dengan palet kustom `batik-dark`, `batik-brown`, `batik-gold`, `batik-cream`.
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Tipografi:** *Cinzel* (Google Fonts) untuk judul klasik elegan & *Plus Jakarta Sans* untuk teks modern yang nyaman dibaca.
- **Penyimpanan Klien:** Web Browser `localStorage`.

---

## 🚀 Cara Menjalankan Project

### 1. Prasyarat
Pastikan komputer telah terinstal:
- [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
- NPM (bawaan dari instalasi Node.js)

### 2. Menjalankan Server Pengembangan (Dev Server)
Buka terminal di folder project ini:
```bash
# Jalankan mode pengembangan
npm run dev
```
Setelah berjalan, buka tautan lokal di browser (biasanya `http://localhost:5173`).

### 3. Membangun untuk Produksi (Build)
```bash
npm run build
```
Hasil file statis yang siap di-deploy akan berada pada folder `dist/`.

---

## 📂 Struktur Direktori

```
PROJECT UTS/
├── index.html              # Entry HTML utama & import Google Fonts
├── package.json            # Daftar dependensi dan scripts
├── vite.config.js          # Konfigurasi Vite & React plugin
├── tailwind.config.js      # Konfigurasi Tailwind & palet batik
├── postcss.config.js       # Konfigurasi PostCSS
├── src/
│   ├── main.jsx            # Entry point ReactDOM
│   ├── index.css           # Directive Tailwind & gaya global
│   ├── App.jsx             # Komponen utama & state management
│   ├── data/
│   │   └── batikData.js    # Data awal motif batik, wilayah, kategori, & kuis
│   └── components/
│       ├── Navbar.jsx           # Header navigasi & pencarian
│       ├── Hero.jsx             # Banner sambutan & ringkasan statistik
│       ├── FilterSection.jsx    # Filter wilayah, kategori & favorit
│       ├── BatikCard.jsx        # Komponen kartu per motif batik
│       ├── BatikDetailModal.jsx # Modal detail filosofi & zoom gambar
│       ├── AddBatikModal.jsx    # Form tambah motif batik baru
│       ├── QuizModal.jsx        # Kuis interaktif pengetahuan batik
│       ├── PhilosophySection.jsx# Edukasi keraton vs pesisiran vs teknik
│       └── Footer.jsx           # Catatan penutup & info akademik UTS
```
