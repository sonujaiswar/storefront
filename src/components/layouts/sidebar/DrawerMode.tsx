import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { RootState } from "@/types/stateTypes";
import Dashboardmenu from "@/components/ui/sidebar/Dashboardmenu";
import Mainmenu from "@/components/ui/sidebar/Mainmenu";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerMode({
  drawerWidth,
  isMobile,
  open,
  handleDrawerClose,
}: Readonly<{
  drawerWidth: number;
  isMobile: boolean;
  open: boolean;
  handleDrawerClose: () => void;
}>) {
  const theme = useTheme();

  const isProtected = useSelector(
    (state: RootState) => state.settings.isProtectedMode
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
      component={"aside"}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {isProtected === true ? <Dashboardmenu /> : <Mainmenu />}
    </Drawer>
  );
}
