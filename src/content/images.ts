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
    src: "/images/placeholder/for-talent.jpg",
    width: 1600,
    height: 2455,
    alt: "A model in a red dress and black gloves standing on a rooftop car park",
    focal: "46% 40%",
    credit:
      "Photo by Tide_trasher_x (unsplash.com/@tide_trasher_x) on Unsplash. Source: https://unsplash.com/photos/uPW8-aYm_qA. Unsplash Licence (free to use).",
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
    src: "/images/placeholder/life-dining.jpg",
    width: 1600,
    height: 2509,
    alt: "Red wine being poured into a glass at a tasting table, guests seated behind",
    focal: "45% 45%",
    credit:
      "Photo by Omar (unsplash.com/@ommyjay) on Unsplash. Franschhoek, South Africa. Source: https://unsplash.com/photos/1YUTZgzGu04. Unsplash Licence (free to use).",
    placeholder: true,
    frame: "PL—06",
    brief: "Long lunch. Full table, glasses raised, late sun.",
    tone: "sea",
  },
  lifeTravel: {
    src: "/images/placeholder/life-travel.jpg",
    width: 1600,
    height: 2400,
    alt: "Chapman's Peak Drive above the Atlantic at sunset",
    focal: "45% 50%",
    credit:
      "Photo by Tobias Reich (unsplash.com/@electerious) on Unsplash. Chapman's Peak, Cape Town. Source: https://unsplash.com/photos/jKPixLYKZuc. Unsplash Licence (free to use).",
    placeholder: true,
    frame: "PL—07",
    brief: "On the road. Coastal pass, windows down, bags in the back.",
    tone: "dusk",
  },
  lifeRooftop: {
    src: "/images/placeholder/life-rooftop.jpg",
    width: 1600,
    height: 2400,
    alt: "A roof terrace in Cape Town facing Lion's Head at dusk",
    focal: "50% 72%",
    credit:
      "Photo by Catherine Zaidova (unsplash.com/@k_zaidova) on Unsplash. Cape Town, South Africa. Source: https://unsplash.com/photos/_UUw2DTKvB0. Unsplash Licence (free to use).",
    placeholder: true,
    frame: "PL—08",
    brief: "Rooftop sundowners. Skyline, silhouettes, last light.",
    tone: "sea",
  },
  lifeActivation: {
    src: "/images/placeholder/life-activation.jpg",
    width: 1600,
    height: 2416,
    alt: "A model in a pale dress and white sunglasses walking a runway, the audience in darkness",
    focal: "50% 58%",
    credit:
      "Photo by Duane Mendes (unsplash.com/@duanemendes) on Unsplash. Dubai. Source: https://unsplash.com/photos/p-gGii_xGK8. Unsplash Licence (free to use).",
    placeholder: true,
    frame: "PL—09",
    brief: "Launch night. Branded space, guests arriving, cameras out.",
    tone: "night",
  },
  joinCta: {
    src: "/images/placeholder/join-cta.jpg",
    width: 2400,
    height: 1600,
    alt: "A group of women in evening wear posed together on and around a sofa",
    focal: "45% 38%",
    credit:
      "Photo by Christian Agbede (unsplash.com/@chriscreations__) on Unsplash. Source: https://unsplash.com/photos/nFFDSBCZt00. Unsplash Licence (free to use).",
    placeholder: true,
    frame: "PL—10",
    brief: "The collective. A group in motion, dusk, city behind.",
    tone: "night",
  },
} satisfies Record<string, SiteImage>;

export type ImageId = keyof typeof images;
