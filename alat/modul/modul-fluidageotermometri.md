# MODUL PRAKTIKUM: FLUIDA PANAS BUMI DAN GEOTERMOMETRI
**Referensi:** Laporan Praktikum Geologi Panas Bumi Acara 5 - Tegar Hermawan T.
**Topik:** Analisis Kimia Fluida (Geokimia) untuk Eksplorasi Panas Bumi

---

## 1. PENDAHULUAN

### 1.1. Tujuan
Modul ini bertujuan untuk memberikan panduan praktis dalam menganalisis data kimia air dari manifestasi panas bumi (sumur dan mata air) guna:
1.  Menentukan **tipe fluida** panas bumi (Klorida, Bikarbonat, Sulfat).
2.  Memperkirakan **temperatur bawah permukaan (reservoir)** menggunakan Geotermometer.
3.  Menentukan zona **Upflow** (zona pusat panas) dan **Outflow** (zona aliran keluar).
4.  Menyusun model hidrologi sistem panas bumi.

---

## 2. DATA INPUT (KIMIA AIR)

Data yang diperlukan adalah hasil analisis laboratorium kimia air dari sampel manifestasi. Berikut adalah contoh data dari laporan (dalam ppm / mg/L):

| Kode Sampel | Temp (°C) | pH | Na | K | Ca | Mg | SiO2 | Cl | SO4 | HCO3 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **UT-01** (Sumur) | 54 | 6.4 | 1494 | 176 | 454 | 45 | 88 | 1947 | 1129 | 973 |
| **MBL** (Mata air) | 40 | 6.9 | 368 | 22 | 24 | 7 | 89 | 322 | 13 | 513 |
| **MBS** (Mata air) | 48 | 6.6 | 180 | 61 | 210 | 55 | 35 | 79 | 800 | 256 |
| **FT-7** (Sumur) | 82 | 7.8 | 4300 | 880 | 250 | 23 | 130 | 7700 | 130 | 733 |
| **KW** (Kolam) | 28 | 6.5 | 12 | 23 | 851 | 193 | 35 | 6 | 801 | 2613 |

---

## 3. ANALISIS TIPE FLUIDA ($Cl - SO_4 - HCO_3$)

Tipe fluida ditentukan menggunakan **Diagram Segitiga Giggenbach (1991)** berdasarkan persentase anion utama ($Cl^-$, $SO_4^{2-}$, $HCO_3^-$).

### 3.1. Rumus Perhitungan Persentase
Untuk setiap sampel, hitung total anion dan persentase masing-masing:

$$Total = [Cl] + [SO_4] + [HCO_3]$$
$$\%Cl = \frac{[Cl]}{Total} \times 100$$
$$\%SO_4 = \frac{[SO_4]}{Total} \times 100$$
$$\%HCO_3 = \frac{[HCO_3]}{Total} \times 100$$

### 3.2. Studi Kasus Perhitungan
[cite_start]**Contoh 1: Sumur UT-01** [cite: 1694-1696]
* $Total = 1947 + 1129 + 973 = 4049$
* $\%Cl = (1947 / 4049) \times 100 = \mathbf{48.1\%}$
* $\%SO_4 = (1129 / 4049) \times 100 = \mathbf{27.9\%}$
* $\%HCO_3 = (973 / 4049) \times 100 = \mathbf{24.0\%}$
* **Klasifikasi:** Air Klorida (Dominan Cl).

[cite_start]**Contoh 2: Sumur RF-07 (FT-7)** [cite: 1699-1700]
* $Total = 7700 + 130 + 733 = 8563$
* $\%Cl = (7700 / 8563) \times 100 = \mathbf{89.9\%}$
* **Klasifikasi:** Air Klorida (*Mature Water*).

[cite_start]**Contoh 3: Mata Air Balasari (MBS)** [cite: 1699]
* $\%SO_4 = 70.5\%$
* **Klasifikasi:** Air Sulfat (*Steam Heated Water*).

---

## 4. PERHITUNGAN GEOTERMOMETRI

Geotermometer digunakan untuk memperkirakan suhu reservoir. Hanya sampel bertipe **Air Klorida (Netral)** yang valid untuk perhitungan ini (misal: Sumur RF-07).

### 4.1. Geotermometer Silika ($SiO_2$)
Digunakan untuk suhu reservoir sedang-tinggi. Rumus Fournier (1977) untuk *No Steam Loss* (tanpa pendidihan):

$$T (^\circ C) = \frac{1309}{5.19 - \log(SiO_2)} - 273.15$$

[cite_start]**Perhitungan (RF-07, $SiO_2 = 130$):** [cite: 1739-1740]
$$T = \frac{1309}{5.19 - \log(130)} - 273.15$$
$$T = \frac{1309}{5.19 - 2.11} - 273.15$$
$$T = \mathbf{152.4^\circ C}$$

### 4.2. Geotermometer Na-K (Giggenbach, 1988)
Digunakan untuk suhu tinggi (>180°C).

$$T (^\circ C) = \frac{1390}{1.75 + \log(\frac{Na}{K})} - 273.15$$

[cite_start]**Perhitungan (RF-07, $Na=4300, K=880$):** [cite: 1741-1746]
$$T = \frac{1390}{1.75 + \log(\frac{4300}{880})} - 273.15$$
$$T = \frac{1390}{1.75 + 0.689} - 273.15$$
$$T = \mathbf{296.8^\circ C}$$

### 4.3. Geotermometer Na-K-Mg (Giggenbach Triangle)
Metode grafis menggunakan diagram terner untuk menentukan kesetimbangan fluida (*equilibrium*).
* **Input:** $Na/1000$, $K/100$, $\sqrt{Mg}$.
* **Plotting:** Tentukan posisi titik pada diagram.
* [cite_start]**Hasil RF-07:** Berada di zona *Partial Equilibrium* atau *Mature Waters* dengan estimasi suhu tinggi (~300°C). [cite: 1793]

---

## 5. INTERPRETASI HIDROLOGI & ZONASI

Berdasarkan karakteristik kimia, tentukan zona sistem panas bumi:

### 5.1. Zona Upflow (Pusat Panas)
* **Ciri:** Fluida Klorida netral dengan suhu tinggi, atau Fluida Sulfat (asam) hasil kondensasi uap di permukaan tepat di atas *upflow*.
* [cite_start]**Identifikasi:** Mata Air Balasari (Air Sulfat/Steam Heated) mengindikasikan zona *upflow* di mana gas magmatik naik dan terkondensasi. [cite: 1847-1849]

### 5.2. Zona Outflow (Aliran Keluar)
* **Ciri:** Fluida Bikarbonat atau Klorida yang telah mengalami pengenceran (*dilution*) dan pendinginan saat mengalir menjauh dari pusat panas.
* **Identifikasi:** Sumur UT-01, RF-07, Mata Air Baladewa, dan Kolam Werkudara berada di zona *outflow* (lateral flow).

### 5.3. Klasifikasi Reservoir (Hochstein, 1990)
[cite_start]Berdasarkan hasil geotermometer (Na-K ~296°C), sistem ini diklasifikasikan sebagai **Reservoir Temperatur Tinggi** (*High Enthalpy*). [cite: 1846]

---

## 6. KESIMPULAN STUDI KASUS

Dari analisis data laporan:
1.  **Tipe Fluida:** Bervariasi mulai dari Klorida (RF-07, UT-01), Sulfat (MBS), hingga Bikarbonat (MBL, KW).
2.  **Temperatur Reservoir:** Estimasi suhu dalam berkisar **152°C** (Silika) hingga **296°C** (Na-K).
3.  **Model Tentatif:** Sistem panas bumi bertemperatur tinggi dengan zona *upflow* di sekitar Mata Air Balasari (MBS) dan aliran *outflow* mengarah ke sumur-sumur produksi (RF-07, UT-01) serta mata air hangat lainnya.

---
*Modul ini disusun untuk keperluan praktikum Geologi Panas Bumi.*