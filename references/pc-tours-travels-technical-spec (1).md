# P&C Tours and Travels — Technical & Build Specification
*Defines the tech stack, page/route structure, and data model scope for the Antigravity build. Sized for a first-version launch (static/lightweight), with a clear upgrade path if the catalogue grows.*

---

## 1. Recommended Approach: Static-First (Not Full CMS/Backend Yet)

Given P&C is a newly opened business (2025) with a small, evolving package catalogue, a full CMS + booking backend (like the Next.js/PostgreSQL architecture used for Vihana Holidays) is more than this stage needs. Recommended approach instead:

- **Static-first site** with tour/package data stored in structured content files (JSON or Markdown frontmatter), not a database
- No live booking engine and no contact form at launch — every "Book Now" and CTA button routes directly to WhatsApp (wa.me link), matching the blueprint's CTA pattern
- This keeps hosting cheap, build/deploy simple, and lets Antigravity scaffold the whole thing without provisioning a database, auth system, or form backend

**Upgrade path:** once the catalogue grows past ~20–30 active tours or P&C wants online payment/booking, migrate tour data into a proper CMS (Sanity, Payload, or a simple PostgreSQL + admin panel) without changing the frontend.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) | SSR/SSG for SEO, fast page loads, easy deploy |
| Styling | Tailwind CSS | Matches design-token approach, fast to build/iterate |
| Content | Local JSON/Markdown files (`/content/tours/*.md`) | No database needed at this stage; easy for non-technical edits later |
| Contact | Direct `wa.me` links on every CTA/Book Now button, no form component needed | No backend, no email required |
| Images | Next.js Image component, stored in `/public/images/` or a lightweight image CDN (Cloudinary free tier) | Optimized delivery without infra overhead |
| Hosting | Vercel | Native Next.js support, free tier sufficient for launch traffic |
| Analytics | Google Analytics 4 + Google Search Console | Needed from day one for SEO tracking |
| Schema/SEO | `next-seo` or manual metadata API per page | Supports the meta titles/descriptions already drafted |

---

## 3. Page / Route List

Derived directly from the blueprint sections:

```
/                          → Home
/about                     → About Us
/pilgrimage-tours          → Pilgrimage & Temple Tours (category page)
/pilgrimage-tours/[slug]   → Individual pilgrimage tour detail page
/holiday-packages          → Holiday Packages (category page)
/holiday-packages/[slug]   → Individual holiday package detail page
/contact                   → Contact page
/blog                      → Blog index (optional at launch, per blueprint Section 11)
/blog/[slug]                → Individual blog post (optional at launch)
/policies/privacy          → Privacy Policy
/policies/terms            → Terms & Conditions
/policies/cancellation     → Cancellation & Refund Policy
/policies/pricing          → Pricing Policy
```

**Launch-critical routes:** `/`, `/about`, `/pilgrimage-tours`, `/pilgrimage-tours/[slug]`, `/holiday-packages`, `/holiday-packages/[slug]`, `/contact`, all four `/policies/*` pages.

**Can launch as "coming soon" or omitted entirely:** `/blog` and `/blog/[slug]` — add once content exists, per the blueprint's note that this section can grow post-launch.

---

## 4. Tour/Package Data Model

Each tour (pilgrimage or holiday) should be a structured content entry with this shape, so Antigravity can build the card components (Sections 6–7 of the blueprint) against consistent fields:

```
{
  "slug": "string",
  "name": "string",
  "category": "pilgrimage" | "holiday",
  "duration_days": "number",
  "mode": "train" | "coach" | "flight" | "mixed",
  "departure_date": "date",
  "price": "number",
  "emi_available": "boolean",
  "emi_monthly": "number | null",
  "inclusions": ["string"],
  "itinerary_summary": "string",
  "hero_image": "path",
  "gallery_images": ["path"],
  "whatsapp_message": "string",   // pre-filled text for this tour's Book Now wa.me link
  "seats_available": {
    "class_name": "number"   // optional — only if inventory tracking is needed
  }
}
```

At launch, `seats_available` can be omitted entirely (the live-inventory card pattern from the blueprint is a v2 feature once real booking data exists). `whatsapp_message` should be a short, tour-specific string (e.g. "Hi, I'd like to book the Char Dham Yatra — By Flight") used to build each package's Book Now link.

---

## 5. What's Needed Before Antigravity Can Build

1. **Design tokens** — palette (hex), fonts — pending final logo, to be pulled once available
2. **5–8 real or placeholder tour entries** per category, in the data shape above, so the grid/card components have something to render — 30 sample entries already drafted in the package catalogue
3. **Images** — at minimum, one hero image and one card image per placeholder tour (stock is fine for now, swappable later)
4. **WhatsApp business number confirmed for CTAs** — currently using +91 72041 80555 as the primary Book Now/CTA number; confirm this is the number Prhallada C wants customer messages routed to
5. **Real cancellation/refund terms** — the legal content now uses general, neutral language rather than fixed percentages, so this isn't a launch blocker; specific figures can be added later once supplier terms are finalized

---

## 6. Scope Explicitly Excluded From v1

- Online payment/booking engine
- User accounts/login
- Admin CMS dashboard
- Multi-language support
- Live seat-inventory tracking

These are all reasonable v2 additions once the business has traction and a larger catalogue — flagging them now so Antigravity doesn't over-build for a stage the business isn't at yet.
