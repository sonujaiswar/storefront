"use client";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Attirebella from "@/components/layouts/brand/Attirebella";
import { useDispatch } from "react-redux";
import {
  settingsToggleDrawer,
  settingsToggleMode,
} from "@/controllers/slices/settings";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
          }}
          onClick={() => dispatch(settingsToggleDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <Attirebella />
        <Button color="inherit" onClick={() => dispatch(settingsToggleMode())}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
