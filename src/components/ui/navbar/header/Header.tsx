"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Attirebella from "@/components/layouts/brand/Attirebella";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { settingsToggleDrawer } from "@/controllers/slices/settings";
import { RootState } from "@/types/stateTypes";
import Action from "./Action";
import { settingsToggleMode } from "@/controllers/slices/settings";
import Button from "@mui/material/Button";
export default function Header() {
  const dispatch = useDispatch();
  const isDrawerActive = useSelector(
    (state: RootState) => state.settings.isDrawerOpen
  );
  const isMobile = useSelector((state: RootState) => state.settings.isMobile);
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{
              mr: 2,
            }}
            onClick={() => dispatch(settingsToggleDrawer())}
          >
            {isDrawerActive && isMobile ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Attirebella />
          <Button
            color="inherit"
            onClick={() => dispatch(settingsToggleMode())}
          >
            Change
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Action />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
