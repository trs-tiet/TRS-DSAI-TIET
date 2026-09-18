// ---------------------------------------------------------------------------
// ACCOMMODATION & TRAVEL
// Distances/routes are sourced from TIET's official "Reaching TIET" page and
// general travel references — verify current pricing/availability and
// on-campus booking contact details closer to the event.
//
// bookingUrl is a Booking.com search link for the hotel name (not a
// guaranteed single listing page — Booking.com doesn't expose stable direct
// property IDs without an affiliate integration). mapsUrl opens the location
// directly in Google Maps.
// ---------------------------------------------------------------------------

function bookingSearchUrl(query: string) {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}`;
}

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsDirectionsUrl(origin: string, destination: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

const TIET_QUERY = "Thapar Institute of Engineering and Technology, Patiala";

export const onCampusStay = [
  {
    name: "TIET Guest House",
    audience: "Invited speakers only",
    note: "Reserved for invited speakers and arranged directly by the organizing committee — not available for general delegates or participants.",
  },
  {
    name: "Hostels' Guest Rooms",
    audience: "Invited speakers only",
    note: "Reserved for invited speakers on campus during the workshop — not available for general delegates or participants. See nearby hotels below for other stay options.",
  },
];

export const nearbyHotels = [
  {
    name: "OYO Hotel Yellow Stone",
    note: "Bhadson Road, near Bhakra Canal — roughly 0.7 km from campus, the closest budget option.",
    bookingUrl: bookingSearchUrl("OYO Hotel Yellow Stone Patiala"),
    mapsUrl: mapsSearchUrl("OYO Hotel Yellow Stone Bhadson Road Patiala"),
  },
  {
    name: "Clarion Inn Amps",
    note: "Arjan Complex, Main Sirhind Road — a business hotel about 3.9 km from campus.",
    bookingUrl: bookingSearchUrl("Clarion Inn Amps Patiala"),
    mapsUrl: mapsSearchUrl("Clarion Inn Amps Sirhind Road Patiala"),
  },
  {
    name: "Neemrana's Baradari Palace",
    note: "A restored 19th-century heritage property inside Baradari Gardens, about 4 km from campus.",
    bookingUrl: bookingSearchUrl("Neemrana Baradari Palace Patiala"),
    mapsUrl: mapsSearchUrl("Neemrana's Baradari Palace Patiala"),
  },
  {
    name: "Hotel Grand Park",
    note: "Model Town, roughly 4 km from campus.",
    bookingUrl: bookingSearchUrl("Hotel Grand Park Patiala"),
    mapsUrl: mapsSearchUrl("Hotel Grand Park Model Town Patiala"),
  },
];

export type TravelRoute = {
  mode: string;
  detail: string;
  directionsUrl?: string;
};

export const travelRoutes: { title: string; routes: TravelRoute[] }[] = [
  {
    title: "By Air",
    routes: [
      {
        mode: "Nearest airport",
        detail:
          "Chandigarh International Airport (IXC) — approximately 63 km, roughly 1.5 hours by road from Patiala.",
        directionsUrl: mapsDirectionsUrl("Chandigarh International Airport", TIET_QUERY),
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
        directionsUrl: mapsDirectionsUrl("Indira Gandhi International Airport Delhi", TIET_QUERY),
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
        directionsUrl: mapsDirectionsUrl("Patiala Railway Station", TIET_QUERY),
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
      {
        mode: "From Delhi",
        detail: "~250 km, approximately 5 hours by car via NH-7, through Ambala.",
        directionsUrl: mapsDirectionsUrl("New Delhi", TIET_QUERY),
      },
      {
        mode: "From Chandigarh",
        detail: "~63 km, approximately 1.5 hours by car via Rajpura.",
        directionsUrl: mapsDirectionsUrl("Chandigarh", TIET_QUERY),
      },
      { mode: "From Ambala Cantt.", detail: "~60 km, approximately 1–1.5 hours by car." },
      {
        mode: "Buses",
        detail: "PRTC (Punjab Roadways) and private buses connect Patiala with Delhi, Chandigarh, and Ambala frequently.",
      },
    ],
  },
];
