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
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { japaneseCourses } from "@/data/courses";

// Enhanced list of Korean courses tailored for the section
const koreanCoursesData = [
  {
    id: "eps-topik-cbt",
    country: "korea" as const,
    title: "EPS-TOPIK CBT Special Training",
    level: "HRD Korea E-9 Benchmark",
    tagline: "Dedicated computer-based exam coaching for Sri Lankan job seekers targeting South Korea.",
    duration: "3 - 4 Months (150 Hours)",
    schedule: "Full-Time Intensive & Weekend Batches",
    mode: "Classroom CBT Lab + Practical",
    badge: "Government E-9 Gateway",
    description:
      "Engineered specifically for the official HRD Korea Computer-Based Test (CBT). Features extensive listening comprehension drills, manufacturing/industrial safety terminology, and timed simulations in our computer lab.",
    targetExam: "Official EPS-TOPIK CBT (SLBFE / HRD Korea)",
    suitableFor: [
      "Sri Lankan youth targeting E-9 manufacturing, construction, or fishery jobs in Korea",
      "Candidates registered or planning to register with SLBFE for the Korean employment roster",
      "Beginners wanting focused vocabulary and rapid listening reflex training",
    ],
    syllabusHighlights: [
      "Standard HRD Korea official textbook volume 1 & 2 complete walkthrough",
      "Industrial safety terminology and basic factory workplace Korean",
      "Listening questions practice matching official exam speed and audio accents",
      "Daily computer-based mock exams with instant scoring and explanation",
    ],
    nextIntake: "New Batches Enrolling Weekly",
  },
  {
    id: "topik-1",
    country: "korea" as const,
    title: "TOPIK I (Level 1 & 2) Foundation",
    level: "Beginner Academic Level (A1 - A2)",
    tagline: "Master Hangul, basic grammar, and conversational essentials for student visa admissions.",
    duration: "4 Months (160 Hours)",
    schedule: "Morning & Weekend Options",
    mode: "Hybrid (Onsite + Online)",
    badge: "D-4 & D-2 Essential",
    description:
      "A complete curriculum starting from Hangul alphabet mastery, sentence construction, particles, and formal/informal speech styles. Essential for D-4 Korean language institute visa and university bachelor admissions.",
    targetExam: "TOPIK I (Test of Proficiency in Korean)",
    suitableFor: [
      "G.C.E. A/L graduates planning for Korean University language programs (D-4)",
      "Students preparing for undergraduate (D-2) university degree admissions",
      "Individuals seeking conversational fluency for business or travel",
    ],
    syllabusHighlights: [
      "Hangul pronunciation rules, batchim (final consonants) and sound changes",
      "Core 1,200+ vocabulary words and essential everyday grammar patterns",
      "Listening comprehension drills with natural native Korean speakers",
      "Past TOPIK I actual examination analysis and timed test-taking tactics",
    ],
    nextIntake: "Upcoming Month Intake",
  },
  {
    id: "topik-2",
    country: "korea" as const,
    title: "TOPIK II (Level 3 & 4) Intermediate",
    level: "Intermediate Academic (B1 - B2)",
    tagline: "Qualify for Korean government scholarships (GKS) and university degree programs.",
    duration: "5 Months (180 Hours)",
    schedule: "Evening & Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Scholarships & Degree",
    description:
      "Focuses on academic essays, formal business presentations, and complex grammatical structures. Crucial for students seeking undergraduate/graduate degrees taught in Korean and Global Korea Scholarships.",
    targetExam: "TOPIK II Level 3/4",
    suitableFor: [
      "Degree holders aiming for Master's/PhD programs in South Korea",
      "Students targeting Global Korea Scholarship (GKS) grants",
      "Professionals pursuing corporate employment in Korean firms",
    ],
    syllabusHighlights: [
      "TOPIK II academic writing (Question 51-54 essay composition formulas)",
      "Advanced social, scientific, and cultural reading texts",
      "News broadcasts and debate listening comprehension",
      "University entrance interview preparation in fluent Korean",
    ],
    nextIntake: "Limited Seats per Cohort",
  },
];

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

  const currentCourses = activeTab === "japan" ? japaneseCourses : koreanCoursesData;

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCourses.map((course, idx) => (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {course.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-amber-700 font-medium mb-4">
                    {course.tagline}
                  </p>

                  {/* Key Specs Pills */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{course.schedule.split("&")[0]}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5 pt-1 border-t border-slate-200/50 text-[11px] text-slate-500">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-800">
                        Exam: {course.targetExam}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Syllabus Highlights */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Syllabus Focus
                    </div>
                    {course.syllabusHighlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Enroll CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-medium text-emerald-700">
                    {course.nextIntake}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnrollClick(course.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Course Schedule & Mode Assurance Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          All courses include certified printed study materials, audio files, past exam papers, and
          an official 150+ hours study certificate required by Japanese &amp; Korean Immigration authorities.
        </div>
      </div>
    </section>
  );
}
