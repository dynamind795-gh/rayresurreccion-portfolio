import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact, payments } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Connect with Ray | Raymond Resurreccion",
  description: "Save Ray’s contact details, explore his work, or get in touch.",
  alternates: { canonical: `${contact.website}/contact` },
};

const actionClass = "flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-10 text-slate-100 selection:bg-cyan-300 selection:text-slate-950 sm:py-14">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <Image src="/images/about/raymond-professional-portrait.jpg" alt="Ray Resurreccion" width={88} height={88} className="mx-auto h-22 w-22 rounded-3xl border border-cyan-300/30 object-cover object-top" />
          <p className="mt-6 font-mono text-xs tracking-[0.22em] text-cyan-300">LET&apos;S CONNECT</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Ray Resurreccion</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">Data Analytics · Business Intelligence<br />SQL · Data Engineering</p>
          <p className="mt-4 text-sm text-slate-300">Good to meet you. Let&apos;s stay in touch.</p>
        </header>

        <nav aria-label="Contact and profile links" className="mt-8 grid gap-3">
          <a href="/contact/vcard" download="Raymond-Resurreccion.vcf" className="flex min-h-18 items-center justify-between gap-3 rounded-2xl bg-cyan-300 px-5 py-4 text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            <span><span className="block font-bold">Save Contact</span><span className="mt-1 block text-xs">Name, phone, email &amp; profile links</span></span>
            <span aria-hidden="true" className="text-xl">↓</span>
          </a>
          <a href="/contact/phone.vcf" download="Raymond-Resurreccion-Phone.vcf" className={actionClass}>
            <span>Save Phone Number<span className="mt-1 block text-xs font-normal text-slate-400">562-674-0039 · Name and phone only</span></span>
            <span aria-hidden="true">↓</span>
          </a>
          <a href={`mailto:${contact.email}`} className={actionClass}><span>Email<span className="mt-1 block break-all text-xs font-normal text-slate-400">{contact.email}</span></span><span aria-hidden="true">↗</span></a>
          <Link href="/" className={actionClass}><span>Portfolio / Home</span><span aria-hidden="true">↗</span></Link>
          <div className="grid grid-cols-2 gap-3">
            <a href={contact.linkedin} className={actionClass}>LinkedIn<span aria-hidden="true">↗</span></a>
            <a href={contact.github} className={actionClass}>GitHub<span aria-hidden="true">↗</span></a>
          </div>
          <a href={contact.resume} className={actionClass}><span>View Resume</span><span className="font-mono text-xs text-slate-400">PDF ↗</span></a>
        </nav>

        <section aria-labelledby="payments-heading" className="mt-8 border-t border-white/10 pt-6">
          <h2 id="payments-heading" className="font-mono text-xs tracking-[0.18em] text-slate-400">PAYMENTS</h2>
          <div className="mt-3 grid gap-3">
            {payments.map(({ name, href }) => href ? (
              <a key={name} href={href} className={actionClass}>{name}<span aria-hidden="true">↗</span></a>
            ) : (
              <button key={name} type="button" disabled className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border border-white/10 px-5 py-4 text-left text-sm text-slate-400 disabled:cursor-not-allowed">
                <span>{name}</span><span className="text-xs">Not available yet</span>
              </button>
            ))}
          </div>
        </section>
        <footer className="mt-8 text-center"><Link href="/" className="inline-flex min-h-11 items-center text-xs text-slate-400 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-300">rayresurreccion.com</Link></footer>
      </div>
    </main>
  );
}
