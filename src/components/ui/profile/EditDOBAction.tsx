"use client";

import { useDispatch } from "react-redux";
import ProfileRow from "./ProfileRow";
import { dialogSetKey, dialogToggle } from "@/controllers/slices/dialogSlice";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import * as React from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function EditDOBAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const [dob, setDob] = React.useState<Date | null>(null);

  return (
    <>
      <DialogModel dialogTitle={t("basicFormEditDOBTitle")} dialogKey="EditDOB">
        <Box component={"form"} onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid size={12}>
                <DatePicker
                  label={t("basicFormEditDOB")}
                  value={dob}
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
        value="06/06/1991"
        tooltip="Your date of birth is needed for account security and to help us personalize your experience."
        onEdit={() => dispatch(dialogSetKey("EditDOB"))}
        editLabel={t("basicFormEditDOBLink")}
      />
    </>
  );
}
