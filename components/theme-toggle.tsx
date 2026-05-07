"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const storageKey = "laras-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function subscribe(onThemeChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === storageKey) {
      applyTheme(getPreferredTheme());
      onThemeChange();
    }
  };

  const handleSystemThemeChange = () => {
    if (window.localStorage.getItem(storageKey)) {
      return;
    }

    applyTheme(getPreferredTheme());
    onThemeChange();
  };

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener("storage", handleStorage);
  window.addEventListener("laras-theme-change", onThemeChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("laras-theme-change", onThemeChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

function getServerSnapshot(): Theme {
  return "light";
}

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
};

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribe,
    getPreferredTheme,
    getServerSnapshot,
  );

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = nextTheme === "dark" ? "Mode gelap" : "Mode terang";

  const handleClick = () => {
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event("laras-theme-change"));
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-olive/12 bg-brand-surface/76 px-3 text-sm font-semibold text-brand-ink shadow-[0_16px_34px_-28px_rgba(35,50,44,0.52)] hover:-translate-y-0.5 hover:border-brand-olive/24 hover:bg-brand-surface",
        showLabel ? "min-w-32" : "w-11",
        className,
      )}
      aria-label={label}
      title={label}
      onClick={handleClick}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
      {showLabel ? <span>{label}</span> : null}
    </button>
  );
}
