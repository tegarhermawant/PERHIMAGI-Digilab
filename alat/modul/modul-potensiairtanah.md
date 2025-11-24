# MODUL PRAKTIKUM: EVALUASI POTENSI AIR TANAH
**Referensi:** Laporan Praktikum Hidrogeologi Acara 6 - Tegar Hermawan T.
**Tujuan:** Menghitung cadangan air tanah, debit aliran, dan debit eksploitasi aman (*safe yield*) untuk perencanaan sumber daya air.

---

## 1. PENDAHULUAN

### 1.1. Definisi
Evaluasi potensi air tanah adalah proses kuantitatif untuk memperkirakan jumlah air yang tersimpan dalam akuifer dan jumlah air yang dapat diambil secara berkelanjutan tanpa merusak sistem hidrogeologi.

### 1.2. Parameter Kunci
* **Akuifer Bebas (*Unconfined*):** Batas atasnya adalah muka air tanah yang berhubungan langsung dengan atmosfer.
* **Storativitas / Koefisien Daya Simpan ($S$):** Volume air yang dapat dilepaskan akuifer per satuan luas per satuan penurunan *head*. Pada akuifer bebas, $S \approx S_y$ (*Specific Yield*).
* **Konduktivitas Hidrolik ($K$):** Kemampuan batuan meloloskan air.
* **Kapasitas Jenis ($Sc$):** Debit maksimum per satuan penurunan muka air.

---

## 2. STUDI KASUS 1: PERENCANAAN PABRIK AIR MINUM

### 2.1. Input Data
Diketahui sebuah perusahaan air minum akan mengeksploitasi akuifer bebas di daerah perbukitan (litologi batupasir).

[cite_start]**Data Lapangan:** [cite: 2868-2882]
* **Dimensi Akuifer:** Panjang ($L_{aq}$) = 5940 m, Lebar ($W_{aq}$) = 4320 m.
* **Data Sumur (Head Hydraulic):**
    * Sumur Y: Elevasi $P_1 + Z_1 = 147 + 68 = 215$ m.
    * Sumur Z: Elevasi $P_2 + Z_2 = 178 + 72 = 250$ m.
* **Parameter Hidrolik:**
    * Storativitas ($S$) = 0.23.
    * Konduktivitas Hidrolik ($K$) = 35.6 m/hari.
    * Kapasitas Jenis ($Sc$) = 8.9 $m^2$/hari.
* **Jarak antar sumur ($L$):** 2350 m.
* **Target Produksi:** $1.8 \times 10^{-2} \times 2100$ unit/hari? *(Asumsi kebutuhan per produksi dari soal)*.

### 2.2. Perhitungan Potensi

#### A. Geometri Akuifer
1.  **Luas Akuifer ($A$):**
    $$A = 5940 \times 4320 = \mathbf{25,660,800~m^2}$$
2.  **Tebal Jenuh Rata-rata ($H$):**
    Rata-rata *hydraulic head* dari dua sumur pengamat.
    $$H = \frac{h_y + h_z}{2} = \frac{215 + 250}{2} = \mathbf{232.5~m}$$

#### B. Volume Cadangan Air Tanah ($V_s$)
Total volume air yang tersimpan dalam akuifer yang bisa diambil (berdasarkan $S$).
$$V_s = S \times A \times H$$
[cite_start]$$V_s = 0.23 \times 25,660,800 \times 232.5 = \mathbf{1,372,211,280~m^3}$$ [cite: 2883-2884]

#### C. Debit Aliran Alami ($Q$)
Menggunakan Hukum Darcy untuk akuifer bebas (*Dupuit assumption*).
$$Q = \frac{1}{2} K \frac{h_z^2 - h_y^2}{L} \times W$$
*Catatan: $W$ di sini adalah lebar penampang aliran, diasumsikan lebar akuifer atau satuan lebar tertentu. Di laporan tertulis hasil 67,059 m3/hari, mari kita cek.*

Jika $W$ yang dipakai lebar akuifer (4320 m):
$$Q = \frac{1}{2} \times 35.6 \times \frac{250^2 - 215^2}{2350} \times 4320$$
$$Q = 17.8 \times \frac{62500 - 46225}{2350} \times 4320$$
$$Q = 17.8 \times 6.925 \times 4320 \approx 532,500~m^3/hari$$
*(Hasil di laporan 67,059 m3/hari kemungkinan menggunakan $W$ per satuan lebar atau ada faktor lain. Jika $W=1$ m, $Q \approx 123$ m3/hari).*

#### D. Debit Maksimal Eksploitasi Sumur ($Q_{max}$)
Batas aman pengambilan air dari satu sumur.
$$Q_{max} = Sc \times \frac{H}{2}$$
[cite_start]$$Q_{max} = 8.9 \times \frac{232.5}{2} = \mathbf{1,034.6~m^3/hari}$$ [cite: 2895-2896]

#### E. Analisis Kelayakan (Target Produksi)
Jika kebutuhan air per siklus produksi adalah $Kebutuhan$.
$$Frekuensi = \frac{Q_{max}}{Kebutuhan}$$
Berdasarkan laporan: Frekuensi = 27.37 $\approx$ **28 kali/hari**.

---

## 3. STUDI KASUS 2: PEMETAAN ALIRAN AIR TANAH

### 3.1. Input Data
[cite_start]Evaluasi aliran air tanah di Desa Hala yang mengalami kekeringan. [cite: 2901-2911]
* **Peta:** Skala 1:45,000.
* **Titik A:** Head $h_A = 128$ mdpl.
* **Titik B:** Head $h_B = 64$ mdpl.
* **Jarak Peta ($L_{peta}$):** 5.3 cm.
* **Parameter:** $K = 39$ m/hari, Porositas ($n$) = 0.25.

### 3.2. Perhitungan Kecepatan Aliran

1.  **Jarak Sebenarnya ($L$):**
    $$L = 5.3 \text{ cm} \times 45,000 = 238,500 \text{ cm} = \mathbf{2,385~m}$$

2.  **Gradien Hidrolik ($i$):**
    Kemiringan muka air tanah.
    $$i = \frac{dh}{dl} = \frac{h_A - h_B}{L}$$
    $$i = \frac{128 - 64}{2385} = \frac{64}{2385} \approx \mathbf{0.0268}$$

3.  **Kecepatan Aliran Sebenarnya ($v_a$):**
    Kecepatan rata-rata air bergerak di dalam pori batuan (*Average Linear Velocity*).
    $$v_a = \frac{K \times i}{n}$$
    [cite_start]$$v_a = \frac{39 \times 0.0268}{0.25} = \mathbf{4.18~m/hari}$$ [cite: 2913]

### 3.3. Interpretasi Model Akuifer
Arah aliran bergerak dari Titik A (128 mdpl) menuju Titik B (64 mdpl) dengan kecepatan 4.18 m/hari. Ini menunjukkan aliran yang relatif cepat untuk air tanah, didukung oleh permeabilitas batuan yang cukup tinggi ($K=39$ m/hari, tipikal pasir bersih).

---

## 4. KESIMPULAN

1.  **Potensi Cadangan:** Volume air tanah di daerah studi kasus 1 sangat besar ($> 1$ miliar $m^3$), namun debit eksploitasi per sumur dibatasi oleh kapasitas jenis sumur tersebut ($Q_{max} \approx 1034~m^3/hari$).
2.  **Kecepatan Aliran:** Pada studi kasus 2, air tanah mengalir cukup dinamis. Hal ini penting untuk mengetahui seberapa cepat *recharge* bisa terjadi atau seberapa cepat polutan bisa menyebar jika ada pencemaran.

---
*Modul ini disusun untuk keperluan praktikum Hidrogeologi dan Manajemen Sumber Daya Air.*