export function meta() {
  return [
    { title: "About – Mosque Tech Challenge" },
    {
      name: "description",
      content:
        "Learn more about Mosque Tech Challenge, a 24-hour hackathon for youth building tech for the community.",
    },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 pt-12 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-8 shadow-2xl shadow-sky-900/40 md:px-10 md:py-12 space-y-10">
          <section className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <header className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400">
                  About
                </p>
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Mosque Tech Challenge
                  </h1>
                  <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-sky-200">
                    <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 font-medium ring-1 ring-sky-500/40">
                      24-hour youth hackathon
                    </span>
                    <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 font-medium ring-1 ring-sky-500/40">
                      Building tech for the community
                    </span>
                  </div>
                </div>
              </header>

              <section className="space-y-4 text-sm md:text-base text-slate-200 max-w-3xl">
                <h2 className="text-xl font-semibold text-white">About Mosque Tech Challenge</h2>
                <p>
                  Mosque Tech Challenge is a 24hrs hackathon that brings youths together to
                  build the coolest tech ideas for the community.
                </p>
              </section>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <img
                  src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Youth collaborating on tech projects"
                  className="h-56 w-full object-cover opacity-90 md:h-64"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-sky-500/30" />
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 text-sm md:text-base">
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white">Contact Info</h2>
              <div className="space-y-3 text-slate-200 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs">
                    📞
                  </span>
                  <p>
                    <span className="font-semibold">Phone:</span> 9179 8353 (Fazli)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs">
                    ✉️
                  </span>
                  <p>
                    <span className="font-semibold">Email:</span> mosquetechchallenge@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white">Socials</h2>
              <ul className="space-y-2 text-slate-200 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-sky-300">
                    F
                  </span>
                  <a
                    href="https://www.facebook.com/mosquetechchallenge/"
                    className="hover:text-sky-200 underline underline-offset-4 decoration-slate-600/60 hover:decoration-sky-400/70"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-pink-300">
                    IG
                  </span>
                  <a
                    href="https://www.instagram.com/mosquetechchallenge/"
                    className="hover:text-sky-200 underline underline-offset-4 decoration-slate-600/60 hover:decoration-sky-400/70"
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-sky-200">
                    in
                  </span>
                  <a
                    href="https://www.linkedin.com/company/mosque-tech-challenge"
                    className="hover:text-sky-200 underline underline-offset-4 decoration-slate-600/60 hover:decoration-sky-400/70"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
