import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { dialogSetKey, dialogToggle } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
export default function EditGenderAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  return (
    <>
      <DialogModel
        dialogTitle={t("basicFormEditGenderTitle")}
        dialogKey="EditGender"
      >
        <Box component={"form"} onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                name="gender"
                label={t("basicFormEditGender")}
                fullWidth
                required
                margin="normal"
                select
              >
                <MenuItem value="female">
                  {t("basicFormEditGenderMenu1")}
                </MenuItem>
                <MenuItem value="male">
                  {" "}
                  {t("basicFormEditGenderMenu2")}
                </MenuItem>
                <MenuItem value="other">
                  {" "}
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
        value="Female"
        onEdit={() => dispatch(dialogSetKey("EditGender"))}
        editLabel={t("basicFormEditGenderTitle")}
      />
    </>
  );
}
