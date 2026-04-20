import { Container } from "./ui/container";

type SiteFooterProps = {
  brand: {
    name: string;
    blurb: string;
  };
  navItems: readonly {
    id: string;
    label: string;
    href: string;
  }[];
  contact: {
    email: string;
    phoneDisplay: string;
    phoneLink: string;
    whatsappDisplay: string;
    whatsappLink: string;
  };
};

export function SiteFooter({ brand, navItems, contact }: SiteFooterProps) {
  return (
    <footer className="mt-8 bg-brand-olive text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr_0.75fr]">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-display text-2xl font-semibold text-brand-gold">
            AH
          </div>
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
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/74">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-brand-gold">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneLink}`} className="hover:text-brand-gold">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold"
              >
                {contact.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/44">
        Copyright 2026 Arunika Heritage. Crafted for modern herbal trust.
      </div>
    </footer>
  );
}
