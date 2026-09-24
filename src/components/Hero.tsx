"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Users,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
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

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100"
    >
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800">
                Accredited Language Training &amp; Visa Advisory • Maharagama, Sri Lanka
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your Trusted Gateway to Study &amp; Work in{" "}
              <span className="relative inline-block text-slate-900">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
                  Japan
                </span>
              </span>{" "}
              &amp;{" "}
              <span className="relative inline-block text-slate-900">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600">
                  South Korea
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Empowering Sri Lankan students and professionals with certified Japanese
              (JLPT / NAT-TEST) and Korean (EPS-TOPIK / TOPIK) instruction, paired with
              meticulous, end-to-end visa documentation services.
            </p>

            {/* Key Value Points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified Japanese &amp; Korean Instructors</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>95%+ Visa Lodging Success Rate</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Student, SSW &amp; EPS-TOPIK Pathways</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero False Promises • 100% Ethical Advisory</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo("courses")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-300 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Trust Quote / Footnote */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 text-amber-300 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  JP
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  KR
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  LK
                </div>
              </div>
              <p>
                Trusted by 500+ Sri Lankan applicants across Colombo, Kandy, Gampaha &amp; Kurunegala.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic / Card Montage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft shadow border */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-slate-200 via-amber-100/50 to-blue-100 shadow-xl">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
                    alt="Tokyo cityscape and Mt Fuji representing Japan opportunities"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                  {/* Destination Overlay Chips */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
                      <span>Japan (日本)</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                      <span>South Korea (한국)</span>
                    </div>
                  </div>

                  {/* Bottom Captions inside the hero visual */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          Official Pathways
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                          Intakes Open
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        Language Training + COE + Visa Filing
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        JLPT N5-N1 • NAT-TEST • EPS-TOPIK CBT • Student &amp; Work Visas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-lg z-20">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">95%+ Success</div>
                  <div className="text-[11px] text-slate-500">Document Compliance</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-lg z-20">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">500+ Students</div>
                  <div className="text-[11px] text-slate-500">Trained &amp; Placed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
