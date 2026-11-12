import { home } from "@/content/home";
import { services } from "@/content/services";
import { rich } from "@/lib/rich";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  const copy = home.services;

  return (
    <Section theme="light">
      <div className="shell grid gap-8 md:grid-cols-12">
        <Eyebrow number="04" className="md:col-span-3">
          {copy.label}
        </Eyebrow>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="display display-xl">{rich(copy.headline)}</h2>
          </Reveal>
          <p className="lede mt-8 max-w-[32rem] text-muted md:mt-10">{copy.body}</p>
        </div>
      </div>

      <div className="shell mt-12 md:mt-20">
        <ol className="border-t border-fg">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="group grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-2 border-b border-rule py-5 transition-colors duration-300 hover:border-fg md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-7"
            >
              <span className="label pt-1.5 text-muted transition-colors group-hover:text-fg md:col-span-1 md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display display-md transition-transform duration-500 ease-editorial md:col-span-6 md:group-hover:translate-x-3">
                {service.title}
              </h3>
              <p className="col-start-2 max-w-[34rem] text-muted md:col-span-5 md:col-start-auto">
                {service.summary}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-3 sm:flex md:mt-14">
          <ButtonLink href={copy.primaryCta.href} variant="solid" className="sm:min-w-56">
            {copy.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={copy.secondaryCta.href} variant="outline" className="sm:min-w-56">
            {copy.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
