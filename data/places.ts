// ---------------------------------------------------------------------------
// PLACES TO VISIT
// Real Patiala-area attractions, drawn from general travel references.
// Descriptions are kept short — expand freely, and add photos in
// /public/images/gallery/ or a dedicated folder if you want images per place.
// ---------------------------------------------------------------------------

export type PlaceToVisit = {
  name: string;
  distance?: string;
  description: string;
};

export const placesToVisit: PlaceToVisit[] = [
  {
    name: "Qila Mubarak",
    distance: "~10 km from campus",
    description:
      "The fort complex at the heart of Patiala's founding, built in 1763 by Baba Ala Singh. Its royal chambers carry Patiala-style murals, and an on-site museum houses arms and artefacts from the Patiala state.",
  },
  {
    name: "Sheesh Mahal (Palace of Mirrors)",
    distance: "~11 km from campus",
    description:
      "A 19th-century palace known for intricate mirror-work and frescoes, set beside a lake within the old Motibagh Palace grounds. Parts of the complex have appeared in Hindi films.",
  },
  {
    name: "Baradari Gardens",
    distance: "~9 km from campus",
    description:
      "A large landscaped garden built around the historic Baradari Palace (now a heritage hotel) — a pleasant, unhurried spot for an evening walk.",
  },
  {
    name: "Gurudwara Dukh Niwaran Sahib",
    distance: "~8 km from campus",
    description:
      "One of Patiala's most visited Sikh shrines, with a sarovar (sacred pool) and a calm, welcoming atmosphere regardless of faith.",
  },
  {
    name: "Bir Moti Bagh Wildlife Sanctuary",
    distance: "~12 km from campus",
    description:
      "A forested sanctuary on the city's outskirts, home to blackbuck, wild boar, and a range of resident and migratory birds — best visited in cooler months.",
  },
  {
    name: "Moti Bagh Palace",
    distance: "~10 km from campus",
    description:
      "Once among the largest royal residences in India, now housing the National Institute of Sports — worth a look for the scale of its grounds alone.",
  },
];
