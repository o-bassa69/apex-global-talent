export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "japan" | "korea" | "visa" | "language";
}

export const faqsData: FAQItem[] = [
  {
    question: "Who is APEX GLOBAL TALENT PVT LTD and what services do you provide?",
    answer:
      "APEX GLOBAL TALENT PVT LTD is an educational and visa consultancy based in Sri Lanka. We specialize in Japanese and Korean language instruction (JLPT, NAT-TEST, EPS-TOPIK, TOPIK) and comprehensive documentation guidance for Sri Lankans seeking higher education, vocational training, and legal employment opportunities in Japan and South Korea.",
    category: "general",
  },
  {
    question: "Do you guarantee visa approval or job placements?",
    answer:
      "No. In compliance with strict international ethical standards and legal regulations, APEX GLOBAL TALENT PVT LTD does not and cannot guarantee visa approvals, university admissions, or job placements. Final decisions on visa issuance are exclusively made by the Immigration Services Agency of Japan, the Ministry of Justice of the Republic of Korea, and their respective embassies in Sri Lanka. What we guarantee is rigorous, certified language training and meticulous, transparent document preparation that adheres strictly to official immigration criteria.",
    category: "general",
  },
  {
    question: "What are the minimum educational requirements to study in Japan?",
    answer:
      "Applicants typically need to have completed 12 years of formal education (equivalent to G.C.E. Advanced Level in Sri Lanka) and be able to demonstrate minimum 150 hours of Japanese language study or possess a JLPT N5 / NAT-TEST 5Q passing certificate. A reliable financial sponsor (usually parents or close relatives) must also demonstrate adequate living and tuition funds.",
    category: "japan",
  },
  {
    question: "When are the main intakes for Japanese language schools?",
    answer:
      "Japan has four annual intakes: April (the largest intake, duration up to 2 years), July (1 year 9 months), October (second largest, 1.5 years), and January (1 year 3 months). Applications must be initiated at least 5 to 6 months prior to the intake month to meet Japanese Immigration COE submission deadlines.",
    category: "japan",
  },
  {
    question: "Can international students work part-time in Japan?",
    answer:
      "Yes. International students in Japan who receive 'Permission to Engage in Activity Other Than That Permitted under the Status of Residence' are legally permitted to work part-time up to 28 hours per week during school terms, and up to 40 hours per week (8 hours per day) during official seasonal academic vacations.",
    category: "japan",
  },
  {
    question: "What is the SSW (Specified Skilled Worker) visa in Japan?",
    answer:
      "The SSW (Tokutei Ginou) is an operational employment visa created by the Japanese Government across designated industries (such as Nursing Care, Food Service, Agriculture, and Hospitality). Applicants must be at least 18 years old, pass the JLPT N4 or JFT-Basic language test, and pass the official industry-specific skill evaluation test conducted by authorized testing agencies.",
    category: "japan",
  },
  {
    question: "What is the EPS-TOPIK system for South Korea?",
    answer:
      "The Employment Permit System (EPS) is a government-to-government program between South Korea and Sri Lanka (administered by the Sri Lanka Foreign Employment Bureau - SLBFE and HRD Korea). Candidates pass the official EPS-TOPIK Computer-Based Test (CBT) and a skills assessment to be placed on the roster for selection by Korean employers for E-9 non-professional employment.",
    category: "korea",
  },
  {
    question: "What is the difference between Korea D-4 and D-2 visas?",
    answer:
      "The D-4 visa is for General Training, specifically enrolled in full-time Korean language institutes affiliated with Korean universities. It is ideal for students who wish to learn Korean in Korea before entering a degree. The D-2 visa is for students enrolled directly in degree-granting programs (Associate's, Bachelor's, Master's, or PhD) at recognized Korean universities.",
    category: "korea",
  },
  {
    question: "Can international students in South Korea work part-time?",
    answer:
      "Under a D-2 Degree Visa, international students with good academic standing and required TOPIK levels can obtain part-time work permission for 20 to 30 hours per week during semesters (and unlimited during school breaks). For D-4 Language students, part-time work permissions may be granted only after completing at least 6 months of continuous enrollment with an attendance record of 90% or higher.",
    category: "korea",
  },
  {
    question: "How long does the entire application process take?",
    answer:
      "For student visas in Japan and Korea, the entire cycle from enrollment in language classes to visa issuance typically takes 6 to 9 months depending on the target intake cycle. For EPS-TOPIK (Korea) or SSW (Japan), the timeline depends on the official government exam schedules, matching periods, and immigration COE processing times.",
    category: "visa",
  },
  {
    question: "Are your language classes held online or in-person?",
    answer:
      "We offer both physical classroom sessions at our modern facility in Colombo and flexible hybrid/online interactive sessions with recorded revision materials, live Q&A, and in-person mock exam simulations.",
    category: "language",
  },
  {
    question: "Who can act as a financial sponsor for my student visa?",
    answer:
      "Generally, immediate family members such as parents, legal guardians, or siblings with documented, verifiable sources of income (tax receipts, bank deposits, salary slips, or business registrations) can act as financial sponsors. We provide complete guidance on proper documentation to meet immigration transparency guidelines.",
    category: "visa",
  },
];
