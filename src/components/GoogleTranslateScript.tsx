"use client";

import React, { useEffect } from "react";
import Script from "next/script";

interface GoogleTranslateElementOptions {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
  layout?: unknown;
}

interface GoogleTranslateNamespace {
  TranslateElement: {
    new (options: GoogleTranslateElementOptions, elementId: string): unknown;
    InlineLayout?: {
      SIMPLE?: unknown;
    };
  };
}

declare global {
  interface Window {
    google?: {
      translate?: GoogleTranslateNamespace;
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,si,ko,ja",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        style={{ display: "none" }}
        aria-hidden="true"
        className="notranslate"
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
