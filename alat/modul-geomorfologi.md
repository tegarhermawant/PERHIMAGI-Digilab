# MODUL: INTERPRETASI GEOMORFOLOGI PADA CITRA NON-FOTO
**Fokus Data:** Citra Satelit Optik (Multispektral), Radar (SAR), dan DEM.

---

## I. PENDAHULUAN: KONSEP DASAR CITRA NON-FOTO
Berbeda dengan foto udara yang merekam cahaya tampak secara pasif, citra non-foto (digital) memiliki karakteristik:
* **Multispektral:** Dapat menampilkan kombinasi warna palsu (*False Color Composite*) untuk menonjolkan fitur geologi.
* **Resolusi Spasial:** Ukuran piksel menentukan detail objek yang bisa dilihat.
* **Interaksi Gelombang (Khusus Radar):** Citra dibentuk berdasarkan kekasaran permukaan dan dielektrik, bukan warna objek.

---

## II. UNSUR INTERPRETASI UTAMA (KUNCI INTERPRETASI)

Berikut adalah adaptasi 7 unsur interpretasi standar untuk citra digital non-foto.

### 1. Rona dan Warna (Tone & Color)
Pada citra digital, warna adalah representasi nilai piksel (*Digital Number*).
* **Citra Optik (Landsat/Sentinel):**
    * Gunakan *Band Combination* geologi (misal SWIR-NIR-Red).
    * **Rona Gelap:** Air dalam, bayangan, batuan basah, atau batuan basa/ultrabasa.
    * **Rona Terang:** Pasir kuarsa, batuan asam (granit/ryolit), atau area terbuka tanpa vegetasi.
    * **Warna Kemerahan (pada komposit tertentu):** Bisa mengindikasikan alterasi mineral lempung atau oksida besi.
* **Citra Radar (SAR):**
    * Rona disebut **Backscatter** (Hamburan balik).
    * **Sangat Terang:** Permukaan kasar (batu bongkah), lereng yang menghadap sensor (*foreshortening*), sudut bangunan.
    * **Sangat Gelap:** Permukaan sangat halus (air tenang, jalan aspal), atau area bayangan radar (*radar shadow*).

### 2. Tekstur (Texture)
Frekuensi perubahan rona dalam area tertentu. Sangat penting untuk membedakan litologi.
* **Tekstur Kasar:** Relief tinggi, vegetasi hutan lebat (pada radar), batuan resisten yang tererosi kuat (breksi vulkanik, intrusi).
* **Tekstur Halus:** Dataran aluvial, endapan lempung, batuan lunak (napal/batulempung) yang tererosi rata.
* **Tekstur Berbintik (Mottled):** Sering pada batugamping karst (bukit-bukit kecil).

### 3. Pola (Pattern)
Susunan keruangan objek. Dalam geomorfologi, ini paling sering merujuk pada **Pola Aliran Sungai** dan **Kelurusan (Lineament)**.
* **Pola Aliran:**
    * *Dendritik:* Batuan homogen, biasanya sedimen datar atau batuan beku masif.
    * *Trellis:* Batuan sedimen terlipat/miring (selang-seling keras-lunak).
    * *Radial:* Gunung api (menyebar) atau cekungan (memusat).
    * *Rectangular:* Kekar/sesar yang dominan (batuan beku/metamorf terkekarkan).
* **Kelurusan (Lineament):** Garis lurus/lengkung panjang yang mengindikasikan sesar, lipatan, atau batas litologi.

### 4. Bentuk (Shape)
Bentuk topografi 3D yang terlihat dari bayangan atau stereoskopis (jika ada).
* **Kerucut:** Gunung api atau kerucut karst.
* **Pematang Memanjang (Ridge):** Hogback/Cuesta (batuan sedimen miring), Dike (intrusi memanjang).
* **Kipas (Fan):** Kipas aluvial di kaki gunung.
* **Meander:** Bentuk kelokan sungai di dataran banjir.

### 5. Bayangan (Shadow)
* **Pada Citra Optik:** Membantu melihat relief (ketinggian). Arah bayangan berlawanan dengan arah matahari.
* **Pada DEM (Hillshade):** Bayangan buatan yang kita atur *azimuth*-nya untuk menonjolkan kelurusan struktur geologi.

### 6. Asosiasi (Association)
Hubungan antar objek.
* *Contoh:* Jika ada bentuk kerucut besar + pola aliran radial + tekstur kasar di puncak $\rightarrow$ Asosiasi **Vulkanik**.
* *Contoh:* Jika ada sungai meander + danau tapal kuda (oxbow lake) + rona gelap (basah) $\rightarrow$ Asosiasi **Fluvial/Aluvial**.

---

## III. IDENTIFIKASI SATUAN MORFOLOGI (STUDI KASUS)

Gunakan tabel ini sebagai panduan cepat saat delineasi batas satuan morfologi.

### A. Satuan Morfologi Vulkanik
| Unsur | Ciri pada Citra (Optik/DEM) |
| :--- | :--- |
| **Bentuk** | Kerucut, kawah di tengah, aliran lava (lidah). |
| **Pola** | Aliran Radial (menyebar dari pusat). |
| **Tekstur** | Kasar di area puncak/kawah, menghalus ke arah kaki (dataran vulkanik). |
| **Rona** | Lava baru biasanya gelap (optik) atau terang (radar/kasar). |

### B. Satuan Morfologi Struktural (Lipatan & Patahan)
| Unsur | Ciri pada Citra |
| :--- | :--- |
| **Bentuk** | Pematang panjang dan lembah sejajar. Bukit asimetris (*Hogback/Cuesta*). |
| **Pola** | Aliran Trellis atau Rectangular. Terlihat banyak kelurusan (*lineament*). |
| **Tekstur** | Bervariasi, biasanya kasar pada punggungan batu pasir/gamping. |
| **Asosiasi** | Adanya *offset* (pergeseran) sungai atau perbukitan yang terpotong tiba-tiba (Sesar). |

### C. Satuan Morfologi Karst (Batugamping)
| Unsur | Ciri pada Citra |
| :--- | :--- |
| **Bentuk** | Bukit-bukit membulat (*Conical hills*) atau cekungan tertutup (*Doline*). |
| **Pola** | Aliran *Multi-basinal* (sungai tiba-tiba hilang masuk tanah). Jarang ada sungai permukaan panjang. |
| **Tekstur** | Kasar, berbintik (*pitted*). |
| **Rona** | Biasanya cerah pada citra optik (batugamping putih/terbuka), kecuali tertutup vegetasi tebal. |

### D. Satuan Morfologi Fluvial (Sungai & Dataran)
| Unsur | Ciri pada Citra |
| :--- | :--- |
| **Bentuk** | Dataran rata, kipas aluvial, gosong pasir (*point bar*). |
| **Pola** | Aliran Meander atau Anastomosing (anyaman). |
| **Tekstur** | Sangat halus. |
| **Rona** | Beragam. Vegetasi subur (merah pada inframerah) di sepanjang sungai. Air sungai rona gelap (jika jernih) atau terang (jika keruh/sedimen tinggi). |

---

## IV. TEKNIK PENGOLAHAN UNTUK MEMPERMUDAH INTERPRETASI

Sebelum interpretasi, lakukan hal ini pada software (ArcGIS/QGIS):

1.  **Composite Band (Citra Optik):**
    * Gunakan kombinasi **SWIR - NIR - Red** (Contoh Landsat 8: Band 7-5-4). Kombinasi ini menembus kabut tipis dan membedakan jenis batuan/tanah dengan vegetasi secara tegas.
2.  **Hillshade (Pada DEM):**
    * Jangan interpretasi DEM mentah (hitam putih ketinggian). Buatlah **Hillshade** (efek bayangan).
    * *Tips:* Buat Hillshade dari berbagai sudut azimuth (matahari), misal 45°, 135°, 315°, untuk melihat kelurusan struktur yang tersembunyi.
3.  **Slope Map (Peta Kelerengan):**
    * Klasifikasikan DEM menjadi peta kemiringan lereng (0-8%, 8-15%, dsb) menurut klasifikasi **Van Zuidam**. Ini dasar penentuan satuan geomorfologi kuantitatif.

---

## V. LEMBAR KERJA DELINEASI (LOG SHEET)

Saat melakukan delineasi (menarik garis batas) di layar komputer, catat parameter berikut untuk setiap poligon yang Anda buat:

| Kode Unit | Deskripsi Rona/Warna | Deskripsi Tekstur | Deskripsi Pola/Bentuk | Interpretasi Satuan Geomorfologi |
| :--- | :--- | :--- | :--- | :--- |
| **Unit A** | Coklat kemerahan, rona sedang | Kasar, relief tinggi | Pola aliran dendritik rapat, bentuk massif | **Perbukitan Intrusi Granit** |
| **Unit B** | Hijau gelap, rona tekstur | Halus - Sedang | Pola aliran meander, bentuk dataran | **Dataran Aluvial Sungai** |
| **Unit C** | Abu-abu cerah | Kasar, berbintik | Pola bukit kerucut, tidak ada sungai permukaan | **Perbukitan Karst** |

---
*Modul ini ditujukan untuk penggunaan pada praktikum Geologi Penginderaan Jauh & Geomorfologi.*

# MODUL LAPANGAN: IDENTIFIKASI & KLASIFIKASI GEOMORFOLOGI LENGKAP
**Referensi Standar:** ITC System - Verstappen & Van Zuidam (1985)

---

## I. KONSEP DASAR IDENTIFIKASI
Untuk menamai satuan geomorfologi, Geologist harus menggabungkan tiga aspek utama:

1.  **Morfografi:** Pemerian fisik (bentuk lahan, kemiringan lereng umum, pola relief).
2.  **Morfometri:** Nilai kuantitatif (persen kelerengan, beda tinggi/relief).
3.  **Morfogenesa:** Asal-usul pembentukan (Gaya Endogen vs Eksogen).

**Rumus Penamaan Satuan:**
`[Asal Genesa] + [Bentuk Lahan] + [Kelerengan/Relief]`
*Contoh:* Satuan Bentuklahan Perbukitan Lipatan Terjal (Structural Steep Folded Hills).

---

## II. ASPEK 1: MORFOMETRI (UKURAN)

Langkah pertama di lapangan/peta adalah mengukur **Kelerengan** dan **Beda Tinggi**. Gunakan klasifikasi Van Zuidam berikut:

### A. Klasifikasi Kemiringan Lereng (Slope)

| Kelas | Persentase (%) | Derajat ($^\circ$) | Klasifikasi (Deskripsi) | Warna Peta |
| :--- | :--- | :--- | :--- | :--- |
| **I** | 0 - 2 % | $0^\circ - 2^\circ$ | Datar (*Flat*) | Hijau Tua |
| **II** | 2 - 7 % | $2^\circ - 4^\circ$ | Landai (*Gently Sloping*) | Hijau Muda |
| **III** | 7 - 15 % | $4^\circ - 8^\circ$ | Miring (*Sloping*) | Kuning |
| **IV** | 15 - 30 % | $8^\circ - 16^\circ$ | Miring Agak Terjal (*Moderately Steep*) | Jingga |
| **V** | 30 - 70 % | $16^\circ - 35^\circ$ | Terjal (*Steep*) | Merah Muda |
| **VI** | 70 - 140 % | $35^\circ - 55^\circ$ | Sangat Terjal (*Very Steep*) | Merah |
| **VII** | > 140 % | $> 55^\circ$ | Curam (*Extremely Steep*) | Ungu |

### B. Klasifikasi Relief (Beda Tinggi)
Diukur dari dasar lembah ke puncak bukit dalam satu satuan.

| Beda Tinggi (m) | Klasifikasi Relief |
| :--- | :--- |
| < 5 meter | Dataran (*Plain*) |
| 5 - 50 meter | Bergelombang Lemah (*Undulating*) |
| 50 - 200 meter | Perbukitan (*Hilly*) |
| 200 - 500 meter | Perbukitan Tinggi (*High Hilly*) |
| 500 - 1000 meter | Pegunungan (*Mountainous*) |
| > 1000 meter | Pegunungan Tinggi (*High Mountainous*) |

---

## III. ASPEK 2 & 3: GENESA & IDENTIFIKASI BENTUK LAHAN

Berikut adalah panduan identifikasi berdasarkan 8 satuan genetik utama.

### 1. BENTUK LAHAN ASAL STRUKTURAL (S)
Terbentuk akibat gaya tektonik (lipatan dan patahan). Ciri utamanya adalah **kontrol batuan** yang kuat.

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **S1** | **Pegunungan/Perbukitan Lipatan** | Jajaran bukit memanjang, pola aliran *Trellis*. |
| **S2** | **Pegunungan/Perbukitan Patahan** | Adanya gawir terjal yang lurus (*fault scarp*), pola aliran *Rectangular*, adanya zona hancuran. |
| **S3** | **Cuesta** | Bukit asimetris: lereng depan (*scarp*) terjal, lereng belakang (*dip slope*) landai (< $30^\circ$). |
| **S4** | **Hogback** | Bukit asimetris tajam: lereng depan dan belakang hampir sama terjal, kemiringan lapisan batuan (*dip*) > $30^\circ$. |
| **S5** | **Mesa** | Bukit ber-puncak datar, lereng terjal di segala sisi (lapisan horizontal). |
| **S6** | **Graben (Lembah Patahan)** | Lembah memanjang yang diapit dua bidang sesar (tanah turun). |
| **S7** | **Horst (Punggungan Patahan)** | Bukit memanjang yang diapit dua bidang sesar (tanah naik). |

> **Warna Peta:** Ungu (Purple)

### 2. BENTUK LAHAN ASAL VULKANIK (V)
Terbentuk dari aktivitas magma/gunung api.

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **V1** | **Kepundan/Kawah** | Cekungan di puncak kerucut. |
| **V2** | **Kerucut Gunungapi (*Cone*)** | Bentuk segitiga/kerucut besar, pola aliran *Radial*. |
| **V3** | **Lereng Vulkanik Atas** | Lereng sangat terjal dekat kawah, batuan dominan lava/piroklastik kasar. |
| **V4** | **Lereng Vulkanik Tengah** | Lereng miring, area transportasi material, banyak alur sungai dalam (*gullies*). |
| **V5** | **Lereng Vulkanik Bawah** | Lereng landai, endapan lahar/fluviovulkanik, sering jadi area permukiman/sawah. |
| **V6** | **Dataran Kaki Vulkanik** | Area datar di kaki gunung, material halus. |
| **V7** | **Aliran Lava / Lahar** | Lidah batuan beku (lava) atau endapan breksi (lahar) yang mengikuti lembah. |
| **V8** | **Leher Vulkanik (*Volcanic Neck*)** | Bukit tiang batu beku sisa pipa kawah yang tererosi (sangat terjal). |

> **Warna Peta:** Merah (Red)

### 3. BENTUK LAHAN ASAL FLUVIAL (F)
Terbentuk akibat aktivitas sungai (erosi & sedimentasi).

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **F1** | **Dataran Banjir (*Floodplain*)** | Area datar di sisi sungai yang terendam saat banjir. Tanah aluvial. |
| **F2** | **Tanggul Alam (*Natural Levee*)** | Punggungan rendah sejajar tepi sungai akibat luapan banjir. |
| **F3** | **Rawa Belakang (*Backswamp*)** | Area rendah dan basah di belakang tanggul alam. |
| **F4** | **Teras Sungai** | Undak-undak di sisi lembah sungai (sisa dataran banjir purba yang terangkat). |
| **F5** | **Kipas Aluvial** | Bentuk kipas/segitiga di kaki gunung tempat sungai keluar dari lembah sempit ke dataran. |
| **F6** | **Gosong Pasir (*Point Bar*)** | Endapan pasir di lengkungan dalam sungai meander. |
| **F7** | **Danau Tapal Kuda (*Oxbow Lake*)** | Potongan sungai meander yang mati/terputus. |
| **F8** | **Delta** | Endapan di muara sungai (bertemu laut). |

> **Warna Peta:** Biru Tua (Dark Blue)

### 4. BENTUK LAHAN ASAL MARIN/LAUT (M)
Terbentuk oleh aktivitas gelombang dan arus laut.

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **M1** | **Gisik (*Beach*)** | Endapan pasir lepas di tepi laut. |
| **M2** | **Beting Gisik (*Beach Ridge*)** | Punggungan pasir sejajar garis pantai (bisa lebih dari satu jalur). |
| **M3** | **Laguna** | Air laut yang terperangkap di belakang beting pasir. |
| **M4** | **Rataam Pasang Surut** | Area lumpur yang terbuka saat surut (*Tidal Flat*). |
| **M5** | **Tombolo** | Endapan pasir yang menghubungkan pulau kecil dengan daratan utama. |
| **M6** | **Spit** | Endapan pasir memanjang dari daratan menjorok ke laut. |
| **M7** | **Teras Marin** | Dataran pantai purba yang terangkat (undak pantai). |
| **M8** | **Terumbu Karang** | Batuan organik di perairan dangkal. |

> **Warna Peta:** Hijau (Green) / Biru Muda (Turquoise)

### 5. BENTUK LAHAN ASAL KARST (K)
Terbentuk akibat pelarutan batuan karbonat (Gamping/Dolomit).

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **K1** | **Doline** | Cekungan tertutup membulat (seperti mangkuk). |
| **K2** | **Uvala** | Gabungan beberapa doline membentuk cekungan besar tidak teratur. |
| **K3** | **Polje** | Dataran luas di daerah kapur yang dikelilingi tebing terjal. |
| **K4** | **Bukit Kerucut (*Conical Hill*)** | Bukit gamping berbentuk kerucut tumpul (Karst tipe *Cockpit*). |
| **K5** | **Bukit Menara (*Tower Karst*)** | Bukit gamping dengan lereng vertikal/sangat terjal. |
| **K6** | **Lembah Kering** | Lembah sungai tanpa air (air masuk ke sungai bawah tanah). |

> **Warna Peta:** Jingga (Orange)

### 6. BENTUK LAHAN ASAL DENUDASIONAL (D)
Terbentuk akibat proses degradasi (pelapukan, erosi, longsor) yang intensif, di mana bentuk struktur aslinya sudah tidak terlihat jelas.

| Kode | Bentuk Lahan | Cara Identifikasi Lapangan/Peta |
| :--- | :--- | :--- |
| **D1** | **Perbukitan Terkikis** | Bukit dengan pola tidak teratur, lapisan tanah tebal, batuan lapuk. |
| **D2** | **Peneplain** | Dataran nyaris rata hasil erosi lanjut (tahap akhir siklus geomorfologi). |
| **D3** | **Inselberg** | Bukit sisa erosi yang berdiri sendiri di dataran peneplain. |
| **D4** | **Badlands** | Lahan kritis dengan banyak alur erosi tajam, vegetasi jarang (tanah lempung). |
| **D5** | **Kipas Koluvial** | Tumpukan material rombakan (longsoran) di kaki tebing terjal. |

> **Warna Peta:** Coklat (Brown)

### 7. BENTUK LAHAN ASAL AEOLIAN (A) - Angin
* **Dune (Gumuk Pasir):** Bukit pasir hasil tiupan angin (Barchan, Longitudinal, Parabolic).
* **Loess:** Endapan debu halus yang tebal.
* *Warna Peta:* Kuning (Yellow).

### 8. BENTUK LAHAN ASAL GLASIAL (G) - Es
* **Cirque:** Cekungan bentuk mangkuk di puncak gunung es.
* **Moraine:** Endapan material batuan yang dibawa gletser.
* **U-Shaped Valley:** Lembah berbentuk huruf U (beda dengan sungai huruf V).
* *Warna Peta:* Biru Terang/Abu-abu.

---

## IV. ALUR KERJA IDENTIFIKASI DI LAPANGAN

Ikuti langkah ini agar tidak bingung saat mendeskripsikan bentang alam:

1.  **Observasi Umum:** Lihat sekeliling sejauh mata memandang. Apakah daerah datar, berbukit, atau pegunungan? -> *Dapat Kelas Relief.*
2.  **Ukur Lereng:** Gunakan kompas geologi/klinometer. Ukur di segmen lereng dominan. -> *Dapat Kelas Slope.*
3.  **Cek Litologi & Struktur:**
    * Ada batuan gamping berlubang? -> *Cek Karst.*
    * Ada lapisan miring (strike/dip)? -> *Cek Struktural (Cuesta/Hogback).*
    * Ada batuan beku/piroklastik? -> *Cek Vulkanik.*
    * Material lepas (pasir/lempung) di dekat sungai? -> *Cek Fluvial.*
4.  **Analisis Proses:** Apakah ada tanda erosi kuat? Apakah ada longsoran?
5.  **Penamaan:** Gabungkan data di atas.

**Contoh Deskripsi di Buku Lapangan:**
> *"Satuan geomorfologi berupa perbukitan dengan relief 150 meter (Perbukitan). Lereng rata-rata 25 derajat (Miring Agak Terjal). Tersusun oleh batupasir yang miring 45 derajat. Terlihat pola punggungan memanjang."*
>
> **Nama Satuan:** **Perbukitan Hogback Struktural** (Structural Hogback Hills).

---
*Modul ini disusun untuk keperluan pemetaan geologi standar dan eksplorasi.*