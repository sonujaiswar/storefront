"use client";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { secureRoutes } from "@/constants/SecureRoutes";
import { useDispatch, useSelector } from "react-redux";
import { utilSetStripLocale } from "@/controllers/slices/utilSlice";
import { RootState } from "@/types/stateTypes";

export default function Mainmenu() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(utilSetStripLocale(pathname));
  }, [pathname]);

  const stripedPathname = useSelector((state: RootState) => state.utils.path);
  return (
    <List>
      {secureRoutes.map((obj, index) => {
        const isSelected = stripedPathname === obj.url;

        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={isSelected}
              onClick={() => router.push(obj.url)}
            >
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
