# HR App Client

Frontend aplikasi Human Resources berbasis React dan Vite.

## Fitur

- Dashboard HR dengan ringkasan karyawan, kehadiran, cuti, dan penggajian.
- Navigasi untuk ringkasan, karyawan, kehadiran, cuti, penggajian, rekrutmen, laporan, dan pengaturan.
- Styling menggunakan Tailwind CSS.
- Icon menggunakan `lucide-react`.

> Saat ini data dashboard masih berasal dari `src/data/hrDummy.js` melalui `src/api/hrApi.js`. Integrasi ke API Server belum digunakan oleh frontend.

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

Endpoint backend tersedia di `http://localhost:8080`. Ketika integrasi API diaktifkan, endpoint daftar karyawan adalah:

```text
GET http://localhost:8080/api/v1/employees
```

Backend mengizinkan request dari origin `http://localhost:5173`.