import React from "react";
import { Autocomplete, Divider, Paper, Typography } from "@mui/material";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import ProfileRow from "./ProfileRow";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import { Box, Button, Grid, TextField, MenuItem } from "@mui/material";
import { countriesAndSubdivisions } from "@/utils/countriesAndSubdivisions";
import { RootState } from "@/types/stateTypes";
import { setLocationSave } from "@/controllers/slices/locationSlice";
import { countriesAndSubdivisionsTypes } from "@/types/utils/countriesAndSubdivisionsTypes";

export default function EditLocationAction() {
  const dispatch = useDispatch();
  const t = useTranslations("profilePage");
  const countryCode = useSelector(
    (state: RootState) => state.location.area.countryCode
  );
  const provinceCode = useSelector(
    (state: RootState) => state.location.area.provinceCode
  );
  const [selectedCountryCode, setSelectedCountry] =
    React.useState<countriesAndSubdivisionsTypes | null>(
      countriesAndSubdivisions.find((c) => c.countryCode === countryCode) ||
        null
    );
  const [selectedProvince, setSelectedProvince] = React.useState<{
    code: string;
    name: string;
  } | null>(
    countriesAndSubdivisions
      .find((c) => c.countryCode === countryCode)
      ?.subdivisions.find((s) => s.code === provinceCode) || null
  );

  const selectedCountry: countriesAndSubdivisionsTypes | undefined =
    countriesAndSubdivisions.find(
      (c) => c.countryCode === selectedCountryCode?.countryCode
    );

  const isProvinceAvailable = selectedCountry?.subdivisions?.length! > 0;
  const [touched, setTouched] = React.useState<boolean>(false);

  React.useEffect(() => {
    setSelectedCountry(
      countriesAndSubdivisions.find((c) => c.countryCode === countryCode) ||
        null
    );
    setSelectedProvince(
      countriesAndSubdivisions
        .find((c) => c.countryCode === countryCode)
        ?.subdivisions.find((s) => s.code === provinceCode) || null
    );
  }, [countryCode, provinceCode]);

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      setLocationSave({
        area: {
          countryCode: selectedCountryCode?.countryCode,
          provinceCode: selectedProvince?.code,
        },
      })
    );
    dispatch(dialogReset());
  }

  return (
    <>
      <DialogModel
        dialogTitle={t("basicFormEditProvince")}
        dialogKey="EditLocation"
      >
        <Box component="form" onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Autocomplete
                options={countriesAndSubdivisions}
                getOptionLabel={(option) => option.countryName}
                onChange={(_, newValue) => {
                  setSelectedCountry(newValue);
                  setSelectedProvince(null); // reset province
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("basicFormEditCountry")}
                    variant="outlined"
                    required
                    margin="normal"
                    fullWidth
                    onBlur={() => setTouched(true)}
                    error={touched && !selectedCountryCode}
                    helperText={
                      touched && !selectedCountryCode
                        ? t("basicFormEditCountryHelperText")
                        : ""
                    }
                  />
                )}
              />
            </Grid>

            {/* Optional: Add subdivisions dropdown if needed */}
            {isProvinceAvailable && (
              <Grid size={12}>
                <Autocomplete
                  options={selectedCountryCode?.subdivisions || []}
                  getOptionLabel={(option) => option.name}
                  onChange={(_, newValue) => {
                    setSelectedProvince(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("basicFormEditStateProvince")}
                      variant="outlined"
                      required
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
            )}
            <Grid size={12} display="flex" justifyContent="end">
              <Button type="submit" variant="contained">
                {t("basicFormEditLocationButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <>
        <ProfileRow
          label={t("basicFormEditCountry")}
          value={
            countriesAndSubdivisions.find((c) => c.countryCode === countryCode)
              ?.countryName || ""
          }
          onEdit={() => dispatch(dialogSetKey("EditLocation"))}
          editLabel={t("basicFormEditCountryLink")}
        />
        <Divider sx={{ my: 1 }} />
        {(isProvinceAvailable || provinceCode) && (
          <>
            <ProfileRow
              label={t("basicFormEditStateProvince")}
              value={
                countriesAndSubdivisions
                  .find((c) => c.countryCode === countryCode)
                  ?.subdivisions.find((s) => s.code === provinceCode)?.name ||
                ""
              }
              onEdit={() => dispatch(dialogSetKey("EditLocation"))}
              editLabel={t("basicFormEditProvince")}
            />
            <Divider sx={{ my: 1 }} />
          </>
        )}
      </>
    </>
  );
}
