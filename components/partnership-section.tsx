import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { SurfaceCard } from "./ui/surface-card";

type PartnershipSectionProps = {
  partnership: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: readonly string[];
    primaryCta: string;
    secondaryCta: string;
  };
  links: {
    partnerWhatsapp: string;
    email: string;
  };
};

export function PartnershipSection({
  partnership,
  links,
}: PartnershipSectionProps) {
  return (
    <section id="partnership" className="section-anchor section-shell">
      <Container>
        <SurfaceCard
          tone="accent"
          className="grain-overlay relative overflow-hidden px-6 py-8 md:px-10 md:py-10"
        >
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-gold/18 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-brand-leaf/55 blur-3xl" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div>
              <span className="section-kicker bg-white/55">{partnership.eyebrow}</span>
              <h2 className="section-title">{partnership.title}</h2>
              <p className="section-copy max-w-2xl">{partnership.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={links.partnerWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  {partnership.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href={links.email} variant="secondary">
                  {partnership.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              {partnership.bullets.map((bullet) => (
                <SurfaceCard
                  key={bullet}
                  className="border-white/55 bg-white/74 p-5 shadow-[0_18px_36px_-28px_rgba(35,50,44,0.42)]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 h-5 w-5 flex-none text-brand-olive"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-7 text-brand-ink/76">{bullet}</p>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}
