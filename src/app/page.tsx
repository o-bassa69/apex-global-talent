import React from "react";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CorePillars from "@/components/CorePillars";
import PartnersDirect from "@/components/PartnersDirect";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import Courses from "@/components/Courses";
import VisaProcess from "@/components/VisaProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero (UPDATED) */}
      <Hero />

      {/* 2. Who We Are (NEW) */}
      <WhoWeAre />

      {/* 3. Our Core Pillars (NEW) */}
      <CorePillars />

      {/* 4. Partners + Direct Admissions (NEW) */}
      <PartnersDirect />

      {/* 5. Why Choose APEX (NEW) */}
      <WhyUs />

      {/* 6. Our Services: Japan + Korea (UPDATED) */}
      <Services />

      {/* 7. Gallery (NEW) */}
      <GallerySection />

      {/* 8. Our Team + About the institute (NEW) */}
      <TeamSection />

      {/* 9. Existing: Courses, Visa Process, Stories, FAQ, Contact */}
      <Courses />
      <VisaProcess />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
