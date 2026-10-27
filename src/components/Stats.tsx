"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Building,
  CheckCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ end, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Students Placed",
      subtext: "Enrolled in Japanese & Korean academies",
    },
    {
      icon: ShieldCheck,
      value: 95,
      suffix: "%",
      label: "Visa Success Rate",
      subtext: "Immigration COE & Embassy approvals",
    },
    {
      icon: Building,
      value: 50,
      suffix: "+",
      label: "Partner Institutions",
      subtext: "Direct links with Japanese & Korean schools",
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: "%",
      label: "Ethical & Transparent",
      subtext: "Official registrations & zero hidden fees",
    },
  ];

  return (
    <section id="stats" className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#fafbfc] border border-slate-200/70 hover:border-slate-300 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-1">
                  <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs sm:text-sm text-slate-600 leading-normal max-w-[210px]">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
