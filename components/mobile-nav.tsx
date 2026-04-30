import { X } from "lucide-react";
import { type NavItem } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";

type MobileNavProps = {
  open: boolean;
  brand: {
    name: string;
    tagline: string;
    logoSrc: string;
  };
  activeId: string;
  navItems: readonly NavItem[];
  onNavigate: (id: string) => void;
  onClose: () => void;
};

export function MobileNav({
  open,
  brand,
  activeId,
  navItems,
  onNavigate,
  onClose,
}: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-brand-ink/30 backdrop-blur-sm transition-opacity lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-x-4 top-4 rounded-[28px] border border-white/50 bg-brand-ivory/95 p-5 shadow-[0_24px_60px_-28px_rgba(35,50,44,0.46)] transition-all",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <BrandLogo
              src={brand.logoSrc}
              alt={`Logo ${brand.name}`}
              className="h-14 w-14"
              sizes="56px"
            />
            <div className="min-w-0">
              <p className="text-display text-2xl font-semibold text-brand-ink">
                {brand.name}
              </p>
              <p className="mt-1 line-clamp-2 text-sm leading-5 text-brand-ink/70">
                {brand.tagline}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-olive/10 bg-white/80 text-brand-ink"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium",
                    activeId === item.id
                      ? "bg-brand-olive text-white"
                      : "bg-white/70 text-brand-ink hover:bg-brand-cream",
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      activeId === item.id ? "bg-brand-gold" : "bg-brand-olive/20",
                    )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
