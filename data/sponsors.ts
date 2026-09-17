// ---------------------------------------------------------------------------
// SPONSORS
// The brochure lists the same 6 industrial exhibition partners as sponsors
// ("INDUSTRIAL EXHIBITION/ HANDS-ON SESSIONS (SPONSORS)"), so this mirrors
// data/exhibitors.ts. Add separate financial/in-kind sponsors here later if
// any come on board beyond these six.
// ---------------------------------------------------------------------------

import { exhibitors } from "./exhibitors";

export type SponsorTier = "Sponsor";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  focus: string;
  description: string;
  logo?: string;
  url?: string;
};

export const sponsors: Sponsor[] = exhibitors.map((e) => ({
  name: e.name,
  tier: "Sponsor" as const,
  focus: e.focus,
  description: e.description,
  logo: e.logo,
}));

export const sponsorTiers: SponsorTier[] = ["Sponsor"];
