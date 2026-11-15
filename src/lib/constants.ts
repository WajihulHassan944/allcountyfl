export const BUSINESS = {
  name: "All County Construction Services, Inc.",
  shortName: "All County Construction",
  phoneDisplay: "(863) 260-8955",
  phoneHref: "tel:+18632608955",
  email: "angelica@allcountyfl.com",
  emailHref: "mailto:angelica@allcountyfl.com",
  serviceArea: "Central Florida, including Orlando and the surrounding counties",
  locationLabel: "Central Florida, USA",
  addressRegion: "FL",
  url: "https://allcountyfl.com",
} as const;

// Pages on the main WordPress site (allcountyfl.com).
export const MAIN_SITE = {
  home: "https://allcountyfl.com/",
  about: "https://allcountyfl.com/about-us/",
  services: "https://allcountyfl.com/services/",
  testimonials: "https://allcountyfl.com/testimonials/",
  contact: "https://allcountyfl.com/contact-us/",
  projects: "https://allcountyfl.com/project/",
  privacy: "https://allcountyfl.com/privacy-policy/",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61567198422479",
  instagram: "https://www.instagram.com/allcountyconstructionfl/",
} as const;

// Mirrors the main site's menu so both feel like one website.
export const NAV_LINKS = [
  { label: "Home", href: MAIN_SITE.home },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Services", href: MAIN_SITE.services },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { label: "Project", href: MAIN_SITE.projects },
  { label: "Contact Us", href: MAIN_SITE.contact },
] as const;
