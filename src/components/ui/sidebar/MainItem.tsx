import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import { useTranslations } from "next-intl";
import { helpRoutes } from "@/constants/UnprotectedRoutes";
export default function MainItem() {
  const t = useTranslations();
  return (
    <>
      <List component="nav" aria-label="menu list">
        <ListSubheader component="div" id="nested-list-subheader">
          {t("UnprotectedSidebar.navigationHelp")}
        </ListSubheader>
        {helpRoutes.map((route, index) => (
          <ListItemButton key={index} href={route.url}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={t(route.text)} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
