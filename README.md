# TRS-DSAI 2026 Workshop Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Repo structure

```
trs-dsai-website/
├── app/                     Pages (Next.js App Router — one folder = one route)
│   ├── layout.tsx           Root layout: fonts, Navbar, Footer wrap every page
│   ├── page.tsx             Home
│   ├── about/page.tsx
│   ├── organizers/page.tsx
│   ├── speakers/page.tsx
│   ├── schedule/page.tsx
│   ├── sponsors/page.tsx
│   ├── exhibitions/page.tsx
│   ├── accommodation/page.tsx   Accommodation & Travel
│   ├── places-to-visit/page.tsx
│   ├── gallery/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/              Reusable UI pieces
│   ├── Navbar.tsx           Primary links + "More" dropdown + search icon
│   ├── SearchModal.tsx      Site-wide search (Ctrl/Cmd+K), reads data/searchIndex.ts
│   ├── Footer.tsx
│   ├── Countdown.tsx        Live countdown (hero + compact navbar versions)
│   ├── VideoBackground.tsx  Muted/looped background video helper
│   ├── Reveal.tsx           Scroll fade-in wrapper — replays every time an
│   │                        element scrolls in/out of view (Framer Motion)
│   ├── SectionHeading.tsx
│   ├── CTASection.tsx
│   ├── SpeakerCard.tsx      Speaker row + click-to-open bio modal
│   └── FaqAccordion.tsx
├── data/                    ⭐ EDIT THESE, not the components, for content changes
│   ├── site.ts              Dates, venue, register/brochure links, contact, stats
│   ├── speakers.ts          Academic + industrial speaker lists
│   ├── organizers.ts        Organizing committee
│   ├── sponsors.ts          Sponsors by tier (empty starter)
│   ├── exhibitors.ts        Industrial exhibition partners
│   ├── accommodation.ts     Hotels, on-campus stay, how-to-reach routes
│   ├── places.ts            Places to visit near Patiala
│   ├── schedule.ts          Day-wise themes and sessions
│   ├── faq.ts               FAQ questions/answers
│   └── searchIndex.ts       Aggregates all of the above for site search
├── public/
│   ├── videos/              Background videos (see below)
│   ├── images/
│   │   ├── logos/           Institution + exhibitor logos (placeholders — see its README)
│   │   ├── speakers/        Speaker headshots (filenames referenced in data/speakers.ts)
│   │   └── gallery/         Event photos (listed in app/gallery/page.tsx)
│   └── docs/
│       └── trs-dsai-brochure.pdf   (add the final brochure here — see its README)
├── package.json
├── tailwind.config.ts       Brand colors: crimson, navy, ink, paper, steel
├── tsconfig.json
├── next.config.mjs
└── .gitignore
```

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

The site is fully functional as-is, but these spots show clean, generic
copy on the live pages (no dev instructions visible to visitors) until you
fill them in. Where to edit each one:

| What's incomplete | Where it shows | Where to fix it |
|---|---|---|
| Organizing committee is partial (2 people) | `/organizers` | `data/organizers.ts` |
| No sponsors listed yet | `/sponsors` | `data/sponsors.ts` |
| No gallery photos yet | `/gallery` | Add files to `public/images/gallery/`, list them in `app/gallery/page.tsx` |
| Speaker bios are mostly one-line placeholders | `/speakers` (click a name) | `data/speakers.ts` → `bio` field |
| Schedule has themes but no session-by-session timing | `/schedule` | `data/schedule.ts` → `sessions` array |
| Exhibitor/institutional logos are typographic placeholders, not real brand logos | `/exhibitions`, footer | See `public/images/logos/README.md` for why, and how to get real ones |
| Places to Visit have no photos yet | `/places-to-visit` | Add files to `public/images/places/` (see that folder's README) |
| Contact page has no phone number | `/contact` | `data/site.ts` → `contact.phones` (empty array — add strings like `"+91 98765 43210"` and the Phone section appears automatically) |
| Brochure PDF | Download button on Home | `public/docs/trs-dsai-brochure.pdf` (already in place — replace the file to update) |

## Content already sourced for you

- **Accommodation & Travel**: real nearby hotels, Booking.com search links,
  Google Maps pins, and air/rail/road routes with "Get directions" links —
  all compiled from public travel listings and TIET's own "Reaching TIET"
  page. Double-check current pricing/availability before publishing.
- **Places to Visit**: real Patiala attractions with links to Wikipedia or
  official tourism pages.

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
