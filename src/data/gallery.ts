export interface GalleryItem {
  id: string;
  title: string;
  category: "classroom" | "cultural" | "orientation" | "counseling";
  categoryLabel: string;
  destinationTag?: "Japan" | "Korea" | "Both";
  description: string;
  dateTag: string;
  aspectRatio: "horizontal" | "square" | "tall";
  accentColor: string;
  iconName: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "JLPT N5 Interactive Kanji Workshop",
    category: "classroom",
    categoryLabel: "Classroom Training",
    destinationTag: "Japan",
    description: "Students actively practicing stroke order and radical recognition during our weekly interactive Kanji workshop.",
    dateTag: "Academic Session",
    aspectRatio: "horizontal",
    accentColor: "from-rose-500/20 to-red-600/20",
    iconName: "Languages",
  },
  {
    id: "gal-2",
    title: "EPS-TOPIK Computer-Based Test Simulation",
    category: "classroom",
    categoryLabel: "Classroom Training",
    destinationTag: "Korea",
    description: "Candidates undertaking timed CBT mock tests in our modern digital testing room to simulate the official examination environment.",
    dateTag: "Exam Preparation",
    aspectRatio: "horizontal",
    accentColor: "from-blue-500/20 to-indigo-600/20",
    iconName: "Monitor",
  },
  {
    id: "gal-3",
    title: "Traditional Japanese Tea & Cultural Day",
    category: "cultural",
    categoryLabel: "Cultural Orientation",
    destinationTag: "Japan",
    description: "Immersive cultural day introducing students to Japanese dining etiquette, bowings (Reigi), and everyday social norms.",
    dateTag: "Cultural Workshop",
    aspectRatio: "tall",
    accentColor: "from-amber-500/20 to-rose-600/20",
    iconName: "Sparkles",
  },
  {
    id: "gal-4",
    title: "Hangeul Calligraphy & Korean Culture Seminar",
    category: "cultural",
    categoryLabel: "Cultural Orientation",
    destinationTag: "Korea",
    description: "Hands-on Korean calligraphy and cultural nuances seminar exploring traditional etiquette and modern workplace dynamics.",
    dateTag: "Cultural Workshop",
    aspectRatio: "square",
    accentColor: "from-cyan-500/20 to-blue-600/20",
    iconName: "Feather",
  },
  {
    id: "gal-5",
    title: "Pre-Departure Briefing: Living & Studying in Tokyo",
    category: "orientation",
    categoryLabel: "Pre-Departure",
    destinationTag: "Japan",
    description: "Comprehensive guidance for upcoming intakes covering airport customs, residence card (Zairyu Card) registration, and dorm life.",
    dateTag: "Pre-Departure Intake",
    aspectRatio: "horizontal",
    accentColor: "from-red-500/20 to-slate-700/20",
    iconName: "PlaneTakeoff",
  },
  {
    id: "gal-6",
    title: "Korean University Admission & Visa Briefing",
    category: "orientation",
    categoryLabel: "Pre-Departure",
    destinationTag: "Korea",
    description: "Detailed session explaining student banking, alien registration (ARC), and health insurance coverage in South Korea.",
    dateTag: "Pre-Departure Intake",
    aspectRatio: "horizontal",
    accentColor: "from-blue-500/20 to-slate-700/20",
    iconName: "GraduationCap",
  },
  {
    id: "gal-7",
    title: "One-on-One Student & Parent Counseling",
    category: "counseling",
    categoryLabel: "Consultation Sessions",
    destinationTag: "Both",
    description: "Transparent academic counseling session reviewing prospective intake timelines, financial sponsorship records, and career goals.",
    dateTag: "Advisory Desk",
    aspectRatio: "square",
    accentColor: "from-emerald-500/20 to-teal-600/20",
    iconName: "Users",
  },
  {
    id: "gal-8",
    title: "SSW Specific Vocational Terminology Lab",
    category: "classroom",
    categoryLabel: "Classroom Training",
    destinationTag: "Japan",
    description: "Practical language drills for nursing care (Kaigo) and food service sectors emphasizing workplace safety protocols.",
    dateTag: "Skills Training",
    aspectRatio: "tall",
    accentColor: "from-orange-500/20 to-red-600/20",
    iconName: "Briefcase",
  },
];
