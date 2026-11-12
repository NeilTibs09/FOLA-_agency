import { home } from "@/content/home";
import { products } from "@/content/products";
import { rich } from "@/lib/rich";
import { Section } from "@/components/layout/Section";
import { ProductArt } from "@/components/media/ProductArt";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function ShopTeaser() {
  const { shop } = home;

  return (
    <Section theme="bone">
      <div className="shell grid gap-8 md:grid-cols-12">
        <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-start md:justify-start md:gap-5">
          <Eyebrow number="05">{shop.label}</Eyebrow>
          <span className="label bg-accent px-2.5 py-1.5 text-ink">{shop.status}</span>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="display display-lg max-w-[14ch]">{rich(shop.headline)}</h2>
          </Reveal>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
            <p className="lede max-w-[30rem] text-muted">{shop.body}</p>
            <TextLink href={shop.cta.href} className="self-start md:self-auto">
              {shop.cta.label}
            </TextLink>
          </div>
        </div>
      </div>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 md:mt-20 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-8 xl:px-12 min-[100rem]:mx-auto min-[100rem]:max-w-[100rem]">
        {products.map((product, i) => (
          <li key={product.name} className="w-[70vw] shrink-0 snap-start sm:w-[44vw] md:w-auto">
            <Reveal delay={i * 100}>
              <div className="group relative aspect-[4/5]">
                <ProductArt kind={product.art} />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-fg pt-3">
                <h3 className="display text-2xl md:text-3xl">{product.name}</h3>
                <span className="label text-muted">{shop.status}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{product.detail}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="shell label mt-8 text-muted md:mt-10">{shop.note}</p>
    </Section>
  );
}
