import type { Route } from "./+types/admin._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin – Mosque Tech Challenge" },
    {
      name: "description",
      content: "Admin panel for managing Mosque Tech Challenge events.",
    },
  ];
}

export default function AdminIndex() {
  return (
    <main className="pt-16 p-4 container mx-auto space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
      <p className="text-gray-700 dark:text-gray-200">
        This page will contain the CRUD interface to manage events (add, edit,
        delete) and will be protected by admin authentication.
      </p>
    </main>
  );
}
