"use client";
import { format } from "date-fns";
import { parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import ProfileRow from "./ProfileRow";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import * as React from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RootState } from "@/types/stateTypes";
import { userSetDOB } from "@/controllers/slices/userSlice";

export default function EditDOBAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const dob = useSelector((state: RootState) => state.user.dob);
  const displayDOB = dob ? format(parseISO(dob), "dd-MM-yyyy") : "";
  const [dateofbirth, setDob] = React.useState<Date | null>(
    dob ? new Date(dob) : null
  );
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSetDOB(dateofbirth?.toISOString() || ""));
    dispatch(dialogReset());
  };
  return (
    <>
      <DialogModel dialogTitle={t("basicFormEditDOBTitle")} dialogKey="EditDOB">
        <Box component={"form"} onSubmit={handleSave}>
          <Grid container spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid size={12}>
                <DatePicker
                  label={t("basicFormEditDOB")}
                  shouldDisableDate={(date) => date > new Date()}
                  value={dateofbirth}
                  onChange={(newValue) => setDob(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </LocalizationProvider>
            <Grid size={12} display="flex" justifyContent={"end"}>
              <Button type="submit" variant="contained">
                {t("basicFormEditDOBButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <ProfileRow
        label={t("basicFormEditDOB")}
        value={displayDOB}
        tooltip="Your date of birth is needed for account security and to help us personalize your experience."
        onEdit={() => dispatch(dialogSetKey("EditDOB"))}
        editLabel={t("basicFormEditDOBLink")}
      />
    </>
  );
}
