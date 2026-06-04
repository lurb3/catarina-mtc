# SEO Audit — Catarina MTC

A prioritized audit of SEO/visibility gaps in this Next.js (App Router) + Sanity site, covering technical SEO, on-page content, local SEO, and AI/LLM visibility — no code changes, recommendations only.

## Context observed

- **Stack** — Next.js 16 App Router, Sanity CMS, Vercel Analytics, Resend, Tailwind v4. Language `pt-PT`.
- **Pages** — `/` (home), `/about`, `/contact`, `/blog`, `/blog/[slug]`, `/studio`.
- **Production gate** — In production, `@/Users/gustavo/repos/catarina-mtc/src/app/page.tsx:18` shows an "Em Construção" placeholder and `@/Users/gustavo/repos/catarina-mtc/src/app/layout.tsx:27` hides Header/Footer. So the live site currently exposes almost nothing to crawlers. **Nothing else matters until the site is actually live.**

---

## Critical issues (fix first)

- **Root layout is a Client Component** — `"use client"` at `@/Users/gustavo/repos/catarina-mtc/src/app/layout.tsx:1` blocks the root from exporting `metadata`/`generateMetadata`. No site-wide title template, Open Graph, Twitter cards, canonical, or `metadataBase`. Move `Providers`/client logic into a child component and keep `layout.tsx` as a Server Component.
- **Site behind "Em Construção" gate** — Real content, Header, and Footer are hidden in production. Crawlers and AI bots see a near-empty page. Plan a launch and remove/replace the gate.
- **No `metadataBase`** — Without it, OG/canonical URLs resolve relative and break social/AI previews. Needs the production domain (currently unknown — only `example.com` placeholders in `.env.local.example`).
- **No `sitemap.xml`** — No `src/app/sitemap.ts`. Add a dynamic sitemap that includes static routes + Sanity blog slugs.
- **No `robots.txt`** — No `src/app/robots.ts`. Add one that allows crawling, points to the sitemap, and disallows `/studio`.
- **Placeholder metadata on key pages** — `/about` and `/contact` still ship template copy ("Free Next.js Template for Startup and SaaS", "Lorem ipsum"). See `@/Users/gustavo/repos/catarina-mtc/src/app/about/page.tsx:8` and `@/Users/gustavo/repos/catarina-mtc/src/app/contact/page.tsx:7`. This is actively harmful for ranking and trust.

---

## On-page SEO

- **Titles & descriptions** — Only `/` and `/blog` have real metadata. Define unique, keyword-rich `title`/`description` per page. Add a `title.template` (e.g. `%s | Catarina Abreu — MTC`) once the root is a Server Component.
- **Open Graph / Twitter cards** — Absent everywhere. Add `openGraph` + `twitter` metadata and a default OG image (1200×630) for rich previews on social and in AI answers.
- **Canonical URLs** — Add `alternates.canonical` per page once `metadataBase` exists.
- **Breadcrumb placeholders** — `/about` and `/contact` pass "Lorem ipsum" descriptions and "About Page"/"Contact Page" names to `Breadcrumb`. Replace with real, keyword-relevant copy.
- **Single H1 per page** — Home H1 is good (`@/Users/gustavo/repos/catarina-mtc/src/components/Hero/index.tsx:17`), but verify other pages have exactly one descriptive H1 and a logical heading hierarchy.
- **Placeholder body copy** — Hero says "há mais de [X] anos" (`@/Users/gustavo/repos/catarina-mtc/src/components/Hero/index.tsx:25`). Replace all `[X]`/placeholder content; thin/fake content hurts ranking and E-E-A-T.
- **Image alt text & relevance** — Several decorative Unsplash images use empty `alt` (acceptable if truly decorative), but stock photos of unrelated people (`@/Users/gustavo/repos/catarina-mtc/src/components/Hero/index.tsx:45-47`) weaken trust. Use real photos with descriptive, keyword-aware alt text.

---

## Technical SEO

- **Structured data (JSON-LD)** — None present. High impact for a local health practice and for AI answers. Add:
  - `LocalBusiness` / `MedicalBusiness` (name, address, geo, phone, opening hours, priceRange, sameAs social links).
  - `Person` for Catarina (credentials → E-E-A-T).
  - `BlogPosting` + `BreadcrumbList` on blog articles (author, datePublished, image, headline).
  - `FAQPage` if a FAQ section is added.
- **`lang` attribute** — Correctly set to `pt-PT` at `@/Users/gustavo/repos/catarina-mtc/src/app/layout.tsx:21`. Good.
- **`/studio` indexing** — Sanity Studio should be disallowed in robots and/or `noindex`.
- **Favicon / manifest / app icons** — `favicon.ico` exists; add `src/app/icon.png`, `apple-icon.png`, and a `manifest.ts` for completeness.
- **Blog freshness signals** — `BlogPosting` metadata lacks `publishedTime`/`modifiedTime` in `generateMetadata` (`@/Users/gustavo/repos/catarina-mtc/src/app/blog/[slug]/page.tsx:35`). Add OG `article` type with dates and author.
- **Performance / Core Web Vitals** — Many large remote Unsplash images; relying on `next/image` is good, but verify LCP image uses `priority` (Hero does), set explicit `sizes`, and consider self-hosting key images. Run Lighthouse / PageSpeed once live.
- **Internal linking** — Add contextual internal links (home → treatments → blog → contact) to spread link equity and help crawl depth.

---

## Local SEO (high impact for a therapist)

- **Google Business Profile** — Create/claim a Google Business Profile (the single biggest local-ranking lever). Out of repo, but essential.
- **NAP consistency** — Publish Name, Address, Phone consistently on site (footer + contact page) and match it in JSON-LD and directories.
- **Location keywords** — Target city/region terms (e.g. "acupunctura em [cidade]", "medicina tradicional chinesa [cidade]") in titles, H1s, and content.
- **Embedded map + directions** — Add a Google Map embed on `/contact`.
- **Local directories / reviews** — List on Portuguese health directories and gather reviews.

---

## AI / LLM visibility (GEO)

- **Make content machine-readable** — JSON-LD structured data (above) is the strongest signal for AI assistants to extract facts (services, location, hours, practitioner).
- **Clear, factual, self-contained copy** — Write service descriptions and an FAQ in plain Q&A form; AI models favor extractable, unambiguous statements.
- **Allow AI crawlers** — In `robots.ts`, explicitly allow reputable AI bots (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended) if visibility in AI answers is desired.
- **Author/expertise signals (E-E-A-T)** — Add a detailed practitioner bio with credentials, and `Person`/`author` schema; health (YMYL) content is held to a high trust bar.
- **Substantive blog content** — Publish in-depth, well-structured articles answering real patient questions; these are what AI tools cite.

---

## Suggested priority order

1. **Launch the real site** (remove "Em Construção" gate) and set the production domain.
2. **Convert `layout.tsx` to a Server Component** and add `metadataBase` + global metadata/OG defaults.
3. **Replace all placeholder metadata & content** (`/about`, `/contact`, Hero `[X]`).
4. **Add `sitemap.ts` and `robots.ts`** (allow crawlers + AI bots, disallow `/studio`).
5. **Add JSON-LD** (`LocalBusiness`, `Person`, `BlogPosting`, `BreadcrumbList`).
6. **Local SEO**: Google Business Profile, NAP, map embed, location keywords.
7. **Per-page OG images, canonicals, blog article dates/author**.
8. **Content depth + FAQ for AI visibility; measure with Lighthouse + Search Console**.

## Open questions

- What is the production domain? (needed for `metadataBase`, canonicals, sitemap)
- What city/region should be targeted for local SEO?
- Is appearing in AI assistant answers an explicit goal (affects robots AI-bot rules)?
</CodeContent>
<parameter name="EmptyFile">false
