"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileCheck2,
  Send,
  CheckCircle,
  PlaneTakeoff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function VisaProcess() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation & Assessment",
      subtitle: "Personalized eligibility evaluation",
      icon: MessageSquare,
      description:
        "One-on-one session at our Colombo office or online. We evaluate your G.C.E. O/L & A/L qualifications, financial sponsor feasibility, and determine the optimal visa category (Student, SSW, or EPS).",
      tip: "Understand genuine costs, timelines, and legal criteria with zero false promises.",
    },
    {
      number: "02",
      title: "Language Training & Document Prep",
      subtitle: "Academic & legal documentation",
      icon: FileCheck2,
      description:
        "Begin your certified Japanese (JLPT/NAT) or Korean (EPS/TOPIK) batches. Simultaneously, our documentation specialists guide you through gathering attested certificates, affidavits, and bank proofs.",
      tip: "Every document is audited against Japanese & Korean Immigration verification rules.",
    },
    {
      number: "03",
      title: "Institution Filing & Application",
      subtitle: "COE & admission submission",
      icon: Send,
      description:
        "Your verified package is submitted directly to the accredited Japanese language school, university, or Korean admissions office for screening and Certificate of Eligibility (COE) submission.",
      tip: "We maintain direct tracking and communication with Japanese & Korean partner bodies.",
    },
    {
      number: "04",
      title: "COE Issuance & Embassy Approval",
      subtitle: "Official visa stamp in Colombo",
      icon: CheckCircle,
      description:
        "Upon receiving the original COE from immigration authorities, we assist with tuition settlement and lodging the visa application with the Embassy of Japan or Republic of Korea in Sri Lanka.",
      tip: "Thorough mock interview coaching guarantees confident consular submission.",
    },
    {
      number: "05",
      title: "Pre-Departure & Departure",
      subtitle: "Ready for your new journey",
      icon: PlaneTakeoff,
      description:
        "Attend our detailed pre-departure briefing covering airport immigration protocols, student accommodation/dormitory check-in, part-time work legal limits, and local SIM/banking setups.",
      tip: "Continuous post-arrival guidance with established alumni in Tokyo, Osaka & Seoul.",
    },
  ];

  return (
    <section id="visa-process" className="py-20 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean left or centered with good hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs sm:text-sm font-semibold mb-3 border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Clear, Stress-Free Visa Processing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From your initial assessment in Sri Lanka to your first day in Japan or South Korea,
            our transparent 5-step roadmap keeps you informed, confident, and prepared.
          </p>
        </div>

        {/* Process Roadmap */}
        <div className="relative">
          {/* Continuous progression line for desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-300 z-0" />

          {/* Cards: Vertical timeline on mobile, 5-col row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Step marker pin aligned with connecting line */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#0f172a] text-amber-400 flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        {step.number}
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#0f172a] mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mb-3.5 uppercase tracking-wide">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Pro tip: </span>
                    {step.tip}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Start Your Assessment Today</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
