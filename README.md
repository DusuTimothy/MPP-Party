# My Political Party (MPP) — Official Party Website

A modern, responsive political party website built with **React**, **Vite**, and **Tailwind CSS**, using **pnpm** as package manager.

The website has been structured after the official **NITDA (National Information Technology Development Agency - [nitda.gov.ng](https://nitda.gov.ng/)) UI Architecture**, featuring Nigerian campaign and civic stock imagery, green-and-white federal party aesthetics, and a modern component structure.

---

## 🏛️ NITDA UI Architecture Mapping

| NITDA Section | MPP Component | Description |
| :--- | :--- | :--- |
| **Top Bar Header** | [`Header.jsx`](file:///home/timothy-dusu/MPP-party/src/components/Header.jsx) | Email (`info@mpp-party.org`), call line (`+234 800 677 7278`), party slogan `"[Insert party slogan]"`, and 2027 election link |
| **Main Navigation** | [`Header.jsx`](file:///home/timothy-dusu/MPP-party/src/components/Header.jsx) | Official Coat-of-Arms shield emblem logo, multi-tier dropdown menus, and red accent `"Join MPP"` CTA |
| **Hero Slider Banner** | [`Hero.jsx`](file:///home/timothy-dusu/MPP-party/src/components/Hero.jsx) | Auto-rotating carousel with authentic Nigerian campaign crowd/rally photos, tag badges, dual CTAs, and 2027 election countdown |
| **Key Links Strip** | [`KeyLinksSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/KeyLinksSection.jsx) | 6 quick access icon cards overlapping hero (Voter Check, Press Releases, Candidate Search, Interventions, Constitution, Forms) |
| **SRAP 2.0 Roadmap** | [`RoadmapBanner.jsx`](file:///home/timothy-dusu/MPP-party/src/components/RoadmapBanner.jsx) | Strategic Democratic Roadmap & Action Plan (SDRAP 2024–2027) with 8 Core Strategic Pillars |
| **DG's Desk** | [`ChairmanDeskSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/ChairmanDeskSection.jsx) | From The National Chairman's Desk: framed portrait in green, quote box, welcome address, digital signature, and bio modal |
| **Our Services Grid** | [`ServicesSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/ServicesSection.jsx) | 6 feature blocks with green square icons, titles, and descriptions |
| **Events Section** | [`EventsSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/EventsSection.jsx) | Upcoming activities with signature calendar date blocks (`28 OCT`, `14 NOV`, `05 DEC`) and interactive RSVP modal |
| **Departments & Podcast** | [`MediaPodcastSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/MediaPodcastSection.jsx) | Explore Party Organs & Directorates on left + "The Civic Voice Broadcast & Podcast" media container on right |
| **Facts & Figures** | [`FactsSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/FactsSection.jsx) | Deep green band with 6 animated count-up metrics (36 States + FCT, 774 LGAs, 2.5M+ Members, 45K+ Volunteers, etc.) |
| **News and Updates** | [`NewsUpdatesSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/NewsUpdatesSection.jsx) | Featured lead news article on left + stack of 3 recent bulletins on right with modal reader |
| **Portals & Forms** | [`PortalsFormsSection.jsx`](file:///home/timothy-dusu/MPP-party/src/components/PortalsFormsSection.jsx) | Service Portals & Forms quick access grid |
| **FAQ Accordion** | [`FAQ.jsx`](file:///home/timothy-dusu/MPP-party/src/components/FAQ.jsx) | Interactive accordion with `useState` toggle |
| **Agency Footer** | [`Footer.jsx`](file:///home/timothy-dusu/MPP-party/src/components/Footer.jsx) | 5-column CityGovt layout with brand, governance, statutory portals, secretariat address, and gazette newsletter |

---

## 🎨 Color Palette & Branding

- `'mpp-green': '#008751'` — Primary Nigerian green
- `'mpp-green-dark': '#00563F'` (and `#014E2C`) — Secondary deep green accent
- `'mpp-white': '#FFFFFF'` — Base & card background
- `'mpp-red': '#CE1126'` — Accent only (used sparingly for "Join MPP" CTA buttons and countdown numbers)

---

## 🚀 Running with pnpm

```bash
# Install dependencies
pnpm install

# Start local Vite development server
pnpm dev

# Build for production
pnpm run build

# Preview build locally
pnpm run preview
```
# MPP-Party
