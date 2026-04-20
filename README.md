# Arunika Heritage Site

Website company profile premium untuk `Arunika Heritage`, brand jamu modern Indonesia dengan pendekatan visual editorial, earthy luxury palette, dan arsitektur `Next.js + TypeScript + Tailwind CSS`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Lucide React

## Menjalankan Project

```bash
cd /home/rendy/PROJEK/Laras-Heritage
npm install
npm run dev
```

Project akan berjalan di `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Struktur Utama

```text
app/
components/
data/
lib/
```

## Catatan

- Dokumen requirement utama ada di `docs/SRS.md`.
- Konten brand, produk, testimonial, FAQ, dan kontak dipusatkan di `data/site-content.ts`.
- Form kontak menyiapkan draft email melalui `mailto` sebagai fallback ringan untuk company profile statis v1.
