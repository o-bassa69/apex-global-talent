"use client";

import React from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/10">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl text-white tracking-tight">
                    APEX
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Global Talent
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Pvt Ltd • Malabe, Sri Lanka
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka&apos;s trusted educational institute and visa consultancy specializing
              in certified Japanese (JLPT, NAT) and Korean (EPS-TOPIK, TOPIK) instruction,
              and ethical immigration documentation for study &amp; work opportunities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400">Accredited Pathways:</span>
              <span className="text-xs px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800/40">
                Japan (日本)
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40">
                Korea (대한민국)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Course Batches", href: "#courses" },
                { label: "Visa Timeline", href: "#visa-process" },
                { label: "Student Stories", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Language Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  JLPT N5 Foundation Course
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  JLPT N4 Intermediate (Visa Benchmark)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  JLPT N3 Bridge to Higher Studies
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  EPS-TOPIK CBT Master Batch (Korea E-9)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  TOPIK I &amp; II Academic (D-4 / D-2)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, "#courses")}
                  className="hover:text-amber-400 transition-colors"
                >
                  SSW Specified Skilled Worker Preparation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Colombo Center */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Malabe Center (Head Office)
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>469, Athurugiriya Road, Malabe</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.emailPrimary}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.emailPrimary}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>WhatsApp Instant Inquiries</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-slate-300 mb-1">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Legal Notice &amp; Regulatory Compliance</span>
          </div>
          <p>
            Apex Global Talent Pvt Ltd is a registered private educational consultancy and
            language training institute in Sri Lanka. We provide language instruction and visa
            documentation guidance. We are not an embassy, consulate, or government migration
            authority. Final decisions regarding visa approvals, admissions, and work permits
            reside exclusively with the Immigration Services Agency of Japan, the Ministry of
            Justice of the Republic of Korea, the Sri Lanka Foreign Employment Bureau (SLBFE),
            and authorized educational institutions. We do not make false promises or guarantees.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div>
            &copy; {new Date().getFullYear()} Apex Global Talent Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-slate-300 transition-colors"
            >
              Consultation Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
