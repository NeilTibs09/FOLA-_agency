/**
 * Slow horizontal ticker of large words. The second copy is decorative and
 * hidden from assistive technology. Static for reduced-motion users.
 */
export function Marquee({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center">
          <span className={`display display-lg px-5 md:px-8 ${i % 2 ? "text-outline" : ""}`}>
            {item}
          </span>
          <span aria-hidden="true" className="size-2.5 rounded-full bg-accent md:size-3.5" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-rule py-5 md:py-7">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
