import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "accent" | "shopee";
  size?: "sm" | "md" | "lg";
};

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variantClasses = {
  primary:
    "bg-brand-olive text-white hover:-translate-y-0.5 hover:bg-[var(--brand-olive-hover)] shadow-[0_22px_40px_-24px_rgba(47,74,59,0.8)]",
  secondary:
    "border border-brand-olive/15 bg-brand-surface/80 text-brand-ink hover:-translate-y-0.5 hover:border-brand-olive/30 hover:bg-brand-surface",
  ghost:
    "bg-transparent text-brand-ink hover:bg-brand-olive/[0.06]",
  accent:
    "bg-brand-gold text-brand-ink hover:-translate-y-0.5 hover:bg-[var(--brand-gold-hover)] shadow-[0_22px_40px_-24px_rgba(199,164,106,0.72)]",
  shopee:
    "bg-[#ee4d2d] text-white hover:-translate-y-0.5 hover:bg-[#d93f20] shadow-[0_22px_40px_-24px_rgba(238,77,45,0.8)]",
} as const;

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-6 text-base",
} as const;

function getClassName(
  variant: keyof typeof variantClasses,
  size: keyof typeof sizeClasses,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em]",
    "focus-visible:outline-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button(props: ButtonAsAnchor | ButtonAsButton) {
  const {
    className,
    variant = "primary",
    size = "md",
    children,
    ...rest
  } = props;

  const sharedClassName = getClassName(variant, size, className);

  if ("href" in props && props.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={sharedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={sharedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
