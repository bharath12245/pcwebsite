# P&C Tours and Travels — Design Tokens
*Derived from the finalized logo. Ready to drop into the Antigravity build prompt.*

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` (primary) | `#1B1447` | Headings, primary text, footer background, nav |
| `--color-magenta` (accent) | `#8C1D82` | CTAs ("Book Now" buttons), links, highlights, price tags |
| `--color-navy-light` | `#2E2566` | Hover states on navy elements, secondary backgrounds |
| `--color-magenta-light` | `#A93F9E` | Hover states on magenta elements, tags/badges |
| `--color-base` (background) | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F6FB` | Card backgrounds, alternating section backgrounds (subtle cool-white, keeps navy/magenta from feeling too stark on pure white) |
| `--color-text-muted` | `#5C5A73` | Body copy, secondary text |
| `--color-border` | `#E4E2ED` | Card borders, dividers |

**Notes:**
- Navy and magenta are both saturated enough to work as CTA colors — magenta is the better choice for primary action buttons ("Book Now") since navy is already carrying heading/nav weight; using both keeps a clear visual hierarchy between "structure" (navy) and "action" (magenta).
- Avoid introducing a third hue — the logo is disciplined to two colors plus neutrals, and the site should match that restraint.

---

## Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headings (H1, H2, logo lockup) | Serif — e.g. **Playfair Display** or **Cormorant Garamond** | Matches the "P&C" wordmark's serif treatment; use for hero headline, page H1s, tour names |
| Body / UI text | Sans-serif — e.g. **Inter** or **Poppins** | Matches the "TOURS & TRAVELS" small-caps sans in the logo; use for body copy, nav, buttons, form labels |
| Tagline / Small caps accents | Sans-serif, letter-spaced, uppercase | For section eyebrows and the tagline itself — mirror the logo's spaced small-caps treatment for "TRAVEL BEYOND BOUNDARIES" style text |

**Suggested pairing:** Playfair Display (headings) + Inter (body) — high-contrast serif/sans pairing that reads premium without tipping into the overly ornate, matching the logo's clean geometric mark rather than an antique/heritage feel.

---

## Logo Usage Notes

- Primary lockup (icon + wordmark + tagline) for header/footer on desktop
- Icon mark alone (globe + plane + "P") works as a favicon and mobile nav mark
- Maintain clear space around the logo at least equal to the height of the "P" in the icon
- On dark/navy backgrounds, the current palette (navy P&C text) won't have enough contrast — prepare a reversed/white version of the wordmark for use on navy section backgrounds (e.g. footer, dark hero overlays)

---

## Tagline Usage

**"Travel Beyond Boundaries"** — pairs naturally with P&C's dual pilgrimage + leisure positioning (spiritual and geographic "boundaries" both work here). Suggested use:
- Hero sub-line or directly under the H1 on the homepage
- Footer, near the logo lockup
- Can replace or sit alongside the earlier placeholder hero line ("Journeys for the Soul and the Season") — either works; the tagline is more brand-consistent now that it's locked in the logo

---

## Updated Design System Summary (supersedes the generic notes in the blueprint/Antigravity prompt)

- **Palette:** Navy (`#1B1447`) + Magenta (`#8C1D82`) on a white/off-white (`#FFFFFF` / `#F7F6FB`) base — replaces the earlier placeholder "terracotta/saffron" suggestion
- **Typography:** Playfair Display (headings) + Inter (body) — replaces the earlier generic "serif-leaning + clean sans" placeholder with concrete font choices
- **Tone:** premium, global, dual-purpose (spiritual + leisure) — the navy/magenta pairing and "Travel Beyond Boundaries" tagline support a slightly more upscale, international feel than a purely devotional palette would, which fits P&C's split pilgrimage/holiday catalogue well
