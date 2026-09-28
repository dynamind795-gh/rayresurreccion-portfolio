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

export const foundContacts = [
  { name: "Diana", phone: "+15623350086", displayPhone: "562-335-0086" },
  { name: "Ryan", phone: "+15626039173", displayPhone: "562-603-9173" },
  { name: "Raiden", phone: "+15624050848", displayPhone: "562-405-0848" },
];

// Add only owner-confirmed destinations. Never infer payment IDs from email/phone.
// For Zelle, use a verified enrollment link or an owned page with exact instructions.
export const payments: { name: string; href: string | null }[] = [
  { name: "Cash App", href: "https://cash.app/$RaymondResurreccion5" },
  {
    name: "Zelle",
    // Exact destination decoded from the owner's Zelle QR code.
    href: "https://enroll.zellepay.com/qr-codes/?data=eyJuYW1lIjoiUkFZIFJFU1VSUkVDQ0lPTiIsInRva2VuIjoiNTYyLTIzMy05MTUxIiwiYWN0aW9uIjoicGF5bWVudCJ9",
  },
  { name: "PayPal", href: "https://paypal.me/Raymond958" },
];
