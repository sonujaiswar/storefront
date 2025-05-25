import React from "react";
import { Divider, Paper, Typography } from "@mui/material";
import EditLanguageAction from "./EditLanguageAction";
import EditLocationAction from "./EditLocationAction";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("profilePage");
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">{t("profileTitle")}</Typography>
        <Divider sx={{ my: 2 }} />
        <EditLocationAction />
        <EditLanguageAction />
      </Paper>
    </>
  );
}
