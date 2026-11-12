"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Phone-only action bar within thumb reach. Appears once the first screen
 * has been scrolled past and steps aside before the footer.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const beforeFooter =
        window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 520;
      setVisible(pastHero && beforeFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_0_rgb(10_10_10/0.12)] transition-transform duration-500 ease-editorial md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Link
        href="/contact"
        className="label flex min-h-14 items-center justify-center bg-paper text-ink"
      >
        Brands · Enquire
      </Link>
      <Link
        href="/join"
        className="label flex min-h-14 items-center justify-center bg-accent text-ink"
      >
        Talent · Apply
      </Link>
    </div>
  );
}
