# MODUL PRAKTIKUM: KLASIFIKASI MASSA BATUAN (RMR & GSI)
**Referensi:** Laporan Praktikum Geologi Teknik Acara 6 - Tegar Hermawan T.
**Metode:** Rock Mass Rating (Bieniawski, 1989) & Geological Strength Index (GSI)

---

## 1. PENDAHULUAN

### 1.1. Tujuan
Modul ini bertujuan untuk memberikan panduan praktis dalam mengidentifikasi dan menilai kualitas massa batuan guna keperluan rekayasa keteknikan (seperti kestabilan lereng, terowongan, atau fondasi).

### 1.2. Definisi Massa Batuan
Massa batuan adalah tubuh batuan *in-situ* yang terdiri dari blok-blok batuan utuh (*intact rock*) yang dipisahkan oleh bidang diskontinuitas (kekar, sesar, perlapisan). Sifat massa batuan ditentukan oleh kekuatan batuan utuh dan karakteristik diskontinuitasnya.

---

## 2. METODE ROCK MASS RATING (RMR)

Sistem RMR (Bieniawski, 1989) menggunakan 6 parameter utama untuk memberikan bobot (*rating*) pada kualitas massa batuan.

### 2.1. Parameter 1: Kuat Tekan Batuan Utuh (UCS)
Mengukur kekuatan batuan menahan beban sebelum pecah.
* **Uji Lab:** *Uniaxial Compressive Strength* (UCS) atau *Point Load Index* (PLI).
* **Rating:** Semakin kuat batuan, semakin tinggi ratingnya.
    * *Contoh:* UCS > 250 MPa (Rating 15) s.d. UCS < 1 MPa (Rating 0).

### 2.2. Parameter 2: Rock Quality Designation (RQD)
Mengukur persentase kualitas inti bor yang utuh (panjang > 10 cm).
* **Rumus:** $RQD = (\Sigma \text{Panjang Potongan} > 10 \text{cm} / \text{Total Panjang}) \times 100\%$
* **Rating:**
    * 90-100% (Rating 20)
    * 75-90% (Rating 17)
    * 50-75% (Rating 13)
    * 25-50% (Rating 8)
    * < 25% (Rating 3)

### 2.3. Parameter 3: Spasi Diskontinuitas
Jarak tegak lurus antara dua bidang diskontinuitas yang berurutan.
* **Rating:** Semakin rapat spasi (jarak pendek), semakin rendah ratingnya karena batuan semakin hancur/banyak kekar.

### 2.4. Parameter 4: Kondisi Diskontinuitas
Menilai karakteristik fisik bidang kekar. Terdiri dari 5 sub-parameter:
1.  **Kemenerusan (Persistence):** Panjang jejak kekar.
2.  **Lebar Bukaan (Aperture):** Celah antar bidang.
3.  **Kekasaran (Roughness):** Kasar/halus permukaan.
4.  **Material Pengisi (Infilling):** Ada/tidaknya lempung atau mineral lain.
5.  **Pelapukan (Weathering):** Segar atau lapuk.

### 2.5. Parameter 5: Kondisi Air Tanah
Tekanan air dalam pori mengurangi kekuatan geser.
* **Kategori:** Kering (*Dry*), Lembab (*Damp*), Basah (*Wet*), Menetes (*Dripping*), Mengalir (*Flowing*).

### 2.6. Parameter 6: Orientasi Diskontinuitas (Adjustment)
Koreksi nilai RMR berdasarkan arah kemiringan kekar terhadap arah penggalian/lereng.
* **Favorable:** Menguntungkan (Rating dikurangi sedikit/tidak ada).
* **Unfavorable:** Merugikan (Rating dikurangi banyak).

---

## 3. STUDI KASUS PERHITUNGAN RMR

Berikut adalah contoh perhitungan berdasarkan data lapangan di Desa Winong, Tulungagung.

### KASUS 1: LERENG 1 (Kualitas Sedang)
* **Kuat Tekan:** 38.8 MPa $\rightarrow$ Rating **4**
* **RQD:** 29.9% $\rightarrow$ Rating **8**
* **Spasi:** 0.8 - 1 m $\rightarrow$ Rating **15**
* **Kondisi Kekar:** Rating Total **24**
    * *(Detail: Kemenerusan 1-3m, Bukaan 0.1-1mm, Kasar, Agak Lapuk, Tidak ada isian)*.
* **Air Tanah:** Lembab $\rightarrow$ Rating **10**
* **Orientasi:** *Favorable* (Menguntungkan) $\rightarrow$ Rating **-5**

**Total RMR:**
$$RMR = 4 + 8 + 15 + 24 + 10 - 5 = \mathbf{56}$$
**Klasifikasi:** **Fair Rock (Kelas III)** - Batuan Cukup Baik.

### KASUS 2: LERENG 2 (Kualitas Sedang - Rendah)
* **Kuat Tekan:** 36.35 MPa $\rightarrow$ Rating **4**
* **RQD:** 30.66% $\rightarrow$ Rating **8**
* **Spasi:** 0.86 - 0.98 m $\rightarrow$ Rating **15**
* **Kondisi Kekar:** Rating **24**
* **Air Tanah:** Kering $\rightarrow$ Rating **15**
* **Orientasi:** *Fair* (Cukup) $\rightarrow$ Rating **-25**

**Total RMR:**
$$RMR = 4 + 8 + 15 + 24 + 15 - 25 = \mathbf{41}$$
**Klasifikasi:** **Fair Rock (Kelas III)** - Batas Bawah.

### KASUS 3: LERENG 3 (Kualitas Buruk)
* **Kuat Tekan:** 37.06 MPa $\rightarrow$ Rating **4**
* **RQD:** 49.76% $\rightarrow$ Rating **8**
* **Spasi:** 0.8 - 0.95 m $\rightarrow$ Rating **15**
* **Kondisi Kekar:** Rating **24**
* **Air Tanah:** Menetes (*Dripping*) $\rightarrow$ Rating **4**
* **Orientasi:** *Fair* $\rightarrow$ Rating **-25**

**Total RMR:**
$$RMR = 4 + 8 + 15 + 24 + 4 - 25 = \mathbf{30}$$
**Klasifikasi:** **Poor Rock (Kelas IV)** - Batuan Buruk.

---

## 4. METODE GEOLOGICAL STRENGTH INDEX (GSI)

GSI adalah sistem klasifikasi visual kualitatif yang menghubungkan kondisi geologi dengan parameter kekuatan teknik (Hoek & Brown).

### Cara Penentuan GSI:
Gunakan grafik standar GSI dengan dua sumbu:
1.  **Sumbu Vertikal (Kondisi Permukaan / Surface Condition):**
    * *Very Good* (Kasar, segar).
    * *Good* (Kasar, sedikit lapuk).
    * *Fair* (Halus, agak lapuk).
    * *Poor* (Cermin sesar, sangat lapuk).
    * *Very Poor* (Lempung lunak, hancur).
2.  **Sumbu Horizontal (Struktur Batuan / Structure):**
    * *Blocky* (Kekar lebar, blok masif).
    * *Very Blocky* (Kekar rapat, blok banyak).
    * *Blocky/Disturbed* (Terganggu, blok mulai hancur).
    * *Disintegrated* (Hancur total, seperti tanah).

**Nilai GSI:** Berkisar 0 - 100. Nilai ini didapat dari perpotongan kondisi permukaan dan struktur pada grafik.

---

## 5. INTERPRETASI DAN REKOMENDASI TEKNIS

Berdasarkan hasil RMR di atas:

1.  **Lereng 1 (RMR 56 - Fair):**
    * Paling stabil di antara ketiganya.
    * **Rekomendasi:** Aman untuk konstruksi ringan, mungkin butuh *spot bolting* atau drainase sederhana jika beban bertambah.
2.  **Lereng 2 (RMR 41 - Fair/Poor):**
    * Stabilitas marginal. Orientasi kekar kurang menguntungkan.
    * **Rekomendasi:** Waspada longsoran bidang. Perlu dinding penahan (*retaining wall*) atau *wire mesh* jika ada potensi batuan jatuh.
3.  **Lereng 3 (RMR 30 - Poor):**
    * **Berisiko Tinggi.** Air tanah (menetes) sangat menurunkan kekuatan batuan.
    * **Rekomendasi:** Perlu penanganan serius. Drainase intensif (suling-suling) untuk mengurangi tekanan air, *shotcrete*, dan penyanggan berat (*heavy support*).

---

## 6. KESIMPULAN
Dalam rekayasa batuan, nilai RMR memberikan gambaran kuantitatif risiko.
* **Faktor Kritis:** Orientasi diskontinuitas dan air tanah adalah faktor pengontrol utama yang dapat menurunkan kelas batuan secara drastis (seperti pada Lereng 3).
* **Prioritas:** Lereng 1 adalah lokasi paling layak untuk pengembangan, sedangkan Lereng 3 memerlukan mitigasi ekstensif sebelum digunakan.

---
*Modul disusun untuk keperluan Praktikum Geologi Teknik.*