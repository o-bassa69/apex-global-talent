# DESIGN.md — APEX Global Talent Design System

> **Brand**: APEX Global Talent — Language Institute & Visa Advisory (Malabe, Sri Lanka)  
> **Mission**: Premium, trustworthy, modern international education and employment advisory (Japan & South Korea).

---

## 1. Color Palette & Roles

The palette is strictly restrained to eliminate mismatched gradients (purple, mixed neons). It centers on a deep corporate Navy representing authority & trust, paired with a single warm Amber/Gold accent drawn from the APEX graduation cap logo, anchored by a high-contrast neutral scale.

### Brand & Primary
- **Navy Deep / Primary (`--navy-950`)**: `#09111e` — Hero backgrounds, footer, top header accent, high-contrast headings
- **Navy Surface (`--navy-900`)**: `#0f172a` — Primary buttons, navigation bar background, dark cards
- **Navy Slate (`--navy-800`)**: `#1e293b` — Dark borders, dark card interactive hover states

### Single Brand Accent
- **Amber Primary (`--accent-500`)**: `#f59e0b` — Logo mark highlight, primary CTA accents, review stars, key stats
- **Amber Deep / Hover (`--accent-600`)**: `#d97706` — Accent button hover state, active indicators
- **Amber Soft (`--accent-50`)**: `#fffbeb` — Highlight chip backgrounds, subtle callout cards

### Neutral Scale (Minimum 4.5:1 Contrast for Normal Text)
- **Background Main**: `#fafbfc` — Clean, warm off-white preventing sterile glare
- **Background White**: `#ffffff` — Cards, modals, form inputs
- **Background Muted**: `#f1f5f9` — Timeline lines, subtle dividers, pill tags
- **Border Default**: `#e2e8f0` — Subtle card borders, dividers
- **Border Strong**: `#cbd5e1` — Form input borders, active outlines
- **Text Headings (`--text-heading`)**: `#0f172a` — High impact, bold clarity
- **Text Body (`--text-body`)**: `#334155` — Dark slate body text (16px+ for legible readability)
- **Text Muted (`--text-muted`)**: `#64748b` — Subtitles, dates, meta info (never lower than 4.5:1 against light bg)

### Cultural Semantic Accents (Subtle tags only, no competing gradients)
- **Japan Badge**: `#dc2626` text, `#fef2f2` background, `#fecaca` border
- **Korea Badge**: `#2563eb` text, `#eff6ff` background, `#bfdbfe` border
- **Success / Valid**: `#16a34a`
- **Error / Required**: `#dc2626`

---

## 2. Typography

- **Font Family (Latin & General)**: Inter, system-ui, -apple-system, sans-serif
- **Multilingual Support**:
  - Sinhala (`si`): Noto Sans Sinhala, sans-serif
  - Korean (`ko`): Noto Sans KR, sans-serif
  - Japanese (`ja`): Noto Sans JP, sans-serif
- **Scale**:
  - `Display / Hero H1`: `48px – 64px` (font-extrabold, tracking-tight, line-height: 1.1)
  - `Section H2`: `30px – 36px` (font-bold, tracking-tight, line-height: 1.2)
  - `Card / Sub-heading H3`: `20px – 24px` (font-semibold, line-height: 1.3)
  - `Body Large`: `18px` (line-height: 1.6)
  - `Body Regular`: `16px` (line-height: 1.6, dark slate text `#334155`)
  - `Small / Captions / Pills`: `13px – 14px` (font-medium, line-height: 1.4)
- **Rule**: No body text below 15px in content cards. High contrast throughout.

---

## 3. Spacing & Layout Architecture

- **8px Grid System**: 8px (`0.5rem`), 16px (`1rem`), 24px (`1.5rem`), 32px (`2rem`), 48px (`3rem`), 64px (`4rem`), 96px (`6rem`).
- **Section Spacing**:
  - Desktop: `96px` vertical padding (`py-24`)
  - Mobile: `64px` vertical padding (`py-16`)
- **Container Max-Width**: `1200px` (`max-w-7xl` with `px-4 sm:px-6 lg:px-8`)
- **Layout Rhythm & Variety**:
  - Avoid identical repetitive "pill + center title + center subtitle" patterns.
  - Alternate layout styles:
    - **Hero**: Deep Navy overlay photo, spacious left-to-center high-impact copy.
    - **Split Sections (Left Text / Right Cards or Media)**: Used for Who We Are, Services & Admissions.
    - **Timeline Roadmaps**: Connected step-by-step 5-stage horizontal timeline on desktop, vertical progression rail on mobile.
    - **Cards Grids**: Flex column cards with `mt-auto` action bars for balanced uniform heights.

---

## 4. Components & Elevation

### Cards
- **Border Radius**: `rounded-2xl` (`16px`) for primary cards, `rounded-xl` (`12px`) for badges and inner chips.
- **Shadow**: `shadow-xs` resting (`0 1px 3px rgba(15,23,42,0.06)`), transitioning to `shadow-md` on hover (`-translate-y-1` elevation).
- **Inner Padding**: Consistent `p-6` to `p-8`.
- **Card Heights**: Use flex layout `flex flex-col h-full` with `mt-auto` for action buttons to eliminate staggered button positions.

### Buttons
- **Primary CTA**:
  - Background: Amber `#f59e0b`, text: Navy `#0f172a`, font-bold, `rounded-xl`, `px-6 py-3.5`.
  - Hover: Background `#d97706`, `shadow-lg shadow-amber-500/20`, `-translate-y-0.5`.
- **Secondary CTA (Dark Background)**:
  - Background: `rgba(255,255,255,0.1)`, border: `rgba(255,255,255,0.25)`, text: White, `rounded-xl`, `px-6 py-3.5`.
  - Hover: `rgba(255,255,255,0.2)`, text: White.
- **Secondary / Quiet (Light Background)**:
  - Background: White, border: `#cbd5e1`, text: `#0f172a`, `rounded-xl`, `px-6 py-3`.
  - Hover: Background: `#f8fafc`, border: `#94a3b8`.
- **States**: Clear focus-visible ring (`ring-2 ring-amber-500 ring-offset-2`).

### Timelines (Visa Process 5-Steps)
- **Desktop**: 5 equal connected steps along a continuous horizontal progression line with active amber numbered pins (`01` through `05`).
- **Mobile**: Vertical timeline with connecting line on the left, clear badge, step title, and readable description.

### Testimonials / Stories
- Wider, well-padded cards (`max-w-4xl`), authentic quote styling, verified student badge, star rating, student destination & visa category.

### Stats Bar
- Single unified horizontal strip, large clean numbers (`text-3xl sm:text-4xl font-extrabold text-navy-900`), calm descriptive labels.

---

## 5. Icons & Motion Guidelines
- **Icons**: Lucide React only. Uniform stroke width `1.75px` or `2px`.
- **Animations**: Subtle, smooth `framer-motion` or CSS transitions (`300ms ease-out`).
- **Reduced Motion**: Full fallback via `@media (prefers-reduced-motion: reduce)` disabling transform and heavy shifts.
