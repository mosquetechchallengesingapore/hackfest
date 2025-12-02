import type { Route } from "./+types/mtc2025";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mosque Tech Challenge 2025 – Past Event" },
  ];
}

export default function PastEvent2025() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-16 p-4 container mx-auto space-y-8">
      <div className="space-y-2">
        <Link
          to="/past-events"
          className="inline-flex text-sm font-bold text-mtc-green hover:text-mtc-green-light"
        >
           Back to past events
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-mtc-blue">
          Mosque Tech Challenge 2025
        </h1>
        <p className="text-sm text-mtc-blue/70">20 November 2025</p>
        <p className="text-base text-mtc-blue/80">
          Empowering youth to build Islamic tech solutions and prototypes for
          mosques and local Muslim communities.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-mtc-blue">Highlights</h2>
        <ul className="list-disc pl-5 space-y-1 text-mtc-blue/80 text-sm">
          <li>Teams from different mosques and youth groups across Singapore</li>
          <li>Mentorship on design, engineering, and product thinking</li>
          <li>Projects focused on community engagement, donations, and education</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-mtc-blue">Winners</h2>
        <ul className="list-disc pl-5 space-y-1 text-mtc-blue/80 text-sm">
          <li>To be updated after the 2025 edition concludes.</li>
        </ul>
      </section>
    </main>
  );
}
