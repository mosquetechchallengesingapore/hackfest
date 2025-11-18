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
    <main className="pt-16 p-4 container mx-auto space-y-10">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">
          Mosque Tech Challenge
        </h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-200">
          Landing page placeholder for the current years event.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Brief description of the event, organizers, and venue will go here.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Event schedule and key dates will be shown here.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Partners &amp; Sponsors</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Logos and links for partners and sponsors will be added here.
        </p>
      </section>
    </main>
  );
}
