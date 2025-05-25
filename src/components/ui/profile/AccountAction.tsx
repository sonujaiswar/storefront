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
import { useDispatch } from "react-redux";
import DialogModel from "../../layouts/dialog/DialogModel";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";

export default function AccountAction() {
  const t = useTranslations("profilePage");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const dispatch = useDispatch();
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(dialogReset());
  };
  return (
    <>
      <DialogModel dialogTitle={t("accountTitle")} dialogKey="account">
        <Box component={"form"} onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                label={t("basicFormEditPhone")}
                fullWidth
                required
                value={phoneNumber}
                onChange={(e) => {
                  const val = e.target.value;

                  // Allow only digits
                  if (/^\d{0,10}$/.test(val)) {
                    setPhoneNumber(val);
                  }
                }}
                margin="normal"
              />
            </Grid>
            <Grid size={12} display="flex" justifyContent={"end"}>
              <Button type="submit" variant="contained">
                {t("basicFormEditPhoneButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">{t("accountTitle")}</Typography>
        <Divider sx={{ my: 2 }} />

        <ProfileRow
          label={t("basicFormEditEmail")}
          value="a6GxO@example.com"
          tooltip="The email address you use to sign in to your account."
        />
        <Divider sx={{ my: 1 }} />

        <ProfileRow
          label={t("basicFormEditPhone")}
          value="+91 1234567890"
          onEdit={() => dispatch(dialogSetKey("account"))}
          editLabel={t("basicFormEditPhoneLink")}
        />
      </Paper>
    </>
  );
}
