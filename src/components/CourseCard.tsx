import React from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { Clock, Calendar, CheckCircle, ArrowRight, BookOpen, Award } from "lucide-react";

export default function CourseCard({ course }: { course: Course }) {
  const isJapan = course.country === "japan";

  return (
    <div className="rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 ${
              isJapan
                ? "bg-rose-950/70 border border-rose-800/60 text-rose-300"
                : "bg-blue-950/70 border border-blue-800/60 text-blue-300"
            }`}
          >
            <span>{isJapan ? "🇯🇵" : "🇰🇷"}</span>
            <span>{course.level}</span>
          </span>

          <span className="text-[11px] font-medium text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
            {course.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
          {course.tagline}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-2 my-4 py-3 border-y border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{course.schedule}</span>
          </div>
        </div>

        {/* Target Exam Tag */}
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-4 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
          <Award className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Target: <strong className="text-white">{course.targetExam}</strong>
          </span>
        </div>

        {/* Syllabus Highlights Preview */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Curriculum Highlights:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {course.syllabusHighlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400">
          <span className="block text-slate-500">Mode of Study</span>
          <span className="font-semibold text-slate-300">{course.mode}</span>
        </div>

        <Link
          href={`/apply?course=${course.id}&destination=${course.country}`}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-md ${
            isJapan
              ? "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40"
              : "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40"
          }`}
        >
          <span>Enroll Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
