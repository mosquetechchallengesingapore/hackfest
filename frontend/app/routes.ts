import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/mtc2026.tsx"),
  route("about", "routes/about.tsx"),
  route("past-events", "routes/past-events-listing.tsx", [
    route("2025", "routes/past-events/mtc2025.tsx"),
  ]),
  route("admin", "routes/admin._index.tsx"),
] satisfies RouteConfig;
