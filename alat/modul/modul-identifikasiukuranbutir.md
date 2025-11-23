# MODUL PANDUAN: ANALISIS UKURAN BUTIR SEDIMEN (GRAIN SIZE ANALYSIS)
**Referensi:** Laporan Praktikum Sedimentologi Stratigrafi - Acara 2
**Penyusun:** Tegar Hermawan T.

---

## 1. PENDAHULUAN
[cite_start]Analisis ukuran butir adalah metode fundamental untuk memahami karakteristik batuan sedimen, agen transportasi, dan lingkungan pengendapan[cite: 35, 407]. [cite_start]Batuan sedimen terbentuk dari akumulasi material hasil perombakan batuan sebelumnya yang diendapkan lapis demi lapis[cite: 40].

### Skala Udden-Wentworth
[cite_start]Klasifikasi baku yang digunakan adalah Skala Udden-Wentworth (1922) yang menggunakan satuan **Phi ($\phi$)**[cite: 42, 43].

**Konversi Rumus:**
$$\phi = -\log_2 (d)$$
*Dimana $d$ adalah diameter butir dalam satuan milimeter (mm).*

**Klasifikasi Umum:**
| Nama Butir | Ukuran (mm) | Ukuran Phi ($\phi$) |
| :--- | :--- | :--- |
| **Gravel** (Kerikil) | $> 2$ mm | $< -1$ |
| **Sand** (Pasir) | $1/16 - 2$ mm | $4$ s.d. $-1$ |
| **Silt** (Lanau) | $1/256 - 1/16$ mm | $8$ s.d. $4$ |
| **Clay** (Lempung) | $< 1/256$ mm | $> 8$ |

---

## 2. METODE PENGAMBILAN SAMPEL (LAPANGAN)

### Alat & Bahan
* [cite_start]Sekop [cite: 416]
* [cite_start]Plastik sampel ukuran $20 \times 30$ cm [cite: 415]
* [cite_start]Buku catatan & Alat tulis [cite: 414, 417]
* [cite_start]Kamera [cite: 418]
* [cite_start]Sterofoam dan tali rafia (untuk mengukur kecepatan arus) [cite: 421]

### Prosedur Kerja
1.  [cite_start]**Penentuan Lokasi:** Tentukan Lokasi Pengamatan (LP) yang mewakili segmen hulu dan hilir sungai[cite: 440].
2.  [cite_start]**Pengukuran Arus:** Ukur kecepatan aliran sungai menggunakan metode apung (sterofoam)[cite: 441].
    * [cite_start]*Contoh Data Lapangan:* $136~cm/s$ (Hulu) dan $92~cm/s$ (Hilir)[cite: 669].
3.  **Sampling:** Ambil sampel sedimen (pasir/kerakal) secukupnya menggunakan sekop.
4.  [cite_start]**Pembersihan:** Cuci sampel untuk menghilangkan lumpur/kotoran, kemudian keringkan sampel tersebut[cite: 442].

---

## 3. METODE ANALISIS LABORATORIUM (PENGAYAKAN)

### Persiapan Sampel (Splitting)
[cite_start]Untuk mendapatkan sampel yang representatif (berat $\pm 100$ gram), lakukan pembagian sampel (*splitting*)[cite: 293].

1.  **Coning & Quartering:**
    * [cite_start]Tuang sampel hingga membentuk kerucut (*coning*), lalu ratakan[cite: 297, 298].
    * [cite_start]Bagi menjadi 4 bagian sama besar menggunakan karton penyekat[cite: 298].
    * Ambil 2 bagian yang berseberangan, sisihkan 2 bagian lainnya. [cite_start]Ulangi hingga berat mencapai target[cite: 299].
2.  **Metode Quartering (Alat):**
    * [cite_start]Menggunakan alat *splitter* berupa susunan karton/logam tegak lurus yang membagi sampel secara otomatis saat dituangkan[cite: 302, 303].

### Prosedur Pengayakan (Sieving)
1.  **Susunan Mesh:** Susun saringan (*sieve*) dari ukuran lubang terbesar (atas) ke terkecil (bawah), diakhiri dengan panci (*pan*).
    * [cite_start]*Susunan Standar:* Mesh No. 10, 18, 35, 60, 230, 270[cite: 432].
2.  **Pengayakan:** Masukkan 100 gram sampel kering ke mesh teratas. [cite_start]Nyalakan mesin *Sieve Shaker* selama **7 menit**[cite: 446].
3.  [cite_start]**Penimbangan:** Timbang berat fraksi sedimen yang tertahan di setiap nomor mesh[cite: 448].
4.  **Kontrol Kualitas:** Pastikan berat sampel yang hilang (*loss*) tidak melebihi **5%** dari berat awal. [cite_start]Jika lebih, ulangi proses[cite: 307, 449].

---

## 4. PERHITUNGAN MATEMATIS (METHOD OF MOMENTS)

Perhitungan statistik menggunakan data berat fraksi ($f$) dan nilai tengah interval kelas ($m$) dalam satuan phi ($\phi$).

**Rumus Dasar Moment ke-n:**
$$\text{log } n = \frac{\Sigma(f \cdot m^n)}{N}$$
[cite_start]*(Dimana $N$ adalah jumlah total persen berat, biasanya 100)*[cite: 385].

### A. Mean (Rata-rata / $x_{\phi}$)
Menunjukkan ukuran butir rata-rata dari populasi sedimen.
$$x_{\phi} = \frac{\Sigma (f \cdot m)}{N}$$
[cite_start][cite: 395]

### B. Sortasi (Standar Deviasi / $\sigma_{\phi}$)
Menunjukkan tingkat keseragaman ukuran butir.
$$\sigma_{\phi} = \sqrt{\frac{\Sigma f(m - x_{\phi})^2}{100}}$$
[cite_start][cite: 399]

[cite_start]**Klasifikasi Sortasi (Wentworth):** [cite: 322-336]
* $< 0.35$: *Very well sorted*
* $0.35 - 0.50$: *Well sorted*
* $0.50 - 0.71$: *Moderately well sorted*
* $0.71 - 1.00$: *Moderately sorted*
* $1.00 - 2.00$: *Poorly sorted*
* $2.00 - 4.00$: *Very poorly sorted*

### C. Skewness (Kepencengan / $Sk_{\phi}$)
Menunjukkan tingkat kesimetrian kurva distribusi.
$$Sk_{\phi} = \frac{\Sigma f(m - x_{\phi})^3}{100 \cdot \sigma_{\phi}^3}$$
[cite_start][cite: 401]

[cite_start]**Klasifikasi Skewness:** [cite: 344-354]
* $+1.0$ s.d. $+0.3$: *Very fine-skewed*
* $+0.3$ s.d. $+0.1$: *Fine-skewed*
* $+0.1$ s.d. $-0.1$: *Near-symmetrical*
* $-0.1$ s.d. $-0.3$: *Coarse-skewed* (Condong butir kasar)

### D. Kurtosis (Keruncingan / $K_{\phi}$)
Menunjukkan tingkat kepuncakan kurva distribusi.
$$K_{\phi} = \frac{\Sigma f(m - x_{\phi})^4}{100 \cdot \sigma_{\phi}^4}$$
[cite_start][cite: 405]

[cite_start]**Klasifikasi Kurtosis:** [cite: 358-371]
* $< 0.67$: *Very platykurtic* (Sangat datar)
* $0.67 - 0.90$: *Platykurtic*
* $0.90 - 1.11$: *Mesokurtic* (Normal)
* $1.11 - 1.50$: *Leptokurtic*
* $> 3.00$: *Extremely leptokurtic* (Sangat runcing)

---

## 5. INTERPRETASI GEOLOGI

Data statistik digunakan untuk menginterpretasikan:
1.  [cite_start]**Agen Transportasi:** Air, angin, atau gravitasi[cite: 409].
2.  **Energi Pengendapan:**
    * Butiran kasar = Energi tinggi.
    * Butiran halus = Energi rendah.
3.  **Mekanisme Deposisi:**
    * *Sortasi Buruk (Poorly Sorted):* Mengindikasikan pengendapan yang cepat (dumping), aliran pekat (*debris flow*), atau jarak transportasi dekat.
    * *Sortasi Baik:* Mengindikasikan proses seleksi butir yang berulang-ulang atau jarak transportasi jauh.

**Contoh Studi Kasus (Kali Kuning):**
Sampel menunjukkan sortasi buruk (*poorly sorted*) dengan kemas terbuka. [cite_start]Hal ini mengindikasikan sedimen berasal dari rombakan vulkanik (Gunung Merapi) yang ditransportasikan oleh aliran air berenergi tinggi atau pengaruh aliran lahar (*debris flow*)[cite: 671, 674].