import type { Metadata } from "next";
import { BenefitsSection } from "@/components/benefits-section";
import { IngredientsSection } from "@/components/ingredients-section";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { ProductsSection } from "@/components/products-section";
import { QualitySection } from "@/components/quality-section";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Koleksi Produk",
  description:
    "Jelajahi varian jamu Laras Heritage, bahan utama, manfaat, dan kualitas produk.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Varian Rasa"
        title="Empat rasa Laras Heritage yang siap dipesan."
        description="Pilih varian jamu sesuai selera: hangat, segar, herbal madu citrus, atau beras kencur caramel."
      />
      <ProductsSection products={siteContent.products} showHeading={false} />
      <BenefitsSection rituals={siteContent.rituals} />
      <IngredientsSection ingredients={siteContent.ingredients} />
      <QualitySection quality={siteContent.quality} />
    </PageShell>
  );
}
