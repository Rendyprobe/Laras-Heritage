import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type ProductsSectionProps = {
  products: readonly Product[];
};

const toneStyles = {
  gold:
    "from-brand-gold/24 via-white/75 to-brand-cream/55 border-brand-gold/24",
  sage:
    "from-brand-sage/18 via-white/75 to-brand-leaf/55 border-brand-sage/24",
  clay:
    "from-brand-clay/20 via-white/75 to-brand-cream/45 border-brand-clay/24",
  olive:
    "from-brand-olive/16 via-white/76 to-brand-leaf/45 border-brand-olive/24",
} as const;

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products" className="section-anchor section-shell">
      <Container>
        <SectionHeading
          eyebrow="Featured Collection"
          title="Koleksi utama yang cukup singkat untuk dipahami, cukup kuat untuk diingat."
          description="Alih-alih menampilkan terlalu banyak informasi, setiap blend disajikan sebagai satu identitas rasa yang jelas."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {products.map((product) => (
            <SurfaceCard
              key={product.name}
              className={cn(
                "overflow-hidden bg-gradient-to-br p-0",
                toneStyles[product.tone],
              )}
            >
              <div className="relative overflow-hidden p-7 md:p-8">
                <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-white/35 blur-2xl" />
                <div>
                  <span className="inline-flex rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/60">
                    {product.label}
                  </span>
                  <h3 className="mt-5 text-display text-4xl font-semibold leading-none text-brand-ink">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-brand-ink/74">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="inline-flex rounded-full border border-brand-olive/10 bg-white/68 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-brand-ink/72"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-olive/10 bg-brand-olive/90 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
