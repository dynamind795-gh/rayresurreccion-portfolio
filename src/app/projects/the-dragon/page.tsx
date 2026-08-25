import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";

const capabilities = [
  "Menu-driven navigation",
  "Electronic mail access",
  "FTP and Telnet tools",
  "Lynx web access",
  "File utilities",
  "User information tools",
  "Online library access",
  "Help and guided navigation",
];

const lessons = [
  {
    number: "01",
    title: "Start with the user",
    text: "The project began with a usability problem: powerful Internet services existed, but students needed a simpler way to reach and understand them.",
  },
  {
    number: "02",
    title: "Learn what the problem requires",
    text: "I taught myself the programming and system concepts I needed as the project grew instead of limiting the solution to what I already knew.",
  },
  {
    number: "03",
    title: "Iterate from feedback",
    text: "The interface continued evolving as people used it and requested additional capabilities—a pattern I still value in analytics and software work.",
  },
];

export default function DragonProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <header className="border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">
              RR
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:block">
              RAY RESURRECCION
            </span>
          </Link>
          <Link
            href="/#projects"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            ← Back to portfolio
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm tracking-[0.2em] text-cyan-300">EARLY PROJECT / ORIGIN STORY</span>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-mono text-xs text-cyan-200">
              1997
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
            The Dragon
          </h1>
          <p className="mt-5 max-w-4xl text-2xl font-semibold leading-9 text-slate-300 sm:text-3xl">
            Making the early Internet easier to navigate.
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            As a Cerritos College student, I built a menu-driven interface that gave users
            a simpler way to reach Internet, file, communication, library, and account
            tools on the college&apos;s VMS environment.
          </p>

          <div className="mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              ["Platform", "VMS / AlphaServer"],
              ["Role", "Creator / Developer"],
              ["Focus", "Usability + Access"],
              ["Evidence", "Article + Screenshots"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0a1626] p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{label}</p>
                <p className="mt-2 text-sm font-semibold text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">THE PROBLEM</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Powerful tools. Unfriendly interface.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-400">
            <p>
              In the mid-1990s, accessing Internet services on a college computing system
              could mean remembering commands, tool names, and unfamiliar workflows.
              The capability was there; the experience was the obstacle.
            </p>
            <p>
              I wanted to create a friendlier layer over those services so students could
              concentrate on what they wanted to do rather than on memorizing how to get there.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">ORIGINAL ARTIFACTS</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
                The interface itself.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              These are preserved screenshots from the original system—not modern recreations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              ["/images/dragon/Dragon_SS1.jpg", "The Dragon main menu and Internet tools"],
              ["/images/dragon/Dragon_SS2.jpg", "The Dragon utilities and user services"],
            ].map(([src, alt]) => (
              <ImageLightbox
                key={src}
                src={src}
                alt={alt}
                className="group block w-full overflow-hidden rounded-3xl border border-white/10 bg-black transition hover:border-cyan-300/30"
              >
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60" />
                  <span className="ml-3 font-mono text-[11px] tracking-widest text-slate-500">
                    RESUR001 &gt; THE DRAGON
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={alt} fill className="object-contain p-3" sizes="(min-width: 1024px) 50vw, 90vw" />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                  <span className="text-sm text-slate-500">{alt}</span>
                  <span className="font-mono text-xs text-cyan-300">CLICK TO ENLARGE</span>
                </div>
              </ImageLightbox>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">WHAT IT PROVIDED</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              One interface. Many services.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              The Dragon organized a growing collection of computing and Internet capabilities
              into categories users could navigate from a common interface.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-slate-300">
                <span className="mr-3 font-mono text-cyan-300">+</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1626]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">IN THE ARCHIVES</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Featured in Talon Marks.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              On March 5, 1997, Cerritos College&apos;s <em>Talon Marks</em> profiled the
              project and the self-directed learning behind it.
            </p>

            <blockquote className="mt-8 border-l-2 border-cyan-300 pl-5">
              <p className="text-2xl font-semibold tracking-tight text-white">
                “I&apos;m driven by hunger for information.”
              </p>
              <footer className="mt-2 font-mono text-xs tracking-wide text-slate-500">
                — RAY RESURRECCION, 1997
              </footer>
            </blockquote>

            <ImageLightbox
              src="/images/dragon/Explore_the_Dragon.jpg"
              alt="1997 Talon Marks article Explore the Dragon"
              className="mt-8 inline-flex rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Read the original article
            </ImageLightbox>
          </div>

          <ImageLightbox
            src="/images/dragon/Explore_the_Dragon.jpg"
            alt="1997 Talon Marks article Explore the Dragon"
            className="group relative mx-auto block w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-2xl shadow-black/30 transition hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/dragon/Explore_the_Dragon.jpg"
                alt="1997 Talon Marks article Explore the Dragon"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="absolute bottom-5 right-5 rounded-full bg-[#07111f]/90 px-4 py-2 font-mono text-xs text-cyan-200 backdrop-blur">
              CLICK TO READ
            </div>
          </ImageLightbox>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">WHAT STAYED WITH ME</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          The technology changed. The approach didn&apos;t.
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <article key={lesson.number} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="font-mono text-sm text-cyan-300">{lesson.number}</p>
              <h3 className="mt-8 text-2xl font-bold text-white">{lesson.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{lesson.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-8 sm:p-12">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">1997 → TODAY</p>
          <p className="mt-5 max-w-4xl text-2xl font-semibold leading-9 text-white sm:text-3xl">
            The Dragon was an early version of the same work I enjoy today:
            understand a messy system, organize it, learn what&apos;s necessary, and make
            the result useful to someone else.
          </p>
          <div className="mt-8">
            <Link
              href="/#projects"
              className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              See my modern data projects →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Ray Resurreccion</p>
          <p className="font-mono text-xs">SQL • ANALYTICS • BI • DATA ENGINEERING</p>
        </div>
      </footer>
    </main>
  );
}
