"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Calendar,
  CheckCircle2,
  BookOpen,
  Award,
  ArrowRight,
  FileDown,
  Shield,
} from "lucide-react";
import { japaneseCourses, koreanCourses } from "@/data/courses";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"japan" | "korea">("japan");

  const handleEnrollClick = (courseTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Set dropdown value if available
      const courseSelect = document.getElementById("course-select") as HTMLSelectElement | null;
      if (courseSelect) {
        // match best option
        for (let i = 0; i < courseSelect.options.length; i++) {
          if (courseSelect.options[i].text.toLowerCase().includes(courseTitle.toLowerCase().slice(0, 10))) {
            courseSelect.selectedIndex = i;
            break;
          }
        }
      }
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentCourses = activeTab === "japan" ? japaneseCourses : koreanCourses;

  return (
    <section id="courses" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3 border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>STRUCTURED CURRICULA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certified Language Courses for Every Goal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose your language track below. All courses feature printed materials, certified
            instructors, mock exam series, and official study certificates for visa processing.
          </p>

          {/* Country Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("japan")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "japan"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-red-600" />
              <span>Japanese Courses (JLPT / NAT)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("korea")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "korea"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span>Korean Courses (EPS / TOPIK)</span>
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col h-full rounded-2xl bg-white border border-slate-200/90 p-7 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex-1">
                  {/* Top Badge & Level */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        activeTab === "japan"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {course.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 leading-snug">
                    {course.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-amber-800 font-medium mb-4">
                    {course.tagline}
                  </p>

                  {/* Key Specs Pills */}
                  <div className="grid grid-cols-2 gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{course.schedule.split("&")[0]}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5 pt-2 border-t border-slate-200/50 text-xs text-slate-600">
                      <Award className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-900">
                        Exam: {course.targetExam}
                      </span>
                    </div>
                  </div>

                  {/* Direct Admissions Note */}
                  {course.directAdmissionsNote && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-200 mb-5">
                      <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-emerald-800 leading-relaxed">
                        {course.directAdmissionsNote}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Syllabus Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Syllabus Focus
                    </div>
                    {course.syllabusHighlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA — Pinned cleanly to the bottom */}
                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-emerald-800">
                      {course.nextIntake}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* PDF download for D-2 */}
                    {course.pdfUrl && (
                      <a
                        href={course.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
                        title="Download D-2 PDF Guide"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => handleEnrollClick(course.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Course Schedule & Mode Assurance Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          All courses include certified printed study materials, audio files, past exam papers, and
          an official 150+ hours study certificate required by Japanese &amp; Korean Immigration authorities.
        </div>
      </div>
    </section>
  );
}
