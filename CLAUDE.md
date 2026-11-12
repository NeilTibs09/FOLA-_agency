# FOLA — project guide

FOLA is a premium lifestyle and creative marketing collective based in South Africa.
This repository holds its marketing website (Version 1).

Two equally important sides of the business:

- **For brands:** brand marketing, content creation, model and influencer campaigns,
  product launches, social campaigns, physical activations, lifestyle experiences.
- **For talent:** a community of models, content creators, influencers and brand
  ambassadors, with campaign opportunities, events and travel experiences.

The site must feel like an established premium lifestyle brand, not an agency template:
premium, luxury-inspired, contemporary, youthful, editorial, aspirational, culturally
connected. Mobile presentation is the priority.

## Status

Planning approved in principle; implementation has not started. See "Phases" below.
Update this section as phases complete.

## Version 1 scope

In scope:

| Route | Purpose |
|---|---|
| `/` | Home: hero, dual entry (For Brands / For Talent), highlights |
| `/lifestyle` | The FOLA Lifestyle: community, experiences, editorial stories |
| `/what-we-do` | Commercial services and brand collaboration |
| `/join` | Membership application (application, team review, approval email) |
| `/shop` | Merchandise showcase with Coming Soon and "notify me" |
| `/contact` | Brand enquiry form and social links |
| `/privacy`, `/terms` | Draft legal pages (placeholders pending legal review) |

Explicitly out of scope for V1. Do not add without the owner's approval:

- Member login, accounts or dashboard
- Admin or application-review dashboard
- Checkout, payments or Shopify integration
- CMS
- Any integration beyond Vercel, Supabase and Resend

Keep it focused, polished and maintainable. Do not over-engineer.

## Stack

- Next.js (App Router), TypeScript, React
- Tailwind CSS with design tokens as CSS variables
- Motion for animation; Zod for validation
- Supabase: Postgres table for applications, private Storage bucket for optional photos
- Resend: transactional email
- Vercel: hosting and preview deployments
- Package manager: pnpm

## Folder structure

```
src/
  app/                 Routes listed above, plus api/ for webhooks
  components/
    ui/                Button, Input, Select, Checkbox, Tag, Wordmark
    layout/            Header, MobileMenu, Footer, Section
    media/             EditorialImage, VideoLoop, Marquee
    sections/          Hero, DualEntry, ServiceList, ProductCard, ...
    forms/             JoinForm, EnquiryForm
  content/             Typed content: copy, services, products, image manifest
  lib/                 env, validation schemas, supabase, email, seo
  styles/              tokens and global CSS
public/                fonts, placeholder images, video, icons
supabase/migrations/   SQL for tables, policies and buckets
```

## Design system

Concept: **FOLA as a magazine.** Numbered sections (01–06), full-bleed imagery,
captions and credits. The two sides of the business are a day/night duality: the
brand-facing pages (What We Do, Contact) sit on white; the lifestyle and talent pages
(Lifestyle, Join) sit on black. Every section component accepts a `theme` of
`light` or `dark`; never fork a component per theme.

Colour:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0A0A` | Text on light, dark backgrounds |
| `paper` | `#FFFFFF` | Light backgrounds, wordmark background |
| `bone` | `#F4F1EC` | Warm neutral surface |
| `stone-400` / `stone-600` | neutral greys | Secondary text, rules |
| `accent` | `#F04432` (vermilion) | Primary accent |

- The design stays predominantly black, white and neutral.
- Vermilion is used sparingly: links, hover and focus states, one highlight per screen.
- Other vibrant colours appear only where they complement photography, never as UI chrome.
- Check text contrast: vermilion on white is for large text and graphic elements,
  not small body copy.

Typography:

- Headlines: tight uppercase grotesk, very large, fluid sizing with `clamp()`.
- Accent words: italic editorial serif.
- Body and UI: grotesk.
- Open-source fonts loaded through `next/font`; no layout shift.

Wordmark: plain black "FOLA" on white (white on black in dark theme), one `Wordmark`
component used everywhere.

Motion: slow image reveals, text rising on scroll, subtle hovers. Honour
`prefers-reduced-motion`. No scroll-jacking.

Mobile first: design at 390px before desktop. 4:5 and 9:16 media, swipeable galleries,
full-screen menu, persistent thumb-reach CTA (Apply / Enquire), 16px side gutters,
minimum 44px touch targets.

## Imagery

FOLA has no photography or video yet.

- Use licensed editorial stock photography as placeholders, reflecting diverse South
  African models and creators: beaches, nightlife, restaurants, travel, African
  destinations, brand activations.
- **Never generate AI images of people, and never present anyone as a FOLA member.**
- Every placeholder is registered in `src/content/images.ts` with `placeholder: true`,
  its source and licence. `EditorialImage` shows a small visible "Placeholder" tag for
  those entries. Replacing content means swapping the file and flipping the flag.
- No testimonials, member names or client logos are invented.

## Join FOLA: application flow

1. Applicant submits the form on `/join`.
2. Server validates, stores a row in Supabase `applications` with status `pending`,
   emails the FOLA team the full application and sends the applicant a confirmation.
3. The team reviews in the Supabase table and sets status to `approved` or `declined`.
4. The outcome email is sent to the applicant. (Mechanism to be confirmed: automatic
   via a Supabase database webhook to a secret-protected route, or sent manually.)

Fields:

| Field | Required |
|---|---|
| Full name | Yes |
| Date of birth | Yes |
| Email address | Yes |
| WhatsApp number | Yes |
| Location | Yes |
| Membership category: model, content creator, influencer, brand ambassador, other | Yes |
| Instagram handle | Yes |
| TikTok handle | No |
| Short personal introduction | Yes |
| Why they want to join FOLA | Yes |
| Portfolio or social media links | Yes |
| Photos (up to 3, JPG/PNG/WebP, size-limited) | No |

Age: date of birth is collected, but **no minimum age is enforced until the owner
confirms the rule.** Minimum age is a single config value (`MIN_APPLICANT_AGE`, unset
by default). Do not hardcode 18+.

Consent (each a separate, unticked checkbox; record timestamp and wording version):

- Data collection and processing: required.
- Image-use permission: required only when photos are uploaded.
- Marketing communications: optional.

Storage rules: row-level security on, no public policies; all writes go through the
server with the service-role key. Photos go to a private bucket.

Spam: honeypot field, minimum fill time and basic rate limiting. No captcha service
unless spam becomes a problem.

## Contact

Brand enquiry form (name, company, email, phone, service interest, budget range
optional, message) sent to the team by email, with a confirmation to the sender.
Enquiries are not stored in the database in V1. Social links come from one config file.

## Shop

Static showcase of merchandise concepts with a Coming Soon message and an email
"notify me" capture. No cart, checkout or Shopify. Product data lives in
`src/content/products.ts` so a later Shopify phase can replace the source.

## Legal drafts

Privacy policy, data-collection consent and image-use permission wording are drafted
as **placeholders for legal review**. Each draft page carries a visible "Draft, pending
legal review" notice until the owner confirms sign-off. Never describe the site or the
wording as legally approved or POPIA-compliant.

## Copy

Written in-repo for the owner's review. Voice: confident, premium, youthful,
editorial, professional. Short sentences, no agency clichés, no invented statistics,
clients or results. South African English spelling. All copy lives in `src/content/`
rather than inline in components.

## Environment variables

Never commit secrets. `.env.local` is git-ignored; `.env.example` lists every variable
with no values. All variables are read and validated in `src/lib/env.ts`. Only
variables prefixed `NEXT_PUBLIC_` may reach the browser; the Supabase service-role key
and Resend key are server-only.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only database and storage access |
| `RESEND_API_KEY` | Server-only email sending |
| `EMAIL_FROM` | Verified sender address |
| `APPLICATIONS_NOTIFY_TO` | Team inbox for applications |
| `ENQUIRIES_NOTIFY_TO` | Team inbox for brand enquiries |
| `WEBHOOK_SECRET` | Verifies Supabase status-change webhook (if used) |
| `MIN_APPLICANT_AGE` | Optional; unset until the age rule is confirmed |

If integration variables are missing in development, forms log the payload instead of
failing, so the site can be built and reviewed before accounts exist.

## Conventions

- TypeScript strict; no `any`.
- Server components by default; `"use client"` only where interaction needs it.
- Tokens only: no hardcoded colours or font sizes in components.
- Accessibility: semantic HTML, visible focus states, labelled form fields, alt text
  on every image, WCAG AA contrast.
- Images through `next/image` with explicit dimensions or aspect ratios.
- Verify changes in a browser at 390px and 1440px before calling them done.

## Phases

1. **Foundation:** project setup, tokens, fonts, wordmark, header, footer, mobile menu,
   placeholder image system.
2. **Home:** hero, dual entry, core sections. Creative sign-off point.
3. **Content pages:** Lifestyle, What We Do, Shop.
4. **Forms:** Join application (database, uploads, emails, consent) and Contact enquiry.
5. **Legal and polish:** draft legal pages, motion pass, accessibility, SEO, performance.
6. **Launch:** Vercel, domain, environment variables, device testing.

## Open decisions

- Minimum applicant age (and how applicants under 18 are handled, if allowed).
- Approval email: automatic on status change, or sent manually by the team.
- Domain name, sender email address, team inbox addresses, social handles.
- Legal review of the draft privacy, consent and image-use wording.
