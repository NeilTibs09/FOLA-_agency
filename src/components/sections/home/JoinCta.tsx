import { home } from "@/content/home";
import { rich } from "@/lib/rich";
import { EditorialImage } from "@/components/media/EditorialImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function JoinCta() {
  const { join } = home;

  return (
    <section data-theme="dark" className="relative overflow-hidden">
      <EditorialImage id={join.image} fill brief="none" sizes="100vw" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />

      <div className="shell relative py-24 md:py-36 xl:py-44">
        <Eyebrow number="06">{join.label}</Eyebrow>

        <Reveal>
          <h2 className="display display-2xl mt-8 md:mt-10">
            {rich(join.headline, "text-accent")}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="lede max-w-[30rem] text-paper/85">{join.body}</p>
            <ButtonLink href={join.cta.href} variant="accent" className="mt-8 w-full sm:w-auto sm:min-w-64">
              {join.cta.label}
            </ButtonLink>
          </div>

          <ol className="md:col-span-6 md:col-start-7">
            {join.steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-t border-paper/30 py-4 last:border-b md:grid-cols-[3rem_9rem_1fr] md:items-baseline md:py-5"
              >
                <span className="label pt-1 text-paper/70 md:pt-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-2xl md:text-3xl">{step.title}</h3>
                <p className="col-start-2 mt-1 text-paper/80 md:col-start-auto md:mt-0">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
