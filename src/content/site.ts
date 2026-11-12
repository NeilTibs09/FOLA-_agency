/**
 * Site-wide settings. Values marked PLACEHOLDER are to be replaced with the
 * real details during Phase 4.
 */
export const site = {
  name: "FOLA",
  title: "FOLA — Lifestyle & Creative Marketing Collective",
  description:
    "FOLA is a South African lifestyle and creative marketing collective connecting brands with models, creators and tastemakers through campaigns, content and experiences.",
  tagline: "A lifestyle and creative marketing collective.",
  location: "South Africa",
  year: "2026",
  // PLACEHOLDER: real enquiry address to be supplied.
  email: null as string | null,
} as const;

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "The FOLA Lifestyle", href: "/lifestyle" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Join FOLA", href: "/join" },
  { label: "FOLA Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

// PLACEHOLDER: set href once the real accounts are confirmed. Entries with a
// null href render as plain text so the site never links to the wrong account.
export const socials: Array<{ label: string; href: string | null }> = [
  { label: "Instagram", href: null },
  { label: "TikTok", href: null },
];
