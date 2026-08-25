import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const skills = [
  { name:"SQL", what:"The core language I use to retrieve, join, validate, aggregate, and transform business data.", benefit:"Helps companies turn raw operational data into reliable answers, reporting, and decision support." },
  { name:"T-SQL", what:"Microsoft SQL Server's SQL implementation, including stored procedures, CTEs, window functions, and database-side processing.", benefit:"Moves complex processing closer to the data, improving repeatability, automation, and performance." },
  { name:"PostgreSQL", what:"A powerful open-source relational database I use in modern application and data-platform projects.", benefit:"Provides a dependable, flexible foundation for applications, analytics, integrations, and structured business data." },
  { name:"Snowflake", what:"A cloud data platform for storing, transforming, and analyzing data from multiple business systems.", benefit:"Helps organizations reduce data silos and scale analytics around a consistent source of trusted information." },
  { name:"Python", what:"A general-purpose language I am expanding for data engineering, automation, APIs, and analytical workflows.", benefit:"Automates repetitive work and connects databases, files, APIs, cloud services, and analytical processes." },
  { name:"Pandas", what:"Python's data-analysis toolkit for cleaning, reshaping, validating, and exploring structured datasets.", benefit:"Makes repeatable data preparation and exploratory analysis faster than manual spreadsheet-heavy workflows." },
  { name:"Power BI", what:"A business-intelligence platform for data modeling, KPI reporting, dashboards, and interactive analysis.", benefit:"Gives leaders and operational teams accessible, consistent views of performance and business trends." },
  { name:"Tableau", what:"A visual analytics platform for exploring data and communicating patterns through interactive dashboards.", benefit:"Makes complex information easier for business users to understand, explore, and act on." },
  { name:"dbt", what:"A modern analytics-engineering framework for building documented, testable SQL transformations.", benefit:"Brings software-engineering practices to analytics so business logic is easier to maintain, test, and trust." },
  { name:"AWS", what:"Cloud services I am expanding for data storage, processing, integration, and modern data-engineering workflows.", benefit:"Allows organizations to build scalable data solutions without depending entirely on traditional on-premises infrastructure." },
  { name:"Data Modeling", what:"Structuring entities, relationships, facts, dimensions, and business rules so data represents the organization clearly.", benefit:"Creates a dependable foundation for reporting, analytics, integration, and consistent KPI definitions." },
  { name:"ETL / ELT", what:"Processes for extracting data from source systems, transforming it, and loading it into analytical platforms.", benefit:"Combines information from disconnected systems into dependable, repeatable datasets ready for analysis." },
];

const projects = [
  {
    eyebrow: "FLAGSHIP PROJECT",
    title: "Personal Data Platform",
    description:
      "An evolving data platform for ingesting, organizing, and analyzing personal operational data using modern data-engineering patterns.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    status: "Coming soon",
    href: "#",
  },
  {
    eyebrow: "LIVE CONSULTING PROJECT",
    title: "Connect2U Data Solutions",
    description:
      "A live data consulting business focused on helping organizations solve SQL, reporting, data cleanup, automation, and analytics problems.",
    stack: ["SQL", "Data Analysis", "Reporting", "Automation"],
    status: "Live",
    href: "https://connect2u.xyz",
    external: true,
  },
  {
    eyebrow: "ANALYTICS PROJECT",
    title: "Job Search Analytics",
    description:
      "A structured analytics system for application activity, recruiter communication, follow-ups, outcomes, and job-search performance.",
    stack: ["SQL", "Python", "Analytics", "Automation"],
    status: "Coming soon",
    href: "#",
  },
  {
    eyebrow: "BI SHOWCASE",
    title: "Executive Analytics",
    description:
      "A portfolio of KPI design, dimensional modeling, reporting, and data storytelling patterns built around business decision-making.",
    stack: ["Power BI", "Tableau", "SQL", "KPI Design"],
    status: "Coming soon",
    href: "#",
  },
  {
    eyebrow: "SENIOR PROJECT • REAL CLIENT",
    title: "FARR Shipping & Receiving System",
    description:
      "A 2002 DeVry senior project built for Anaheim Marriott to replace a manual package-tracking process with a Microsoft Access/VBA database, barcode-supported workflows, operational reporting, and delivery tracking.",
    stack: ["Microsoft Access", "VBA", "Database Design", "Requirements Analysis"],
    status: "Anaheim Marriott • 2002",
    href: "/projects/farr",
  },
  {
    eyebrow: "EARLY SOFTWARE PROJECT",
    title: "Super Lotto Machine",
    description:
      "A 2004 Microsoft Access/VBA project that grew from a six-number classroom assignment into a database-backed lottery application with animation, duplicate handling, Quick Picks, stored results, printing, and frequency statistics.",
    stack: ["Microsoft Access", "VBA", "Database Design", "Application Logic"],
    status: "Original project • 2004",
    href: "/projects/super-lotto",
  },
];

const experience = [
  {
    years: "2025 — Present",
    company: "Data Engineer Academy",
    role: "Senior Data Analyst / Business Intelligence",
    detail:
      "Sales and marketing analytics, KPI reporting, CRM analysis, workflow automation, and modern data-engineering development.",
  },
  {
    years: "2019 — 2025",
    company: "PIH Health",
    role: "Senior Data Analyst / Business Intelligence",
    detail:
      "Enterprise analytics, SQL, governed reporting datasets, operational KPIs, data modeling, dashboards, and stakeholder decision support.",
  },
  {
    years: "2015 — 2019",
    company: "SD&A Teleservices",
    role: "SQL Developer",
    detail:
      "SQL Server ETL, stored procedures, reporting automation, query optimization, data validation, and operational analytics.",
  },
  {
    years: "2007 — 2015",
    company: "Zenith Education Group • UnitedHealth Group • Countrywide",
    role: "Business Analyst",
    detail:
      "SQL-driven reporting, KPI analysis, automation, forecasting, operational reporting, and business requirements.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">
              RR
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:block">
              RAY RESURRECCION
            </span>
          </a>

          <nav className="flex items-center gap-4 text-sm text-slate-300 sm:gap-6">
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="hidden transition hover:text-white sm:inline" href="#experience">Experience</a>
            <a className="hidden transition hover:text-white md:inline" href="#about">About</a>
            <a
              className="rounded-full border border-cyan-300/40 px-4 py-2 font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-6 font-mono text-sm tracking-[0.22em] text-cyan-300">
              DATA → INSIGHT → DECISION
            </p>

            <h1 className="max-w-5xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              I build clarity
              <span className="block text-slate-400">from complex data.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m <strong className="text-white">Ray Resurreccion</strong>, a senior data
              analyst and business intelligence professional with a SQL-first background
              spanning analytics, reporting, data modeling, and data engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore my work
              </a>
              <a
                href="/Raymond_Resurreccion_Resume.pdf"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5"
                download
              >
                Download resume ↓
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href="https://www.linkedin.com/in/rayresurreccion/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/dynamind795-gh"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-200"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:hello@rayresurreccion.com"
                className="text-slate-400 transition hover:text-cyan-200"
              >
                Email ↗
              </a>
            </div>
          </div>

          <aside className="relative self-end">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-cyan-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1726] shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/raymond-professional-portrait.jpg"
                  alt="Ray Resurreccion"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 38vw, 90vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07111f] to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#07111f]/85 p-4 backdrop-blur-md">
                  <p className="font-mono text-xs tracking-[0.16em] text-cyan-300">PROFILE.SUMMARY</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-slate-500">foundation</p>
                      <p className="mt-1 font-semibold text-slate-200">SQL + Data Modeling</p>
                    </div>
                    <div>
                      <p className="text-slate-500">focus</p>
                      <p className="mt-1 font-semibold text-slate-200">Analytics + BI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {[
            ["15+", "Years in data & analytics"],
            ["20M+", "Enterprise records analyzed"],
            ["40+", "Operational KPIs"],
            ["35%", "Measured performance improvement"],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-8 sm:px-6">
              <div className="text-3xl font-black tracking-tight text-white">{value}</div>
              <div className="mt-1 text-sm leading-5 text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">SELECTED WORK</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Real problems. Practical data solutions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Not just screenshots. Each case study will document the business question,
            architecture, data model, analysis, decisions, and lessons learned.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-cyan-300">{project.eyebrow}</span>
                <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
              <p className="mt-4 min-h-28 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                <span className="text-slate-500">{project.status}</span>
                {project.href !== "#" ? (
                  <a
                    href={project.href}
                    {...("external" in project && project.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-semibold text-cyan-200 transition group-hover:translate-x-1"
                  >
                    {"external" in project && project.external ? "Visit site" : "Case study"} <Arrow />
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs tracking-wide text-slate-500">
                    COMING SOON
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="dragon" className="border-y border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">ORIGIN STORY</p>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-mono text-xs text-cyan-200">
                  1997
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                It started with a Dragon.
              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
                Before dashboards, data pipelines, and cloud platforms, I was already
                trying to make complicated technology easier for people to use.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                As a Cerritos College student, I created <strong className="text-slate-200">The Dragon</strong>,
                a menu-driven interface that simplified access to early Internet and
                VMS services. The project was featured in the college newspaper,
                <em> Talon Marks</em>, and continued evolving for years.
              </p>

              <blockquote className="mt-8 border-l-2 border-cyan-300 pl-5">
                <p className="text-2xl font-semibold tracking-tight text-white">
                  “I&apos;m driven by hunger for information.”
                </p>
                <footer className="mt-2 font-mono text-xs tracking-wide text-slate-500">
                  — RAY RESURRECCION, TALON MARKS, MARCH 5, 1997
                </footer>
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/projects/the-dragon"
                  className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Explore The Dragon ↗
                </a>
                <span className="rounded-full border border-white/10 px-4 py-3 font-mono text-xs text-slate-400">
                  VMS • Internet Tools • Usability • Self-taught
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60" />
                  <span className="ml-3 font-mono text-[11px] tracking-widest text-slate-500">
                    RESUR001 &gt; THE DRAGON
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/dragon/Dragon_SS1.jpg"
                    alt="Original screenshot of The Dragon menu interface"
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="font-mono text-xs leading-5 text-slate-500">
                    Original interface artifact • Cerritos College AlphaServer / VMS
                  </p>
                </div>
              </div>

              <ImageLightbox
                src="/images/dragon/Explore_the_Dragon.jpg"
                alt="Read the 1997 Talon Marks newspaper article about The Dragon"
                className="absolute -bottom-7 -left-5 hidden w-44 rotate-[-4deg] overflow-hidden rounded-xl border border-white/10 bg-[#101923] p-2 shadow-xl transition duration-300 hover:rotate-0 hover:scale-110 hover:border-cyan-300/40 lg:block"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/dragon/Explore_the_Dragon.jpg"
                    alt="Read the 1997 Talon Marks newspaper article about The Dragon"
                    fill
                    className="object-cover object-top"
                    sizes="176px"
                  />
                </div>
                <div className="flex items-center justify-between px-1 pt-2">
                  <p className="font-mono text-[9px] leading-4 text-slate-500">
                    Talon Marks • 1997
                  </p>
                  <span className="font-mono text-[9px] text-cyan-300">READ ↗</span>
                </div>
              </ImageLightbox>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1626]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">TECHNICAL TOOLKIT</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Select a technology to see what it does and how it can create business value.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <details key={skill.name} className="group rounded-2xl border border-white/10 bg-white/[0.04] transition open:border-cyan-300/30 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-200 [&::-webkit-details-marker]:hidden">
                  <span>{skill.name}</span>
                  <span className="font-mono text-lg font-normal text-cyan-300 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-cyan-300">WHAT IT IS</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{skill.what}</p>
                  <p className="mt-5 font-mono text-[10px] tracking-[0.16em] text-cyan-300">BUSINESS VALUE</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{skill.benefit}</p>
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">
            A practical toolkit built through years of SQL, analytics, and business intelligence
            work—and continually expanded through modern data engineering technologies.
          </p>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">CAREER PATH</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">Built on SQL. Expanded through analytics.</h2>
            <p className="mt-5 leading-7 text-slate-400">
              My career has moved across business analysis, SQL development, enterprise
              analytics, business intelligence, and modern data engineering.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.company} className="grid gap-4 rounded-2xl border border-white/10 p-6 sm:grid-cols-[150px_1fr]">
                <div className="font-mono text-xs tracking-wide text-cyan-300">{item.years}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  <p className="mt-1 font-semibold text-slate-300">{item.role}</p>
                  <p className="mt-3 leading-7 text-slate-400">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[420px] border-b border-white/10 lg:min-h-0 lg:border-b-0 lg:border-r">
            <Image
  src="/images/about/raymond-professional-portrait-alt.jpg"
  alt="Ray Resurreccion"
  fill
  className="object-cover object-[center_20%]"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/60 via-transparent to-transparent" />
          </div>
          <div className="p-8 sm:p-12">
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">ABOUT</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Business context meets technical depth.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I&apos;ve spent my career close to both the data and the people who need to
              make decisions from it. That means understanding the business question,
              building trustworthy data, and communicating the result clearly.
            </p>
            <p className="mt-5 leading-7 text-slate-400">
              Today I&apos;m extending that foundation through Python, modern cloud data
              platforms, dbt, APIs, and end-to-end portfolio projects.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">LET&apos;S CONNECT</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Looking for someone who can bridge business questions and data?
              </h2>
            </div>
            <a
              href="mailto:hello@rayresurreccion.com"
              className="w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Email Ray <Arrow />
            </a>
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
