export interface Course {
  id: string;
  country: "japan" | "korea";
  title: string;
  level: string;
  tagline: string;
  duration: string;
  schedule: string;
  mode: "Onsite Classroom" | "Hybrid (Onsite + Online)" | "Full Online Interactive";
  badge: string;
  description: string;
  targetExam: string;
  suitableFor: string[];
  syllabusHighlights: string[];
  features: string[];
  nextIntake: string;
}

export const japaneseCourses: Course[] = [
  {
    id: "jlpt-n5",
    country: "japan",
    title: "JLPT N5 Foundation Course",
    level: "Beginner Level (A1)",
    tagline: "Master the foundations of the Japanese language from alphabet to daily communication.",
    duration: "4 Months (160 Hours)",
    schedule: "Weekday & Weekend Batches Available",
    mode: "Hybrid (Onsite + Online)",
    badge: "Most Popular for Beginners",
    description:
      "A complete introductory program designed for Sri Lankan students with zero prior knowledge. Covers Hiragana, Katakana, over 100 essential Kanji characters, basic grammar patterns, and essential conversational greetings.",
    targetExam: "JLPT N5 / NAT-TEST 5Q",
    suitableFor: [
      "Students planning for Japan Student Visa admissions",
      "Candidates aspiring for Japanese vocational colleges and language schools",
      "Beginners seeking foundational language literacy",
    ],
    syllabusHighlights: [
      "Hiragana & Katakana mastery with correct stroke orders",
      "100+ Core Kanji characters and vocabulary (~800 words)",
      "Essential Japanese particles (wa, ga, o, ni, de, e)",
      "Daily situational conversations: greetings, shopping, directions, dining",
      "Listening comprehension drills matching the official test speed",
    ],
    features: [
      "Comprehensive printed workbook & audio materials provided",
      "Weekly vocabulary and Kanji quizzes",
      "Official past paper mock tests under timed conditions",
      "Individual pronunciation and speaking feedback",
    ],
    nextIntake: "Enrolling Now for Upcoming Month",
  },
  {
    id: "jlpt-n4",
    country: "japan",
    title: "JLPT N4 Intermediate Foundation",
    level: "Elementary Level (A2)",
    tagline: "The benchmark qualification required for Japan Student Visas and SSW pathways.",
    duration: "4 - 5 Months (180 Hours)",
    schedule: "Morning, Evening & Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Key Visa Benchmark",
    description:
      "Building upon N5 fundamentals, the N4 course covers complex sentence structures, honorific expressions (keigo basics), and around 300 Kanji. This qualification is widely required for Japanese language school COE processing and SSW work visas.",
    targetExam: "JLPT N4 / NAT-TEST 4Q / JFT-Basic",
    suitableFor: [
      "Students with JLPT N5 completion targeting Japanese language schools",
      "SSW (Specified Skilled Worker) candidates preparing for skill exams",
      "Professionals planning technical career placement in Japan",
    ],
    syllabusHighlights: [
      "~300 Kanji characters and 1,500+ vocabulary words",
      "Te-form, Ta-form, Nai-form, Potential, and Passive verb conjugations",
      "Complex sentence structures with clauses and conditionals (tara, ba, to, nara)",
      "Intermediate reading passages with everyday notices and articles",
      "Audio listening drills focusing on natural spoken dialogues",
    ],
    features: [
      "Targeted grammar drill sheets and review exercises",
      "Full-length NAT-TEST / JLPT mock exam series",
      "Dedicated doubt-clearing sessions with certified instructors",
      "Visa interview preparation & self-introduction guidance in Japanese",
    ],
    nextIntake: "Enrolling Now for Upcoming Month",
  },
  {
    id: "jlpt-n3",
    country: "japan",
    title: "JLPT N3 Bridge to Fluency",
    level: "Intermediate Level (B1)",
    tagline: "Achieve practical conversational fluency and readiness for higher education in Japan.",
    duration: "5 Months (200 Hours)",
    schedule: "Weekend Intensive or Evening Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Higher Studies & Career",
    description:
      "Designed for students aiming to transition directly into Japanese universities, vocational colleges (Senmon Gakko), or professional employment. Develops the ability to understand Japanese used in everyday situations to a natural degree.",
    targetExam: "JLPT N3 / NAT-TEST 3Q",
    suitableFor: [
      "Degree holders aiming for engineering / IT / business visas in Japan",
      "Students aiming for direct enrollment in Japanese higher institutions",
      "SSW workers aiming for career progression to SSW Type 2",
    ],
    syllabusHighlights: [
      "~650 Kanji characters and 3,750+ essential vocabulary terms",
      "Nuanced expressions, idioms, and intermediate connectors",
      "Editorial reading comprehension, essays, and news summaries",
      "Business email writing and formal spoken Japanese (Keigo, Sonkeigo, Kenjougo)",
      "Fast-paced listening dialogues with abstract topics",
    ],
    features: [
      "In-depth analysis of past JLPT N3 examination papers",
      "Interactive group discussions and oral presentations",
      "Career counseling for Japanese corporate culture and work ethics",
      "University and Senmon Gakko statement of purpose (SOP) guidance",
    ],
    nextIntake: "Batches Open Quarterly",
  },
  {
    id: "nat-test-prep",
    country: "japan",
    title: "NAT-TEST Fast-Track Preparation",
    level: "Exam-Specific (5Q / 4Q / 3Q)",
    tagline: "Intensive test-taking strategy and timed mock tests for bi-monthly NAT-TEST sittings.",
    duration: "6 Weeks (60 Hours)",
    schedule: "Weekend Intensives",
    mode: "Hybrid (Onsite + Online)",
    badge: "Fast-Track Exam Pass",
    description:
      "A fast-paced intensive revision program tailored specifically to the format of the Japanese NAT-TEST. Focuses on question pattern mastery, time management techniques, and eliminating common mistakes in Kanji, Vocabulary, Grammar, and Listening.",
    targetExam: "NAT-TEST 5Q, 4Q, or 3Q",
    suitableFor: [
      "Students with upcoming exam registration deadlines",
      "Applicants needing immediate score reports for COE visa intake submissions",
      "Repeat test-takers looking to improve scores in specific sections",
    ],
    syllabusHighlights: [
      "Section-by-section breakdown of the NAT-TEST scoring model",
      "Moji/Goi (Vocabulary/Kanji) high-frequency trap questions",
      "Bunpou/Dokkai (Grammar/Reading) rapid comprehension strategies",
      "Choukai (Listening) audio analysis and answer-sheet strategies",
    ],
    features: [
      "5 full-length simulation tests with instant score analysis",
      "Individual weak-area diagnostic report",
      "Assistance with official exam registration procedures",
    ],
    nextIntake: "Bi-monthly alignment with official test dates",
  },
  {
    id: "ssw-japanese-prep",
    country: "japan",
    title: "SSW Japanese & Specialized Skill Language",
    level: "Vocational & JFT-Basic",
    tagline: "Industry-specific language training for Caregiving, Food Service, Hospitality & Agriculture.",
    duration: "3 - 4 Months (140 Hours)",
    schedule: "Flexible Evening / Weekend Batches",
    mode: "Onsite Classroom",
    badge: "Employment Pathway",
    description:
      "Customized training covering JFT-Basic (Japan Foundation Test) syllabus alongside specialized vocational terminology for Japan's Specified Skilled Worker (SSW 1) sectors, such as Nursing Care (Kaigo), Food Service, and Hospitality.",
    targetExam: "JFT-Basic / JLPT N4 + Industry Skills Test",
    suitableFor: [
      "Candidates targeting SSW visa employment in designated sectors",
      "Caregiving / Nursing diploma holders seeking employment in Japan",
      "Hospitality and restaurant professionals seeking legal employment",
    ],
    syllabusHighlights: [
      "JFT-Basic A2 communicative competence standards",
      "Sector vocabulary: Nursing care terminology, medical hygiene, patient communication",
      "Food service vocabulary: Food safety, customer service etiquette, kitchen equipment",
      "Japanese workplace safety, 5S principles, and Hou-Ren-So communication protocol",
    ],
    features: [
      "Role-playing simulations replicating Japanese workplace scenarios",
      "Technical skill exam syllabus review materials",
      "Pre-departure workplace ethics and cultural adaptability orientation",
    ],
    nextIntake: "Monthly Rolling Batches",
  },
];

export const koreanCourses: Course[] = [
  {
    id: "eps-topik",
    country: "korea",
    title: "EPS-TOPIK Foundation & CBT Intensive",
    level: "Government Employment Pathway",
    tagline: "Rigorous preparation for Sri Lankan candidates seeking employment in South Korea via EPS.",
    duration: "4 Months (180 Hours)",
    schedule: "Daily & Weekend Batches Available",
    mode: "Onsite Classroom",
    badge: "Official EPS Pathway",
    description:
      "A comprehensive training program built strictly around the official HRD Korea EPS-TOPIK standard textbook. Prepares candidates for the Computer-Based Test (CBT) covering reading, listening, industrial terminology, and safety vocabulary.",
    targetExam: "Official EPS-TOPIK Examination (CBT)",
    suitableFor: [
      "Sri Lankan youth between 18 - 39 years seeking legal employment in South Korea",
      "Candidates targeting Manufacturing, Construction, Agriculture, or Service sectors under the E-9 visa",
      "First-time learners wishing to master Hangeul and practical industrial Korean",
    ],
    syllabusHighlights: [
      "Hangeul alphabet reading, writing, and phonetics system",
      "Standard HRD Korea EPS Textbook 1 & 2 complete coverage (60 Chapters)",
      "Industrial vocabulary: workplace tools, factory machinery, safety commands",
      "CBT format practice: 20 Reading questions + 20 Listening questions under timed conditions",
      "Korean workplace regulations, labor rights, and cultural orientation",
    ],
    features: [
      "Dedicated computer lab for authentic CBT simulation exams",
      "Over 2,000 past and model question bank practice",
      "Physical and color-blindness pre-screening guidance",
      "Step-by-step guidance on SLBFE registration and official government schedule",
    ],
    nextIntake: "Enrolling Now for Upcoming Batch",
  },
  {
    id: "topik-1",
    country: "korea",
    title: "TOPIK I (Levels 1 & 2)",
    level: "Beginner to Elementary",
    tagline: "Official proficiency certificate for Korean university admissions and D-4 language training.",
    duration: "3 - 4 Months (150 Hours)",
    schedule: "Weekday & Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Student Visa Essential",
    description:
      "Prepares students for the official Test of Proficiency in Korean (TOPIK I). Covers daily conversational Korean, fundamental grammar structures, social expressions, and reading comprehension suitable for university language institute applications.",
    targetExam: "TOPIK I (Level 1 or Level 2 Certificate)",
    suitableFor: [
      "Students applying for Korean University Language Training (D-4 visa)",
      "Undergraduate applicants aiming to satisfy preliminary admission criteria",
      "Language enthusiasts seeking globally recognized certification",
    ],
    syllabusHighlights: [
      "Hangeul fluency and precise pronunciation drills",
      "Core vocabulary (~1,500 words) and fundamental polite speech endings (-a/o yo, -sumnida)",
      "Daily communication: ordering food, transportation, weather, hobbies, family",
      "Reading comprehension: short paragraphs, advertisements, public notices",
      "Audio listening drills focusing on everyday scenarios in Korea",
    ],
    features: [
      "Official TOPIK I past paper practice and mock tests",
      "Vocabulary flashcards and audio dialogue files",
      "University application advisory session included",
    ],
    nextIntake: "Enrolling Now for Upcoming Month",
  },
  {
    id: "topik-2",
    country: "korea",
    title: "TOPIK II Academic Korean (Levels 3 & 4)",
    level: "Intermediate Academic Level",
    tagline: "Required for direct Korean university degree enrollment and scholarship opportunities.",
    duration: "5 Months (200 Hours)",
    schedule: "Intensive Weekend Batches",
    mode: "Hybrid (Onsite + Online)",
    badge: "Degree & Scholarship Level",
    description:
      "Advanced intermediate training tailored for students wishing to pursue Bachelor's or Master's degrees in South Korea taught in Korean. Focuses on complex reading, listening, and the challenging TOPIK II descriptive writing (geulssugi) section.",
    targetExam: "TOPIK II (Level 3 or Level 4 Certificate)",
    suitableFor: [
      "Students seeking direct admission into Bachelor's or Master's degrees in South Korea (D-2 visa)",
      "Applicants targeting Global Korea Scholarship (GKS) or university tuition waiver scholarships",
      "Professionals planning long-term career transitions in South Korea",
    ],
    syllabusHighlights: [
      "Advanced vocabulary (~4,000 words), idioms, and Hanja-derived Sino-Korean words",
      "Detailed training on the 4 writing tasks: sentence completion and two structured essays",
      "Analytical reading: social issues, Korean culture, science, economics articles",
      "Academic listening: lectures, news broadcasts, formal interviews, debates",
    ],
    features: [
      "Individual essay correction and scoring according to official NIIED rubrics",
      "Mock examinations simulating the exact 180-minute test format",
      "University selection and academic plan writing advisory",
    ],
    nextIntake: "Batches Open Quarterly",
  },
];
