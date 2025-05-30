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
import supabase from "@/lib/supabase/supabase";
import { toast } from "react-toastify";

export default function EditDOBAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const dob = useSelector((state: RootState) => state.user.dob);
  const displayDOB = dob ? format(parseISO(dob), "dd-MM-yyyy") : "";
  const [dateofbirth, setDob] = React.useState<Date | null>(
    dob ? new Date(dob) : null
  );
  const tm = useTranslations("toastMessage");
  const [touched, setTouched] = React.useState<boolean>(false);
  const uid = useSelector((state: RootState) => state.user.uid!);
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSetDOB(dateofbirth?.toISOString() || ""));
    const { data, error: selectError } = await supabase
      .from("users")
      .update({ dob: dateofbirth?.toISOString() || "" })
      .eq("uid", uid)
      .select()
      .single();

    if (data) {
      toast(tm("textFieldDOB"), { type: "success" });
    }

    if (selectError && selectError.code !== "PGRST116") {
      console.error("Supabase select error:", selectError.message);
      toast(selectError.message, { type: "error" });
      return;
    }
    setDob(null);
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
                  format="dd-MM-yyyy"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                      onBlur: () => setTouched(true),
                      error: touched && !dateofbirth,
                      helperText:
                        touched && !dateofbirth
                          ? t("basicFormEditDOBError")
                          : "",
                    },
                  }}
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
        tooltip={t("basicFormEditDOBTooltip")}
        onEdit={() => dispatch(dialogSetKey("EditDOB"))}
        editLabel={t("basicFormEditDOBLink")}
      />
    </>
  );
}
