export interface CandidateStory {
  id: string;
  name: string;
  homeDistrict: string;
  pathway: string;
  destination: "Japan" | "South Korea";
  program: string;
  focusArea: string;
  experienceNotes: string;
  statusBadge: string;
}

export const candidateStories: CandidateStory[] = [
  {
    id: "story-1",
    name: "Kavindu P.",
    homeDistrict: "Gampaha",
    pathway: "Student Visa (Tokyo)",
    destination: "Japan",
    program: "JLPT N5 & N4 Comprehensive",
    focusArea: "Japanese Language Institute & Engineering Pathway",
    experienceNotes:
      "The structured Kanji drills and mock interview coaching at Apex Global Talent gave me the confidence I needed. The counselors were completely transparent about living expenses and student visa documentation from day one.",
    statusBadge: "Enrolled in Tokyo Language Academy",
  },
  {
    id: "story-2",
    name: "Nimanthi S.",
    homeDistrict: "Kandy",
    pathway: "SSW Nursing Care (Kaigo)",
    destination: "Japan",
    program: "JLPT N4 + Specialized Kaigo Terminology",
    focusArea: "Healthcare & Specified Skilled Worker Program",
    experienceNotes:
      "Learning medical and elder-care Japanese vocabulary was challenging, but the tailored course materials and patient instructors made all the difference in clearing the skill evaluation exams.",
    statusBadge: "SSW Skills Cleared & Documented",
  },
  {
    id: "story-3",
    name: "Roshan D.",
    homeDistrict: "Kurunegala",
    pathway: "EPS-TOPIK E-9 Employment",
    destination: "South Korea",
    program: "EPS-TOPIK CBT Master Batch",
    focusArea: "Manufacturing & Industrial Safety Korean",
    experienceNotes:
      "The computer lab simulation tests accurately mirrored the real CBT exam. Apex Global Talent's emphasis on official HRD Korea textbooks allowed me to score highly on both listening and reading.",
    statusBadge: "EPS-TOPIK Roster Qualified",
  },
  {
    id: "story-4",
    name: "Tharushi M.",
    homeDistrict: "Colombo",
    pathway: "D-2 Degree Program (Seoul)",
    destination: "South Korea",
    program: "TOPIK I & II Academic Writing",
    focusArea: "Undergraduate Business Administration",
    experienceNotes:
      "Preparing study plans and consular attestations can be intimidating, but the team's meticulous checklist and essay feedback ensured my university admission package was thoroughly vetted.",
    statusBadge: "Accepted at Seoul University Program",
  },
];
