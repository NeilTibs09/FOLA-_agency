/**
 * Single place where environment variables are read.
 * Server-only values must never be imported into client components.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
