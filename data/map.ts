// ---------------------------------------------------------------------------
// TIET CAMPUS MAP — KEY LOCATIONS
// Sourced from the official TIET Campus Map poster.
// Numbered 1 to 8 matching the map's circular location badges.
// ---------------------------------------------------------------------------

export type MapLocation = {
  id: number;
  name: string;
  category: "Workshop Venues" | "Key Landmarks" | "Dining & Stay" | "Innovation & Research";
  highlight?: string;
  description: string;
  tag?: string;
  landmarksNear?: string;
};

export const campusLocations: MapLocation[] = [
  {
    id: 1,
    name: "Nava Nalanda Library",
    category: "Key Landmarks",
    description:
      "Central academic library of TIET, housing extensive digital learning resources, vast archival research collections, and collaborative study halls.",
    tag: "Central Landmark",
    landmarksNear: "Adjacent to Lecture Complex (LT) & Waterbody Cafe",
  },
  {
    id: 2,
    name: "Lecture Hall Complex (LT & LP blocks)",
    category: "Workshop Venues",
    highlight: "Primary Workshop Venue · LP-108 (Technical Sessions) & LP-109 (Hands-on Masterclasses)",
    description:
      "Main academic hub for TRS-DSAI 2026. Contains LP-108 (Keynote Lectures and Valedictory), LP-109 (MathWorks, Noraxon, and Labellerr AI masterclasses), and LT lecture theatres.",
    tag: "LP-108 · LP-109 · LT",
    landmarksNear: "Central academic core, beside Nava Nalanda Library",
  },
  {
    id: 3,
    name: "Main Auditorium",
    category: "Workshop Venues",
    highlight: "Inaugural Ceremony & Plenary Sessions",
    description:
      "State-of-the-art auditorium equipped with world-class acoustic systems and tiered seating, hosting university ceremonial inaugurations and distinguished assemblies.",
    tag: "Auditorium",
    landmarksNear: "Near CILP, Post Office, and Canteen parking",
  },
  {
    id: 4,
    name: "Kravings Food Court",
    category: "Dining & Stay",
    description:
      "Vibrant central food and refreshment hub featuring diverse multi-cuisine eateries, coffee outlets, and shaded outdoor dining lawns.",
    tag: "Food & Refreshments",
    landmarksNear: "Opposite Central Park & Hostel G/Vasudha Hall",
  },
  {
    id: 5,
    name: "COS Complex (Centre for Outstanding Students)",
    category: "Key Landmarks",
    description:
      "Student cultural forum featuring the Open Air Theatre (OAT), recreational lounges, and spaces for student societies and community events.",
    tag: "OAT & Student Hub",
    landmarksNear: "Adjacent to the Synthetic Running Track and Sports Grounds",
  },
  {
    id: 6,
    name: "BEST Lab",
    category: "Innovation & Research",
    description:
      "Bio-Engineering & Soft Technologies Laboratory, conducting pioneering research in soft robotics, biomechanics, rehabilitation systems, and sensor integration.",
    tag: "Robotics Research",
    landmarksNear: "Near TSLAS and Mechanical Workshop area",
  },
  {
    id: 7,
    name: "Venture Lab (STEP / TIFAC-CORE)",
    category: "Innovation & Research",
    description:
      "Science & Technology Entrepreneur's Park and technology business incubator supporting deep-tech robotics, AI startups, and prototype commercialization.",
    tag: "Incubation & Start-ups",
    landmarksNear: "Beside TSLAS building and CS Block",
  },
  {
    id: 8,
    name: "Guest House",
    category: "Dining & Stay",
    highlight: "Invited Speakers & Dignitary Lodging",
    description:
      "Executive residential guest facility offering premium hospitality, suites, and quiet dining for invited keynote speakers and visiting workshop delegates.",
    tag: "Speaker Stay",
    landmarksNear: "Near Main Audi and campus entrance road",
  },
];
