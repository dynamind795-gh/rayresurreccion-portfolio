import Image from "next/image";
import { contact, familyContacts, payments } from "@/lib/contact";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";
const tile = `flex min-h-16 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.035] px-3 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 ${focus}`;

function SocialIcon({ platform }: { platform: "facebook" | "youtube" | "instagram" | "x" }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="shrink-0" fill="currentColor">
      {platform === "facebook" && <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.021 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />}
      {platform === "youtube" && <><rect x="1" y="4" width="22" height="16" rx="5" /><path d="m10 8 6 4-6 4Z" fill="#07111f" /></>}
      {platform === "instagram" && <g fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></g>}
      {platform === "x" && <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />}
    </svg>
  );
}

function ActionIcon({ kind }: { kind: "call" | "text" | "email" }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "call" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z" />}
    {kind === "text" && <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 2 2-6a8.5 8.5 0 1 1 18-4.5Z" />}
    {kind === "email" && <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></>}
  </svg>;
}

const socials = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/rayrez795/", color: "text-blue-400" },
  { label: "YouTube", platform: "youtube", href: "https://www.youtube.com/@dm795g6", color: "text-red-400" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/dm795/", color: "text-pink-400" },
  { label: "X", platform: "x", href: "https://x.com/DM795", color: "text-white" },
] as const;

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

        <section aria-labelledby="social-heading" className="mt-6 rounded-3xl border border-indigo-300/25 bg-indigo-400/[0.07] p-4">
          <h2 id="social-heading" className="text-base font-bold text-white">Social Media</h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {socials.map(({ label, platform, href, color }) => <a key={platform} href={href} className={`${tile} justify-start`}><span className={color}><SocialIcon platform={platform} /></span>{label}</a>)}
          </div>
          <a href="https://www.facebook.com/profile.php?id=61593909278685" className={`mt-2 flex min-h-12 items-center gap-3 rounded-xl px-3 py-2 text-xs text-slate-400 hover:bg-white/5 hover:text-slate-200 ${focus}`}><SocialIcon platform="facebook" /><span>Facebook · Secondary profile<span className="mt-0.5 block text-[11px]">Work in progress</span></span><span aria-hidden="true" className="ml-auto">↗</span></a>
        </section>

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
