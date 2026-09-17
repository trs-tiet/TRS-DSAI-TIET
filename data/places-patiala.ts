// ---------------------------------------------------------------------------
// PLACES TO VISIT — IN PATIALA
// Real Patiala-area attractions. `link` points to an official/reference page.
// Photos provided directly and saved under /public/images/places/.
// ---------------------------------------------------------------------------

export type PlaceToVisit = {
  name: string;
  distance?: string;
  description: string;
  link?: string;
  photo?: string;
};

export const placesInPatiala: PlaceToVisit[] = [
  {
    name: "Qila Mubarak",
    distance: "~10 km from campus",
    description:
      "The fort complex at the heart of Patiala's founding, built in 1763 by Baba Ala Singh. Its royal chambers carry Patiala-style murals, and an on-site museum houses arms and artefacts from the Patiala state.",
    link: "https://en.wikipedia.org/wiki/Qila_Mubarak,_Patiala",
    photo: "/images/places/qila-mubarak.jpg",
  },
  {
    name: "Sheesh Mahal (Palace of Mirrors)",
    distance: "~11 km from campus",
    description:
      "A 19th-century palace known for intricate mirror-work and frescoes, set beside a lake within the old Motibagh Palace grounds. Now houses a museum with one of the largest medal collections in the world.",
    link: "https://www.incredibleindia.gov.in/en/punjab/patiala/sheesh-mahal",
    photo: "/images/places/sheesh-mahal.jpg",
  },
  {
    name: "Baradari Gardens",
    distance: "~9 km from campus",
    description:
      "A large landscaped garden built around the historic Baradari Palace (now a heritage hotel) — a pleasant, unhurried spot for an evening walk.",
    link: "https://patiala.nic.in/?p=3362",
    photo: "/images/places/baradari-gardens.jpg",
  },
  {
    name: "Gurudwara Dukh Niwaran Sahib",
    distance: "~8 km from campus",
    description:
      "One of Patiala's most visited Sikh shrines, with a sarovar (sacred pool) and a calm, welcoming atmosphere regardless of faith.",
    link: "https://en.wikipedia.org/wiki/Gurdwara_Dukh_Nivaran_Sahib",
    photo: "/images/places/gurudwara-dukh-niwaran-sahib.jpg",
  },
  {
    name: "Bir Moti Bagh Wildlife Sanctuary",
    distance: "~12 km from campus",
    description:
      "The largest of Patiala's six wildlife sanctuaries, spread over 654 hectares — home to blackbuck, wild boar, spotted deer, and a range of resident and migratory birds.",
    link: "https://www.incredibleindia.gov.in/en/punjab/patiala/bir-moti-bagh-wildlife-sanctuary",
    photo: "/images/places/bir-moti-bagh.jpg",
  },
  {
    name: "Moti Bagh Palace",
    distance: "~10 km from campus",
    description:
      "Once among the largest royal residences in India, now housing the National Institute of Sports — worth a look for the scale of its grounds alone.",
    link: "https://en.wikipedia.org/wiki/Moti_Bagh_Palace",
    photo: "/images/places/moti-bagh-palace.jpg",
  },
];
