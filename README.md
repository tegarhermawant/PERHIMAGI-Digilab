# PERHIMAGI Digital Library (Digilab)

**PERHIMAGI Digital Library** adalah platform perpustakaan digital yang dikembangkan untuk memfasilitasi akses literatur dan referensi bagi mahasiswa geologi di seluruh Indonesia. Proyek ini bertujuan untuk memeratakan ilmu geologi melalui akses mudah ke buku, jurnal, peta, dan alat bantu perhitungan geologi.

## 🚀 Fitur Utama

### 1. Perpustakaan Digital
*   **Pencarian & Filter Canggih:** Cari dokumen berdasarkan judul, penulis, atau topik. Filter berdasarkan jenis dokumen (Buku, Jurnal, Peta, dll) dan topik spesifik (Petrologi, Struktur, dll).
*   **Tampilan Fleksibel:** Dukungan untuk tampilan Galeri (Grid), List, dan Tabel (Column).
*   **Detail Dokumen:** Menampilkan informasi lengkap termasuk Tahun Terbit, Bahasa, dan Jumlah Download.
*   **Sistem Akses:**
    *   **Open Source:** Dapat diunduh langsung oleh pengguna yang login.
    *   **Privat/Terbatas:** Pengguna diarahkan untuk menghubungi admin via WhatsApp untuk akses.

### 2. Sistem Autentikasi & Keamanan
*   **Login Google:** Terintegrasi dengan Firebase Authentication untuk kemudahan akses.
*   **Proteksi Download:** Tombol download hanya aktif untuk pengguna yang sudah login.
*   **Cooldown System:** Mencegah spam download count dengan membatasi penambahan jumlah download (1x per 3 jam per file untuk user yang sama), namun tetap mencatat log aktivitas.

### 3. Alat Bantu Geologi (Tools)
Kumpulan kalkulator dan alat identifikasi interaktif di folder `/alat`, mencakup:
*   Identifikasi Batuan (Beku, Sedimen, Metamorf).
*   Analisis Mekanika Tanah & Batuan (RQD, Point Load, Atterberg Limits, dll).
*   Hidrogeologi (Uji Pemompaan, Kimia Air Tanah).
*   Pengukuran Lapangan (Debit Sungai, Stereoskopik).

### 4. Backend & Logging
*   **Database:** Menggunakan **Google Sheets** yang dipublikasikan sebagai CSV untuk kemudahan manajemen data tanpa database server kompleks.
*   **Download Counter:** Script Google Apps Script (GAS) untuk menghitung jumlah unduhan secara real-time.
*   **Activity Logging:** Mencatat setiap aktivitas download (User, Email, File, Waktu) ke Spreadsheet terpisah untuk monitoring.

## 🛠️ Teknologi yang Digunakan

*   **Frontend:** HTML5, CSS3.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN).
*   **Icons:** [Lucide Icons](https://lucide.dev/).
*   **Logic:** Vanilla JavaScript (ES6+).
*   **Auth:** [Firebase Authentication](https://firebase.google.com/).
*   **Backend/Database:** Google Sheets (CSV Export) & Google Apps Script.

## 🤝 Kontribusi
Proyek ini diinisiasi oleh **Tegar Hermawan Tahir** (Sekretaris Jenderal PERHIMAGI 2025/2026). Jika ingin berkontribusi atau melaporkan bug, silakan hubungi tim pengembang atau buat Issue di repository ini.

---
&copy; Powered by PERHIMAGI (Persatuan Himpunan Mahasiswa Geologi Indonesia).
