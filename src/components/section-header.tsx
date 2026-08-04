import { FadeIn } from "./motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-7 md:mb-9 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
