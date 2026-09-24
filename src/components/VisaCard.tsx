import React from "react";
import Link from "next/link";
import { VisaService } from "@/data/visas";
import {
  FileText,
  Clock,
  Briefcase,
  Languages,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function VisaCard({ visa }: { visa: VisaService }) {
  const isJapan = visa.country === "japan";

  return (
    <div className="rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/70 group">
      <div>
        {/* Country & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 ${
              isJapan
                ? "bg-rose-950/70 border border-rose-800/60 text-rose-300"
                : "bg-blue-950/70 border border-blue-800/60 text-blue-300"
            }`}
          >
            <span>{isJapan ? "🇯🇵 Japan" : "🇰🇷 South Korea"}</span>
          </span>
          <span className="text-[11px] text-slate-400 font-medium bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
            {visa.categoryName}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
          {visa.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          {visa.tagline}
        </p>

        {/* Key Rules Matrix */}
        <div className="my-5 space-y-2.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs">
          <div className="flex items-start gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">Duration: </span>
              <span>{visa.duration}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-300">
            <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">Work Permissions: </span>
              <span>{visa.workPermission}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-300">
            <Languages className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 font-medium">Language Criteria: </span>
              <span className="text-white font-medium">{visa.languageRequirement}</span>
            </div>
          </div>
        </div>

        {/* Eligibility Highlights */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Core Eligibility Criteria:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {visa.eligibility.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-slate-400">
          Document Checklist & Advisory Available
        </span>

        <Link
          href={`/apply?visa=${visa.id}&destination=${visa.country}`}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md ${
            isJapan
              ? "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40"
              : "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40"
          }`}
        >
          <span>Check My Eligibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
