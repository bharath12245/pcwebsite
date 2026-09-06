# P&C Tours and Travels — Antigravity Build Prompt
*Single execution prompt for Antigravity. Paste this directly into the agent. It references the four supporting documents — attach or paste their contents alongside this prompt.*

---

## Supporting documents to provide alongside this prompt:
1. `pc-tours-travels-website-blueprint.md` — page structure/sections
2. `pc-tours-travels-seo-content.md` — page copy, meta titles/descriptions
3. `pc-tours-travels-legal-policies.md` — Privacy, Terms, Cancellation, Pricing policy content (general/neutral terms, no email listed)
4. `pc-tours-travels-technical-spec.md` — tech stack, routes, data model
5. `pc-tours-travels-package-catalogue.md` — 30 sample pilgrimage/holiday tour entries
6. `pc-tours-travels-design-tokens.md` — finalized palette, typography, logo usage
7. Logo file (PNG/vector)

---

## PROMPT

You are building the website for **P&C Tours and Travels**, a Bengaluru-based tour operator offering pilgrimage/temple yatras and holiday packages. Founded by Prhallada C in 2025, backed by 20+ years of the founder's personal travel-industry experience.

### Tech Stack
Build with **Next.js (App Router)** + **Tailwind CSS**. Store tour/package content as local structured data (JSON files under `/content/tours/`) — no database or CMS backend at this stage. Deploy target: Vercel. Full stack rationale is in the attached technical spec — follow it exactly, including the explicit v1 exclusions (no booking engine, no login, no admin dashboard, no live inventory).

### Site Structure
Build every route listed under "Launch-critical routes" in the technical spec:
- `/` (Home)
- `/about`
- `/pilgrimage-tours` (category page) + `/pilgrimage-tours/[slug]` (detail page template)
- `/holiday-packages` (category page) + `/holiday-packages/[slug]` (detail page template)
- `/contact`
- `/policies/privacy`, `/policies/terms`, `/policies/cancellation`, `/policies/pricing`

Follow the section-by-section layout described in the attached blueprint document for each page — hero, next-departures widget, offer strip, trust strip (generic, no fabricated badges), product grids, FAQ, footer, etc. Skip blog/media sections entirely for v1 (marked optional in the blueprint). There is no `/contact` enquiry form on this build — every contact point is a WhatsApp CTA (see "CTAs & Contact" below).

### Content
Use the exact copy from the attached SEO content document for Home, About, Pilgrimage Tours, and Holiday Packages pages — including meta titles, meta descriptions, H1s, and body text. Use the attached legal policies document verbatim for the four policy pages — this version is written in general, neutral cancellation/refund language rather than fixed percentages, and does not reference an email address anywhere; keep it that way.

### Tour/Package Data
Use the 30 sample tour entries from the attached package catalogue (20 pilgrimage, 10 holiday) as the initial dataset, converted into the JSON shape defined in the technical spec's data model section. These are placeholder names/durations/inclusions — easy for the client to swap out later via the JSON files without touching component code. Price fields should be omitted from the schema entirely for this build (not just left blank) — pricing is not being displayed on the site at this stage.

### Business Details (use exactly as given, do not alter or invent)
- **Business name:** P&C Tours and Travels
- **Owner:** Prhallada C
- **Address:** 2nd Floor, Grand Majestic Mall, No. 2/17, Opp. Gubbi Veeranna Rangamandira, Gandhi Nagar, Bengaluru, Karnataka 560009
- **Phone:** +91 72041 80555 / +91 82201 00261
- **Founded:** 2025 (owner has 20+ years of prior industry experience — phrase this distinction clearly wherever it appears, never blend the two into a single misleading number)

### Design
**Palette:** Navy `#1B1447` (primary — headings, nav, footer) + Magenta `#8C1D82` (accent — CTAs, links, price tags) on a white `#FFFFFF` / off-white `#F7F6FB` base. Use `#2E2566` and `#A93F9E` as hover states for navy/magenta elements respectively. Body copy in `#5C5A73`, borders/dividers in `#E4E2ED`.

**Typography:** Playfair Display for headings/H1s/tour names (matches the logo's serif "P&C" wordmark), Inter for body copy/nav/buttons/forms (matches the logo's sans-serif small-caps "TOURS & TRAVELS").

**Logo:** Use the provided logo file — icon mark (globe + airplane + "P") alone for favicon/mobile nav, full lockup (icon + wordmark + tagline) for desktop header/footer. Prepare a reversed/white version of the wordmark for use on navy backgrounds (footer, dark hero overlays), since the current logo's navy text won't have contrast there.

**Tagline:** "Travel Beyond Boundaries" — use as the hero sub-line beneath the H1 on the homepage, and near the logo lockup in the footer.

### CTAs & Contact
There is no contact form and no email address anywhere on this site. Every CTA — "Book Now" on each tour card, "Enquire," "Talk to Our Travel Team," the sticky mobile button, and the footer contact link — is a direct `wa.me` link to +91 72041 80555. Each tour's Book Now button should use a pre-filled WhatsApp message naming that specific tour (e.g. `https://wa.me/917204180555?text=Hi%2C%20I%27d%20like%20to%20book%20the%20%5Btour%20name%5D`), built from the `whatsapp_message`/tour name field in the data model — do not build a generic contact form as a fallback.

### SEO
Implement per-page metadata (title, description) exactly as specified in the SEO content document. Add `LocalBusiness`/`TravelAgency` schema markup on the homepage and contact page using the business details above. Add `FAQPage` schema for the homepage FAQ block.

### What NOT to build in this pass
Do not implement: online payment, user login/accounts, an admin CMS, live seat-inventory tracking, or multi-language support. These are explicitly deferred — flag them as "v2" in code comments if you scaffold anything that would need them later, but do not build them now.

### Before finalizing
List out any placeholder content still present (tour data/images, design tokens, confirmation that the WhatsApp number is correct) as a single TODO summary at the end of the build, so it's easy for the client to see what still needs real input before going live.
