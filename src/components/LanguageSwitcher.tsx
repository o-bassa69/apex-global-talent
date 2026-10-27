"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, Language, useTranslation } from "@/i18n/LanguageContext";
import { useDismiss } from "@/hooks/useDismiss";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(containerRef, open, close);

  const current =
    LANGUAGES.find((option) => option.code === language) ?? LANGUAGES[0];

  const focusItem = useCallback((index: number) => {
    const total = LANGUAGES.length;
    itemRefs.current[(index + total) % total]?.focus();
  }, []);

  // Move focus into the menu when it opens, starting on the active language.
  useEffect(() => {
    if (!open) return;
    const activeIndex = LANGUAGES.findIndex((option) => option.code === language);
    focusItem(activeIndex < 0 ? 0 : activeIndex);
  }, [open, language, focusItem]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = itemRefs.current.findIndex(
      (item) => item === document.activeElement
    );

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusItem(currentIndex + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusItem(currentIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusItem(0);
        break;
      case "End":
        event.preventDefault();
        focusItem(LANGUAGES.length - 1);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Change language — current: ${current.label}`}
        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-2xs transition-colors hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 sm:gap-2 sm:px-2.5 sm:text-xs"
      >
        <Globe className="h-3.5 w-3.5 shrink-0 text-slate-500 sm:h-4 sm:w-4" />
        <span className="whitespace-nowrap">{current.shortLabel}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Select language"
          onKeyDown={handleMenuKeyDown}
          className="absolute right-0 z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl shadow-slate-900/10 animate-fade-in"
        >
          {LANGUAGES.map((option, index) => {
            const isActive = option.code === language;
            return (
              <button
                key={option.code}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                tabIndex={-1}
                onClick={() => selectLanguage(option.code)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="flex flex-col">
                  <span className="text-xs font-semibold leading-tight">
                    {option.label}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider ${
                      isActive ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    {option.code}
                  </span>
                </span>
                {isActive && (
                  <Check className="h-3.5 w-3.5 shrink-0 text-amber-300" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
