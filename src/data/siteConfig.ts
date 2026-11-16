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

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
}

export interface ContactInfo {
  /** Landline shown to visitors, formatted as dialled locally (e.g. `011 288 2989`). */
  phonePrimary: string;
  /** Same landline in international format for `tel:` links (e.g. `+94112882989`). */
  phonePrimaryHref: string;
  /** Mobile / WhatsApp number shown to visitors (e.g. `070 788 2989`). */
  phoneSecondary: string;
  /** Same mobile number in international format for `tel:` links (e.g. `+94707882989`). */
  phoneSecondaryHref: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  emailPrimary: string;
  emailAdmissions: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  openingHours: OpeningHours[];
  social: SocialLinks;
  googleMapsEmbedUrl: string;
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
    phonePrimary: "011 288 2989", // landline (displayed exactly as dialed locally)
    phonePrimaryHref: "+94112882989", // international format for tel: links
    phoneSecondary: "070 788 2989", // mobile / WhatsApp (displayed locally)
    phoneSecondaryHref: "+94707882989", // international format for tel: links
    whatsappNumber: "94707882989", // formatted for wa.me links
    whatsappDisplay: "070 788 2989",
    whatsappDefaultMessage: "Hello Apex Global Talent, I would like to inquire about Japanese/Korean language courses and visa processing.",
    emailPrimary: "info@apexglobaltalentpvtltd.com",
    emailAdmissions: "info@apexglobaltalentpvtltd.com",
    address: "469, Athurugiriya Road, Malabe",
    city: "Malabe",
    province: "Western Province",
    postalCode: "10115",
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
      "https://maps.google.com/maps?q=469,+Athurugiriya+Road,+Malabe,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed",
  } satisfies ContactInfo,
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
