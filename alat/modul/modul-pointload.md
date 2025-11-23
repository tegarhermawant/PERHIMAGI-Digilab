# MODUL PRAKTIKUM: POINT LOAD TEST (UJI BEBAN TITIK)
**Standar Acuan:** ISRM (1985) / ASTM D5731
**Tujuan:** Menentukan Indeks Kekuatan Beban Titik ($I_s$) dan estimasi Kuat Tekan Uniaksial ($UCS$) batuan.

---

## 1. PENDAHULUAN

### 1.1. Definisi
**Point Load Test (PLT)** adalah metode pengujian indeks kekuatan batuan dengan memberikan beban terpusat melalui dua konus baja hingga batuan pecah. Uji ini populer karena alatnya portabel, preparasi sampel minim, dan biaya rendah.

### 1.2. Jenis Pengujian
Berdasarkan bentuk sampel, PLT dibagi menjadi:
1.  **Diametral Test:** Untuk sampel inti bor (core) - arah beban tegak lurus sumbu core.
2.  **Axial Test:** Untuk sampel inti bor (core) - arah beban sejajar sumbu core.
3.  **Block Test:** Untuk sampel berbentuk balok/kubus (hasil pemotongan).
4.  **Irregular Lump Test:** Untuk sampel bongkahan tak beraturan (hasil palu geologi).

> *Modul ini berfokus pada Block Test dan Irregular Lump Test.*

---

## 2. ALAT DAN BAHAN

1.  **Mesin Point Load Tester:** Terdiri dari rangka kaku, pompa hidrolik, dan dua konus penekan (sudut $60^\circ$, radius ujung 5 mm).
2.  **Alat Ukur:** Jangka sorong (caliper) atau penggaris baja.
3.  **Sampel Batuan:**
    * *Block Test:* Balok hasil gergaji batu ($50 \pm 35$ mm).
    * *Irregular Test:* Bongkahan batuan ($50 \pm 35$ mm) dengan rasio dimensi tertentu.
4.  **Kacamata Pelindung (Safety Goggles):** Wajib digunakan saat pembebanan karena batuan bisa melenting.

---

## 3. PROSEDUR PENGUJIAN

### 3.1. Persyaratan Dimensi Sampel
Sebelum uji, pastikan sampel memenuhi syarat geometri agar valid (ISRM, 1985):

* **Jarak Beban ($D$):** Jarak antara kedua ujung konus saat menyentuh sampel.
* **Lebar Sampel ($W$):** Lebar minimum rata-rata tegak lurus arah pembebanan.
* **Syarat Rasio:** $0.3 < D/W < 1.0$ (Idealnya mendekati 0.5).
* **Jarak Tepi ($L$):** Jarak dari titik kontak ke tepi sampel bebas minimal $0.5 \times D$.

### 3.2. Langkah Kerja (Block & Irregular Test)
1.  Ambil sampel batuan dan tentukan arah pembebanan (perhatikan bidang lemah/foliasi jika ada).
2.  Letakkan sampel di antara dua konus.
3.  Tutup katup pompa hidrolik.
4.  Ukur jarak antara kedua ujung konus ($D$) dalam mm.
5.  Ukur lebar sampel ($W$) tegak lurus arah beban. Jika tak beraturan, ambil rata-rata lebar di sekitar bidang pecah potensial.
6.  Pompa secara perlahan dan konstan hingga batuan pecah (idealnya pecah dalam 10-60 detik).
7.  Catat beban maksimum ($P$) pada manometer saat runtuh (biasanya dalam kN atau kgf).
8.  Amati bentuk pecahan. Pengujian **VALID** jika pecah membelah melewati kedua titik kontak konus. Jika pecah hanya di ujung (*chipping*), data **TIDAK VALID**.

---

## 4. PERHITUNGAN DAN ANALISIS DATA

### 4.1. Menghitung Luas Penampang Ekuivalen ($D_e^2$)
Karena bentuk sampel bukan silinder, kita perlu menghitung diameter inti ekuivalen ($D_e$).

**Rumus untuk Block & Irregular Test:**
$$D_e^2 = \frac{4 \times A}{\pi}$$
*Atau disederhanakan menjadi:*
$$D_e^2 = \frac{4 \times (W \times D)}{\pi} \approx 1.274 \times W \times D$$

*Dimana:*
* $W$ = Lebar rata-rata sampel (mm).
* $D$ = Jarak antar konus (mm).

### 4.2. Menghitung Point Load Strength Index ($I_s$)
Indeks kekuatan beban titik *uncorrected* ($I_s$):

$$I_s = \frac{P}{D_e^2}$$

*Dimana:*
* $P$ = Beban maksimum saat runtuh (Newton). *Ingat: Konversi jika alat menggunakan kN atau kgf*.
* $D_e^2$ = Luas penampang ekuivalen ($mm^2$).
* Hasil $I_s$ dalam satuan MPa ($N/mm^2$).

### 4.3. Koreksi Ukuran ke 50 mm ($I_{s(50)}$)
Kekuatan batuan dipengaruhi ukuran sampel (Size Effect). Data harus dikoreksi ke diameter standar 50 mm agar bisa dibandingkan.

**Rumus Koreksi ($F$):**
$$F = \left( \frac{D_e}{50} \right)^{0.45}$$

**Indeks Terkoreksi ($I_{s(50)}$):**
$$I_{s(50)} = F \times I_s$$

### 4.4. Estimasi Kuat Tekan Uniaksial (UCS)
Nilai $UCS$ dapat diprediksi dari $I_{s(50)}$ menggunakan faktor korelasi ($k$).

$$UCS \approx k \times I_{s(50)}$$

* Nilai $k$ umum (ISRM): **20 - 25** untuk batuan keras.
* Nilai $k$ untuk batuan lunak/lapuk: Bisa turun hingga **15 - 18**.
* *Disarankan:* Gunakan $k=22$ atau $k=24$ jika tidak ada korelasi spesifik daerah.

---

## 5. STUDI KASUS (CONTOH PERHITUNGAN)

**Data Lapangan (Irregular Lump):**
* Beban Runtuh ($P$) = 4.5 kN = **4500 N**.
* Jarak Konus ($D$) = 40 mm.
* Lebar Sampel ($W$) = 55 mm.

**Langkah 1: Hitung $D_e^2$**
$$D_e^2 = 1.274 \times 55 \times 40 = 2802.8 ~mm^2$$

**Langkah 2: Hitung $D_e$**
$$D_e = \sqrt{2802.8} \approx 52.94 ~mm$$

**Langkah 3: Hitung $I_s$ (Uncorrected)**
$$I_s = \frac{4500}{2802.8} = 1.605 ~MPa$$

**Langkah 4: Hitung Faktor Koreksi ($F$)**
$$F = \left( \frac{52.94}{50} \right)^{0.45} = (1.0588)^{0.45} \approx 1.026$$

**Langkah 5: Hitung $I_{s(50)}$**
$$I_{s(50)} = 1.026 \times 1.605 = \mathbf{1.647 ~MPa}$$

**Langkah 6: Estimasi UCS (asumsi $k=23$)**
$$UCS = 23 \times 1.647 = \mathbf{37.88 ~MPa}$$

---

## 6. KLASIFIKASI KEKUATAN BATUAN
Berdasarkan nilai $I_{s(50)}$ atau estimasi UCS, klasifikasikan batuan menggunakan tabel Franklin (1971) atau Bieniawski (1975):

| Kelas | Deskripsi Kekuatan | $I_{s(50)}$ (MPa) | UCS (MPa) Estimasi | Contoh Identifikasi Lapangan |
| :--- | :--- | :--- | :--- | :--- |
| **I** | Sangat Lemah | < 0.05 | < 1 | Hancur dengan tangan. |
| **II** | Lemah | 0.05 - 1.0 | 1 - 25 | Pecah dengan pukulan palu ringan / pisau saku. |
| **III** | Sedang | 1.0 - 2.0 | 25 - 50 | Pecah dengan satu pukulan palu geologi tegas. |
| **IV** | Kuat | 2.0 - 4.0 | 50 - 100 | Butuh lebih dari satu pukulan palu keras. |
| **V** | Sangat Kuat | 4.0 - 8.0 | 100 - 200 | Hanya pecah dengan banyak pukulan keras. |
| **VI** | Ekstrem Kuat | > 8.0 | > 200 | Sangat sulit pecah, palu memantul. |

**Kesimpulan Studi Kasus:**
Dengan $I_{s(50)} = 1.647$ MPa, batuan tersebut masuk dalam kategori **Kekuatan Sedang (Medium Strength)**.

---

## 7. TABEL PENCATATAN DATA (LOG SHEET)

Gunakan tabel ini untuk laporan praktikum:

| No. Sampel | Tipe Uji (Block/Lump) | $P$ (kN) | $D$ (mm) | $W$ (mm) | $D_e^2$ ($mm^2$) | $I_s$ (MPa) | $F$ | $I_{s(50)}$ (MPa) | Est. UCS (MPa) | Keterangan Pecahan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Lump | 4.5 | 40 | 55 | ... | ... | ... | ... | ... | Valid |
| 2 | Block | ... | ... | ... | ... | ... | ... | ... | ... | Invalid (Chipping) |

---
*Modul disusun untuk keperluan praktikum Mekanika Batuan.*