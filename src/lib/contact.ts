export const contact = {
  name: "Raymond Resurreccion",
  email: "hello@rayresurreccion.com",
  // Published in public/Raymond_Resurreccion_Resume.pdf.
  phone: "+15626740039",
  website: "https://rayresurreccion.com",
  linkedin: "https://www.linkedin.com/in/rayresurreccion/",
  github: "https://github.com/dynamind795-gh",
  resume: "/Raymond_Resurreccion_Resume.pdf",
};

// Add only owner-confirmed destinations. Never infer payment IDs from email/phone.
// For Zelle, use a verified enrollment link or an owned page with exact instructions.
export const payments: { name: string; href: string | null }[] = [
  { name: "Cash App", href: "https://cash.app/$RaymondResurreccion5" },
  { name: "Zelle", href: null },
  { name: "PayPal", href: "https://paypal.me/Raymond958" },
];
