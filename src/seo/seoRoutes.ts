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
        path: "/services",
        title: "House Clearance, Removals & Storage in East Sussex | Hemmings Anytime",
        description:
            "Hemmings Anytime clears, moves, and stores homes and businesses across East Sussex. One team. One call. Fast, fair quotes.",
        keywords:
            "House Clearance East Sussex, House Removals East Sussex, Storage East Sussex, Probate Clearance East Sussex, Office Clearance East Sussex, Waste Clearance East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.9",
        lastModified: "2026-09-04",
    },
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
        path: "/services/waste-removal",
        title: "Certified Waste Removal | Hemmings Anytime",
        description:
            "Licensed waste removal services for commercial, industrial, hazardous, and household waste. WEEE recycling, secure data destruction, construction debris clearance, and eco-friendly disposal.",
        keywords: "waste removal, hazardous waste disposal, commercial waste collection, e-waste recycling, WEEE disposal, construction waste removal, industrial waste, house clearance, licensed waste carrier",
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
    {
        path: "/areas/brighton",
        title: "Brighton Removal, Cleaning & Storage Services | Hemmings Anytime",
        description:
            "Trusted by 230+ Brighton households. Professional removals, end-of-tenancy cleaning, secure storage, and packing services across Brighton, Hove & East Sussex. Same team, start to finish.",
        keywords:
            "Brighton removals, Brighton man and van, Brighton end of tenancy cleaning, Brighton storage, Brighton moving company, Hove removals, Brighton house clearance, Brighton office removals",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-06-26",
    },
    {
        path: "/services/clearance/house-clearance-east-sussex",
        title: "House Clearance East Sussex | Hemmings Anytime",
        description:
            "Reliable house clearance in East Sussex for furniture, waste and unwanted items. Get professional property clearance. Contact us today.",
        keywords:
            "House Clearance East Sussex, property clearance East Sussex, furniture removal, end of tenancy clearance East Sussex, waste removal",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-08-13",
    },
    {
        path: "/services/removal/house-removals-east-sussex",
        title: "House Removals East Sussex | Hemmings Anytime",
        description:
            "Reliable house removals East Sussex for homes, flats and furniture moves. Book trusted man and van removals with Hemmings Anytime today.",
        keywords:
            "House Removals East Sussex, man and van removals East Sussex, flat removals, furniture removals, house removal cost East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-08-13",
    },
    {
        path: "/services/clearance/probate-clearance-east-sussex",
        title: "Probate Clearance East Sussex | Hemmings Anytime",
        description:
            "Caring, reliable probate clearance across East Sussex from Hemmings Anytime. Careful sorting, honest pricing and a free quote for executors and families.",
        keywords:
            "Probate Clearance East Sussex, estate clearance East Sussex, probate house clearance, executor property clearance, probate waste disposal",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/services/clearance/office-clearance-east-sussex",
        title: "Office Clearance East Sussex – 5★ Rated | Hemmings Anytime",
        description:
            "Office clearance East Sussex businesses trust. Hemmings Anytime offers same-day commercial clearance across Brighton, Hastings & more. Get a free quote!",
        keywords:
            "Office Clearance East Sussex, commercial clearance East Sussex, office furniture removal, workplace clear-out, WEEE computer recycling",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/services/removal/office-removals-east-sussex",
        title: "Office Removals East Sussex – Fast | Hemmings Anytime",
        description:
            "Need a removal company East Sussex wide? Hemmings Anytime offers fast, insured office removals East Sussex businesses trust. Get a free quote now!",
        keywords:
            "Office Removals East Sussex, removal company East Sussex, commercial office relocation, office moving service, business movers East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/services/clearance/rubbish-clearance-east-sussex",
        title: "Rubbish Clearance East Sussex – 5★ Rated | Hemmings",
        description:
            "Rubbish clearance East Sussex for homes and businesses. Reliable waste removal, garden clearance and responsible disposal. Get a free quote today!",
        keywords:
            "Rubbish Clearance East Sussex, waste clearance East Sussex, garden clearance East Sussex, rubbish removal, bulky waste collection",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/services/storage/removal-and-storage-east-sussex",
        title: "Removal and Storage East Sussex: 5 Secure Moving Options",
        description:
            "Need removal and storage East Sussex? Move your furniture and belongings with secure storage, careful handling and reliable local support. Get a free quote.",
        keywords:
            "Removal and Storage East Sussex, removal and storage, secure storage East Sussex, house removals and storage, same day removals East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/services/removal/furniture-removal-east-sussex",
        title: "Furniture Removal East Sussex: 24/7 Expert Service",
        description:
            "Need furniture removal East Sussex? Get expert help removing sofas, beds, tables and unwanted furniture. Fast, careful service with free quotes.",
        keywords:
            "Furniture Removal East Sussex, sofa removal East Sussex, furniture disposal, bulky item collection, bed removal East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.8",
        lastModified: "2026-09-04",
    },
    {
        path: "/areas/east-sussex",
        title: "House Clearance, Removals & Storage in East Sussex | Hemmings Anytime",
        description:
            "Hemmings Anytime clears, moves, and stores homes and businesses across East Sussex. One team. One call. Fast, fair quotes.",
        keywords:
            "East Sussex removals, East Sussex clearance, East Sussex storage, House Clearance East Sussex, House Removals East Sussex",
        image: "/open-graph-hero-screenshot.png",
        changefreq: "weekly",
        priority: "0.9",
        lastModified: "2026-09-05",
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
