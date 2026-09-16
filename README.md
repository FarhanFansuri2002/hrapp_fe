# HR App Client

Frontend aplikasi Human Resources berbasis React dan Vite.

## Fitur

- Dashboard HR dengan ringkasan karyawan, kehadiran, cuti, dan penggajian.
- Navigasi untuk ringkasan, karyawan, kehadiran, cuti, penggajian, rekrutmen, laporan, dan pengaturan.
- Styling menggunakan Tailwind CSS.
- Icon menggunakan `lucide-react`.

Data karyawan diambil dari API Server. Data kehadiran, cuti, dan payroll masih memakai data lokal sampai endpoint backend untuk modul tersebut tersedia.

## Prasyarat

- Node.js 18 atau versi lebih baru
- npm

## Menjalankan Secara Lokal

```bash
cd Client
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite, biasanya:

```text
http://localhost:5173
```

Halaman awal menyediakan dua pilihan:

- `http://localhost:5173/dashboard` untuk masuk ke dashboard HR.
- `http://localhost:5173/absensi` untuk portal absensi karyawan.

Portal absensi karyawan tersedia di:

```text
http://localhost:5173/absensi
```

Portal ini mengambil daftar karyawan dari API server, lalu menyimpan sesi masuk dan pulang pada perangkat yang digunakan. Endpoint absensi server dapat ditambahkan kemudian tanpa mengubah tampilan portal.

## Perintah npm

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server Vite |
| `npm run build` | Membuat build production di folder `dist/` |
| `npm run preview` | Menjalankan preview dari build production |

## Struktur Utama

```text
src/
├── api/                 # Adapter data untuk frontend
├── app/                 # Navigasi aplikasi
├── components/hr/       # Komponen UI HR yang dapat digunakan ulang
├── data/                # Data dummy saat ini
├── features/employees/  # Konfigurasi fitur karyawan
├── hook/                # Custom hooks
├── lib/                 # Helper dan formatter
└── pages/               # Halaman dan layout aplikasi
```

## Menghubungkan ke Server

Jalankan Server di `http://localhost:8080`, lalu jalankan Client di port `5173`. Endpoint daftar karyawan yang dipakai halaman Karyawan adalah:

```text
GET http://localhost:8080/api/v1/employees
```

Backend mengizinkan request dari origin `http://localhost:5173`.

Jika API berjalan di alamat berbeda, buat file `.env.local` di folder Client:

```text
VITE_API_URL=http://localhost:8080
```