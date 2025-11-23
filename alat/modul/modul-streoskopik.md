# MODUL: PENGUKURAN PARALAKS, BEDA TINGGI, & JARAK HORIZONTAL
**Metode:** Stereoskopik (Fotogrametri)
**Alat Utama:** Stereoskop Cermin & Parallax Bar (Stereometer)

---

## I. KONSEP DASAR
**Paralaks ($p$)** adalah pergeseran semu posisi suatu objek pada dua foto udara yang saling bertampalan (*overlap*) yang disebabkan oleh perubahan posisi kamera (pesawat).

Prinsip utamanya:
1.  Semakin tinggi elevasi suatu objek, semakin besar pergeseran (paralaks)-nya pada foto.
2.  Selisih paralaks ($\Delta p$) antara dua titik dapat dikonversi menjadi **Beda Tinggi ($\Delta h$)**.

---

## II. PERSIAPAN DATA & ALAT

### A. Data Wajib (Dari Informasi Tepi Foto)
Sebelum pengukuran, catat data berikut dari *fiducial mark* atau info tepi foto:
1.  **Focal Length ($f$):** Panjang fokus kamera (biasanya dalam mm, misal: 152 mm).
2.  **Flying Height ($H$):** Tinggi terbang pesawat di atas permukaan laut (dpal/asl). Jika tidak ada, harus dihitung dari skala dan peta topografi referensi.
3.  **Skala Foto ($S$):** Skala rata-rata foto.

### B. Alat
1.  Sepasang Foto Udara Stereoskopik (Overlap >60%).
2.  Stereoskop Cermin.
3.  Parallax Bar (Stereometer).
4.  Penggaris besi presisi.
5.  Selotip, plastik transparansi (jika perlu), dan spidol OHP.

---

## III. PROSEDUR PENGUKURAN

### Langkah 1: Menentukan Basis Foto ($b$)
Basis foto adalah jarak antara titik pusat foto kiri dan titik pusat foto kanan dalam satu model stereo.

1.  **Tentukan Titik Utama (Principal Point - PP):** Tarik garis antar *fiducial mark* yang berhadapan. Perpotongannya adalah PP. Beri tanda pada foto Kiri ($PP_1$) dan Kanan ($PP_2$).
2.  **Transfer Titik Utama (Conjugate Principal Point - CPP):**
    * Amati foto di bawah stereoskop secara stereo.
    * Cari lokasi $PP_1$ pada foto Kanan (menjadi $PP_1'$).
    * Cari lokasi $PP_2$ pada foto Kiri (menjadi $PP_2'$).
3.  **Ukur Basis Foto ($b$):**
    * Ukur jarak antara $PP_1$ dan $PP_2'$ pada foto Kiri ($b_1$).
    * Ukur jarak antara $PP_1'$ dan $PP_2$ pada foto Kanan ($b_2$).
    * Hitung rata-ratanya:
        $$b = \frac{b_1 + b_2}{2}$$
    *(Nilai $b$ digunakan dalam rumus beda tinggi).*

### Langkah 2: Pengukuran Paralaks dengan Parallax Bar
Kita akan mengukur beda paralaks ($\Delta p$) antara titik bawah (Base) dan titik atas (Top) objek (misal: bukit atau tebing).

1.  Susun foto di bawah stereoskop hingga muncul bayangan 3D yang jelas.
2.  Letakkan **Parallax Bar** di atas foto sejajar dengan jalur terbang (garis basis).
3.  **Bacaan Titik Bawah ($r_{bawah}$):**
    * Letakkan *floating mark* (titik apung) tepat di dasar objek/lembah.
    * Putar sekrup mikrometer hingga titik apung terlihat "menempel" pas di tanah.
    * Catat pembacaan mikrometer ($r_a$).
4.  **Bacaan Titik Atas ($r_{atas}$):**
    * Geser *floating mark* ke puncak objek.
    * Putar sekrup hingga titik apung terlihat "melayang" pas di puncak.
    * Catat pembacaan mikrometer ($r_b$).
5.  **Hitung Beda Paralaks ($\Delta p$):**
    $$\Delta p = |r_{atas} - r_{bawah}|$$
    *(Gunakan satuan mm, biasanya dikonversi dari satuan mikrometer).*

---

## IV. PERHITUNGAN (RUMUS)

### A. Menghitung Beda Tinggi ($\Delta h$)
Gunakan rumus paralaks standar:

$$\Delta h = \frac{H' \cdot \Delta p}{b + \Delta p}$$

Dimana:
* $\Delta h$ = Beda tinggi antara dua titik (meter).
* $H'$ = Tinggi terbang pesawat di atas rata-rata permukaan tanah setempat (meter).
    * *Rumus:* $H' = H_{asl} - h_{avg}$ (dimana $h_{avg}$ adalah elevasi rata-rata terrain dari peta topografi).
* $\Delta p$ = Beda paralaks (mm) hasil pengukuran stereometer.
* $b$ = Panjang basis foto rata-rata (mm) di foto udara.

> **Catatan:** Satuan $\Delta p$ dan $b$ harus sama (biasanya mm), sedangkan $H'$ dalam meter. Hasil akhir $\Delta h$ akan dalam meter.

### B. Menghitung Jarak Horizontal ($D$)
Jarak di foto tidak bisa langsung dikalikan skala rata-rata jika ada relief displacement (pergeseran relief). Namun, untuk pendekatan sederhana pada area yang relatif datar atau antar titik yang elevasinya sama:

1.  **Ukur Jarak di Foto ($d$):** Gunakan penggaris, ukur jarak titik A ke B di foto (cm).
2.  **Hitung Skala Lokal ($S_{lokal}$):**
    $$S_{lokal} = \frac{f}{H - h_{titik}}$$
    * $f$ = Panjang fokus.
    * $H$ = Tinggi terbang (asl).
    * $h_{titik}$ = Elevasi titik tersebut (dari peta topo atau hasil hitungan sebelumnya).
3.  **Hitung Jarak Sebenarnya ($D$):**
    $$D = \frac{d}{S_{lokal}}$$

---

## V. STUDI KASUS & CONTOH PERHITUNGAN

**Data Lapangan:**
* Tinggi terbang ($H$) = 3.000 meter dpal.
* Elevasi dasar lembah ($h_{base}$) = 500 meter dpal.
* Panjang fokus ($f$) = 152 mm.
* Basis foto rata-rata ($b$) = 90 mm.

**Data Pengukuran Parallax Bar:**
* Bacaan Puncak Bukit ($r_{top}$) = 14,50 mm
* Bacaan Dasar Lembah ($r_{base}$) = 10,20 mm

**1. Hitung Beda Paralaks ($\Delta p$):**
$$\Delta p = 14,50 - 10,20 = 4,30 \text{ mm}$$

**2. Tentukan Tinggi Terbang di atas Tanah ($H'$):**
Kita asumsikan dasar lembah sebagai referensi tanah setempat.
$$H' = H - h_{base} = 3000 - 500 = 2500 \text{ meter}$$

**3. Hitung Beda Tinggi ($\Delta h$) Bukit:**
$$\Delta h = \frac{2500 \cdot 4,3}{(90 + 4,3)}$$
$$\Delta h = \frac{10.750}{94,3}$$
$$\Delta h \approx 114 \text{ meter}$$

Jadi, tinggi bukit dari dasar lembah adalah **114 meter**.

---

## VI. LOG SHEET PENGUKURAN

Gunakan tabel ini untuk mencatat data praktikum:

| No. Titik | Objek | Bacaan Mikrometer ($r$) | $\Delta p$ ($r_{obj} - r_{ref}$) | Basis Foto ($b$) | $H'$ (m) | Beda Tinggi ($\Delta h$) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 (Ref) | Jalan (Dasar) | 10.20 | 0 | 92 mm | 2500 | 0 |
| 2 | Puncak Bukit A | 12.40 | 2.20 | 92 mm | 2500 | ... |
| 3 | Puncak Bukit B | 15.10 | 4.90 | 92 mm | 2500 | ... |

---
*Dibuat untuk keperluan praktikum Geologi Foto / Fotogrametri Dasar.*