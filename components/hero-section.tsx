import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

type HeroSectionProps = {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryCta: string;
    trustBadges: readonly string[];
    notes: readonly string[];
  };
  links: {
    products: string;
  };
};

function HeroStillLife() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-brand-gold/25 blur-3xl" />
      <div className="absolute right-6 top-0 h-44 w-44 rounded-full bg-brand-leaf/70 blur-3xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-brand-cream/50 shadow-[0_34px_70px_-42px_rgba(35,50,44,0.52)]">
        <Image
          src="/laras-heritage-banner.png"
          alt="Banner produk Laras Heritage"
          width={1024}
          height={1536}
          priority
          sizes="(min-width: 1024px) 30rem, min(100vw - 2rem, 30rem)"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export function HeroSection({ brand, hero, links }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="section-anchor relative isolate overflow-hidden pb-16 pt-32 md:pb-20 md:pt-36"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(199,164,106,0.2),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(126,146,114,0.18),transparent_26%),linear-gradient(180deg,rgba(252,250,246,0.98),rgba(245,239,228,0.65)_42%,rgba(252,250,246,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),transparent)]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          <div className="max-w-3xl">
            <span className="section-kicker">{hero.eyebrow}</span>
            <h1 className="text-balance text-display text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-[0.92] text-brand-ink">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-brand-ink/78 md:text-xl">
              {hero.description}
            </p>

            <div className="mt-8">
              <Button href={links.products} variant="secondary" size="lg">
                {hero.secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            {hero.trustBadges.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {hero.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/72 px-4 py-2 text-sm font-medium text-brand-ink/75 shadow-[0_12px_30px_-24px_rgba(35,50,44,0.34)]"
                  >
                    <Leaf
                      className="h-4 w-4 text-brand-sage"
                      aria-hidden="true"
                    />
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-12 rich-divider max-w-2xl" />
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-brand-ink/50">
              {brand.name} - {brand.tagline}
            </p>
          </div>

          <HeroStillLife />
        </div>
      </Container>
    </section>
  );
}
