# MODUL PRAKTIKUM: ANALISIS SARINGAN (SIEVE ANALYSIS)
**Metode:** ASTM D422 / SNI 3423:2008
**Tujuan:** Menentukan distribusi ukuran butir tanah dan klasifikasi tanah berbutir kasar (USCS).

---

## 1. DATA INPUT

Data awal yang diperlukan dari laboratorium adalah:
1.  **Ukuran Sieve (Diameter dalam mm).**
2.  **Berat Tertahan (Weight Retained).**
3.  **Persentase Tertahan ($W_r$).**
4.  **Persentase Kumulatif Lolos / Finer ($N$).**

### Konversi Data
Parameter $D_{10}, D_{30}, D_{60}$ didapatkan dari grafik **Persen Lolos (Passing)**, bukan persen tertahan.

**Rumus:**
1.  **% Tertahan ($W_r$):**
    $$W_r (\%) = \frac{\text{Berat Tertahan Tiap Sieve}}{\text{Total Berat Sampel}} \times 100\%$$

2.  **% Kumulatif Tertahan ($\Sigma W_r$):**
    Penjumlahan $W_r$ dari saringan terbesar ke terkecil.

3.  **% Kumulatif Lolos / Finer ($N$):**
    $$N (\%) = 100\% - \Sigma W_r$$

---

## 2. PENENTUAN PARAMETER UKURAN BUTIR ($D_{10}, D_{30}, D_{60}$)

Parameter ini menunjukkan diameter butiran pada persentase lolos tertentu.
* **$D_{10}$ (Effective Size):** Diameter butiran di mana 10% tanah lolos.
* **$D_{30}$:** Diameter butiran di mana 30% tanah lolos.
* **$D_{60}$:** Diameter butiran di mana 60% tanah lolos.

### Rumus Interpolasi Logaritmik
Karena grafik ayakan menggunakan skala semi-log, gunakan rumus ini untuk akurasi tinggi jika nilai persis tidak ada di tabel:

$$D_x = 10^{\left( \log D_2 - \frac{(P_2 - P_x)( \log D_2 - \log D_1 )}{P_2 - P_1} \right)}$$

*Dimana:*
* $P_x$ = Persentase yang dicari (misal: 10, 30, atau 60).
* $P_1, P_2$ = Persentase lolos pada data yang mengapit $P_x$ (P1 < Px < P2).
* $D_1, D_2$ = Diameter saringan yang sesuai dengan $P_1$ dan $P_2$.

---

## 3. PERHITUNGAN KOEFISIEN GRADASI

Digunakan untuk menentukan apakah tanah bergradasi baik (*Well Graded*) atau buruk (*Poorly Graded*).

### A. Coefficient of Uniformity ($C_u$)
Menunjukkan keseragaman ukuran butir.
$$C_u = \frac{D_{60}}{D_{10}}$$

* Jika $C_u$ besar: Rentang ukuran butir luas (bergradasi baik).
* Jika $C_u$ kecil (mendekati 1): Ukuran butir seragam.

### B. Coefficient of Curvature ($C_c$)
Menunjukkan bentuk kurva distribusi.
$$C_c = \frac{(D_{30})^2}{D_{10} \times D_{60}}$$

* Rentang ideal untuk gradasi baik: **1 < $C_c$ < 3**.

---

## 4. PENENTUAN FRAKSI TANAH

Berdasarkan saringan standar USCS:
* **Saringan No. 4** (4.75 mm).
* **Saringan No. 200** (0.075 mm).

### Perhitungan Fraksi:
1.  **Gravel Fraction (% Gravel):**
    Tanah yang **tertahan** di Saringan No. 4.
    $$\%G = 100\% - \%Lolos_{\#4}$$

2.  **Fines Fraction (% Fines):**
    Tanah yang **lolos** Saringan No. 200 (Lanau/Lempung).
    $$\%F = \%Lolos_{\#200}$$

3.  **Sand Fraction (% Sand):**
    Tanah yang lolos No. 4 tetapi tertahan di No. 200.
    $$\%S = \%Lolos_{\#4} - \%Lolos_{\#200}$$

---

## 5. KLASIFIKASI USCS (GRAVEL & SAND)

Berikut adalah logika langkah demi langkah (*Step-by-Step Logic*) untuk menentukan nama tanah.

### Langkah 1: Tentukan Jenis Utama (Coarse vs Fine)
* Jika $\%Fines < 50\%$: **Tanah Berbutir Kasar**. (Lanjut ke Langkah 2).
* Jika $\%Fines \ge 50\%$: **Tanah Berbutir Halus** (Gunakan Batas Atterberg / Casagrande Chart).

### Langkah 2: Tentukan Gravel atau Sand
Bandingkan $\%Gravel$ dan $\%Sand$ dari fraksi kasarnya.
* Jika $\%Gravel > \%Sand$: **GRAVEL (G)**.
* Jika $\%Sand \ge \%Gravel$: **SAND (S)**.

### Langkah 3: Cek Kebersihan (Persen Fines)
Lihat nilai $\%Fines$ (Lolos #200).

#### **KONDISI A: Bersih (% Fines < 5%)**
Hanya butuh $C_u$ dan $C_c$.

* **Untuk Gravel (G):**
    * **GW** (Well-graded Gravel): Jika $C_u \ge 4$ **DAN** $1 \le C_c \le 3$.
    * **GP** (Poorly-graded Gravel): Jika tidak memenuhi syarat GW.
* **Untuk Sand (S):**
    * **SW** (Well-graded Sand): Jika $C_u \ge 6$ **DAN** $1 \le C_c \le 3$.
    * **SP** (Poorly-graded Sand): Jika tidak memenuhi syarat SW.

#### **KONDISI B: Kotor (% Fines > 12%)**
Butuh data Batas Atterberg (LL & PI) dari fraksi halusnya. Gunakan Diagram Plastisitas.

* **GM / SM** (Silty): Jika fines bersifat Lanau (Di bawah garis A atau PI < 4).
* **GC / SC** (Clayey): Jika fines bersifat Lempung (Di atas garis A atau PI > 7).

#### **KONDISI C: Perbatasan (% Fines 5% - 12%)**
Menggunakan simbol ganda (*Dual Symbols*). Kriteria Gradasi + Kriteria Plastisitas.
* Contoh: **GW-GM** (Gradasi baik dengan kandungan lanau).
* Contoh: **SP-SC** (Gradasi buruk dengan kandungan lempung).

---

## 6. LEMBAR KERJA (TEMPLATE)

Gunakan tabel ini untuk laporan:

| Parameter | Nilai / Hasil |
| :--- | :--- |
| **D10 (mm)** | ... |
| **D30 (mm)** | ... |
| **D60 (mm)** | ... |
| **Cu** | ... |
| **Cc** | ... |
| **% Gravel** (> 4.75mm) | ... % |
| **% Sand** (4.75 - 0.075mm)| ... % |
| **% Fines** (< 0.075mm) | ... % |
| **Klasifikasi Gradasi** | (Well Graded / Poorly Graded) |
| **Simbol USCS** | (Contoh: SW) |

---

## 7. CONTOH KODE PYTHON (KALKULATOR OTOMATIS)
Anda bisa menggunakan skrip ini untuk menghitung otomatis:

```python
import numpy as np

def interpolate_log(p_target, p1, p2, d1, d2):
    """Interpolasi Logaritmik untuk mencari Diameter pada Persen tertentu"""
    if p1 == p2: return d1
    log_d = np.log10(d2) - ((p2 - p_target) * (np.log10(d2) - np.log10(d1))) / (p2 - p1)
    return 10**log_d

def classify_uscs(d10, d30, d60, p_gravel, p_sand, p_fines):
    cu = d60 / d10
    cc = (d30 ** 2) / (d10 * d60)
    
    print(f"Cu: {cu:.2f}, Cc: {cc:.2f}")
    
    # Cek Coarse vs Fine
    if p_fines >= 50:
        return "Tanah Berbutir Halus (Gunakan Atterberg Limit)"
    
    # Cek Gravel vs Sand
    is_gravel = p_gravel > p_sand
    primary_code = "G" if is_gravel else "S"
    
    # Logika Bersih (<5%)
    if p_fines < 5:
        if is_gravel:
            if cu >= 4 and 1 <= cc <= 3: return "GW (Well-graded Gravel)"
            else: return "GP (Poorly-graded Gravel)"
        else: # Sand
            if cu >= 6 and 1 <= cc <= 3: return "SW (Well-graded Sand)"
            else: return "SP (Poorly-graded Sand)"
            
    # Logika Kotor (>12%) - Membutuhkan PI, disini disederhanakan
    elif p_fines > 12:
        return f"{primary_code}M atau {primary_code}C (Perlu data Atterberg)"
        
    else:
        return f"{primary_code}W-{primary_code}M / {primary_code}P-{primary_code}C (Dual Symbol)"

# --- CONTOH PENGGUNAAN ---
# Masukkan Data (Diameter mm, % Lolos)
# Pastikan data urut dari besar ke kecil
data = {
    4.75: 95,  # No. 4
    2.00: 85,
    0.85: 60,
    0.425: 40,
    0.15: 15,
    0.075: 3   # No. 200
}

# Hitung Fraksi
p_lolos_4 = data[4.75]
p_lolos_200 = data[0.075]

pct_gravel = 100 - p_lolos_4
pct_fines = p_lolos_200
pct_sand = p_lolos_4 - p_lolos_200

# Cari D10, D30, D60 (Manual mapping dari data di atas untuk contoh)
# Dalam kasus nyata, gunakan fungsi interpolate_log dengan data array
# Misal hasil interpolasi:
d10_val = 0.12
d30_val = 0.30
d60_val = 0.85

print(f"Komposisi: G={pct_gravel}%, S={pct_sand}%, F={pct_fines}%")
print(f"D10={d10_val}, D30={d30_val}, D60={d60_val}")
print("Klasifikasi:", classify_uscs(d10_val, d30_val, d60_val, pct_gravel, pct_sand, pct_fines))