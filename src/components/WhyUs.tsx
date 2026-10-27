"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Building2, Route } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function WhyUs() {
  const { t } = useTranslation();

  const cards = [
    {
      id: "direct-channels",
      icon: Handshake,
      titleKey: "why1_t",
      descKey: "why1_d",
      accent: "from-blue-600 to-indigo-600",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      id: "facilities",
      icon: Building2,
      titleKey: "why2_t",
      descKey: "why2_d",
      accent: "from-amber-500 to-orange-600",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      id: "commitment",
      icon: Route,
      titleKey: "why3_t",
      descKey: "why3_d",
      accent: "from-emerald-600 to-teal-600",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("why_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.accent}`} />
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs mb-6 ${card.iconColor}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {t(card.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {t(card.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
