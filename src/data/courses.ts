export interface Course {
  id: string;
  country: "japan" | "korea";
  title: string;
  level: string;
  tagline: string;
  duration: string;
  schedule: string;
  mode: string;
  badge: string;
  description: string;
  targetExam: string;
  suitableFor: string[];
  syllabusHighlights: string[];
  features: string[];
  nextIntake: string;
  pdfUrl?: string;
  directAdmissionsNote?: string;
}

export const japaneseCourses: Course[] = [
  {
    id: "jp-student-visa",
    country: "japan",
    title: "Japan Student Visa Pathway (JLPT N5 – N2)",
    level: "All Levels (N5, N4, N3, N2)",
    tagline: "Direct pathway to Fukuoka International Foreign Language College & Top Universities across Japan.",
    duration: "4 – 6 Months per Level",
    schedule: "Weekday & Weekend Batches Available",
    mode: "Hybrid (Onsite + Online)",
    badge: "Direct Visa • 0 Middlemen",
    description:
      "Comprehensive certified Japanese language preparation covering JLPT/NAT N5, N4, N3, and N2 levels. APEX JAPAN provides direct visa admissions with absolutely zero intermediaries — securing direct pathways to Fukuoka International Foreign Language College and prestigious universities, junior colleges, and vocational schools across Japan.",
    targetExam: "JLPT N5, N4, N3, N2 / NAT-TEST",
    suitableFor: [
      "Students planning for higher education & student visas in Japan",
      "Direct admission applicants to Fukuoka International Foreign Language College",
      "Candidates targeting Japanese Universities, Junior Colleges & Vocational Institutes",
    ],
    syllabusHighlights: [
      "Full JLPT N5 to N2 syllabus coverage (Grammar, Kanji, Dokkai, Choukai)",
      "University & college Statement of Purpose (SOP) and interview preparation",
      "Direct documentation and genuine COE processing — zero middlemen",
      "Situational daily communication, Japanese culture & lifestyle orientation",
    ],
    features: [
      "Direct institutional partnership with Fukuoka International Foreign Language College",
      "Weekly mock exams under timed official test conditions",
      "Direct Japanese immigration Certificate of Eligibility (COE) filing",
      "150+ hours official study certificate recognized by Japan Immigration",
    ],
    nextIntake: "Admissions Open for Upcoming Month",
    directAdmissionsNote: "Direct Pathway: Fukuoka International Foreign Language College & Japanese Universities",
  },
  {
    id: "jp-ssw-visa",
    country: "japan",
    title: "SSW Specified Skilled Worker (Food Service & Caregiver)",
    level: "Vocational & JFT-Basic / JLPT N4",
    tagline: "High-demand career placement in Japanese Food Services & Nursing Care (Kaigo).",
    duration: "4 Months (160 Hours)",
    schedule: "Flexible Morning, Evening & Weekend Batches",
    mode: "Onsite Classroom + Practical Lab",
    badge: "SSW High-Demand Employment",
    description:
      "Targeted language and specialized vocational terminology for Japan's Specified Skilled Worker (SSW 1) sectors — focusing specifically on Food Service and Caregiving / Kaigo. Includes JFT-Basic A2 / JLPT N4 preparation alongside official sector skills test training.",
    targetExam: "JFT-Basic / JLPT N4 + Industry Skill Test (Food / Caregiver)",
    suitableFor: [
      "Candidates seeking legal high-paying employment in Japan under SSW visa",
      "Caregiving / nursing diploma holders and compassionate care aspirants",
      "Hospitality, restaurant, culinary, and food service professionals",
    ],
    syllabusHighlights: [
      "Caregiving (Kaigo) specialized Japanese: care terminology, patient communication, hygiene",
      "Food Service specialized Japanese: customer hospitality, food hygiene, kitchen management",
      "JFT-Basic A2 communicative competence standards and listening drills",
      "Japanese workplace etiquette, 5S culture, and Hou-Ren-So reporting systems",
    ],
    features: [
      "Official Prometric skills exam past papers & computer-based practice",
      "Direct employer interviews with authorized Japanese sponsoring organizations",
      "Zero middleman direct visa documentation",
      "Pre-departure workplace adaptation & life guidance",
    ],
    nextIntake: "Monthly Rolling Batches",
    directAdmissionsNote: "Direct placement with vetted Japanese Care facilities & Food enterprise networks",
  },
  {
    id: "jp-training-visa",
    country: "japan",
    title: "Technical Training & Construction Visa (Tokutaki)",
    level: "Vocational Technical Japanese (N5 / N4)",
    tagline: "Authorized training visa pathway specialized for the Japanese Construction sector.",
    duration: "3 – 4 Months (140 Hours)",
    schedule: "Daily Intensive & Weekend Classes",
    mode: "Onsite Practical Training",
    badge: "Construction Specialized",
    description:
      "A specialized training program designed for technical intern and specified training visas (Tokutaki / Tokutei) focusing strictly on the Construction sector. Equips candidates with technical construction terminology, onsite occupational safety rules, and foundational Japanese conversation.",
    targetExam: "NAT-TEST 5Q/4Q / JLPT N5/N4 / Technical Construction Assessment",
    suitableFor: [
      "Youth and tradesmen aspiring for construction careers in Japan",
      "Candidates seeking technical intern training visa (TITP / Tokutei) sponsorship",
      "Technicians wanting safety certification and verified Japanese workplace skills",
    ],
    syllabusHighlights: [
      "Construction site Japanese: tools, materials, structural terms, commands",
      "Industrial safety commands (Anzen Dai-Ichi), hazard prevention & disaster protocol",
      "Everyday conversational Japanese for living and working with Japanese supervisors",
      "Physical fitness, discipline, and cooperative Japanese teamwork drills",
    ],
    features: [
      "Authentic site scenario role-playing and safety tool terminology",
      "Direct technical training visa processing with no unauthorized middlemen",
      "Pre-departure physical health and medical test advisory",
      "Official training certificates issued for visa documentation",
    ],
    nextIntake: "Enrolling Now for Upcoming Cohort",
    directAdmissionsNote: "Direct pathway to certified Japanese construction enterprises & supervisory bodies",
  },
  {
    id: "jp-work-visa",
    country: "japan",
    title: "Professional Working Visa (Hotel Front Office & Airport Handling)",
    level: "Intermediate to Advanced (JLPT N3 / N2)",
    tagline: "Prestigious corporate careers in Hotel Front Office & Airport Ground Handling services.",
    duration: "5 Months (200 Hours)",
    schedule: "Intensive Evening & Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Professional Career Visa",
    description:
      "High-level professional Japanese language and business etiquette training for degree or diploma holders seeking Japanese Working Visas. Tailored specifically for luxury Hotel Front Office operations and International Airport Ground Handling & Passenger Services.",
    targetExam: "JLPT N3 / N2 + Business Japanese (BJT)",
    suitableFor: [
      "Hospitality, tourism, and front office professionals targeting luxury hotels in Japan",
      "Aviation, logistics, and passenger handling aspirants aiming for Japanese airports",
      "Graduates seeking legal, professional engineering & humanities working visas",
    ],
    syllabusHighlights: [
      "High-level honorifics: Keigo, Sonkeigo, Kenjougo for front desk guest communication",
      "Airport ground handling terminology: check-in, ramp operations, baggage, customer care",
      "Corporate business Japanese: professional phone etiquette, emails, and meetings",
      "Direct interview grooming with Japanese hospitality and aviation recruiting panels",
    ],
    features: [
      "Direct placement pathways with leading hotel chains and airport service companies in Japan",
      "Zero middleman visa processing and full immigration document assistance",
      "Mock interviews conducted by native/certified corporate Japanese trainers",
      "Direct transfer to permanent Japanese employment contracts",
    ],
    nextIntake: "Quarterly Intake Enrollment",
    directAdmissionsNote: "Direct connections with premier Japanese Hotel networks & Airport Service consortiums",
  },
];

export const koreanCourses: Course[] = [
  {
    id: "kr-d2-visa",
    country: "korea",
    title: "D-2 Student Visa (Degree & Work Pathway — KIIAC)",
    level: "Vocational & Degree Program (D-2 / E-7 / F-2-R)",
    tagline: "Work part-time immediately without a 6-month wait — Direct pathway to Permanent Residency (PR).",
    duration: "4 – 5 Months Preparation",
    schedule: "Weekday & Weekend Options",
    mode: "Hybrid (Onsite + Online)",
    badge: "Work from Day 1 • PR Pathway",
    description:
      "An exclusive, government-aligned university study and career pathway. Under the D-2 Category, students can legally work part-time while studying immediately — with NO 6-month waiting period! Offers a structured transition leading to E-7 professional work visas and F-2-R Permanent Residency (PR) until complete settlement. APEX KOREA is the Official Sole Representative for KIIAC (Korea Institute of Industry-Academia Cooperation). Download our detailed PDF guide for full breakdown.",
    targetExam: "TOPIK I / TOPIK II / KIIAC Institutional Assessment",
    suitableFor: [
      "Students who want to study a degree in South Korea while working part-time immediately",
      "Candidates seeking a guaranteed legal pathway from Student (D-2) to PR (F-2-R)",
      "A/L graduates and diploma holders wanting long-term settlement in South Korea",
    ],
    syllabusHighlights: [
      "Essential academic and communicative Korean for university lectures and campus life",
      "Part-time job workplace Korean: retail, customer service, logistics, campus work",
      "Step-by-step guidance on D-2 visa documentation, scholarships & tuition discounts",
      "Settlement roadmap: D-2 (Study & Work) → E-7 (Professional Work) → F-2-R (PR)",
    ],
    features: [
      "Official Sole Representative for KIIAC (Korea Institute of Industry-Academia Cooperation)",
      "Part-time work permitted from day one (no 6-month waiting rule)",
      "Downloadable comprehensive D-2 Category Visa & Career Guide (PDF)",
      "Complete post-arrival support, accommodation & job placement assistance",
    ],
    nextIntake: "March & September Intakes (Enrolling Now)",
    pdfUrl: "/assets/korea-d2-guide.pdf",
    directAdmissionsNote: "Official Sole Representative for KIIAC: Direct D-2 / E-7 / F-2-R pathways",
  },
  {
    id: "kr-d4-visa",
    country: "korea",
    title: "D-4 Student Visa (Standard Language Training Path)",
    level: "Beginner to Intermediate (TOPIK I / TOPIK II)",
    tagline: "Standard university language institute pathway — no work for the first 6 months.",
    duration: "4 Months Foundation (160 Hours)",
    schedule: "Morning & Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Standard Language Path",
    description:
      "The conventional pathway for students entering university Korean language centers (D-4 General Training Visa). Note: Under standard D-4 immigration regulations, students cannot engage in part-time employment for the first 6 months. Ideal for students focusing on mastering Korean up to TOPIK Level 3/4 before transferring into a D-2 degree program.",
    targetExam: "TOPIK I (Levels 1–2) / TOPIK II (Level 3)",
    suitableFor: [
      "Students wanting foundational language immersion in top Korean universities",
      "Candidates willing to focus purely on language studies for the first 6 months",
      "Applicants preparing for future university degree or scholarship transfers",
    ],
    syllabusHighlights: [
      "Hangul pronunciation mastery, essential vocabulary (~1,800 words) & grammar foundations",
      "Everyday social situations: housing, campus, transport, dining, shopping",
      "Listening comprehension drills matching university language institute entrance exams",
      "Official TOPIK I past question review and mock examination simulations",
    ],
    features: [
      "Direct university admission assistance to top language centers in Seoul and Busan",
      "Comprehensive bank statement, financial sponsor & embassy document auditing",
      "Academic guidance on transitioning from D-4 to D-2 university degree courses",
      "Certified 150+ hours study certificate issued for embassy visa filing",
    ],
    nextIntake: "Enrolling for Upcoming Quarterly Term",
    directAdmissionsNote: "Direct partnerships with leading Korean University Language Institutes",
  },
  {
    id: "kr-eps-topik",
    country: "korea",
    title: "EPS-TOPIK CBT Master Training (E-9 Government Work Visa)",
    level: "HRD Korea Official Curriculum (CBT)",
    tagline: "Rigorous computer-based exam preparation for government-approved employment in South Korea.",
    duration: "3 – 4 Months (180 Hours)",
    schedule: "Full-Time Intensive & Weekend Batches",
    mode: "Classroom CBT Lab + Practical",
    badge: "Government E-9 Pathway",
    description:
      "Engineered specifically for Sri Lankan job seekers targeting official legal employment in South Korea via the government-to-government EPS system under the E-9 visa. Features daily simulations in our dedicated CBT computer lab using official HRD Korea textbooks and past paper question banks.",
    targetExam: "Official EPS-TOPIK Examination (CBT) by HRD Korea & SLBFE",
    suitableFor: [
      "Sri Lankan youth (18–39 years) seeking high-income industrial jobs in South Korea",
      "Candidates targeting Manufacturing, Construction, Agriculture, or Fisheries under E-9 visa",
      "Beginners wanting rapid vocabulary mastery and listening comprehension reflexes",
    ],
    syllabusHighlights: [
      "Complete walkthrough of standard HRD Korea textbooks 1 & 2 (60 Chapters)",
      "Industrial safety terminology, factory tools & occupational health commands",
      "Timed CBT practice: 20 Reading + 20 Listening questions mirroring official exam software",
      "Korean workplace labor laws, employee rights & cultural orientation",
    ],
    features: [
      "Dedicated high-tech computer lab for authentic CBT simulation exams",
      "Over 2,500 model and past question bank practice tests",
      "Assistance with official SLBFE registration and roster tracking",
      "Pre-medical and color-blindness check guidance",
    ],
    nextIntake: "New Batches Enrolling Weekly",
    directAdmissionsNote: "Structured to maximize roster selection scores for official SLBFE & HRD Korea intakes",
  },
];
