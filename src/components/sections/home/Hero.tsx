import { home } from "@/content/home";
import { site } from "@/content/site";
import { rich } from "@/lib/rich";
import { EditorialImage } from "@/components/media/EditorialImage";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  const { hero } = home;

  return (
    <section
      data-theme="dark"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <EditorialImage id="hero" fill brief="corner" priority sizes="100vw" />
      {/* Keeps the headline legible over any photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30"
      />

      <div className="shell relative pb-8 pt-44 md:pb-12 md:pt-52">
        <p className="label mb-5 flex items-center gap-3 md:mb-7">
          <span aria-hidden="true" className="size-1.5 bg-accent" />
          {hero.eyebrow}
          <span className="hidden text-paper/60 sm:inline">· {site.location}</span>
        </p>

        <h1 className="display display-2xl">
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {rich(line, "text-accent")}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-7 border-t border-paper/25 pt-6 md:mt-12 md:pt-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="lede max-w-[34rem] text-paper/85 lg:col-span-6">{hero.intro}</p>
          <div className="grid gap-3 min-[400px]:grid-cols-2 sm:flex lg:col-span-6 lg:justify-end">
            <ButtonLink href={hero.primaryCta.href} variant="solid" className="sm:min-w-48">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline" className="sm:min-w-48">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
