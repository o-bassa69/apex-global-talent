"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = [
        "hero",
        "courses",
        "visa-process",
        "services",
        "why-us",
        "testimonials",
        "faq",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Courses", href: "#courses", id: "courses" },
    { label: "Visa Process", href: "#visa-process", id: "visa-process" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Why Us", href: "#why-us", id: "why-us" },
    { label: "Stories", href: "#testimonials", id: "testimonials" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar - Clean, never wrapping */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Office Address and Contact */}
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-slate-200 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium truncate">469, Athurugiriya Road, Malabe</span>
            </span>
            <a
              href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.emailPrimary}`}
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{siteConfig.contact.emailPrimary}</span>
            </a>
          </div>

          {/* Right: Enrolling Announcement & WhatsApp */}
          <div className="flex items-center gap-3.5 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 text-[11px] font-medium border border-slate-700/60">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>JLPT &amp; EPS-TOPIK Admissions Open</span>
            </span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors text-xs"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          scrolled
            ? "shadow-sm border-b border-slate-200 py-2.5 sm:py-3"
            : "border-b border-slate-100 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  APEX
                </span>
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                  Global Talent
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-normal hidden md:block">
                Language Institute &amp; Visa Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Spacious and clean on desktop) */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-[13.5px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Header Action Buttons */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden 2xl:inline-flex text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              Free Consultation
            </a>
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, "#courses")}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Mobile & Tablet Header Controls (Clean & uncluttered) */}
          <div className="flex xl:hidden items-center gap-2.5">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Quick Action Buttons in Drawer */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#courses"
                onClick={(e) => handleNavClick(e, "#courses")}
                className="w-full text-center py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Free Consultation</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            {/* Branch Details Card */}
            <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>469, Athurugiriya Road, Malabe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{siteConfig.contact.phonePrimary}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
