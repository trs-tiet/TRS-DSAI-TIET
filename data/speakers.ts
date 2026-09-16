// ---------------------------------------------------------------------------
// SPEAKERS
// Add/remove/edit entries here — the Speakers page and Home teaser both read
// from this file. `photo` should point to a file in /public/images/speakers/
// (falls back to initials if the file doesn't exist yet).
// ---------------------------------------------------------------------------

export type Speaker = {
  name: string;
  affiliation: string;
  type: "Academic" | "Industry";
  photo?: string;
  bio?: string;
};

export const academicSpeakers: Speaker[] = [
  {
    name: "Prof. Tim Miller",
    affiliation: "University of Queensland, Australia",
    type: "Academic",
    photo: "/images/speakers/tim-miller.jpg",
    bio: "Placeholder bio — replace with the speaker's actual research focus and background.",
  },
  {
    name: "Prof. Tirthankar Bandyopadhyay",
    affiliation: "CSIRO, Brisbane, Australia",
    type: "Academic",
    photo: "/images/speakers/tirthankar-bandyopadhyay.jpg",
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
    name: "Dr. Sitikantha Roy",
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
];

export const industrySpeakers: Speaker[] = [
  {
    name: "Prof. Ekta Singla",
    affiliation: "Director, SOR, NAMTECH · TRS Secretary",
    type: "Industry",
    photo: "/images/speakers/ekta-singla.jpg",
  },
  {
    name: "Mr. Rajesh Kumar",
    affiliation: "Head - Advanced Robotics, Addverb",
    type: "Industry",
    photo: "/images/speakers/rajesh-kumar.jpg",
  },
  {
    name: "Dr. Pranav Lad",
    affiliation: "Senior Engineer, MathWorks",
    type: "Industry",
    photo: "/images/speakers/pranav-lad.jpg",
  },
  {
    name: "Prof. Harish PM",
    affiliation: "IIT Gandhinagar · Director, AB6 Robotics",
    type: "Industry",
    photo: "/images/speakers/harish-pm.jpg",
  },
  {
    name: "Mr. Aditya Marathe",
    affiliation: "CEO, Nugenix Robotics",
    type: "Industry",
    photo: "/images/speakers/aditya-marathe.jpg",
  },
  {
    name: "Mr. Puneet Jindal",
    affiliation: "CEO, Labellerr AI",
    type: "Industry",
    photo: "/images/speakers/puneet-jindal.jpg",
  },
];

export const allSpeakers: Speaker[] = [...academicSpeakers, ...industrySpeakers];
