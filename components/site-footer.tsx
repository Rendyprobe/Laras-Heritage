import {
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { Container } from "./ui/container";

type SiteFooterProps = {
  brand: {
    name: string;
    blurb: string;
    logoSrc: string;
  };
  navItems: readonly {
    id: string;
    label: string;
    href: string;
  }[];
  contact: {
    addressName: string;
    addressLines: readonly string[];
    email: string;
    phoneDisplay: string;
    phoneLink: string;
    whatsappDisplay: string;
    whatsappLink: string;
    instagramDisplay: string;
    instagramLink: string;
    hours: string;
  };
};

export function SiteFooter({ brand, navItems, contact }: SiteFooterProps) {
  return (
    <footer className="mt-8 bg-brand-olive text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.7fr_0.85fr_0.95fr]">
        <div>
          <BrandLogo
            src={brand.logoSrc}
            alt={`Logo ${brand.name}`}
            className="h-16 w-16 border-white/20"
            sizes="64px"
          />
          <h2 className="mt-5 text-display text-4xl font-semibold leading-none text-white">
            {brand.name}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            {brand.blurb}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/48">
            Navigasi
          </p>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm leading-7 text-white/74 hover:text-brand-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/48">
            Kontak
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-white/74">
            <li className="flex items-start gap-3">
              <Mail
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-brand-gold"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PhoneCall
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <a
                href={`tel:${contact.phoneLink}`}
                className="hover:text-brand-gold"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold"
              >
                {contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Camera
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <a
                href={contact.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold"
              >
                {contact.instagramDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/48">
            Alamat
          </p>
          <address className="mt-5 space-y-4 not-italic text-sm leading-7 text-white/74">
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-white/86">
                  {contact.addressName}
                </p>
                {contact.addressLines.map((line) => (
                  <p key={line} className="text-white/78">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3
                className="mt-1 h-4 w-4 flex-none text-brand-gold"
                aria-hidden="true"
              />
              <p className="text-white/62">{contact.hours}</p>
            </div>
          </address>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/44">
        Copyright 2026 {brand.name}. Crafted for modern herbal trust.
      </div>
    </footer>
  );
}
