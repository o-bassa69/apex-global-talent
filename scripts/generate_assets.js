const fs = require("fs");
const path = require("path");

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

ensureDir("public/assets/gallery/japan");
ensureDir("public/assets/gallery/korea");
ensureDir("public/assets/institute");
ensureDir("public/assets/team");

// Japan gallery SVGs
const jpTitles = [
  "Campus Orientation & Welcome Ceremony",
  "Fukuoka Foreign Language College",
  "JLPT Exam Coaching & Kanji Workshop",
  "SSW Skill Training Demonstration",
  "Narita Airport Arrival Support",
  "Japanese Cultural & Festival Experience"
];

jpTitles.forEach((title, idx) => {
  const num = idx + 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" fill="none">
    <defs>
      <linearGradient id="jpbg${num}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="50%" stop-color="#1e1b4b"/>
        <stop offset="100%" stop-color="#31102f"/>
      </linearGradient>
      <radialGradient id="sun${num}" cx="70%" cy="30%" r="40%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="520" fill="url(#jpbg${num})"/>
    <circle cx="560" cy="180" r="160" fill="url(#sun${num})"/>
    <g opacity="0.15" stroke="#ffffff" stroke-width="1.5">
      <path d="M0 440 Q 200 380, 400 420 T 800 390 L 800 520 L 0 520 Z" fill="#ffffff" opacity="0.05"/>
      <path d="M0 470 Q 250 430, 500 460 T 800 440 L 800 520 L 0 520 Z" fill="#ffffff" opacity="0.08"/>
    </g>
    <g transform="translate(60, 60)">
      <rect width="110" height="32" rx="16" fill="#be123c" fill-opacity="0.9"/>
      <text x="55" y="21" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">APEX JAPAN</text>
      <text x="0" y="280" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="0" y="320" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1">Official Fukuoka &amp; Tokyo Education Pathway • Photo 0${num}</text>
    </g>
  </svg>`;
  fs.writeFileSync(`public/assets/gallery/japan/jp-${num}.svg`, svg);
});

// Korea gallery SVGs
const krTitles = [
  "KIIAC Official Partnership Delegation",
  "Direct D-2 Visa & Degree Seminar",
  "Interactive EPS-TOPIK CBT Lab",
  "Korean University Campus Delegation",
  "Incheon Airport Welcome & Transit",
  "Industry-Academia Internship Orientation"
];

krTitles.forEach((title, idx) => {
  const num = idx + 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" fill="none">
    <defs>
      <linearGradient id="krbg${num}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#091428"/>
        <stop offset="50%" stop-color="#0f2b48"/>
        <stop offset="100%" stop-color="#143c68"/>
      </linearGradient>
      <radialGradient id="krGlow${num}" cx="65%" cy="35%" r="45%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="520" fill="url(#krbg${num})"/>
    <circle cx="520" cy="200" r="180" fill="url(#krGlow${num})"/>
    <g opacity="0.15" stroke="#ffffff" stroke-width="1.5">
      <path d="M0 450 Q 220 400, 440 440 T 800 410 L 800 520 L 0 520 Z" fill="#ffffff" opacity="0.05"/>
    </g>
    <g transform="translate(60, 60)">
      <rect width="120" height="32" rx="16" fill="#1d4ed8" fill-opacity="0.9"/>
      <text x="60" y="21" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">APEX KOREA</text>
      <text x="0" y="280" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="0" y="320" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1">Official Sole Representative for KIIAC • Photo 0${num}</text>
    </g>
  </svg>`;
  fs.writeFileSync(`public/assets/gallery/korea/kr-${num}.svg`, svg);
});

// Institute photos
[
  { title: "Modern Malabe Teaching Facility & Lab", sub: "Athurugiriya Road Campus, Malabe" },
  { title: "Smart Multimedia Classrooms & Library", sub: "Interactive JLPT & TOPIK Training Suites" },
  { title: "Student Visa Advisory & Counseling Hall", sub: "1-on-1 Personalized Documentation Sessions" }
].forEach((item, idx) => {
  const num = idx + 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" fill="none">
    <defs>
      <linearGradient id="instBg${num}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22"/>
        <stop offset="50%" stop-color="#064e3b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="800" height="520" fill="url(#instBg${num})"/>
    <g transform="translate(60, 60)">
      <rect width="140" height="32" rx="16" fill="#059669" fill-opacity="0.9"/>
      <text x="70" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">MALABE CAMPUS</text>
      <text x="0" y="280" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#ffffff">${item.title}</text>
      <text x="0" y="320" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="#a7f3d0">${item.sub}</text>
    </g>
  </svg>`;
  fs.writeFileSync(`public/assets/institute/inst-${num}.svg`, svg);
});

// Team photos
[
  { name: "Academic Director", dept: "Japan Operations", color: "#e11d48" },
  { name: "Managing Consultant", dept: "Korea Programs", color: "#2563eb" },
  { name: "Senior Immigration Counselor", dept: "Visa & Compliance", color: "#059669" },
  { name: "Senior Instructor", dept: "Korean Language", color: "#7c3aed" }
].forEach((m, idx) => {
  const num = idx + 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" fill="none">
    <rect width="400" height="460" fill="#f8fafc"/>
    <rect x="20" y="20" width="360" height="420" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="200" cy="180" r="75" fill="${m.color}" fill-opacity="0.1" stroke="${m.color}" stroke-width="3"/>
    <path d="M200 135 A 35 35 0 0 1 200 205 A 35 35 0 0 1 200 135 Z" fill="${m.color}"/>
    <path d="M145 240 C145 210, 255 210, 255 240 Z" fill="${m.color}"/>
    <text x="200" y="320" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">${m.name}</text>
    <text x="200" y="350" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="${m.color}" text-anchor="middle">${m.dept}</text>
    <text x="200" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="#64748b" text-anchor="middle">APEX Global Education Faculty</text>
  </svg>`;
  fs.writeFileSync(`public/assets/team/team-placeholder-${num}.svg`, svg);
});

console.log("All placeholder assets created successfully!");
