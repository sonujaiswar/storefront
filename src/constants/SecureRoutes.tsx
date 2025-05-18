import { NavigationRoutes } from "./NavigationRoutes";

type NavigationRouteKey = keyof typeof NavigationRoutes;

const routeKeys: NavigationRouteKey[] = [
  "dashboardPage",
  "profilePage",
  "orderPage",
  "favoritePage",
  "addressPage",
  "securityPage",
  "helpPage",
];

const secureRoutes = routeKeys.map((key) => NavigationRoutes[key]);
export { secureRoutes };
