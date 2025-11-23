# MODUL PRAKTIKUM: PERHITUNGAN ROCK QUALITY DESIGNATION (RQD)
**Referensi Standar:** ASTM D6032 / ISRM (Deere, 1963)
**Tujuan:** Menentukan indeks kualitas massa batuan berdasarkan kerapatan kekar/rekahan.

---

## 1. PENDAHULUAN

### 1.1. Definisi
**Rock Quality Designation (RQD)** adalah modifikasi dari persentase perolehan inti (*core recovery*) yang hanya memperhitungkan potongan inti bor yang "utuh" (*sound*) dengan panjang lebih dari 100 mm (10 cm).

RQD merupakan parameter standar dalam klasifikasi massa batuan seperti **RMR (Rock Mass Rating)** oleh Bieniawski dan **Q-System** oleh Barton.

### 1.2. Prinsip Dasar
* RQD 100% = Batuan sangat utuh, kekar sangat jarang.
* RQD 0% = Batuan sangat hancur atau tanah.

---

## 2. INPUT DATA (DARI INTI BOR)

Untuk menghitung RQD, Anda memerlukan data hasil pemboran inti (biasanya ukuran NQ, HQ, atau PQ).

### 2.1. Parameter Input
1.  **Total Core Run ($L_{run}$):** Panjang total kemajuan pemboran dalam satu *run* (biasanya 1.5 meter atau 3.0 meter).
2.  **Potongan Inti ($L_{piece}$):** Panjang masing-masing potongan inti yang berhasil diangkat ke permukaan.
3.  **Kondisi Rekahan:** Pembedaan antara rekahan alami (*natural fracture*) dan rekahan mekanis (*mechanical break*).

### 2.2. Aturan Pengukuran (Rule of Thumb)
Agar perhitungan valid, ikuti aturan ISRM berikut:

1.  **Ambang Batas 10 cm:** Hanya potongan yang $\ge 10$ cm yang dihitung.
2.  **Kualitas Batuan (Soundness):** Potongan harus keras dan *sound*. Batuan yang sangat lapuk atau lunak tidak dihitung meskipun panjangnya > 10 cm.
3.  **Pengukuran Sumbu Tengah:** Ukur panjang pada garis tengah (*centerline*) sumbu inti, bukan pada sisi terpanjang atau terpendek.
4.  **Rekahan Mekanis (PENTING!):**
    * Jika batuan patah karena proses pemboran atau penanganan (permukaan patahan kasar/segar, pas jika disatukan kembali), maka anggap sebagai **satu kesatuan utuh**. Gabungkan panjangnya.
    * Jika batuan patah karena kekar alami (permukaan halus, teralterasi, ada infilling), maka hitung sebagai **potongan terpisah**.

---

## 3. PROSEDUR PERHITUNGAN

### 3.1. Rumus Dasar
$$RQD = \frac{\sum \text{Panjang Potongan Utuh } \ge 10 \text{ cm}}{\text{Total Panjang Run}} \times 100\%$$

### 3.2. Studi Kasus (Contoh Perhitungan)
Misalkan dilakukan pemboran dengan **Total Run = 200 cm** (2 meter). Berikut adalah potongan inti yang diperoleh di dalam *core box*:

| No. Potongan | Panjang Terukur (cm) | Keterangan Kondisi | Status Hitung |
| :--- | :--- | :--- | :--- |
| 1 | 25 cm | Utuh | **Masuk** ($\ge 10$) |
| 2 | 8 cm | Utuh | **Gugur** ($< 10$) |
| 3 | 15 cm | Utuh | **Masuk** ($\ge 10$) |
| 4 | 18 cm | Patah jadi dua (9cm + 9cm) karena *Mechanical Break* | **Masuk** (Dianggap 18 cm) |
| 5 | 5 cm | Hancur (tanah) | **Gugur** |
| 6 | 95 cm | Utuh | **Masuk** ($\ge 10$) |
| 7 | 12 cm | Rekahan alami di tengah | **Masuk** (tapi cek jika terbelah <10cm) |

*Catatan untuk No. 7: Jika rekahan alami membagi batuan menjadi 6 cm dan 6 cm, maka keduanya gugur.*

**Perhitungan:**
1.  Identifikasi potongan valid:
    * 25 cm
    * 15 cm
    * 18 cm (karena *mechanical break*, digabung)
    * 95 cm
    * 12 cm
2.  Jumlahkan ($\Sigma L$): $25 + 15 + 18 + 95 + 12 = 165 \text{ cm}$
3.  Hitung RQD:
    $$RQD = \frac{165}{200} \times 100\% = \mathbf{82.5\%}$$

---

## 4. OUTPUT & KLASIFIKASI

Berdasarkan nilai persentase yang didapat, tentukan kualitas massa batuan menggunakan tabel klasifikasi **Deere (1968)**:

| Nilai RQD (%) | Kualitas Batuan (*Rock Quality*) | Deskripsi Umum |
| :--- | :--- | :--- |
| **0 - 25 %** | **Very Poor** (Sangat Buruk) | Batuan sangat kekar, hancur, atau lapuk kuat. |
| **25 - 50 %** | **Poor** (Buruk) | Batuan kekar bloky atau terlapukkan. |
| **50 - 75 %** | **Fair** (Sedang) | Batuan dengan kekar sedang. |
| **75 - 90 %** | **Good** (Baik) | Batuan masif dengan sedikit kekar. |
| **90 - 100 %** | **Excellent** (Sangat Baik) | Batuan masif utuh. |

**Hasil Studi Kasus:**
RQD = 82.5% $\rightarrow$ Masuk kategori **Good (Baik)**.

---

## 5. METODE ALTERNATIF (DATA SINGKAPAN/SCANLINE)

Jika tidak ada data pemboran (hanya singkapan batuan di lapangan), RQD dapat diestimasi menggunakan **Volumetric Joint Count ($J_v$)** menurut Palmstrom (1982).

### 5.1. Rumus Korelasi
$$RQD \approx 115 - 3.3 J_v$$
*(Syarat: Hasil RQD dibatasi maksimal 100% dan minimal 0%)*

### 5.2. Menghitung $J_v$
$J_v$ adalah jumlah kekar per $m^3$.
$$J_v = \frac{1}{S_1} + \frac{1}{S_2} + \frac{1}{S_3} + ...$$
*Dimana $S$ adalah spasi rata-rata kekar (dalam meter) untuk setiap *joint set*.*

**Contoh:**
Di lapangan ditemukan 2 set kekar:
* Set 1: Spasi rata-rata 0.5 m ($S_1 = 0.5$)
* Set 2: Spasi rata-rata 0.2 m ($S_2 = 0.2$)

$$J_v = \frac{1}{0.5} + \frac{1}{0.2} = 2 + 5 = 7$$
$$RQD = 115 - (3.3 \times 7) = 115 - 23.1 = \mathbf{91.9\%}$$

---

## 6. LEMBAR KERJA (LOG SHEET)

Gunakan format tabel ini untuk pencatatan di lapangan:

| Depth (m) | Run Length (cm) | Piece Lengths > 10 cm (List) | Total Length > 10 cm | RQD (%) | Kualitas |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0.0 - 1.5 | 150 | 15, 20, 12, 35, 40 | 122 | 81.3 | Good |
| 1.5 - 3.0 | 150 | 10, 11, 50 | 71 | 47.3 | Poor |
| ... | ... | ... | ... | ... | ... |

---
*Modul disusun untuk keperluan Geoteknik dan Geologi Teknik.*