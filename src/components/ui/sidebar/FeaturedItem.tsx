import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CategoryIcon from "@mui/icons-material/Category";
import Link from "next/link";
import { NavigationRoutes } from "@/constants/NavigationRoutes";

export default function FeaturedItem() {
  return (
    <>
      <List component="nav" aria-label="menu list">
        <ListSubheader component="div" id="nested-list-subheader">
          Featured Items
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Offer" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          LinkComponent={Link}
          href={NavigationRoutes.productsPage.url}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Explore All" />
        </ListItemButton>
      </List>
    </>
  );
}
