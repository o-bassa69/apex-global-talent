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
    <section id="visa-process" className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3 border border-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear, Stress-Free Visa Processing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From your first inquiry in Sri Lanka to your first steps in Japan or South Korea,
            our transparent 5-step process keeps you guided, prepared, and confident.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        Step {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                    <span className="font-semibold text-slate-700 not-italic">Pro tip: </span>
                    {step.tip}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Start Your Assessment Today</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
