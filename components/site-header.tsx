"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { type NavItem } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "./ui/container";

type SiteHeaderProps = {
  brand: {
    name: string;
    tagline: string;
    logoSrc: string;
  };
  navItems: readonly NavItem[];
};

export function SiteHeader({ brand, navItems }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const activeId = useMemo(() => {
    const activeItem = navItems.find((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }

      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    });

    return activeItem?.id ?? "home";
  }, [navItems, pathname]);

  const handleNavigate = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header-shell fixed inset-x-0 top-0 z-30 pt-4">
        <Container>
          <div
            className={cn(
              "mx-auto flex items-center justify-between rounded-full border px-3 py-3 md:px-4",
              isScrolled
                ? "border-brand-surface/70 bg-brand-ivory/82 shadow-[0_18px_40px_-28px_rgba(35,50,44,0.4)] backdrop-blur-md"
                : "border-brand-surface/45 bg-brand-surface/58 backdrop-blur-sm",
            )}
          >
            <Link
              href="/"
              onClick={handleNavigate}
              className="flex min-w-0 items-center gap-3"
            >
              <BrandLogo
                src={brand.logoSrc}
                alt={`Logo ${brand.name}`}
                className="h-12 w-12"
                priority
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-[0.02em] text-brand-ink">
                  {brand.name}
                </p>
                <p className="hidden truncate text-xs text-brand-ink/60 sm:block">
                  {brand.tagline}
                </p>
              </div>
            </Link>

            <nav className="hidden lg:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-2">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={handleNavigate}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                          isActive
                            ? "bg-brand-olive text-white"
                            : "text-brand-ink/74 hover:bg-brand-olive/[0.06] hover:text-brand-ink",
                        )}
                      >
                        <span
                          className={cn(
                            "h-2 w-2 rounded-full",
                            isActive ? "bg-brand-gold" : "bg-brand-olive/15",
                          )}
                          aria-hidden="true"
                        />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-olive/10 bg-brand-surface/80 text-brand-ink lg:hidden"
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>
      <div id="mobile-menu">
        <MobileNav
          open={menuOpen}
          brand={brand}
          activeId={activeId}
          navItems={navItems}
          onNavigate={handleNavigate}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
