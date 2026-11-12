import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";

type Variant = "solid" | "outline" | "accent";

const variants: Record<Variant, string> = {
  // Inverts against whichever section theme it sits in.
  solid: "bg-fg text-surface hover:bg-accent hover:text-ink",
  outline: "border border-fg text-fg hover:bg-fg hover:text-surface",
  // Ink on vermilion keeps small text above AA contrast.
  accent: "bg-accent text-ink hover:bg-fg hover:text-surface",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "label group inline-flex min-h-12 items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-5 transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      <span className="whitespace-nowrap">{children}</span>
      <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
    </Link>
  );
}
