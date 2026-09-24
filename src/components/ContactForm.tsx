"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Japan Education & Visa",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  const whatsappMsg = `*General Inquiry - APEX GLOBAL TALENT PVT LTD*
------------------------------------
*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || "N/A"}
*Inquiry Area:* ${form.subject}
*Message:* ${form.message || "I would like more information."}
------------------------------------`;

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-lg text-white">Message Received</h4>
        <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="text-white font-semibold">{form.name}</span>. Our student advisory desk will contact you via {form.phone} during regular office hours.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open in WhatsApp</span>
          </a>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-2"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-300">
          Your Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Supun Wickramasinghe"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300">
            Phone / WhatsApp <span className="text-rose-400">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. 077 123 4567"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g. yourname@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-300">
          Inquiry Subject
        </label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
        >
          <option value="Japan Education & Visa">Japan Education & Visa Services</option>
          <option value="Korea Education & Visa">Korea Education & Visa Services</option>
          <option value="Japanese Language Classes">Japanese Language Classes (JLPT / NAT)</option>
          <option value="Korean Language Classes">Korean Language Classes (EPS / TOPIK)</option>
          <option value="SSW Specified Skilled Worker">Japan SSW Specified Skilled Worker</option>
          <option value="EPS-TOPIK E-9 Korea">Korea EPS-TOPIK E-9 Employment</option>
          <option value="Document Attestation / Advisory">Document Attestation & Advisory</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-300">
          Your Message / Inquiries
        </label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your background, educational qualifications, or specific questions..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Send Inquiry to Apex Global Talent</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
        <span>Strict confidentiality guaranteed. No data shared with third parties.</span>
      </div>
    </form>
  );
}
