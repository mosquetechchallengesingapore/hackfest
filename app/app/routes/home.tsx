import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mosque Tech Challenge – Landing" },
    {
      name: "description",
      content: "Landing page for the current Mosque Tech Challenge event.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 pt-6 pb-16 space-y-16">
        <header className="flex items-center justify-between py-4">
          <div className="text-sm font-semibold tracking-tight uppercase text-sky-400">
            Mosque Tech Challenge
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#timeline" className="hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#partners" className="hover:text-white transition-colors">
              Partners
            </a>
          </nav>
        </header>

        <section className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/30">
              Youth • Masjid • Technology
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Build tech for the ummah.
              </h1>
              <p className="text-base md:text-lg text-slate-200">
                A hackathon-style challenge bringing youth, developers, and
                designers together to solve real problems for our mosques and
                communities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://luma.com/tu2evuun"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 transition-colors"
              >
                Register on Luma
              </a>
              <div className="text-xs text-slate-300">
                Next edition coming soon. Stay tuned for dates &amp; venue.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1600&q=80"
                alt="Developers collaborating in front of laptops"
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-sky-500/30" />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-10 md:grid-cols-2 items-start border-t border-slate-800 pt-10"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">About the Challenge</h2>
            <p className="text-slate-200 text-sm md:text-base">
              Mosque Tech Challenge is a community initiative to explore how
              technology can support the work of mosques, asatizah, and youth
              organisations. Teams prototype ideas over a weekend and present
              them to a panel of mentors and judges.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="font-semibold text-sky-300">Who joins?</p>
              <p>Students, young professionals, developers, designers, and masjid volunteers.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="font-semibold text-sky-300">What do we build?</p>
              <p>Practical tools for event management, knowledge sharing, donation flows, and more.</p>
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className="space-y-6 border-t border-slate-800 pt-10"
        >
          <h2 className="text-2xl font-semibold">Event Timeline (Sample)</h2>
          <ol className="grid gap-4 text-sm text-slate-200 md:grid-cols-4">
            <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-sky-300">Day 1</p>
              <p className="mt-1 font-semibold">Kickoff &amp; Ideation</p>
              <p className="mt-1 text-xs">
                Welcome, problem statements, team formation, and idea validation.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-sky-300">Day 2</p>
              <p className="mt-1 font-semibold">Build &amp; Mentoring</p>
              <p className="mt-1 text-xs">
                Hands-on building with mentors and checkpoints throughout the day.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-sky-300">Day 3</p>
              <p className="mt-1 font-semibold">Refine &amp; Pitch</p>
              <p className="mt-1 text-xs">
                Polish your prototype, prepare the pitch, and submit final demo.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-sky-300">Closing</p>
              <p className="mt-1 font-semibold">Presentations &amp; Awards</p>
              <p className="mt-1 text-xs">
                Present to judges, celebrate winners, and plan next steps.
              </p>
            </li>
          </ol>
        </section>

        <section
          id="partners"
          className="space-y-6 border-t border-slate-800 pt-10"
        >
          <h2 className="text-2xl font-semibold">Partners &amp; Sponsors</h2>
          <p className="text-sm text-slate-200">
            Logos and links for partners and sponsors will appear here. For now,
            this is a placeholder section so we can see the layout.
          </p>
        </section>
      </div>
    </main>
  );
}
