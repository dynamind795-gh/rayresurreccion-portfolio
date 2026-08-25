import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const requirements = [
  "Package inventory database supporting at least 3,000 records",
  "Password-protected system access",
  "Barcode scanning for inbound package tracking numbers",
  "Search by recipient name, tracking number, or batch number",
  "Package receipts and operational reports",
  "30-day inventory alerts for packages requiring return to sender",
  "Pickup confirmation workflow for bell staff",
  "Retention and cleanup rules for delivered package records",
];

const lifecycle = [
  ["01", "Observe", "Met with Anaheim Marriott Shipping & Receiving staff and observed the existing package-handling workflow."],
  ["02", "Analyze", "Identified redundant manual steps, duplicate data entry, bulky paper tracking, and limitations in the existing PacTrac process."],
  ["03", "Design", "Defined requirements, user flows, forms, queries, reports, switchboard navigation, security, and operational procedures."],
  ["04", "Build", "Developed the Microsoft Access solution and VBA-driven application behavior, including the main database."],
  ["05", "Deliver", "Produced working software, user and maintenance documentation, testing, training, installation, and a sponsor presentation."],
  ["06", "Continue", "After the academic project ended, the team continued working with Marriott staff to accommodate new needs because they planned to use the system."],
];

export default function FarrPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">RR</span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:block">RAY RESURRECCION</span>
          </a>
          <a href="/#early-systems" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200">
            ← Early systems
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">SENIOR PROJECT • REAL CLIENT</p>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-mono text-xs text-cyan-200">2002</span>
          </div>
          <h1 className="mt-6 max-w-6xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            FARR
            <span className="block text-slate-400">Shipping &amp; Receiving System.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300 sm:text-2xl">
            A DeVry senior project that became a working inventory-control solution for the
            <strong className="text-white"> Anaheim Marriott Shipping &amp; Receiving department.</strong>
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Microsoft Access", "VBA", "Database Design", "Requirements Analysis", "Process Improvement", "Reporting"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-xs text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">THE BUSINESS PROBLEM</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">Replace an obsolete, redundant package-tracking process.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              The Anaheim Marriott used PacTrac to record inbound packages and letters, but the
              existing process required several manual handoffs, duplicate lookups, printed receipts,
              and a large binder that moved between Shipping &amp; Receiving and the bell desk.
            </p>
            <p>
              Our team met with Marriott staff and observed the process before designing a replacement.
              The objective was to improve inbound package tracking, reduce redundant work and
              unnecessary documentation, and lower the time and overhead required by the department.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">MY CONTRIBUTION</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Database Management — Main Database.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                The project plan assigned me responsibility for database management of the main
                database. My original portfolio also records that I helped program the Visual Basic
                for Applications behind the database.
              </p>
              <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6">
                <p className="font-mono text-xs tracking-widest text-cyan-300">PROJECT CONTEXT</p>
                <p className="mt-3 leading-7 text-slate-300">
                  Four team members brought different specialties to the project. The surviving
                  documentation includes project planning, requirements, schedules, system design,
                  implementation, manuals, testing, installation, training, and final presentation deliverables.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1726] shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-slate-500">FARR • MAIN SWITCHBOARD</span>
              </div>
              <ImageLightbox
                src="/images/farr/farr-switchboard.jpg"
                alt="Original FARR Shipping and Receiving System main switchboard"
                className="group relative block aspect-[4/3] w-full"
              >
                <Image
                  src="/images/farr/farr-switchboard.jpg"
                  alt="Original FARR Shipping and Receiving System main switchboard"
                  fill
                  priority
                  className="object-contain p-4 transition duration-300 group-hover:scale-[1.015]"
                  sizes="(min-width: 1024px) 48vw, 95vw"
                />
                <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#07111f]/90 px-3 py-2 font-mono text-[10px] tracking-wider text-cyan-200 backdrop-blur">CLICK TO ENLARGE</span>
              </ImageLightbox>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="font-mono text-xs leading-5 text-slate-500">Original senior-project artifact • Anaheim Marriott • 2002</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">SYSTEM REQUIREMENTS</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">Requirements tied directly to the operation.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {requirements.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-mono text-xs text-cyan-300">0{index + 1}</span>
              <p className="leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1626]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">PROJECT LIFECYCLE</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">More than coding.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map(([number, title, detail]) => (
              <article key={number} className="rounded-3xl border border-white/10 bg-[#07111f] p-7">
                <p className="font-mono text-xs tracking-widest text-cyan-300">{number}</p>
                <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <ImageLightbox src="/images/farr/farr-batch-manager.jpg" alt="Original FARR Batch Manager interface" className="group relative block aspect-[4/3] w-full">
              <Image src="/images/farr/farr-batch-manager.jpg" alt="Original FARR Batch Manager interface" fill className="object-contain p-4 transition duration-300 group-hover:scale-[1.015]" sizes="(min-width: 1024px) 48vw, 95vw" />
              <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#07111f]/90 px-3 py-2 font-mono text-[10px] tracking-wider text-cyan-200 backdrop-blur">CLICK TO ENLARGE</span>
            </ImageLightbox>
            <div className="border-t border-white/10 p-5">
              <p className="font-mono text-xs text-cyan-300">BATCH MANAGER</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">The user manual describes this form as an overview of packages that had not yet been delivered.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <ImageLightbox src="/images/farr/farr-undelivered-batches.jpg" alt="Original FARR Undelivered Batches interface" className="group relative block aspect-[4/3] w-full">
              <Image src="/images/farr/farr-undelivered-batches.jpg" alt="Original FARR Undelivered Batches interface" fill className="object-contain p-4 transition duration-300 group-hover:scale-[1.015]" sizes="(min-width: 1024px) 48vw, 95vw" />
              <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#07111f]/90 px-3 py-2 font-mono text-[10px] tracking-wider text-cyan-200 backdrop-blur">CLICK TO ENLARGE</span>
            </ImageLightbox>
            <div className="border-t border-white/10 p-5">
              <p className="font-mono text-xs text-cyan-300">OPERATIONAL TRACKING</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">The surviving interface artifacts show batch-level package tracking and delivery workflow controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[.8fr_1.2fr]">
            <div className="p-8 sm:p-12">
              <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">OUTCOME</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">Built for use, not just a grade.</h2>
            </div>
            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <p className="text-lg leading-8 text-slate-300">
                The original portfolio records that after the senior project ended, the team
                continued working with Anaheim Marriott staff to accommodate new needs because
                Marriott planned to use the database program.
              </p>
              <p className="mt-5 leading-7 text-slate-400">
                That makes FARR an early example of the work that would later define my career:
                understand an operational process, translate business requirements into a data
                system, build the solution, and support the people who depend on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Ray Resurreccion</p>
          <a href="/#early-systems" className="font-semibold text-cyan-200 transition hover:text-cyan-100">Back to timeline →</a>
        </div>
      </footer>
    </main>
  );
}
