# Sunrays Vidhyalaya — React Rebuild Prompt Pack

Paste-ready prompts for a coding agent (Claude Code / Cursor / Antigravity). Run them **in order**, one per session. Each one assumes the previous ones are done.

---

## What the current site actually is (audit)

**Stack:** "Eduka" HTML template by LunarTemp. Bootstrap 5 + jQuery 3.7 + Owl Carousel + WOW.js + Magnific Popup + Isotope. 3 real pages: `index.html`, `about.html`, `contact.html`. No backend in the folder.

**Real facts worth keeping**
- Name: **Sunrays Vidhyalaya** (signage: "Sunrays School", run by **Leo Institute of Education Trust** / Leo Group of Educational Institute)
- Classes: **Nursery to Std 12 (Science & Commerce)**, English & Gujarati medium, GSEB affiliated
- Motto: **सा विद्या या विमुक्तये** ("That is knowledge which liberates")
- Trustee: **Jaysukh Kathiriya** (message to parents exists)
- Address: Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Udhna, Surat
- Phone +91 96244 99911 · sunraysvidhyalaya@gmail.com · Mon–Sat 10:00–17:30
- ERP login: `https://erp.sunraysschool.in/login` · Parent app: Play Store `com.leo.zibma`
- YouTube film: `ckHzmP1evNU` · "10 years of quality service"
- Labs: Computer, Physics, Chemistry · 13 teacher photos (no names/subjects) · 6 gallery photos · building photo
- Brand colours: navy `#111d5e`, saffron `#ff9901`. Logo: saffron sun rays, Saraswati, red wordmark.

**Problems to fix in the rebuild**
- ~25 nav items point to `#` (Awards, Headmaster, GSEB, Streams, Calendar, Syllabus, Sports, Cultural, Admission Procedure, Fees, Withdrawal, TC Updates, Events, Careers, Mandatory Disclosure…) — the IA exists, the pages don't.
- Lorem ipsum on the four level cards (Pre-Primary / Primary / Secondary / Higher Secondary), the video section, "Get in Touch", testimonials header.
- Template numbers that aren't credible for a school: "500+ Total Cources", "750+ Skilled Lecturers", "30 Win Awards". Fake testimonial "Anthony Nicoll". Leftover university sections (Law & Criminology, Acting & Drama) commented out in the HTML.
- Typos: "Trusty", "SCIECNE", "Cources", `maitlo:` (broken email link in the top bar).
- **Spam backlink** under the contact map: "Demografie Karte Deutschland" → mapsdirections.info. Remove.
- Fonts loaded from a third-party domain (`leo-sunrays.enjoyitsolution.com/css2`). Same `<title>` on every page, no meta description, no structured data, no OG.
- 600 KB+ of jQuery plugins for effects that GSAP/Motion do better.

---

## Decisions baked into these prompts (change before running if wrong)

| Area | Default chosen |
|---|---|
| Framework | **Next.js App Router (React 19) + TypeScript** — React, but with SSR/SEO a school site needs. If you want plain Vite React, say so and swap prompt 00. |
| Conversion model | **Enquiry**, not transactional: "Enquire for Admission", call, WhatsApp, campus visit booking. Fee payment stays on the ERP (external link). |
| Benchmark | Heritage-boarding-school tone (Doon / Mayo / Harrow) — calm, editorial, confident. Not "colourful kids' school". |
| Palette | Ivory paper + deep navy ink (their navy, deepened) + **saffron-gold hairline accent** (their saffron, refined). |
| Signature animation | **"Sunrise"** — fine saffron-gold rays fan up from behind a hairline horizon, echoing the logo. Used on preloader, hero, and section dividers. |
| Languages | English first; Gujarati + Devanagari fonts loaded for motto and Gujarati-medium content. Full Gujarati locale = later phase. |
| Content | Everything unverified goes into `content/` marked `TODO_CLIENT` — never ship lorem or template numbers. |
| Hosting | Vercel (or Cloudflare Pages) behind `sunraysschool.in`. |

**Open questions for the client** (non-blocking — prompts use placeholders):
1. Headmaster/Principal name + message, and real faculty names/subjects for the 13 photos.
2. Real numbers: student count, years since founding, board results (e.g. A1 count — the building banner shows "41 A1" in SSC).
3. Fee structure, admission procedure, withdrawal/TC policy text, school calendar PDF.
4. Social links (currently all `#`), WhatsApp number, whether online fee payment URL = ERP.
5. More photography — currently ~25 images, mostly low-res. This is the critical path for "luxury".

---

## How to use

1. Copy the old `assets/img` folder into the new project's `public/legacy/` before prompt 00 (prompts reference it).
2. Paste **Prompt 00 (Master Brief)** at the start of *every* session, then the numbered prompt.
3. After each prompt, run `npm run build && npm run lint` and check at 360 / 768 / 1280 / 1440 before moving on.

---

## MASTER BRIEF — paste at the top of every session

```text
You are building the new website for Sunrays Vidhyalaya, a GSEB-affiliated school in Udhna, Surat (Nursery to Std 12, Science & Commerce, English & Gujarati medium), run by Leo Institute of Education Trust. We are replacing a Bootstrap/jQuery template ("Eduka") with a premium, editorial React site. Tone: a heritage institution — calm, confident, generous whitespace, serif display type, restrained colour. Think Doon School / Harrow / Aesop-level restraint, NOT a colourful kids' template.

STACK (fixed):
- Next.js App Router, React 19, TypeScript strict (no `any`, no non-null assertions without a comment), ESLint + Prettier
- Tailwind CSS v4 with CSS-variable design tokens (no raw hex in components)
- motion (Framer Motion, import from "motion/react") for component/state animation and layout/shared-element transitions
- GSAP + ScrollTrigger + SplitText + @gsap/react (useGSAP) for scroll-driven and timeline animation
- Lenis for smooth scroll, synced to ScrollTrigger
- React Bits components (reactbits.dev), installed as source (TS + Tailwind variant via the React Bits CLI/shadcn registry), then restyled to our tokens. Never use them with their demo colours.
- next/font for all fonts, next/image for all images, lucide-react for the few icons we need (1.25px stroke)
- No jQuery, Bootstrap, Owl, WOW, Font Awesome. No console.log in committed code.

DESIGN TOKENS (defined in prompt 00, always use them):
--paper #F7F3EC (ivory page), --paper-2 #EFE8DC (alt section), --porcelain #FBFAF7 (cards/photo mats)
--ink #0E1638 (deep navy text/dark sections), --ink-2 #2A3358, --muted #5E6478 (body secondary, AA on paper)
--sun #C8892B (saffron-gold accent: hairlines, small caps, icon strokes ONLY), --sun-text #9A6416 (accent when used as text, AA)
--sun-glow #F2B25C (only inside the Sunrise effect / light rays)
--line rgba(14,22,56,0.12) hairlines on paper; --line-dark rgba(247,243,236,0.14) on ink
Accent restraint: saffron-gold never fills a large area. One filled button style in the whole site: "Enquire for Admission" (ink fill, paper text).

TYPE: Display serif "Cormorant Garamond" (or Instrument Serif) 300–500; UI/body "Instrument Sans" (or Inter Tight); Devanagari "Tiro Devanagari Sanskrit" for the motto; Gujarati "Noto Serif Gujarati". Display sizes clamp(2.75rem, 6vw, 6.5rem), tight leading 0.95–1.05. Caps labels 11–12px, tracking 0.18em. Body 17px/1.65, measure 62–70ch.

LAYOUT: 8px base, section padding clamp(96px, 14vw, 200px) vertical, 12-col grid with asymmetric editorial compositions. Prefer large single images, offset captions, numbered lists, hairline rules over boxed card grids.

LUXURY/UX RULES (non-negotiable): no lorem ipsum, no invented numbers, no fake testimonials, no star ratings, no "admissions closing" countdowns, no popup modals on load, no emoji in UI, no stock gradients/blobs, no generic 3-icon feature rows, no carousels that auto-advance faster than 6s. tel:, mailto:, WhatsApp and external ERP links are plain <a>, never next/link. Every animation respects prefers-reduced-motion (falls back to simple opacity or nothing). Signature animation = "Sunrise" (defined in prompt 02).

FACTS: Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Udhna, Surat, Gujarat. +91 96244 99911. sunraysvidhyalaya@gmail.com. Mon–Sat 10:00–17:30. Motto: सा विद्या या विमुक्तये. Trustee: Jaysukh Kathiriya. ERP: https://erp.sunraysschool.in/login. App: https://play.google.com/store/apps/details?id=com.leo.zibma. Film: YouTube ckHzmP1evNU. All content lives in /content/*.ts; any unknown value is a typed TODO_CLIENT placeholder that renders as an obvious dev-only marker and is listed by `npm run content:todo`.

QUALITY FLOOR: semantic HTML, visible focus states, keyboard support, meaningful alt text, LCP < 2.5s, CLS < 0.05, INP < 200ms, verified at 360/768/1280/1440. Finish every task with a self-review against these rules and list anything you couldn't do.
```

---

## 00 — Scaffold, tokens, fonts, content model

```text
CONTEXT: Fresh repo. Legacy images are in /public/legacy (copied from the old site's assets/img: about/, gallery/, lab/, team/, slider/, logo/, testimonial/, video/, etc.).

GOAL: Create the project skeleton, design system, and typed content layer every later prompt builds on.

DO:
1. `npx create-next-app@latest` with TypeScript, App Router, Tailwind, ESLint, src/ dir, import alias "@/*". Set tsconfig strict + noUncheckedIndexedAccess. Add Prettier + prettier-plugin-tailwindcss.
2. Install: motion gsap @gsap/react lenis lucide-react clsx tailwind-merge zod react-hook-form @hookform/resolvers. Add `cn()` util.
3. src/styles/tokens.css: all tokens from the master brief as CSS variables on :root; map them into Tailwind v4 via @theme (colors paper, paper-2, porcelain, ink, ink-2, muted, sun, sun-text, sun-glow, line). Add a `.on-ink` scope that flips text/line tokens for dark sections. Add easing tokens: --ease-out-expo cubic-bezier(0.16,1,0.3,1), --ease-in-out-quart cubic-bezier(0.76,0,0.24,1); durations --d-fast 240ms, --d-base 600ms, --d-slow 1100ms.
4. Fonts with next/font/google: Cormorant Garamond (300,400,500 + italic 400), Instrument Sans (400,500,600), Tiro Devanagari Sanskrit (400), Noto Serif Gujarati (400,500). Expose as CSS vars --font-display, --font-sans, --font-deva, --font-gu. display:swap, preload only display + sans.
5. Typography utilities in globals: .t-display-xl/.t-display-l/.t-display-m (clamp sizes from brief), .t-eyebrow (caps, 11-12px, 0.18em tracking, color sun-text), .t-lead (20-22px), .t-body, .t-meta. Base body: bg paper, color ink, font-sans, 17px/1.65, antialiased, text-rendering optimizeLegibility. ::selection uses sun-glow at 35%.
6. Layout primitives in src/components/layout: <Container> (max 1440, gutters 20/32/56px), <Section tone="paper|paper-2|ink" spacing="default|tight|hero">, <Grid12>, <Hairline accent?>.
7. Content model in src/content/ (TypeScript + zod schemas, no CMS yet):
   - site.ts: name, legalName "Leo Institute of Education Trust", motto {deva, translit, en: "That is knowledge which liberates"}, address parts, geo (lat/lng TODO_CLIENT), phone (E.164 +919624499911 and display "+91 96244 99911"), email, hours, erpUrl, appUrl, youtubeId "ckHzmP1evNU", socials (all TODO_CLIENT), whatsapp TODO_CLIENT.
   - navigation.ts: the full IA (see below).
   - levels.ts: Pre-Primary, Primary (Std 1–5), Upper Primary/Secondary (Std 6–10), Higher Secondary (Std 11–12 Science, Commerce) — each with summary TODO_CLIENT (NO lorem), grades, medium.
   - faculty.ts: 13 entries mapping /legacy/team/01..13 with name/subject TODO_CLIENT.
   - labs.ts: Computer, Physics, Chemistry — rewrite the old copy into 2 tight sentences each in the school's voice (keep facts, drop generic filler).
   - stats.ts: ONLY verified stats; start with { label:"Years of service", value:10 } and placeholders for students, A1 results — flagged TODO_CLIENT. Do NOT include "500 courses", "750 lecturers", "30 awards".
   - messages.ts: Trustee message (Jaysukh Kathiriya — clean up the existing text, fix "Trusty"→"Trustee", remove "[Sunrays Vidhyalaya]" brackets), Headmaster message TODO_CLIENT.
   - gallery.ts, events.ts, notices.ts (TC updates), admissions.ts, fees.ts (TODO_CLIENT), disclosure.ts.
   - A TODO_CLIENT helper type + `scripts/content-todo.ts` that lists every placeholder; add npm script "content:todo".
8. IA (navigation.ts) — restructure the old 25 links into:
   About → The School, Trustee's Message, Headmaster's Message, Faculty, Awards & Achievements
   Academics → Learning Stages, Streams (Science / Commerce), GSEB Affiliation, Laboratories, Career Counselling, Calendar, Syllabus
   Life at Sunrays → Sports, Culture & Arts, Events, Gallery
   Admissions → Procedure, Fee Structure, Withdrawal & TC Policy, TC Updates, Pay Fees (external ERP)
   Contact; utility: Careers, Mandatory Disclosure, Parent Login (ERP, external), Parent App (external)
9. Route stubs (app router, each exporting metadata and rendering an <h1> only): /, /about, /about/trustee, /about/headmaster, /about/faculty, /about/awards, /academics, /academics/streams, /academics/gseb, /academics/labs, /academics/career-counselling, /academics/calendar, /academics/syllabus, /life, /life/sports, /life/culture, /events, /gallery, /admissions, /admissions/procedure, /admissions/fees, /admissions/policy, /admissions/tc-updates, /admissions/enquire, /contact, /careers, /mandatory-disclosure, /privacy, not-found.
10. next.config: images (avif/webp), redirects from old URLs: /index.html → /, /about.html → /about, /contact.html → /contact (permanent).
11. Logo: keep /legacy/logo/logo.png for now but create <Wordmark> — "SUNRAYS" in display serif caps with 0.22em tracking + small "VIDHYALAYA · SURAT" eyebrow, and a <SunMark> SVG (a half-sun of 13 fine rays over a horizon line, stroke currentColor 1.25px) we'll animate later. The full colour crest is used only in footer and preloader.

ACCEPTANCE:
- build + lint pass with zero warnings; no `any`.
- /dev-tokens page (excluded from sitemap, noindex) showing every colour token with its contrast ratio vs paper and ink, all type styles, and the SunMark.
- `npm run content:todo` prints the placeholder list.
- No lorem anywhere: `grep -ri "lorem\|variations of passages" src` returns nothing.
```

---

## 01 — Motion architecture

```text
CONTEXT: Prompt 00 done. Tokens, fonts, content and route stubs exist.

GOAL: One coherent motion system so GSAP, Lenis and Motion never fight.

DO:
1. src/lib/motion/gsap.ts: register ScrollTrigger, SplitText, useGSAP once (client-only module). Export gsap. Set gsap.defaults({ ease: "expo.out", duration: 0.9 }).
2. <SmoothScroll> client provider: Lenis (lerp 0.1, smoothWheel true, syncTouch false), driven by gsap.ticker (lenis.raf(time*1000)), gsap.ticker.lagSmoothing(0), lenis.on("scroll", ScrollTrigger.update). Expose lenis via context + useLenis() hook (scrollTo for anchor links, stop/start for overlays). Disable Lenis entirely when prefers-reduced-motion.
3. <MotionProvider>: MotionConfig reducedMotion="user", default transition { duration: 0.6, ease: [0.16,1,0.3,1] }.
4. useReducedMotion-aware helper `useMotionSafe()` returning booleans for GSAP code paths; every GSAP effect checks it and uses gsap.matchMedia() with "(prefers-reduced-motion: no-preference)" + breakpoints.
5. Route transitions: app/template.tsx with a subtle page enter (opacity 0→1, y 12→0, 500ms) via motion; on route change call ScrollTrigger.refresh() after images settle and lenis.scrollTo(0, {immediate:true}).
6. ANIMATION OWNERSHIP RULE (write as a comment block in src/lib/motion/README.md and follow it):
   - GSAP owns: anything tied to scroll position, pinning, scrubbing, SplitText, the Sunrise signature, timelines with >3 steps.
   - Motion owns: hover/press/state, mount/unmount (AnimatePresence), layout & shared-element (layoutId), menus, drawers, modals.
   - Never animate the same property on the same element with both.
   - Only animate transform and opacity (and clip-path for curtains). No animating width/height/top/left.
7. Wire providers into app/layout.tsx (html lang="en", font vars on <html>, bg paper).

ACCEPTANCE: smooth scroll works with wheel/trackpad, native on touch; ScrollTrigger markers line up after resize (test with a throwaway pinned section on /dev-tokens, then remove markers); reduced-motion in OS turns off Lenis and all scroll effects; no hydration warnings.
```

---

## 02 — Motion primitives + React Bits layer + "Sunrise" signature

```text
CONTEXT: Motion architecture from 01 exists.

GOAL: A small, reusable motion kit and a curated, restyled React Bits set. Everything later composes these — no one-off animation code in pages.

A) OUR PRIMITIVES (src/components/motion/):
1. <Reveal as y=24 delay stagger> — GSAP ScrollTrigger fade+rise, start "top 85%", once. Children stagger 0.08s.
2. <SplitHeading as="h1|h2" variant="lines|words"> — GSAP SplitText into lines with mask (overflow hidden wrappers), yPercent 110→0, 1.1s expo.out, stagger 0.09. Re-split on resize (debounced). Accessible: aria-label on parent with full text, split spans aria-hidden.
3. <ImageCurtain> — wraps next/image; clip-path inset(100% 0 0 0) → inset(0) on enter, with inner image scale 1.15→1 scrubbed lightly. Used for all editorial images.
4. <ParallaxMedia speed=0.15> — yPercent scrub, disabled < 768px.
5. <Magnetic strength=0.25> — Motion springs for the primary CTA and nav icons (pointer: fine only).
6. <Marquee speed direction> — GSAP xPercent loop, pauses on hover and when offscreen.
7. <Counter to from duration> — counts up once on enter using GSAP, tabular-nums, Indian grouping via Intl.NumberFormat('en-IN'). Use only with verified stats.
8. <HairlineDraw> — scaleX 0→1 from left, 1.2s, for section dividers.

B) SIGNATURE: <Sunrise> (src/components/signature/Sunrise.tsx)
- An SVG: a horizon hairline (1px, --sun) spanning the container and 13 rays (1px strokes, --sun → transparent gradient) fanning 180° from a point on the horizon, like the logo's sun.
- Timeline: horizon draws from centre outward (0.9s) → rays grow from 0 length one by one from centre outward (stagger 0.05, 1.2s expo.out) → a soft --sun-glow radial bloom fades in to 18% behind the rays → a single specular glint travels along the horizon left→right (1.6s) and is gone.
- Props: mode "intro" (plays once), "scroll" (rays scrub with scroll progress), "ambient" (rays breathe opacity 0.6↔1 over 6s). size, rays count.
- Reduced motion: render final state statically.
- Used in: preloader, hero, section breaks before Admissions CTA, footer. Never more than once per viewport.

C) REACT BITS (install TS+Tailwind source into src/components/reactbits/, then edit each to accept our tokens as props/defaults; remove any demo colours, emojis, rainbow gradients):
- LightRays (Backgrounds) → hero only, rays colour --sun-glow, low intensity (opacity ~0.25), origin top-center, followMouse off on mobile. Fallback static gradient image if WebGL unavailable or reduced motion.
- SplitText / BlurText → only if our SplitHeading doesn't cover a case; prefer ours.
- ScrollVelocity → one slow marquee of the motto/values in display serif, 1 line, ink on paper.
- CountUp → can replace our Counter if cleaner; same Indian-format rule.
- Masonry → gallery grid.
- CircularGallery or DomeGallery → ONE immersive "campus life" moment on /life; tone down distortion, use paper background.
- ProfileCard or TiltedCard → faculty portraits (tilt max 6°, no glare rainbow; glare white 8% max).
- SpotlightCard → used sparingly for the Streams (Science/Commerce) pair; spotlight colour --sun-glow at 10%.
- StaggeredMenu or CardNav → mobile navigation overlay (restyled ink background, display serif items).
- ScrollStack → admission procedure steps.
- FadeContent / AnimatedContent → only where Reveal doesn't fit.
DO NOT use: ClickSpark, Lanyard, Ribbons, Particles, Aurora, GradientText, ShinyText on body copy, PixelTransition, GooeyNav, anything neon or "techy". It must feel like a school with heritage, not a SaaS landing page.

D) A /dev-motion page (noindex) demonstrating every primitive, the Sunrise in all 3 modes, and each restyled React Bits component in light and ink sections.

ACCEPTANCE: each component < 150 lines and typed; all listen to reduced motion; no layout shift during reveals (reserve space, animate transform only); Lighthouse on /dev-motion has no CLS > 0.02; WebGL components lazy-load (dynamic import, ssr:false) and pause when offscreen.
```

---

## 03 — Global chrome: preloader, header, mega menu, mobile nav, footer

```text
CONTEXT: 00–02 done.

GOAL: The frame every page sits in.

1. PRELOADER (first visit per session only, sessionStorage flag, max 1.8s, skip if reduced motion or if page is already cached-fast):
   ink background → <Sunrise mode="intro"> in --sun-glow → crest/wordmark fades up → motto in Devanagari (font-deva) fades in beneath with its English translation in small caps → whole layer lifts with clip-path inset(0 0 100% 0) revealing the hero, which then starts its own intro. Must not block LCP: hero HTML renders underneath immediately.
2. UTILITY BAR (desktop only, 36px, ink-2 bg, paper text 12px): address short form · hours · plain <a href="tel:+919624499911"> · <a href="mailto:sunraysvidhyalaya@gmail.com"> (fix the old "maitlo:" bug) · right side: "Parent Login" (ERP, external, rel noopener) · "Parent App". Hides on scroll down.
3. HEADER: transparent over hero, becomes paper with hairline bottom + backdrop-blur after 80px (Motion, not GSAP). Left: SunMark + Wordmark. Centre: About, Academics, Life at Sunrays, Admissions, Contact (caps, 12px, 0.16em tracking). Right: single filled button "Enquire for Admission" (ink, Magnetic) → /admissions/enquire. Hide on scroll down, reveal on scroll up.
4. MEGA MENU (desktop): opens on hover-intent (120ms) and on click/Enter; full-width panel on paper, 3 columns: left = section title in display serif + one-line description; middle = link list with numbered index (01, 02…) and hairline rules, hover moves a small --sun dash beside the link; right = one editorial image (ImageCurtain) relevant to the section + caption. Esc closes, focus trapped, arrow keys navigate, aria-expanded/aria-controls correct.
5. MOBILE NAV: restyled React Bits StaggeredMenu (or CardNav) — ink overlay, items in display serif 40px, accordion for sub-links, contact block at bottom (call, WhatsApp, email as plain anchors), Lenis stopped while open, body scroll locked.
6. FOOTER (ink section): top band = big display line "Where knowledge liberates." with <Sunrise mode="scroll"> rising as you reach the bottom; 4 columns: crest + motto (deva + English) + 2-line school description; Explore links; Admissions links; Visit (full address, hours, phone, email, small embedded-map link). Bottom row: © year Leo Institute of Education Trust · Mandatory Disclosure · Privacy · Careers · socials (only render those that exist in content — no `#` links). Google Play badge restyled as a hairline outlined button, not the stock badge.
7. Skip-to-content link, <main id="main">.

ACCEPTANCE: zero `href="#"` anywhere; header never covers anchor targets (scroll-margin-top); keyboard-only user can reach every menu item; mobile menu tested at 360px; preloader shows once per session and never on reduced motion.
```

---

## 04 — Home page

```text
CONTEXT: 00–03 done. Home is a stub.

GOAL: An editorial home page that tells the school's story in ~8 scenes. Replace every template section of the old index.html; nothing generic survives.

SCENES:
1. HERO (100svh, ink): legacy/slider/slider-1.jpg (school building) as a full-bleed image with a deep ink gradient from bottom (60%) — colour-graded via CSS (slight desaturation, warm lift) — plus React Bits LightRays from top centre in --sun-glow at low intensity (desktop only). Left-bottom aligned: eyebrow "Udhna, Surat · Nursery to Std 12"; SplitHeading display-xl: "A brighter tomorrow, / taught with care." (keep the spirit of old copy "Start your beautiful and bright future" — rewrite, don't copy); lead line: "A school with a long-term vision: to raise not only achievers, but thoughtful citizens who lead." Two actions: filled "Enquire for Admission", text link with arrow "Book a campus visit". Bottom-right: small "Scroll" indicator with a hairline that draws. Hero image scales 1.08→1 over the intro.
2. MOTTO STATEMENT (paper): centred सा विद्या या विमुक्तये in font-deva at display size, with translit + "That is knowledge which liberates." beneath, separated by <Sunrise mode="scroll"> small. One paragraph (max 60ch) on what the motto means at Sunrays (TODO_CLIENT body, write a tasteful draft marked for approval).
3. LEARNING STAGES: not 4 equal cards. Sticky-left layout: left column pinned with title "Every stage, one philosophy" and stage counter (01/04); right column scrolls through Pre-Primary, Primary, Secondary, Higher Secondary — each a large image + grades + 2-line summary (from levels.ts) + link. GSAP pin on desktop, plain stack on mobile.
4. ABOUT TEASER: asymmetric 12-col: big ImageCurtain (legacy/about/01.jpg) cols 1–7, offset smaller image (about/02.jpg) overlapping bottom-right; text cols 8–12: eyebrow "About", heading "A decade of quiet excellence", 3 sentences, link "Our story". Replace the old "See our best skills / Learn courses online / Best trainers" bullet list with three short, real commitments (TODO_CLIENT drafts: e.g. "GSEB curriculum, English & Gujarati medium", "Science & Commerce through Std 12", "Labs for computing, physics and chemistry").
5. NUMBERS (paper-2): only verified stats from stats.ts, set in display serif, Counter on enter, hairline separators, no icons. If fewer than 3 verified stats exist, render this section as a single sentence ("Ten years. One campus. Every child known by name.") instead of a stat row.
6. LABORATORIES: horizontal pinned scroll on desktop (GSAP, 3 panels: Computer, Physics, Chemistry) — each panel full-height image with caption block; on mobile, vertical stack. Link to /academics/labs.
7. FILM: legacy/video/01.jpg poster, full-bleed, a circular hairline play button with "Watch the film" (Magnetic); opens a Motion modal with YouTube nocookie embed (ckHzmP1evNU), loaded only on click. Focus trap, Esc closes.
8. TRUSTEE'S MESSAGE: editorial pull quote layout — large opening quote mark in --sun, cleaned-up excerpt of Jaysukh Kathiriya's message in display serif italic, name + "Trustee, Leo Institute of Education Trust", link to full message.
9. FACULTY STRIP: ScrollVelocity-style slow row of the 13 portraits (grayscale → colour on hover, portrait 3:4), heading "The people who teach here", link "Meet the faculty". No names until provided (show nothing, not "Teacher 1").
10. GALLERY PREVIEW: 5-image asymmetric collage (gallery/01–06) with ImageCurtain reveals + "View the gallery".
11. ADMISSIONS CTA (ink): <Sunrise mode="intro"> plays on enter; heading "Admissions open for 2026–27" (year from content, TODO_CLIENT confirm); two lines; filled "Enquire for Admission", plain tel link, WhatsApp link.

REMOVE completely: "500+ Total Cources", "750+ Skilled Lecturers", "30 Win Awards", the fake "Anthony Nicoll" testimonial, skills progress bars, enrolment form with university courses, departments section.

ACCEPTANCE: hero image is the LCP element, priority + sizes set, < 2.5s on throttled 4G; no section uses an identical card grid; each scene works without JS (content visible); reduced-motion shows everything static; page reads well at 360px.
```

---

## 05 — About cluster: story, messages, faculty, awards

```text
CONTEXT: 00–04 done.

GOAL: /about, /about/trustee, /about/headmaster, /about/faculty, /about/awards.

1. Shared <PageHero> component for inner pages (not the old breadcrumb banner): paper background, eyebrow + SplitHeading + optional lead, a single wide ImageCurtain below with caption; breadcrumbs as small caps text above the eyebrow (with BreadcrumbList JSON-LD).
2. /about: chapters with numbered index (I, II, III): "Our beginnings" (Leo Institute of Education Trust, Udhna campus, 10 years — TODO_CLIENT founding year), "What we believe" (motto + 3 principles as large numbered lines, not icon cards), "The campus" (building image + labs + classrooms), "Mediums & board" (GSEB, English & Gujarati medium). Side sticky table of contents on desktop with active section indicator (--sun dash).
3. /about/trustee and /about/headmaster: letter layout — narrow 62ch column, display serif drop cap, signature line, portrait (TODO_CLIENT) in a porcelain mat. Headmaster content placeholder only.
4. /about/faculty: grid of 13 portraits using restyled ProfileCard/TiltedCard (tilt ≤ 6°). Click a portrait → shared-element morph (Motion layoutId on the image) into a full-screen detail sheet with larger photo, name, subject, qualifications, a short line in their voice (all TODO_CLIENT). Esc/back closes and morphs back. URL updates with ?teacher=slug (shallow) for shareability. Filter chips by department (Pre-primary, Primary, Secondary, Science, Commerce) using Motion layout animations — chips are outlined hairline pills, not filled.
5. /about/awards: vertical timeline by year, each entry: year in display serif, title, short note, optional image; HairlineDraw on the spine as you scroll. Seed with the SSC A1 achievement (TODO_CLIENT count; the building banner suggests "41 A1"), everything else placeholder.

ACCEPTANCE: shared-element morph is smooth (no image flash, no layout jump) and degrades to a fade on reduced motion; faculty grid is keyboard navigable; each page has unique metadata.
```

---

## 06 — Academics cluster

```text
CONTEXT: 00–05 done.

GOAL: /academics (overview), /academics/streams, /academics/gseb, /academics/labs, /academics/career-counselling, /academics/calendar, /academics/syllabus.

1. /academics overview: PageHero + the four learning stages as an index list (large numbered rows with hairlines; hover reveals a floating image that follows the cursor on desktop — implement with Motion springs, hidden on touch).
2. /academics/streams: Science and Commerce as a split composition using restyled SpotlightCard (two halves, spotlight --sun-glow 10%); each lists subjects, labs used, pathways after Std 12 (TODO_CLIENT lists, provide sensible GSEB defaults marked for approval).
3. /academics/gseb: affiliation details (affiliation/index no. TODO_CLIENT), what GSEB means for parents, mediums offered. Calm text page with a facts sidebar.
4. /academics/labs: one long editorial page — each lab gets a full-bleed ImageCurtain, eyebrow, heading, the rewritten 2-sentence copy from labs.ts, and an equipment list (TODO_CLIENT).
5. /academics/career-counselling: what the programme offers, who leads it, a soft CTA to book a session (goes to enquiry form with topic preselected).
6. /academics/calendar: month-by-month list from content (events.ts subset) with term dates; a "Download calendar (PDF)" link if a PDF exists in content; otherwise hide the link.
7. /academics/syllabus: accordion by standard (Nursery → 12), each with subjects and a PDF link per standard when available. Accordion animated with Motion (height via layout, not raw height animation), aria-expanded correct.

ACCEPTANCE: all pages share PageHero + Section rhythm; nothing renders a broken PDF link; accordion and cursor-follow image both keyboard/touch safe.
```

---

## 07 — Life at Sunrays: sports, culture, events, gallery

```text
CONTEXT: 00–06 done.

GOAL: /life, /life/sports, /life/culture, /events (+ /events/[slug]), /gallery.

1. /life: the ONE immersive moment — restyled React Bits CircularGallery (or DomeGallery) of campus images on paper, low distortion, drag + wheel, with a caption reading "Life at Sunrays" in display serif overlaid. Below it, two large entry tiles: Sports, Culture & Arts.
2. /life/sports and /life/culture: editorial pages — season/activity list, achievements, image pairs. Content TODO_CLIENT.
3. /events: upcoming vs past tabs (Motion layoutId underline). Event row: date block in display serif (day large, month small caps), title, one line, location. /events/[slug] detail with ImageCurtain hero, body, gallery strip, "Add to calendar" (.ics generated route handler). generateStaticParams from events.ts.
4. /gallery: restyled React Bits Masonry; filters by album (Campus, Annual Day, Sports, Labs, Celebrations) with FLIP via Motion layout. Click → lightbox with shared-element morph from thumbnail (layoutId), arrow keys, swipe on touch, Esc to close, caption + album, preloads neighbours. Images through next/image with proper sizes; blur placeholders generated at build (plaiceholder or sharp script).

ACCEPTANCE: gallery handles 100+ images without jank (virtualise or paginate after 40); lightbox is fully accessible (role="dialog", aria-modal, focus return); WebGL gallery pauses offscreen and falls back to a simple grid on reduced motion or no WebGL.
```

---

## 08 — Admissions + enquiry flow

```text
CONTEXT: 00–07 done. The site's conversion goal is an admission enquiry, not payment.

GOAL: /admissions, /admissions/procedure, /admissions/fees, /admissions/policy, /admissions/tc-updates, /admissions/enquire.

1. /admissions: ink PageHero with <Sunrise mode="intro">; "Admissions 2026–27" (TODO_CLIENT year); 3 entry rows: Procedure, Fee Structure, Policies; primary CTA.
2. /admissions/procedure: restyled React Bits ScrollStack — each step a card (porcelain, hairline border): 01 Enquire, 02 Campus visit, 03 Interaction/assessment by stage, 04 Documents, 05 Confirmation. Step bodies TODO_CLIENT; include a documents checklist (birth certificate, previous report card, LC/TC, photos, Aadhaar of child — mark for approval).
3. /admissions/fees: clean table by standard and medium; amounts in INR with Indian grouping via Intl.NumberFormat('en-IN'), stored as integer paise in content; "Pay fees online" = plain external <a> to ERP. If fees not provided, show "Fee details are shared during your campus visit" + CTA, not an empty table.
4. /admissions/policy: withdrawal & TC policy as readable long-form with anchor TOC.
5. /admissions/tc-updates: searchable list (client-side filter by name/GR no./date) from notices.ts; each entry date + student name initial + standard. Privacy: never show full personal data — confirm with client what's allowed (TODO_CLIENT note in code).
6. /admissions/enquire: the form.
   Fields: parent name, phone (Indian mobile validation, +91 prefix fixed), email (optional), child's name, standard applying for (select Nursery→12, with stream for 11–12), medium (English/Gujarati), preferred visit date (optional), message, consent checkbox.
   react-hook-form + zod (shared schema client/server). Submit via a Next.js Server Action: validate, rate-limit (by IP, e.g. 5/hour, Upstash or in-memory fallback), honeypot field, send email via Resend to the school (RESEND_API_KEY, ENQUIRY_TO env), and optionally store in DB later (prompt 10).
   States: idle, submitting (button text changes, no spinner gif), success (inline panel with Sunrise ambient, "Thank you — we'll call you within one working day", plus WhatsApp and call anchors), error (inline, specific, form keeps values).
   Field style: underline inputs (hairline bottom border, label floats with Motion), large tap targets, visible focus ring in --sun.
   Support ?topic=career-counselling and ?standard=11 to prefill.
7. Floating contact pill (bottom-right, all pages except /admissions/enquire): small ink pill "Enquire" + WhatsApp + call icons, appears after 40% scroll, never covers content on mobile (safe-area insets). No popup modal.

ACCEPTANCE: form works without JS (progressive enhancement via server action), errors announced via aria-live, emails arrive in a styled plain template, no secrets in client bundle, `.env.example` documented.
```

---

## 09 — Contact, careers, disclosure, legal, 404

```text
CONTEXT: 00–08 done.

GOAL: /contact, /careers, /mandatory-disclosure, /privacy, not-found.

1. /contact: split layout — left: display heading "Visit us in Udhna", full address, hours (Mon–Sat 10:00–17:30), phone, email, WhatsApp, "Get directions" (plain <a> to Google Maps directions URL). Right: map — a custom-styled static map image (or a lazy-loaded Google Maps embed only after user clicks "Load map", for performance and privacy). REMOVE the old spam link ("Demografie Karte Deutschland"). Below: a short contact form (name, phone, message) reusing the enquiry server action with type="contact".
2. /careers: why teach here (3 short paragraphs), open positions list from content (empty state: "No openings right now — send your CV to …" with mailto), application via mailto or simple form with CV upload (size/type limits, sent via Resend attachment).
3. /mandatory-disclosure: structured tables (school info, documents, staff, results, infrastructure) from disclosure.ts with PDF links; all TODO_CLIENT. Plain, highly legible, printable (print stylesheet).
4. /privacy: privacy policy covering the enquiry form data (what is collected, why, retention, contact) — draft clearly marked for school approval.
5. not-found: ink page, small Sunrise ambient, "This page has wandered off.", links to Home, Admissions, Contact. Status 404.

ACCEPTANCE: no third-party map loads until user consent click; print view of disclosure is clean; every tel/mailto/WhatsApp link is a plain anchor.
```

---

## 10 — (Optional) Admin panel for the school office

```text
CONTEXT: 00–09 done; content lives in /content/*.ts. The office needs to update notices, events, TC updates, gallery and read enquiries without a developer.

GOAL: A small, secure admin at /admin.

1. Supabase (Postgres + Auth + Storage) or Prisma + Postgres + Cloudflare R2 — choose Supabase by default. Tables: events, notices (tc_updates), gallery_items (album, image path, caption, order), faculty, enquiries (status: new/contacted/visited/admitted/closed, notes), settings (admissions year, fees JSON).
2. Auth: email magic link, allow-list of admin emails; RLS policies so public can only read published rows and insert enquiries.
3. Admin UI (same design system, denser): sidebar, tables with search/filter, forms with zod, image upload with client-side resize to 2400px max + webp, drag to reorder gallery.
4. Public pages read from DB with ISR (revalidate 300) and on-demand revalidatePath after admin edits; /content/*.ts become seed data (seed script).
5. Enquiries inbox: list with status pipeline, call/WhatsApp quick actions (plain anchors), CSV export.
6. Audit log table for edits.

ACCEPTANCE: unauthenticated users get 404 on /admin routes; RLS tested; public site still builds if DB is temporarily down (falls back to last static build).
```

---

## 11 — SEO, structured data, social

```text
CONTEXT: All pages built.

GOAL: Make Sunrays findable for "school in Udhna Surat", "GSEB school Surat", "English medium school Udhna", "Science commerce school Udhna".

1. Metadata per route via generateMetadata: unique title template "%s · Sunrays Vidhyalaya, Udhna, Surat", descriptions 140–160 chars, canonical URLs on sunraysschool.in, alternates.
2. JSON-LD: site-wide School (schema.org "School" / EducationalOrganization) with name, alternateName "Sunrays School", parentOrganization "Leo Institute of Education Trust", address (PostalAddress, Udhna, Surat, Gujarat, IN), geo, telephone, email, openingHours "Mo-Sa 10:00-17:30", logo, sameAs (socials when available). BreadcrumbList on inner pages. Event on event pages. Person for trustee/headmaster pages. VideoObject for the film. FAQPage only if a real FAQ exists.
3. app/sitemap.ts (exclude /dev-*, /admin), app/robots.ts.
4. Dynamic OG images with next/og: paper background, display serif title, small SunMark + "Sunrays Vidhyalaya · Surat"; per-page title.
5. Favicons/manifest from SunMark (SVG favicon + PNG fallbacks), theme-color ink.
6. Google Business Profile consistency: NAP identical to the profile (TODO_CLIENT confirm exact listing name).

ACCEPTANCE: Rich Results Test passes for School, BreadcrumbList, Event; no duplicate titles; OG previews render on WhatsApp (1200x630, < 300KB).
```

---

## 12 — Hardening + anti-template pass

```text
CONTEXT: Everything built.

GOAL: Ship-ready quality.

1. Performance: Lighthouse mobile ≥ 95 performance on /, /admissions, /gallery. LCP < 2.5s, CLS < 0.05, INP < 200ms. Audit bundle (next build + @next/bundle-analyzer): WebGL/React Bits heavy components dynamically imported; GSAP plugins only where used; fonts subset; images AVIF/WebP with correct sizes; no image > 300KB above the fold.
2. Accessibility: axe on every route = 0 violations; keyboard walk-through of header, mega menu, mobile menu, faculty sheet, lightbox, form; colour contrast verified for every text token use (sun as text must use --sun-text); reduced motion verified by toggling OS setting; screen-reader check of SplitHeading text.
3. Responsive: manual pass at 360, 390, 768, 1024, 1280, 1440, 1920. No horizontal scroll anywhere. Tap targets ≥ 44px.
4. Content: `npm run content:todo` → produce CONTENT_CHECKLIST.md for the client listing every placeholder with page + field. grep for lorem, "variations of passages", "Anthony", "Cources", "SCIECNE", "maitlo", "Demografie", "href=\"#\"" → all zero.
5. ANTI-TEMPLATE PASS — go page by page and fix anything that looks like a theme:
   - identical icon+title+text card grids → convert to numbered editorial lists or asymmetric layouts
   - everything centred → introduce left-aligned editorial compositions
   - more than one filled button visible per viewport → demote to text links
   - accent colour used as a fill → change to hairline/text
   - animations that play on every element → keep only meaningful ones; max one "hero" motion per viewport
   - generic copy ("best", "world-class", "quality education") → rewrite specific or delete
6. Error/edge: offline/slow images (blur placeholders), JS disabled (content visible), very long names in faculty/TC lists, Gujarati text rendering.
7. Deploy to Vercel, connect sunraysschool.in via Cloudflare DNS (keep erp.sunraysschool.in untouched!), set env vars, 301s from old .html URLs, submit sitemap in Search Console.

ACCEPTANCE: a short LAUNCH_REPORT.md with Lighthouse scores, axe results, bundle sizes, remaining TODO_CLIENT items, and screenshots at 390 and 1440 of every top-level page.
```
