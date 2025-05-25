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
import { userSetPhone } from "@/controllers/slices/userSlice";

export default function AccountAction() {
  const t = useTranslations("profilePage");
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [touched, setTouched] = React.useState<boolean>(false);

  const countryCode = useSelector(
    (state: RootState) => state.location.area.countryCode
  );

  const countryData = countriesAndSubdivisions.find(
    (c) => c.countryCode === countryCode
  );

  const phoneNumberLength = countryData?.phoneLength || 10;
  const dialCode = countryData?.dialCode || 91;
  const phone = useSelector((state: RootState) => state.user.phone);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const regex = new RegExp(`^\\d{0,${phoneNumberLength}}$`);

    if (regex.test(val)) {
      setPhoneNumber(val);
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(true);

    if (phoneNumber.length !== phoneNumberLength) return;

    // Save logic here
    dispatch(userSetPhone(phoneNumber));
    setPhoneNumber("");
    setTouched(false);
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
                type="tel"
                value={phoneNumber}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                error={touched && phoneNumber.length !== phoneNumberLength}
                helperText={
                  touched && phoneNumber.length !== phoneNumberLength
                    ? t("phoneValidationError", { count: phoneNumberLength }) ||
                      `Phone number must be exactly ${phoneNumberLength} digits`
                    : " "
                }
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

      <ProfileRow
        label={t("basicFormEditEmail")}
        value="a6GxO@example.com"
        tooltip="The email address you use to sign in to your account."
      />
      <Divider sx={{ my: 1 }} />

      <ProfileRow
        label={t("basicFormEditPhone")}
        tooltip="The phone number is required to verify your account."
        value={`+${dialCode} ${phone || "xxxxxxxxxx"}`}
        onEdit={() => dispatch(dialogSetKey("account"))}
        editLabel={t("basicFormEditPhoneLink")}
      />
    </>
  );
}
