"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface FAQItem {
  id: string;
  category: "all" | "japan" | "korea" | "visa";
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: "faq-1",
    category: "visa",
    question: "Who is Apex Global Talent and what services do you provide?",
    answer:
      "Apex Global Talent Pvt Ltd is a premier language and educational consultancy in Colombo, Sri Lanka. We specialize in accredited Japanese (JLPT, NAT-TEST) and Korean (EPS-TOPIK, TOPIK) instruction, alongside comprehensive, legal visa documentation advisory for students, trainees, and professionals seeking study and work opportunities in Japan and South Korea.",
  },
  {
    id: "faq-2",
    category: "visa",
    question: "Do you guarantee visa approval or job placement?",
    answer:
      "No. In strict compliance with Sri Lankan and international legal standards, Apex Global Talent does not make false promises or guarantees. Final decisions on visa issuance and Certificate of Eligibility (COE) belong exclusively to the Immigration Services Agency of Japan, the Ministry of Justice of South Korea, and their respective embassies in Colombo. What we guarantee is rigorous language exam preparation and meticulous, discrepancy-free document filing that strictly satisfies official immigration criteria.",
  },
  {
    id: "faq-3",
    category: "japan",
    question: "What are the minimum requirements to apply for a Japan Student Visa?",
    answer:
      "Applicants must have completed at least 12 years of formal education (equivalent to G.C.E. Advanced Level in Sri Lanka), be capable of presenting a 150+ hours Japanese study certificate or JLPT N5/NAT-TEST 5Q passing score, and have a capable financial sponsor (parents or close relatives) with legitimate funds and income documentation.",
  },
  {
    id: "faq-4",
    category: "japan",
    question: "When are the main intakes for Japanese language schools?",
    answer:
      "Japan has four primary intakes each year: April (longest program, up to 2 years), July (1 year 9 months), October (second largest, 1.5 years), and January (1 year 3 months). Application documents must be prepared and lodged with schools 5 to 6 months prior to the intake month to meet Japanese Immigration COE deadlines.",
  },
  {
    id: "faq-5",
    category: "japan",
    question: "Can international students work part-time in Japan?",
    answer:
      "Yes. International students in Japan who obtain the official 'Permission to Engage in Activity Other Than That Permitted' at the airport are legally permitted to work part-time up to 28 hours per week during school terms, and up to 40 hours per week (8 hours per day) during designated seasonal school vacations.",
  },
  {
    id: "faq-6",
    category: "japan",
    question: "What is the SSW (Specified Skilled Worker) visa in Japan?",
    answer:
      "The SSW (Tokutei Ginou) is an operational employment status in designated sectors such as Nursing Care (Kaigo), Food Service, Agriculture, and Hospitality. Candidates must be at least 18 years old, pass the JLPT N4 or JFT-Basic language test, and pass the official Prometric Skill Evaluation Test conducted in Sri Lanka.",
  },
  {
    id: "faq-7",
    category: "korea",
    question: "How does the EPS-TOPIK system work for Sri Lankans in South Korea?",
    answer:
      "The Employment Permit System (EPS) is a government-to-government program between Sri Lanka (SLBFE) and South Korea (HRD Korea). Candidates learn Korean, pass the computerized EPS-TOPIK CBT exam and skills assessment, and are entered into the HRD Korea job roster for selection by Korean manufacturing and industrial employers.",
  },
  {
    id: "faq-8",
    category: "korea",
    question: "What is the difference between Korea D-4 and D-2 visas?",
    answer:
      "The D-4 visa is for General Training, specifically for studying Korean at a language institute affiliated with a Korean university. The D-2 visa is for students enrolled directly into undergraduate (Bachelor's), Master's, or PhD degree programs at accredited South Korean universities.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === "all"
      ? faqList
      : faqList.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3 border border-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about course requirements, intake deadlines, part-time work
            regulations, and legal visa procedures.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "japan", label: "Japan (JLPT & Visas)" },
              { id: "korea", label: "Korea (EPS & TOPIK)" },
              { id: "visa", label: "Visa Policies & Integrity" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-slate-900 text-white rotate-180"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific question about your eligibility?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Speak directly with an accredited language counselor in Colombo.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
