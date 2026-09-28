# SEO & Launch Plan — Catarina MTC

Prioritized SEO/launch plan for this Next.js (App Router) + Sanity site. Goal: **get patients** — make the practice, treatments and prices findable (Google, local search, AI assistants) and make booking effortless.

Last reviewed: 2026-09-27.

## Context

- **Stack** — Next.js 16 App Router, Sanity CMS, Vercel Analytics, Resend, Tailwind v4. Language `pt-PT`.
- **Domain (assumed)** — `https://catarinaabreumtc.com` (hardcoded in ~10 files — confirm it is purchased).
- **Pages** — `/` (home), `/perfil-clinico`, `/consultas` (process, prices, FAQ), `/blog`, `/blog/[slug]`, `/privacidade`, `/cookies`, `/faq`, `/studio`. (`/about` → `/perfil-clinico` and `/contact` → `/#contact` are permanent redirects.)

## Already done

- Root `layout.tsx` is a Server Component with `metadataBase`, `title.template`, Open Graph and Twitter defaults.
- `robots.ts` (allows crawlers + AI bots, disallows `/studio`) and `sitemap.ts` (static routes + Sanity slugs).
- `MedicalBusiness` + `Person` JSON-LD on home; `BlogPosting` + `BreadcrumbList` JSON-LD on articles.
- Blog `generateMetadata` with canonical, OG `article` type, dates, image.
- Real metadata and per-page canonicals on `/`, `/consultas`, `/perfil-clinico`, `/blog`.
- `lang="pt-PT"`, single H1 per page, pricing page, FAQ, practitioner profile with credentials.

---

## 1. Launch blockers (code)

- [x] **Launch gate lives in 3 places** (removed at go-live) — remove all together at launch:
  - `src/app/page.tsx` ("Em Construção" when `VERCEL_ENV === "production"`)
  - `src/app/shell.tsx` (hides Header/Footer/ScrollToTop)
  - `src/middleware.ts` — redirects every non-home **page** to `/` on any non-localhost host (incl. Vercel previews). Static files (`/images/*`, `robots.txt`, `sitemap.xml`) are now excluded from the matcher. Delete the file at launch.
- [x] **Canonical inherited by every page** — `alternates.canonical` in `src/app/layout.tsx` points at the home URL, so `/consultas`, `/perfil-clinico`, `/blog` declare themselves duplicates of `/`. Remove it from the layout; set a canonical per page.
- [ ] **Missing OG image** — `/images/og-default.jpg` is referenced but not in `public/images`. Add a 1200×630 image (real photo + name).
- [x] **JSON-LD with empty/fake values** (done: blanks removed, phone/email/Instagram/cédulas added; address, geo, hours still pending client data) — `MedicalBusinessJsonLd.tsx` ships `telephone: ""`, empty address, `geo` 0/0, empty `openingHours`. Fill with real data or omit the fields until known. Add `hasCredential` (cédulas C0062366 MTC, C0040836 Fitoterapia) and `sameAs` (Instagram). Point `Person.url` at `/perfil-clinico`.
- [ ] **Placeholder / inconsistent contact data (NAP)**:
  - [x] Footer phone link fixed (`tel:+351918844601`); unused `ClinicInfoBox.tsx` with fake data deleted.
  - Footer "Termos" links to `/` (no terms page).
- [x] **Placeholder copy** — "Há mais de [X] anos" in `AboutSectionTwo.tsx` (also conflicts with the 2023 start on `/perfil-clinico` — rephrase rather than fill in).

## 2. Site structure & on-page

- [x] **Sitemap** — add `/consultas`, `/perfil-clinico` (and `/privacidade`, `/cookies` at low priority); remove `/about`, `/contact`. Use real `lastModified` (Sanity `_updatedAt` for posts) instead of `new Date()`.
- [x] **Duplicate pages** — `/about` and `/contact` reuse home sections and aren't linked from the menu. Delete them and add permanent redirects in `next.config.js`: `/about → /perfil-clinico`, `/contact → /#contact`.
- [x] **Double brand in titles** — `/consultas` and `/perfil-clinico` titles include the brand and the template appends it again. Use short titles (`"Consultas e Preços"`, `"Perfil Clínico"`).
- [ ] **Location keywords** — Gondomar (Fânzeres) + Santa Maria da Feira (FisioSouto).
  - [x] Home title/description, `/consultas` title/description, footer address, "Onde Consulto" section (H2), JSON-LD address + geo + `areaServed`.
  - [ ] Hero area (eyebrow/intro text above the fold).
  - [ ] Treatment pages and blog posts: mention the locations naturally where relevant.
- [x] **Treatment list consistency** — cards: Acupuntura, Dietoterapia e Fitoterapia, Moxabustão, Ventosaterapia, Tui Na. Spellings standardised site-wide to "Acupuntura" and "Tui Na" (meta, JSON-LD, FAQ, footer, OG image).
- [ ] **Images** — replace Unsplash stock (Hero photo is labelled "Catarina Abreu" but isn't her) with real photos + descriptive alt text. ~~Remove `unoptimized` from the real photo~~ (done — root cause was the middleware redirecting the image optimizer).
- [ ] **Internal linking** — treatment cards → treatment pages; blog posts → relevant treatment + booking; treatment pages → `/consultas` prices.

## 3. Content that ranks (highest long-term impact)

- [ ] **One page per treatment** — `/tratamentos/acupuntura`, `/tratamentos/fitoterapia`, `/tratamentos/moxabustao`, `/tratamentos/ventosaterapia` (+ others confirmed). Each: what it is, what it helps with, what a session looks like, duration, price, FAQ, booking CTA, `Service`/`MedicalTherapy` JSON-LD. Consider managing them in Sanity.
- [ ] **Condition content** (blog or pages) — "acupuntura para ansiedade", "insónia", "dor lombar", "enxaqueca", etc. Careful, compliant wording (see §6).
- [ ] **Blog launch set** — 5–6 in-depth articles answering real patient questions before launch; then a steady cadence (e.g. 2/month).
- [ ] **Testimonials section** (planned in `PLAN.md`) — only if permitted by health advertising rules (see §6).
- [x] **FAQ schema** — dedicated `/faq` page with `FAQPage` JSON-LD (moved from `/consultas`) (limited Google rich results today, still useful for AI assistants).

## 4. Blog technical fixes

- [x] `dateModified` uses `publishedAt` — query `_updatedAt` and use it in metadata + JSON-LD.
- [x] Main image alt from Sanity (`mainImage.alt`) is ignored — use it instead of the title.
- [x] Empty-state message on `/blog` mentions `/studio` to the public — remove.
- [ ] Author: link author to `/perfil-clinico`, show short bio on articles (E-E-A-T for health content).

## 5. Local SEO & off-site (outside the repo — biggest lever)

- [ ] **Google Business Profile** — create/verify; category, services, prices, hours, photos, booking link. Ask every patient for a review.
- [ ] **Google Search Console** (+ Bing Webmaster Tools) — verify domain, submit sitemap, monitor indexing.
- [ ] **Directories** — Doctoralia (free profile), professional association listings, local directories. Keep NAP identical everywhere.
- [ ] **Map embed + directions** on the contact section once the address is known.
- [ ] **Instagram** — link to site/booking in bio; keep in `sameAs`.

## 6. Compliance & trust (review with client before launch)

- [ ] Health advertising rules (DL 238/2015) — check treatment claims ("controlo de dependências", "gestão do peso", "aliviar dores") and whether testimonials are allowed.
- [ ] ERS registration — confirm whether registration is required and whether its number must be displayed.
- [ ] Contact form collects health data → add GDPR consent checkbox linking to `/privacidade`; ~~change phone input to `type="tel"`~~ (done).
- [ ] Privacy policy — mention Resend (contact form), Vercel Analytics and the booking tool (Cal.com).
- [ ] Terms page (or remove the footer link).

## 7. Booking

- Free now: **Cal.com** (free individual plan — unlimited event types, Google Calendar sync, custom questions, buffers, reminders; React embed `@calcom/embed-react`). Plus a **WhatsApp** click-to-chat link and the existing contact form as fallbacks.
- [ ] Event types: 1ª Consulta (até 2h) and Consulta de Seguimento (até 1h), each in two variants — Online (40 € / 25 €, plus 85 € pack of 3, valid 1 year) and Presencial at Espaço Blume (50 € / 30 €). Required fields: phone, reason. Minimum notice + buffers.
- [ ] `/marcar-consulta` page (indexable) with inline embed.
- [ ] Single `<BookingButton />` component used by every "Marcar Consulta" CTA (opens Cal.com popup) — swapping to the in-house scheduling software later is a one-component change.

## 8. After launch

- [ ] Lighthouse / PageSpeed on mobile (LCP image, `sizes`, self-host key images).
- [ ] Rich Results Test + Schema validator on home, `/consultas`, a blog post.
- [ ] Monthly: Search Console queries → new blog topics; GBP reviews; update prices/hours everywhere at once.

---

## Suggested order

1. Code fixes: canonicals, sitemap, duplicate pages/redirects, titles, JSON-LD cleanup, NAP fixes.
2. Booking: Cal.com account + `<BookingButton />` + `/marcar-consulta`.
3. Client review (questions below) → real content, photos, address, prices.
4. Remove launch gate (page, shell, middleware) → go live.
5. Search Console + Google Business Profile on launch day.
6. Treatment pages + blog launch set.
7. Ongoing: reviews, blog cadence, condition pages, performance.

## Questions for the client

1. Domain purchased? `www` redirect? Email stays on Gmail?
2. Address(es) — single clinic, several rented rooms, home visits, online? Target cities?
3. Real phone/WhatsApp, email, opening hours (must match everywhere).
4. Final treatment list (Tui Ná? ventosas?) and session durations.
5. ~~Prices~~ (confirmed: online 40/25/85 pack, presencial Blume 50/30; FisioSouto prices still unknown). Is the insurance reimbursement FAQ accurate?
6. ERS registration and health-advertising compliance; testimonials allowed?
7. Professional photos (her, the room, treatments).
8. OK to publish cédula numbers in structured data? Links to her 3 published articles?
9. Comfortable with personal details on `/perfil-clinico` (age, health history)?
10. Who writes blog posts and how often?
11. Cal.com account (her Google Calendar) and Google Business Profile ownership (her account).
