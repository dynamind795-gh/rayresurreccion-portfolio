import type { Metadata } from "next";
import ContactLanding from "@/components/ContactLanding";

export const metadata: Metadata = {
  title: "Connect with Ray | Raymond Resurreccion",
  description: "Save Ray’s contact details, call, text, or connect on social media.",
  alternates: { canonical: "https://rayresurreccion.com/contact" },
};

export default function ContactPage() {
  return <ContactLanding />;
}
