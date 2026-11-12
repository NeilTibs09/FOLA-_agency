import type { ReactNode } from "react";

/**
 * Renders copy where *asterisks* mark the editorial accent words,
 * which are set in the italic serif.
 */
export function rich(text: string, accentClassName = ""): ReactNode[] {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className={`accent-word ${accentClassName}`}>
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    ),
  );
}
