import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("past-events", "routes/past-events._index.tsx", [
    route(":year", "routes/past-events.$year.tsx"),
  ]),
  route("admin", "routes/admin._index.tsx"),
] satisfies RouteConfig;
