import { contact } from "@/lib/contact";

export const dynamic = "force-static";

export function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Resurreccion;Raymond;;;",
    `FN:${contact.name}`,
    `TEL;TYPE=VOICE:${contact.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `URL:${contact.website}`,
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Raymond-Resurreccion.vcf"',
    },
  });
}
