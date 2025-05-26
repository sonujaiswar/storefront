import React, { use } from "react";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField } from "@mui/material";
import { userSetFullName } from "@/controllers/slices/userSlice";
import { RootState } from "@/types/stateTypes";

export default function EditNameAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const firstName = useSelector(
    (state: RootState) => state.user.user.first_name
  );
  const lastName = useSelector((state: RootState) => state.user.user.last_name);

  const [first_name, setFirstName] = React.useState<string>(firstName);
  const [last_name, setlastName] = React.useState<string>(lastName);
  const [touched, setTouched] = React.useState<boolean>(false);
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSetFullName({ first_name, last_name }));
    setFirstName("");
    setlastName("");
    dispatch(dialogReset());
  };

  return (
    <>
      <DialogModel dialogTitle={t("basicFormEditTitle")} dialogKey="EditName">
        <Box component={"form"} onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="firstName"
                label={t("basicFormFirstName")}
                fullWidth
                required
                onBlur={() => setTouched(true)}
                error={touched && !first_name}
                helperText={
                  touched && !first_name
                    ? t("basicFormEditFirstNameTextFieldHelperText")
                    : ""
                }
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="lastName"
                label={t("basicFormLastName")}
                value={last_name}
                onChange={(e) => setlastName(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid size={12} display="flex" justifyContent={"end"}>
              <Button type="submit" variant="contained">
                {t("basicFormEditButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <ProfileRow
        label={t("basicFormFullName")}
        value={firstName + " " + lastName}
        onEdit={() => dispatch(dialogSetKey("EditName"))}
        editLabel={t("basicFormEditFullName")}
      />
    </>
  );
}
