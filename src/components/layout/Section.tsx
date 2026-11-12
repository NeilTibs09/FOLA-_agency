import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Theme = "light" | "bone" | "dark";

/**
 * Page section. `theme` switches the whole section between the day
 * (light, bone) and night (dark) sides of the brand.
 */
export function Section({
  theme = "light",
  children,
  className,
  id,
  bleed = false,
}: {
  theme?: Theme;
  children: ReactNode;
  className?: string;
  id?: string;
  /** Skip the default vertical padding for full-bleed sections. */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={cn("relative", !bleed && "py-20 md:py-28 xl:py-36", className)}
    >
      {children}
    </section>
  );
}
