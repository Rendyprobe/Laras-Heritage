import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type TestimonialsSectionProps = {
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      quote: string;
      name: string;
      age: number;
      address: string;
      photoSrc: string;
      photoAlt: string;
    }[];
  };
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="section-anchor section-shell">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
          align="center"
        />

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {testimonials.items.map((item) => (
            <SurfaceCard key={item.name} tone="muted" className="h-full p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-full border border-white/70 bg-brand-cream shadow-[0_18px_34px_-24px_rgba(35,50,44,0.5)]">
                  <Image
                    src={item.photoSrc}
                    alt={item.photoAlt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <Quote
                  className="h-7 w-7 flex-none text-brand-gold"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-5 text-xl font-semibold leading-8 text-brand-ink">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/56">
                  {item.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-brand-ink/68">
                  {item.age} tahun
                </p>
                <p className="text-sm leading-7 text-brand-ink/68">
                  {item.address}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
