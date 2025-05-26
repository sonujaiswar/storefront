"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Header from "@/components/ui/navbar/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/stateTypes";
import { settingsToggleDrawer } from "@/controllers/slices/settingsSlice";

import DrawerMode from "@/components/layouts/sidebar/DrawerMode";
import Unprotectedmode from "@/app/system/Unprotectedmode";
import { sessionSetProtectedMode } from "@/controllers/slices/sessionSlice";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "ismobile",
})<{ open?: boolean; ismobile?: boolean }>(({ theme, open, ismobile }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: ismobile ? 0 : `-${drawerWidth}px`,
  ...(open &&
    !ismobile && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
}));

export default function Common({
  children,
  protectedMode = false,
}: Readonly<{ children: React.ReactNode; protectedMode?: boolean }>) {
  const open = useSelector((state: RootState) => state.settings.isDrawerOpen);
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.settings.isMobile);
  const handleDrawerClose = () => {
    dispatch(settingsToggleDrawer());
  };

  React.useEffect(() => {
    dispatch(sessionSetProtectedMode(protectedMode));
  }, []);

  return (
    <Unprotectedmode>
      <Box sx={{ display: "flex" }} component={"section"}>
        <Header />
        <DrawerMode
          drawerWidth={drawerWidth}
          isMobile={isMobile}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />

        <Main open={open} ismobile={isMobile}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </Unprotectedmode>
  );
}
