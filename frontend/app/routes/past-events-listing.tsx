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
    <main className="pt-16 p-4 container mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Past Events</h1>
        <p className="text-gray-700 dark:text-gray-200">
          Explore highlights from previous Mosque Tech Challenge hackathons.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            2025
          </div>
          <h2 className="text-lg font-semibold text-white">
            Mosque Tech Challenge 2025
          </h2>
          <p className="text-sm text-slate-200">
            Empowering youth to build Islamic tech solutions and prototypes for
            mosques and local Muslim communities.
          </p>
          <div className="pt-2">
            <Link
              to="/past-events/2025"
              className="inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              View 2025 highlights
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
