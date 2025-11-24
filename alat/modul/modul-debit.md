# MODUL PRAKTIKUM: PENGUKURAN DEBIT SUNGAI
**Referensi:** Laporan Praktikum Hidrogeologi Acara 1 - Tegar Hermawan T.
**Tujuan:** Menentukan debit aliran sungai ($Q$) dan menghitung parameter hidrolik akuifer terkait.

---

## 1. PENDAHULUAN

### 1.1. Definisi Debit ($Q$)
Debit adalah volume air yang mengalir melalui suatu penampang sungai per satuan waktu.
Rumus dasar:
$$Q = k \times v \times A$$

*Dimana:*
* $Q$ = Debit aliran ($m^3/s$ atau $L/s$)
* $k$ = Konstanta kekasaran sungai (biasanya 0.8 - 0.9)
* $v$ = Kecepatan aliran rata-rata ($m/s$)
* $A$ = Luas penampang basah sungai ($m^2$)

### 1.2. Hubungan dengan Air Tanah
Pengukuran debit sungai sering digunakan untuk memperkirakan potensi air tanah di sekitarnya, terutama jika sungai tersebut bersifat *effluent* (mendapat imbuhan dari air tanah) atau *influent* (memberi imbuhan ke air tanah).

---

## 2. METODE PENGUKURAN LAPANGAN

Untuk mendapatkan nilai $Q$, kita perlu mengukur tiga komponen utama: **Lebar Sungai ($l$)**, **Luas Penampang ($A$)**, dan **Kecepatan Aliran ($v$)**.

### 2.1. Pengukuran Lebar Sungai ($l$)
Dapat dilakukan secara langsung (meteran) atau tidak langsung (trigonometri) jika sungai terlalu lebar/deras.

**Studi Kasus (Metode Trigonometri Sederhana):**
[cite_start][cite: 444-460]
1.  Tentukan titik acuan di seberang sungai (Pohon $P$).
2.  Buat garis tegak lurus di sisi pengamat ($A-B-C$).
3.  Gunakan perbandingan segitiga sebangun.
    * *Contoh:* Jika $AB:BC = 5:4$ dan jarak $CD$ diketahui, maka lebar sungai ($l$) dapat dihitung.
    * *Perhitungan:* $A \text{ ke } P = \frac{5}{4} \times 14 = 17.5 \text{ m}$. Dikurangi jarak tepi ($3.5$ m), maka $l = 14 \text{ m}$.

### 2.2. Pengukuran Luas Penampang ($A$)
Karena dasar sungai tidak rata, luas penampang dibagi menjadi beberapa segmen (pias) menggunakan metode kedalaman terukur.

**Rumus Luas Pias (Trapezium Rule):**
$$L_n = 2 \times l \times \left( \frac{d_1 + 2d_2 + d_3}{4} \right)$$
*(Catatan: Rumus di laporan menggunakan faktor pengali spesifik berdasarkan pecahan lebar sungai, misal $1/20~l$, $1/14~l$. Sesuaikan dengan data lapangan).*

[cite_start]**Contoh Perhitungan (Kelompok Pak Rahmad):** [cite: 464-467]
* Luas 1: $143/80$
* Luas 2: $111/80$
* Luas 3: $107/99$
* **Total Luas ($A$):** $59.5813~m^2$

### 2.3. Pengukuran Kecepatan Aliran ($v$)
Menggunakan metode apung (*floating method*).
1.  Tentukan jarak lintasan (misal 10 meter).
2.  Lepaskan pelampung (gabus/botol) di titik hulu.
3.  Catat waktu tempuh ($t$) hingga titik hilir. Lakukan minimal 3 kali pengulangan pada beberapa jalur (Tepi Kiri, Tengah, Tepi Kanan).

**Rumus:** $v = \frac{\text{Jarak}}{\text{Waktu Rata-rata}}$

[cite_start]**Contoh Perhitungan:** [cite: 469-471]
* Jalur A: $12.9~m/s$
* Jalur B: $11.73~m/s$
* Jalur C: $14.8~m/s$
* **Kecepatan Rata-rata ($v_{avg}$):** $13.1444~m/s$

---

## 3. PERHITUNGAN DEBIT DAN PARAMETER AKUIFER

### 3.1. Menghitung Debit Aliran ($Q$)
Gunakan data $v_{avg}$ dan $A$ yang telah didapat.

[cite_start]**Studi Kasus Kelompok Pak Rahmad:** [cite: 473]
* $k = 0.9$ (Konstanta sungai)
* $v = 13.144~m/s$
* $A = 59.5813~m^2$

$$Q = 0.9 \times 13.144 \times 59.5813 = \mathbf{704.85~L/s} \text{ atau } \mathbf{0.7047~m^3/s}$$

[cite_start]**Studi Kasus Kelompok Pak Lukman:** [cite: 490]
* $k = 0.85$
* $v = 11.922~m/s$
* $A = 54.0074~m^2$

$$Q = 0.85 \times 11.922 \times 54.0074 = \mathbf{547.30~L/s} \text{ atau } \mathbf{0.5473~m^3/s}$$

### 3.2. Menghitung Parameter Akuifer ($T$ dan $K$)
Jika diketahui selisih debit antar dua titik pengamatan, kita bisa mengestimasi parameter akuifer (Transmisivitas dan Konduktivitas Hidrolik) dengan asumsi aliran *baseflow*.

[cite_start]**Data Tambahan:** [cite: 492-494]
* Jarak antar titik pengamatan ($L$): 2500 meter
* Ketebalan akuifer ($b$): 30 meter
* Selisih Debit ($Q_{a-b}$): $0.1574~m^3/s$ (Debit yang masuk/keluar akuifer)

**Konversi Debit:**
$$Q_{total} = 0.1574 \times 86400 \text{ (detik/hari)} = 13599.36~m^3/hari$$
$$Q_{sisi} = Q_{total} / 2 = 6799.68~m^3/hari$$ (Asumsi aliran dari 2 sisi sungai)

**1. Transmisivitas ($T$):**
Rumus Darcy sederhana untuk aliran lateral: $T = \frac{Q}{L \times i}$
*(Disini diasumsikan gradien hidrolik $i$ atau faktor geometri tertentu, laporan menggunakan rasio 75/1)*.

$$T = \frac{6799.68}{2500} \times 75 = \mathbf{203.99~m^2/hari}$$

**2. Konduktivitas Hidrolik ($K$):**
$$K = \frac{T}{b}$$
$$K = \frac{203.99}{30} = \mathbf{6.80~m/hari}$$

---

## 4. KESIMPULAN DAN ANALISIS

Dari hasil perhitungan di atas, dapat disimpulkan:
1.  **Debit Sungai:** Bervariasi tergantung lokasi penampang, berkisar antara $0.54 - 0.70~m^3/s$.
2.  **Karakteristik Akuifer:** Nilai $K = 6.8~m/hari$ menunjukkan akuifer tersusun oleh material dengan permeabilitas sedang hingga tinggi (seperti pasir halus-sedang).
3.  **Metode:** Pengukuran debit dengan metode apung dan penampang pias cukup efektif untuk estimasi awal, namun sangat dipengaruhi oleh ketelitian pengukuran kedalaman dan waktu tempuh pelampung.

---
*Modul ini disusun untuk keperluan praktikum Hidrogeologi dan Manajemen Sumber Daya Air.*