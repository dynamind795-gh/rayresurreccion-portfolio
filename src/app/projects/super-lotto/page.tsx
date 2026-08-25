import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const features = [
  {
    number: "01",
    title: "Animated number selection",
    detail:
      "Instead of placing six random values in a text box, the selected numbers moved in from the right side of the form and stopped in designated positions.",
  },
  {
    number: "02",
    title: "Duplicate handling",
    detail:
      "The application could check generated numbers for repeats and replace duplicates so a drawing produced a valid set.",
  },
  {
    number: "03",
    title: "Quick Pick workflows",
    detail:
      "The interface supported individual number selection, Quick Pick, and Multiple Quick Pick rather than a single one-off result.",
  },
  {
    number: "04",
    title: "Persistent results",
    detail:
      "Generated results were stored in the Microsoft Access database, creating data that could be reviewed and analyzed after each drawing.",
  },
  {
    number: "05",
    title: "Output & reporting",
    detail:
      "Results could be displayed, saved, and printed, extending the assignment into a usable application workflow.",
  },
  {
    number: "06",
    title: "Frequency statistics",
    detail:
      "The project tracked which numbers had been selected and how frequently they appeared across generated results.",
  },
];

export default function SuperLottoPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">
              RR
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:block">
              RAY RESURRECCION
            </span>
          </a>
          <a
            href="/#projects"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            ← All projects
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">
              EARLY SOFTWARE PROJECT
            </p>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-mono text-xs text-cyan-200">
              2004
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            Super Lotto
            <span className="block text-slate-400">Machine.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl">
            The assignment was to generate six random numbers.
            <strong className="text-white"> I turned it into a database-backed application.</strong>
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Microsoft Access", "VBA", "Database", "Animation", "Statistics"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">THE ASSIGNMENT</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Six numbers were only the starting point.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              In a Visual Basic programming class, the original requirement was simple:
              create a program that selected six random numbers and displayed them in a
              text box.
            </p>
            <p>
              I wanted to explore what else I could make the technology do. For extra
              credit, I expanded the assignment into a Microsoft Access application
              programmed with VBA, with a custom interface, animated number selection,
              multiple drawing options, stored results, output controls, and statistics.
            </p>
            <p>
              It became an early example of a pattern that would continue throughout my
              career: understand the requirement, then look for ways to make the solution
              more useful.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">ORIGINAL ARTIFACT</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              The application, preserved from 2004.
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1726] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-slate-500">
                LOTTO MACHINE • MICROSOFT ACCESS / VBA
              </span>
            </div>

            <ImageLightbox
              src="/images/super-lotto/Super Lotto Picker.jpg"
              alt="Original Super Lotto Machine application and Visual Basic editor"
              className="group block w-full bg-[#07111f] p-4 sm:p-6"
            >
              <img
                src="/images/super-lotto/Super Lotto Picker.jpg"
                alt="Original Super Lotto Machine application and Visual Basic editor"
                className="mx-auto max-h-[680px] w-auto max-w-full rounded-xl object-contain shadow-2xl shadow-black/30 transition duration-300 group-hover:scale-[1.01]"
              />
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <span className="text-left text-xs text-slate-500">
                  Original portfolio artifact
                </span>
                <span className="font-mono text-[10px] tracking-wider text-cyan-200">
                  CLICK TO ENLARGE
                </span>
              </div>
            </ImageLightbox>

            <div className="border-t border-white/10 px-6 py-5">
              <p className="text-sm leading-6 text-slate-400">
                Original portfolio scan dated February 19, 2004. The interface shows the
                generated lottery numbers, repeat checking, Quick Pick controls, stored
                result history, printing/file commands, and statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">BEYOND THE REQUIREMENT</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          A classroom exercise became an application.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
            >
              <p className="font-mono text-xs tracking-widest text-cyan-300">{feature.number}</p>
              <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1626]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">RELATED EXPERIMENT</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Bouncing Circles
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Another project from the same period explored animation and interface
              controls. It could generate from 1 to 500 circles, track their position and
              color, vary their radius, use single or multiple colors, animate a banner,
              and make the circles flash.
            </p>
            <p className="mt-5 leading-7 text-slate-500">
              The experiment demonstrates the animation, state-management, and UI
              exploration happening alongside the lottery application.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#07111f]">
            <ImageLightbox
              src="/images/super-lotto/Circles Picture.jpg"
              alt="Original Bouncing Circles Visual Basic project"
              className="group block w-full bg-[#07111f] p-4"
            >
              <img
                src="/images/super-lotto/Circles Picture.jpg"
                alt="Original Bouncing Circles Visual Basic project"
                className="mx-auto max-h-[560px] w-auto max-w-full rounded-xl object-contain shadow-xl shadow-black/20 transition duration-300 group-hover:scale-[1.01]"
              />
              <div className="mt-3 flex items-center justify-end px-1">
                <span className="font-mono text-[10px] tracking-wider text-cyan-200">
                  CLICK TO ENLARGE
                </span>
              </div>
            </ImageLightbox>
            <div className="border-t border-white/10 px-5 py-4">
              <p className="font-mono text-xs text-slate-500">
                Original portfolio artifact • February 19, 2004
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[.85fr_1.15fr]">
          <div className="p-8 sm:p-12">
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">WHY IT MATTERS</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              An early database mindset.
            </h2>
          </div>
          <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
            <p className="text-lg leading-8 text-slate-300">
              The interesting part of this project is not the lottery itself. It is the
              decision to turn generated information into persistent data that could be
              reviewed, counted, analyzed, and reported.
            </p>
            <p className="mt-5 leading-7 text-slate-400">
              Years before SQL development, enterprise analytics, BI, and data
              engineering became my profession, I was already interested in the
              relationship between application behavior and the data behind it.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Ray Resurreccion</p>
          <a href="/#projects" className="font-semibold text-cyan-200 transition hover:text-cyan-100">
            Next: Selected Work →
          </a>
        </div>
      </footer>
    </main>
  );
}
