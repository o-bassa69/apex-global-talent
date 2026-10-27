"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Utensils,
  HardHat,
  Briefcase,
  FileDown,
  Clock,
  ArrowRight,
  ArrowRightLeft,
  Ban,
  Home,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Services() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"japan" | "korea">("japan");

  // Lets the brand cards in "Who We Are" open the matching tab.
  useEffect(() => {
    const handleSelect = (event: Event) => {
      const detail = (event as CustomEvent<"japan" | "korea">).detail;
      if (detail === "japan" || detail === "korea") {
        setActiveTab(detail);
      }
    };

    window.addEventListener("apex:select-service", handleSelect);
    return () =>
      window.removeEventListener("apex:select-service", handleSelect);
  }, []);

  const japanCards = [
    {
      id: "jp-student",
      titleKey: "jp_student",
      descKey: "jp_student_d",
      pointKeys: ["jp_student_1", "jp_student_2", "jp_student_3"],
      levels: ["N5", "N4", "N3", "N2"],
      icon: GraduationCap,
      color: "text-red-600 bg-red-50 border-red-200",
      accent: "from-red-500 to-rose-600",
      dot: "text-red-600",
    },
    {
      id: "jp-ssw",
      titleKey: "jp_ssw",
      descKey: "jp_ssw_d",
      pointKeys: ["jp_ssw_1", "jp_ssw_2", "jp_ssw_3"],
      icon: Utensils,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      accent: "from-amber-500 to-orange-600",
      dot: "text-amber-600",
    },
    {
      id: "jp-training",
      titleKey: "jp_training",
      descKey: "jp_training_d",
      pointKeys: ["jp_training_1", "jp_training_2", "jp_training_3"],
      icon: HardHat,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      accent: "from-blue-500 to-indigo-600",
      dot: "text-blue-600",
    },
    {
      id: "jp-work",
      titleKey: "jp_work",
      descKey: "jp_work_d",
      pointKeys: ["jp_work_1", "jp_work_2", "jp_work_3"],
      icon: Briefcase,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      accent: "from-emerald-500 to-teal-600",
      dot: "text-emerald-600",
    },
  ];

  const koreaFeatures = {
    d2: [
      { key: "kr_d2_1", icon: Briefcase },
      { key: "kr_d2_2", icon: Clock },
      { key: "kr_d2_3", icon: Home },
    ],
    d4: [
      { key: "kr_d4_1", icon: Ban },
      { key: "kr_d4_2", icon: Clock },
      { key: "kr_d4_3", icon: ArrowRightLeft },
    ],
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("services_title")}
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner max-w-md w-full">
            <button
              type="button"
              onClick={() => setActiveTab("japan")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer ${
                activeTab === "japan"
                  ? "bg-white text-slate-900 shadow-md border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="w-4 h-3 rounded-2xs bg-white flex items-center justify-center border border-slate-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
              </span>
              <span>{t("jp_title")}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("korea")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer ${
                activeTab === "korea"
                  ? "bg-white text-slate-900 shadow-md border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="w-4 h-3 rounded-2xs bg-white flex items-center justify-center border border-slate-300 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-red-600 to-blue-600"></span>
              </span>
              <span>{t("kr_title")}</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "japan" && (
            <motion.div
              key="japan-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-red-50/60 border border-red-200/80 text-center max-w-2xl mx-auto shadow-2xs">
                <p className="text-sm sm:text-base font-bold text-red-950">{t("jp_tag")}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {japanCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border shadow-xs ${card.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-red-700 transition-colors leading-snug">
                          {t(card.titleKey)}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {t(card.descKey)}
                      </p>

                      {card.levels && (
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {t("jp_exams")}
                          </span>
                          {card.levels.map((level) => (
                            <span
                              key={level}
                              className="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 text-[11px] font-extrabold tracking-wide"
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="mt-auto space-y-2.5">
                        {card.pointKeys.map((pointKey) => (
                          <li key={pointKey} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${card.dot}`} />
                            <span className="text-[13px] text-slate-700 leading-relaxed">
                              {t(pointKey)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-900 text-white text-center shadow-md max-w-3xl mx-auto">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-400" />
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  {t("jp_note")}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "korea" && (
            <motion.div
              key="korea-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-center max-w-3xl mx-auto shadow-2xs">
                <p className="text-sm sm:text-base font-bold text-blue-950">{t("kr_tag")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* D-2 — highlighted pathway */}
                <div className="relative overflow-hidden rounded-3xl p-7 sm:p-8 border-2 border-blue-600/30 bg-gradient-to-br from-white via-blue-50/60 to-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-700 via-indigo-500 to-sky-400" />
                  <span
                    aria-hidden
                    className="absolute -right-3 -bottom-8 text-[130px] leading-none font-black text-blue-600/[0.06] select-none pointer-events-none"
                  >
                    D-2
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 border border-blue-200/80 text-[10px] font-extrabold uppercase tracking-wider text-blue-900">
                        <span className="w-4 h-3 rounded-2xs bg-white flex items-center justify-center border border-slate-300 shadow-2xs">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-b from-red-600 to-blue-600"></span>
                        </span>
                        {t("kr_title")}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        {t("kr_best")}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/25">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tight">
                          D-2
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-blue-700 mt-1">
                          {t("kr_d2_t")}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium my-5 p-4 rounded-xl bg-white/90 border border-blue-100 shadow-2xs">
                      {t("kr_d2")}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {koreaFeatures.d2.map(({ key, icon: FeatureIcon }) => (
                        <li
                          key={key}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/85 border border-blue-100/90 shadow-2xs"
                        >
                          <span className="w-7 h-7 shrink-0 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                            <FeatureIcon className="w-4 h-4" />
                          </span>
                          <span className="text-[13px] text-slate-700 leading-relaxed pt-0.5">
                            {t(key)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/assets/korea-d2-guide.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>{t("kr_pdf")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* D-4 — standard pathway */}
                <div className="relative overflow-hidden rounded-3xl p-7 sm:p-8 border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-300 via-sky-400 to-blue-400" />
                  <span
                    aria-hidden
                    className="absolute -right-3 -bottom-8 text-[130px] leading-none font-black text-slate-900/[0.04] select-none pointer-events-none"
                  >
                    D-4
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                        <span className="w-4 h-3 rounded-2xs bg-white flex items-center justify-center border border-slate-300 shadow-2xs">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-b from-red-600 to-blue-600"></span>
                        </span>
                        {t("kr_title")}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider border border-slate-200">
                        {t("kr_standard")}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tight">
                          D-4
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">
                          {t("kr_d4_t")}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed my-5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      {t("kr_d4")}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {koreaFeatures.d4.map(({ key, icon: FeatureIcon }) => (
                        <li
                          key={key}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100"
                        >
                          <span className="w-7 h-7 shrink-0 rounded-lg bg-white text-slate-600 flex items-center justify-center border border-slate-200">
                            <FeatureIcon className="w-4 h-4" />
                          </span>
                          <span className="text-[13px] text-slate-600 leading-relaxed pt-0.5">
                            {t(key)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="mt-auto w-full py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                    >
                      <span>{t("kr_help")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white text-center shadow-md max-w-3xl mx-auto">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-400" />
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  {t("kr_note")}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
