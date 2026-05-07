import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductModelViewer } from "./product-model-viewer";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

type HomeDashboardProps = {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    description: string;
  };
  links: {
    products: string;
  };
};

export function HomeDashboard({
  brand,
  hero,
  links,
}: HomeDashboardProps) {
  return (
    <section
      id="home"
      className="section-anchor relative isolate overflow-hidden pb-10 pt-28 md:pb-12"
    >
      <div className="soft-grid absolute inset-0 -z-20 opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[var(--hero-wash)]" />

      <Container>
        <div className="grid items-center gap-10 xl:grid-cols-[0.82fr_1.18fr]">
          <div data-reveal="fade-up" className="max-w-3xl">
            <span data-reveal-text="1" className="section-kicker">
              {hero.eyebrow}
            </span>
            <h1
              data-reveal-text="2"
              className="text-balance text-display text-[clamp(4rem,9vw,7rem)] font-semibold leading-[0.88] text-brand-ink"
            >
              {brand.name}
            </h1>
            <p
              data-reveal-text="3"
              className="mt-5 text-pretty text-2xl leading-9 text-brand-ink/82 md:text-3xl"
            >
              {brand.tagline}
            </p>
            <p
              data-reveal-text="4"
              className="mt-5 max-w-2xl text-pretty text-base leading-8 text-brand-ink/72 md:text-lg"
            >
              {hero.description}
            </p>

            <div
              data-reveal-text="5"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href={links.products} size="lg">
                Lihat Koleksi
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <ProductModelViewer
            data-reveal="fade-left"
            data-reveal-delay="2"
            modelSrc="/models/laras-food-packaging.glb"
            className="min-h-[24rem] w-full max-w-[40rem] justify-self-center rounded-[24px] md:min-h-[34rem] md:rounded-[28px] xl:min-h-[36rem]"
          />
        </div>

        <div
          data-reveal="zoom-soft"
          data-reveal-delay="3"
          className="mt-10 overflow-hidden rounded-[28px] border border-brand-surface/60 bg-brand-cream/60 shadow-[0_30px_70px_-42px_rgba(35,50,44,0.38)]"
        >
          <div className="relative aspect-[16/9] min-h-[13rem]">
            <Image
              src="/laras-heritage-banner-landscape-clean.png"
              alt="Banner produk Laras Heritage"
              fill
              sizes="(min-width: 1280px) 1184px, calc(100vw - 2.5rem)"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
