import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal="fade-up"
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span data-reveal-text="1" className="section-kicker">
        {eyebrow}
      </span>
      <h2 data-reveal-text="2" className="section-title">
        {title}
      </h2>
      <p data-reveal-text="3" className="section-copy">
        {description}
      </p>
    </div>
  );
}
