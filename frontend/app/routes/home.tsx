export function meta() {
  return [
    { title: "2026 MTC Hackathon – Mosque Tech Challenge" },
    {
      name: "description",
      content: "Landing page for the 2026 MTC Hackathon, part of the Mosque Tech Challenge initiative.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-mtc-blue">
      <div className="container mx-auto px-4 pt-6 pb-16 space-y-16">
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/mtc-logo.jpeg"
              alt="Mosque Tech Challenge logo"
              className="h-9 w-auto rounded-md shadow-sm"
            />
            <div className="text-sm font-bold tracking-tight uppercase text-mtc-green">
              MTC Hackathon
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-mtc-blue">
            <a href="/about" className="hover:text-mtc-green transition-colors">
              About Us
            </a>
            <a href="/past-events" className="hover:text-mtc-green transition-colors">
              Past Years
            </a>
          </nav>
        </header>

        <section className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-mtc-green/10 px-3 py-1 text-xs font-medium text-mtc-green ring-1 ring-mtc-green/30">
              Youth • Masjid • Technology
            </p>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-mtc-blue">
                Mosque Tech Hackathon 2026
              </h1>
              <p className="text-base md:text-lg text-mtc-blue/80">
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
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-mtc-green-dark via-mtc-green to-mtc-green-light btn-gradient-radial px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-mtc-green/40 animate-gradient hover:scale-105 hover:shadow-xl hover:shadow-mtc-green/60 transition-all"
              >
                Register on Luma
              </a>
              <div className="text-xs text-mtc-blue/70">
                More Info coming soon. Stay tuned for dates &amp; venue.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-mtc-blue/20 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1600&q=80"
                alt="Developers collaborating in front of laptops"
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-mtc-blue/30 via-transparent to-mtc-green/20" />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-10 md:grid-cols-2 items-start border-t border-mtc-blue/20 pt-10"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-mtc-blue">About the Challenge</h2>
            <p className="text-mtc-blue/80 text-sm md:text-base">
              Mosque Tech Challenge is a community initiative to empower the
              Muslim community to become confident tech users and builders.
              Over one weekend, teams explore ideas, learn new tools, and
              prototype apps together.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-mtc-blue/80">
            <div className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="font-bold text-mtc-green">Who joins?</p>
              <p>Students, young professionals, developers, designers, and masjid volunteers.</p>
            </div>
            <div className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="font-bold text-mtc-green">What do we build?</p>
              <p>Teams can build web, mobile, software, or hardware projects—anything that fits this year's hackathon theme, which will be revealed at the event.</p>
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className="space-y-6 border-t border-mtc-blue/20 pt-10"
        >
          <h2 className="text-2xl font-bold text-mtc-blue">Event Timeline</h2>
          <ol className="grid gap-4 text-sm text-mtc-blue/80 md:grid-cols-4">
            <li className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-mtc-green">Pre Hackathon</p>
              <p className="mt-1 font-semibold">Learn, Upskill &amp; Network</p>
              <p className="mt-1 text-xs">
                Join our events prior to the hackathon to learn, upskill, and take the opportunity to network.
              </p>
            </li>
            <li className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-mtc-green">Day 1</p>
              <p className="mt-1 font-semibold">Kickoff, Ideation, Building</p>
              <p className="mt-1 text-xs">
                Kickoff the hackathon, form teams, refine ideas, and start building.
              </p>
            </li>
            <li className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-mtc-green">Day 2</p>
              <p className="mt-1 font-semibold">Refine &amp; Pitch</p>
              <p className="mt-1 text-xs">
                Polish your prototype, prepare the pitch, and submit final demo.
              </p>
            </li>
            <li className="rounded-2xl border border-mtc-blue/20 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-mtc-green">Closing</p>
              <p className="mt-1 font-semibold">Presentations &amp; Awards</p>
              <p className="mt-1 text-xs">
                Present to judges, celebrate winners, and plan next steps.
              </p>
            </li>
          </ol>
        </section>

        <section
          id="partners"
          className="space-y-6 border-t border-mtc-blue/20 pt-10"
        >
          <h2 className="text-2xl font-bold text-mtc-blue">Partners &amp; Sponsors</h2>
          <p className="text-sm text-mtc-blue/80">
            Logos and links for partners and sponsors will appear here. For now,
            this is a placeholder section so we can see the layout.
          </p>
        </section>
      </div>
    </main>
  );
}
