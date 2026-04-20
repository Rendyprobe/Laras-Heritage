import { Clock3, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { SurfaceCard } from "./ui/surface-card";

type ContactSectionProps = {
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    addressName: string;
    addressLines: readonly string[];
    email: string;
    phoneDisplay: string;
    phoneLink: string;
    whatsappDisplay: string;
    whatsappLink: string;
    hours: string;
  };
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section-anchor section-shell">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
            />

            <SurfaceCard className="mt-8 p-6 md:p-8">
              <address className="not-italic">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-brand-ink/50">
                        Studio
                      </p>
                      <p className="mt-2 text-lg font-semibold text-brand-ink">
                        {contact.addressName}
                      </p>
                      {contact.addressLines.map((line) => (
                        <p key={line} className="mt-1 text-sm leading-7 text-brand-ink/72">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rich-divider" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-brand-ink/50">
                          Email
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="mt-2 inline-block text-sm leading-7 text-brand-ink/78 hover:text-brand-olive"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                        <PhoneCall className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-brand-ink/50">
                          Telepon
                        </p>
                        <a
                          href={`tel:${contact.phoneLink}`}
                          className="mt-2 inline-block text-sm leading-7 text-brand-ink/78 hover:text-brand-olive"
                        >
                          {contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-brand-ink/50">
                          WhatsApp
                        </p>
                        <a
                          href={contact.whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-sm leading-7 text-brand-ink/78 hover:text-brand-olive"
                        >
                          {contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-brand-olive">
                        <Clock3 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-brand-ink/50">
                          Jam operasional
                        </p>
                        <p className="mt-2 text-sm leading-7 text-brand-ink/78">
                          {contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </address>
            </SurfaceCard>
          </div>

          <SurfaceCard className="p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-ink/50">
              Contact form
            </p>
            <h3 className="mt-4 text-display text-4xl font-semibold leading-none text-brand-ink">
              Sampaikan kebutuhan Anda dengan singkat.
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-ink/72">
              Kami akan membantu mengarahkan percakapan ke jalur yang paling
              relevan, mulai dari info produk hingga diskusi partnership.
            </p>
            <div className="mt-8">
              <ContactForm email={contact.email} />
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
