"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Handshake,
  Network,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import partnersData from "@/data/partners.json";

type Country = "JP" | "KR";

const TRIGRAMS: Array<{
  x: number;
  y: number;
  rotate: number;
  pattern: [boolean, boolean, boolean];
}> = [
  { x: 5.8, y: 4.3, rotate: -45, pattern: [true, true, true] },
  { x: 24.2, y: 4.3, rotate: 45, pattern: [false, true, false] },
  { x: 5.8, y: 15.7, rotate: 45, pattern: [true, false, true] },
  { x: 24.2, y: 15.7, rotate: -45, pattern: [false, false, false] },
];

const COUNTRY_STYLES: Record<
  Country,
  {
    labelKey: "country_japan" | "country_korea";
    flagLabelKey: "flag_jp" | "flag_kr";
    networkKey: "partners_network_jp" | "partners_network_kr";
    chip: string;
    accent: string;
    flagRing: string;
  }
> = {
  JP: {
    labelKey: "country_japan",
    flagLabelKey: "flag_jp",
    networkKey: "partners_network_jp",
    chip: "border-red-200/80 bg-red-50/80 text-red-700",
    accent: "from-red-500 via-rose-500 to-red-400",
    flagRing: "ring-red-100",
  },
  KR: {
    labelKey: "country_korea",
    flagLabelKey: "flag_kr",
    networkKey: "partners_network_kr",
    chip: "border-blue-200/80 bg-blue-50/80 text-blue-700",
    accent: "from-blue-600 via-indigo-500 to-blue-400",
    flagRing: "ring-blue-100",
  },
};

/** Inline flags (3:2) so the cards never depend on an external image. */
function CountryFlag({
  country,
  label,
  className = "h-4 w-6",
}: {
  country: Country;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-white shadow-2xs ${className}`}
    >
      <svg
        viewBox="0 0 30 20"
        role="img"
        aria-label={label}
        className="h-full w-full"
      >
        {country === "JP" ? (
          <>
            <rect width="30" height="20" fill="#ffffff" />
            <circle cx="15" cy="10" r="6" fill="#bc002d" />
          </>
        ) : (
          <>
            <rect width="30" height="20" fill="#ffffff" />
            <g transform="rotate(-18 15 10)">
              <circle cx="15" cy="10" r="4.8" fill="#0047a0" />
              <path
                d="M15 5.2a4.8 4.8 0 0 1 0 9.6 2.4 2.4 0 0 1 0-4.8 2.4 2.4 0 0 0 0-4.8Z"
                fill="#cd2e3a"
              />
            </g>
            <g
              stroke="#0f172a"
              strokeWidth="0.55"
              strokeLinecap="round"
              fill="none"
            >
              {TRIGRAMS.map((trigram) => (
                <g
                  key={`${trigram.x}-${trigram.y}`}
                  transform={`translate(${trigram.x} ${trigram.y}) rotate(${trigram.rotate})`}
                >
                  {trigram.pattern.map((solid, index) => {
                    const y = (index - 1) * 1.15;
                    return solid ? (
                      <line key={index} x1="-2.1" y1={y} x2="2.1" y2={y} />
                    ) : (
                      <React.Fragment key={index}>
                        <line x1="-2.1" y1={y} x2="-0.4" y2={y} />
                        <line x1="0.4" y1={y} x2="2.1" y2={y} />
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

/** Drops the leading "APEX JAPAN:" / "APEX KOREA:" label from the banner copy. */
function stripBrandPrefix(text: string) {
  return text.replace(/^APEX\s*(JAPAN|KOREA)\s*[:：]\s*/i, "");
}

export default function PartnersDirect() {
  const { t } = useTranslation();

  const officialPartners = partnersData.filter(
    (partner) => partner.status === "active",
  );
  const upcomingPartners = partnersData.filter(
    (partner) => partner.status !== "active",
  );

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative overflow-hidden border-b border-slate-100 bg-[#fafbfc] py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="bg-dots-subtle pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header: eyebrow + title on the left, supporting copy on the right */}
        <div className="mb-12 grid gap-6 sm:mb-14 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-[3px] w-8 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              />
              <span className="text-xs font-bold uppercase leading-relaxed tracking-[0.16em] text-amber-700">
                <Handshake
                  aria-hidden="true"
                  className="mr-1.5 inline h-3.5 w-3.5 align-[-2px] text-amber-600"
                />
                {t("direct_title")}
              </span>
            </div>
            <h2
              id="partners-title"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]"
            >
              {t("partners")}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-[1.8] text-slate-600 lg:justify-self-end">
            {t("partners_desc")}
          </p>
        </div>

        {/* Official partner cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {officialPartners.map((partner, index) => {
            const country = partner.country as Country;
            const style = COUNTRY_STYLES[country];
            const description = stripBrandPrefix(
              t(country === "JP" ? "jp_banner" : "kr_banner"),
            );

            return (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.accent}`}
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${style.chip}`}
                  >
                    <CountryFlag
                      country={country}
                      label={t(style.flagLabelKey)}
                      className={`h-6 w-9 rounded-[3px] ring-1 ${style.flagRing}`}
                    />
                    {t(style.labelKey)}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">
                    <BadgeCheck className="h-3.5 w-3.5 text-amber-600" />
                    {t("partners_official")}
                  </span>
                </div>

                {/* Official logo, kept above the website link. `fill` + `object-contain`
                    lets both the ultra-wide Fukuoka mark (~6:1) and KIIAC (~3:1) fit. */}
                <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 420px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl md:min-h-14">
                  {partner.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                  {description}
                </p>

                {partner.website ? (
                  <div className="mt-auto pt-6">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-amber-300 hover:bg-amber-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      <span className="inline-flex min-w-0 items-center gap-2">
                        <Globe2 className="h-4 w-4 shrink-0 text-slate-500" />
                        <span className="truncate">
                          {partner.website
                            .replace(/^https?:\/\//, "")
                            .replace(/\/$/, "")}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-amber-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>

        {/* Growing network: upcoming partner pathways */}
        {upcomingPartners.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 rounded-3xl border border-slate-200/90 bg-white/80 p-5 shadow-xs backdrop-blur-sm sm:p-7"
          >
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-200/70 bg-amber-50 text-amber-600">
                <Network className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {t("partners_network_title")}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {t("partners_network_desc")}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {upcomingPartners.map((partner) => {
                const country = partner.country as Country;
                const style = COUNTRY_STYLES[country];

                return (
                  <div
                    key={partner.id}
                    className="flex items-start gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-4 transition-colors hover:border-amber-300 hover:bg-amber-50/40"
                  >
                    <CountryFlag
                      country={country}
                      label={t(style.flagLabelKey)}
                      className={`mt-0.5 h-6 w-9 rounded-[3px] ring-1 ${style.flagRing}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                        <p className="text-sm font-semibold leading-snug text-slate-900">
                          {partner.name}
                        </p>
                        <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                          {t("partners_soon")}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
                        {t(style.networkKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
