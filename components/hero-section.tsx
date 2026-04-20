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
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-brand-gold/25 blur-3xl" />
      <div className="absolute right-6 top-0 h-44 w-44 rounded-full bg-brand-leaf/70 blur-3xl" />
      <div className="surface-panel grain-overlay soft-grid relative aspect-[11/12] overflow-hidden rounded-[36px] p-5 md:p-7">
        <div className="absolute inset-5 rounded-[30px] border border-white/40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_42%),linear-gradient(180deg,rgba(245,239,228,0.75),rgba(255,255,255,0.22))]" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-full border border-brand-olive/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink/70">
              Small-batch botanical blends
            </div>
            <div className="hidden rounded-[22px] border border-white/50 bg-brand-ivory/80 px-4 py-3 text-right text-sm text-brand-ink/70 sm:block">
              <p className="font-semibold text-brand-ink">Modern herbal ritual</p>
              <p className="mt-1">crafted for desk, home, and hospitality</p>
            </div>
          </div>

          <div className="relative mx-auto mt-8 h-[19rem] w-full max-w-[18rem]">
            <div className="absolute left-1/2 top-0 h-[88%] w-[42%] -translate-x-1/2 rounded-[999px_999px_48px_48px] border border-white/55 bg-[linear-gradient(180deg,rgba(245,239,228,0.98),rgba(215,192,157,0.92)_34%,rgba(122,151,104,0.84)_100%)] shadow-[0_28px_50px_-24px_rgba(47,74,59,0.45)]" />
            <div className="absolute left-1/2 top-7 h-[64%] w-[28%] -translate-x-1/2 rounded-[999px_999px_32px_32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.1))]" />
            <div className="absolute left-1/2 top-4 h-12 w-[34%] -translate-x-1/2 rounded-full border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(242,237,229,0.78))]" />
            <div className="absolute left-1/2 top-[4.9rem] w-[52%] -translate-x-1/2 rounded-[24px] border border-white/60 bg-brand-ivory/85 px-3 py-4 text-center shadow-[0_16px_30px_-18px_rgba(35,50,44,0.34)]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-ink/60">
                Signature Blend
              </p>
              <p className="mt-2 text-display text-2xl font-semibold leading-none text-brand-olive">
                Svara
              </p>
              <p className="mt-2 text-xs text-brand-ink/65">Kunyit Asam</p>
            </div>

            <div className="absolute -left-4 bottom-14 rounded-[24px] border border-white/50 bg-white/78 px-4 py-4 shadow-[0_24px_36px_-24px_rgba(35,50,44,0.36)]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
                Tasting note
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-ink">
                Bright, warm, lightly tart
              </p>
            </div>

            <div className="absolute -right-3 top-14 rounded-[24px] border border-white/50 bg-white/78 px-4 py-4 shadow-[0_24px_36px_-24px_rgba(35,50,44,0.36)]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
                Botanical blend
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-ink">
                turmeric, tamarind, citrus
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/45 bg-white/74 p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-ink/55">
                Brand discipline
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-ink">
                heritage-led, design-forward
              </p>
            </div>
            <div className="rounded-[24px] border border-white/45 bg-brand-olive/92 p-4 text-white">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                Ready for
              </p>
              <p className="mt-2 text-lg font-semibold">
                customer trust, partnership, and retail conversations
              </p>
            </div>
          </div>
        </div>
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

            <div className="mt-8 flex flex-wrap gap-3">
              {hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/72 px-4 py-2 text-sm font-medium text-brand-ink/75 shadow-[0_12px_30px_-24px_rgba(35,50,44,0.34)]"
                >
                  <Leaf className="h-4 w-4 text-brand-sage" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>

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
