# MODUL PRAKTIKUM: ANALISIS DATA KIMIA AIR TANAH
**Referensi:** Laporan Praktikum Hidrogeologi Acara 2 - Tegar Hermawan T.
**Topik:** Hidrokimia, Fasies Air Tanah, dan Evolusi Air Tanah

---

## 1. PENDAHULUAN

### 1.1. Tujuan
Modul ini bertujuan untuk memberikan panduan dalam menganalisis karakteristik kimia air tanah guna menentukan fasies air tanah, sumber asal, dan evolusi kimia air tanah menggunakan metode geokimia seperti Metode Kurlov, Diagram Schoeller, dan Diagram Piper.

### 1.2. Komponen Kimia Air Tanah
Kualitas air tanah ditentukan oleh kandungan ion-ion terlarut:
* **Kation Utama:** Natrium ($Na^+$), Kalium ($K^+$), Kalsium ($Ca^{2+}$), Magnesium ($Mg^{2+}$).
* **Anion Utama:** Klorida ($Cl^-$), Sulfat ($SO_4^{2-}$), Bikarbonat ($HCO_3^-$), Nitrat ($NO_3^-$).

---

## 2. PENGOLAHAN DATA KIMIA

Langkah pertama dalam analisis hidrokimia adalah mengonversi satuan konsentrasi dari miligram per liter (mg/L) menjadi miliekuivalen per liter (meq/L).

### 2.1. Rumus Konversi
$$Konsentrasi~(meq/L) = \frac{Konsentrasi~(mg/L)}{Berat~Molekul / Valensi}$$

[cite_start]**Data Berat Molekul & Valensi:** [cite: 2322]
| Ion | Berat Molekul | Valensi | Faktor Pembagi (BM/Val) |
| :--- | :--- | :--- | :--- |
| $Na^+$ | 23 | 1 | 23 |
| $K^+$ | 39.1 | 1 | 39.1 |
| $Ca^{2+}$ | 40.08 | 2 | 20.04 |
| $Mg^{2+}$ | 24.31 | 2 | 12.155 |
| $Cl^-$ | 35.5 | 1 | 35.5 |
| $SO_4^{2-}$ | 96 | 2 | 48 |
| $HCO_3^-$ | 61 | 1 | 61 |
| $NO_3^-$ | 62 | 1 | 62 |

### 2.2. Studi Kasus Perhitungan
[cite_start]**Contoh: Sumur 6** [cite: 2460-2462]
* **$Na^+$:** $11 \text{ mg/L} \div 23 = \mathbf{0.478 \text{ meq/L}}$
* **$Ca^{2+}$:** $28.5 \text{ mg/L} \div 20.04 = \mathbf{1.422 \text{ meq/L}}$
* **$Cl^-$:** $3.2 \text{ mg/L} \div 35.5 = \mathbf{0.090 \text{ meq/L}}$
* **$HCO_3^-$:** $124.35 \text{ mg/L} \div 61 = \mathbf{2.039 \text{ meq/L}}$

---

## 3. METODE PENENTUAN FASIES AIR TANAH

### 3.1. Perhitungan Persentase Ion (Metode Kurlov)
Untuk menentukan nama fasies, hitung persentase masing-masing kation terhadap total kation dan anion terhadap total anion (dalam meq/L).

$$\% \text{Kation A} = \frac{\text{meq Kation A}}{\text{Total meq Kation}} \times 100\%$$

[cite_start]**Contoh Sumur 6 (Total Kation = 2.322 meq/L):** [cite: 2328]
* $\%Ca^{2+} = (1.422 / 2.322) \times 100\% = \mathbf{61.25\%}$ (Dominan)
* $\%Mg^{2+} = (0.370 / 2.322) \times 100\% = 15.95\%$
* $\%Na^+ = 20.6\%$

**Contoh Sumur 6 (Total Anion = 2.250 meq/L):**
* $\%HCO_3^- = (2.039 / 2.250) \times 100\% = \mathbf{90.6\%}$ (Dominan)

**Nama Fasies:** Kalsium Bikarbonat ($Ca-HCO_3$).

### 3.2. Cek Keseimbangan Ion (Reaction Error)
Untuk memastikan data valid, hitung *Ion Balance Error*:
$$E (\%) = \frac{\sum \text{Kation} - \sum \text{Anion}}{\sum \text{Kation} + \sum \text{Anion}} \times 100\%$$
*Batas toleransi biasanya < 5% atau < 10%.*

---

## 4. VISUALISASI DATA (DIAGRAM HIDROKIMIA)

### 4.1. Diagram Schoeller
Diagram semi-logaritmik untuk membandingkan konsentrasi relatif ion antar sampel. Garis yang sejajar menunjukkan rasio ion yang sama.
* **Sumbu Y (Log):** Konsentrasi (meq/L).
* **Sumbu X:** Jenis Ion ($Ca, Mg, Na+K, Cl, SO_4, HCO_3$).

### 4.2. Diagram Piper
Diagram terner ganda (dua segitiga di bawah, satu belah ketupat di atas) untuk klasifikasi fasies dan evolusi air tanah.
1.  **Segitiga Kiri (Kation):** Plot persentase $Ca, Mg, Na+K$.
2.  **Segitiga Kanan (Anion):** Plot persentase $HCO_3, Cl, SO_4$.
3.  **Belah Ketupat (Diamond):** Proyeksikan titik dari kedua segitiga ke atas hingga berpotongan.

---

## 5. INTERPRETASI HASIL

Berdasarkan data laporan, berikut adalah interpretasi fasies yang umum ditemukan:

### 5.1. Fasies Kalsium Bikarbonat ($Ca-HCO_3$)
* **Lokasi:** Sumur 6, 13, 20, 31, 37.
* **Interpretasi:** Air tanah dangkal atau daerah resapan (*recharge area*). Air hujan melarutkan mineral karbonat atau silikat di zona dekat permukaan. [cite_start]Air segar. [cite: 2416-2418]

### 5.2. Fasies Natrium Magnesium Bikarbonat ($Na-Mg-HCO_3$)
* **Lokasi:** Sumur 41, 44.
* **Interpretasi:** Air tanah tahap menengah (*transit*). [cite_start]Terjadi proses pertukaran ion (kation exchange) di mana Ca digantikan oleh Na seiring perjalanan air melalui batuan vulkanik atau lempung. [cite: 2419-2421]

### 5.3. Fasies Natrium Magnesium Klorida Bikarbonat ($Na-Mg-Cl-HCO_3$)
* **Lokasi:** Sumur 48.
* **Interpretasi:** Air tanah tahap lanjut (*discharge*) atau pencampuran. Kandungan $Cl^-$ yang meningkat menunjukkan pengaruh air formasi tua, intrusi air asin, atau pembubaran mineral evaporit. [cite_start]Air ini cenderung lebih asin. [cite: 2422-2425]

---

## 6. KESIMPULAN STUDI KASUS

Dari analisis Acara 2:
1.  **Dominasi Fasies:** Sebagian besar sampel adalah tipe **Kalsium Bikarbonat**, menunjukkan sistem air tanah yang didominasi oleh air meteorik segar di akuifer dangkal vulkanik.
2.  **Evolusi Kimia:** Terlihat tren perubahan dari $Ca-HCO_3$ (hulu) menuju $Na-Mg-HCO_3$ (hilir/transit), mencerminkan proses interaksi batuan-air yang semakin intensif.
3.  **Sumber Ion:** Pelapukan batuan vulkanik (plagioklas, mineral mafik) dan sedimen aluvial menjadi penyumbang utama ion $Ca, Mg, Na,$ dan $HCO_3$.

---
*Modul ini disusun untuk keperluan praktikum Hidrogeologi.*