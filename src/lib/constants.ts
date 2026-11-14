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

// Pages on the main WordPress site (allcountyfl.com). Uses ?page_id= links
// because the pretty permalinks (/services/ etc.) currently return 404 there.
export const MAIN_SITE = {
  home: "https://allcountyfl.com/",
  about: "https://allcountyfl.com/?page_id=14",
  services: "https://allcountyfl.com/?page_id=16",
  testimonials: "https://allcountyfl.com/?page_id=18",
  contact: "https://allcountyfl.com/?page_id=25",
  projects: "https://allcountyfl.com/?page_id=172",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61567198422479",
  instagram: "https://www.instagram.com/allcountyconstructionfl/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: MAIN_SITE.home },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Services", href: MAIN_SITE.services },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { label: "Projects", href: MAIN_SITE.projects },
  { label: "Testimonials", href: MAIN_SITE.testimonials },
  { label: "Contact Us", href: MAIN_SITE.contact },
] as const;
