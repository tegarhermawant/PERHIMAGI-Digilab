# MODUL PRAKTIKUM: DRILLING & MUDLOGGING (HIDROLIKA LUMPUR)
**Referensi:** Laporan Praktikum Geologi Minyak & Gas Bumi - Tegar Hermawan T.
**Topik:** Perhitungan Hidrolika Pemboran dan Pengendalian Sumur (*Well Control*)

---

## 1. PENDAHULUAN

### 1.1. Tujuan
Modul ini bertujuan untuk memahami parameter hidrolika lumpur pemboran yang krusial dalam operasi pengeboran dan pengendalian sumur (*well control*). Perhitungan ini digunakan untuk menentukan volume lubang, waktu sirkulasi lumpur, tekanan formasi, serta berat lumpur yang diperlukan untuk mengatasi *kick* (intrusi fluida formasi).

### 1.2. Data Input (Parameter Sumur)
Berdasarkan laporan, berikut adalah data sumur yang digunakan sebagai acuan perhitungan:

**A. Konfigurasi Lubang (Hole Geometry):**
1.  **Conductor Pipe:** OD 49", ID 46", Kedalaman 0 - 65 ft.
2.  **Casing 1:** OD 37", ID 33", Kedalaman 65 - 3500 ft.
3.  **Casing 2:** OD 32", ID 29.125", Kedalaman 3500 - 7000 ft.
4.  **Open Hole (Bit Size):** 18.25", Kedalaman 7000 - 8000 ft.

**B. Rangkaian Pipa Bor (Drill String):**
5.  **Drill Pipe (DP):** OD 14.5", ID 12.5", Panjang 7950 ft.
6.  **Drill Collar (DC):** OD 17.15", ID 14.5", Panjang 50 ft.

**C. Parameter Operasi & Lumpur:**
7.  **Pump Speed:** 100 SPM (*Stroke per Minute*).
8.  **Pump Output (POP):** 8 GPS (*Gallon per Stroke*). *Catatan: POP di laporan dikonversi ke bbl/menit.*
9.  **Berat Jenis Lumpur ($MW_o$):** 12.5 PPG (*Pound per Gallon*).
10. **Yield Point (YP):** 12 $lb/100ft^2$.
11. **Shut-In Casing Pressure (SICP):** 400 psi.
12. **Shut-In Drill Pipe Pressure (SIDPP):** 300 psi.
13. **Volume Kill Mud:** 100 bbl.
14. **Pit Gain:** 15 bbl.

---

## 2. PERHITUNGAN VOLUME LUBANG & ANULUS

Langkah pertama adalah menghitung volume geometris sumur untuk mengetahui berapa banyak lumpur yang dibutuhkan.

**Rumus Dasar Kapasitas (bbl/ft):**
$$Kap = \frac{ID^2}{1029.4}$$

### 2.1. Volume Lubang Bor (Total Hole Volume)
Volume total ruang yang terbentuk dari permukaan hingga dasar sumur.

* **V. Conductor Pipe:** $\frac{46^2}{1029.4} \times 65 = 133.66$ bbl.
* **V. Casing 1:** $\frac{33^2}{1029.4} \times (3500 - 65) = 3635.29$ bbl.
* **V. Casing 2:** $\frac{29.125^2}{1029.4} \times (7000 - 3500) = 2885.26$ bbl.
* **V. Open Hole:** $\frac{18.25^2}{1029.4} \times (8000 - 7000) = 323.68$ bbl.

**Total Volume Lubang Bor:**
$$V_{hole} = 133.66 + 3635.29 + 2885.26 + 323.68 = \mathbf{6977.89~bbl}$$

### 2.2. Volume Displacement Drill String
Volume baja dari rangkaian pipa yang masuk ke lubang.

* **V. Drill Collar:** $\frac{17.15^2}{1029.4} \times 50 = 14.29$ bbl.
* **V. Drill Pipe:** $\frac{14.5^2}{1029.4} \times 7950 = 1624.38$ bbl.

**Total Volume Displacement:**
$$V_{disp} = 14.29 + 1624.38 = \mathbf{1638.67~bbl}$$

### 2.3. Volume Anulus (Annular Volume)
Volume ruang kosong antara lubang bor dan pipa bor (tempat lumpur mengalir naik).

$$V_{anulus} = V_{hole} - V_{disp}$$
$$V_{anulus} = 6977.89 - 1638.67 = \mathbf{5339.22~bbl}$$
*(Catatan: Hasil di laporan Anda 8616 bbl sepertinya menjumlahkan $V_{hole} + V_{disp}$, secara konsep anulus adalah selisihnya atau dihitung per segmen $OD_{hole}^2 - OD_{pipe}^2$. Jika menggunakan penjumlahan, pastikan konteksnya).*

---

## 3. PERHITUNGAN WAKTU SIRKULASI

### 3.1. Debit Pompa (Flow Rate)
$$Q = POP \times SPM = 8 \times 100 = 800 \text{ GPM}$$
Konversi ke bbl/menit (1 bbl = 42 gallon):
$$Q_{bbl} = \frac{800}{42} = 19.05 \text{ bbl/menit}$$

### 3.2. Lag Time (Bottoms Up)
Waktu yang dibutuhkan lumpur untuk naik dari dasar sumur ke permukaan melalui anulus.

$$Lag~Time = \frac{V_{anulus}}{Q_{bbl}}$$
$$Lag~Time = \frac{5339.22}{19.05} \approx \mathbf{280.27 \text{ menit}}$$
*(Catatan: Jika menggunakan nilai V.Anulus 8616 dari laporan, hasilnya 452 menit).*

### 3.3. Complete Circulation (Total Cycle Time)
Waktu total untuk satu siklus lumpur (Surface -> Bit -> Surface).

$$CC = \frac{V_{sumur}}{Q_{bbl}}$$
*(Di laporan menggunakan rumus $V_{sumur} - Disp / POP$)*

---

## 4. HIDROLIKA & TEKANAN (PRESSURE)

### 4.1. Annular Velocity (AV)
Kecepatan lumpur naik di anulus, penting untuk pengangkatan serbuk bor (*cuttings transport*).

$$AV = \frac{24.5 \times Q_{(GPM)}}{D_{hole}^2 - D_{pipe}^2}$$

**Contoh (Open Hole - Drill Collar):**
$$AV = \frac{24.5 \times 800}{18.25^2 - 17.15^2} = \frac{19600}{333.06 - 294.12} = \frac{19600}{38.94} \approx \mathbf{503.3 \text{ ft/min}}$$

### 4.2. Effective Circulating Density (ECD)
Berat jenis lumpur efektif saat sirkulasi (menambah efek gesekan/friksi di anulus).

$$ECD = MW + \frac{APL}{0.052 \times TVD}$$
Dimana **APL (Annular Pressure Loss)** dihitung berdasarkan Yield Point:
$$APL = \frac{YP \times L}{225 \times (D_{hole} - D_{pipe})}$$ *(Rumus pendekatan Bigham Plastic)*

**Contoh (Open Hole - Drill Collar):**
$$APL = \frac{12 \times 1000}{11.7 \times (18.25 - 17.15)} \approx 93 \text{ psi}$$ *(Menggunakan konstanta 11.7 dari laporan)*.
$$ECD = 12.5 + \frac{93}{0.052 \times 8000} = 12.5 + 0.22 = \mathbf{12.72 \text{ PPG}}$$

---

## 5. WELL CONTROL (PENGENDALIAN SUMUR)

Bagian ini menghitung parameter untuk mematikan sumur (*kill well*) setelah terjadi *kick*.

### 5.1. Tekanan Formasi (Formation Pressure / Pf)
Tekanan pori batuan yang menyebabkan *kick*. Dihitung dari tekanan hidrostatik lumpur saat ini ditambah tekanan tutup di drill pipe (SIDPP).

$$Pf = (0.052 \times MW \times TVD) + SIDPP$$
$$Pf = (0.052 \times 12.5 \times 8000) + 300$$
$$Pf = 5200 + 300 = \mathbf{5500 \text{ psi}}$$

### 5.2. Kill Mud Weight (KMW) / Equal Mud Density
Berat jenis lumpur baru yang diperlukan untuk menyeimbangkan tekanan formasi tanpa tekanan permukaan tambahan.

$$KMW = \frac{Pf}{0.052 \times TVD}$$
$$KMW = \frac{5500}{0.052 \times 8000} = \frac{5500}{416} = \mathbf{13.22 \text{ PPG}}$$

### 5.3. Kebutuhan Barite
Jumlah material pemberat (Barite) untuk menaikkan densitas lumpur dari 12.5 PPG menjadi 13.22 PPG.

$$Barite = \frac{1470 \times (KMW - MW_{old})}{35 - KMW}$$
$$Barite = \frac{1470 \times (13.22 - 12.5)}{35 - 13.22} = \frac{1058.4}{21.78} \approx \mathbf{48.6 \text{ lbs/bbl}}$$
*(Catatan: Rumus di laporan menggunakan konstanta yang sedikit berbeda, prinsipnya sama).*

### 5.4. Estimasi Jenis Fluida Intrusi (Kick)
Menggunakan data *Pit Gain* (pertambahan volume lumpur di tangki) dan panjang kolom *kick* di anulus.

1.  **Panjang Kolom Kick ($L_k$):**
    $$L_k = \frac{\text{Pit Gain}}{\text{Kapasitas Anulus DC}}$$
    Kap. Anulus DC = $\frac{18.25^2 - 17.15^2}{1029.4} \approx 0.0378$ bbl/ft.
    $$L_k = \frac{15}{0.0378} \approx 396 \text{ ft}$$

2.  **Gradien Fluida Kick ($G_k$):**
    $$G_k = MW - \frac{SICP - SIDPP}{0.052 \times L_k}$$
    $$G_k = 12.5 - \frac{400 - 300}{0.052 \times 396} = 12.5 - 4.85 = 7.65 \text{ PPG}$$

**Interpretasi:**
* Gas: ~2 PPG
* Minyak: ~7 PPG
* Air Asin: ~9 PPG
* **Kesimpulan:** Fluida intrusi kemungkinan adalah **Campuran Minyak/Air**.

---

## 6. RINGKASAN HASIL

| Parameter | Nilai | Satuan |
| :--- | :--- | :--- |
| Total Volume Lubang | 6977.89 | bbl |
| Total Volume Anulus | 5339.22 | bbl |
| Tekanan Formasi ($Pf$) | 5500 | psi |
| Kill Mud Weight ($KMW$) | 13.22 | PPG |
| Kebutuhan Barite | 48.6 | lbs/bbl |
| Jenis Fluida Kick | Minyak/Air | - |

---
*Modul disusun untuk keperluan praktikum Teknik Pemboran dan Geologi Minyak Bumi.*