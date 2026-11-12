import { home } from "@/content/home";
import { rich } from "@/lib/rich";
import { Section } from "@/components/layout/Section";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reel } from "@/components/media/Reel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function LifestyleReel() {
  const { lifestyle } = home;

  return (
    <Section theme="dark">
      <div className="shell grid gap-8 md:grid-cols-12 md:gap-8">
        <Eyebrow number="03" className="md:col-span-3">
          {lifestyle.label}
        </Eyebrow>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="display display-xl">{rich(lifestyle.headline, "text-accent")}</h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p className="lede max-w-[32rem] text-muted">{lifestyle.body}</p>
            <TextLink href={lifestyle.cta.href} className="self-start md:self-auto">
              {lifestyle.cta.label}
            </TextLink>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <Reel label="Scenes from the FOLA lifestyle">
          {lifestyle.scenes.map((scene, i) => (
            <li
              key={scene.title}
              className="w-[76vw] shrink-0 snap-start sm:w-[44vw] lg:w-[30vw] xl:w-[23.5vw]"
            >
              <figure>
                <div className="relative aspect-[4/5]">
                  <EditorialImage
                    id={scene.image}
                    fill
                    sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 30vw, (min-width: 640px) 44vw, 76vw"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-rule pt-3">
                  <span className="display text-2xl md:text-3xl">{scene.title}</span>
                  <span className="label text-right text-muted">
                    {String(i + 1).padStart(2, "0")} · {scene.caption}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </Reel>
      </div>
    </Section>
  );
}
