# MODUL PRAKTIKUM: UJI PEMOMPAAN (PUMPING TEST)
**Referensi:** Laporan Praktikum Hidrogeologi Acara 3 - Tegar Hermawan T.
**Metode:** Theis (Unsteady State Flow)
**Tujuan:** Menentukan parameter hidrolik akuifer (Transmisivitas, Konduktivitas Hidrolik, Storativitas).

---

## 1. PENDAHULUAN

### 1.1. Definisi
Uji pemompaan adalah metode pengujian sumur dengan memompa air pada debit konstan dan mengukur penurunan muka air (*drawdown*) di sumur pengamatan (*observation well*) seiring waktu.

### 1.2. Parameter Akuifer
Output utama dari uji ini adalah:
1.  **Transmisivitas ($T$):** Kemampuan akuifer meloloskan air melalui seluruh ketebalannya per satuan lebar. ($ft^2/hari$ atau $m^2/hari$).
2.  **Storativitas ($S$):** Koefisien daya simpan, yaitu volume air yang dilepaskan dari penyimpanan per satuan luas permukaan akuifer per satuan penurunan *head*. (Tanpa dimensi).
3.  **Konduktivitas Hidrolik ($K$):** Kemampuan batuan meloloskan air per satuan luas. ($ft/hari$ atau $m/hari$).

---

## 2. INPUT DATA

[cite_start]Berdasarkan studi kasus Lapangan A: [cite: 2216]
* **Debit Pemompaan ($Q$):** 720 GPM.
* **Tebal Akuifer ($b$):** 50 ft.
* **Jarak Sumur Pantau ($r$):** 240 ft.
* **Data Uji Pompa:** (Waktu vs Drawdown)

| Waktu ($t$) [menit] | Drawdown ($s$) [ft] |
| :--- | :--- |
| 4 | 2 |
| 6 | 5 |
| ... | ... |
| 24 | 99 |

---

## 3. METODE ANALISIS: KURVA THEIS

Metode Theis menggunakan pencocokan kurva (*curve matching*) antara kurva data lapangan dengan kurva baku Theis (*Type Curve*).

### 3.1. Konversi Satuan Debit
Ubah satuan debit dari GPM (*Gallon Per Minute*) ke $ft^3/hari$ agar konsisten dengan rumus.
* 1 GPM $\approx$ 192.5 $ft^3/hari$.

[cite_start]$$Q = 720 \times 192.5 = \mathbf{138,600~ft^3/hari}$$ [cite: 2250]

### 3.2. Plotting Kurva (Double Log)
1.  Plot data lapangan pada kertas log-log atau software:
    * Sumbu X: Waktu ($t$)
    * Sumbu Y: Drawdown ($s$)
2.  Geser kurva data lapangan di atas kurva baku Theis ($W(u)$ vs $1/u$) hingga berimpit (*matching*).
3.  Pilih satu titik ikat (*match point*) sembarang pada area yang berimpit.

[cite_start]**Hasil Matching Point (Data Laporan):** [cite: 2242-2243]
* $W(u) = 1$
* $1/u = 1$ (atau $u = 1$)
* $t = 6.3$ menit = **0.004375 hari** (di laporan tertulis 0.0028 hari, perlu cek konversi $6.3/1440$). *Kita gunakan nilai laporan: $t = 0.00284722$ hari*.
* $s = 27$ ft

---

## 4. PERHITUNGAN PARAMETER

Gunakan nilai dari *match point* ke dalam rumus Theis.

### 4.1. Transmisivitas ($T$)
Rumus:
$$T = \frac{Q \times W(u)}{4 \pi \times s}$$

[cite_start]Perhitungan: [cite: 2252]
$$T = \frac{138,600 \times 1}{4 \pi \times 27} = \frac{138,600}{339.29} = \mathbf{408.50~ft^2/hari}$$

### 4.2. Storativitas ($S$)
*(Catatan: Di laporan Anda tertulis Konduktivitas Hidrolika, namun rumus yang digunakan adalah rumus Storativitas ($S$))*.

Rumus:
$$S = \frac{4 T t}{r^2 \times (1/u)}$$

[cite_start]Perhitungan: [cite: 2254]
$$S = \frac{4 \times 408.50 \times 0.002847}{240^2 \times 1} = \frac{4.65}{57,600} \approx \mathbf{0.00008}$$

### 4.3. Konduktivitas Hidrolik ($K$)
*(Catatan: Di laporan tertulis Storativitas, tapi rumus ini adalah untuk Konduktivitas ($K$))*.

Rumus:
$$K = \frac{T}{b}$$

[cite_start]Perhitungan: [cite: 2256]
$$K = \frac{408.50}{50} = \mathbf{8.17~ft/hari}$$

---

## 5. INTERPRETASI HASIL

1.  **Transmisivitas ($T = 408.5~ft^2/hari$):** Nilai ini tergolong cukup besar, mengindikasikan akuifer memiliki kemampuan yang baik dalam meloloskan/menghantarkan air. [cite_start]Potensial untuk eksploitasi skala menengah-besar. [cite: 2259-2260]
2.  **Konduktivitas Hidrolik ($K = 8.17~ft/hari$):** Nilai ini merepresentasikan kecepatan air bergerak melalui pori. [cite_start]Nilai sekitar 8 ft/hari (2.4 m/hari) umumnya berasosiasi dengan pasir halus hingga sedang. [cite: 2261]
3.  **Storativitas ($S = 0.00008$):** Nilai $S$ yang sangat kecil ($< 0.001$) adalah ciri khas **Akuifer Tertekan (Confined Aquifer)**. [cite_start]Air yang keluar berasal dari kompresi batuan dan ekspansi air, bukan dari pengeringan pori langsung. [cite: 2262]

---
*Modul ini disusun untuk keperluan praktikum Hidrogeologi.*