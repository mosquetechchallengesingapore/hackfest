import type { Route } from "./+types/past-events.$year";
import { useParams } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  const year = params.year ?? "Past Event";
  return [
    { title: `Mosque Tech Challenge ${year} – Past Event` },
  ];
}

export default function PastEventYear() {
  const { year } = useParams();

  return (
    <main className="pt-16 p-4 container mx-auto space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">
        Past Event {year}
      </h1>
      <p className="text-gray-700 dark:text-gray-200">
        This page will show details, photos, winners, and highlights for the
        selected year.
      </p>
    </main>
  );
}
