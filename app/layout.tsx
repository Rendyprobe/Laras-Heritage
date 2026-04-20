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
  metadataBase: new URL("https://arunikaheritage.id"),
  title: {
    default: "Arunika Heritage | Jamu Modern Premium dari Indonesia",
    template: "%s | Arunika Heritage",
  },
  description:
    "Arunika Heritage menghadirkan jamu modern premium dengan bahan alami pilihan, formulasi yang relevan untuk gaya hidup masa kini, dan presentasi brand yang hangat, elegan, serta terpercaya.",
  keywords: [
    "jamu modern premium",
    "produk herbal alami Indonesia",
    "brand jamu modern",
    "wellness alami",
    "distributor jamu premium",
  ],
  openGraph: {
    title: "Arunika Heritage | Jamu Modern Premium dari Indonesia",
    description:
      "Warisan alami yang diracik untuk hidup modern melalui koleksi herbal premium dengan rasa refined dan proses yang terjaga.",
    siteName: "Arunika Heritage",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunika Heritage",
    description:
      "Jamu modern premium dari Indonesia dengan identitas visual yang elegan dan terpercaya.",
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
