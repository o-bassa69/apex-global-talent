export interface VisaService {
  id: string;
  country: "japan" | "korea";
  title: string;
  categoryName: string;
  tagline: string;
  duration: string;
  workPermission: string;
  languageRequirement: string;
  eligibility: string[];
  keyDocuments: string[];
  processSteps: string[];
  importantNotice: string;
}

export const japanVisas: VisaService[] = [
  {
    id: "japan-student-visa",
    country: "japan",
    title: "Japan Student Visa (Ryugaku 留学)",
    categoryName: "Educational Residence Status",
    tagline: "Study at an accredited Japanese language institute, vocational college (Senmon Gakko), or university.",
    duration: "1 to 2 Years (Renewable through higher education degree completion)",
    workPermission: "Legal part-time work permit: Up to 28 hours/week during term; 40 hours/week during vacations",
    languageRequirement: "Minimum 150+ hours study certificate or JLPT N5 / NAT-TEST 5Q recommended for COE",
    eligibility: [
      "Completion of G.C.E. Advanced Level (A/L) or equivalent 12 years of formal education",
      "Genuine motivation to pursue higher studies or technical education in Japan",
      "Financial sponsor (parent, immediate guardian, or relative) capable of demonstrating sufficient funds",
      "Clean immigration history and authentic verified documentation",
    ],
    keyDocuments: [
      "Official educational certificates (O/L, A/L results sheets, school leaving certificates)",
      "Certificate of Japanese Language Study (150+ hours) or JLPT/NAT score report",
      "Financial sponsor's bank balance certificate & 3-year bank statement",
      "Sponsor's proof of income, tax receipts, or business registration certificates",
      "Family relationship certificates certified by the Divisional Secretariat",
      "Valid passport with minimum 1-year validity remaining",
      "Statement of Purpose (Gakushuu Riyuusho) drafted in Japanese or English",
    ],
    processSteps: [
      "Initial assessment and selection of accredited Japanese language school or university",
      "Submission of application and verification of all academic and financial sponsor records",
      "Institute files Certificate of Eligibility (COE) with the Japanese Immigration Services Agency",
      "Immigration review period (typically 2 to 3 months prior to intake)",
      "Issuance of original COE and payment of institution tuition fee",
      "Visa endorsement application at the Embassy of Japan in Sri Lanka",
      "Pre-departure briefing on Japanese customs, accommodation, and arrival procedures",
    ],
    importantNotice:
      "Intakes take place 4 times a year: April (primary intake, up to 2 years), July (1 year 9 months), October (second largest, 1.5 years), and January (1 year 3 months). Application documents must be prepared 5-6 months ahead of the intake date.",
  },
  {
    id: "japan-ssw-visa",
    country: "japan",
    title: "Specified Skilled Worker Visa (SSW 特定技能)",
    categoryName: "Operational & Skilled Employment",
    tagline: "Legal operational employment across Japan's designated industrial fields with full Japanese labor rights.",
    duration: "SSW 1: Up to 5 years maximum | SSW 2: Indefinite renewal with family sponsorship potential",
    workPermission: "Full-time contractual employment under standard Japanese labor laws and wages",
    languageRequirement: "JLPT N4 or JFT-Basic A2 certification",
    eligibility: [
      "Age 18 or above with completion of formal secondary education",
      "Passing the JLPT N4 or JFT-Basic Japanese language examination",
      "Passing the official Japan Skill Evaluation Test in your chosen industrial sector",
      "Medical fitness meeting the rigorous occupational health standards of Japan",
    ],
    keyDocuments: [
      "JFT-Basic A2 or JLPT N4 official passing certificate",
      "Prometric / designated testing body Skill Evaluation Passing Certificate",
      "G.C.E. O/L or A/L educational certificates",
      "Comprehensive medical examination report from an accredited medical center",
      "Valid passport and clean police clearance certificate",
      "Curriculum Vitae (Rirekisho) formatted to Japanese corporate standards",
    ],
    processSteps: [
      "Complete language training (JLPT N4 / JFT-Basic) at Apex Global Talent",
      "Undertake sector-specific vocational terminology and skills training",
      "Register and sit for the Prometric Skill Evaluation Test and JFT-Basic in Sri Lanka",
      "Matching, interview preparation, and formal employment contract offer from Japanese accepting organization",
      "Certificate of Eligibility (COE) submission to Japanese Regional Immigration Bureau",
      "Visa stamping through the Embassy of Japan in Colombo following COE approval",
      "Orientation and travel arrangements to Japan",
    ],
    importantNotice:
      "Designated sectors include: Nursing Care (Kaigo), Food Service, Accommodation/Hospitality, Agriculture, Building Cleaning, Construction, Manufacture of Food and Beverages, and Industrial Machinery.",
  },
  {
    id: "japan-titp-visa",
    country: "japan",
    title: "Technical Intern Training Program (TITP 技能実習)",
    categoryName: "Technical Knowledge Transfer",
    tagline: "Acquire hands-on technical skills and industrial techniques in Japanese enterprises.",
    duration: "Typically 3 to 5 years (Internship 1, 2, and 3 phases)",
    workPermission: "Practical internship covered under the Technical Intern Training Act",
    languageRequirement: "JLPT N5 equivalent basic communicative competency",
    eligibility: [
      "Age between 18 - 30 years with strong physical and mental health",
      "Relevant technical aptitude or background in industrial/trades fields",
      "Commitment to return to Sri Lanka to utilize acquired skills, or transition to SSW if qualified",
    ],
    keyDocuments: [
      "Valid passport, National Identity Card (NIC), and police clearance",
      "Educational certificates and any vocational/technical diplomas (NVQ)",
      "Standard health screening and color perception clearance",
      "Pre-training language attendance certificate",
    ],
    processSteps: [
      "Foundational Japanese language and cultural orientation program",
      "Technical trade aptitude test and interview with sending/supervising organization",
      "COE processing and contract formalization",
      "Pre-departure technical internship briefing in Colombo",
      "Arrival and 1-month intensive group training inside Japan before factory/site dispatch",
    ],
    importantNotice:
      "TITP is strictly regulated by the Organization for Technical Intern Training (OTIT) in Japan and authorized sending organizations in Sri Lanka. Transparent fee compliance is mandatory.",
  },
  {
    id: "japan-engineer-visa",
    country: "japan",
    title: "Engineer / Specialist in Humanities / International Services",
    categoryName: "Professional Career Residence Status",
    tagline: "For degree holders seeking direct professional employment in Japan's IT, engineering, or corporate sectors.",
    duration: "1, 3, or 5 Years (Renewable without ceiling)",
    workPermission: "Full-time professional employment within the scope of qualified expertise",
    languageRequirement: "JLPT N3 / N2 recommended (English-only IT roles also exist depending on corporate sponsor)",
    eligibility: [
      "Bachelor's degree or higher in relevant field (Computer Science, Engineering, Business, Languages)",
      "Direct job offer or sponsor contract from a legally established Japanese enterprise",
      "Role directly corresponds with the applicant's university degree specialization",
    ],
    keyDocuments: [
      "University degree certificate and official academic transcripts",
      "JLPT certificate (N3, N2, or N1) or English proficiency records",
      "Detailed employment contract and company statutory documents from Japan",
      "Curriculum Vitae and portfolio of technical work",
    ],
    processSteps: [
      "Academic credentials evaluation and Japanese CV optimization",
      "Job offer finalization with Japanese hiring company",
      "Filing for COE under Engineer/Specialist category at Japanese Immigration",
      "Consular visa submission in Colombo",
      "Relocation and residence registration in Japan",
    ],
    importantNotice:
      "Unlike operational roles, professional visas require degree-level accreditation directly aligned with your contracted job description.",
  },
];

export const koreaVisas: VisaService[] = [
  {
    id: "korea-d2-visa",
    country: "korea",
    title: "Korea D-2 Degree Student Visa",
    categoryName: "Higher Education Degree Pathway",
    tagline: "Pursue recognized Bachelor's, Master's, or Doctoral degrees at prestigious South Korean universities.",
    duration: "2 to 4 Years (Renewable throughout duration of academic degree)",
    workPermission: "Part-time work permitted (up to 20-30 hours/week with university permission; unlimited during breaks)",
    languageRequirement: "TOPIK Level 3/4 for Korean-medium courses; IELTS 5.5 - 6.5 for English-track programs",
    eligibility: [
      "Completed 12 years of formal education (A/L) for Bachelor's; Recognized Bachelor's degree for Master's",
      "Letter of Acceptance from an accredited South Korean college or university",
      "Sufficient financial capacity demonstrated via bank balance certificate (typically USD $10,000 - $20,000 equivalent)",
      "Clear medical screening including tuberculosis (TB) clearance",
    ],
    keyDocuments: [
      "Standard Certificate of Admission (CoA) issued by the Korean university",
      "Original academic certificates and transcripts attested by the Ministry of Foreign Affairs (Sri Lanka) and consular-verified",
      "Bank balance certificate maintained in student's or parent's name meeting immigration thresholds",
      "Family relation certificate and proof of sponsor income",
      "Personal statement and Study Plan outlining academic objectives",
      "Valid passport with at least 1-year validity remaining",
      "Certificate of Tuberculosis Screening from an embassy-designated hospital",
    ],
    processSteps: [
      "Academic counseling to identify suitable Korean universities and program tracks",
      "Preparation of application dossier, study plan, and consular attestation of certificates",
      "Submission of university application during Spring (Sept-Nov) or Fall (May-June) windows",
      "University review, interview, and issuance of Standard Certificate of Admission",
      "Payment of first semester tuition fee directly to the university account",
      "Visa application submission through the Embassy of the Republic of Korea in Sri Lanka",
      "Visa approval, orientation, and flight arrangement to Incheon/Seoul",
    ],
    importantNotice:
      "South Korea provides outstanding educational infrastructure with affordable tuition. High TOPIK scores significantly increase scholarship awards (30% - 100% tuition waivers).",
  },
  {
    id: "korea-d4-visa",
    country: "korea",
    title: "Korea D-4 General Training Visa (Language Institute)",
    categoryName: "Language Immersion Pathway",
    tagline: "Immerse yourself in full-time Korean language studies at an affiliated university language institute.",
    duration: "6 Months to 2 Years (Renewable in 6-month increments)",
    workPermission: "Part-time work permitted after 6 months of continuous enrollment and good attendance (over 90%)",
    languageRequirement: "No initial TOPIK required; basic Hangeul literacy recommended prior to departure",
    eligibility: [
      "Completion of G.C.E. Advanced Level (A/L) with recognized school graduation certificate",
      "Genuine intent to learn Korean for academic progression or personal development",
      "Financial proof of USD $10,000 equivalent maintained in a bank account",
    ],
    keyDocuments: [
      "Certificate of Admission from an accredited university Korean Language Institute (KLI)",
      "Attested educational certificates and transcripts",
      "Bank balance statement verifying required tuition and living funds",
      "Study Plan explaining why learning Korean in South Korea is necessary",
      "TB clearance certificate from designated clinic",
      "Passport and passport-sized photographs",
    ],
    processSteps: [
      "Select affiliated Korean university language center (Seoul or regional areas)",
      "Submit application documents for 2 or more consecutive 10-week terms",
      "Receive invoice and transfer tuition directly to the Korean institution",
      "Obtain Certificate of Admission and compile visa dossier",
      "Submit D-4 visa application at the Korean Embassy in Colombo",
      "Attend pre-departure briefing covering accommodation, bank accounts, and Korean alien registration (ARC)",
    ],
    importantNotice:
      "The D-4 language program is the most popular stepping stone for students who want to master Korean on campus before transferring into a full Bachelor's degree (D-2).",
  },
  {
    id: "korea-e9-visa",
    country: "korea",
    title: "Korea E-9 Non-Professional Employment (EPS)",
    categoryName: "Government-to-Government Employment Scheme",
    tagline: "Legal employment in South Korean manufacturing, construction, and agriculture via the official EPS system.",
    duration: "3 Years initial contract + 1 Year 10 Months extension (Total up to 4 Years 10 Months)",
    workPermission: "Full-time employment with standard Korean minimum wage, overtime, and social insurance coverage",
    languageRequirement: "Passing the official HRD Korea EPS-TOPIK Examination",
    eligibility: [
      "Sri Lankan citizens between 18 and 39 years of age",
      "No criminal record or past deportation from the Republic of Korea",
      "No color blindness, color weakness, or severe physical impairments",
      "Clear medical and drug testing clearance",
    ],
    keyDocuments: [
      "Official EPS-TOPIK Passing Certificate",
      "Sri Lanka Foreign Employment Bureau (SLBFE) registration profile",
      "Valid National Passport with at least 1-year validity",
      "Police clearance certificate from the Ministry of Public Security",
      "Accredited medical examination and laboratory test reports",
    ],
    processSteps: [
      "Enroll in rigorous EPS-TOPIK training at Apex Global Talent",
      "Register for the annual EPS-TOPIK examination via official SLBFE announcements",
      "Pass the Computer-Based Test (CBT) and second-round Skills Assessment",
      "Job roster registration on the HRD Korea official applicant pool (SPAS)",
      "Selection by a Korean employer and issuance of Standard Labor Contract",
      "Visa issuance (Certificate for Confirmation of Visa Issuance - CCVI) through Korean authorities",
      "Pre-departure orientation at SLBFE training center and government-chartered departure to South Korea",
    ],
    importantNotice:
      "EPS is strictly governed by the Governments of South Korea and Sri Lanka. Selection is carried out directly by Korean employers from the HRD roster. Beware of fraudulent agencies claiming guaranteed placement; Apex Global Talent provides ethical exam preparation.",
  },
  {
    id: "korea-e7-visa",
    country: "korea",
    title: "Korea E-7 Specific Activity (Skilled Worker Visa)",
    categoryName: "Specialized Skilled Employment",
    tagline: "For professionals, technicians, and specialized craftsmen employed in Korean industries.",
    duration: "1 to 3 Years (Renewable as long as employment contract is valid)",
    workPermission: "Full-time contracted work in the designated specialized occupation",
    languageRequirement: "TOPIK Level 2 - 4 depending on occupation",
    eligibility: [
      "Bachelor's degree with 1+ year related work experience, or Master's degree in relevant discipline",
      "Employment contract with a Korean enterprise meeting statutory foreign worker quotas",
      "Skill points and qualifications matching the official 87 E-7 occupation classifications",
    ],
    keyDocuments: [
      "Employment contract specifying salary meeting Korean national average threshold",
      "Educational certificates, transcripts, and verified employment letters",
      "Company registration (Business License) and tax clearance from Korean employer",
      "Consular authenticated degree credentials",
    ],
    processSteps: [
      "Evaluation of applicant credentials against Ministry of Justice E-7 guidelines",
      "Job offer verification from Korean corporate sponsor",
      "Filing visa confirmation at local Korean immigration office by sponsor",
      "Consular visa stamping in Sri Lanka",
      "Registration for Alien Registration Card (ARC) in Korea upon arrival",
    ],
    importantNotice:
      "Includes shipyard welding, mechanical maintenance, hospitality management, and technical engineering professions.",
  },
];
