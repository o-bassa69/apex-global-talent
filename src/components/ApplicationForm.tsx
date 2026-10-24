"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  User,
  GraduationCap,
  Calendar,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const sriLankaDistricts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle",
];

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    district: "Colombo",
    age: "",
    destination: "japan", // japan | korea
    pathway: "student-visa", // language-course | student-visa | work-ssw-eps | consultation
    educationLevel: "Advanced Level (A/L)",
    languageLevel: "None / Absolute Beginner",
    hasPassport: "Yes",
    targetIntake: "Upcoming 2025 / 2026 Intake",
    notes: "",
    agreedToTerms: true,
  });

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
      if (!formData.phone.trim()) {
        errs.phone = "Active phone/WhatsApp number is required";
      } else if (formData.phone.length < 9) {
        errs.phone = "Please enter a valid phone number";
      }
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Please enter a valid email address";
      }
      if (!formData.age || Number(formData.age) < 16 || Number(formData.age) > 55) {
        errs.age = "Please enter a valid age (16-55)";
      }
    }

    if (step === 4) {
      if (!formData.agreedToTerms) {
        errs.agreedToTerms = "Please accept the verification terms to proceed";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      setSubmitted(true);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Application / Consultation Request - APEX GLOBAL TALENT PVT LTD*
----------------------------------------
*Full Name:* ${formData.fullName}
*Phone / WhatsApp:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*District in Sri Lanka:* ${formData.district}
*Age:* ${formData.age}
*Target Destination:* ${formData.destination === "japan" ? "Japan 🇯🇵" : "South Korea 🇰🇷"}
*Preferred Pathway:* ${formData.pathway}
*Education Level:* ${formData.educationLevel}
*Current Language Level:* ${formData.languageLevel}
*Passport Ready:* ${formData.hasPassport}
*Target Intake:* ${formData.targetIntake}
*Additional Inquiries:* ${formData.notes || "None"}
----------------------------------------
_Sent via Apex Global Talent Official Website_`;
    return encodeURIComponent(text);
  };

  const steps = [
    { number: 1, title: "Personal Details", icon: User },
    { number: 2, title: "Destination & Path", icon: GraduationCap },
    { number: 3, title: "Background", icon: FileText },
    { number: 4, title: "Review & Submit", icon: Calendar },
  ];

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Submission Received Successfully
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Your application details for{" "}
            <strong className="text-white">
              {formData.destination === "japan" ? "Japan 🇯🇵" : "South Korea 🇰🇷"}
            </strong>{" "}
            have been registered with the APEX GLOBAL TALENT counseling desk.
          </p>
        </div>

        {/* WhatsApp Instant Handover Action */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Fast-Track Response via WhatsApp</span>
          </div>
          <p className="text-xs text-slate-400">
            Want an immediate response? Forward your submitted application details directly to our official WhatsApp counselor desk now.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40"
          >
            <span>Open WhatsApp with Application Summary</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Our Colombo advisor will reach out to {formData.phone} shortly.</span>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
          }}
          className="text-xs text-slate-400 hover:text-white underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl">
      {/* Stepper Header */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {steps.map((s) => {
          const Icon = s.icon;
          const isCurrent = currentStep === s.number;
          const isDone = currentStep > s.number;

          return (
            <div
              key={s.number}
              className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all ${
                isCurrent
                  ? "bg-rose-950/50 border-rose-500/80 text-rose-300"
                  : isDone
                  ? "bg-slate-800/80 border-emerald-500/60 text-emerald-400"
                  : "bg-slate-950/50 border-slate-800 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Icon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold hidden sm:inline">
                  Step 0{s.number}
                </span>
              </div>
              <div className="text-[11px] font-medium truncate">{s.title}</div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-rose-400" />
              <span>Personal & Contact Information</span>
            </h4>
            <p className="text-xs text-slate-400">
              Please enter accurate contact details so our admissions counselors can reach you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-medium text-slate-300">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kasun Chamara Perera"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full p-3 rounded-xl bg-slate-950 border text-xs text-slate-100 placeholder-slate-500 focus:outline-none ${
                    errors.fullName ? "border-rose-500" : "border-slate-800 focus:border-rose-500"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-[11px] text-rose-400">{errors.fullName}</span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Phone / WhatsApp Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 077 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full p-3 rounded-xl bg-slate-950 border text-xs text-slate-100 placeholder-slate-500 focus:outline-none ${
                    errors.phone ? "border-rose-500" : "border-slate-800 focus:border-rose-500"
                  }`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-rose-400">{errors.phone}</span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full p-3 rounded-xl bg-slate-950 border text-xs text-slate-100 placeholder-slate-500 focus:outline-none ${
                    errors.email ? "border-rose-500" : "border-slate-800 focus:border-rose-500"
                  }`}
                />
                {errors.email && (
                  <span className="text-[11px] text-rose-400">{errors.email}</span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Your Home District (Sri Lanka)
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  {sriLankaDistricts.map((d) => (
                    <option key={d} value={d}>
                      {d} District
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Age <span className="text-rose-400">*</span>
                </label>
                <input
                  type="number"
                  min="16"
                  max="55"
                  placeholder="e.g. 21"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className={`w-full p-3 rounded-xl bg-slate-950 border text-xs text-slate-100 placeholder-slate-500 focus:outline-none ${
                    errors.age ? "border-rose-500" : "border-slate-800 focus:border-rose-500"
                  }`}
                />
                {errors.age && (
                  <span className="text-[11px] text-rose-400">{errors.age}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Destination & Pathway */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Destination & Preferred Service</span>
            </h4>
            <p className="text-xs text-slate-400">
              Select which country and pathway you are interested in pursuing.
            </p>

            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                Choose Destination Country
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, destination: "japan" })}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                    formData.destination === "japan"
                      ? "bg-rose-950/40 border-rose-500 text-white shadow-lg shadow-rose-950/30"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="text-3xl">🇯🇵</span>
                  <div>
                    <div className="font-bold text-sm text-slate-100">JAPAN</div>
                    <div className="text-[11px] text-slate-400">
                      Language • Studies • SSW Visa
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, destination: "korea" })}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                    formData.destination === "korea"
                      ? "bg-blue-950/40 border-blue-500 text-white shadow-lg shadow-blue-950/30"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="text-3xl">🇰🇷</span>
                  <div>
                    <div className="font-bold text-sm text-slate-100">SOUTH KOREA</div>
                    <div className="text-[11px] text-slate-400">
                      EPS-TOPIK • D-2 Degrees • D-4
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Pathway Selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                Which pathway best fits your goal?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: "student-visa",
                    title: formData.destination === "japan" ? "Japan Student Visa (Ryugaku)" : "Korea University Degree (D-2 / D-4)",
                    desc: "Higher education, language institutes & degree admissions",
                  },
                  {
                    id: "language-course",
                    title: formData.destination === "japan" ? "Japanese Language Classes (N5/N4/N3)" : "Korean Language Classes (EPS / TOPIK)",
                    desc: "Master language with certified instructors in Colombo or online",
                  },
                  {
                    id: "work-ssw-eps",
                    title: formData.destination === "japan" ? "SSW / Work Opportunities" : "EPS-TOPIK E-9 Work Pathway",
                    desc: "Operational employment training & skill test preparation",
                  },
                  {
                    id: "consultation",
                    title: "General Eligibility Consultation",
                    desc: "Speak with a senior counselor to evaluate best options",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, pathway: item.id })}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      formData.pathway === item.id
                        ? "bg-slate-800 border-rose-500 text-white"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-200">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Educational & Language Background */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Background & Language Status</span>
            </h4>
            <p className="text-xs text-slate-400">
              Helps us determine your entry point and specific class batch placement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Highest Educational Qualification
                </label>
                <select
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="Advanced Level (A/L)">G.C.E. Advanced Level (A/L)</option>
                  <option value="Ordinary Level (O/L)">G.C.E. Ordinary Level (O/L)</option>
                  <option value="Vocational Diploma / NVQ">Vocational Diploma / NVQ Certificate</option>
                  <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                  <option value="Postgraduate / Master's">Postgraduate / Master&apos;s</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Current Language Proficiency
                </label>
                <select
                  value={formData.languageLevel}
                  onChange={(e) => setFormData({ ...formData, languageLevel: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="None / Absolute Beginner">None / Absolute Beginner</option>
                  <option value="Studied Basics / Alphabets">Studied Basics / Alphabets (Hiragana/Hangeul)</option>
                  <option value="JLPT N5 or NAT 5Q Passed">JLPT N5 / NAT 5Q Passed (Japan)</option>
                  <option value="JLPT N4 or NAT 4Q Passed">JLPT N4 / NAT 4Q Passed (Japan)</option>
                  <option value="EPS-TOPIK Studied">Studied for EPS-TOPIK (Korea)</option>
                  <option value="TOPIK I/II Certified">TOPIK Certified (Korea)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Do you currently hold a valid Sri Lankan Passport?
                </label>
                <select
                  value={formData.hasPassport}
                  onChange={(e) => setFormData({ ...formData, hasPassport: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="Yes">Yes, valid passport available</option>
                  <option value="In Progress / Applied">Currently applied / in progress</option>
                  <option value="No, need to apply">Not yet applied</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Target Intake or Exam Cycle
                </label>
                <select
                  value={formData.targetIntake}
                  onChange={(e) => setFormData({ ...formData, targetIntake: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="Immediate Upcoming Batch">Immediate upcoming batch / class</option>
                  <option value="Next Japanese Intake (April / October)">Next Japan Intake (April / October)</option>
                  <option value="Next Korean Intake (Spring / Fall)">Next Korea Intake (Spring / Fall)</option>
                  <option value="Upcoming EPS-TOPIK Exam Cycle">Upcoming EPS-TOPIK Government Exam</option>
                  <option value="Flexible / Gathering Information">Flexible / Exploring options</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Review Your Application Summary</span>
            </h4>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>
                  <span className="text-slate-500 block">Applicant Name:</span>
                  <span className="font-semibold text-white">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Phone / WhatsApp:</span>
                  <span className="font-semibold text-white">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Destination:</span>
                  <span className="font-semibold text-rose-400">
                    {formData.destination === "japan" ? "Japan 🇯🇵" : "South Korea 🇰🇷"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Pathway:</span>
                  <span className="font-semibold text-white capitalize">
                    {formData.pathway.replace(/-/g, " ")}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">District:</span>
                  <span className="font-semibold text-white">{formData.district}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Age:</span>
                  <span className="font-semibold text-white">{formData.age} Years</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Questions or specific requirements for our counselor (Optional):
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Interested in tuition fees, class schedules, or specific city in Japan/Korea..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  className="mt-1 rounded border-slate-700 bg-slate-900 text-rose-600 focus:ring-rose-500"
                />
                <span className="text-xs text-slate-400 leading-snug">
                  I confirm that the information provided is accurate. I understand that APEX GLOBAL TALENT PVT LTD provides certified language education and visa consultation, and does not guarantee visa approvals or job appointments.
                </span>
              </label>
              {errors.agreedToTerms && (
                <span className="text-[11px] text-rose-400 block">{errors.agreedToTerms}</span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-all shadow-lg shadow-rose-950/40"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold transition-all shadow-xl shadow-rose-950/50"
            >
              <Send className="w-4 h-4" />
              <span>Submit Application</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
