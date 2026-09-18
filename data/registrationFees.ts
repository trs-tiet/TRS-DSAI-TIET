// ---------------------------------------------------------------------------
// REGISTRATION FEE STRUCTURE
// Sourced from the official registration fee structure sheet. Edit the rows
// below if fees change — rendered as a real table (RegistrationFeeTable) on
// the About page and FAQ page so it stays crisp at any screen size.
// ---------------------------------------------------------------------------

export type FeeRow = {
  category: string;
  nonTrsMembers: string;
  nonTrsTotal: string;
  trsMembers: string;
  trsTotal: string;
};

export const feeRows: FeeRow[] = [
  {
    category: "Industry Delegates",
    nonTrsMembers: "₹10,000",
    nonTrsTotal: "₹11,800",
    trsMembers: "₹8,000",
    trsTotal: "₹9,440",
  },
  {
    category: "Faculty Members & Research Scientists",
    nonTrsMembers: "₹5,000",
    nonTrsTotal: "₹5,900",
    trsMembers: "₹4,000",
    trsTotal: "₹4,720",
  },
  {
    category: "Research Scholars & Students",
    nonTrsMembers: "₹2,500",
    nonTrsTotal: "₹2,950",
    trsMembers: "₹2,000",
    trsTotal: "₹2,360",
  },
  {
    category: "TIET Patiala Students",
    nonTrsMembers: "₹1,500",
    nonTrsTotal: "₹1,770",
    trsMembers: "₹1,000",
    trsTotal: "₹1,180",
  },
];

export const feeNotes: string[] = [
  "Access to all keynote lectures, technical sessions, exhibition area, and networking events.",
  "Workshop kit, tea/coffee, and working lunch for all days.",
  "Registration is mandatory for participation in the workshop.",
  "Registration fee once paid will not be refunded.",
  "Registration fee does not include accommodation or travel.",
  "All participants will receive an e-certificate upon successful completion of the workshop.",
];
