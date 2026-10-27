This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Content operations

- **Edit text:** change keys in `src/i18n/locales/en.json`, `si.json`, `ko.json`, and `ja.json`. Do not hard-code UI copy in components. Language choice is stored in `localStorage` as `apex_selected_lang`.
- **Logo:** upload the PNG to `public/assets/logo.png` (used on white backgrounds: navbar) and `public/assets/logo-white.png` (white/mono version for the navy hero, footer, partners diagram). Square PNG with a transparent background, 512×512 or larger. If the file is named `apex global talent.png`, that path works too — rename it to `logo.png` when you can, since spaces in URLs are awkward.
- **Partners:** add or remove objects in `src/data/partners.json` (`name`, `logo`, `country` `JP`/`KR`, optional `website`). Put logo files in `public/assets/partners/`.
- **Gallery photos:** add files under `public/assets/gallery/japan/` or `korea/`, then add an entry in `src/data/gallery.json` (`fileName`, `image`, `country`, `caption` in en/si/ko/ja). Use JPG/WebP at max 1800px and under ~500 KB (convert HEIC first — browsers do not display it). Original uploads can stay in `media-originals/` (git-ignored). Home slideshows use the first 5 per country; View All shows all. `SLIDE_INTERVAL` is `30000` ms in `src/components/GallerySection.tsx`.
- **Team members:** add objects in `src/data/team.json` (`name`, `photo`, `role` in en/si/ko/ja). Photos go in `public/assets/team/` as lowercase, hyphenated JPGs (e.g. `guo-qiuju.jpg`), portrait 4:5, max 800px wide and under ~150 KB. Cards crop with `object-cover object-top`, so keep the face in the upper half. Originals can stay in `media-originals/team/` (git-ignored).
- **Hero / PDF:** `public/assets/hero/hero-bg.jpg` (and `hero-bg-sm.jpg` for mobile). D-2 guide: `public/assets/korea-d2-guide.pdf`.
- Full content prompt and legal checks: `CONTENT.md`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
