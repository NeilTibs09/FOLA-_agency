import { cn } from "@/lib/cn";

/** Numbered section label, e.g. "01 — The Collective". */
export function Eyebrow({
  number,
  children,
  className,
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label flex items-center gap-3 self-start", className)}>
      <span aria-hidden="true" className="size-1.5 bg-accent" />
      {number && <span>{number}</span>}
      {number && <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />}
      <span>{children}</span>
    </p>
  );
}
