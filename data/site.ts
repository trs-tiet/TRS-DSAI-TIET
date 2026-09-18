// ---------------------------------------------------------------------------
// SITE-WIDE CONSTANTS
// Edit this file to update dates, venue, links, and contact info everywhere
// on the site at once.
// ---------------------------------------------------------------------------

export const site = {
  eventName: "TRS-DSAI 2026",
  eventTitle: "Intelligent Systems: The Future of Robotics and AI",
  tagline: "2 Day International Workshop | TRS-DSAI",
  organizer: "The Robotics Society (TRS)",
  partners: ["COE | DSAI, TIET"],

  // ISO date used by the live countdown — update if the event date changes
  eventStartISO: "2026-10-30T09:00:00+05:30",
  eventEndISO: "2026-10-31T18:00:00+05:30",
  dateLabel: "30th – 31st October, 2026",

  venue: {
    name: "TIET, Patiala",
    fullAddress:
      "Thapar Institute of Engineering & Technology, Bhadson Road, Patiala, Punjab, India",
    rooms: "LT-201 & LT-202, CSED",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Thapar%20Institute%20of%20Engineering%20and%20Technology%20Patiala&t=m&z=15&output=embed",
  },

  stats: [
    { value: "100+", label: "Participants" },
    { value: "15", label: "Invited speakers" },
    { value: "6", label: "Industry exhibitions" },
  ],

  registerUrl: "https://forms.gle/NGwSaveazdeNHHXLA",
  brochureUrl: "/docs/trs-dsai-brochure.pdf",

  contact: {
    email: "trs_tiet@thapar.edu",
    secondaryEmail: "coe_dsai@thapar.edu",
    // Add real numbers here, e.g. ["+91 98884 10523"]
    phones: [9888410523] as string[],
  },

  socials: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "YouTube", url: "#" },
  ],

  // Past editions referenced for inspiration / cross-linking
  pastEditions: [
    { label: "AIR 2025", url: "https://advancesinrobotics.com/2025/" },
    { label: "AIR 2023", url: "https://advancesinrobotics.com/2023/" },
  ],
};
