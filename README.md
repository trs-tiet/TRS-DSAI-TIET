# TRS-DSAI 2026 Workshop Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Repo structure

```
trs-dsai-website/
├── app/                     Pages (Next.js App Router — one folder = one route)
│   ├── layout.tsx           Root layout: fonts, Navbar, Footer, theme-init script
│   ├── page.tsx             Home
│   ├── about/page.tsx       Includes the Registration fee section
│   ├── organizers/page.tsx
│   ├── speakers/page.tsx    Single grid (Academic + Industrial together)
│   ├── schedule/page.tsx
│   ├── sponsors/page.tsx
│   ├── hands-on-experience/page.tsx   (formerly "exhibitions")
│   ├── accommodation/page.tsx         Accommodation & Travel
│   ├── places-to-visit/
│   │   ├── thapar/page.tsx            On-campus spots
│   │   └── patiala/page.tsx           City attractions
│   ├── gallery/page.tsx
│   ├── faq/page.tsx                   Includes the fee table on the
│   │                                  "Is there a registration fee?" answer
│   ├── contact/page.tsx
│   └── globals.css          Theme CSS variables (light/dark) live here
├── components/              Reusable UI pieces
│   ├── Navbar.tsx           Flat links + "More" dropdown + search icon +
│   │                        theme toggle. Full desktop nav only shows at
│   │                        2xl (1536px+) — below that it's the hamburger
│   │                        menu, since the full link set + countdown +
│   │                        actions need that much room to stay on one line.
│   ├── ThemeToggle.tsx      Light/dark switch, persists to localStorage
│   ├── SearchModal.tsx      Site-wide search (Ctrl/Cmd+K), reads data/searchIndex.ts
│   ├── Footer.tsx           Includes workshop logo + social links
│   ├── Countdown.tsx        Live countdown (hero + compact navbar versions)
│   ├── VideoBackground.tsx  Muted/looped background video helper
│   ├── Reveal.tsx           Scroll fade-in wrapper — replays every time an
│   │                        element scrolls in/out of view (Framer Motion)
│   ├── SectionHeading.tsx
│   ├── CTASection.tsx
│   ├── SpeakerCard.tsx      Photo-forward (250×250) speaker card + bio modal.
│   │                        Falls back to an initials badge automatically
│   │                        when a speaker has no `photo` set.
│   ├── PlaceCard.tsx        Shared card for both places-to-visit pages
│   ├── RegistrationFeeTable.tsx   Real HTML table (not an image) — used on
│   │                              both the About page and the FAQ page so
│   │                              it never blurs at any screen size
│   └── FaqAccordion.tsx     Renders RegistrationFeeTable inline for any
│                            FAQ item with `feeTable: true`
├── data/                    ⭐ EDIT THESE, not the components, for content changes
│   ├── site.ts              Dates, venue, register/brochure links, contact,
│   │                        socials (LinkedIn is live), stats
│   ├── speakers.ts          academicSpeakers + industrialSpeakers (18 total)
│   ├── organizers.ts        Real organizing committee (5, from the brochure)
│   ├── sponsors.ts          Mirrors data/exhibitors.ts (same 6 companies)
│   ├── exhibitors.ts        Hands-on Experience partners. Two entries show
│   │                        the global brand as `name` (Qualysis, Noraxon)
│   │                        with their India distributor (Pukhya, Aerobe)
│   │                        named in the `description` and used for `logo`
│   │                        — intentional, not a mismatch
│   ├── registrationFees.ts  Fee rows + notes — feeds RegistrationFeeTable
│   ├── accommodation.ts     Hotels (with booking/maps links), how-to-reach
│   │                        routes. On-campus stay (Guest House / hostels)
│   │                        is marked invited-speakers-only, not general use
│   ├── places-thapar.ts     On-campus spots
│   ├── places-patiala.ts    City attractions (formerly places.ts) — has
│   │                        real photos in public/images/places/
│   ├── schedule.ts          Day-wise themes (no session-by-session timing yet)
│   ├── faq.ts               FAQ questions/answers
│   └── searchIndex.ts       Aggregates all of the above for site search
├── public/
│   ├── videos/              about.mp4, schedule.mp4, hands-on-experience.mp4,
│   │                        organizers.mp4, sponsors.mp4, home-teaser.mp4
│   │                        (hero.mp4 removed — Home now uses a static photo)
│   ├── images/
│   │   ├── hero/            thapar-hero.jpg (2.35:1 crop, Home banner)
│   │   ├── logos/           Real institutional + exhibitor logos, plus
│   │   │                    trs-dsai-logo.png (workshop logo — Navbar, Footer)
│   │   ├── speakers/        Real speaker photos (500×500, cropped square)
│   │   ├── organizers/      Real organizer photos (500×500, cropped square)
│   │   ├── places/          Real photos for Patiala attractions
│   │   └── gallery/         Event photos (listed in app/gallery/page.tsx) —
│   │                        still empty, see "Content still needed" below
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


| File                              | Page          | Placement                              |
|------------------------------------|---------------|-----------------------------------------|
| `public/videos/home-teaser.mp4`   | Home          | Framed accent within a section (not the hero — the hero is now the static `thapar-hero.jpg` photo) |
| `public/videos/about.mp4`         | About         | Banner accent                          |
| `public/videos/schedule.mp4`      | Schedule      | Banner accent                          |
| `public/videos/hands-on-experience.mp4` | Hands-on Experience | Banner accent                    |
| `public/videos/organizers.mp4`    | Organizers    | Banner accent                          |
| `public/videos/sponsors.mp4`      | Sponsors      | Banner accent                          |

To swap a video, just replace the file — same filename, same folder.

## Editing content (no code knowledge needed for most of this)

- **Change dates, venue, register link, brochure link, contact emails/phone, socials** → `data/site.ts`
- **Add/remove/edit a speaker** → `data/speakers.ts`
- **Add/remove an exhibitor** → `data/exhibitors.ts` (also updates `/sponsors`, which mirrors it)
- **Edit the registration fee table** → `data/registrationFees.ts` (shown as a real table, not an image, on both `/about` and `/faq`)
- **Update the day-wise schedule** → `data/schedule.ts`
- **Add an FAQ** → `data/faq.ts`
- **Add gallery photos** → drop files in `public/images/gallery/`, list filenames in `app/gallery/page.tsx`
- **Add the real brochure PDF** → `public/docs/trs-dsai-brochure.pdf`
- **Add real logos** → `public/images/logos/` (see that folder's README)
- **Swap the workshop logo** (Navbar, Footer, and the social-preview/OG image) → `public/images/logos/trs-dsai-logo.png` and `public/og-image.jpg`

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
| No sponsor logos beyond the 6 hands-on partners | `/sponsors` | `data/sponsors.ts` (mirrors `data/exhibitors.ts`) |
| No gallery photos yet | `/gallery` | Add files to `public/images/gallery/`, list them in `app/gallery/page.tsx` |
| Schedule has day-level themes but no session-by-session timing | `/schedule` | `data/schedule.ts` |
| "In Thapar" places have no photos, and only 3 confirmed spots | `/places-to-visit/thapar` | `data/places-thapar.ts`; add photos to `public/images/places/` |
| Photos for the 3 newest speakers are in but worth a quick crop/quality check against the rest | `/speakers` | `public/images/speakers/` |

## Content already sourced for you

- **All 18 speakers + 5 organizers**: real photos (cropped square, 500×500)
  and full bios — corrected names/titles from the final brochure plus 3
  later additions (Dr. Madan Dabbeeru, Prof. Santhakumar Mohan, Prof. V. Hari
  Kumar).
- **All 6 exhibitor/sponsor logos + 3 institutional logos + the workshop's
  own logo**: real files, not placeholders. Two entries intentionally list
  the global brand as the display name (Qualysis, Noraxon) while their
  `description` and `logo` reference the India distributor (Pukhya, Aerobe)
  — that pairing is deliberate, not a data error.
- **Registration fee structure**: real fee table (category × TRS/Non-TRS ×
  GST) on `/about` and `/faq`, rendered as an actual table so it's crisp at
  any screen size.
- **Contact info**: real phone number and email; on-campus accommodation
  (Guest House / hostels) is correctly marked as invited-speakers-only, with
  nearby hotels listed for everyone else.
- **Social links**: LinkedIn is live (Navbar, Footer, Home, About, Contact);
  Instagram/YouTube are still placeholder `#` links pending real accounts.
- **Accommodation & Travel**: real nearby hotels, Booking.com search links,
  Google Maps pins, and air/rail/road routes with "Get directions" links —
  compiled from public travel listings and TIET's own "Reaching TIET" page.
  Double-check current pricing/availability before publishing.
- **Places to Visit — In Patiala**: real attractions with real photos and
  links to Wikipedia or official tourism pages.
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
