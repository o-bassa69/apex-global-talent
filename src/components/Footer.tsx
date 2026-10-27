"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import Logo from "@/components/Logo";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();
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
    <footer className="bg-[#09111e] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group"
            >
              <Logo variant="white" className="h-10 w-10" />
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
              {t("footer_bio")}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400">{t("footer_accredited")}</span>
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
              {t("footer_quick_links")}
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { labelKey: "nav_home", href: "#hero" },
                { labelKey: "nav_about", href: "#who-we-are" },
                { labelKey: "nav_pillars", href: "#pillars" },
                { labelKey: "nav_partners", href: "#partners" },
                { labelKey: "why_title", href: "#why-us" },
                { labelKey: "nav_services", href: "#services" },
                { labelKey: "nav_gallery", href: "#gallery" },
                { labelKey: "nav_team", href: "#team" },
                { labelKey: "nav_courses", href: "#courses" },
                { labelKey: "nav_visa", href: "#visa-process" },
                { labelKey: "nav_faq", href: "#faq" },
                { labelKey: "nav_contact", href: "#contact" },
              ].map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{t(link.labelKey)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t("footer_programs")}
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
              {t("footer_head_office")}
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
                <span>{t("footer_whatsapp_inquiries")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-slate-300 mb-1">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>{t("footer_legal_title")}</span>
          </div>
          <p>{t("footer_legal_text")}</p>
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
              {t("footer_privacy")}
            </a>
            <span>•</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-slate-300 transition-colors"
            >
              {t("footer_terms")}
            </a>
            <span>•</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-slate-300 transition-colors"
            >
              {t("footer_disclaimer")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
