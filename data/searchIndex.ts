// ---------------------------------------------------------------------------
// SEARCH INDEX
// Aggregates pages + content across data files into one flat list for the
// site search modal. Add a page here when you add a new route.
// ---------------------------------------------------------------------------

import { allSpeakers } from "./speakers";
import { exhibitors } from "./exhibitors";
import { faqs } from "./faq";
import { organizers } from "./organizers";
import { placesToVisit } from "./places";

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
  { title: "Exhibitions", category: "Page", href: "/exhibitions" },
  { title: "Accommodation & Travel", category: "Page", href: "/accommodation" },
  { title: "Places to Visit", category: "Page", href: "/places-to-visit" },
  { title: "Gallery", category: "Page", href: "/gallery" },
  { title: "FAQ", category: "Page", href: "/faq" },
  { title: "Contact", category: "Page", href: "/contact" },
];

const speakerItems: SearchItem[] = allSpeakers.map((s) => ({
  title: s.name,
  category: "Speaker",
  href: "/speakers",
  description: s.affiliation,
}));

const exhibitorItems: SearchItem[] = exhibitors.map((e) => ({
  title: e.name,
  category: "Exhibition",
  href: "/exhibitions",
  description: e.focus,
}));

const organizerItems: SearchItem[] = organizers.map((o) => ({
  title: o.name,
  category: "Organizer",
  href: "/organizers",
  description: o.role,
}));

const placeItems: SearchItem[] = placesToVisit.map((p) => ({
  title: p.name,
  category: "Place to visit",
  href: "/places-to-visit",
  description: p.description,
}));

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
