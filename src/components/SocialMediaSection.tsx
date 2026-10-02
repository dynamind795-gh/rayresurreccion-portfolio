"use client";

import { useState, type FormEvent } from "react";

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

const socials = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/rayrez795/", color: "text-blue-400" },
  { label: "YouTube", platform: "youtube", href: "https://www.youtube.com/@dm795g6", color: "text-red-400" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/dm795/", color: "text-pink-400" },
  { label: "X", platform: "x", href: "https://x.com/DM795", color: "text-white" },
] as const;

export default function SocialMediaSection() {
  const [accessWord, setAccessWord] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);

  function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (accessWord.trim().toLowerCase() === "sme") {
      setUnlocked(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  }

  return (
    <details className="mt-6 rounded-3xl border border-indigo-300/25 bg-indigo-400/[0.07] p-4">
      <summary className={`min-h-12 cursor-pointer py-2 text-base font-bold text-white ${focus}`}>Social Media</summary>
      {unlocked ? (
        <>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {socials.map(({ label, platform, href, color }) => <a key={platform} href={href} className={`${tile} justify-start`}><span className={color}><SocialIcon platform={platform} /></span>{label}</a>)}
          </div>
          <a href="https://www.facebook.com/profile.php?id=61593909278685" className={`mt-2 flex min-h-12 items-center gap-3 rounded-xl px-3 py-2 text-xs text-slate-400 hover:bg-white/5 hover:text-slate-200 ${focus}`}><SocialIcon platform="facebook" /><span>Facebook · Secondary profile<span className="mt-0.5 block text-[11px]">Work in progress</span></span><span aria-hidden="true" className="ml-auto">↗</span></a>
        </>
      ) : (
        <form onSubmit={unlock} className="mt-3">
          <label htmlFor="social-access-word" className="block text-sm text-slate-300">Enter the access word to view social links</label>
          <div className="mt-2 flex gap-2">
            <input
              id="social-access-word"
              type="password"
              value={accessWord}
              onChange={(event) => { setAccessWord(event.target.value); setShowError(false); }}
              autoComplete="off"
              aria-describedby={showError ? "social-access-error" : undefined}
              className={`min-h-12 min-w-0 flex-1 rounded-xl border border-white/15 bg-slate-950 px-3 text-base text-white placeholder:text-slate-500 ${focus}`}
              placeholder="Access word"
            />
            <button type="submit" className={`min-h-12 rounded-xl bg-cyan-300 px-4 text-sm font-bold text-slate-950 hover:bg-cyan-200 ${focus}`}>Open</button>
          </div>
          {showError && <p id="social-access-error" role="alert" className="mt-2 text-sm text-rose-300">That word didn’t match. Try again.</p>}
        </form>
      )}
    </details>
  );
}
