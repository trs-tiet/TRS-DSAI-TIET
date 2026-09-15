// ---------------------------------------------------------------------------
// ACCOMMODATION & TRAVEL
// Distances/routes are sourced from TIET's official "Reaching TIET" page and
// general travel references — verify current pricing/availability and
// on-campus booking contact details closer to the event.
// ---------------------------------------------------------------------------

export const onCampusStay = [
  {
    name: "TIET Guest House",
    audience: "Faculty & industry delegates",
    note: "Bookable through the organizing committee — contact for availability.",
  },
  {
    name: "Student Hostels",
    audience: "Student participants",
    note: "Limited seats, allocated through the organizing committee on a first-come basis.",
  },
];

export const nearbyHotels = [
  {
    name: "OYO Hotel Yellow Stone",
    note: "Bhadson Road, near Bhakra Canal — roughly 0.7 km from campus, the closest budget option.",
  },
  {
    name: "Clarion Inn Amps",
    note: "Arjan Complex, Main Sirhind Road — a business hotel about 3.9 km from campus.",
  },
  {
    name: "Neemrana's Baradari Palace",
    note: "A restored 19th-century heritage property inside Baradari Gardens, about 4 km from campus.",
  },
  {
    name: "Hotel Grand Park",
    note: "Model Town, roughly 4 km from campus.",
  },
];

export type TravelRoute = {
  mode: string;
  detail: string;
};

export const travelRoutes: { title: string; routes: TravelRoute[] }[] = [
  {
    title: "By Air",
    routes: [
      {
        mode: "Nearest airport",
        detail:
          "Chandigarh International Airport (IXC) — approximately 63 km, roughly 1.5 hours by road from Patiala.",
      },
      {
        mode: "Connectivity",
        detail:
          "Chandigarh is well connected to Delhi, Mumbai, Bengaluru, and other major Indian cities via IndiGo, Air India, Vistara, and SpiceJet.",
      },
      {
        mode: "International travellers",
        detail:
          "Delhi's Indira Gandhi International Airport (~250 km) is the nearest major international hub.",
      },
    ],
  },
  {
    title: "By Rail",
    routes: [
      {
        mode: "Patiala Railway Station",
        detail:
          "Patiala has its own railway station, connected to Delhi, Ambala, Amritsar, Bathinda, and Kalka.",
      },
      {
        mode: "From Delhi",
        detail: "Direct trains from New Delhi to Patiala take roughly 5 hours.",
      },
    ],
  },
  {
    title: "By Road",
    routes: [
      { mode: "From Delhi", detail: "~250 km, approximately 5 hours by car via NH-7, through Ambala." },
      { mode: "From Chandigarh", detail: "~63 km, approximately 1.5 hours by car via Rajpura." },
      { mode: "From Ambala Cantt.", detail: "~60 km, approximately 1–1.5 hours by car." },
      {
        mode: "Buses",
        detail: "PRTC (Punjab Roadways) and private buses connect Patiala with Delhi, Chandigarh, and Ambala frequently.",
      },
    ],
  },
];
