"use client";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { secureRoutes } from "@/constants/SecureRoutes";
import { useDispatch, useSelector } from "react-redux";
import { utilSetStripLocale } from "@/controllers/slices/utilSlice";
import { RootState } from "@/types/stateTypes";
import { useTranslations } from "next-intl";

export default function Mainmenu() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(utilSetStripLocale(pathname));
  }, [pathname]);

  const stripedPathname = useSelector((state: RootState) => state.utils.path);
  return (
    <List>
      <ListSubheader
        component={"div"}
        id="nested-list-subheader"
        sx={{ fontWeight: 600, fontFamily: "Roboto" }}
      >
        {t("ProtectedSidebarText.navigationSubHeader")}, USER
      </ListSubheader>
      {secureRoutes.map((obj, index) => {
        const isSelected = stripedPathname === obj.url;

        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={isSelected}
              onClick={() => router.push(obj.url)}
            >
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={t(obj.text)} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
