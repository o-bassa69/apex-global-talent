export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const siteConfig = {
  company: {
    legalName: "APEX GLOBAL TALENT PVT LTD",
    shortName: "Apex Global Talent",
    tagline: "Your Gateway to Japan & Korea",
    subTagline: "Learn. Prepare. Apply. Build Your Future.",
    description:
      "Apex Global Talent Pvt Ltd is a premier educational consultancy in Sri Lanka specializing in Japanese and Korean language education, student admissions, and visa advisory services.",
    country: "Sri Lanka",
    destinations: ["Japan", "South Korea"],
  },
  contact: {
    // Easily update actual values here later
    phonePrimary: "+94 71 572 2071",
    phoneSecondary: "+94 71 572 2071",
    whatsappNumber: "94715722071", // formatted for wa.me links
    whatsappDisplay: "+94 71 572 2071",
    whatsappDefaultMessage: "Hello Apex Global Talent, I would like to inquire about Japanese/Korean language courses and visa processing.",
    emailPrimary: "info@apexglobaltalent.lk",
    emailAdmissions: "admissions@apexglobaltalent.lk",
    address: "Maharagama, Sri Lanka",
    addressPlaceholderNote: "[Placeholder: Update actual office premises address in src/data/siteConfig.ts]",
    city: "Maharagama",
    province: "Western Province",
    postalCode: "00500",
    openingHours: [
      { days: "Monday – Friday", hours: "8:30 AM – 5:30 PM" },
      { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
      { days: "Sunday & Poya Days", hours: "Closed (WhatsApp Online Support)" },
    ],
    social: {
      facebook: "https://facebook.com/apexglobaltalent",
      instagram: "https://instagram.com/apexglobaltalent",
      linkedin: "https://linkedin.com/company/apexglobaltalent",
      youtube: "https://youtube.com/@apexglobaltalent",
      tiktok: "https://tiktok.com/@apexglobaltalent",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81529707421!2d79.82118595!3d6.9218335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",
  },
  disclaimer: {
    title: "Legal & Regulatory Compliance Disclaimer",
    text: "APEX GLOBAL TALENT PVT LTD is a registered private educational consultancy and language training institute in Sri Lanka. We offer language preparation and visa documentation guidance. We are not an embassy, consulate, or government migration department. Final decisions regarding visa issuance, university admissions, and employment permits reside solely with the Immigration Services Agency of Japan, the Ministry of Justice of the Republic of Korea, the Sri Lanka Foreign Employment Agency, and respective authorized institutions. We do not make promises or guarantees regarding visa approval, employment placement, or university admission.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Japan",
      href: "/japan",
      children: [
        { label: "Japan Gateway Overview", href: "/japan", description: "Complete introduction to studying and working in Japan" },
        { label: "Japanese Language Courses", href: "/japanese-courses", description: "JLPT N5, N4, N3, NAT-TEST & SSW language prep" },
        { label: "Japan Visa Services", href: "/japan-visa", description: "Student, SSW, TITP & Specialist visa guidance" },
        { label: "Study in Japan", href: "/study-in-japan", description: "Language schools, vocational colleges & university paths" },
      ],
    },
    {
      label: "Korea",
      href: "/korea",
      children: [
        { label: "Korea Gateway Overview", href: "/korea", description: "Complete guide to Korean education and employment pathways" },
        { label: "Korean Language Courses", href: "/korean-courses", description: "EPS-TOPIK CBT preparation & TOPIK I/II curriculum" },
        { label: "Korea Visa Services", href: "/korea-visa", description: "D-2 Degree, D-4 Language, E-9 EPS & E-7 visa support" },
        { label: "Study in Korea", href: "/study-in-korea", description: "Language institutes, bachelor degrees & living in South Korea" },
      ],
    },
    { label: "Work Opportunities", href: "/work-opportunities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};
