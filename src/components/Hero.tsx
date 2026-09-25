"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

// Stagger container animation for text entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Word entrance animation
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

// Element fade-up variant
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

// 1. JAPAN SIDE: Warm Sunset Sakura Petals (Soft pink/white bokeh style, drifting down toward center)
const japanSakuraPetals = [
  { id: "jp-1", startX: "5%", startY: "-8%", driftX: 35, duration: 18, delay: 0, size: 20, rotate: [0, 180, 360] },
  { id: "jp-2", startX: "15%", startY: "-10%", driftX: 45, duration: 22, delay: 3.5, size: 16, rotate: [30, 210, 390] },
  { id: "jp-3", startX: "24%", startY: "-6%", driftX: 40, duration: 19, delay: 1.5, size: 22, rotate: [-20, 160, 340] },
  { id: "jp-4", startX: "32%", startY: "-12%", driftX: 50, duration: 21, delay: 6, size: 17, rotate: [15, 195, 375] },
];

// 2. KOREA SIDE: Cool Lavender-Pink Sakura Petals
const koreaSakuraPetals = [
  { id: "kr-sakura-1", startX: "65%", startY: "-8%", driftX: -35, duration: 20, delay: 1.5, size: 18, rotate: [10, 190, 370] },
  { id: "kr-sakura-2", startX: "78%", startY: "-10%", driftX: -45, duration: 23, delay: 5, size: 16, rotate: [-30, 150, 330] },
  { id: "kr-sakura-3", startX: "90%", startY: "-7%", driftX: -30, duration: 19, delay: 7.5, size: 21, rotate: [25, 205, 385] },
];

// 3. KOREA SIDE: Seoul Neon Night Glow Particles (Soft blurred circles drifting slowly upward)
const koreaNeonParticles = [
  { id: "neon-1", startX: "58%", startY: "105%", driftX: -30, duration: 16, delay: 0, size: 16, color: "bg-cyan-400" },
  { id: "neon-2", startX: "70%", startY: "108%", driftX: -45, duration: 19, delay: 3, size: 20, color: "bg-fuchsia-400" },
  { id: "neon-3", startX: "80%", startY: "104%", driftX: -35, duration: 17, delay: 6, size: 14, color: "bg-blue-400" },
  { id: "neon-4", startX: "88%", startY: "109%", driftX: -50, duration: 21, delay: 2, size: 18, color: "bg-purple-400" },
  { id: "neon-5", startX: "94%", startY: "106%", driftX: -25, duration: 18, delay: 7.5, size: 14, color: "bg-teal-300" },
];

// 4. KOREA SIDE: Neon signage ambient accent blocks
const seoulNeonBlocks = [
  { id: "nb-1", left: "68%", top: "42%", w: 32, h: 14, bg: "bg-cyan-400/35 shadow-[0_0_12px_rgba(6,182,212,0.6)]" },
  { id: "nb-2", left: "74%", top: "36%", w: 22, h: 42, bg: "bg-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.5)]" },
  { id: "nb-3", left: "82%", top: "45%", w: 40, h: 12, bg: "bg-purple-400/30 shadow-[0_0_14px_rgba(192,132,252,0.5)]" },
  { id: "nb-4", left: "89%", top: "38%", w: 20, h: 36, bg: "bg-rose-500/35 shadow-[0_0_16px_rgba(244,63,94,0.5)]" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"both" | "japan" | "korea">("both");

  // Mouse Parallax Effect (smooth spring physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 90 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Left (Japan) background & figure parallax
  const japanSkylineParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-9, 9]);
  const japanSkylineParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-6, 6]);
  const japanFigureParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const japanFigureParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-3, 3]);

  // Right (Korea) background & figure parallax
  const koreaSkylineParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [9, -9]);
  const koreaSkylineParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-6, 6]);
  const koreaFigureParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [5, -5]);
  const koreaFigureParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Headline words breakdown for staggered animation
  const headlineWords = [
    { text: "Your", highlight: false },
    { text: "Future", highlight: false },
    { text: "in", highlight: false },
    { text: "Japan", highlight: "japan", subBadge: "日本" },
    { text: "&", highlight: false },
    { text: "South Korea", highlight: "korea", subBadge: "한국" },
    { text: "Starts", highlight: false },
    { text: "Here.", highlight: false },
  ];

  return (
    <section
      id="hero"
      aria-label="Apex Global Talent Split Cultural Illustration Hero Section"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#070b16] text-slate-100 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800/80"
    >
      {/* ========================================================================= */}
      {/* 1. DUAL ATMOSPHERE: SPLIT DAY/NIGHT BACKGROUND GRADIENT MESH */}
      {/* ========================================================================= */}

      {/* Deep Navy Baseline */}
      <div className="absolute inset-0 bg-[#060914] pointer-events-none" />

      {/* LEFT SIDE (JAPAN): Warm Tokyo Sunset (Gold -> Coral/Orange -> Crimson/Rose) */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[58%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 16% 35%, rgba(245, 158, 11, 0.18) 0%, rgba(251, 113, 133, 0.16) 38%, rgba(225, 29, 72, 0.12) 65%, transparent 88%), linear-gradient(135deg, rgba(251, 146, 60, 0.13) 0%, rgba(244, 63, 94, 0.14) 35%, rgba(76, 29, 149, 0.16) 75%, transparent 92%)",
        }}
      />

      {/* RIGHT SIDE (KOREA): Seoul Neon Night Sky (Navy/Indigo -> Purple -> Neon Magenta & Cyan) */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 84% 30%, rgba(192, 132, 252, 0.19) 0%, rgba(217, 70, 239, 0.15) 35%, rgba(14, 165, 233, 0.14) 65%, transparent 88%), linear-gradient(225deg, rgba(6, 182, 212, 0.13) 0%, rgba(139, 92, 246, 0.18) 40%, rgba(30, 27, 75, 0.22) 75%, transparent 92%)",
        }}
      />

      {/* CENTER BLEND ZONE: Soft diagonal gradient mesh unifying sunset and neon night */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, rgba(244, 63, 94, 0.07) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(6, 182, 212, 0.07) 100%)",
        }}
      />

      {/* ATMOSPHERIC HORIZON GLOWS */}
      <motion.div
        animate={{
          opacity: [0.22, 0.35, 0.22],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-[15%] -translate-x-1/2 w-[420px] h-[220px] rounded-full bg-gradient-to-t from-amber-500/25 via-rose-500/18 to-transparent blur-[85px] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.20, 0.34, 0.20],
          scale: [1, 1.07, 1],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-[18%] translate-x-1/2 w-[440px] h-[240px] rounded-full bg-gradient-to-t from-cyan-500/20 via-fuchsia-500/20 to-transparent blur-[90px] pointer-events-none"
      />

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS HORIZON CITYSCAPE SILHOUETTES: Tokyo (Left) & Seoul (Right) */}
      {/* ========================================================================= */}

      {/* LEFT: TOKYO CITYSCAPE (Tokyo Tower, Pagoda Roofline, Modern High-Rises, Mt. Fuji Horizon) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ x: japanSkylineParallaxX, y: japanSkylineParallaxY }}
        className="absolute bottom-0 left-0 w-full lg:w-[56%] pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-2xl opacity-25 lg:opacity-35 transition-opacity">
          <svg
            viewBox="0 0 750 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="tokyoSunsetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#fb7185" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="tokyoTowerRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#f97316" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="fujiHaze" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Distant Mt. Fuji silhouette on far horizon */}
            <path
              d="M40 320 L160 210 Q195 178 215 176 Q235 178 270 210 L390 320 Z"
              fill="url(#fujiHaze)"
              stroke="url(#tokyoSunsetGrad)"
              strokeWidth="0.8"
              strokeDasharray="4 2"
            />
            {/* Fuji snowcap indicator */}
            <path d="M190 200 Q215 212 240 200" stroke="#fef08a" strokeWidth="0.8" strokeOpacity="0.7" />

            {/* Modern Tokyo Skyscraper Silhouettes */}
            <g stroke="url(#tokyoSunsetGrad)" strokeWidth="0.9" fill="rgba(15, 23, 42, 0.45)">
              <rect x="30" y="240" width="35" height="80" rx="1" />
              <rect x="75" y="215" width="45" height="105" rx="1" />
              <rect x="130" y="255" width="30" height="65" rx="1" />
              <rect x="290" y="225" width="55" height="95" rx="1" />
              <rect x="360" y="245" width="42" height="75" rx="1" />
              <rect x="415" y="205" width="50" height="115" rx="1" />
              <rect x="480" y="235" width="38" height="85" rx="1" />
              <rect x="530" y="260" width="45" height="60" rx="1" />
              <rect x="590" y="240" width="50" height="80" rx="1" />
            </g>

            {/* Minimal skyscraper window lines */}
            <g stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.4">
              <line x1="85" y1="230" x2="110" y2="230" />
              <line x1="85" y1="245" x2="110" y2="245" />
              <line x1="85" y1="260" x2="110" y2="260" />
              <line x1="425" y1="220" x2="455" y2="220" />
              <line x1="425" y1="235" x2="455" y2="235" />
              <line x1="425" y1="250" x2="455" y2="250" />
            </g>

            {/* Traditional Pagoda Roofline (Asakusa / Sensoji aesthetic) */}
            <g transform="translate(145, 175)" stroke="url(#tokyoSunsetGrad)" strokeWidth="1" fill="rgba(15, 23, 42, 0.5)">
              <line x1="28" y1="0" x2="28" y2="18" strokeWidth="1.2" />
              <circle cx="28" cy="0" r="1.5" fill="#f59e0b" />
              {/* Pagoda curved roofs */}
              <path d="M12 24 Q28 18 44 24 L40 34 L16 34 Z" />
              <path d="M6 38 Q28 31 50 38 L46 50 L10 50 Z" />
              <path d="M0 55 Q28 47 56 55 L52 70 L4 70 Z" />
              <path d="M-6 76 Q28 66 62 76 L58 145 L-2 145 Z" />
            </g>

            {/* TOKYO TOWER SILHOUETTE (Iconic lattice structure, spire & observation decks) */}
            <g transform="translate(230, 80)">
              {/* Antenna Mast with red flashing tip */}
              <line x1="25" y1="0" x2="25" y2="45" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="25" cy="0" r="2.5" fill="#ef4444" className="animate-ping" />
              <circle cx="25" cy="0" r="2" fill="#fecaca" />

              {/* Special Top Observation Deck */}
              <rect x="20" y="45" width="10" height="8" rx="1.5" fill="#f97316" stroke="#fef08a" strokeWidth="0.8" />
              
              {/* Upper lattice tapering */}
              <line x1="22" y1="53" x2="16" y2="105" stroke="url(#tokyoTowerRed)" strokeWidth="1.2" />
              <line x1="28" y1="53" x2="34" y2="105" stroke="url(#tokyoTowerRed)" strokeWidth="1.2" />
              <line x1="19" y1="75" x2="31" y2="75" stroke="#f97316" strokeWidth="0.8" />
              <line x1="17" y1="90" x2="33" y2="90" stroke="#f97316" strokeWidth="0.8" />

              {/* Main Observatory (Two-tier deck) */}
              <rect x="10" y="105" width="30" height="14" rx="2" fill="rgba(239, 68, 68, 0.4)" stroke="#f59e0b" strokeWidth="1" />
              <line x1="12" y1="112" x2="38" y2="112" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.7" />

              {/* Lower 4-Leg Lattice Arches spreading down to ground */}
              <path d="M12 119 L-4 240 M38 119 L54 240" stroke="url(#tokyoTowerRed)" strokeWidth="1.5" />
              <path d="M18 119 L10 240 M32 119 L40 240" stroke="url(#tokyoTowerRed)" strokeWidth="1.2" />
              {/* Lattice cross-bracing */}
              <line x1="9" y1="145" x2="41" y2="145" stroke="#f97316" strokeWidth="0.8" />
              <line x1="5" y1="175" x2="45" y2="175" stroke="#f97316" strokeWidth="0.8" />
              <line x1="0" y1="205" x2="50" y2="205" stroke="#f97316" strokeWidth="0.8" />
              {/* Central ground arch */}
              <path d="M12 240 Q25 210 38 240" stroke="url(#tokyoTowerRed)" strokeWidth="1.2" fill="none" />
            </g>

            {/* Continuous Ground/Water Line */}
            <line x1="0" y1="320" x2="750" y2="320" stroke="url(#tokyoSunsetGrad)" strokeWidth="1.5" />
          </svg>
        </div>
      </motion.div>

      {/* RIGHT: SEOUL CITYSCAPE (Namsan Tower on hill, Lotte World Tower needle, High-rises & Neon Signs) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ x: koreaSkylineParallaxX, y: koreaSkylineParallaxY }}
        className="absolute bottom-0 right-0 w-full lg:w-[56%] pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-2xl ml-auto opacity-25 lg:opacity-35 transition-opacity">
          <svg
            viewBox="0 0 750 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="seoulNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#c084fc" stopOpacity="0.75" />
                <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Continuous Ground Base Line */}
            <line x1="0" y1="320" x2="750" y2="320" stroke="url(#seoulNeonGrad)" strokeWidth="1.5" />

            {/* Modern Seoul High-Rise Towers */}
            <g stroke="url(#seoulNeonGrad)" strokeWidth="0.9" fill="rgba(15, 23, 42, 0.45)">
              <rect x="60" y="245" width="45" height="75" rx="1" />
              <rect x="120" y="215" width="55" height="105" rx="1" />
              <rect x="190" y="255" width="40" height="65" rx="1" />
              <rect x="245" y="195" width="50" height="125" rx="1" />
              {/* Slender supertall silhouette (like Lotte World Tower tapered curve) */}
              <path d="M510 320 L525 100 Q530 85 533 80 Q536 85 541 100 L556 320 Z" />
              <rect x="575" y="225" width="45" height="95" rx="1" />
              <rect x="635" y="185" width="48" height="135" rx="1" />
              <rect x="695" y="235" width="40" height="85" rx="1" />
            </g>

            {/* High-Rise Window & Spire Lights */}
            <g stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.5">
              <line x1="130" y1="230" x2="165" y2="230" />
              <line x1="130" y1="245" x2="165" y2="245" />
              <line x1="255" y1="210" x2="285" y2="210" />
              <line x1="255" y1="225" x2="285" y2="225" />
              <line x1="645" y1="200" x2="675" y2="200" />
              <line x1="645" y1="215" x2="675" y2="215" />
              {/* Lotte Tower beacon */}
              <circle cx="533" cy="80" r="1.5" fill="#38bdf8" />
            </g>

            {/* Namsan Hill Curved Silhouette */}
            <path
              d="M290 320 Q370 195 420 180 Q470 195 560 320 Z"
              fill="rgba(15, 23, 42, 0.55)"
              stroke="url(#seoulNeonGrad)"
              strokeWidth="1.2"
            />

            {/* NAMSAN SEOUL TOWER SILHOUETTE (Antenna mast, digital beacon, circular observation pods) */}
            <g transform="translate(420, 52)" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round">
              {/* Antenna Mast & Digital Beacon */}
              <line x1="0" y1="0" x2="0" y2="42" strokeWidth="1.4" />
              <circle cx="0" cy="0" r="2.2" fill="#38bdf8" className="animate-ping" />
              <circle cx="0" cy="0" r="1.8" fill="#c084fc" />
              <circle cx="0" cy="14" r="1.2" fill="#06b6d4" />

              {/* Upper Observatory Ring */}
              <ellipse cx="0" cy="46" rx="9" ry="3" fill="rgba(192, 132, 252, 0.2)" stroke="#c084fc" />
              {/* Main Revolving Restaurant Observation Pod */}
              <ellipse cx="0" cy="56" rx="14" ry="4.5" fill="rgba(6, 182, 212, 0.25)" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="-14" y1="56" x2="-11" y2="65" />
              <line x1="14" y1="56" x2="11" y2="65" />
              <ellipse cx="0" cy="65" rx="11" ry="3.5" fill="rgba(15, 23, 42, 0.6)" stroke="#c084fc" />

              {/* Tower Shaft Tapering Down to Mountain Base */}
              <line x1="-3.2" y1="65" x2="-4" y2="128" stroke="#38bdf8" />
              <line x1="3.2" y1="65" x2="4" y2="128" stroke="#38bdf8" />

              {/* Base Pavilion Plaza */}
              <path d="M-16 128 L16 128 L20 140 L-20 140 Z" fill="rgba(15, 23, 42, 0.7)" stroke="#c084fc" />
            </g>

            {/* Korean Neon Sign Shapes (Stylized rectangular signage blocks) */}
            <g strokeWidth="0.8">
              <rect x="180" y="270" width="18" height="28" rx="2" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" />
              <rect x="204" y="265" width="22" height="12" rx="2" fill="rgba(217, 70, 239, 0.25)" stroke="#d946ef" />
              <rect x="585" y="240" width="16" height="32" rx="2" fill="rgba(192, 132, 252, 0.2)" stroke="#c084fc" />
              <rect x="650" y="235" width="20" height="14" rx="2" fill="rgba(244, 63, 94, 0.2)" stroke="#fb7185" />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Floating Seoul Neon Light Accent Blocks */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0">
        {seoulNeonBlocks.map((block) => (
          <motion.div
            key={block.id}
            animate={{
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute rounded-sm ${block.bg}`}
            style={{
              left: block.left,
              top: block.top,
              width: `${block.w}px`,
              height: `${block.h}px`,
            }}
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 3. STYLIZED EDITORIAL CULTURAL FIGURES (Kimono Left / Hanbok Right)      */}
      {/* Both figures face slightly inward to frame the headline, minimal editorial */}
      {/* ========================================================================= */}

      {/* LEFT: JAPANESE WOMAN IN TRADITIONAL KIMONO (Editorial line art / vector) */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
        style={{ x: japanFigureParallaxX, y: japanFigureParallaxY }}
        className="hidden md:block absolute bottom-0 left-0 lg:left-2 xl:left-5 pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <div className="relative w-[180px] lg:w-[240px] xl:w-[270px] opacity-40 lg:opacity-60 xl:opacity-75 transition-opacity">
          <svg
            viewBox="0 0 280 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-[0_10px_25px_rgba(244,63,94,0.15)]"
          >
            <defs>
              <linearGradient id="kimonoFabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.28" />
              </linearGradient>
              <linearGradient id="kimonoStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#fb7185" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#f43f5e" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="obiGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#fef08a" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Subtle soft ambient backglow */}
            <circle cx="150" cy="220" r="110" fill="rgba(251, 113, 133, 0.08)" filter="blur(20px)" />

            {/* --- Traditional Japanese Hair & Kanzashi (Facing slightly Right/Inward) --- */}
            {/* Elegant high updo / chignon silhouette */}
            <path
              d="M142 42 C125 40, 112 55, 115 72 C116 80, 122 88, 128 92 C132 95, 136 102, 137 108 L146 108 C146 102, 150 96, 155 93 C166 87, 172 75, 168 60 C164 45, 154 42, 142 42 Z"
              fill="#0b0f19"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.2"
            />
            {/* Hair bun back loop */}
            <path
              d="M125 50 C110 38, 108 20, 124 16 C140 12, 150 25, 148 38"
              fill="#090d16"
              stroke="#fbbf24"
              strokeWidth="1"
            />
            {/* Kanzashi Hairpin with dangling gold cherry blossom ornament */}
            <line x1="110" y1="12" x2="162" y2="40" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="108" cy="11" r="3" fill="#f59e0b" />
            <path d="M108 14 Q106 24 109 30" stroke="#fef08a" strokeWidth="0.8" fill="none" />
            <circle cx="109" cy="31" r="1.8" fill="#fb7185" />

            {/* Graceful slender neck & jawline facing right toward center */}
            <path
              d="M142 90 Q152 92 155 99 Q158 107 154 116"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M137 106 Q134 114 132 122"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* --- Kimono Body (Collar layers & Main Silhouette) --- */}
            {/* Main Kimono Silhouette */}
            <path
              d="M132 122 Q110 138 88 185 Q72 230 76 300 Q80 370 70 440 L220 440 Q210 370 215 300 Q220 230 195 175 Q175 135 154 116 Z"
              fill="url(#kimonoFabricGrad)"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.2"
            />

            {/* Layered White/Cream Under-Collar (Juban) */}
            <path
              d="M137 114 L152 142 L146 148 L132 122"
              fill="#fef3c7"
              fillOpacity="0.45"
              stroke="#fef08a"
              strokeWidth="0.9"
            />
            {/* Outer Kimono Collar Cross (Eri) */}
            <path
              d="M132 122 L158 165 L144 175 L124 132"
              fill="rgba(244, 63, 94, 0.4)"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.1"
            />
            <path
              d="M154 116 L130 162"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1"
            />

            {/* Traditional Obi (Wide Golden Waist Sash) */}
            <g>
              <path
                d="M102 188 Q145 182 188 190 L186 242 Q144 236 100 240 Z"
                fill="url(#obiGold)"
                stroke="#f59e0b"
                strokeWidth="1.3"
              />
              {/* Obijime decorative cord tied in center */}
              <line x1="99" y1="214" x2="188" y2="216" stroke="#991b1b" strokeWidth="2.2" />
              <line x1="99" y1="214" x2="188" y2="216" stroke="#fef08a" strokeWidth="0.8" strokeDasharray="3 2" />
              <ellipse cx="148" cy="215" rx="5" ry="3.5" fill="#ef4444" stroke="#fef08a" strokeWidth="1" />
            </g>

            {/* Subtle Floral Motifs on Kimono Body */}
            <g stroke="#fef08a" strokeWidth="0.7" strokeOpacity="0.6" fill="rgba(251, 113, 133, 0.25)">
              <circle cx="120" cy="280" r="5" />
              <circle cx="132" cy="285" r="4" />
              <circle cx="114" cy="292" r="4.5" />
              <circle cx="160" cy="330" r="6" />
              <circle cx="172" cy="336" r="5" />
              <circle cx="152" cy="344" r="5.5" />
              <circle cx="108" cy="380" r="5.5" />
              <circle cx="122" cy="386" r="4" />
            </g>

            {/* Flowing Kimono Long Sleeve (Furisode) with Framer Motion Breeze Sway */}
            <motion.g
              animate={{
                rotate: [-1.4, 1.4, -1.4],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "85px 175px" }}
            >
              {/* Deep draping sleeve hanging on the outer left */}
              <path
                d="M92 180 Q62 210 50 270 Q42 335 60 380 Q76 385 85 365 Q96 300 102 240 Z"
                fill="url(#kimonoFabricGrad)"
                stroke="url(#kimonoStrokeGrad)"
                strokeWidth="1.3"
              />
              {/* Sleeve fold & blossom line art */}
              <path d="M58 275 Q72 310 82 350" stroke="url(#kimonoStrokeGrad)" strokeWidth="0.8" strokeOpacity="0.7" />
              <circle cx="68" cy="320" r="3.5" stroke="#fef08a" strokeWidth="0.6" fill="rgba(244, 63, 94, 0.3)" />
              <circle cx="62" cy="345" r="3" stroke="#fef08a" strokeWidth="0.6" fill="rgba(244, 63, 94, 0.3)" />
            </motion.g>

            {/* Right Arm Sleeve extending gracefully toward center */}
            <path
              d="M188 190 Q225 215 240 270 Q248 310 236 340 Q225 342 218 325 Q205 280 186 242 Z"
              fill="url(#kimonoFabricGrad)"
              stroke="url(#kimonoStrokeGrad)"
              strokeWidth="1.2"
            />
            <path d="M210 240 Q224 280 228 320" stroke="url(#kimonoStrokeGrad)" strokeWidth="0.8" strokeOpacity="0.6" />

            {/* Graceful Kimono Hemline Folds */}
            <path d="M80 410 Q145 425 210 415" stroke="url(#kimonoStrokeGrad)" strokeWidth="1" strokeOpacity="0.8" />
            <path d="M72 435 Q145 450 218 438" stroke="url(#kimonoStrokeGrad)" strokeWidth="1.2" />
          </svg>
        </div>
      </motion.div>

      {/* RIGHT: KOREAN WOMAN IN TRADITIONAL HANBOK (Editorial line art / vector) */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
        style={{ x: koreaFigureParallaxX, y: koreaFigureParallaxY }}
        className="hidden md:block absolute bottom-0 right-0 lg:right-2 xl:right-5 pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <div className="relative w-[185px] lg:w-[245px] xl:w-[275px] opacity-40 lg:opacity-60 xl:opacity-75 transition-opacity">
          <svg
            viewBox="0 0 280 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-[0_10px_25px_rgba(56,189,248,0.15)]"
          >
            <defs>
              <linearGradient id="hanbokChimaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="45%" stopColor="#c084fc" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.32" />
              </linearGradient>
              <linearGradient id="hanbokJeogoriGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="hanbokStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="otgoreumRibbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#d946ef" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Subtle soft ambient backglow */}
            <circle cx="135" cy="220" r="110" fill="rgba(192, 132, 252, 0.08)" filter="blur(20px)" />

            {/* --- Traditional Korean Hair & Daenggi / Binyeo (Facing slightly Left/Inward) --- */}
            {/* Sleek traditional Korean braided chignon / eonjun-meori */}
            <path
              d="M138 42 C155 40, 168 55, 165 72 C164 80, 158 88, 152 92 C148 95, 144 102, 143 108 L134 108 C134 102, 130 96, 125 93 C114 87, 108 75, 112 60 C116 45, 126 42, 138 42 Z"
              fill="#0b0f19"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.2"
            />
            {/* Rear braided coil */}
            <path
              d="M155 50 C170 38, 172 20, 156 16 C140 12, 130 25, 132 38"
              fill="#090d16"
              stroke="#38bdf8"
              strokeWidth="1"
            />
            {/* Traditional Binyeo Hairpin with jade/silver floral head */}
            <line x1="170" y1="12" x2="118" y2="40" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="172" cy="11" r="3" fill="#a7f3d0" />
            {/* Daenggi decorative ribbon hanging on hair */}
            <path d="M155 35 Q165 48 162 65" stroke="#ec4899" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <circle cx="162" cy="67" r="1.5" fill="#fbcfe8" />

            {/* Graceful slender neck & jawline facing left toward center */}
            <path
              d="M138 90 Q128 92 125 99 Q122 107 126 116"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M143 106 Q146 114 148 122"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* --- Traditional Jeogori (Cropped Bolero Jacket) --- */}
            {/* White Dongjeong Collar Band */}
            <path
              d="M125 116 Q137 122 148 122 L144 128 Q136 128 127 122 Z"
              fill="#f8fafc"
              stroke="#ffffff"
              strokeWidth="1"
            />

            {/* Jeogori Jacket Bodice */}
            <path
              d="M124 124 L98 152 Q136 156 182 152 L156 124 Z"
              fill="url(#hanbokJeogoriGrad)"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.2"
            />

            {/* Jeogori Sleeves (Gentle curved baerae silhouette) */}
            {/* Left Jeogori sleeve (reaching forward gracefully) */}
            <path
              d="M102 148 Q70 170 56 215 Q68 225 80 220 Q98 185 118 156 Z"
              fill="url(#hanbokJeogoriGrad)"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.1"
            />
            {/* White cuff accent (Kkeutdong) */}
            <path d="M58 214 L80 220" stroke="#ffffff" strokeWidth="1.5" />

            {/* Right Jeogori sleeve */}
            <path
              d="M178 148 Q210 170 224 215 Q212 225 200 220 Q182 185 162 156 Z"
              fill="url(#hanbokJeogoriGrad)"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.1"
            />
            <path d="M222 214 L200 220" stroke="#ffffff" strokeWidth="1.5" />

            {/* Traditional Otgoreum (Chest Ribbon Knot & Flowing Ties) with Breeze Sway */}
            <motion.g
              animate={{
                rotate: [1.5, -1.5, 1.5],
                x: [0, -2, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "135px 145px" }}
            >
              {/* Ribbon knot on breast */}
              <ellipse cx="134" cy="144" rx="4.5" ry="3" fill="#ec4899" stroke="#fbcfe8" strokeWidth="0.8" />
              {/* Long Ribbon Tie (Gin-goreum) flowing downward */}
              <path
                d="M133 146 Q128 190 120 245 Q125 248 128 244 Q136 195 137 146 Z"
                fill="url(#otgoreumRibbonGrad)"
                stroke="#f472b6"
                strokeWidth="0.8"
              />
              {/* Short Ribbon Tie (Jjalbeun-goreum) */}
              <path
                d="M136 146 Q142 178 145 205 Q149 207 151 204 Q146 175 139 146 Z"
                fill="url(#otgoreumRibbonGrad)"
                stroke="#f472b6"
                strokeWidth="0.8"
              />
            </motion.g>

            {/* --- Voluminous Chima (Full Bell-Shaped High-Waisted Skirt) --- */}
            {/* High Empire Waistline Band (Malgi) */}
            <path
              d="M98 152 Q140 158 182 152 L185 168 Q140 174 95 168 Z"
              fill="#1e1b4b"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1"
            />

            {/* Main Bell-Shaped Chima Skirt */}
            <path
              d="M95 168 Q60 235 48 310 Q38 385 45 440 L235 440 Q242 385 232 310 Q220 235 185 168 Z"
              fill="url(#hanbokChimaGrad)"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.3"
            />

            {/* Elegant Pleat Lines & Folds of the Korean Chima */}
            <g stroke="url(#hanbokStrokeGrad)" strokeWidth="0.9" strokeOpacity="0.55" fill="none">
              <path d="M110 170 Q95 260 88 440" />
              <path d="M126 172 Q118 270 114 440" />
              <path d="M142 173 Q142 275 142 440" />
              <path d="M158 172 Q164 270 168 440" />
              <path d="M172 170 Q188 260 196 440" />
            </g>

            {/* Delicate hemline border (Hoeran) */}
            <path
              d="M45 425 Q140 435 235 425"
              stroke="#c084fc"
              strokeWidth="1"
              strokeOpacity="0.7"
              strokeDasharray="4 3"
            />
            <path
              d="M45 440 Q140 450 235 440"
              stroke="url(#hanbokStrokeGrad)"
              strokeWidth="1.3"
            />
          </svg>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4. ANIMATED DRIFTING SAKURA (Sunset & Lavender) + SEOUL NEON PARTICLES   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
        {/* JAPAN: Warm Sunset Sakura Petals (Soft pink/white bokeh drift) */}
        {japanSakuraPetals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute text-rose-200/25 filter blur-[0.4px]"
            initial={{
              top: petal.startY,
              left: petal.startX,
              opacity: 0,
              x: 0,
              rotate: 0,
            }}
            animate={{
              top: "108%",
              x: [0, petal.driftX * 0.45, petal.driftX],
              opacity: [0, 0.22, 0.28, 0.16, 0],
              rotate: petal.rotate,
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear",
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transform origin-center"
            >
              <path
                d="M12 2C10.2 5.5 7.5 7.8 6.2 10.8C4.8 14 6 17.5 8.5 19.5C10.5 21.2 12 22 12 22C12 22 13.5 21.2 15.5 19.5C18 17.5 19.2 14 17.8 10.8C16.5 7.8 13.8 5.5 12 2Z"
                opacity="0.9"
              />
              <path
                d="M12 4C10.8 7 8.5 9 7.5 11.5C6.5 14 7.5 16.5 9.5 18C11 19.2 12 20 12 20C12 20 13 19.2 14.5 18C16.5 16.5 17.5 14 16.5 11.5C15.5 9 13.2 7 12 4Z"
                opacity="0.55"
                fill="#fff0f3"
              />
            </svg>
          </motion.div>
        ))}

        {/* KOREA: Cool Lavender-Pink Sakura Petals */}
        {koreaSakuraPetals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute text-purple-200/22 filter blur-[0.4px]"
            initial={{
              top: petal.startY,
              left: petal.startX,
              opacity: 0,
              x: 0,
              rotate: 0,
            }}
            animate={{
              top: "108%",
              x: [0, petal.driftX * 0.45, petal.driftX],
              opacity: [0, 0.18, 0.24, 0.14, 0],
              rotate: petal.rotate,
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear",
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transform origin-center"
            >
              <path
                d="M12 2C10.2 5.5 7.5 7.8 6.2 10.8C4.8 14 6 17.5 8.5 19.5C10.5 21.2 12 22 12 22C12 22 13.5 21.2 15.5 19.5C18 17.5 19.2 14 17.8 10.8C16.5 7.8 13.8 5.5 12 2Z"
                opacity="0.85"
              />
              <path
                d="M12 4C10.8 7 8.5 9 7.5 11.5C6.5 14 7.5 16.5 9.5 18C11 19.2 12 20 12 20C12 20 13 19.2 14.5 18C16.5 16.5 17.5 14 16.5 11.5C15.5 9 13.2 7 12 4Z"
                opacity="0.5"
                fill="#f5d0fe"
              />
            </svg>
          </motion.div>
        ))}

        {/* KOREA: Soft Bokeh Neon Glow Circles */}
        {koreaNeonParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color} filter blur-[5px]`}
            style={{
              width: particle.size,
              height: particle.size,
            }}
            initial={{
              top: particle.startY,
              left: particle.startX,
              opacity: 0,
              x: 0,
            }}
            animate={{
              top: "-8%",
              x: [0, particle.driftX * 0.5, particle.driftX],
              opacity: [0, 0.18, 0.28, 0.15, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 5. MAIN HERO CONTENT (Preserved 100% with Staggered Entrance)              */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Aspirational Staggered Headline, Pitch & Dual CTAs */}
          {/* ========================================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Trust Pill / Accreditation Tagline */}
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 backdrop-blur-md shadow-md mb-6 hover:border-slate-600 transition-colors cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                Accredited East Asia Advisory • Maharagama, Sri Lanka
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                <Sparkles className="w-3 h-3 text-amber-400" />
                2025/26 Intakes Open
              </span>
            </motion.div>

            {/* Main Headline with Staggered Entrance Animation */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="flex flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-1">
                {headlineWords.map((word, idx) => {
                  if (word.highlight === "japan") {
                    return (
                      <motion.span
                        key={idx}
                        variants={wordVariants}
                        className="inline-flex items-center relative group"
                      >
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 font-black drop-shadow-xs">
                          {word.text}
                        </span>
                        <span className="ml-1 px-1.5 py-0.2 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] font-bold align-super">
                          {word.subBadge}
                        </span>
                      </motion.span>
                    );
                  }

                  if (word.highlight === "korea") {
                    return (
                      <motion.span
                        key={idx}
                        variants={wordVariants}
                        className="inline-flex items-center relative group"
                      >
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 font-black drop-shadow-xs">
                          {word.text}
                        </span>
                        <span className="ml-1 px-1.5 py-0.2 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-bold align-super">
                          {word.subBadge}
                        </span>
                      </motion.span>
                    );
                  }

                  return (
                    <motion.span
                      key={idx}
                      variants={wordVariants}
                      className="inline-block text-slate-100"
                    >
                      {word.text}
                    </motion.span>
                  );
                })}
              </span>
            </h1>

            {/* Subtitle / Value Pitch */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Certified Japanese (<span className="text-rose-300 font-medium">JLPT / NAT-TEST</span>) and Korean (<span className="text-blue-300 font-medium">EPS-TOPIK / TOPIK</span>) mastery paired with meticulous COE documentation and 100% ethical visa pathways. Build your high-earning career in East Asia with confidence.
            </motion.p>

            {/* Key Value Points Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl"
            >
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Japanese &amp; Korean Instructors</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>95%+ Visa Lodging Approval Record</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Student, SSW &amp; EPS-TOPIK Pathways</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero False Promises • 100% Ethical Advisory</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: Consultation */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollTo("contact")}
                className="relative group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Calendar className="w-4 h-4 text-slate-950" />
                <span className="relative z-10">Book Free Consultation</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
              </motion.button>

              {/* Secondary CTA: Explore Courses */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollTo("courses")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-white border border-slate-700/80 hover:border-slate-500 font-semibold text-sm transition-all shadow-md backdrop-blur-md cursor-pointer group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Trust Quote / Footnote */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-rose-300 text-[10px] font-bold flex items-center justify-center ring-2 ring-slate-800 border border-rose-500/30">
                  JP
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-blue-300 text-[10px] font-bold flex items-center justify-center ring-2 ring-slate-800 border border-blue-500/30">
                  KR
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-300 text-[10px] font-bold flex items-center justify-center ring-2 ring-slate-800 border border-amber-500/30">
                  LK
                </div>
              </div>
              <p>
                Trusted by <span className="font-semibold text-slate-200">500+ Sri Lankan applicants</span> placed across Tokyo, Osaka, Seoul &amp; Busan.
              </p>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Interactive Gateway Cards + Floating Metric Badges */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Glass Showcase Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Badge 1: Top Right (Document Compliance) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-5 -right-3 items-center gap-3 p-3.5 rounded-2xl bg-slate-900/95 border border-emerald-500/30 shadow-xl shadow-black/40 z-30 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">95%+ Success</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-slate-400">Document Compliance</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left (Students Placed) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="hidden sm:flex absolute -bottom-6 -left-3 items-center gap-3 p-3.5 rounded-2xl bg-slate-900/95 border border-amber-500/30 shadow-xl shadow-black/40 z-30 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">500+ Students</div>
                  <div className="text-[11px] text-slate-400">Trained &amp; Placed</div>
                </div>
              </motion.div>

              {/* Main Showcase Glass Container */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-indigo-950/50">
                <div className="rounded-[22px] bg-slate-950/90 backdrop-blur-2xl p-5 sm:p-6 border border-white/10 relative overflow-hidden">
                  
                  {/* Subtle inner top glow */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-400/40 via-amber-400/50 to-transparent" />

                  {/* Header / Interactive Tab Switcher */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        Dual East Asia Gateways
                      </span>
                      <h2 className="text-sm font-semibold text-white">
                        Choose Your Target Destination
                      </h2>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setActiveTab("both")}
                        className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          activeTab === "both"
                            ? "bg-slate-800 text-white shadow-xs"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("japan")}
                        className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          activeTab === "japan"
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        🇯🇵 Japan
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("korea")}
                        className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          activeTab === "korea"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        🇰🇷 Korea
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Pathway Cards */}
                  <div className="mt-4 space-y-3.5">
                    
                    {/* CARD 1: JAPAN PATHWAYS */}
                    <AnimatePresence>
                      {(activeTab === "both" || activeTab === "japan") && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="group relative rounded-2xl p-4 bg-gradient-to-r from-rose-950/30 via-slate-900/80 to-slate-900/60 border border-rose-500/25 hover:border-rose-400/50 transition-all shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <span className="text-2xl" role="img" aria-label="Japan Flag">🇯🇵</span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                                    Study &amp; Work in Japan
                                  </h3>
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                    日本
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  Tokyo, Osaka, Nagoya &amp; Fukuoka Academy Networks
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                              COE Filing Active
                            </span>
                          </div>

                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                              <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Language Track</span>
                              <span className="font-semibold text-slate-200">JLPT N5 – N2 / NAT</span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                              <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Work Permissions</span>
                              <span className="font-semibold text-slate-200">28 Hrs/Wk + Full-Time SSW</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CARD 2: SOUTH KOREA PATHWAYS */}
                    <AnimatePresence>
                      {(activeTab === "both" || activeTab === "korea") && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="group relative rounded-2xl p-4 bg-gradient-to-r from-blue-950/30 via-slate-900/80 to-slate-900/60 border border-blue-500/25 hover:border-blue-400/50 transition-all shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <span className="text-2xl" role="img" aria-label="South Korea Flag">🇰🇷</span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                    Work &amp; Study in South Korea
                                  </h3>
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    한국
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  Seoul, Incheon, Busan &amp; Gyeonggi Enterprise Hubs
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 shrink-0">
                              CBT Lab Training
                            </span>
                          </div>

                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                              <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Govt Pathway</span>
                              <span className="font-semibold text-slate-200">EPS-TOPIK CBT / E-9</span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                              <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Starting Wages</span>
                              <span className="font-semibold text-slate-200">₩2,100,000+ / Month</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Quick Guidance Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-slate-300 font-medium">
                          Unsure which country matches your profile?
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleScrollTo("contact")}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                      >
                        <span>Ask an Advisor</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE SCROLL INDICATOR                                           */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative z-20 flex flex-col items-center justify-center gap-1.5 pt-8 sm:pt-6 cursor-pointer group"
        onClick={() => handleScrollTo("stats")}
        aria-label="Scroll to explore statistics"
      >
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-slate-400 group-hover:text-amber-400 transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-amber-400/60 flex items-start justify-center p-1 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-amber-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
