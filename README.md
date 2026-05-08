# Aidi Wealth — Nuxt 3

Nuxt 3 conversion of the Aidi Wealth landing page. Markup, styles, and behavior
are preserved verbatim from the source HTML — split into single-file Vue
components and wired up with Nuxt config and client-side plugins for the
third-party widgets.

## Run

```bash
npm install
npm run dev          # → http://localhost:3000
```

## Build

```bash
npm run build        # SSR/Node build
npm run generate     # Static site (recommended for this landing page)
npm run preview      # Preview the build locally
```

## Structure

```
.
├── app.vue                         # Root — hosts <NuxtLayout> + <NuxtPage>
├── nuxt.config.ts                  # <head> meta, favicon (data URI), fonts, global CSS
├── assets/
│   └── css/main.css                # All site styles (brand tokens + sections)
├── layouts/
│   └── default.vue                 # Pass-through layout
├── pages/
│   └── index.vue                   # Composes the five section components in order
├── components/                     # Auto-imported by Nuxt
│   ├── TheNav.vue                  # Top nav with full Aidi brand SVG + "For Investors" CTA
│   ├── TheHero.vue                 # Hero — title, tagline, stats, autoplay video card
│   ├── TheProducts.vue             # Four asset-class cards: Stocks/ETFs · Treasury · Gold · Crypto
│   ├── TheStrip.vue                # Contact strip above footer
│   └── TheFooter.vue               # joinaidi-style footer: watermark + full disclaimer
├── plugins/                        # Client-only third-party widget bootstraps
│   ├── cal.client.ts               # Cal.com embed (binds to data-cal-* on the hero CTA)
│   └── intercom.client.ts          # Intercom widget (app_id: vt8ulx74)
└── public/                         # Empty — favicon is inlined as data URI in nuxt.config
```

## Notes on the conversion

- **Styles**: all CSS lives in `assets/css/main.css` and is registered globally
  via `nuxt.config.ts → css`. Brand tokens, fonts, and per-section rules are
  unchanged from the source.
- **Favicon**: kept as the inline SVG data URI, declared in `nuxt.config.ts →
  app.head.link`.
- **Fonts**: Cormorant Garamond + Instrument Sans loaded via Google Fonts with
  `preconnect` hints, declared in `nuxt.config.ts`.
- **Cal.com & Intercom**: extracted from inline `<script>` blocks into
  `plugins/*.client.ts`. The `.client.ts` suffix tells Nuxt to skip them
  during SSR — required because both touch `window` and `document`. The hero's
  "Talk to us" button still uses the same `data-cal-link` / `data-cal-namespace`
  / `data-cal-config` attributes, which the Cal embed script auto-binds to
  on the client.
- **Components are auto-imported** — no explicit `import` statements needed in
  `pages/index.vue`. Anything in `/components` whose filename matches the tag
  is wired up automatically by Nuxt.
- **External link target**: the brand mark in the nav still points to
  `https://joinaidi.com`, and the hero "Platform" badge points there too,
  matching the source.
