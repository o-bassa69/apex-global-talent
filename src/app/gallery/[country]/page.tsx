"use client";

import React, { useState, useEffect, useCallback, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Home,
} from "lucide-react";
import { useTranslation, Language } from "@/i18n/LanguageContext";
import galleryData from "@/data/gallery.json";

interface GalleryItem {
  id: string;
  fileName: string;
  image: string;
  country: "JP" | "KR";
  caption: Record<Language, string>;
}

export default function CountryGalleryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const resolvedParams = use(params);
  const countryParam = resolvedParams.country.toLowerCase();
  const isJapan = countryParam === "japan";
  const targetCountryCode = isJapan ? "JP" : "KR";

  const { t, language } = useTranslation();

  const photos = (galleryData as GalleryItem[]).filter(
    (item) => item.country === targetCountryCode
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % photos.length);
  }, [lightboxIndex, photos.length]);

  const handlePrevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      ((prev ?? 0) - 1 + photos.length) % photos.length
    );
  }, [lightboxIndex, photos.length]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleNextLightbox, handlePrevLightbox]);

  // Touch swipe support for lightbox on mobile
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNextLightbox();
    if (distance < -50) handlePrevLightbox();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const pageTitle = isJapan ? t("gallery_japan") : t("gallery_korea");

  return (
    <div className="min-h-screen bg-[#fafbfc] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Back Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs sm:text-sm font-bold shadow-xs transition-all hover:-translate-x-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span>{t("back_home")}</span>
          </Link>

          {/* Quick toggle between Japan & Korea galleries */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            <Link
              href="/gallery/japan"
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isJapan
                  ? "bg-red-600 text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t("gallery_japan")}
            </Link>
            <Link
              href="/gallery/korea"
              className={`px-3 py-1.5 rounded-lg transition-all ${
                !isJapan
                  ? "bg-blue-600 text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t("gallery_korea")}
            </Link>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold border mb-3 ${
              isJapan
                ? "bg-red-50 text-red-700 border-red-200"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{isJapan ? t("jp_title") : t("kr_title")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            {pageTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t("gallery")}
          </p>
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((item, index) => {
            const caption = item.caption[language] || item.caption.en;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Image Container with zoom hover */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                    <span className="text-xs font-semibold">{t("view_all")}</span>
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Caption Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Photo {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 text-center">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>{t("back_home")}</span>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Lightbox Top Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white z-10 py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              {lightboxIndex + 1} / {photos.length}
            </span>

            <button
              type="button"
              onClick={handleCloseLightbox}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Stage */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={photos[lightboxIndex].image}
                alt={
                  photos[lightboxIndex].caption[language] ||
                  photos[lightboxIndex].caption.en
                }
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrevLightbox}
              aria-label="Previous"
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 z-20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNextLightbox}
              aria-label="Next"
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 z-20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div
            className="w-full max-w-3xl text-center py-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm sm:text-base font-bold text-slate-100">
              {photos[lightboxIndex].caption[language] ||
                photos[lightboxIndex].caption.en}
            </p>
            <span className="text-[11px] text-slate-400 mt-1 block">
              {t("lightbox_hint")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
