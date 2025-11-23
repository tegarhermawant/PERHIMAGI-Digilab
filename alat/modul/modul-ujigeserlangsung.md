# MODUL PRAKTIKUM: UJI GESER LANGSUNG (DIRECT SHEAR TEST)
**Referensi:** Laporan Praktikum Mekanika Batuan dan Tanah - Acara 11
**Penyusun:** Tegar Hermawan T.

---

## 1. PENDAHULUAN

### 1.1. Definisi dan Tujuan
Uji Geser Langsung (*Direct Shear Test*) adalah metode laboratorium untuk menentukan parameter kekuatan geser tanah, yaitu:
* **Kohesi ($c$):** Gaya tarik-menarik antar partikel tanah.
* **Sudut Geser Dalam ($\phi$):** Sudut rekahan yang terbentuk saat material dikenai tegangan melebihi tegangan gesernya, merepresentasikan tingkat kepadatan tanah.

Tujuan utama pengujian ini adalah untuk mendapatkan nilai $c$ dan $\phi$ melalui hubungan antara Tegangan Normal ($\sigma_n$) dan Tegangan Geser Maksimum ($\tau_{max}$) sesuai kriteria kegagalan Mohr-Coulomb:
$$\tau = c + \sigma_n \tan \phi$$

---

## 2. PROSEDUR PENGUJIAN

### 2.1. [cite_start]Persiapan Sampel [cite: 25-26]
1.  Siapkan sampel tanah dan alat uji.
2.  Rangkai *shear box* dan pasang *connecting pin*.
3.  Masukkan komponen secara urut: batu berpori $\rightarrow$ kertas saring $\rightarrow$ sampel tanah $\rightarrow$ kertas saring $\rightarrow$ batu berpori.
4.  Pasang mangkuk beban.

### 2.2. [cite_start]Pelaksanaan Uji [cite: 27-31]
1.  Letakkan *shear box* pada *shear apparatus*.
2.  Inisialisasi tiga pengukur (*dial gauge* vertikal, horizontal, dan *proving ring*) ke posisi nol.
3.  Atur beban vertikal (Normal Load) sesuai variasi yang ditentukan (misal: 2 kg, 1 kg, 0.5 kg).
4.  Nyalakan mesin dengan laju geser konstan.
5.  Catat **Perpindahan Horizontal** (mm), **Gaya Geser** (Shear Force), dan **Perpindahan Vertikal** secara berkala.

---

## 3. INPUT DATA & PENGOLAHAN

Berikut adalah data hasil pengujian dari tiga kelompok dengan beban normal berbeda. [cite_start]Luas penampang sampel ($A$) adalah **3,317 mm²**[cite: 42, 47, 51].

### 3.1. Variasi Beban Normal
Data Tegangan Normal ($\sigma_n$) dihitung dari beban yang diberikan:
* [cite_start]**Kelompok 10 (Beban 2 kg):** $\sigma_n = 0.00603~kPa$[cite: 42].
* [cite_start]**Kelompok 11 (Beban 1 kg):** $\sigma_n = 0.00301~kPa$[cite: 48].
* [cite_start]**Kelompok 12 (Beban 0.5 kg):** $\sigma_n = 0.00151~kPa$[cite: 51].

### 3.2. Penentuan Tegangan Geser Maksimum ($\tau_{max}$)
Nilai ini diambil dari puncak kurva hubungan *Horizontal Displacement* vs *Shear Stress* untuk setiap sampel.

[cite_start]**Data Rekapitulasi:** [cite: 115]

| Kelompok | Beban Normal | Normal Stress ($\sigma_n$) | Shear Stress Max ($\tau_{max}$) |
| :--- | :--- | :--- | :--- |
| 10 | 2 kg | 0.00603 kPa | 0.00543 kPa |
| 11 | 1 kg | 0.00302 kPa | 0.00305 kPa |
| 12 | 0.5 kg | 0.00151 kPa | 0.00350 kPa |

> *Catatan: Terjadi anomali pada Kelompok 12 di mana $\tau_{max}$ lebih tinggi daripada Kelompok 11 meskipun beban normalnya lebih kecil. [cite_start]Hal ini diinterpretasikan sebagai ketidaktelitian pengujian/human error.* [cite: 125]

---

## 4. PERHITUNGAN PARAMETER GESER ($c$ dan $\phi$)

Parameter $c$ dan $\phi$ didapatkan dengan memplot grafik hubungan $\sigma_n$ (sumbu X) vs $\tau_{max}$ (sumbu Y) dan melakukan regresi linear.

### 4.1. Nilai Kohesi ($c$)
Kohesi adalah titik potong garis regresi dengan sumbu Y (intersep).
Berdasarkan persamaan regresi yang didapat:
$$y = 0.4686x + 0.0023$$

[cite_start]Maka nilai Kohesi ($c$): [cite: 112-113]
$$c = 0.0023~kPa$$

### 4.2. Nilai Sudut Geser Dalam ($\phi$)
Sudut geser adalah kemiringan (*slope*) dari garis regresi linear. Dihitung menggunakan selisih nilai maksimum dan minimum yang valid.

**Rumus:**
$$\phi = \tan^{-1} \left( \frac{\tau_{max2} - \tau_{max1}}{\sigma_{n2} - \sigma_{n1}} \right) \times \frac{180}{\pi}$$

[cite_start]**Perhitungan (berdasarkan data Kelompok 10 dan 12):** [cite: 117]
$$\phi = \tan^{-1} \left( \frac{0.005427 - 0.003045}{0.006030 - 0.001508} \right)$$
$$\phi \approx 27.77^{\circ}$$

---

## 5. INTERPRETASI DAN KESIMPULAN

### 5.1. Klasifikasi Kepadatan Tanah
Berdasarkan nilai sudut geser dalam ($\phi = 27.77^{\circ}$), tanah diklasifikasikan menggunakan tabel referensi **Bowles (1989)**:

| Sudut Geser ($\phi$) | Tingkat Kepadatan |
| :--- | :--- |
| **< 30°** | **Sangat Lepas** |
| 30° - 35° | Lepas |
| 35° - 40° | Agak Padat |
| 40° - 45° | Padat |
| > 45° | Sangat Padat |

[cite_start]**Kesimpulan:** Tanah sampel memiliki tingkat kepadatan **Sangat Lepas** [cite: 128-130].

### 5.2. Jenis Tanah Berdasarkan Kohesi
[cite_start]Nilai kohesi yang sangat kecil ($c = 0.0023~kPa$) mengindikasikan bahwa tanah tersebut bukan lempung murni (yang kohesif) maupun pasir murni (non-kohesif), melainkan dikategorikan sebagai **Tanah Lanau**[cite: 131].

### 5.3. Evaluasi Kualitas Data
Grafik hubungan *Normal Stress* vs *Shear Stress* menunjukkan tren kenaikan yang sebanding, namun terdapat distorsi data (tidak linier sempurna). [cite_start]Hal ini mengindikasikan adanya faktor kesalahan manusia atau ketidaktelitian selama pengujian yang menyebabkan data kurang ideal[cite: 125, 138].

---
*Modul disusun untuk keperluan praktikum Mekanika Tanah.*