import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import DialogModel from "../../layouts/dialog/DialogModel";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import { countriesAndSubdivisions } from "@/utils/countriesAndSubdivisions";
import { RootState } from "@/types/stateTypes";
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
