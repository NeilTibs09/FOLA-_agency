import { cn } from "@/lib/cn";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
    >
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
