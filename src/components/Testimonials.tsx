"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Sparkles,
  MapPin,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  homeDistrict: string;
  destination: "Japan" | "South Korea";
  city: string;
  pathway: string;
  program: string;
  photoUrl: string;
  quote: string;
  statusBadge: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "story-1",
    name: "Kavindu Perera",
    homeDistrict: "Gampaha, Sri Lanka",
    destination: "Japan",
    city: "Tokyo",
    pathway: "Student Visa (Ryugaku)",
    program: "JLPT N5 & N4 Comprehensive",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote:
      "The structured Kanji drills, weekly vocabulary tests, and mock interview coaching at Apex Global Talent gave me the exact confidence I needed. The counselors were 100% transparent about tuition fees, living expenses in Tokyo, and Japanese Immigration COE documentation. My COE came through smoothly in the April intake!",
    statusBadge: "Enrolled in Tokyo Language Academy",
  },
  {
    id: "story-2",
    name: "Nimanthi Silva",
    homeDistrict: "Kandy, Sri Lanka",
    destination: "Japan",
    city: "Osaka",
    pathway: "SSW Specified Skilled Worker (Kaigo)",
    program: "JLPT N4 + Specialized Caregiver Japanese",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote:
      "Learning medical and elder-care Japanese terminology was challenging, but the patient instructors at Apex made all the difference. They simulated the Prometric skill test questions and helped format my resume to Japanese corporate standards. I am now working full-time in Osaka under standard Japanese labor rights!",
    statusBadge: "SSW Contract Approved in Osaka",
  },
  {
    id: "story-3",
    name: "Roshan Dayananda",
    homeDistrict: "Kurunegala, Sri Lanka",
    destination: "South Korea",
    city: "Busan",
    pathway: "EPS-TOPIK E-9 Employment",
    program: "EPS-TOPIK CBT Master Batch",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote:
      "The computer lab simulation tests at Apex accurately mirrored the official HRD Korea CBT examination. The teachers placed huge emphasis on official textbooks and rapid listening reflexes. I scored 92/100 on my first attempt and was placed on the roster in record time.",
    statusBadge: "EPS-TOPIK Roster Qualified",
  },
  {
    id: "story-4",
    name: "Tharushi Mendis",
    homeDistrict: "Colombo, Sri Lanka",
    destination: "South Korea",
    city: "Seoul",
    pathway: "D-2 Degree Program (Undergraduate)",
    program: "TOPIK I & II Academic Writing",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    quote:
      "Preparing study plans, personal statements, and consular attestations for Korean university applications felt daunting until I joined Apex. Their step-by-step checklist and essay feedback ensured my admission package was accepted by a top university in Seoul.",
    statusBadge: "Admitted to Seoul University",
  },
  {
    id: "story-5",
    name: "Asanka Fernando",
    homeDistrict: "Negombo, Sri Lanka",
    destination: "Japan",
    city: "Nagoya",
    pathway: "TITP & Technical Engineering",
    program: "JLPT N4 Fast-Track & Interview Prep",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "What stands out about Apex Global Talent is their honesty. They never gave me unrealistic promises or hidden fee surprises. Every milestone was planned from day one. I strongly recommend them to anyone in Sri Lanka seeking a genuine pathway to Japan.",
    statusBadge: "Technical Placement in Nagoya",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>REAL SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear from Sri Lankan Students in Japan &amp; Korea
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Every year, hundreds of our students achieve life-changing academic admissions and
            professional visas. Read their genuine experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <Quote className="absolute right-6 bottom-6 w-32 h-32 text-slate-200/50 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                {/* Student Photo & Destination Pill */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md ring-4 ring-white">
                    <Image
                      src={current.photoUrl}
                      alt={current.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs bg-white border border-slate-200">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        current.destination === "Japan" ? "bg-red-600" : "bg-blue-600"
                      }`}
                    />
                    <span className="text-slate-800">{current.destination} ({current.city})</span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">5.0 Verified Review</span>
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic mb-6">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Student Details */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{current.homeDistrict}</span>
                        <span className="text-slate-300">•</span>
                        <span>{current.program}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{current.statusBadge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === dotIdx
                      ? "w-8 bg-slate-900"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
