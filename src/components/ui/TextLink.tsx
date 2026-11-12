import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";

/** Underlined editorial link with an arrow. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "label group inline-flex min-h-11 items-center gap-3 border-b border-fg pb-1 transition-colors duration-300 hover:border-accent",
        className,
      )}
    >
      <span>{children}</span>
      <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent" />
    </Link>
  );
}
