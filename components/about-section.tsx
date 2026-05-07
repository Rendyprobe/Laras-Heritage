import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

const groupMembers = [
  {
    name: "Rendy Syahputra Riyadi",
    nim: "25051204307",
    photoUrl: "https://siakadu.unesa.ac.id/photo/fotomhs/25051204307.jpg",
  },
  {
    name: "Shofie Ardhya Shafina",
    nim: "25051204279",
    photoUrl: "https://siakadu.unesa.ac.id/photo/fotomhs/25051204279.jpg",
  },
  {
    name: "Putu Novita Darmadewi",
    nim: "25051204281",
    photoUrl: "https://siakadu.unesa.ac.id/photo/fotomhs/25051204281.jpg",
  },
] as const;

type AboutSectionProps = {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    principles: readonly string[];
  };
  showHeading?: boolean;
};

export function AboutSection({ about, showHeading = true }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="section-anchor relative pb-3 pt-8 md:pb-4 md:pt-10"
    >
      <Container>
        <div className="max-w-4xl">
          {showHeading ? (
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.paragraphs[0]}
            />
          ) : null}
          <div
            data-reveal="fade-up"
            data-reveal-delay="1"
            className={
              showHeading
                ? "mt-7 grid gap-5 text-base leading-8 text-brand-ink/74"
                : "grid gap-5 text-base leading-8 text-brand-ink/74"
            }
          >
            {about.paragraphs.slice(1).map((paragraph, index) => (
              <p key={paragraph} data-reveal-text={String(index + 1)}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-8 overflow-x-auto pb-3">
          <div className="mx-auto flex w-max min-w-[760px] justify-center gap-5">
            {groupMembers.map((member, index) => (
              <article
                key={member.nim}
                data-reveal="zoom-soft"
                data-reveal-delay={String(index + 1)}
                className="relative flex min-h-56 w-[240px] flex-none flex-col items-center justify-center overflow-hidden rounded-2xl border border-brand-olive/12 bg-brand-surface/76 px-5 py-7 text-center shadow-[0_24px_62px_-38px_rgba(35,50,44,0.46)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_36%,rgba(47,74,59,0.07)_48%,transparent_61%,transparent_100%)]" />
                <a
                  href={member.photoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block h-24 w-24 overflow-hidden rounded-full border-4 border-brand-surface bg-brand-leaf/55 shadow-[0_18px_38px_-24px_rgba(35,50,44,0.72)]"
                  aria-label={`Buka foto ${member.name}`}
                >
                  <Image
                    src={member.photoUrl}
                    alt={`Foto ${member.name}`}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </a>
                <h3
                  data-reveal-text="1"
                  className="relative mt-5 font-sans text-sm font-bold leading-5 tracking-normal text-brand-ink"
                >
                  {member.name}
                </h3>
                <p
                  data-reveal-text="2"
                  className="relative mt-2 text-xs font-bold tabular-nums text-brand-clay"
                >
                  {member.nim}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="mt-8 flex flex-wrap gap-3">
            {about.principles.map((principle, index) => (
              <div
                key={principle}
                data-reveal="fade-up"
                data-reveal-delay={String((index % 4) + 1)}
                className="inline-flex items-center gap-2 rounded-full border border-brand-olive/10 bg-brand-surface/72 px-4 py-3 text-sm font-medium text-brand-ink/76 shadow-[0_14px_30px_-24px_rgba(35,50,44,0.34)]"
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
