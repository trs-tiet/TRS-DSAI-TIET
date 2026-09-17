// ---------------------------------------------------------------------------
// SPEAKERS
// Single source of truth, in the EXACT order the final brochure lists them
// (row by row). academicSpeakers/industrialSpeakers below are derived from
// this so they stay in the same relative order automatically.
// ---------------------------------------------------------------------------

export type Speaker = {
  name: string;
  affiliation: string;
  type: "Academic" | "Industrial";
  photo?: string;
  bio?: string;
};

export const speakers: Speaker[] = [
  {
    name: "Prof. Tim Miller",
    affiliation: "University of Queensland, Australia",
    type: "Academic",
    photo: "/images/speakers/tim-miller.jpg",
  },
  {
    name: "Dr. Tirthankar Bandyopadhyay",
    affiliation: "CSIRO, Brisbane, Australia",
    type: "Academic",
    photo: "/images/speakers/tirthankar-bandyopadhyay.jpg",
  },
  {
    name: "Prof. Ahmed Chemori",
    affiliation: "LIRMM, University of Montpellier, France",
    type: "Academic",
    photo: "/images/speakers/ahmed-chemori.jpg",
  },
  {
    name: "Dr. Alok Mukherjee",
    affiliation: "TRS President · CEO, 14Marine Technologies",
    type: "Industrial",
    photo: "/images/speakers/alok-mukherjee.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    affiliation: "Head, Advance Robotics, Addverb",
    type: "Industrial",
    photo: "/images/speakers/rajesh-kumar.jpg",
  },
  {
    name: "Prof. Ashish Dutta",
    affiliation: "IIT Kanpur",
    type: "Academic",
    photo: "/images/speakers/ashish-dutta.jpg",
  },
  {
    name: "Prof. Shyamanta Hazarika",
    affiliation: "IIT Guwahati",
    type: "Academic",
    photo: "/images/speakers/shyamanta-hazarika.jpg",
  },
  {
    name: "Prof. Harish PM",
    affiliation: "IIT Gandhinagar · Director, AB6 Robotics",
    type: "Industrial",
    photo: "/images/speakers/harish-pm.jpg",
  },
  {
    name: "Prof. Sitikantha Roy",
    affiliation: "IIT Delhi",
    type: "Academic",
    photo: "/images/speakers/sitikantha-roy.jpg",
  },
  {
    name: "Dr. Nirav Patel",
    affiliation: "IIT Madras",
    type: "Academic",
    photo: "/images/speakers/nirav-patel.jpg",
  },
  {
    name: "Prof. Ekta Singla",
    affiliation: "Director, SOR, NAMTECH · TRS Secretary",
    type: "Industrial",
    photo: "/images/speakers/ekta-singla.jpg",
  },
  {
    name: "Dr. Anubhav Dogra",
    affiliation: "Senior Robotics Engineer, Humanoid, London",
    type: "Industrial",
    photo: "/images/speakers/anubhav-dogra.jpg",
  },
  {
    name: "Dr. Pranav Lad",
    affiliation: "Senior Engineer, MathWorks",
    type: "Industrial",
    photo: "/images/speakers/pranav-lad.jpg",
  },
  {
    name: "Mr. Aditya Marathe",
    affiliation: "CEO, Nugenix Robotics",
    type: "Industrial",
    photo: "/images/speakers/aditya-marathe.jpg",
  },
  {
    name: "Mr. Puneet Jindal",
    affiliation: "CEO, Labellerr AI",
    type: "Industrial",
    photo: "/images/speakers/puneet-jindal.jpg",
  },
];

export const academicSpeakers: Speaker[] = speakers.filter((s) => s.type === "Academic");
export const industrialSpeakers: Speaker[] = speakers.filter((s) => s.type === "Industrial");
export const allSpeakers: Speaker[] = speakers;
