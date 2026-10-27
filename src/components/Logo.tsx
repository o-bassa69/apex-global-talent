"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

type LogoVariant = "color" | "white";

interface LogoProps {
  /** `color` for light backgrounds, `white` for dark/navy backgrounds. */
  variant?: LogoVariant;
  /** Sizing classes, e.g. `h-10 w-10`. */
  className?: string;
  alt?: string;
}

/**
 * Brand logo.
 *
 * Upload the PNG to either location (first match wins):
 *   - public/assets/logo.png              (colour version, light backgrounds)
 *   - public/assets/apex global talent.png
 * and for dark backgrounds:
 *   - public/assets/logo-white.png        (white / mono version)
 *   - public/assets/apex global talent white.png
 *
 * Until a file exists the component shows the placeholder mark, so the site
 * never renders a broken image.
 */
const SOURCES: Record<LogoVariant, string[]> = {
  color: ["/assets/logo.png", "/assets/apex global talent.png"],
  white: [
    "/assets/logo-white.png",
    "/assets/apex global talent white.png",
    "/assets/logo.png",
    "/assets/apex global talent.png",
  ],
};

/** Existing bundled mark, shown while the probe runs on dark backgrounds. */
const WHITE_PLACEHOLDER = "/assets/logo-white.svg";

export default function Logo({
  variant = "color",
  className = "h-10 w-10",
  alt = "APEX Global Talent",
}: LogoProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const candidates = SOURCES[variant];

    const tryNext = (index: number) => {
      if (cancelled || index >= candidates.length) return;

      const image = new Image();
      image.onload = () => {
        if (!cancelled) setSrc(candidates[index]);
      };
      image.onerror = () => tryNext(index + 1);
      image.src = candidates[index];
    };

    tryNext(0);
    return () => {
      cancelled = true;
    };
  }, [variant]);

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`${className} shrink-0 select-none object-contain`}
      />
    );
  }

  // Bundled white mark, used until a white logo PNG is uploaded.
  if (variant === "white") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={WHITE_PLACEHOLDER}
        alt={alt}
        draggable={false}
        className={`${className} shrink-0 select-none object-contain`}
      />
    );
  }

  // Placeholder mark shown until a colour logo PNG is uploaded.
  return (
    <span
      className={`${className} flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 shadow-md shadow-slate-900/10`}
      aria-label={alt}
      role="img"
    >
      <GraduationCap className="h-1/2 w-1/2 text-amber-400" />
    </span>
  );
}
