// ---------------------------------------------------------------------------
// ORGANIZING COMMITTEE
// Starting point reuses the TRS/COE-DSAI people already listed as industrial
// speakers. Add the rest of the committee here as names are finalized.
// ---------------------------------------------------------------------------

export type Organizer = {
  name: string;
  role: string;
  photo?: string;
};

export const organizers: Organizer[] = [
  {
    name: "Prof. Ekta Singla",
    role: "Director, SOR, NAMTECH · TRS Secretary",
    photo: "/images/speakers/ekta-singla.jpg",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Head - Advanced Robotics, Addverb",
    photo: "/images/speakers/rajesh-kumar.jpg",
  },
];
