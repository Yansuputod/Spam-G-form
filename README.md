# Spam G-Form dengan Node.js

**Proyek ini adalah implementasi spam Google Form menggunakan Node.js.**

**Note**: Hanya bisa digunakan untuk pilihan ganda dan form yg tidak memerlukan email.

##  Disclaimer:
Proyek ini hanya untuk tujuan edukasi. Penyalahgunaan kode ini adalah tanggung jawab Anda sepenuhnya.
Pastikan Anda memiliki izin sebelum melakukan spam.
---

## Fitur

1. **Spam lewat Terminal**: Mengirimkan spam langsung dari terminal tanpa membuka browser.
2. **Spam Biasa**: Membuka Chrome untuk mengirim spam.
3. **Spam Small**: Membuka Chrome dengan ukuran kecil untuk mengirim spam.

- Mudah digunakan.
- Dapat memilih metode spam sesuai kebutuhan.
- Memanfaatkan automasi dengan Node.js dan Puppeteer.
- ---
## Prasyarat
Sebelum memulai, pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (versi terbaru direkomendasikan).
- [Google Chrome](https://www.google.com/chrome/).
- [Puppeteer](https://pptr.dev/) (untuk automasi Chrome):
  ```
  npm install puppeteer
  ```
## Instalasi
- Clone repositori ini:
  git clone https://github.com/Yansuputod/Spam-G-form
- Masuk ke direktori proyek:
```
cd Spam-G-form
```
- Install dependensi:
```
npm install puppeteer
```
## Penggunaan:
1. Pilih jenis spam yg diinginkan
2. Setting delay, jumlah chrome, jumlah vote:

   ```
   const delayClick = 80;
   const delayUlang = 300;
   const jumlahVote = 1000;
   const jumlahChrome = 8;
   ```
3. Buka G-form nya dan inspect
4. Click pada bagian jawaban yang diinginkan
   dan cari labelnya
5. Copy labelnya dan masukan ke bagian label seperti di bawah:

   ```
   await page.waitForSelector('label[for="i63"]');
   await page.click('label[for="i63"]');
   await delay(delayClick);
6. Run Programnya dan lihat hasilnya


