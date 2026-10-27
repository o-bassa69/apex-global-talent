"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Handshake } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function CorePillars() {
  const { t } = useTranslation();

  const pillars = [
    {
      id: "education",
      icon: GraduationCap,
      titleKey: "pillar1_t",
      descKey: "pillar1_d",
    },
    {
      id: "career",
      icon: Briefcase,
      titleKey: "pillar2_t",
      descKey: "pillar2_d",
    },
    {
      id: "work-support",
      icon: Handshake,
      titleKey: "pillar3_t",
      descKey: "pillar3_d",
    },
  ];

  return (
    <section id="pillars" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#0f172a] text-xs sm:text-sm font-semibold mb-3 border border-slate-200">
            <span>FOUNDATIONAL COMMITMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {t("pillars_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#fafbfc] rounded-2xl p-8 sm:p-9 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center border border-amber-500/20 bg-amber-500/10 text-amber-600 shadow-2xs mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 tracking-tight">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(pillar.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
