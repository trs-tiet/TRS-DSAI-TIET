// ---------------------------------------------------------------------------
// SEARCH INDEX
// Aggregates pages + content across data files into one flat list for the
// site search modal. Add a page here when you add a new route.
// ---------------------------------------------------------------------------

import { speakers } from "./speakers";
import { exhibitors } from "./exhibitors";
import { faqs } from "./faq";
import { organizers } from "./organizers";
import { placesInPatiala } from "./places-patiala";
import { placesInThapar } from "./places-thapar";

export type SearchItem = {
  title: string;
  category: string;
  href: string;
  description?: string;
};

const pages: SearchItem[] = [
  { title: "Home", category: "Page", href: "/" },
  { title: "About", category: "Page", href: "/about" },
  { title: "Organizers", category: "Page", href: "/organizers" },
  { title: "Speakers", category: "Page", href: "/speakers" },
  { title: "Schedule", category: "Page", href: "/schedule" },
  { title: "Sponsors", category: "Page", href: "/sponsors" },
  { title: "Hands-on Experience", category: "Page", href: "/hands-on-experience" },
  { title: "Accommodation & Travel", category: "Page", href: "/accommodation" },
  { title: "Places to Visit — In Thapar", category: "Page", href: "/places-to-visit/thapar" },
  { title: "Places to Visit — In Patiala", category: "Page", href: "/places-to-visit/patiala" },
  { title: "Gallery", category: "Page", href: "/gallery" },
  { title: "FAQ", category: "Page", href: "/faq" },
  { title: "Contact", category: "Page", href: "/contact" },
];

const speakerItems: SearchItem[] = speakers.map((s) => ({
  title: s.name,
  category: s.type === "Academic" ? "Academic Speaker" : "Industrial Speaker",
  href: "/speakers",
  description: s.affiliation,
}));

const exhibitorItems: SearchItem[] = exhibitors.map((e) => ({
  title: e.name,
  category: "Hands-on Experience",
  href: "/hands-on-experience",
  description: e.focus,
}));

const organizerItems: SearchItem[] = organizers.map((o) => ({
  title: o.name,
  category: "Organizer",
  href: "/organizers",
  description: o.role,
}));

const placeItems: SearchItem[] = [
  ...placesInThapar.map((p) => ({
    title: p.name,
    category: "Place to visit (Thapar)",
    href: "/places-to-visit/thapar",
    description: p.description,
  })),
  ...placesInPatiala.map((p) => ({
    title: p.name,
    category: "Place to visit (Patiala)",
    href: "/places-to-visit/patiala",
    description: p.description,
  })),
];

const faqItems: SearchItem[] = faqs.map((f) => ({
  title: f.question,
  category: "FAQ",
  href: "/faq",
  description: f.answer,
}));

export const searchIndex: SearchItem[] = [
  ...pages,
  ...speakerItems,
  ...exhibitorItems,
  ...organizerItems,
  ...placeItems,
  ...faqItems,
];
