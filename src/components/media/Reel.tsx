"use client";

import { useRef, type ReactNode } from "react";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Horizontal, swipeable strip. Native scroll with snap on touch devices;
 * previous/next buttons for pointer users.
 */
export function Reel({ label, children }: { label: string; children: ReactNode }) {
  const scroller = useRef<HTMLUListElement>(null);

  const step = (direction: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({
      left: direction * node.clientWidth * 0.7,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <ul
        ref={scroller}
        tabIndex={0}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 md:gap-5 md:scroll-px-8 md:px-8 xl:scroll-px-12 xl:px-12"
      >
        {children}
      </ul>

      <div className="shell mt-8 hidden justify-end gap-3 md:flex">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous"
          className="flex size-12 items-center justify-center border border-rule transition-colors hover:border-fg hover:bg-fg hover:text-surface"
        >
          <Arrow className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next"
          className="flex size-12 items-center justify-center border border-rule transition-colors hover:border-fg hover:bg-fg hover:text-surface"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}
