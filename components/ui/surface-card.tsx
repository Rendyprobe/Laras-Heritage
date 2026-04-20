import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "accent";
};

const toneClasses = {
  default: "surface-panel",
  muted:
    "rounded-[28px] border border-brand-olive/10 bg-brand-cream/70 shadow-[0_20px_45px_-32px_rgba(47,74,59,0.32)]",
  accent:
    "rounded-[28px] border border-brand-gold/30 bg-[linear-gradient(180deg,rgba(199,164,106,0.16),rgba(255,255,255,0.72))] shadow-[0_26px_52px_-34px_rgba(199,164,106,0.58)]",
} as const;

export function SurfaceCard({
  className,
  tone = "default",
  ...props
}: SurfaceCardProps) {
  return <div className={cn(toneClasses[tone], className)} {...props} />;
}
