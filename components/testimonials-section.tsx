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
      role: string;
    }[];
  };
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section-shell">
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
              <Quote className="h-7 w-7 text-brand-gold" aria-hidden="true" />
              <p className="mt-5 text-display text-3xl font-semibold leading-tight text-brand-ink">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/56">
                  {item.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-brand-ink/68">
                  {item.role}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
