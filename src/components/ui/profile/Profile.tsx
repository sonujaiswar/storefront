import React from "react";
import { Paper } from "@mui/material";
import EditLanguageAction from "./EditLanguageAction";
import EditLocationAction from "./EditLocationAction";

export default function Profile() {
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <EditLocationAction />
        <EditLanguageAction />
      </Paper>
    </>
  );
}
