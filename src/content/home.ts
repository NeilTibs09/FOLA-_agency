import type { ImageId } from "./images";

/**
 * Homepage copy. Words wrapped in *asterisks* are set in the italic serif.
 */
export const home = {
  hero: {
    eyebrow: "Lifestyle & creative marketing collective",
    headline: ["The lifestyle", "*is* the", "campaign."],
    intro:
      "FOLA connects brands with the models, creators and tastemakers shaping South African culture: on screen, on set and in the room.",
    primaryCta: { label: "Work with us", href: "/what-we-do" },
    secondaryCta: { label: "Join FOLA", href: "/join" },
  },

  manifesto: {
    label: "The Collective",
    statement:
      "Part creative agency, part *inner circle*. FOLA builds campaigns out of real people, real places and the kind of nights you *hear about* the next morning.",
    columns: [
      {
        title: "For brands",
        body: "We plan and produce marketing that feels lived-in: content, talent, launches and activations with a point of view.",
      },
      {
        title: "For talent",
        body: "We are a home base: a curated community with access to campaigns, events and experiences in South Africa and beyond.",
      },
    ],
  },

  marquee: ["Models", "Creators", "Influencers", "Ambassadors", "Brands", "Experiences"],

  dual: {
    label: "Two sides, one collective",
    brands: {
      kicker: "For brands",
      headline: "Put your brand *in the room*.",
      body: "Campaigns, content, talent and activations, conceived, cast and produced by one team that lives the culture it markets to.",
      cta: { label: "See what we do", href: "/what-we-do" },
      image: "forBrands" as ImageId,
    },
    talent: {
      kicker: "For talent",
      headline: "Get on *the list*.",
      body: "Models, creators, influencers and ambassadors. Membership is by application, and it opens the door to campaigns, events and travel.",
      cta: { label: "Apply to join", href: "/join" },
      image: "forTalent" as ImageId,
    },
  },

  lifestyle: {
    label: "The FOLA Lifestyle",
    headline: "Sun-up to *after dark*.",
    body: "Beach clubs and back tables. Golden hours and late flights. The FOLA lifestyle is the backdrop to everything we make.",
    cta: { label: "Explore the lifestyle", href: "/lifestyle" },
    scenes: [
      { title: "Beach", caption: "Long days on the coast", image: "lifeBeach" },
      { title: "Nightlife", caption: "The right room, the right night", image: "lifeNightlife" },
      { title: "Table", caption: "Lunch that runs into dinner", image: "lifeDining" },
      { title: "Travel", caption: "Out of office, across Africa", image: "lifeTravel" },
      { title: "Rooftop", caption: "Sundowners above the city", image: "lifeRooftop" },
      { title: "Activation", caption: "Where brands come to life", image: "lifeActivation" },
    ] as Array<{ title: string; caption: string; image: ImageId }>,
  },

  services: {
    label: "What We Do",
    headline: "Marketing with a *social life*.",
    body: "Seven services, one team. Brief us on one or build a campaign across all of them.",
    primaryCta: { label: "Start an enquiry", href: "/contact" },
    secondaryCta: { label: "All services", href: "/what-we-do" },
  },

  shop: {
    label: "FOLA Shop",
    status: "Coming soon",
    headline: "The first drop is *on its way*.",
    body: "FOLA essentials are in the works. Considered pieces, made to be worn out.",
    cta: { label: "Preview the shop", href: "/shop" },
  },

  join: {
    label: "Join FOLA",
    headline: "By application *only*.",
    body: "FOLA is a curated community. Tell us who you are and what you do. Our team reviews every application personally.",
    cta: { label: "Apply to join", href: "/join" },
    steps: [
      { title: "Apply", body: "Share your details, your socials and your story." },
      { title: "Review", body: "Our team looks at every application." },
      { title: "Welcome", body: "If it's a fit, you'll hear from us by email." },
    ],
    image: "joinCta" as ImageId,
  },
} as const;
