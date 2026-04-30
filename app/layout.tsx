import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larasheritage.id"),
  title: {
    default: "Laras Heritage | Jamu Modern Premium dari Indonesia",
    template: "%s | Laras Heritage",
  },
  description:
    "Laras Heritage menghadirkan jamu modern premium dengan bahan alami pilihan, rasa tradisional yang diselaraskan untuk cita rasa modern, dan presentasi brand yang hangat, elegan, serta terpercaya.",
  keywords: [
    "jamu modern premium",
    "produk herbal alami Indonesia",
    "brand jamu modern",
    "wellness alami",
    "jamu herbal premium",
  ],
  icons: {
    icon: "/laras-heritage-logo.jpeg",
    apple: "/laras-heritage-logo.jpeg",
  },
  openGraph: {
    title: "Laras Heritage | Jamu Modern Premium dari Indonesia",
    description:
      "Menyelaraskan rasa jamu tradisional dengan cita rasa modern melalui koleksi herbal premium dengan proses yang terjaga.",
    siteName: "Laras Heritage",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/laras-heritage-logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Logo Laras Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laras Heritage",
    description:
      "Jamu modern premium dari Indonesia dengan identitas visual yang elegan dan terpercaya.",
    images: ["/laras-heritage-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-ivory text-brand-ink">
        {children}
      </body>
    </html>
  );
}
