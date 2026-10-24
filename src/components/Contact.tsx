"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "Japan",
    course: "Japanese JLPT N5 Foundation",
    education: "G.C.E. Advanced Level (A/L)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Apex Global Talent,%0A%0AMy Name: ${encodeURIComponent(formData.fullName || "Prospective Student")}%0APhone: ${encodeURIComponent(formData.phone || "Not provided")}%0ADestination: ${encodeURIComponent(formData.destination)}%0AInterested In: ${encodeURIComponent(formData.course)}%0AEducation: ${encodeURIComponent(formData.education)}%0AInquiry: ${encodeURIComponent(formData.message || "I would like to get consultation.")}`;
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>START YOUR JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book a Free Consultation or Enroll
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Visit our Malabe center (469, Athurugiriya Road, Malabe) or get personalized guidance over phone and WhatsApp.
            Our educational advisors will assess your eligibility without obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards, Hours & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Apex Global Talent Pvt Ltd
              </h3>

              {/* Contact Info Pills */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Center Location
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      {siteConfig.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone &amp; Hotline
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 flex flex-wrap gap-x-4">
                      <a
                        href={`tel:${siteConfig.contact.phonePrimary.replace(/\s+/g, "")}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {siteConfig.contact.phonePrimary}
                      </a>
                      <a
                        href={`tel:${siteConfig.contact.phoneSecondary.replace(/\s+/g, "")}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {siteConfig.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Inquiries
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      <a
                        href={`mailto:${siteConfig.contact.emailPrimary}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {siteConfig.contact.emailPrimary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Office Hours
                    </div>
                    <div className="font-semibold text-slate-800">
                      Mon – Fri: 8:30 AM – 5:30 PM
                    </div>
                    <div>Saturday: 9:00 AM – 2:00 PM</div>
                    <div className="text-slate-400">Sunday &amp; Poya: WhatsApp Support Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs h-56 sm:h-64 relative bg-slate-100">
              <iframe
                title="Apex Global Talent Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%]"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enrollment Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Free Student Assessment &amp; Intake Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below and our counseling department will contact you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-bold">{formData.fullName}</span>. One of our
                    senior language counselors will contact you on{" "}
                    <span className="font-bold">{formData.phone}</span> with batch details and
                    eligibility advice.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Kasun Bandara"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile No *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 077 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. kasun@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      />
                    </div>

                    {/* Destination Preference */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Destination *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      >
                        <option value="Japan">Japan (日本)</option>
                        <option value="South Korea">South Korea (대한민국)</option>
                        <option value="Both Japan & Korea">Exploring Both Pathways</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Course Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Interested Program *
                      </label>
                      <select
                        id="course-select"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      >
                        <optgroup label="Japanese Courses & Visas">
                          <option value="Japanese JLPT N5 Foundation">JLPT N5 Foundation Course</option>
                          <option value="Japanese JLPT N4 Intermediate">JLPT N4 Intermediate Course</option>
                          <option value="Japanese JLPT N3 Advanced">JLPT N3 Bridge to Fluency</option>
                          <option value="SSW Specified Skilled Worker">SSW Japanese &amp; Skills Prep</option>
                          <option value="Japan Student Visa Counseling">Japan Student Visa (COE Advisory)</option>
                        </optgroup>
                        <optgroup label="Korean Courses & Visas">
                          <option value="Korean EPS-TOPIK CBT Master Batch">EPS-TOPIK CBT Master Batch</option>
                          <option value="Korean TOPIK I Foundation">TOPIK I (Level 1 &amp; 2) Course</option>
                          <option value="Korean TOPIK II Intermediate">TOPIK II (Level 3 &amp; 4) Course</option>
                          <option value="Korea Student Visa Counseling">Korea D-4 / D-2 Student Visa</option>
                        </optgroup>
                        <option value="General Visa Inquiry">General Visa &amp; Eligibility Assessment</option>
                      </select>
                    </div>

                    {/* Educational Qualification */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Highest Qualification *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                      >
                        <option value="G.C.E. Advanced Level (A/L)">G.C.E. Advanced Level (A/L)</option>
                        <option value="G.C.E. Ordinary Level (O/L)">G.C.E. Ordinary Level (O/L)</option>
                        <option value="Vocational Diploma / NVQ">Vocational Diploma / NVQ Level 4-5</option>
                        <option value="Bachelor's Degree Holder">Bachelor&apos;s Degree Graduate</option>
                        <option value="Other">Other Qualifications</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Questions or Specific Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention preferred batch times (Weekday/Weekend), intake plans, or financial questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-hidden"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-emerald-600 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-2 text-center sm:text-left">
                    🔒 Your information is confidential. We will never share your contacts with unauthorized third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
