"use client";
import { settingsToggleMode } from "@/controllers/slices/settings";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Common({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => {
          dispatch(settingsToggleMode());
        }}
      >
        Toggle
      </Button>
      {children}
    </>
  );
}
