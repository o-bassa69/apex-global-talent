"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera, ArrowRight } from "lucide-react";
import { useTranslation, Language } from "@/i18n/LanguageContext";
import galleryData from "@/data/gallery.json";

export const SLIDE_INTERVAL = 30000;

export interface GalleryItem {
  id: string;
  fileName: string;
  image: string;
  country: "JP" | "KR";
  caption: Record<Language, string>;
}

function CountrySlideshow({
  photos,
  countryLabel,
  viewAllHref,
  viewAllLabel,
}: {
  photos: GalleryItem[];
  countryLabel: string;
  viewAllHref: string;
  viewAllLabel: string;
}) {
  const { t, language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isPaused && photos.length > 0) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, SLIDE_INTERVAL);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex, handleNext, photos.length]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentPhoto = photos[currentIndex];
  const activeCaption =
    currentPhoto?.caption[language] || currentPhoto?.caption.en || "";

  return (
    <div className="flex flex-col">
      <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4 text-center">
        {countryLabel}
      </h3>
      <div
        className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {currentPhoto && (
              <motion.div
                key={currentPhoto.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentPhoto.image}
                  alt={activeCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <span className="px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 text-[11px] font-semibold text-slate-300 backdrop-blur-md">
              {photos.length ? `${currentIndex + 1} / ${photos.length}` : "0 / 0"}
            </span>
            {isPaused && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30 backdrop-blur-md">
                {t("gallery_paused")}
              </span>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <p className="text-sm sm:text-base font-bold text-white drop-shadow-md leading-snug">
              {activeCaption}
            </p>
          </div>
        </div>

        <div className="bg-slate-950/90 py-3 px-6 flex items-center justify-center gap-2 border-t border-slate-800">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 hover:border-slate-600 shadow-md transition-all hover:-translate-y-0.5"
        >
          <span>{viewAllLabel}</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </Link>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const { t } = useTranslation();

  const japanPhotos = (galleryData as GalleryItem[])
    .filter((item) => item.country === "JP")
    .slice(0, 5);

  const koreaPhotos = (galleryData as GalleryItem[])
    .filter((item) => item.country === "KR")
    .slice(0, 5);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-semibold mb-3 border border-slate-700">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>{t("gallery")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t("gallery")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CountrySlideshow
            photos={japanPhotos}
            countryLabel={t("gallery_japan")}
            viewAllHref="/gallery/japan"
            viewAllLabel={t("view_all")}
          />
          <CountrySlideshow
            photos={koreaPhotos}
            countryLabel={t("gallery_korea")}
            viewAllHref="/gallery/korea"
            viewAllLabel={t("view_all")}
          />
        </div>
      </div>
    </section>
  );
}
