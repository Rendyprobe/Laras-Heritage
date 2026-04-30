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
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-olive/10 bg-white/72 shadow-[0_24px_60px_-36px_rgba(35,50,44,0.36)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead className="bg-brand-leaf/58 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/68">
                  <tr>
                    <th scope="col" className="w-28 px-5 py-4">
                      Foto
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Nama
                    </th>
                    <th scope="col" className="px-5 py-4">
                      NIM
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-olive/10">
                  {groupMembers.map((member) => (
                    <tr key={member.nim} className="text-brand-ink/78">
                      <td className="px-5 py-4">
                        <a
                          href={member.photoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="block h-16 w-16 overflow-hidden rounded-xl border border-brand-olive/12 bg-brand-leaf/45"
                          aria-label={`Buka foto ${member.name}`}
                        >
                          <Image
                            src={member.photoUrl}
                            alt={`Foto ${member.name}`}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </a>
                      </td>
                      <td className="px-5 py-4 font-semibold text-brand-ink">
                        {member.name}
                      </td>
                      <td className="px-5 py-4 font-medium tabular-nums text-brand-ink/70">
                        {member.nim}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
