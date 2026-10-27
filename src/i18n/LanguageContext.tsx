"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import en from "./locales/en.json";
import si from "./locales/si.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";

export type Language = "en" | "si" | "ko" | "ja";

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "si", label: "සිංහල", shortLabel: "සිං" },
  { code: "ko", label: "한국어", shortLabel: "한국어" },
  { code: "ja", label: "日本語", shortLabel: "日本語" },
];

const dictionaries: Record<Language, Record<string, string>> = {
  en,
  si,
  ko,
  ja,
};

function applyDocumentLang(lang: Language) {
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
  isLoaded: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("apex_selected_lang") as Language | null;
      if (saved && (saved === "en" || saved === "si" || saved === "ko" || saved === "ja")) {
        setLanguageState(saved);
        applyDocumentLang(saved);
      }
    } catch {
      // ignore localStorage errors in private mode
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("apex_selected_lang", lang);
      applyDocumentLang(lang);
    } catch {
      // ignore
    }
  };

  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      const currentDict = dictionaries[language];
      if (currentDict && key in currentDict) {
        return currentDict[key];
      }
      // Fallback to English if key missing in target language
      if (dictionaries.en && key in dictionaries.en) {
        return dictionaries.en[key];
      }
      return fallback || key;
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
