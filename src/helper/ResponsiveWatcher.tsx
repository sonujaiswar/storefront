"use client";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";
import { settingsIsMobile } from "@/controllers/slices/settingsSlice";

const ResponsiveWatcher = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    dispatch(settingsIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return null; // It's just for listening, doesn't render anything
};

export default ResponsiveWatcher;
