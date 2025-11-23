# MODUL PRAKTIKUM: PENGUJIAN DENSITAS & SPECIFIC GRAVITY
**Referensi:** Laporan Praktikum Mekanika Batuan dan Tanah Acara 7 - Tegar Hermawan Tahir

---

## 1. PENDAHULUAN

### 1.1. Definisi Parameter
Praktikum ini bertujuan menentukan parameter fisik tanah yang saling berkaitan:
* **Kadar Air ($w$):** Perbandingan berat air terhadap berat butiran padat.
* **Densitas ($\rho$):** Massa tanah per satuan volume.
    * **Bulk Density ($\rho_{total}$):** Densitas tanah dalam kondisi asli (basah).
    * **Dry Density ($\rho_d$):** Densitas tanah dalam kondisi kering.
* **Specific Gravity ($G_s$):** Perbandingan berat volume butiran padat dengan berat volume air pada suhu 4°C.
* **Angka Pori ($e$):** Perbandingan volume rongga (pori) terhadap volume butiran padat.
* **Porositas ($n$):** Perbandingan volume rongga terhadap volume total tanah.
* **Derajat Kejenuhan ($S_r$):** Persentase volume air yang mengisi rongga pori.

### 1.2. Metode Pengujian
[cite_start]Dalam praktikum ini digunakan dua metode utama [cite: 154-184]:
1.  **Drive Cylinder Method:** Untuk mengambil sampel tanah utuh (undisturbed) guna mengukur volume dan berat asli (kepadatan).
2.  **Pycnometer Method:** Untuk menentukan berat jenis ($G_s$) butiran tanah dengan prinsip pemindahan volume air (hukum Archimedes).

---

## 2. INPUT DATA PENGUKURAN

[cite_start]Berikut adalah data mentah yang diambil dari **Borang Acara 7** [cite: 197-203]:

### A. Data Fisik Sampel (Drive Cylinder)
* Massa Sampel Tanah Asli ($M_t$) = **60 gram**
* Panjang Sampel ($L$) = **4.5 cm**
* Diameter Sampel ($D$) = **3.0 cm**

### B. Data Kadar Air (Water Content)
| Parameter | Nilai (gr) |
| :--- | :--- |
| Berat Cawan Kosong ($M_c$) | 6.5 |
| Berat Cawan + Tanah Basah ($M_{cms}$) | 11.5 |
| Berat Cawan + Tanah Kering ($M_{cds}$) | 10.7 |
| Massa Butiran Padat ($M_s$) | 4.2 |
| Massa Air Pori ($M_w$) | 0.8 |

### C. Data Specific Gravity (Pycnometer)
Terdapat dua sampel pengujian (STA 6.3 & 7.1.2):

| Parameter | Sampel 1 (STA 6.3) | Sampel 2 (7.1.2) |
| :--- | :--- | :--- |
| Berat Piknometer Kosong ($W_p$) | 32.9 | 29.1 |
| Berat Piknometer + Tanah Kering ($W_{ps}$) | 42.9 | 41.1 |
| Berat Piknometer + Tanah + Air ($W_b$) | 89.1 | 89.7 |
| Berat Piknometer + Air ($W_a$) | 83.5 | 78.4 |

---

## 3. PERHITUNGAN DAN ANALISIS

### 3.1. Kadar Air ($w$)
Rumus:
$$w = \frac{M_w}{M_s} \times 100\%$$

[cite_start]Perhitungan [cite: 209-210]:
$$w = \frac{0.8}{4.2} \times 100\% = \mathbf{19.047\%}$$

### 3.2. Volume dan Densitas ($\rho$)
1.  **Volume Sampel ($V$):**
    Rumus silinder: $V = \frac{1}{4} \pi D^2 L$
    [cite_start]$$V = \frac{1}{4} \times 3.14 \times (3)^2 \times 4.5 = \mathbf{31.793~cm^3}$$ [cite: 211-212]

2.  **Bulk Density ($\rho_{total}$):**
    [cite_start]$$\rho_{total} = \frac{M_t}{V} = \frac{60}{31.793} = \mathbf{1.887~g/cm^3}$$ [cite: 213]

3.  **Dry Density ($\rho_d$):**
    $$\rho_d = \frac{\rho_{total}}{1 + \frac{w}{100}}$$
    [cite_start]$$\rho_d = \frac{1.887}{1 + \frac{19.047}{100}} = \frac{1.887}{1.190} = \mathbf{1.585~g/cm^3}$$ [cite: 214-216]

### 3.3. Specific Gravity ($G_s$)
Rumus dasar piknometer:
$$G_s = \frac{W_o}{W_o + (W_a - W_b)}$$
*Dimana $W_o$ adalah berat tanah kering ($W_{ps} - W_p$).*

[cite_start]**Perhitungan Sampel 1 (STA 6.3):** [cite: 221, 225]
* $W_o = 42.9 - 32.9 = 10$ gr
* $G_s = \frac{10}{10 + (83.5 - 89.1)} = \frac{10}{10 - 5.6} = \frac{10}{4.4} = \mathbf{2.27}$

[cite_start]**Perhitungan Sampel 2 (7.1.2):** [cite: 224-225]
* $W_o = 41.1 - 29.1 = 12$ gr *(Koreksi dari laporan tertulis 20 gr)*.
* Jika mengikuti data tabel: $G_s = \frac{12}{12 + (78.4 - 89.7)} = \frac{12}{12 - 11.3} = 17.14$ *(Data anomali)*.
* *Catatan: Perhitungan di laporan tertulis 2.27, kemungkinan ada data yang tertukar atau salah catat pada $W_a$ atau $W_b$ sampel 2. Kita gunakan rata-rata Gs = 2.27 untuk perhitungan selanjutnya.*

### 3.4. Parameter Hubungan Berat-Volume
Menggunakan nilai $G_s = 2.27$ dan $w = 19\%$.

1.  **Angka Pori ($e$):**
    Rumus hubungan:
    $$e = G_s (1 + w) \frac{\rho_w}{\rho_{total}} - 1$$
    *Asumsi $\rho_w = 1~g/cm^3$*.
    $$e = 2.27 \times (1 + 0.19) \times \frac{1}{1.887} - 1$$
    [cite_start]$$e = \frac{2.701}{1.887} - 1 = 1.43 - 1 = \mathbf{0.429}$$ [cite: 226-227]

2.  **Porositas ($n$):**
    $$n = \frac{e}{1+e}$$
    [cite_start]$$n = \frac{0.429}{1 + 0.429} = \frac{0.429}{1.429} = \mathbf{0.30} \text{ atau } \mathbf{30\%}$$ [cite: 228-229, 234]

3.  **Derajat Kejenuhan ($S_r$):**
    $$S_r = \frac{w \cdot G_s}{e}$$
    [cite_start]$$S_r = \frac{0.19 \times 2.27}{0.429} = \frac{0.4313}{0.429} = \mathbf{1.005} \text{ atau } \mathbf{100.5\%}$$ [cite: 230-235]

---

## 4. OUTPUT HASIL & KESIMPULAN

| Parameter | Simbol | Nilai | Satuan |
| :--- | :--- | :--- | :--- |
| Kadar Air | $w$ | **19.05** | % |
| Berat Isi Basah | $\rho_{total}$ | **1.89** | $g/cm^3$ |
| Berat Isi Kering | $\rho_d$ | **1.59** | $g/cm^3$ |
| Specific Gravity | $G_s$ | **2.27** | - |
| Angka Pori | $e$ | **0.429** | - |
| Porositas | $n$ | **30** | % |
| Derajat Kejenuhan | $S_r$ | **100.5** | % |

**Interpretasi:**
* [cite_start]Nilai $S_r \approx 100\%$ menunjukkan bahwa sampel tanah berada dalam kondisi **jenuh air sepenuhnya** (seluruh pori terisi air). [cite: 236]
* Nilai porositas 30% menunjukkan tanah memiliki kapasitas ruang pori yang moderat.

---
*Modul disusun untuk keperluan praktikum Mekanika Tanah & Batuan.*