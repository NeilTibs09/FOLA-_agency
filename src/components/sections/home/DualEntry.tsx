import Link from "next/link";
import { home } from "@/content/home";
import type { ImageId } from "@/content/images";
import { rich } from "@/lib/rich";
import type { Theme } from "@/components/layout/Section";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";

type Side = {
  kicker: string;
  headline: string;
  body: string;
  cta: { label: string; href: string };
  image: ImageId;
};

/** The two sides of FOLA, side by side: day for brands, night for talent. */
export function DualEntry() {
  const { dual } = home;

  return (
    <section aria-label={dual.label} className="grid md:grid-cols-2">
      <Panel side={dual.brands} theme="bone" number="02a" />
      <Panel side={dual.talent} theme="dark" number="02b" />
    </section>
  );
}

function Panel({ side, theme, number }: { side: Side; theme: Theme; number: string }) {
  return (
    <div data-theme={theme}>
      <Link href={side.cta.href} className="group block h-full px-4 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
        <Reveal>
          <p className="label flex items-center justify-between">
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="size-1.5 bg-accent" />
              {side.kicker}
            </span>
            <span className="text-muted">{number}</span>
          </p>

          <div className="relative mt-6 aspect-[4/5] overflow-hidden md:mt-8">
            <EditorialImage
              id={side.image}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
            />
          </div>

          <h2 className="display display-lg mt-8 md:mt-10">{rich(side.headline)}</h2>
          <p className="lede mt-5 max-w-[30rem] text-muted">{side.body}</p>

          <span className="label mt-8 inline-flex min-h-11 items-center gap-3 border-b border-fg pb-1 transition-colors duration-300 group-hover:border-accent">
            {side.cta.label}
            <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent" />
          </span>
        </Reveal>
      </Link>
    </div>
  );
}
