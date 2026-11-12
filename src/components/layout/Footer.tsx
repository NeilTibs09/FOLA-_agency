import Link from "next/link";
import { legalNavigation, navigation, site, socials } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer data-theme="dark" className="overflow-hidden">
      <div className="shell grid gap-12 pb-14 pt-16 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-24">
        <div className="md:col-span-5">
          <p className="statement max-w-[16ch]">
            {site.tagline}{" "}
            <em className="accent-word text-muted">{site.location}.</em>
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <h2 className="label text-muted">Explore</h2>
          <ul className="mt-5 space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-lg transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="label text-muted">Connect</h2>
          <ul className="mt-5 space-y-1 text-lg">
            {socials.map((social) => (
              <li key={social.label} className="flex min-h-11 items-center">
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span>{social.label}</span>
                )}
              </li>
            ))}
            <li className="flex min-h-11 items-center">
              {site.email ? (
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              ) : (
                <Link href="/contact" className="flex min-h-11 items-center transition-colors hover:text-accent">
                  Brand enquiries
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="shell select-none">
        <Wordmark className="wordmark-fit" />
      </div>

      <div className="shell">
        <div className="label flex flex-col gap-3 border-t border-rule pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {site.year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
