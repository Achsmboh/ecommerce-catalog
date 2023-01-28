# E-Commerce Catalog

## About Project

Project ini merupakan project penutup Virtual Intership Experience, adapun tugasnya yaitu melakukan salah satu tanggung jawab seorang role FE expert pada Core Initiative, yang saya lakukan yaitu membentuk UI aplikasi berdasarkan skenario yang telah diberikan. Saya telah melakukan implementasi dan juga deployment beserta code Backend yang telah tersedia.

## Live Demo

Here is a working live demo : https://ecommerce-catalogue.netlify.app/

## Tahapan Pengerjaan

### API Call:

1. Menggunakan sebuah API sebuah ecommerce, https://fakestoreapi.com/docs
2. Memanggil API saat user menekan tombol Next Product,
3. Setelah mendapat balasan dari API, menggunakan kondisi untuk mengecek jika category = men’s clothing atau category = women’s clothing, maka simpan balasan tersebut pada variable yang telah dibuat di data(), jika category selain 2 di atas, maka tidak menyimpan balasannya

### Komponen Desain:

1. Terdapat 3 macam desain: men section, women section, dan unavailable product
2. Aplikasi desain menggunakan Vanilla CSS (CSS tanpa framework)
3. Pada projek Vue yang telah dibuat, menggunakan class binding untuk mengecek jika category = men’s clothing maka menggunakan class CSS yang berkaitan dengan desain Page-Men section, jika category = women’s clothing, menggunakan class CSS yang berkaitan dengan desain Page-Women section, jika category selain 2 di atas, menggunakan class CSS yang berkaitan dengan desain Page-Unavailable product

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
