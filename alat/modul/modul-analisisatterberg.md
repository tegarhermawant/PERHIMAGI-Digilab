# MODUL PRAKTIKUM: UJI BATAS ATTERBERG (LIQUID LIMIT & PLASTIC LIMIT)
**Referensi:** Laporan Praktikum Mekanika Batuan dan Tanah - Acara 4 & 5
**Penyusun:** Tegar Hermawan T.

---

## 1. PENDAHULUAN
Batas Atterberg digunakan untuk mengklasifikasikan tanah berbutir halus (lempung/lanau) berdasarkan kadar airnya pada kondisi batas cair dan batas plastis.

* **Liquid Limit (LL):** Kadar air di mana tanah berubah dari keadaan cair menjadi plastis (pada ketukan ke-25).
* **Plastic Limit (PL):** Kadar air terendah di mana tanah masih bersifat plastis (sebelum retak saat digulung).
* **Plasticity Index (PI):** Rentang keadaan plastis tanah ($PI = LL - PL$).

---

## BAGIAN 1: LIQUID LIMIT TEST (BATAS CAIR)

### 1.1. Alat dan Data Input
Berdasarkan borang praktikum, parameter yang diukur meliputi:
* **Jumlah Ketukan (N):** Variasi jumlah pukulan untuk menutup celah tanah sepanjang 12.7 mm.
* **Berat Cawan ($W_1$):** Berat wadah kosong.
* **Berat Basah ($W_2$):** Cawan + Tanah Basah.
* **Berat Kering ($W_3$):** Cawan + Tanah Kering (setelah oven).

### 1.2. Prosedur Perhitungan Kadar Air ($w$)
Rumus kadar air untuk setiap sampel:

$$w = \frac{\text{Berat Air}}{\text{Berat Tanah Kering}} \times 100\%$$
$$w = \frac{W_2 - W_3}{W_3 - W_1} \times 100\%$$

[cite_start]**Studi Kasus Data (Halaman 2):** [cite: 1475-1485]

| Kode Sampel | Jumlah Ketukan ($N$) | $W_1$ (gr) | $W_2$ (gr) | $W_3$ (gr) | Perhitungan Kadar Air ($w$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Liquid 1** | 14 | 11.8 | 29.7 | 25.3 | $\frac{29.7-25.3}{25.3-11.8} \times 100\% = \mathbf{32.59\%}$ |
| **Liquid 2** | 20 | 15.3 | 33.4 | 29.6 | $\frac{33.4-29.6}{29.6-15.3} \times 100\% = \mathbf{26.57\%}$ |
| **Liquid 3** | 31 | 13.0 | 30.1 | 27.6 | $\frac{30.1-27.6}{27.6-13.0} \times 100\% = \mathbf{17.12\%}$ |

### 1.3. Penentuan Nilai LL (Metode One Point)
Jika menggunakan metode satu titik (*One Point Method*), nilai LL diprediksi dari setiap sampel menggunakan rumus empiris:

$$LL = w \times \left( \frac{N}{25} \right)^{0.121}$$

[cite_start]**Hasil Perhitungan:** [cite: 1482-1485]
1.  **Sampel 1 ($N=14$):** $32.59 \times (14/25)^{0.121} = \mathbf{30.38\%}$
2.  **Sampel 2 ($N=20$):** $26.57 \times (20/25)^{0.121} = \mathbf{25.85\%}$
3.  **Sampel 3 ($N=31$):** $17.12 \times (31/25)^{0.121} = \mathbf{20.02\%}$

**Rata-rata LL (One Point):**
$$LL_{avg} = \frac{30.38 + 25.85 + 20.02}{3} = \mathbf{25.42\%}$$

> [cite_start]*Catatan: Dalam pembahasan laporan (Halaman 5), disebutkan juga nilai LL Multipoint dari grafik Flow Curve adalah **27%**.* [cite: 1517]

---

## BAGIAN 2: PLASTIC LIMIT TEST (BATAS PLASTIS)

### 2.1. Prosedur
Tanah digulung di atas plat kaca hingga diameter 3 mm mulai retak, lalu ditimbang berat basah dan keringnya.

### 2.2. [cite_start]Studi Kasus Data (Halaman 4) [cite: 1504-1510]

| Kode Cawan | Berat Cawan ($W_c$) | Berat Basah + Cawan | Berat Kering + Cawan | Berat Air ($W_w$) | Berat Tanah Kering ($W_s$) | Kadar Air ($w$) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Plastis 1** | 13.0 | 15.2 | 14.7 | 0.5 | 1.7 | **29.41%** |
| **Plastis 2** | 11.7 | 13.4 | 13.1 | 0.3 | 1.4 | **21.43%** |
| **Plastis 3** | 13.3 | 15.1 | 14.6 | 0.5 | 1.3 | **38.46%** |

### 2.3. Hasil Akhir PL
Nilai Plastic Limit adalah rata-rata dari kadar air ketiga sampel tersebut.

$$PL = \frac{29.41 + 21.43 + 38.46}{3} = \mathbf{29.76\%}$$
*(Dibulatkan menjadi 29.8% dalam pembahasan)*.

---

## BAGIAN 3: INDEKS PLASTISITAS (PLASTICITY INDEX)

### 3.1. Perhitungan PI
Indeks Plastisitas menunjukkan rentang di mana tanah bersifat plastis. Gunakan nilai LL (biasanya dari grafik/multipoint untuk akurasi lebih baik) dan PL rata-rata.

**Data:**
* [cite_start]$LL$ (Multipoint) = 27% [cite: 1517]
* $PL$ (Rata-rata) = 29.8%

**Rumus:**
$$PI = LL - PL$$
$$PI = 27\% - 29.8\%$$
$$PI = \mathbf{-2.8\%}$$

### 3.2. Interpretasi & Klasifikasi (Halaman 5)
Nilai PI yang didapatkan bernilai negatif. Secara teoritis, PI tidak bisa negatif. Jika $PL > LL$, maka tanah dianggap **Non-Plastis (NP)** atau PI = 0.

[cite_start]**Analisis Kesalahan:** [cite: 1523-1529]
Nilai negatif ini mengindikasikan adanya kesalahan sistematis (*systematic error*) saat praktikum, seperti:
1.  **Ukuran Mesh:** Penggunaan saringan yang kurang tepat saat preparasi sampel.
2.  **Ketukan LL:** Jumlah ketukan sampel yang ekstrem (terlalu sedikit/banyak) di luar rentang ideal 20-30.

**Kesimpulan Sifat Tanah (Jumikis, 1962):**
* **Sifat:** Non-Plastis.
* **Jenis:** Tanah Pasir (*Sandy Soil*).
* **Kohesivitas:** Non-Kohesif.

---
*Modul ini disusun sebagai panduan analisis data praktikum geoteknik.*