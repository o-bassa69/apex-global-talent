export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  actionTitle: string;
  actionTip: string;
}

export const applicationProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    description:
      "Reach out via our online application form, direct phone call, or quick WhatsApp message. Our student advisors will note your educational background and destination preference.",
    actionTitle: "How to begin",
    actionTip: "Fill out the quick inquiry form or message our counselors directly on WhatsApp.",
  },
  {
    step: 2,
    title: "Consultation",
    subtitle: "One-on-one personalized assessment",
    description:
      "Attend a detailed, transparent counseling session (in-person at our Colombo office or via phone/video). We evaluate your academic history, age, financial profile, and realistic goals for Japan or South Korea.",
    actionTitle: "Key objective",
    actionTip: "Gain complete clarity on eligibility, expected expenses, official exam deadlines, and legal immigration requirements without false promises.",
  },
  {
    step: 3,
    title: "Select Course / Opportunity",
    subtitle: "Choose the right pathway",
    description:
      "Select the appropriate language preparation course (JLPT N5-N3, NAT-TEST, or EPS-TOPIK) and identify your target pathway (Student Visa, SSW, TITP, D-2 Degree, or D-4 Language).",
    actionTitle: "Course commencement",
    actionTip: "Enroll in structured classes taught by experienced instructors following official curricula.",
  },
  {
    step: 4,
    title: "Document Preparation",
    subtitle: "Thorough documentation support",
    description:
      "We assist you in systematically compiling all required certificates, relationship proofs, bank statements, affidavits, and statements of purpose according to strict Japanese and Korean standards.",
    actionTitle: "Meticulous verification",
    actionTip: "Every document is carefully cross-checked and attested to prevent delays or rejection risks.",
  },
  {
    step: 5,
    title: "Application Processing",
    subtitle: "Submission to educational bodies or employers",
    description:
      "Your complete dossier is submitted to the accredited Japanese language school, Korean university, or relevant overseas counterpart for official admission screening or Certificate of Eligibility (COE) filing.",
    actionTitle: "Direct coordination",
    actionTip: "We maintain ongoing communication with institutions to track your application milestones.",
  },
  {
    step: 6,
    title: "Visa / Admission Process",
    subtitle: "Embassy filing & verification",
    description:
      "Upon receiving your Certificate of Eligibility (Japan) or Standard Certificate of Admission (Korea), we guide you through tuition settlements, health checks, and embassy visa file lodging in Colombo.",
    actionTitle: "Consular lodging",
    actionTip: "Comprehensive mock interview preparation and checklist review prior to embassy lodging.",
  },
  {
    step: 7,
    title: "Preparation for Departure",
    subtitle: "Ready for your new journey",
    description:
      "Once your visa is issued, we provide an intensive pre-departure orientation covering airport procedures, dormitory/accommodation rules, life etiquette, part-time work compliance, and arrival logistics.",
    actionTitle: "Lifelong connection",
    actionTip: "Arrival guidance, emergency contacts, and continuous alumni support in Japan and South Korea.",
  },
];
