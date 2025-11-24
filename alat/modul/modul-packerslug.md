# MODUL PRAKTIKUM: PACKER TEST DAN SLUG TEST
**Referensi:** Laporan Praktikum Hidrogeologi Acara 5 - Tegar Hermawan T.
**Tujuan:** Menentukan karakteristik permeabilitas batuan/akuifer (Koefisien Kelulusan Air dan Nilai Lugeon).

---

## 1. PENDAHULUAN

### 1.1. Packer Test
Metode uji permeabilitas lapangan untuk batuan kompak dengan menyekat lubang bor menggunakan *packer* (karet pengembang).
* **Target:** Formasi batuan padat/rekahan.
* **Output:** Konduktivitas Hidrolik ($k$) dan Nilai Lugeon ($Lu$).

### 1.2. Slug Test
Metode uji cepat dengan memasukkan atau mengeluarkan benda padat (*slug*) ke dalam sumur untuk menyebabkan perubahan muka air sesaat.
* **Target:** Akuifer dengan permeabilitas rendah-sedang.
* **Output:** Konduktivitas Hidraulik ($k$).

---

## BAGIAN A: PACKER TEST

### 2. INPUT DATA (STUDI KASUS SOAL 1)

Berikut adalah parameter yang diperlukan:
* **Dimensi Sumur:**
    * Diameter lubang ($d$) = 82 mm ($r$ = 4.1 cm).
    * Panjang bagian yang diuji ($L$) = 15 meter (1500 cm).
* **Tekanan Uji:**
    * Tinggi Pressure Gauge ($h_p$) = 1.4 m.
    * Tinggi Muka Air Tanah ($h_m$) = 15 m (dari selisih elevasi sumur 355 mdpl dan MAT 340 mdpl).
    * Tekanan Manometer ($P_m$) = 3.5 $kg/cm^2$.
* **Debit Injeksi ($Q$):** 50 Liter/menit.

### 3. PERHITUNGAN PACKER TEST

#### 3.1. Menghitung Tekanan Total ($P$ dan $h$)
1.  **Tekanan Statis ($P_s$):** Tekanan akibat kolom air di atas zona uji.
    $$P_s = \frac{h_m + h_p}{10}$$
    $$P_s = \frac{15 + 1.4}{10} = 1.64 ~kg/cm^2$$

2.  **Tekanan Total ($P$):**
    $$P = P_m + P_s = 3.5 + 1.64 = \mathbf{5.14 ~kg/cm^2}$$

3.  **Total Head ($h$):** Konversi tekanan total ke kolom air (cm).
    $$h = (h_m + h_p) \times \text{Konversi Tekanan}$$
    *Dalam laporan dihitung langsung sebagai $h_m + h_p$ dalam satuan cm untuk rumus k, namun idealnya $h$ dalam rumus k adalah total head yang setara dengan tekanan injeksi total.*
    * **Koreksi dari laporan:** Laporan menggunakan $h = 1640$ cm ($15+1.4$ m). Ini adalah *static head*. Untuk uji tekanan, $h$ seharusnya ekuivalen dengan $P$ total ($5.14 kg/cm^2 \approx 51.4$ m atau 5140 cm). Namun, mari kita ikuti alur perhitungan laporan:
    * $h_{laporan} = 1500 + 140 = 1640$ cm.

#### 3.2. Konversi Debit ($Q$)
$$Q = 50 ~L/menit = \frac{50,000}{60} ~cm^3/detik = 833.33 ~cm^3/detik$$

#### 3.3. Koefisien Kelulusan Air ($k$)
Rumus untuk $L \ge 10r$:
$$k = \frac{Q}{2 \pi L h} \ln \left( \frac{L}{r} \right)$$

[cite_start]**Perhitungan:** [cite: 2726-2728]
$$k = \frac{833.33}{2 \times 3.14 \times 1500 \times 1640} \times \ln \left( \frac{1500}{4.1} \right)$$
$$k = (5.39 \times 10^{-5}) \times 5.9 = \mathbf{3.18 \times 10^{-4} ~cm/detik}$$
**Klasifikasi:** *Medium Permeability*.

#### 3.4. Nilai Lugeon ($Lu$)
Satuan permeabilitas standar untuk *grouting*. 1 Lugeon $\approx 1.3 \times 10^{-5}$ cm/s.
$$Lu = \frac{10 \times Q_{(L/menit)}}{P_{(kg/cm^2)} \times L_{(meter)}}$$

[cite_start]**Perhitungan:** [cite: 2730-2731]
$$Lu = \frac{10 \times 50}{5.14 \times 15} = \frac{500}{77.1} = \mathbf{6.4 ~Lu}$$
**Klasifikasi:** *Some Open* (Agak Terbuka).

---

## BAGIAN B: SLUG TEST

### 4. INPUT DATA (STUDI KASUS SOAL 2)

Metode yang digunakan adalah **Metode Hvorslev** (Time Lag).
* **Geometri Sumur:**
    * Jari-jari casing ($r$) = 4.1 cm (0.041 m).
    * Jari-jari lubang/screen ($R$) = $r + \text{gravel pack} = 2.75 + 55$ cm? *(Koreksi: Laporan menulis $R=0.275$ m, asumsi $r_{screen}=2.75$ cm + tebal gravel 24.75 cm? Mari gunakan nilai laporan $R=0.275$ m)*.
    * Panjang screen ($L_e$) = 5 m.
* **Data Uji (Time vs Head):**
    * $H_0$ (Static Level) = 180 mdpl.
    * Data penurunan muka air seiring waktu ($t=0$ s.d $t=25$).

### 5. ANALISIS SLUG TEST

#### 5.1. Pengolahan Data
Hitung rasio pemulihan muka air (*Head Ratio*):
$$\text{Ratio} = \frac{H_0 - H'}{H_0 - H}$$
*Dimana $H$ adalah level awal saat slug dimasukkan, $H'$ adalah level saat waktu $t$.*

[cite_start]Tabel Perhitungan[cite: 2749]:
* $t=0$: Ratio = 1.00
* $t=5$: Ratio = 0.75
* $t=10$: Ratio = 0.58
* ...
* $t=25$: Ratio = 0.28

#### 5.2. Penentuan Basic Time Lag ($t_{37}$)
Plot grafik semi-logaritma (Waktu vs Rasio). Cari waktu ($t$) di mana rasio mencapai **0.37**.
* [cite_start]Dari grafik laporan[cite: 2751]: Nilai $t_{37} \approx 20$ detik.

#### 5.3. Perhitungan Konduktivitas Hidrolik ($k$)
Rumus Hvorslev:
$$k = \frac{r^2 \ln(L_e / R)}{2 L_e t_{37}}$$

[cite_start]**Perhitungan:** [cite: 2770]
$$k = \frac{(0.041)^2 \times \ln(5 / 0.275)}{2 \times 5 \times 20}$$
$$k = \frac{0.001681 \times 2.9}{200} = \mathbf{2.44 \times 10^{-5} ~m/detik}$$

---

## BAGIAN C: ANALISIS TABEL LUGEON (SOAL 3)

### 6. INTERPRETASI POLA ALIRAN
Untuk menentukan nilai Lugeon representatif, dilakukan uji bertahap (tekanan naik $\rightarrow$ puncak $\rightarrow$ turun).

[cite_start]**Data Lugeon per Tahap:** [cite: 2777]
1.  Tahap 1 (3 kg/cm²): 10.98
2.  Tahap 2 (5 kg/cm²): 13.38
3.  Tahap 3 (8 kg/cm²): 9.17 (Puncak)
4.  Tahap 4 (6 kg/cm²): 11.40
5.  Tahap 5 (4 kg/cm²): 9.56

**Analisis Pola:**
Nilai Lugeon tertinggi terjadi pada tekanan rendah/sedang, dan nilai terendah terjadi pada tekanan puncak ($9.17$). Pola di mana $Lu_{puncak} < Lu_{rendah}$ mengindikasikan **Aliran Turbulen**.

**Nilai yang Dipakai:**
Untuk aliran turbulen, nilai Lugeon yang diambil adalah nilai pada tekanan tertinggi (Puncak).
$$Lu_{design} = \mathbf{9.175}$$

---

## 7. KESIMPULAN AKHIR

1.  **Packer Test (Soal 1):** Batuan memiliki permeabilitas menengah ($k \approx 10^{-4}$ cm/s) dengan nilai Lugeon 6.4, cocok untuk injeksi semen (*grouting*) standar.
2.  **Slug Test (Soal 2):** Lokasi memiliki permeabilitas $2.44 \times 10^{-5}$ m/s. Untuk *waste dump* (limbah), dibutuhkan lapisan impermeabel ($k < 10^{-7}$ cm/s). Nilai ini masih terlalu tinggi (permeabel), sehingga **tidak cocok** tanpa pelapis tambahan (*liner*).
3.  **Pola Aliran (Soal 3):** Terdeteksi aliran turbulen selama pengujian, sehingga nilai permeabilitas efektif mungkin lebih rendah dari yang terukur pada tekanan rendah.

---
*Modul ini disusun untuk keperluan praktikum Hidrogeologi Teknik.*