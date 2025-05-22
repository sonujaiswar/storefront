import { Divider, Paper, Typography } from "@mui/material";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { dialogSetKey } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField, MenuItem } from "@mui/material";
import { countriesAndSubdivisions } from "@/utils/countriesAndSubdivisions";
import { RootState } from "@/types/stateTypes";
import { setLocationFormField } from "@/controllers/slices/locationSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");

  const countryCode = useSelector(
    (state: RootState) => state.location.countryCode
  );
  const subdivisions = useSelector(
    (state: RootState) => state.location.subdivisions
  );

  const handleChange = (
    field: "countryCode" | "subdivisions",
    value: string
  ) => {
    dispatch(setLocationFormField({ field, value }));
  };

  return (
    <>
      <DialogModel
        dialogTitle={t("basicFormEditProvince")}
        dialogKey="EditLocation"
      >
        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                label={t("basicFormEditCountry")}
                fullWidth
                required
                margin="normal"
                select
                value={countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
              >
                {countriesAndSubdivisions.map((country) => (
                  <MenuItem
                    key={country.countryCode}
                    value={country.countryCode}
                  >
                    {country.countryName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Optional: Add subdivisions dropdown if needed */}
            {/* <Grid size={12}>
              <TextField
                label={t("basicFormEditStateProvince")}
                fullWidth
                margin="normal"
                select
                value={subdivisions}
                onChange={(e) => handleChange("subdivisions", e.target.value)}
              >
                {(countriesAndSubdivisions.find(c => c.countryCode === countryCode)?.subdivisions || []).map((sub) => (
                  <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                ))}
              </TextField>
            </Grid> */}

            <Grid size={12} display="flex" justifyContent="end">
              <Button type="submit" variant="contained">
                {t("basicFormEditLocationButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">{t("profileTitle")}</Typography>
        <Divider sx={{ my: 2 }} />
        <ProfileRow
          label={t("basicFormEditCountry")}
          value={countryCode}
          onEdit={() => dispatch(dialogSetKey("EditLocation"))}
          editLabel="Edit country"
        />
        <Divider sx={{ my: 1 }} />
        <ProfileRow
          label={t("basicFormEditStateProvince")}
          value="Maharashtra"
          onEdit={() => dispatch(dialogSetKey("EditLocation"))}
          editLabel={t("basicFormEditProvince")}
        />
        <Divider sx={{ my: 1 }} />
        <ProfileRow
          label="Language"
          value="English"
          onEdit={() => console.log("Edit language")}
          editLabel="Edit language"
        />
      </Paper>
    </>
  );
}
