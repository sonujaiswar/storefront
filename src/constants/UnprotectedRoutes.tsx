import { NavigationRoutes } from "./NavigationRoutes";

type NavigationRouteKey = keyof typeof NavigationRoutes;

const routeKeys: NavigationRouteKey[] = ["aboutPage", "helpPage"];

const helpRoutes = routeKeys.map((key) => NavigationRoutes[key]);
export { helpRoutes };

console.log(helpRoutes);
