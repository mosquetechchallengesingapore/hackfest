import type { Route } from "./+types/past-events-listing";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Past Events – Mosque Tech Challenge" },
    {
      name: "description",
      content: "Listing of past Mosque Tech Challenge events.",
    },
  ];
}

export default function PastEventsIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-16 p-4 container mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-mtc-blue">Past Events</h1>
        <p className="text-mtc-blue/80">
          Explore highlights from previous Mosque Tech Challenge hackathons.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-mtc-blue/20 bg-white p-4 space-y-3 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wide text-mtc-green">
            2025
          </div>
          <h2 className="text-lg font-bold text-mtc-blue">
            Mosque Tech Challenge 2025
          </h2>
          <p className="text-sm text-mtc-blue/80">
            Empowering youth to build Islamic tech solutions and prototypes for
            mosques and local Muslim communities.
          </p>
          <div className="pt-2">
            <Link
              to="/past-events/2025"
              className="inline-flex text-sm font-bold text-mtc-green hover:text-mtc-green-light"
            >
              View 2025 highlights
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
