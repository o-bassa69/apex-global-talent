"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { Globe, ChevronDown, ChevronUp, Check } from "lucide-react";

export interface LanguageOption {
  code: string;
  label: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "si", label: "Sinhala", nativeName: "සිංහල" },
  { code: "ko", label: "Korean", nativeName: "한국어" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
];

function detectInitialLanguage(): string {
  if (typeof window === "undefined") return "en";
  try {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    if (match) {
      const val = decodeURIComponent(match[1]);
      const lang = val.split("/").filter(Boolean).pop();
      if (lang && LANGUAGES.some((l) => l.code === lang)) {
        return lang;
      }
    }

    const saved = localStorage.getItem("apex_selected_lang");
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
  } catch {
    // ignore
  }
  return "en";
}

function subscribeToLanguage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getLanguageSnapshot(): string {
  return detectInitialLanguage();
}

function getLanguageServerSnapshot(): string {
  return "en";
}

function applyLanguageCookie(langCode: string) {
  if (typeof window === "undefined") return;

  const hostname = window.location.hostname;
  const cookieVal = `/en/${langCode}`;

  if (langCode === "en") {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
    if (!hostname.includes("localhost") && hostname.includes(".")) {
      const parts = hostname.split(".");
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${parts.slice(-2).join(".")};`;
    }
    document.cookie = "googtrans=/en/en; path=/;";
  } else {
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${hostname};`;
    if (!hostname.includes("localhost") && hostname.includes(".")) {
      const parts = hostname.split(".");
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${parts.slice(-2).join(".")};`;
    }
  }

  // Trigger Google Translate select element if present
  const select = document.querySelector(
    ".goog-te-combo"
  ) as HTMLSelectElement | null;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  } else {
    window.location.reload();
  }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [manualLang, setManualLang] = useState<string | null>(null);
  const externalLang = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  const currentLang = manualLang ?? externalLang;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectLanguage = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    setManualLang(langCode);
    setIsOpen(false);
    localStorage.setItem("apex_selected_lang", langCode);
    applyLanguageCookie(langCode);
  };

  const currentOption =
    LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button - styled exactly to match user's reference */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500/20"
      >
        {/* Globe icon with bright lime-green outline matching screenshot */}
        <Globe
          className="w-4 h-4 text-[#8ec83c] stroke-[2.2] flex-shrink-0"
          aria-hidden="true"
        />
        <span className="leading-none text-slate-800 font-medium">
          {currentOption.nativeName}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-slate-700 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-700 flex-shrink-0" />
        )}
      </button>

      {/* Dropdown Menu with exact colors and active lime highlight */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 sm:left-0 sm:right-auto mt-1.5 w-44 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in duration-100"
        >
          <div className="flex flex-col py-0.5">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 text-[15px] font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#edf8d6] text-slate-900 font-semibold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#65a30d]" strokeWidth={2.5} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
