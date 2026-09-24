import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import VisaProcess from "@/components/VisaProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Courses />
      <VisaProcess />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
