"use client";

import React, { useState } from "react";
import { applicationProcess } from "@/data/process";
import {
  PhoneCall,
  Users,
  BookOpen,
  FileCheck2,
  Send,
  Stamp,
  Plane,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const stepIcons = [
    PhoneCall,
    Users,
    BookOpen,
    FileCheck2,
    Send,
    Stamp,
    Plane,
  ];

  return (
    <div className="w-full">
      {/* Stepper Navigation Pills (Desktop & Tablet) */}
      <div className="hidden lg:grid grid-cols-7 gap-2 mb-8">
        {applicationProcess.map((step) => {
          const Icon = stepIcons[step.step - 1];
          const isSelected = activeStep === step.step;

          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-800 border-rose-500/80 shadow-lg shadow-rose-950/40 text-white"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center ${
                    isSelected
                      ? "bg-rose-600 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  0{step.step}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-rose-400" : "text-slate-500"
                  }`}
                />
              </div>
              <span className="font-semibold text-xs leading-tight line-clamp-2">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Panel (Desktop) */}
      <div className="hidden lg:block">
        {applicationProcess.map((step) => {
          if (step.step !== activeStep) return null;
          const Icon = stepIcons[step.step - 1];

          return (
            <div
              key={step.step}
              className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <span className="text-9xl font-black text-white">0{step.step}</span>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-900/50 text-rose-300 text-xs font-semibold">
                    <Icon className="w-3.5 h-3.5 text-rose-400" />
                    <span>Stage 0{step.step} of 07</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-rose-300">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {step.description}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Individual Counselor Attention</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Transparent Checklist</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {step.actionTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.actionTip}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Navigation:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveStep(Math.max(1, step.step - 1))}
                        disabled={step.step === 1}
                        className="px-2.5 py-1 rounded bg-slate-800 disabled:opacity-30 hover:bg-slate-700 text-white"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(7, step.step + 1))}
                        disabled={step.step === 7}
                        className="px-2.5 py-1 rounded bg-rose-600 disabled:opacity-30 hover:bg-rose-500 text-white font-medium"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Stacked Accordion/List View */}
      <div className="lg:hidden space-y-3">
        {applicationProcess.map((step) => {
          const Icon = stepIcons[step.step - 1];
          const isOpen = activeStep === step.step;

          return (
            <div
              key={step.step}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-slate-900 border-rose-500/60 shadow-lg shadow-rose-950/30"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              <button
                onClick={() => setActiveStep(isOpen ? 0 : step.step)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 ${
                      isOpen
                        ? "bg-rose-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    0{step.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">
                      {step.title}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    isOpen ? "rotate-90 text-rose-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-3 text-xs">
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-bold text-rose-400 block mb-1">
                      {step.actionTitle}
                    </span>
                    <span className="text-slate-400">{step.actionTip}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Compliance Note */}
      <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <span>
          <strong>Ethical Practice Notice:</strong> Apex Global Talent Pvt Ltd adheres to transparent, structured application protocols. We do not make claims of guaranteed visas, guaranteed admissions, or guaranteed jobs. All formal decisions are made by respective foreign immigration authorities and educational institutions.
        </span>
      </div>
    </div>
  );
}
