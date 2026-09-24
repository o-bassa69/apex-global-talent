"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  BookOpenCheck,
  Compass,
  Building2,
  Scale,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Experienced & Certified Instructors",
      description:
        "Learn from JLPT N1/N2 and TOPIK-certified Sri Lankan and native language educators who focus on practical conversation, exam speed, and cultural etiquette.",
      badge: "Expert Faculty",
    },
    {
      icon: ShieldCheck,
      title: "95%+ Visa Lodging Success Rate",
      description:
        "Our multi-tier document verification and legal compliance screening drastically reduce COE queries, rejections, and consular administrative delays.",
      badge: "Proven Track Record",
    },
    {
      icon: BookOpenCheck,
      title: "Official Exam-Aligned Curriculum",
      description:
        "Structured course syllabi strictly matched to the Japan Foundation (JLPT/NAT-TEST) and HRD Korea (EPS-TOPIK CBT), including authentic mock exam series.",
      badge: "Official Standards",
    },
    {
      icon: Compass,
      title: "Complete End-to-End Guidance",
      description:
        "We assist at every milestone: course enrollment, sponsor financial auditing, Divisional Secretariat attestations, COE filing, and pre-departure briefings.",
      badge: "Full Care",
    },
    {
      icon: Building2,
      title: "Accredited Overseas Partnerships",
      description:
        "Direct liaisons with accredited Japanese language institutes, universities, vocational colleges (Senmon Gakko), and verified Korean institutional channels.",
      badge: "Direct Network",
    },
    {
      icon: Scale,
      title: "100% Ethical & Transparent Advisory",
      description:
        "Honest eligibility assessments, transparent fee structures, and zero false promises regarding visa approvals or overseas employment permits.",
      badge: "High Integrity",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>THE APEX ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Hundreds of Sri Lankan Students Trust Apex Global
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Embarking on an overseas journey requires academic excellence and infallible
            documentation. Here is how we ensure your success from day one.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Trust Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Official Registered Corporate Entity in Sri Lanka
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Apex Global Talent Pvt Ltd operates under strict registration compliance, offering
                genuine educational pathway advisory with no hidden costs.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs"
          >
            Request Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
