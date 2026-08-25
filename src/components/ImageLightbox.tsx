"use client";

import { ReactNode, useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

export default function ImageLightbox({
  src,
  alt,
  children,
  className = "",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in text-left ${className}`}
        aria-label={`Enlarge image: ${alt}`}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-2xl text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:right-7 sm:top-7"
            aria-label="Close enlarged image"
          >
            ×
          </button>

          <div className="flex max-h-[92vh] max-w-[96vw] flex-col items-center gap-3">
            <img
              src={src}
              alt={alt}
              className="max-h-[84vh] max-w-[96vw] rounded-xl object-contain shadow-2xl"
            />
            <p className="max-w-4xl text-center text-sm text-slate-300">{alt}</p>
            <p className="font-mono text-[11px] tracking-widest text-slate-500">
              CLICK OUTSIDE OR PRESS ESC TO CLOSE
            </p>
          </div>
        </div>
      )}
    </>
  );
}
