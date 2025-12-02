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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-mtc-blue">
      <div className="container mx-auto px-4 pt-12 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-mtc-blue/20 bg-white px-6 py-8 shadow-2xl shadow-mtc-blue/10 md:px-10 md:py-12 space-y-10">
          <section className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <header className="space-y-4">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-mtc-green">
                  About
                </p>
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-mtc-blue">
                    Mosque Tech Challenge
                  </h1>
                  <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-mtc-green">
                    <span className="inline-flex items-center rounded-full bg-mtc-green/10 px-3 py-1 font-medium ring-1 ring-mtc-green/40">
                      24-hour youth hackathon
                    </span>
                    <span className="inline-flex items-center rounded-full bg-mtc-green/10 px-3 py-1 font-medium ring-1 ring-mtc-green/40">
                      Building tech for the community
                    </span>
                  </div>
                </div>
              </header>

              <section className="space-y-4 text-sm md:text-base text-mtc-blue/80 max-w-3xl">
                <h2 className="text-xl font-bold text-mtc-blue">About Mosque Tech Challenge</h2>
                <p>
                  Mosque Tech Challenge is a 24hrs hackathon that brings youths together to
                  build the coolest tech ideas for the community.
                </p>
              </section>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-mtc-blue/20 bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Youth collaborating on tech projects"
                  className="h-56 w-full object-cover opacity-90 md:h-64"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-mtc-blue/20 via-transparent to-mtc-green/20" />
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 text-sm md:text-base">
            <div className="space-y-3 rounded-2xl border border-mtc-blue/20 bg-gray-50 p-5">
              <h2 className="text-lg font-bold text-mtc-blue">Contact Info</h2>
              <div className="space-y-3 text-mtc-blue/80 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mtc-green/10 text-xs">
                    📞
                  </span>
                  <p>
                    <span className="font-semibold">Phone:</span> 9179 8353 (Fazli)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mtc-green/10 text-xs">
                    ✉️
                  </span>
                  <p>
                    <span className="font-semibold">Email:</span> mosquetechchallenge@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-mtc-blue/20 bg-gray-50 p-5">
              <h2 className="text-lg font-bold text-mtc-blue">Socials</h2>
              <ul className="space-y-2 text-mtc-blue/80 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mtc-blue/10 text-xs font-bold text-mtc-blue">
                    F
                  </span>
                  <a
                    href="https://www.facebook.com/mosquetechchallenge/"
                    className="hover:text-mtc-green underline underline-offset-4 decoration-mtc-blue/30 hover:decoration-mtc-green/70"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mtc-blue/10 text-xs font-bold text-mtc-blue">
                    IG
                  </span>
                  <a
                    href="https://www.instagram.com/mosquetechchallenge/"
                    className="hover:text-mtc-green underline underline-offset-4 decoration-mtc-blue/30 hover:decoration-mtc-green/70"
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mtc-blue/10 text-xs font-bold text-mtc-blue">
                    in
                  </span>
                  <a
                    href="https://www.linkedin.com/company/mosque-tech-challenge"
                    className="hover:text-mtc-green underline underline-offset-4 decoration-mtc-blue/30 hover:decoration-mtc-green/70"
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
