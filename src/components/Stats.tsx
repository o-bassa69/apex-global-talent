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
      accent: "text-blue-600 bg-blue-50",
    },
    {
      icon: ShieldCheck,
      value: 95,
      suffix: "%",
      label: "Visa Success Rate",
      subtext: "Immigration COE & Embassy approvals",
      accent: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Building,
      value: 50,
      suffix: "+",
      label: "Partner Institutions",
      subtext: "Direct links with Japanese & Korean schools",
      accent: "text-amber-600 bg-amber-50",
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: "%",
      label: "Ethical & Transparent",
      subtext: "Official registrations & zero hidden fees",
      accent: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <section id="stats" className="py-14 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/60 border border-slate-200/60 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${stat.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                  <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-500 max-w-[180px]">
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
