import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { SurfaceCard } from "./ui/surface-card";

type ClosingCtaProps = {
  brand: {
    name: string;
    tagline: string;
  };
  links: {
    whatsapp: string;
    testimonials: string;
  };
};

export function ClosingCta({ brand, links }: ClosingCtaProps) {
  return (
    <section className="section-shell pt-8">
      <Container>
        <SurfaceCard
          className="relative overflow-hidden px-6 py-8 md:px-10 md:py-10"
          tone="muted"
        >
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(199,164,106,0.16),transparent_58%)]" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-brand-ink/50">
                {brand.name}
              </p>
              <h2 className="mt-4 text-display text-5xl font-semibold leading-none text-brand-ink">
                {brand.tagline}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-ink/72">
                Website ini dirancang untuk membuat brand herbal terasa modern,
                meyakinkan, dan siap diperkenalkan lebih luas pada customer
                maupun partner bisnis.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={links.whatsapp} target="_blank" rel="noreferrer">
                Hubungi Laras
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={links.testimonials} variant="secondary">
                Lihat Testimoni
              </Button>
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}
