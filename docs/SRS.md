# Software Requirements Specification (SRS)

## 1. Document Control

- Project: `Arunika Heritage`
- Product type: `Premium company profile website`
- Document version: `1.0`
- Date: `2026-04-20`
- Status: `Approved for implementation`
- Primary language: `Bahasa Indonesia`
- Secondary language: `Prepared for future bilingual expansion`

## 2. Executive Summary

### 2.1 Project Overview

`Arunika Heritage` adalah website company profile premium untuk brand jamu modern Indonesia yang memadukan warisan herbal Nusantara dengan presentasi visual kontemporer. Website ini dirancang sebagai kanal utama untuk memperkenalkan brand, membangun kredibilitas, menjelaskan lini produk, dan mengarahkan pengunjung ke aksi bisnis bernilai tinggi seperti konsultasi, pembelian, dan pendaftaran reseller atau distributor.

### 2.2 Business Goals

- Membentuk persepsi brand yang premium, sehat, natural, dan terpercaya.
- Memperkuat legitimasi brand di mata konsumen akhir, partner distribusi, dan calon investor.
- Menjelaskan diferensiasi produk secara ringkas namun meyakinkan.
- Menghasilkan lead masuk dari CTA kontak dan kemitraan.
- Menyediakan aset digital yang layak dipresentasikan pada partner, tenant retail, dan channel distribusi modern.

### 2.3 User Goals

- Memahami siapa brand ini dan apa yang membuatnya relevan.
- Menemukan manfaat produk dengan cepat tanpa membaca blok teks yang terlalu berat.
- Memastikan bahan, proses, dan standar kualitas cukup tepercaya.
- Melihat bukti sosial dan alasan rasional untuk mencoba atau bermitra.
- Menghubungi brand melalui kanal yang jelas dan rendah friksi.

### 2.4 Brand Positioning

Brand diposisikan sebagai `modern herbal wellness brand from Indonesia` yang mengangkat jamu sebagai ritual kesehatan masa kini, bukan sekadar minuman tradisional. Positioning utamanya: `heritage-backed, design-forward, quality-conscious, and lifestyle-relevant`.

### 2.5 Website Value Proposition

Website harus menghadirkan kombinasi empat nilai inti:

- `Trust`: brand story, bahan alami, quality assurance, testimonial, dan struktur informasi yang rapi.
- `Desirability`: visual elegan, premium, modern, dan tidak terlihat seperti produk tradisional yang usang.
- `Clarity`: manfaat produk dan brand value mudah dipahami dalam beberapa scroll pertama.
- `Conversion`: CTA pembelian, konsultasi, dan reseller muncul pada momen yang tepat tanpa terasa agresif.

## 3. Project Objectives

### 3.1 Primary Objectives

- Membangun website company profile satu halaman premium yang terasa production-ready.
- Menampilkan brand, produk, bahan, manfaat, proses kualitas, testimonial, FAQ, dan kontak secara kohesif.
- Menghasilkan pengalaman responsif yang kuat di mobile dan desktop.
- Menjaga performa, semantic structure, dan maintainability yang layak untuk go-live.

### 3.2 Secondary Objectives

- Menjadi fondasi untuk ekspansi ke katalog produk lebih lengkap, e-commerce, atau halaman bilingual.
- Menjadi basis visual identity digital untuk kebutuhan pitch deck dan partnership.
- Menunjukkan kedewasaan brand melalui sistem desain yang konsisten.

### 3.3 Success Metrics / KPI

- `Bounce reduction proxy`: user dapat mencapai section produk atau keunggulan dalam satu sesi dengan scroll depth target > 55%.
- `CTA engagement`: klik gabungan pada CTA primer dan sekunder minimal 3-8% dari kunjungan.
- `Lead intent`: submission form atau klik WhatsApp/email untuk kemitraan dan konsultasi.
- `Credibility`: section testimonial, quality assurance, dan ingredients tampil sebelum CTA konversi utama kedua.
- `Technical baseline`: Lighthouse target internal >= 90 untuk Performance, >= 95 untuk Accessibility, >= 95 untuk Best Practices, >= 95 untuk SEO pada halaman utama.

## 4. Target Audience and Personas

### 4.1 Persona A — Konsumen Urban Wellness

- Nama: `Nadia, 29`
- Demografi: profesional muda, tinggal di Jakarta, bekerja hybrid, peduli kesehatan tetapi punya ritme hidup cepat.
- Kebutuhan:
  - Produk sehat yang terasa modern dan praktis.
  - Informasi manfaat yang singkat dan jelas.
  - Brand yang meyakinkan secara visual dan kualitas.
- Pain points:
  - Banyak produk herbal terlihat kuno atau kurang terpercaya.
  - Takut produk terlalu manis, terlalu pahit, atau klaimnya berlebihan.
- Motivasi:
  - Menjaga stamina, pencernaan, dan keseimbangan tubuh secara natural.
  - Ingin rutinitas wellness yang terasa refined, bukan “obat tradisional”.
- Ekspektasi website:
  - Visual premium.
  - Penjelasan manfaat mudah discan.
  - CTA pembelian atau konsultasi yang langsung.

### 4.2 Persona B — Ibu Muda Peduli Kesehatan Keluarga

- Nama: `Maya, 37`
- Demografi: menikah, tinggal di kota satelit, aktif mencari produk sehat untuk keluarga.
- Kebutuhan:
  - Bahan yang aman dan jelas.
  - Proses produksi yang higienis dan terpercaya.
  - Brand yang hangat, tidak terlalu teknis, dan tidak menakutkan.
- Pain points:
  - Sulit membedakan produk herbal berkualitas dari yang sekadar jualan.
  - Ragu pada produk yang tidak transparan soal bahan.
- Motivasi:
  - Ingin opsi natural untuk mendukung stamina dan pencernaan keluarga.
- Ekspektasi website:
  - FAQ yang membantu.
  - Bukti kualitas.
  - Informasi kontak jelas bila ingin bertanya lebih lanjut.

### 4.3 Persona C — Reseller / Distributor Prospect

- Nama: `Rizky, 33`
- Demografi: pemilik toko sehat kecil atau distributor regional.
- Kebutuhan:
  - Memahami positioning brand dan kesiapan bisnisnya.
  - Menilai apakah produk layak dijual kembali.
  - Jalur kontak partnership yang cepat.
- Pain points:
  - Banyak brand bagus secara rasa tetapi lemah secara presentasi dan kredibilitas.
  - Sulit mendapatkan materi brand yang dapat dipercaya untuk dibawa ke buyer.
- Motivasi:
  - Mencari brand wellness lokal yang punya potensi pasar dan identitas kuat.
- Ekspektasi website:
  - Value proposition jelas.
  - Quality assurance terlihat kuat.
  - CTA reseller/distributor menonjol dan meyakinkan.

### 4.4 Persona D — Investor / Strategic Partner

- Nama: `Evelyn, 41`
- Demografi: angel investor atau mitra retail premium.
- Kebutuhan:
  - Gambaran brand maturity dalam beberapa menit.
  - Positioning yang kuat dan bisa dipresentasikan.
  - Bukti bahwa brand tidak sekadar “produk sehat rumahan”.
- Pain points:
  - Banyak website FMCG lokal terasa generik, murahan, atau tidak siap scale.
- Motivasi:
  - Menilai kesiapan brand dari sisi marketability dan brand discipline.
- Ekspektasi website:
  - Editorial layout yang matang.
  - Narasi brand dan produk konsisten.
  - Presentasi visual setara startup consumer brand premium.

## 5. Brand Strategy

### 5.1 Brand Name

`Arunika Heritage`

Makna: “Arunika” mengingatkan pada cahaya pagi, kesegaran, dan awal yang menyehatkan; “Heritage” menegaskan akar tradisi dan kualitas yang diwariskan.

### 5.2 Tagline

`Warisan Alami, Diracik untuk Hidup Modern.`

### 5.3 Brand Personality

- Tenang
- Berkelas
- Natural
- Terkurasi
- Hangat
- Cerdas
- Percaya diri tanpa berlebihan

### 5.4 Tone of Voice

- Profesional namun dekat
- Refined, tidak kaku
- Wellness-focused, tidak pseudo-medis
- Persuasif, tidak hard-selling
- Menggunakan bahasa yang jernih dan mudah dipercaya

### 5.5 Emotional Direction

Website harus membangkitkan rasa:

- aman untuk dipercaya,
- nyaman untuk dijelajahi,
- bangga pada kekayaan herbal Indonesia,
- tertarik mencoba karena presentasinya modern,
- yakin bahwa brand ini serius dan siap berkembang.

### 5.6 Visual Direction

- Luxury herbal modern
- Editorial, airy, dan clean
- Earthy palette dengan aksen metalik lembut
- Permukaan terang dengan lapisan gradien hangat
- Foto/visual mengutamakan close-up bahan alami, botani, dan packaging premium

### 5.7 Brand Keywords

- `Modern heritage`
- `Botanical refinement`
- `Trusted wellness`
- `Natural clarity`
- `Premium ritual`
- `Indonesian roots`

### 5.8 What to Avoid

- Ornamen etnik berlebihan yang terasa turistik.
- Warna hijau pekat kontras tinggi yang terasa murah.
- Klaim medis yang sulit dipertanggungjawabkan.
- Copy terlalu agresif atau terlalu “jualan”.
- Layout generik gaya template agency murah.
- Ikon stok berlebihan yang melemahkan kesan premium.

## 6. Information Architecture

Website akan menggunakan model `single-page company profile` dengan navigasi anchor yang jelas, karena tujuan utama adalah mempercepat pemahaman brand dan konversi tanpa memecah perhatian user ke banyak halaman. Struktur section:

1. `Home / Hero`
2. `Brand Introduction`
3. `About Us`
4. `Featured Products`
5. `Why Choose Us`
6. `Ingredients Highlight`
7. `Benefits / Wellness Ritual`
8. `Quality Assurance / Production`
9. `Testimonials / Social Proof`
10. `Reseller & Distributor CTA`
11. `FAQ`
12. `Contact`
13. `Footer`

Section tambahan untuk memperkuat premium feel:

- `Trust strip` tepat setelah hero
- `Brand story editorial block`
- `Closing CTA banner` di dekat footer

## 7. Sitemap

### 7.1 Primary Sitemap

```text
/
|- Hero
|- Brand Introduction
|- About
|- Products
|- Why Choose Us
|- Ingredients
|- Benefits
|- Quality Assurance
|- Testimonials
|- Partnership CTA
|- FAQ
|- Contact
|- Footer
```

### 7.2 Future Expansion Sitemap

```text
/
/products
/products/[slug]
/about
/partnership
/journal
/contact
```

## 8. User Flow

### 8.1 Consumer Flow

1. User masuk dari social, ads, search, atau rekomendasi.
2. Hero langsung menyampaikan positioning brand dan CTA primer.
3. User scroll ke trust strip dan brand introduction untuk membentuk first trust.
4. User melihat produk unggulan dan manfaat utamanya.
5. User memeriksa bahan alami dan quality assurance.
6. User membaca testimonial dan FAQ.
7. User klik CTA `Konsultasi via WhatsApp` atau `Lihat Produk Unggulan`.
8. User berpindah ke kanal kontak atau pembelian.

### 8.2 Partner / Distributor Flow

1. User masuk ke homepage.
2. Hero dan brand introduction membangun persepsi kualitas brand.
3. User menilai diferensiasi pada `Why Choose Us`, `Products`, dan `Quality Assurance`.
4. User melihat section `Reseller & Distributor CTA`.
5. User membuka kontak partnership melalui form, email, atau WhatsApp.

### 8.3 Investor / Partner Evaluation Flow

1. User scan hero, brand story, dan visual direction.
2. User menilai kematangan narasi, kualitas konten, dan konsistensi sistem desain.
3. User melihat struktur produk dan bukti trust.
4. User kontak brand untuk diskusi lanjutan.

## 9. Functional Requirements

### 9.1 Global and Navigation

- `FR-001`: Website harus memiliki header sticky dengan logo, menu anchor, dan CTA utama.
- `FR-002`: Navigasi desktop harus menunjukkan active section state saat scroll.
- `FR-003`: Navigasi mobile harus tersedia melalui menu overlay atau drawer yang ringan dan jelas.
- `FR-004`: Logo dan item navigasi harus mengarahkan ke section yang sesuai dengan smooth scrolling.
- `FR-005`: Website harus memiliki CTA primer yang konsisten di hero, partnership, dan contact.

### 9.2 Hero and Brand Messaging

- `FR-010`: Hero harus menampilkan headline utama, subheadline, CTA primer, CTA sekunder, dan visual composition premium.
- `FR-011`: Hero harus menampilkan trust cues singkat seperti `100% botanical ingredients`, `crafted hygienically`, `modern herbal ritual`.
- `FR-012`: Hero harus memiliki layout yang kuat di desktop dan tetap ringkas di mobile.

### 9.3 Content Sections

- `FR-020`: Section `Brand Introduction` harus menjelaskan positioning brand dalam format ringkas dan mudah discan.
- `FR-021`: Section `About` harus memuat brand story, origin, dan prinsip utama.
- `FR-022`: Section `Products` harus menampilkan minimal 4 produk unggulan dengan nama, deskripsi, bahan utama, manfaat, dan positioning.
- `FR-023`: Section `Why Choose Us` harus memuat value proposition dalam bentuk card atau pillar layout.
- `FR-024`: Section `Ingredients` harus menampilkan bahan unggulan dan narasi manfaat yang tidak berlebihan.
- `FR-025`: Section `Benefits` harus menjelaskan kapan dan untuk siapa produk relevan.
- `FR-026`: Section `Quality Assurance` harus menjelaskan proses seleksi bahan, formulasi, higienitas, dan konsistensi mutu.
- `FR-027`: Section `Testimonials` harus menampilkan social proof realistis.
- `FR-028`: Section `FAQ` harus menggunakan accordion interaktif.
- `FR-029`: Section `Contact` harus memuat detail kontak, form, dan CTA kanal cepat.
- `FR-030`: Section `Partnership` harus menonjolkan value untuk reseller/distributor.

### 9.4 Interactive Behaviors

- `FR-040`: FAQ accordion harus dapat dibuka/tutup per item.
- `FR-041`: Contact form harus mendukung validasi client-side untuk field wajib.
- `FR-042`: Tombol CTA harus memiliki hover, focus, dan active states yang jelas.
- `FR-043`: Mobile menu harus dapat dibuka/tutup dan tetap accessible via keyboard.
- `FR-044`: Form submission boleh menggunakan mailto fallback atau simulasi submit sukses untuk company profile statis.
- `FR-045`: Tombol WhatsApp, email, dan tel harus menggunakan link yang valid dan terarah.
- `FR-046`: Section transitions boleh memiliki reveal animation halus yang tidak mengganggu performa.

### 9.5 Responsiveness and UX

- `FR-050`: Layout harus mobile-first dan tetap terasa premium pada layar besar.
- `FR-051`: Grid produk dan testimonial harus menyesuaikan breakpoint secara halus.
- `FR-052`: Panjang copy per blok harus dijaga agar mudah discan.
- `FR-053`: Footer harus memuat ringkasan brand, navigasi, dan kontak utama.

## 10. Non-Functional Requirements

### 10.1 Performance

- Target initial load cepat pada koneksi umum mobile.
- Asset grafis harus dioptimalkan dan tidak memakai media berukuran besar yang tidak perlu.
- Gunakan `next/font` untuk loading font yang efisien.
- Hindari dependency animasi berat bila CSS/native browser cukup.

### 10.2 SEO

- Semantic HTML harus rapi.
- Metadata title dan description harus tersedia.
- Heading hierarchy harus logis dan tidak meloncat.
- Copy harus mengandung keyword intent natural terkait `jamu modern`, `herbal premium`, `wellness alami`, `produk herbal Indonesia`.

### 10.3 Accessibility

- Kontras warna harus memadai.
- Semua input memiliki label.
- Seluruh aksi utama dapat dijangkau dengan keyboard.
- Focus state harus terlihat jelas.
- Teks tidak boleh terlalu kecil untuk body utama.

### 10.4 Maintainability

- Komponen reusable dan data konten dipisah dari layout sebanyak mungkin.
- Struktur folder harus mudah diperluas.
- Styling mengandalkan tokens terpusat dan utility Tailwind yang konsisten.

### 10.5 Scalability

- Data produk, testimonial, FAQ, dan kontak harus mudah ditambah tanpa refactor besar.
- Arsitektur harus siap berkembang menjadi multi-page site.

### 10.6 Browser Compatibility

- Mendukung Chrome, Safari, Edge, dan Firefox modern.
- Graceful degradation untuk fitur visual non-esensial.

### 10.7 Code Quality

- TypeScript strict mode aktif.
- Tidak ada hardcode berantakan pada banyak file bila bisa dipusatkan dalam data module.
- Naming harus konsisten dan deskriptif.

## 11. Content Requirements

### 11.1 Core Messaging

- Headline utama harus menyampaikan `modern herbal` + `premium trust`.
- Subheadline harus menjelaskan benefit tanpa klaim medis.
- CTA copy harus tegas namun classy.

### 11.2 Required Content Blocks

- Brand story
- Company philosophy
- Product collection
- Product ingredients
- Benefit summaries
- Quality process
- Testimonials
- FAQ
- Contact and partnership details

### 11.3 Copywriting Rules

- Gunakan Bahasa Indonesia yang refined dan natural.
- Hindari istilah medis absolut.
- Hindari hiperbola murahan.
- Utamakan kalimat pendek-menengah yang mudah discan.
- Jaga keseimbangan antara warmth dan authority.

## 12. Visual Design Requirements

### 12.1 Mood

- Calm luxury
- Warm editorial
- Botanical sophistication
- Contemporary Indonesian wellness

### 12.2 Art Direction

- Basis visual terang dengan layering krem, sage, olive, dan gold lembut.
- Menggunakan gradient tipis, grain halus, dan shadow lunak untuk rasa premium.
- Visual utama berupa komposisi botol/gelas herbal, irisan bahan alami, dan elemen botani abstrak.

### 12.3 Layout Direction

- Gunakan variasi section: centered editorial, split-layout, multi-card grid, dan side-by-side narrative.
- Hero harus luas, bernafas, dan tidak terlalu padat.
- Pergantian section dibedakan melalui perubahan background surface yang subtil.

### 12.4 Spacing Philosophy

- White space adalah elemen brand, bukan ruang kosong.
- Gunakan ritme vertikal longgar di desktop dan lebih padat namun tetap elegan di mobile.
- Blok teks tidak boleh terlalu rapat dengan card atau media.

### 12.5 Iconography

- Ikon bergaya outline halus atau duotone lembut.
- Hindari ikon bergaya corporate generic.

### 12.6 Card Style

- Card menggunakan background terang semi-transparan atau solid lembut.
- Border tipis dengan warna herbal muted.
- Radius medium-large untuk kesan modern lembut.
- Hover state mengangkat card sedikit dengan shadow halus.

### 12.7 Shadow Style

- Soft layered shadows.
- Tidak menggunakan shadow hitam pekat.
- Gunakan bayangan dengan tint hijau/coklat sangat tipis untuk konsistensi palet.

### 12.8 Border Radius

- Small: `14px`
- Medium: `22px`
- Large: `32px`
- Pill CTA: `999px`

### 12.9 Typography Hierarchy

- Display serif elegan untuk headline besar.
- Sans modern bersih untuk body dan UI text.
- Gunakan perbedaan berat dan ukuran yang jelas antar heading, eyebrow, body, dan caption.

### 12.10 Visual Rhythm

- Alternasi antara section teks dominan dan card dominan.
- Setiap 2-3 section harus ada momen visual yang lebih kaya agar scroll tidak monoton.
- CTA penting dikelilingi ruang kosong yang cukup untuk memberi penekanan.

## 13. Design System

### 13.1 Color Palette

#### Primary Palette

- `Forest Olive`: `#2F4A3B`
- `Botanical Sage`: `#7E9272`
- `Warm Cream`: `#F5EFE4`
- `Ivory Mist`: `#FCFAF6`
- `Soft Gold`: `#C7A46A`

#### Supporting Palette

- `Earth Clay`: `#A8724B`
- `Muted Cocoa`: `#70584A`
- `Leaf Tint`: `#DDE5D6`
- `Stone`: `#D8CFC2`

#### Semantic Colors

- Success: `#3F6B52`
- Warning: `#9A6A2F`
- Error: `#A04E45`
- Info: `#5E7D82`

### 13.2 Color Rationale

- Hijau olive memberi asosiasi herbal dan grounded.
- Krem dan ivory menjaga nuansa premium, bersih, dan editorial.
- Gold lembut memberi rasa luxury tanpa menjadi glamor berlebihan.
- Coklat hangat menjaga kedekatan dengan bahan alami dan warisan tradisi.

### 13.3 Typography Pairing

- Display / Headline: `Cormorant Garamond`
- Body / UI: `Manrope`

### 13.4 Typography Scale

- Display XL: `clamp(3.5rem, 7vw, 6.5rem)`
- Display L: `clamp(2.75rem, 5vw, 4.5rem)`
- H1/H2 large: `clamp(2rem, 3vw, 3.25rem)`
- H3: `1.5rem`
- Body L: `1.125rem`
- Body: `1rem`
- Small: `0.9375rem`
- Caption / Eyebrow: `0.75rem - 0.8125rem`

### 13.5 Spacing Scale

- `4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 72, 96, 120`

### 13.6 Button Variants

- `Primary`: olive solid dengan text ivory, untuk CTA utama.
- `Secondary`: ivory/cream surface dengan border muted olive.
- `Ghost`: transparan dengan underline/soft hover.
- `Accent`: gold-tinted for strategic partnership CTA.

### 13.7 Input Styles

- Background terang dengan border muted.
- Radius medium.
- Focus ring olive lembut.
- Placeholder abu hangat yang tetap terbaca.

### 13.8 Card Variants

- `Editorial Card`
- `Product Card`
- `Stat / Trust Card`
- `Quote Card`
- `Process Card`

### 13.9 Container Rules

- Max width utama: `1280px`
- Content width naratif: `720px` - `840px`
- Horizontal padding:
  - Mobile: `20px`
  - Tablet: `32px`
  - Desktop: `48px`

### 13.10 Breakpoints

- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`
- `2xl`: `1536px`

## 14. SEO Requirements

### 14.1 Heading Structure

- Satu `h1` pada hero.
- Tiap section utama menggunakan `h2`.
- Subblok internal menggunakan `h3` bila diperlukan.

### 14.2 Metadata

- Meta title homepage:
  - `Arunika Heritage | Jamu Modern Premium dari Indonesia`
- Meta description homepage:
  - `Arunika Heritage menghadirkan jamu modern premium dengan bahan alami pilihan, formulasi yang relevan untuk gaya hidup masa kini, dan kualitas yang diracik dengan pendekatan modern.`

### 14.3 Keyword Intent

- jamu modern premium
- produk herbal alami Indonesia
- minuman herbal untuk gaya hidup sehat
- brand jamu modern
- distributor jamu premium
- jamu herbal untuk stamina dan pencernaan

### 14.4 Semantic Structure

- Gunakan `header`, `main`, `section`, `article`, `nav`, `footer`, `form`, dan `address` sesuai fungsi.
- Daftar value proposition, trust points, dan FAQ memakai struktur list yang benar.

### 14.5 Performance Impact to SEO

- Minimalisir JS client-only.
- Gunakan server components default untuk konten statis.
- Optimalkan font dan image.

## 15. Accessibility Requirements

- Kontras teks utama minimal memenuhi WCAG AA.
- Focus outline terlihat jelas pada tombol, link, dan input.
- Accordion FAQ wajib memiliki state yang terbaca screen reader.
- Mobile menu wajib menggunakan atribut ARIA yang sesuai.
- Semua icon decorative harus `aria-hidden`.
- Teks body minimal efektif di `16px`.

## 16. Technical Architecture

### 16.1 Chosen Stack

- `Next.js` dengan App Router
- `TypeScript`
- `Tailwind CSS`
- `next/font`
- `Lucide React` untuk ikon ringan dan konsisten

### 16.2 Architectural Rationale

- Next.js cocok untuk company profile yang membutuhkan SEO, metadata, struktur app rapi, dan performa kuat.
- App Router memudahkan pemisahan layout, metadata, dan server-first rendering.
- Tailwind mempercepat konsistensi sistem desain dengan token utilitas yang mudah dirawat.
- TypeScript menjaga maintainability pada komponen, data module, dan props reusable.

### 16.3 Repository Delivery Assumption

Workspace saat ini berisi project extension Chrome lama yang tidak relevan dengan website baru. Untuk menghindari konflik struktural dan menjaga deliverable tetap bersih, implementasi website akan ditempatkan pada folder terisolasi `site/`, sementara `docs/SRS.md` tetap berada di root sebagai dokumen proyek utama.

### 16.4 Proposed Folder Structure

```text
docs/
  SRS.md
site/
  app/
  components/
  data/
  lib/
  public/
  styles/
  package.json
  tailwind.config.ts
  tsconfig.json
```

## 17. Component Breakdown

- `SiteHeader`
- `MobileNav`
- `HeroSection`
- `TrustStrip`
- `SectionHeading`
- `BrandIntroSection`
- `AboutSection`
- `ProductCard`
- `ProductsSection`
- `ValuePillarsSection`
- `IngredientsSection`
- `BenefitsSection`
- `QualityProcessSection`
- `TestimonialCard`
- `TestimonialsSection`
- `PartnershipSection`
- `FaqAccordion`
- `ContactSection`
- `ContactForm`
- `ClosingCta`
- `SiteFooter`
- `Container`
- `Button`
- `Badge`
- `SurfaceCard`

## 18. Page and Section-Level Specifications

### 18.1 Header

- Tujuan: memberi orientasi cepat dan CTA permanen.
- Konten: logo, nav items, CTA `Konsultasi`.
- Interaksi: sticky on scroll, mobile menu, active state.
- Catatan desain: translucent premium bar dengan blur lembut.

### 18.2 Hero

- Tujuan: menyampaikan positioning brand dalam 3-5 detik.
- Konten: headline, subheadline, CTA primer, CTA sekunder, trust badges, visual product composition.
- Interaksi: CTA scroll ke produk dan kontak.
- Catatan desain: kombinasi editorial layout, layered gradients, dan mock visual bottle/cards.

### 18.3 Brand Introduction

- Tujuan: menjelaskan ringkas apa itu Arunika Heritage.
- Konten: short brand statement dan tiga brand values.
- Interaksi: none beyond CTA link.
- Catatan desain: center-aligned with strong negative space.

### 18.4 About

- Tujuan: membangun kedalaman cerita dan legitimasi.
- Konten: asal inspirasi brand, proses reinterpretasi jamu, prinsip kualitas.
- Interaksi: none.
- Catatan desain: split editorial block dengan highlight quote.

### 18.5 Products

- Tujuan: menunjukkan lini unggulan yang bisa diingat dengan cepat.
- Konten: 4 product cards lengkap.
- Interaksi: hover elevation.
- Catatan desain: grid simetris dengan variasi accent tone tiap card.

### 18.6 Why Choose Us

- Tujuan: menjawab kenapa brand ini berbeda.
- Konten: pilar diferensiasi dalam format card.
- Interaksi: subtle hover.
- Catatan desain: card-based with elegant icons.

### 18.7 Ingredients

- Tujuan: memberi pembuktian natural dan kedekatan dengan bahan nyata.
- Konten: daftar bahan unggulan dan benefit singkat.
- Interaksi: none essential.
- Catatan desain: organic-shaped layout dengan badges.

### 18.8 Benefits

- Tujuan: menghubungkan produk dengan konteks hidup modern.
- Konten: ritual pagi, siang, dan pemulihan; benefit clusters.
- Interaksi: none essential.
- Catatan desain: timeline-like or segmented blocks agar tidak monoton.

### 18.9 Quality Assurance

- Tujuan: menumbuhkan trust rasional.
- Konten: sourcing, formulasi, higienitas, konsistensi.
- Interaksi: none essential.
- Catatan desain: process cards dan quality stats.

### 18.10 Testimonials

- Tujuan: validasi sosial.
- Konten: 3 testimonial utama.
- Interaksi: static cards; optional subtle motion.
- Catatan desain: quote cards dengan typography yang hangat.

### 18.11 Partnership CTA

- Tujuan: menangkap lead reseller/distributor.
- Konten: proposition untuk partner, benefit distribusi, CTA.
- Interaksi: CTA ke WhatsApp/email/form.
- Catatan desain: strong accent section dengan gold-tinted highlight.

### 18.12 FAQ

- Tujuan: menjawab keraguan umum dan mengurangi hambatan kontak.
- Konten: 6-8 pertanyaan awal.
- Interaksi: accordion.
- Catatan desain: clear dividers, calm spacing.

### 18.13 Contact

- Tujuan: menyediakan jalur aksi final.
- Konten: form, detail kontak, alamat, jam operasional.
- Interaksi: validasi form; links to WhatsApp, email, phone.
- Catatan desain: layout dua kolom dengan form dan info panel.

### 18.14 Footer

- Tujuan: penutup informatif dan navigasi sekunder.
- Konten: logo, deskripsi singkat, links, kontak, copyright.
- Interaksi: anchor links.
- Catatan desain: darker botanical surface untuk grounding akhir halaman.

## 19. Sample Content and Realistic Copy

### 19.1 Brand Core Copy

- Brand: `Arunika Heritage`
- Tagline: `Warisan Alami, Diracik untuk Hidup Modern.`
- Short description:
  - `Arunika Heritage menghadirkan jamu modern premium yang merayakan kekayaan herbal Indonesia melalui rasa yang lebih refined, formulasi yang relevan untuk kebutuhan sehari-hari, dan presentasi yang siap hadir di meja hidup modern.`
- Brand story:
  - `Kami percaya jamu tidak seharusnya tertinggal di masa lalu. Berangkat dari resep-resep herbal yang akrab di rumah-rumah Indonesia, Arunika Heritage meracik kembali bahan alami pilihan dengan pendekatan yang lebih bersih, lebih terkurasi, dan lebih mudah diterima oleh ritme hidup masa kini. Hasilnya adalah ritual herbal yang terasa hangat, modern, dan layak dipercaya.`

### 19.2 Headlines

- Hero headline:
  - `Jamu modern Indonesia, diracik untuk ritme hidup yang lebih seimbang.`
- Hero subheadline:
  - `Perpaduan bahan botani pilihan, rasa yang lebih refined, dan proses yang terjaga untuk menghadirkan ritual sehat yang relevan bagi hari ini.`
- Primary CTA:
  - `Konsultasi Produk`
- Secondary CTA:
  - `Lihat Produk Unggulan`

### 19.3 Product Line

#### 1. `Svara Kunyit Asam`

- Positioning: revitalizing botanical tonic
- Manfaat utama: membantu menemani keseharian dengan rasa segar yang ringan dan menenangkan.
- Bahan unggulan: kunyit, asam jawa, gula kelapa, jeruk kasturi.
- Deskripsi:
  - `Interpretasi modern dari kunyit asam dengan profil rasa yang lebih cerah dan seimbang, cocok untuk ritual siang yang ingin terasa ringan namun tetap berkarakter.`

#### 2. `Nara Ginger Lemongrass`

- Positioning: warming daily infusion
- Manfaat utama: memberi sensasi hangat dan nyaman saat tubuh butuh reset.
- Bahan unggulan: jahe merah, sereh, madu hutan, pandan.
- Deskripsi:
  - `Campuran jahe merah dan sereh dengan karakter aromatik yang bersih, dirancang untuk menemani pagi yang padat atau malam yang ingin ditutup dengan lebih tenang.`

#### 3. `Ranum Temulawak Honey`

- Positioning: golden botanical blend
- Manfaat utama: menghadirkan keseimbangan rasa earthy dan hangat untuk ritual harian.
- Bahan unggulan: temulawak, madu, kayu manis, lemon peel.
- Deskripsi:
  - `Temulawak diracik dalam blend yang lebih halus dan approachable, dengan sentuhan madu dan rempah lembut untuk pengalaman herbal yang terasa premium.`

#### 4. `Luma Digestive Elixir`

- Positioning: herbal digestive companion
- Manfaat utama: cocok dinikmati setelah makan untuk rasa nyaman dan ringan.
- Bahan unggulan: adas, kapulaga, daun mint, jahe.
- Deskripsi:
  - `Formula herbal dengan profil rasa segar-rempah yang dirancang sebagai companion setelah makan, ketika tubuh membutuhkan rasa ringan yang natural.`

### 19.4 Why Choose Us Copy

- `Warisan herbal yang dikurasi ulang`:
  - `Terinspirasi dari jamu Nusantara, namun diracik dengan rasa, tampilan, dan pengalaman yang lebih relevan untuk konsumen modern.`
- `Bahan alami terpilih`:
  - `Kami mengutamakan bahan botani yang dikenal luas, dipilih dengan fokus pada karakter rasa, aroma, dan konsistensi.`
- `Presentasi premium, mudah dipercaya`:
  - `Dari identitas visual hingga struktur informasi, setiap detail dirancang untuk membangun kepercayaan sejak kunjungan pertama.`
- `Siap tumbuh bersama partner`:
  - `Brand, produk, dan komunikasi disiapkan agar layak dibawa ke retail, hospitality, dan channel distribusi modern.`

### 19.5 Ingredients Highlight

- `Kunyit`: dikenal luas dalam tradisi herbal Indonesia dengan karakter earthy hangat.
- `Jahe Merah`: memberi sensasi hangat yang tegas dan akrab.
- `Temulawak`: identitas kuat jamu Nusantara dengan rasa khas yang dipadankan lebih halus.
- `Sereh`: memberi lapisan aroma segar dan bersih.
- `Madu`: menghadirkan penyeimbang rasa yang lembut.
- `Mint & Citrus Peel`: memberi sentuhan modern yang lebih bright.

### 19.6 Testimonials

- `“Saya dulu sulit menikmati jamu karena rasanya terlalu berat. Arunika terasa lebih halus, modern, dan tetap memberi kesan alami yang saya cari.”`
  - `Nadia P. — Brand Consultant, Jakarta`
- `“Packaging dan presentasinya sangat meyakinkan. Saat saya tawarkan ke pelanggan toko, mereka langsung merasa ini produk herbal yang serius.”`
  - `Rizky H. — Retail Partner, Bandung`
- `“Saya suka karena informasinya jelas, bahannya familiar, dan rasanya tidak terasa seperti produk herbal yang kuno.”`
  - `Maya S. — Ibu Rumah Tangga, Tangerang`

### 19.7 FAQ Initial Set

1. `Apakah Arunika Heritage menggunakan bahan alami?`
   - `Ya. Kami mengutamakan bahan botani yang akrab dalam tradisi herbal Indonesia dan meraciknya dengan pendekatan yang lebih modern dan terkurasi.`
2. `Apakah rasanya sangat pahit seperti jamu tradisional pada umumnya?`
   - `Tidak. Salah satu fokus utama kami adalah menghadirkan profil rasa yang lebih refined dan approachable tanpa menghilangkan karakter herbalnya.`
3. `Apakah produk ini cocok untuk gaya hidup modern yang serba cepat?`
   - `Ya. Koleksi kami dirancang agar mudah dipahami, mudah dinikmati, dan terasa relevan sebagai bagian dari ritual harian.`
4. `Apakah tersedia program reseller atau distributor?`
   - `Tersedia. Kami membuka peluang kemitraan untuk reseller, distributor regional, dan channel retail yang sejalan dengan positioning brand.`
5. `Bagaimana cara memilih produk yang paling sesuai?`
   - `Anda dapat mulai dari kebutuhan utama Anda, seperti ritual pagi yang menghangatkan, pendamping setelah makan, atau minuman herbal dengan rasa yang lebih segar.`
6. `Bagaimana cara menghubungi tim Arunika Heritage?`
   - `Anda dapat menghubungi kami melalui WhatsApp, email, atau form kontak di website ini.`

### 19.8 Contact Details

- Address:
  - `Arunika Heritage Studio`
  - `Jl. Senopati No. 18, Kebayoran Baru`
  - `Jakarta Selatan 12190`
- Email:
  - `hello@arunikaheritage.id`
- Phone:
  - `+62 21 5098 1128`
- WhatsApp:
  - `+62 812 9000 1848`
- Hours:
  - `Senin - Jumat, 09.00 - 18.00 WIB`

### 19.9 Partnership Copy

- Heading:
  - `Tumbuh bersama brand herbal yang siap hadir lebih luas.`
- Body:
  - `Kami membuka kemitraan bagi reseller, distributor, dan partner retail yang mencari produk wellness lokal dengan identitas kuat, kualitas terjaga, dan presentasi yang siap dipasarkan.`
- CTA:
  - `Jadi Mitra Arunika`

## 20. Conversion Strategy

- Hero menempatkan CTA primer dan sekunder sekaligus, agar user dengan intent berbeda tetap terlayani.
- Trust strip segera setelah hero memperkecil resistensi awal.
- Produk ditampilkan sebelum kualitas teknis yang lebih rinci, agar desirability terbentuk dulu.
- Quality assurance, testimonials, dan FAQ diletakkan sebelum contact untuk menurunkan keraguan.
- Partnership CTA ditempatkan setelah trust layer cukup kuat, bukan terlalu dini.
- Contact section menyediakan banyak jalur aksi: form, WhatsApp, email, dan telepon.

## 21. Risks and Assumptions

### 21.1 Assumptions

- Website v1 akan berupa company profile statis tanpa checkout real-time.
- Visual produk akan direpresentasikan melalui ilustrasi/layout art direction tanpa aset fotografi real brand.
- Form kontak pada v1 menggunakan mekanisme lightweight dan tidak terhubung ke backend CRM.
- Implementasi dilakukan di folder `site/` agar tidak merusak project lama yang tidak relevan.

### 21.2 Risks

- Tanpa fotografi produk sungguhan, pengalaman premium bergantung pada kualitas art direction dan komposisi visual.
- Company profile tanpa CMS berarti update konten awal harus dilakukan via code.
- Tanpa backend submission, form hanya dapat memakai fallback ringan sampai integrasi berikutnya dilakukan.

## 22. Delivery Plan

### 22.1 Phase 1 — SRS

- Menyusun dokumen SRS lengkap.
- Menentukan brand, content direction, IA, design system, dan arsitektur teknis.

### 22.2 Phase 2 — Implementation

- Scaffold aplikasi `Next.js + TypeScript + Tailwind` di `site/`.
- Membangun design system dasar, tokens, metadata, dan utilitas.
- Mengimplementasikan semua section utama sesuai SRS.
- Menyusun konten realistis pada module data terpisah.
- Menambahkan interaksi FAQ, mobile nav, active navigation, contact form, dan CTA links.
- Menyusun asset visual berbasis CSS/shape/gradient agar premium namun ringan.
- Menjalankan validasi build untuk memastikan aplikasi siap dijalankan.

## 23. Approval Basis

Dokumen ini menjadi acuan implementasi. Setiap penyesuaian minor selama coding harus tetap menjaga konsistensi terhadap:

- positioning brand,
- premium visual direction,
- UX clarity,
- conversion intent,
- maintainable technical architecture.
