export const BASE_URL = import.meta.env.BASE_URL;
export const asset = (name) => `${BASE_URL}assets/${name}`;

export const URLS = {
  home: "/",
  specialisms: "/#specialisms",
  technology: "/#specialisms",
  finance: "/#specialisms",
  legal: "/#specialisms",
  engineering: "/#specialisms",
  healthcare: "/#specialisms",
  manufacturing: "/#specialisms",
  jobs: "/#jobs",
  employers: "/#employers",
  values: "/#values",
  contact: "/contact",
  candidates: "/cv-upload",
  team: "/team",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  linkedin: "https://www.linkedin.com/company/flockinrecruitment/",
  facebook: "https://www.facebook.com/flockinrecruitment",
};

export const navItems = [
  {
    id: "specialisms",
    label: "Specialisms",
    href: URLS.specialisms,
    children: [
      { label: "Technology", href: URLS.technology },
      { label: "Finance", href: URLS.finance },
      { label: "Legal", href: URLS.legal },
      { label: "Engineering", href: URLS.engineering },
      { label: "Healthcare", href: URLS.healthcare },
      { label: "Manufacturing", href: URLS.manufacturing },
    ],
  },
  { id: "jobs", label: "Job Search", href: URLS.jobs },
  { id: "employers", label: "For Employers", href: URLS.employers },
  { id: "values", label: "Values", href: URLS.values },
  { id: "contact", label: "Contact", href: URLS.contact },
];

export const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxG9rX94Bex_cKolDKiFSnkKGOgfTBOCqxDIeetzWW0MC3buU6LFIkTSXPYCRHUVGXulw/exec";
