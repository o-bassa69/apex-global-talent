"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation, Language } from "@/i18n/LanguageContext";
import teamData from "@/data/team.json";

interface TeamMember {
  id: string;
  name: string;
  photo: string;
  role: Record<Language, string>;
  phone: string;
  phoneHref: string;
  email: string;
}

interface TeamData {
  contact: {
    website: string;
    websiteLabel: string;
    address: string;
  };
  members: TeamMember[];
}

export default function TeamSection() {
  const { t, language } = useTranslation();
  const team = teamData as TeamData;

  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("team")}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs"
        >
          <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {t("about_inst")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.members.map((member, idx) => {
            const roleText = member.role[language] || member.role.en;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/5] bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-blue-600 mt-1 mb-4 leading-snug">
                    {roleText}
                  </p>

                  <div className="mt-auto space-y-2 pt-3 border-t border-slate-100">
                    <a
                      href={`tel:${member.phoneHref}`}
                      className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      title={member.email}
                      className="flex items-center gap-2 text-[10px] sm:text-[10.5px] tracking-tight text-slate-600 hover:text-blue-600 transition-colors leading-snug"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span className="min-w-0 flex-1 truncate">{member.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4">
          <a
            href={team.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            <span>{team.contact.websiteLabel}</span>
          </a>
          <span className="hidden sm:block h-4 w-px bg-slate-300" aria-hidden />
          <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>{team.contact.address}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
