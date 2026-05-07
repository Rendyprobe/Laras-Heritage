import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "accent";
  "data-reveal"?: string;
  "data-reveal-delay"?: string;
};

const toneClasses = {
  default: "surface-panel",
  muted:
    "rounded-[28px] border border-brand-olive/10 bg-brand-cream/70 shadow-[0_20px_45px_-32px_rgba(47,74,59,0.32)]",
  accent:
    "rounded-[28px] border border-brand-gold/30 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-gold)_16%,transparent),color-mix(in_srgb,var(--brand-surface)_72%,transparent))] shadow-[0_26px_52px_-34px_rgba(199,164,106,0.58)]",
} as const;

export function SurfaceCard({
  className,
  tone = "default",
  "data-reveal": dataReveal = "fade-up",
  ...props
}: SurfaceCardProps) {
  return (
    <div
      data-reveal={dataReveal}
      className={cn(toneClasses[tone], className)}
      {...props}
    />
  );
}
