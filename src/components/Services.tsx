"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";

export default function Services() {
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

  const services = [
    {
      id: "japanese-classes",
      countryBadge: "Japan Program",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      accentBar: "from-red-500 to-rose-600",
      icon: BookOpen,
      iconColor: "text-red-600 bg-red-50",
      title: "Japanese Language Courses",
      subtitle: "JLPT N5 – N1 • NAT-TEST • JFT-Basic SSW",
      description:
        "Rigorous classroom and interactive hybrid training designed for absolute beginners to advanced speakers, tailored for university entry, language schools, and SSW work visas.",
      highlights: [
        "Master Hiragana, Katakana & 300+ essential Kanji",
        "Official timed mock exams mirroring JLPT & NAT-TEST",
        "Interactive conversational drills & Japanese etiquette",
        "150+ hours study certificates accepted by Japanese COE",
      ],
      ctaText: "View Japanese Courses",
      targetId: "courses",
    },
    {
      id: "korean-classes",
      countryBadge: "Korea Program",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accentBar: "from-blue-600 to-indigo-600",
      icon: GraduationCap,
      iconColor: "text-blue-600 bg-blue-50",
      title: "Korean Language Courses",
      subtitle: "EPS-TOPIK CBT • TOPIK I & II • Academic Prep",
      description:
        "Specialized Korean training utilizing official HRD Korea curricula. We prepare candidates for the computerized EPS-TOPIK exam and higher education university admissions in South Korea.",
      highlights: [
        "Dedicated computer-based test (CBT) lab simulations",
        "Official HRD Korea standard textbook curriculum",
        "TOPIK I & II grammar, reading & essay writing",
        "Pronunciation coaching with native audio resources",
      ],
      ctaText: "View Korean Courses",
      targetId: "courses",
    },
    {
      id: "visa-processing",
      countryBadge: "End-to-End Service",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      accentBar: "from-amber-500 to-orange-500",
      icon: FileCheck2,
      iconColor: "text-amber-600 bg-amber-50",
      title: "Visa Processing & Advisory",
      subtitle: "Student, SSW & Employment Documentation",
      description:
        "Transparent, step-by-step guidance navigating strict immigration regulations for Japan and South Korea. We meticulously audit your academic, financial, and legal records.",
      highlights: [
        "Certificate of Eligibility (COE) submission support",
        "Sponsor bank audit & Divisional Secretariat attestations",
        "Statement of Purpose (Gakushuu Riyuusho) crafting",
        "Embassy interview coaching & pre-departure orientations",
      ],
      ctaText: "Explore Visa Process",
      targetId: "visa-process",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>OUR CORE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Language Training &amp; Visa Advisory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We bridge the gap between Sri Lankan talent and world-class opportunities in
            Japan and South Korea through certified training and ethical documentation.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 p-8 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b bg-gradient-to-r ${service.accentBar} opacity-80`}
                />

                <div>
                  {/* Card Header: Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.countryBadge}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconColor} transition-transform group-hover:scale-110 duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-1 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                    {service.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  type="button"
                  onClick={() => handleScrollTo(service.targetId)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 text-xs font-bold transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
