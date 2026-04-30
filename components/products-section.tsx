import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
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

function ShopeeMark() {
  return (
    <svg
      className="mr-2 h-7 w-7 flex-none"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="10" fill="white" />
      <path
        d="M8.7 12.4h14.6l1 12.2a2.1 2.1 0 0 1-2.1 2.3H9.8a2.1 2.1 0 0 1-2.1-2.3l1-12.2Z"
        fill="#ee4d2d"
      />
      <path
        d="M11.9 12.4V10a4.1 4.1 0 0 1 8.2 0v2.4"
        stroke="#ee4d2d"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18.9 16.7c-.6-.5-1.5-.8-2.6-.8-1.5 0-2.4.7-2.4 1.6 0 1 1 1.3 2.6 1.7 1.9.5 3.4 1.2 3.4 3.1 0 1.8-1.6 3.1-4 3.1-1.5 0-2.8-.4-3.8-1.3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section
      id="products"
      className="section-anchor relative pb-10 pt-8 md:pb-12 md:pt-10"
    >
      <Container>
        <SectionHeading
          eyebrow="Varian Rasa"
          title="Empat rasa Laras Heritage yang siap dipesan."
          description="Pilih varian jamu sesuai selera: hangat, segar, herbal madu citrus, atau beras kencur caramel."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {products.map((product) => (
            <SurfaceCard
              key={product.name}
              className={cn(
                "overflow-hidden bg-gradient-to-br p-0",
                toneStyles[product.tone],
              )}
            >
              <div className="relative overflow-hidden">
                <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-white/35 blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/55 bg-white/54">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative p-7 md:p-8">
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

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <Button
                      href={product.orderHref}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full"
                    >
                      <MessageCircle
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Pesan sekarang
                    </Button>
                    <Button
                      href={product.shopeeHref}
                      target="_blank"
                      rel="noreferrer"
                      variant="shopee"
                      className="w-full"
                    >
                      <ShopeeMark />
                      Checkout di Shopee
                    </Button>
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
