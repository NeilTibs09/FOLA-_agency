import { cn } from "@/lib/cn";

/** The FOLA wordmark. Inherits colour from its context. */
export function Wordmark({ className }: { className?: string }) {
  return <span className={cn("wordmark", className)}>FOLA</span>;
}
