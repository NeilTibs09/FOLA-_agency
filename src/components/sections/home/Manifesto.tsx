import { home } from "@/content/home";
import { rich } from "@/lib/rich";
import { Section } from "@/components/layout/Section";
import { Marquee } from "@/components/media/Marquee";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  const { manifesto, marquee } = home;

  return (
    <Section theme="light" className="!pb-0">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
        <Eyebrow number="01" className="md:col-span-3">
          {manifesto.label}
        </Eyebrow>

        <div className="md:col-span-9">
          <Reveal>
            <p className="statement max-w-[24ch]">{rich(manifesto.statement)}</p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-20 md:max-w-3xl md:gap-12">
            {manifesto.columns.map((column, i) => (
              <Reveal key={column.title} delay={i * 120}>
                <div className="border-t border-fg pt-4">
                  <h3 className="label">{column.title}</h3>
                  <p className="mt-4 text-muted">{column.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <Marquee items={marquee} />
      </div>
    </Section>
  );
}
