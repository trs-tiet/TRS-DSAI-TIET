// ---------------------------------------------------------------------------
// ORGANIZING COMMITTEE
// Sourced from the final TRS-DSAI 2026 brochure.
// ---------------------------------------------------------------------------

export type Organizer = {
  name: string;
  role: string;
  photo?: string;
};

export const organizers: Organizer[] = [
  {
    name: "Prof. Padmakumar Nair",
    role: "Chief Patron · Vice Chancellor, TIET Patiala",
    photo: "/images/organizers/padmakumar-nair.jpg",
  },
  {
    name: "Prof. Ajay Batish",
    role: "Patron · Pro Vice Chancellor, TIET Patiala",
    photo: "/images/organizers/ajay-batish.jpg",
  },
  {
    name: "Prof. Inderveer Chana",
    role: "Workshop Chair · Joint Director, DSAI, TIET Patiala",
    photo: "/images/organizers/inderveer-chana.jpg",
  },
  {
    name: "Prof. Ashish Singla",
    role: "Convener · Professor, TIET Patiala",
    photo: "/images/organizers/ashish-singla.jpg",
  },
  {
    name: "Dr. Sachin Kansal",
    role: "Co-Convener · Associate Professor, TIET Patiala",
    photo: "/images/organizers/sachin-kansal.jpg",
  },
];
