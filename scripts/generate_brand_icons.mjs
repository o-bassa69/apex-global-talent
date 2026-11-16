/**
 * Generates the brand assets used by search engines / browsers / social cards
 * from the master logo file:
 *
 *   public/assets/apex global talent.png   (master, colour)
 *
 * Outputs:
 *   public/assets/logo.png      512x512 colour logo (clean URL for schema.org)
 *   src/app/icon.png            512x512 favicon (high-resolution source)
 *   src/app/icon1.png           192x192 favicon (48px multiple, per Google guidelines)
 *   src/app/apple-icon.png      180x180 iOS home-screen icon
 *   src/app/favicon.ico         16/32/48/64 px multi-size icon
 *   public/og-image.png         1200x630 social share card
 *
 * Usage: node scripts/generate_brand_icons.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MASTER = path.join(ROOT, "public/assets/apex global talent.png");

/** Trim the white border, then centre the art on a white square canvas. */
async function squareLogo(size, { padding = 0.04 } = {}) {
  const trimmed = await sharp(MASTER).trim({ background: "#ffffff", threshold: 12 }).toBuffer();
  const inner = Math.round(size * (1 - padding * 2));

  const art = await sharp(trimmed)
    .resize(inner, inner, { fit: "contain", background: "#ffffff" })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: art, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Minimal ICO container that embeds PNG payloads (supported by all modern browsers). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

async function buildShareCard() {
  const logo = await squareLogo(340, { padding: 0 });
  const logoSvg = `<image href="data:image/png;base64,${logo.toString("base64")}" x="0" y="0" width="340" height="340" />`;

  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0b1220" />
          <stop offset="55%" stop-color="#12203f" />
          <stop offset="100%" stop-color="#1b3a76" />
        </linearGradient>
        <radialGradient id="glow" cx="0.15" cy="0.1" r="0.9">
          <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="630" fill="url(#bg)" />
      <rect width="1200" height="630" fill="url(#glow)" />

      <g transform="translate(90, 145)">${logoSvg}</g>

      <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
        <text x="490" y="232" fill="#ffffff" font-size="62" font-weight="700" letter-spacing="1">
          APEX GLOBAL
        </text>
        <text x="490" y="300" fill="#ffffff" font-size="62" font-weight="700" letter-spacing="1">
          TALENT (PVT) LTD
        </text>
        <text x="492" y="360" fill="#fbbf24" font-size="30" font-weight="600" letter-spacing="0.5">
          Japanese &amp; Korean Language Institute
        </text>
        <text x="492" y="398" fill="#cbd5e1" font-size="26" font-weight="400">
          Student Visa Advisory · Malabe, Sri Lanka
        </text>
        <text x="492" y="470" fill="#93c5fd" font-size="24" font-weight="500" letter-spacing="0.5">
          apexglobaltalentpvtltd.com
        </text>
      </g>

      <rect x="0" y="600" width="1200" height="30" fill="#fbbf24" />
    </svg>`;

  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}

async function main() {
  const write = (target, data) => {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, data);
    console.log(`  ✓ ${path.relative(ROOT, target)} (${(data.length / 1024).toFixed(1)} kB)`);
  };

  console.log("Generating brand icons…");

  write(path.join(ROOT, "public/assets/logo.png"), await squareLogo(512, { padding: 0.02 }));
  write(path.join(ROOT, "src/app/icon.png"), await squareLogo(512, { padding: 0.04 }));
  write(path.join(ROOT, "src/app/icon1.png"), await squareLogo(192, { padding: 0.04 }));
  write(path.join(ROOT, "src/app/apple-icon.png"), await squareLogo(180, { padding: 0.06 }));

  const icoSizes = [16, 32, 48, 64];
  const icoImages = [];
  for (const size of icoSizes) {
    icoImages.push({ size, data: await squareLogo(size, { padding: size <= 32 ? 0.02 : 0.04 }) });
  }
  write(path.join(ROOT, "src/app/favicon.ico"), buildIco(icoImages));

  write(path.join(ROOT, "public/og-image.png"), await buildShareCard());

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
