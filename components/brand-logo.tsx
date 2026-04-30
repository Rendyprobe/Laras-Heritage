import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  src,
  alt,
  className,
  priority = false,
  sizes = "56px",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative block flex-none overflow-hidden rounded-2xl border border-brand-olive/10 bg-brand-ivory shadow-[0_14px_28px_-20px_rgba(35,50,44,0.5)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </span>
  );
}
