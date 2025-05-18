import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ListSubheader from "@mui/material/ListSubheader";

import { NavigationRoutes } from "@/constants/NavigationRoutes";
import FeaturedItemListSkeleton from "@/components/skeletons/FeaturedItemListSkeleton";
const FeaturedItemList = React.lazy(() => import("./FeaturedItemList"));
export default function FeaturedItem() {
  return (
    <>
      <List component="nav" aria-label="menu list">
        <ListSubheader component="div" id="nested-list-subheader">
          Featured Items
        </ListSubheader>
        <React.Suspense fallback={<FeaturedItemListSkeleton />}>
          <FeaturedItemList
            href={NavigationRoutes.trendingPage.url}
            text={NavigationRoutes.trendingPage.text}
            icon={NavigationRoutes.trendingPage.icon}
          />
          <Divider />
          <FeaturedItemList
            href={NavigationRoutes.offersPage.url}
            text={NavigationRoutes.offersPage.text}
            icon={NavigationRoutes.offersPage.icon}
          />

          <Divider />
          <FeaturedItemList
            href={NavigationRoutes.productsPage.url}
            text={NavigationRoutes.productsPage.text}
            icon={NavigationRoutes.productsPage.icon}
          />
        </React.Suspense>
      </List>
    </>
  );
}
