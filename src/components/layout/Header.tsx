"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, socials } from "@/content/site";
import { cn } from "@/lib/cn";
import { Wordmark } from "@/components/ui/Wordmark";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Routes whose first screen is a dark, full-bleed hero. */
const DARK_TOP_ROUTES = ["/"];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: lock page scroll, close on Escape.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const menuButton = menuButtonRef.current;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      menuButton?.focus();
    };
  }, [open]);

  const overHero = DARK_TOP_ROUTES.includes(pathname) && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          overHero
            ? "border-b border-transparent text-paper"
            : "border-b border-ink/10 bg-paper/92 text-ink backdrop-blur-md",
        )}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <Link href="/" aria-label="FOLA home" className="flex min-h-11 items-center">
            <Wordmark className="text-[1.375rem] md:text-[1.625rem]" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="label relative py-3 after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:ease-editorial hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="site-menu"
            className="label -mr-2 flex min-h-11 items-center gap-3 px-2 lg:hidden"
          >
            Menu
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-theme="dark"
        inert={!open}
        className={cn(
          "fixed inset-0 z-50 flex flex-col overflow-y-auto transition-[opacity,visibility] duration-500 ease-editorial lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="shell flex h-16 shrink-0 items-center justify-between md:h-20">
          <Link
            href="/"
            aria-label="FOLA home"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center"
          >
            <Wordmark className="text-[1.375rem] md:text-[1.625rem]" />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="label -mr-2 flex min-h-11 items-center gap-3 px-2"
          >
            Close
            <span aria-hidden="true" className="relative size-6">
              <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav aria-label="Menu" className="shell flex flex-1 flex-col justify-center py-8">
          <ul className="border-t border-rule">
            {navigation.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "border-b border-rule transition-[opacity,transform] duration-700 ease-editorial",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + index * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="group flex items-baseline gap-4 py-4"
                >
                  <span className="label w-6 text-muted">0{index + 2}</span>
                  <span className="display text-[clamp(2.4rem,11vw,4.5rem)] transition-colors group-hover:text-accent group-aria-[current=page]:text-accent">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shell shrink-0 pb-8">
          <div className="grid grid-cols-2 gap-3">
            <ButtonLink href="/contact" variant="outline">
              Enquire
            </ButtonLink>
            <ButtonLink href="/join" variant="accent">
              Apply
            </ButtonLink>
          </div>
          <ul className="label mt-6 flex gap-6 text-muted">
            {socials.map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-fg">
                    {social.label}
                  </a>
                ) : (
                  social.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
