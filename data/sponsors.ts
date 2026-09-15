// ---------------------------------------------------------------------------
// SPONSORS
// Separate from /data/exhibitors.ts — exhibitors run hands-on workshops,
// sponsors provide financial/in-kind support. Add tiers and logos as they're
// confirmed.
// ---------------------------------------------------------------------------

export type SponsorTier = "Title" | "Gold" | "Silver" | "Supporting";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  logo?: string; // path in /public/images/logos/
  url?: string;
};

// Empty starter — add sponsors here as they're confirmed, e.g.:
// { name: "Example Corp", tier: "Gold", logo: "/images/logos/example.svg" }
export const sponsors: Sponsor[] = [];

export const sponsorTiers: SponsorTier[] = ["Title", "Gold", "Silver", "Supporting"];
