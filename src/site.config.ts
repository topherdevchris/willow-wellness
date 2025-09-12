// src/site.config.ts
export const SITE = {
  name: "Willow Wellness",
  tagline: "A supportive space for your well-being.", //"Compassionate counseling for your well-being"
  bookCta: "Book a Session",
  acceptingNewPatients: false, // keep modal behavior by default
  contact: {
    email: "hello@example.com",
    phone: "(555) 123-4567",
  },
  hero: {
    alt: "Serene willow tree in sunlight",
  },
  images: {
    logoAlt: "Business logo",
    profileAlt: "Profile photo of the practitioner",
  },
  profileShape: "circle", // options: "circle" | "rounded",
  modal: {
    title: "Not currently accepting new patients",
    message: "Please check back soon or reach out if you have questions.",
    ok: "OK",
  },
  footer: {
    credit: "Site by TopherDev Studio",
  },
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#specialties" },   // generic term for template
  { label: "Pricing & Insurance", href: "#insurance" },
  { label: "Contact", href: "#contact" },
];
