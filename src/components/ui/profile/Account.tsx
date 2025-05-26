import React from "react";
import { Divider, Paper, Typography } from "@mui/material";

import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import AccountAction from "./AccountAction";

export default function Account() {
  const t = useTranslations("profilePage");
  const dispatch = useDispatch();

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">{t("accountTitle")}</Typography>
        <Divider sx={{ my: 2 }} />
        <AccountAction />
      </Paper>
    </>
  );
}
