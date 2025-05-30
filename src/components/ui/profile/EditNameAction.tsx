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
  const firstName = useSelector((state: RootState) => state.user.firstname!);
  const lastName = useSelector((state: RootState) => state.user.lastname!);

  const [firstname, setFirstName] = React.useState<string>(firstName);
  const [lastname, setlastName] = React.useState<string>(lastName);
  const [touched, setTouched] = React.useState<boolean>(false);
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSetFullName({ firstname, lastname }));
    // setFirstName("");
    // setlastName("");
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
                error={touched && !firstname}
                helperText={
                  touched && !firstname
                    ? t("basicFormEditFirstNameTextFieldHelperText")
                    : ""
                }
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="lastName"
                label={t("basicFormLastName")}
                value={lastname}
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
