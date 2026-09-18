
# TRS-DSAI 2026 Workshop Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Repo structure

```
trs-dsai-website/
├── app/                     Pages (Next.js App Router — one folder = one route)
│   ├── layout.tsx           Root layout: fonts, Navbar, Footer, theme-init script
│   ├── page.tsx             Home
│   ├── about/page.tsx
│   ├── organizers/page.tsx
│   ├── speakers/
│   │   ├── academia/page.tsx
│   │   └── industrial/page.tsx
│   ├── schedule/page.tsx
│   ├── sponsors/page.tsx
│   ├── hands-on-experience/page.tsx   (formerly "exhibitions")
│   ├── accommodation/page.tsx         Accommodation & Travel
│   ├── places-to-visit/
│   │   ├── thapar/page.tsx            On-campus spots
│   │   └── patiala/page.tsx           City attractions
│   ├── gallery/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── globals.css          Theme CSS variables (light/dark) live here
├── components/              Reusable UI pieces
│   ├── Navbar.tsx           Flat links + hover dropdowns (Speakers, Places to
│   │                        Visit) + search icon + theme toggle
│   ├── ThemeToggle.tsx      Light/dark switch, persists to localStorage
│   ├── SearchModal.tsx      Site-wide search (Ctrl/Cmd+K), reads data/searchIndex.ts
│   ├── Footer.tsx
│   ├── Countdown.tsx        Live countdown (hero + compact navbar versions)
│   ├── VideoBackground.tsx  Muted/looped background video helper
│   ├── Reveal.tsx           Scroll fade-in wrapper — replays every time an
│   │                        element scrolls in/out of view (Framer Motion)
│   ├── SectionHeading.tsx
│   ├── CTASection.tsx
│   ├── SpeakerCard.tsx      Photo-forward (250×250) speaker card + bio modal
│   ├── PlaceCard.tsx        Shared card for both places-to-visit pages
│   └── FaqAccordion.tsx
├── data/                    ⭐ EDIT THESE, not the components, for content changes
│   ├── site.ts              Dates, venue, register/brochure links, contact, stats
│   ├── speakers.ts          academicSpeakers + industrialSpeakers (15 total)
│   ├── organizers.ts        Real organizing committee (5, from the brochure)
│   ├── sponsors.ts          Mirrors data/exhibitors.ts (same 6 companies)
│   ├── exhibitors.ts        Hands-on Experience partners
│   ├── accommodation.ts     Hotels (with booking/maps links), how-to-reach routes
│   ├── places-thapar.ts     On-campus spots
│   ├── places-patiala.ts    City attractions (formerly places.ts)
│   ├── schedule.ts          Day-wise themes and sessions
│   ├── faq.ts               FAQ questions/answers
│   └── searchIndex.ts       Aggregates all of the above for site search
├── public/
│   ├── videos/              about.mp4, schedule.mp4, hands-on-experience.mp4
│   │                        (hero.mp4 removed — Home now uses a static photo)
│   ├── images/
│   │   ├── hero/            tiet-admin-building.jpg (2.35:1 crop, Home banner)
│   │   ├── logos/           Real institutional + exhibitor logos
│   │   ├── speakers/        Real speaker photos (500×500, cropped square)
│   │   ├── organizers/      Real organizer photos (500×500, cropped square)
│   │   └── gallery/         Event photos (listed in app/gallery/page.tsx)
│   └── docs/
│       └── trs-dsai-brochure.pdf   Latest corrected brochure
├── package.json
├── tailwind.config.ts       Brand colors (crimson, navy) + theme tokens
│                            (paper, surface, fg, steel, line — all CSS-variable
│                            driven, see globals.css)
├── tsconfig.json
├── next.config.mjs
└── .gitignore
```

## Light/dark theme

Click the sun/moon icon in the navbar to switch themes. It works by toggling
a `.dark` class on `<html>` (`components/ThemeToggle.tsx`) and persisting the
choice to `localStorage` — a small inline script in `app/layout.tsx` applies
it before first paint so returning dark-mode visitors don't see a light-mode
flash. **Default is always light** for first-time visitors, regardless of
system preference, per design.

The color tokens `paper`, `surface`, `fg`, `steel`, and `line` in
`tailwind.config.ts` all resolve to CSS variables defined in
`app/globals.css` (`:root` for light, `.dark` for dark) — so any component
using those classes is automatically theme-aware with no extra work. A few
sections (hero content band, footer, CTA bands, the navy "Hands-on
Experience" strip on Home) are intentionally dark in both themes — that's
a deliberate design choice, not a bug.

## Where each video is used


| File                        | Page          | Placement                    |
|-----------------------------|---------------|-------------------------------|
| `public/videos/hero.mp4`         | Home          | Full hero background (quadruped robot) |
| `public/videos/about.mp4`        | Home, About   | Framed accent / banner        |
| `public/videos/schedule.mp4`     | Schedule      | Banner accent (walk/jump robot) |
| `public/videos/exhibitions.mp4`  | Exhibitions   | Banner accent                 |

To swap a video, just replace the file — same filename, same folder.

## Editing content (no code knowledge needed for most of this)

- **Change dates, venue, register link, brochure link, contact emails** → `data/site.ts`
- **Add/remove/edit a speaker** → `data/speakers.ts`
- **Add/remove an exhibitor** → `data/exhibitors.ts`
- **Update the day-wise schedule** → `data/schedule.ts`
- **Add an FAQ** → `data/faq.ts`
- **Add gallery photos** → drop files in `public/images/gallery/`, list filenames in `app/gallery/page.tsx`
- **Add the real brochure PDF** → `public/docs/trs-dsai-brochure.pdf`
- **Add real logos** → `public/images/logos/` (see that folder's README)

The registration button everywhere on the site reads `site.registerUrl` in
`data/site.ts` — update that one line once you have the form link.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying via GitHub + Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial TRS-DSAI 2026 site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the GitHub repo
   - Framework preset: Vercel auto-detects **Next.js** — no config needed
   - Click **Deploy**

3. **Custom domain** (`trs-tiet`, once purchased)
   - In the Vercel project → **Settings → Domains** → add your domain
   - Point your domain registrar's DNS at Vercel per their on-screen instructions

That's it — every push to `main` auto-redeploys.

## Search

Click the magnifying glass icon in the navbar (or press `Ctrl+K` / `Cmd+K`
anywhere on the site) to open a search modal covering every page, speaker,
organizer, exhibitor, place to visit, and FAQ. It's built from
`data/searchIndex.ts`, which pulls from the other data files automatically —
add a speaker or FAQ entry and it's searchable without touching the search
code itself. Add a new page to the `pages` array in that file when you create
one.

## Scroll animations

Section reveal animations (`components/Reveal.tsx`) replay every time an
element scrolls into view — including scrolling back up — rather than
firing once per page load. This is controlled by `viewport={{ once: false }}`
in that one file.

## Content still needed

| What's incomplete | Where it shows | Where to fix it |
|---|---|---|
| No sponsor logos beyond the 6 hands-on partners | `/sponsors` | `data/sponsors.ts` |
| No gallery photos yet | `/gallery` | Add files to `public/images/gallery/`, list them in `app/gallery/page.tsx` |
| Speaker bios are one-line placeholders (name/affiliation only) | `/speakers/academia`, `/speakers/industrial` (click a card) | `data/speakers.ts` → `bio` field |
| Schedule has themes but no session-by-session timing | `/schedule` | `data/schedule.ts` → `sessions` array |
| "In Thapar" places have no photos, and only 3 confirmed spots | `/places-to-visit/thapar` | `data/places-thapar.ts`; add photos to `public/images/places/` |
| "In Patiala" places have no photos yet | `/places-to-visit/patiala` | Add files to `public/images/places/` (see that folder's README) |
| Contact page has no phone number | `/contact` | `data/site.ts` → `contact.phones` (empty array — add strings like `"+91 98765 43210"` and the Phone section appears automatically) |

## Content already sourced for you

- **All 15 speakers + 5 organizers**: real photos (cropped square, 500×500),
  corrected names/titles from the final brochure.
- **All 6 exhibitor/sponsor logos + 3 institutional logos**: real files, not
  placeholders.
- **Accommodation & Travel**: real nearby hotels, Booking.com search links,
  Google Maps pins, and air/rail/road routes with "Get directions" links —
  compiled from public travel listings and TIET's own "Reaching TIET" page.
  Double-check current pricing/availability before publishing.
- **Places to Visit — In Patiala**: real attractions with links to Wikipedia
  or official tourism pages.
- **Places to Visit — In Thapar**: only the 3 spots you named are included —
  I couldn't independently verify further named campus landmarks beyond
  generic facility listings, so I didn't pad the list with guesses.

## Notes

- Video files are large (4–7MB each); Vercel's free tier handles this fine for
  a workshop site, but if load times matter later, consider compressing
  further (e.g. via `ffmpeg -crf 28`) or moving to a CDN.
- Countdown, nav scroll state, search, and the FAQ/speaker interactions are
  client components (`"use client"`) — everything else renders as
  static/server content for fast initial loads.
- Reduced-motion and visible keyboard focus are handled globally in
  `app/globals.css`.
- "The Robotics Society (TRS)" is used as the single organizer name
  site-wide (`data/site.ts` → `organizer`); the footer credit line is a
  separate hardcoded string in `components/Footer.tsx` if you ever want it
  to say something different.
