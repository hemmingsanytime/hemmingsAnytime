export interface SeoPage {
    path: string;
    title: string;
    description: string;
    keywords: string;
    image: string;
    changefreq: string;
    priority: string;
    lastModified: string;
    noIndex?: boolean;
}

export interface StructuredData {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    telephone: string;
    email: string;
    description: string;
    contactPoint: Array<{
        "@type": string;
        telephone: string;
        contactType: string;
        email: string;
    }>;
}

export const siteUrl = "https://www.hemmingsanytime.com";

export const defaultSeo: SeoPage = {
    path: "/",
    title: "Hemmings Anytime | Removal, Storage & Cleaning Services",
    description:
        "Hemmings Anytime delivers reliable clearance, cleaning, painting, marine detailing, and aviation detailing services for residential and commercial customers.",
    keywords:
        "clearance services, cleaning services, painting and decor, marine detailing, aviation detailing, removal services, storage services",
    image: "/open-graph-hero-screenshot.png",
    changefreq: "weekly",
    priority: "0.9",
    lastModified: "2026-05-02",
};

export const seoPages: SeoPage[] = [
    defaultSeo,
    {
        path: "/services/clearance",
        title: "Clearance Services | Hemmings Anytime",
        description:
            "Clearance services for homes and businesses, including full space clear-outs, junk removal, and stress-free disposal services.",
        keywords: "clearance, rubbish removal, office clearance, home clearance",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-05-02",
    },
    {
        path: "/services/removal",
        title: "Removal Services | Hemmings Anytime",
        description:
            "Professional removal services for homes and businesses. Full house moves, single item pickup, office relocations, and same-day priority transport.",
        keywords: "removal services, house removals, office removal, furniture removal, man and van, moving services",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-06-21",
    },
    {
        path: "/services/storage",
        title: "Secure Storage Solutions | Hemmings Anytime",
        description:
            "Secure, climate-controlled storage solutions for residential and commercial clients. Short-term and long-term units with 24/7 CCTV monitoring and full insurance.",
        keywords: "storage services, secure storage, self storage, climate controlled storage, warehouse storage, storage units",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-06-21",
    },
    {
        path: "/services/cleaning",
        title: "Cleaning Services | Hemmings Anytime",
        description:
            "Professional cleaning services for residential and commercial properties, from deep cleaning to regular maintenance.",
        keywords: "cleaning services, commercial cleaning, residential cleaning, janitorial services",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-05-02",
    },
    {
        path: "/services/painting-decor",
        title: "Painting & Decor Services | Hemmings Anytime",
        description:
            "High-quality painting and decorating for interiors and exteriors, with skilled workmanship and attention to detail.",
        keywords: "painting and decor, interior painting, exterior painting, property refurbishment",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-05-02",
    },
    {
        path: "/services/marine-detailing",
        title: "Marine Detailing Services | Hemmings Anytime",
        description:
            "Marine detailing services for boats and yachts, including polished finishes, carpet care, and interior restoration.",
        keywords: "marine detailing, boat detailing, yacht cleaning, marine restoration",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-05-02",
    },
    {
        path: "/services/aviation-detailing",
        title: "Aviation Detailing Services | Hemmings Anytime",
        description:
            "Aviation detailing for aircraft interiors and exteriors, designed for pilots, operators, and aircraft owners.",
        keywords: "aviation detailing, aircraft cleaning, plane detailing, cockpit care",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-05-02",
    },
    {
        path: "/services/e-waste-removal",
        title: "Certified E-Waste Removal | Hemmings Anytime",
        description:
            "Certified e-waste removal and disposal services for businesses, institutions, and residential customers. Secure data destruction, WEEE-compliant recycling, and eco-friendly processing.",
        keywords: "e-waste removal, electronic waste disposal, WEEE recycling, data destruction, IT asset disposal, e-waste collection, certified e-waste partner",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-06-22",
    },
    {
        path: "/contact",
        title: "Contact Hemmings Anytime | Get a Free Quote",
        description:
            "Contact Hemmings Anytime for a free quote on clearance, cleaning, painting, storage, marine detailing, or aviation detailing services.",
        keywords: "contact, free quote, service inquiry, Hemmings Anytime",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "monthly",
        priority: "0.7",
        lastModified: "2026-05-02",
    },
    {
        path: "/gallery",
        title: "Gallery | Hemmings Anytime",
        description:
            "Browse our gallery of completed projects for clearance, cleaning, painting, marine detailing, and aviation detailing work.",
        keywords: "gallery, project gallery, before and after, service examples",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "monthly",
        priority: "0.7",
        lastModified: "2026-05-02",
    },
    {
        path: "/privacy-policy",
        title: "Privacy Policy | Hemmings Anytime",
        description:
            "Read Hemmings Anytime's privacy policy to understand how we collect and protect your personal information.",
        keywords: "privacy policy, data protection, GDPR, cookies",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "yearly",
        priority: "0.4",
        lastModified: "2026-05-02",
    },
    {
        path: "/terms-of-service",
        title: "Terms of Service | Hemmings Anytime",
        description:
            "Review the terms of service for Hemmings Anytime, including service expectations, liability limits, and contact terms.",
        keywords: "terms of service, terms and conditions, service agreement, Hemmings Anytime",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "yearly",
        priority: "0.4",
        lastModified: "2026-05-02",
    },
];

export const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hemmings Anytime",
    url: siteUrl,
    telephone: "+447557460940",
    email: "hemmingsanytime@gmail.com",
    description:
        "Hemmings Anytime provides removal, storage, cleaning, painting, aviation detailing, and marine detailing services for residential and commercial clients.",
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+447557460940",
            contactType: "customer service",
            email: "hemmingsanytime@gmail.com",
        },
    ],
};
