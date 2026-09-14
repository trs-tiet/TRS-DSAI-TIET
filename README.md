# TRS-DSAI 2026 Workshop Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Repo structure

```
trs-dsai-website/
├── app/                     Pages (Next.js App Router — one folder = one route)
│   ├── layout.tsx           Root layout: fonts, Navbar, Footer wrap every page
│   ├── page.tsx             Home
│   ├── about/page.tsx
│   ├── speakers/page.tsx
│   ├── schedule/page.tsx
│   ├── exhibitions/page.tsx
│   ├── gallery/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/              Reusable UI pieces
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Countdown.tsx        Live countdown (hero + compact navbar versions)
│   ├── VideoBackground.tsx  Muted/looped background video helper
│   ├── Reveal.tsx           Scroll fade-in wrapper (Framer Motion)
│   ├── SectionHeading.tsx
│   ├── CTASection.tsx
│   ├── SpeakerCard.tsx      Speaker row + click-to-open bio modal
│   └── FaqAccordion.tsx
├── data/                    ⭐ EDIT THESE, not the components, for content changes
│   ├── site.ts              Dates, venue, register/brochure links, contact, stats
│   ├── speakers.ts          Academic + industrial speaker lists
│   ├── exhibitors.ts        Industrial exhibition partners
│   ├── schedule.ts          Day-wise themes and sessions
│   └── faq.ts               FAQ questions/answers
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
| `public/videos/hero.mp4`         | Home          | Full hero background          |
| `public/videos/about.mp4`        | Home, About   | Framed accent / banner        |
| `public/videos/schedule.mp4`     | Schedule      | Banner accent                 |
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

## Notes

- Video files are large (4–7MB each); Vercel's free tier handles this fine for
  a workshop site, but if load times matter later, consider compressing
  further (e.g. via `ffmpeg -crf 28`) or moving to a CDN.
- Countdown, nav scroll state, and the FAQ/speaker interactions are client
  components (`"use client"`) — everything else renders as static/server
  content for fast initial loads.
- Reduced-motion and visible keyboard focus are handled globally in
  `app/globals.css`.
