import Image from "next/image";
import { contact, familyContacts, payments } from "@/lib/contact";
import SocialMediaSection from "@/components/SocialMediaSection";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";
const tile = `flex min-h-16 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.035] px-3 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 ${focus}`;

function ActionIcon({ kind }: { kind: "call" | "text" | "email" }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "call" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z" />}
    {kind === "text" && <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 2 2-6a8.5 8.5 0 1 1 18-4.5Z" />}
    {kind === "email" && <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></>}
  </svg>;
}

export default function ContactLanding({ showFamily = true }: { showFamily?: boolean }) {
  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-6 text-slate-100 selection:bg-cyan-300 selection:text-slate-950 sm:py-10">
      <div className="mx-auto max-w-md">
        <header className="flex items-center gap-4">
          <Image src="/images/about/raymond-professional-portrait.jpg" alt="Ray Resurreccion" width={64} height={64} className="h-16 w-16 rounded-2xl border border-cyan-300/30 object-cover object-top" />
          <div><p className="font-mono text-[10px] tracking-[0.2em] text-cyan-300">LET&apos;S CONNECT</p><h1 className="mt-1 text-2xl font-black tracking-tight text-white">Ray Resurreccion</h1><p className="mt-1 text-xs text-slate-400">Data Analytics · BI · Data Engineering</p></div>
        </header>

        <nav aria-label="Quick contact" className="mt-5 grid gap-3">
          <a href="/contact/vcard" download="Raymond-Resurreccion.vcf" className={`flex min-h-16 items-center justify-between gap-3 rounded-2xl bg-cyan-300 px-5 py-3 text-slate-950 hover:bg-cyan-200 ${focus}`}>
            <span><span className="block font-bold">Save Contact</span><span className="mt-1 block text-xs">Name, phone, email &amp; website</span></span><span aria-hidden="true" className="text-xl">↓</span>
          </a>
          <div className="grid grid-cols-3 gap-2">
            <a href="tel:+15626740039" className={`${tile} flex-col`}><ActionIcon kind="call" />Call</a>
            <a href="sms:+15626740039" className={`${tile} flex-col`}><ActionIcon kind="text" />Text</a>
            <a href="mailto:hello@rayresurreccion.com" className={`${tile} flex-col`}><ActionIcon kind="email" />Email</a>
          </div>
        </nav>

        <SocialMediaSection />

        <section aria-labelledby="professional-heading" className="mt-5">
          <h2 id="professional-heading" className="text-sm font-semibold text-slate-300">Portfolio / Professional</h2>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <a href={contact.website} className={tile}>Portfolio</a>
            <a href={contact.linkedin} className={tile}>LinkedIn</a>
            <a href={contact.github} className={tile}>GitHub</a>
          </div>
        </section>

        <section aria-labelledby="payments-heading" className="mt-5">
          <h2 id="payments-heading" className="text-sm font-semibold text-slate-300">Payments</h2>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {payments.map(({ name, href }) => href ? <a key={name} href={href} className={tile}>{name}</a> : <button key={name} disabled className={tile}>{name}<span className="text-xs">Unavailable</span></button>)}
          </div>
        </section>

        {showFamily && <details id="call-if-found" className="mt-5 scroll-mt-4 rounded-2xl border border-white/10 px-4">
          <summary className={`min-h-12 cursor-pointer py-4 text-sm font-semibold text-slate-400 ${focus}`}>Family emergency contacts / Call if found</summary>
          <div className="grid gap-2 pb-4">{familyContacts.map(({ name, phone, displayPhone }) => <a key={name} href={`tel:${phone}`} className={`${tile} justify-between`}><span>Call {name}</span><span className="text-xs text-slate-400">{displayPhone}</span></a>)}</div>
        </details>}
      </div>
    </main>
  );
}
