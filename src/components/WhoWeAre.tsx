"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

type Brand = "japan" | "korea";

const TRIGRAMS: Array<{
  x: number;
  y: number;
  rotate: number;
  pattern: [boolean, boolean, boolean];
}> = [
  { x: 6.3, y: 6.3, rotate: -56, pattern: [true, true, true] },
  { x: 17.7, y: 6.3, rotate: 56, pattern: [false, true, false] },
  { x: 6.3, y: 17.7, rotate: 56, pattern: [true, false, true] },
  { x: 17.7, y: 17.7, rotate: -56, pattern: [false, false, false] },
];

/** Inline flag artwork so the cards never depend on an external image. */
function Flag({ country, label }: { country: "jp" | "kr"; label: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-xs ring-1 ring-slate-200/90">
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={label}
        className="h-full w-full"
      >
        {country === "jp" ? (
          <>
            <rect width="24" height="24" fill="#ffffff" />
            <circle cx="12" cy="12" r="6" fill="#bc002d" />
          </>
        ) : (
          <>
            <rect width="24" height="24" fill="#ffffff" />
            <g transform="rotate(-16 12 12)">
              <path
                d="M12 6.2A5.8 5.8 0 0 1 12 17.8 2.9 2.9 0 0 1 12 12 2.9 2.9 0 0 0 12 6.2Z"
                fill="#cd2e3a"
              />
              <path
                d="M12 6.2A5.8 5.8 0 0 0 12 17.8 2.9 2.9 0 0 0 12 12 2.9 2.9 0 0 1 12 6.2Z"
                fill="#0047a0"
              />
            </g>
            <g stroke="#0f172a" strokeWidth="0.85" strokeLinecap="round">
              {TRIGRAMS.map((trigram) => (
                <g
                  key={`${trigram.x}-${trigram.y}`}
                  transform={`translate(${trigram.x} ${trigram.y}) rotate(${trigram.rotate})`}
                >
                  {trigram.pattern.map((solid, index) => {
                    const y = (index - 1) * 1.4;
                    return solid ? (
                      <line key={index} x1="-2.2" y1={y} x2="2.2" y2={y} />
                    ) : (
                      <React.Fragment key={index}>
                        <line x1="-2.2" y1={y} x2="-0.35" y2={y} />
                        <line x1="0.35" y1={y} x2="2.2" y2={y} />
                      </React.Fragment>
                    );
                  })}
                </g>
              ))}
            </g>
          </>
        )}
      </svg>
    </span>
  );
}

/** Renders `**highlight**` segments from the i18n copy in the brand accent. */
function renderEmphasis(text: string) {
  return text.split("**").map((chunk, index) =>
    index % 2 === 1 ? (
      <strong
        key={index}
        className="font-semibold text-amber-700"
      >
        {chunk}
      </strong>
    ) : (
      <React.Fragment key={index}>{chunk}</React.Fragment>
    ),
  );
}

function scrollToBrandTab(brand: Brand) {
  window.dispatchEvent(
    new CustomEvent<Brand>("apex:select-service", { detail: brand }),
  );

  const services = document.getElementById("services");
  if (!services) return;

  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 80;
  const top =
    services.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
}

export default function WhoWeAre() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const brands: Array<{
    id: Brand;
    titleKey: "jp_title" | "kr_title";
    flagKey: "flag_jp" | "flag_kr";
    border: string;
    badge: string;
  }> = [
    {
      id: "japan",
      titleKey: "jp_title",
      flagKey: "flag_jp",
      border: "border-l-red-500",
      badge: "bg-red-50",
    },
    {
      id: "korea",
      titleKey: "kr_title",
      flagKey: "flag_kr",
      border: "border-l-blue-600",
      badge: "bg-blue-50",
    },
  ];

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      aria-labelledby="who-we-are-title"
      className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-white to-blue-50/80 py-20 sm:py-24"
    >
      {/* Subtle dot pattern + soft colour washes */}
      <div
        aria-hidden="true"
        className="bg-dots-subtle pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:px-8">
        {/* LEFT: eyebrow, title, brand cards */}
        <div>
          <div className="reveal" data-reveal>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                {t("who_eyebrow")}
              </span>
            </div>

            <h2
              id="who-we-are-title"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]"
            >
              {t("who_title")}
            </h2>
            <span
              aria-hidden="true"
              className="mt-5 block h-1.5 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className="reveal"
                data-reveal
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => scrollToBrandTab(brand.id)}
                  className={`group flex w-full items-center gap-3 rounded-2xl border border-l-4 border-slate-200/80 ${brand.border} bg-white p-3.5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:border-l-4 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none sm:p-4`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${brand.badge}`}
                  >
                    <Flag
                      country={brand.id === "japan" ? "jp" : "kr"}
                      label={t(brand.flagKey)}
                    />
                  </span>
                  <span className="min-w-0 text-sm font-bold leading-snug tracking-wide text-slate-900 sm:text-[15px]">
                    {t(brand.titleKey)}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: intro paragraphs with accent rail */}
        <div
          className="reveal relative lg:pt-1"
          data-reveal
          style={{ transitionDelay: "300ms" }}
        >
          <span
            aria-hidden="true"
            className="absolute bottom-1 left-0 top-1 w-1 rounded-full bg-gradient-to-b from-amber-400 via-amber-500 to-blue-500"
          />
          <div className="space-y-6 pl-5 sm:pl-6">
            <p className="break-words text-base font-medium leading-[1.8] text-slate-800 sm:text-[1.15rem]">
              {t("who_1")}
            </p>
            <p className="break-words text-base leading-[1.8] text-slate-600 sm:text-lg">
              {renderEmphasis(t("who_2"))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
