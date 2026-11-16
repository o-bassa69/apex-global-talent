import { siteConfig } from "@/data/siteConfig";

const SITE_URL = "https://apexglobaltalentpvtltd.com";
const ORG_ID = `${SITE_URL}/#organization`;
const LOGO_URL = `${SITE_URL}/assets/logo.png`;

/**
 * schema.org structured data (JSON-LD).
 *
 * Google uses `Organization` + `logo` to attach a brand logo to the entity and
 * `WebSite` to confirm the site name shown in search results. Keep the image
 * URLs absolute, publicly crawlable and free of query strings.
 * Validate with: https://search.google.com/test/rich-results
 */
export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": ORG_ID,
        name: "APEX GLOBAL TALENT (PVT) LTD",
        legalName: siteConfig.company.legalName,
        alternateName: ["Apex Global Talent", "APEX Global Talent"],
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: LOGO_URL,
          contentUrl: LOGO_URL,
          width: 512,
          height: 512,
          caption: "APEX Global Talent logo",
        },
        image: { "@id": `${SITE_URL}/#logo` },
        description: siteConfig.company.description,
        slogan: siteConfig.company.tagline,
        email: siteConfig.contact.emailPrimary,
        telephone: siteConfig.contact.phonePrimaryHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: "469, Athurugiriya Road",
          addressLocality: siteConfig.contact.city,
          addressRegion: siteConfig.contact.province,
          postalCode: siteConfig.contact.postalCode,
          addressCountry: "LK",
        },
        areaServed: [
          { "@type": "Country", name: "Sri Lanka" },
          { "@type": "Country", name: "Japan" },
          { "@type": "Country", name: "South Korea" },
        ],
        knowsLanguage: ["en", "si", "ja", "ko"],
        sameAs: Object.values(siteConfig.contact.social),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "17:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phonePrimaryHref,
            contactType: "customer service",
            email: siteConfig.contact.emailPrimary,
            availableLanguage: ["English", "Sinhala"],
            areaServed: "LK",
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phoneSecondaryHref,
            contactType: "admissions",
            email: siteConfig.contact.emailAdmissions,
            availableLanguage: ["English", "Sinhala"],
            areaServed: "LK",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "APEX GLOBAL TALENT",
        alternateName: "Apex Global Talent",
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe: no user input is interpolated here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
