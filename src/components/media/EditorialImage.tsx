import Image from "next/image";
import { images, type ImageId, type SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  id: ImageId;
  /** Fill the nearest positioned ancestor instead of setting its own box. */
  fill?: boolean;
  /** Where the shot brief sits on a plate. Use "corner" under overlaid text. */
  brief?: "center" | "corner" | "none";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders a photograph from the image manifest. Until a photograph exists,
 * renders a designed plate carrying the shot brief. Anything still marked as
 * a placeholder is visibly tagged so it cannot be mistaken for FOLA content.
 */
export function EditorialImage({
  id,
  fill = false,
  brief = "center",
  sizes = "100vw",
  priority = false,
  className,
}: Props) {
  const image: SiteImage = images[id];

  return (
    <div
      className={cn(
        "isolate overflow-hidden",
        fill ? "absolute inset-0" : "relative",
        image.src && "photo",
        className,
      )}
    >
      {image.src ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: image.focal ?? "50% 50%" }}
          />
          {image.placeholder && (
            <span className="label absolute bottom-3 left-3 z-10 bg-ink/70 px-2 py-1 text-paper backdrop-blur-sm">
              Placeholder
            </span>
          )}
        </>
      ) : (
        <Plate image={image} brief={brief} />
      )}
    </div>
  );
}

function Plate({ image, brief }: { image: SiteImage; brief: Props["brief"] }) {
  return (
    <div
      className="plate"
      data-tone={image.tone}
      role="img"
      aria-label={`Placeholder for a photograph. Brief: ${image.brief}`}
    >
      <span className="plate-mark left-3 top-3 border-l border-t" />
      <span className="plate-mark right-3 top-3 border-r border-t" />
      <span className="plate-mark bottom-3 left-3 border-b border-l" />
      <span className="plate-mark bottom-3 right-3 border-b border-r" />

      {brief === "center" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
          <span className="label opacity-70">Placeholder · {image.frame}</span>
          <p className="max-w-[22ch] font-serif text-[clamp(1.25rem,2.2vw,1.875rem)] italic leading-[1.15]">
            {image.brief}
          </p>
        </div>
      )}

      {brief === "none" && (
        <span className="label absolute right-4 top-4 opacity-70 md:right-8 md:top-8 xl:right-12">
          Placeholder · {image.frame}
        </span>
      )}

      {brief === "corner" && (
        <div className="absolute right-4 top-20 max-w-[15rem] text-right md:right-8 md:top-28 xl:right-12">
          <span className="label opacity-70">Placeholder · {image.frame}</span>
          <p className="mt-2 font-serif text-lg italic leading-tight opacity-90">
            {image.brief}
          </p>
        </div>
      )}
    </div>
  );
}
