/**
 * Image manifest. Every photograph on the site is registered here.
 *
 * FOLA photography has not been shot yet, so every entry is a placeholder.
 * An entry without `src` renders as a designed plate showing its shot brief.
 * To use a real photograph: add the file under /public/images, set `src`,
 * `width`, `height` and an accurate `alt`, then set `placeholder: false`.
 * Licensed stock used in the interim keeps `placeholder: true` plus a `credit`.
 */
export type PlateTone = "night" | "dusk" | "sea" | "sand" | "studio";

export type SiteImage = {
  /** Path under /public. Omit while no photograph exists. */
  src?: string;
  width?: number;
  height?: number;
  /** Describes the photograph. Used as alt text once `src` is set. */
  alt: string;
  placeholder: boolean;
  /** Frame reference shown on the plate. */
  frame: string;
  /** What the final photograph should show. Doubles as the shoot list. */
  brief: string;
  tone: PlateTone;
  /** CSS object-position keeping the subject in frame when cropped. */
  focal?: string;
  /** Source and licence for interim stock photography. */
  credit?: string;
};

export const images = {
  hero: {
    alt: "Creators on a beach at golden hour",
    placeholder: true,
    frame: "PL—01",
    brief: "Golden hour on the coast. Three creators, unposed, sea behind them.",
    tone: "dusk",
  },
  forBrands: {
    alt: "A campaign shoot in progress",
    placeholder: true,
    frame: "PL—02",
    brief: "On set. Photographer, model and product, mid-shot.",
    tone: "studio",
  },
  forTalent: {
    alt: "Editorial portrait of a model",
    placeholder: true,
    frame: "PL—03",
    brief: "Editorial portrait. Direct gaze, hard light, plain backdrop.",
    tone: "night",
  },
  lifeBeach: {
    alt: "Friends on a beach in the afternoon sun",
    placeholder: true,
    frame: "PL—04",
    brief: "Beach club afternoon. Friends, towels, salt in the air.",
    tone: "sand",
  },
  lifeNightlife: {
    alt: "Friends at a bar late at night",
    placeholder: true,
    frame: "PL—05",
    brief: "After dark. Low light, flash on, the back table.",
    tone: "night",
  },
  lifeDining: {
    alt: "A long lunch table with friends",
    placeholder: true,
    frame: "PL—06",
    brief: "Long lunch. Full table, glasses raised, late sun.",
    tone: "sea",
  },
  lifeTravel: {
    alt: "A traveller at a coastal viewpoint",
    placeholder: true,
    frame: "PL—07",
    brief: "On the road. Coastal pass, windows down, bags in the back.",
    tone: "dusk",
  },
  lifeRooftop: {
    alt: "A rooftop gathering at sunset",
    placeholder: true,
    frame: "PL—08",
    brief: "Rooftop sundowners. Skyline, silhouettes, last light.",
    tone: "sea",
  },
  lifeActivation: {
    alt: "Guests at a brand launch event",
    placeholder: true,
    frame: "PL—09",
    brief: "Launch night. Branded space, guests arriving, cameras out.",
    tone: "night",
  },
  joinCta: {
    alt: "A group of friends walking together at dusk",
    placeholder: true,
    frame: "PL—10",
    brief: "The collective. A group in motion, dusk, city behind.",
    tone: "night",
  },
  shopCap: {
    alt: "A FOLA cap",
    placeholder: true,
    frame: "PL—11",
    brief: "Product still. Cap, embroidered wordmark, soft shadow.",
    tone: "studio",
  },
  shopTee: {
    alt: "A FOLA T-shirt",
    placeholder: true,
    frame: "PL—12",
    brief: "Product still. Heavyweight tee, chest wordmark.",
    tone: "sand",
  },
  shopTote: {
    alt: "A FOLA tote bag",
    placeholder: true,
    frame: "PL—13",
    brief: "Product still. Canvas tote, carried, in daylight.",
    tone: "studio",
  },
} satisfies Record<string, SiteImage>;

export type ImageId = keyof typeof images;
