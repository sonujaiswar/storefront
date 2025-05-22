import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { dialogSetKey, dialogToggle } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField } from "@mui/material";

export default function EditNameAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  return (
    <>
      <DialogModel dialogTitle={t("basicFormEditTitle")} dialogKey="EditName">
        <Box component={"form"} onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="firstName"
                label={t("basicFormFirstName")}
                fullWidth
                required
                margin="normal"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="lastName"
                label={t("basicFormLastName")}
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
        value="Sonu J"
        onEdit={() => dispatch(dialogSetKey("EditName"))}
        editLabel={t("basicFormEditFullName")}
      />
    </>
  );
}
