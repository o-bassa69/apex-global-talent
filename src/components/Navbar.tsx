"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import { useTranslation } from "@/i18n/LanguageContext";
import { useDismiss } from "@/hooks/useDismiss";

interface NavLink {
  labelKey: string;
  href: string;
  id: string;
}

/** Links that always fit in the desktop bar, even in Sinhala. */
const PRIMARY_LINKS: NavLink[] = [
  { labelKey: "nav_about", href: "#who-we-are", id: "who-we-are" },
  { labelKey: "nav_services", href: "#services", id: "services" },
  { labelKey: "nav_courses", href: "#courses", id: "courses" },
  { labelKey: "nav_visa", href: "#visa-process", id: "visa-process" },
  { labelKey: "nav_contact", href: "#contact", id: "contact" },
];

/** Links that live behind the "More" menu on desktop. */
const SECONDARY_LINKS: NavLink[] = [
  { labelKey: "nav_pillars", href: "#pillars", id: "pillars" },
  { labelKey: "nav_partners", href: "#partners", id: "partners" },
  { labelKey: "nav_gallery", href: "#gallery", id: "gallery" },
  { labelKey: "nav_team", href: "#team", id: "team" },
  { labelKey: "nav_faq", href: "#faq", id: "faq" },
];

/** Full list in document order, used by the mobile drawer and the section spy. */
const ALL_LINKS: NavLink[] = [
  { labelKey: "nav_home", href: "#hero", id: "hero" },
  { labelKey: "nav_about", href: "#who-we-are", id: "who-we-are" },
  { labelKey: "nav_pillars", href: "#pillars", id: "pillars" },
  { labelKey: "nav_partners", href: "#partners", id: "partners" },
  { labelKey: "nav_services", href: "#services", id: "services" },
  { labelKey: "nav_gallery", href: "#gallery", id: "gallery" },
  { labelKey: "nav_team", href: "#team", id: "team" },
  { labelKey: "nav_courses", href: "#courses", id: "courses" },
  { labelKey: "nav_visa", href: "#visa-process", id: "visa-process" },
  { labelKey: "nav_faq", href: "#faq", id: "faq" },
  { labelKey: "nav_contact", href: "#contact", id: "contact" },
];

const SECTION_IDS = ALL_LINKS.map((link) => link.id);
const DESKTOP_BREAKPOINT = 1280; // Tailwind `xl`

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [drawerMaxHeight, setDrawerMaxHeight] = useState("70dvh");

  const utilityRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const closeMore = useCallback(() => setMoreOpen(false), []);
  useDismiss(moreRef, moreOpen, closeMore);

  // Height of the sticky part of the header (utility bar + nav row), excluding the drawer.
  const getStickyHeight = useCallback(() => {
    const utility = utilityRef.current?.getBoundingClientRect().height ?? 0;
    const row = rowRef.current?.getBoundingClientRect().height ?? 0;
    return utility + row || 96;
  }, []);

  // Scroll state + section spy (rAF throttled)
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      const probe = window.scrollY + getStickyHeight() + 24;
      let current: string | null = null;

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.offsetTop;
        if (probe >= top && probe < top + element.offsetHeight) {
          current = id;
          break;
        }
      }

      // Keep the last match when scrolled past the final section.
      if (current) setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [getStickyHeight]);

  // Lock page scroll while the drawer is open, close on Escape, close at desktop width.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("nav-open");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setMobileMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  // Size the drawer so it always ends above the bottom of the viewport.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const measure = () => {
      setDrawerMaxHeight(
        `${Math.max(200, window.innerHeight - getStickyHeight() - 12)}px`
      );
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [mobileMenuOpen, getStickyHeight]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      setMobileMenuOpen(false);
      setMoreOpen(false);

      // On /gallery/* pages the sections do not exist — go home instead.
      if (!targetElement) {
        event.preventDefault();
        router.push(`/${href}`);
        return;
      }

      event.preventDefault();
      const navOffset = getStickyHeight() + 8;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [router, getStickyHeight]
  );

  const isSecondaryActive = SECONDARY_LINKS.some(
    (link) => link.id === activeSection
  );

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div>
        {/* Top utility bar */}
        <div ref={utilityRef} className="bg-slate-900 text-slate-300">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4 text-[11px] sm:px-6 sm:text-xs lg:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-5">
              <span className="flex min-w-0 items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span className="truncate font-medium text-slate-200">
                  469, Athurugiriya Road, Malabe
                </span>
              </span>
              <a
                href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
                className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white sm:inline-flex"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>{siteConfig.contact.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.emailPrimary}`}
                className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white lg:inline-flex"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>{siteConfig.contact.emailPrimary}</span>
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-700/60 bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-amber-300 lg:inline-flex">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>{t("nav_admissions_open")}</span>
              </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:hidden" />
                <span className="hidden sm:inline">{t("nav_whatsapp_us")}</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <nav
          aria-label="Main navigation"
          className={`w-full border-b bg-white/95 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? "border-slate-200 shadow-sm"
              : "border-slate-100 shadow-none"
          }`}
        >
          <div
            ref={rowRef}
            className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8"
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(event) => handleNavClick(event, "#hero")}
              className="flex shrink-0 items-center gap-2 py-2.5 group sm:gap-3 sm:py-3"
            >
              <Logo
                variant="color"
                className="h-9 w-9 transition-transform group-hover:scale-105 sm:h-10 sm:w-10"
              />
              <span className="flex min-w-0 flex-col">
                <span className="flex items-center gap-1.5">
                  <span className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                    APEX
                  </span>
                  <span className="hidden whitespace-nowrap rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 sm:inline-block sm:text-[11px]">
                  GLOBAL TALENT
                  </span>
                </span>
                <span className="text-[9px] font-bold uppercase leading-tight tracking-[0.16em] text-amber-700 sm:hidden">
                  Global Talent
                </span>
                <span className="hidden text-[11px] font-medium text-slate-500 md:block">
                  Language Institute &amp; Visa Advisory
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
              {PRIMARY_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors 2xl:px-3 2xl:text-[13.5px] ${
                      isActive
                        ? "bg-blue-50 font-semibold text-blue-700"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                    }`}
                  >
                    {t(link.labelKey)}
                  </a>
                );
              })}

              {/* More menu */}
              <div ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((value) => !value)}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                  className={`inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors 2xl:px-3 2xl:text-[13.5px] ${
                    isSecondaryActive
                      ? "bg-blue-50 font-semibold text-blue-700"
                      : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                  }`}
                >
                  <span>{t("nav_more")}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {moreOpen && (
                  <div
                    role="menu"
                    aria-label={t("nav_more")}
                    className="absolute left-1/2 top-full z-50 mt-2 w-48 -translate-x-1/2 origin-top overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl shadow-slate-900/10 animate-fade-in"
                  >
                    {SECONDARY_LINKS.map((link) => {
                      const isActive = activeSection === link.id;
                      return (
                        <a
                          key={link.id}
                          href={link.href}
                          role="menuitem"
                          onClick={(event) => handleNavClick(event, link.href)}
                          aria-current={isActive ? "true" : undefined}
                          className={`block whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {t(link.labelKey)}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex shrink-0 items-center gap-1.5 py-2 sm:gap-2 sm:py-2.5">
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="hidden whitespace-nowrap rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 2xl:inline-flex"
              >
                {t("nav_free_consult")}
              </a>
              <a
                href="#courses"
                onClick={(event) => handleNavClick(event, "#courses")}
                className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-slate-800 hover:shadow xl:inline-flex 2xl:px-4"
              >
                <span>{t("nav_enroll")}</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="rounded-lg border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 xl:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-slate-900" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile / tablet drawer */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-slate-200 bg-white xl:hidden"
            >
              <div
                style={{ maxHeight: drawerMaxHeight }}
                className="overflow-y-auto overscroll-contain px-4 pb-6 pt-3 sm:px-6 animate-drawer-in"
              >
                <div className="grid grid-cols-1 gap-1 min-[420px]:grid-cols-2 md:grid-cols-3">
                  {ALL_LINKS.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(event) => handleNavClick(event, link.href)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="truncate">{t(link.labelKey)}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                  <a
                    href="#courses"
                    onClick={(event) => handleNavClick(event, "#courses")}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
                  >
                    <span>{t("nav_enroll_course")}</span>
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                  </a>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <a
                      href="#contact"
                      onClick={(event) => handleNavClick(event, "#contact")}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      <span>{t("nav_free_consult")}</span>
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t("nav_whatsapp_consult")}</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 rounded-lg border border-slate-200/80 bg-slate-50 p-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <span>469, Athurugiriya Road, Malabe</span>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
                    className="flex items-center gap-1.5 hover:text-slate-900"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <span>{siteConfig.contact.phonePrimary}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.emailPrimary}`}
                    className="flex items-center gap-1.5 break-all hover:text-slate-900"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <span>{siteConfig.contact.emailPrimary}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
