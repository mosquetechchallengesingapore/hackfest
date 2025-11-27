import type { Route } from "./+types/past-events._index";

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
    <main className="pt-16 p-4 container mx-auto space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Past Events</h1>
      <p className="text-gray-700 dark:text-gray-200">
        This page will show a grid or list of past years (e.g. 2023, 2022).
      </p>
    </main>
  );
}
