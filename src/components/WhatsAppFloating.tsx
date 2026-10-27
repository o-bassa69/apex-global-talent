"use client";

import React, { useState } from "react";
import { MessageSquare, X, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="apex-wa-fab fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Consultation Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                WA
              </div>
              <div>
                <h5 className="font-bold text-xs text-slate-900">Apex Global Talent</h5>
                <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Counseling Desk Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 leading-relaxed">
            👋 Need quick advice on <strong>Japanese</strong> (JLPT/SSW) or <strong>Korean</strong> (EPS/TOPIK) language classes, intake schedules, or student visa requirements? Chat with our Colombo advisors directly.
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Open WhatsApp Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Official APEX GLOBAL TALENT Line</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white" />
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
}
