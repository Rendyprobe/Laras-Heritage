import { CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

type AboutSectionProps = {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    principles: readonly string[];
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="section-anchor relative pb-3 pt-8 md:pb-4 md:pt-10"
    >
      <Container>
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.paragraphs[0]}
          />
          <div className="mt-7 grid gap-5 text-base leading-8 text-brand-ink/74">
            {about.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {about.principles.map((principle) => (
              <div
                key={principle}
                className="inline-flex items-center gap-2 rounded-full border border-brand-olive/10 bg-white/72 px-4 py-3 text-sm font-medium text-brand-ink/76 shadow-[0_14px_30px_-24px_rgba(35,50,44,0.34)]"
              >
                <CheckCircle2
                  className="h-4 w-4 flex-none text-brand-olive"
                  aria-hidden="true"
                />
                {principle}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
