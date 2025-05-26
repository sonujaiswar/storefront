import React from "react";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { RootState } from "@/types/stateTypes";
import { userSetGender } from "@/controllers/slices/userSlice";
export default function EditGenderAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const [selectGender, setSelectGender] = React.useState<string>("");
  const gender = useSelector((state: RootState) => state.user.gender);
  const [touched, setTouched] = React.useState<boolean>(false);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSetGender(selectGender));
    dispatch(dialogReset());
  };
  return (
    <>
      <DialogModel
        dialogTitle={t("basicFormEditGenderTitle")}
        dialogKey="EditGender"
      >
        <Box component={"form"} onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                name="gender"
                label={t("basicFormEditGender")}
                fullWidth
                required
                value={selectGender}
                onChange={(e) => setSelectGender(e.target.value)}
                onBlur={() => setTouched(true)}
                error={touched && !selectGender}
                helperText={
                  touched && !selectGender
                    ? t("basicFormEditGenderHelperText")
                    : ""
                }
                margin="normal"
                select
              >
                <MenuItem value="Female">
                  {t("basicFormEditGenderMenu1")}
                </MenuItem>
                <MenuItem value="Male">
                  {t("basicFormEditGenderMenu2")}
                </MenuItem>
                <MenuItem value="Other">
                  {t("basicFormEditGenderMenu3")}
                </MenuItem>
              </TextField>
            </Grid>

            <Grid size={12} display="flex" justifyContent={"end"}>
              <Button type="submit" variant="contained">
                {t("basicFormEditGenderButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <ProfileRow
        label={t("basicFormEditGender")}
        value={gender}
        onEdit={() => dispatch(dialogSetKey("EditGender"))}
        editLabel={t("basicFormEditGenderLink")}
      />
    </>
  );
}
