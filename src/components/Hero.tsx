"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import Logo from "@/components/Logo";

export default function Hero() {
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset =
        (document.querySelector("header")?.getBoundingClientRect().height ?? 80) + 8;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] sm:min-h-[80vh] lg:min-h-[84vh] flex items-center justify-center overflow-hidden bg-[#0e2f52] py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/hero/hero-bg-sm.jpg"
          />
          <img
            src="/assets/hero/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
      </motion.div>

      {/* Blue-tinted overlay: lighter than the old navy wash so the photo stays visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(18, 58, 102, 0.52)" }}
      />

      {/* Subtle top & bottom shadow gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081a30]/75 via-[#0e3a66]/10 to-[#061526]/85 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-white">
        {/* Logo Mark */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6 shrink-0"
        >
          <Logo variant="white" className="mx-auto h-12 w-12 sm:h-16 sm:w-16" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 uppercase leading-[1.2] sm:leading-[1.15]"
        >
          APEX GLOBAL TALENT
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-semibold text-amber-400 max-w-2xl mb-4 sm:mb-6 leading-relaxed"
        >
          {t("hero_tag")}
        </motion.p>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          {t("hero_mission")}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10 max-w-md sm:max-w-none"
        >
          <button
            type="button"
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0b2440]"
          >
            <span>{t("btn_consult")}</span>
            <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("courses")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-sm shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0b2440]"
          >
            <span>{t("btn_courses")}</span>
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          </button>
        </motion.div>

        {/* Cultural destination tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xs text-xs sm:text-sm font-semibold text-slate-100">
            <span className="w-4 h-3 rounded-xs bg-white flex items-center justify-center overflow-hidden shadow-2xs shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
            </span>
            <span className="tracking-wide">{t("jp_title")}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xs text-xs sm:text-sm font-semibold text-slate-100">
            <span className="w-4 h-3 rounded-xs bg-white flex items-center justify-center overflow-hidden shadow-2xs shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-red-600 to-blue-600"></span>
            </span>
            <span className="tracking-wide">{t("kr_title")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
