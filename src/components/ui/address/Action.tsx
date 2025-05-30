import React from "react";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import {
  addressSetAll,
  addressSetEditing,
  addressSetSave,
} from "@/controllers/slices/addressSlice";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import { RootState } from "@/types/stateTypes";
import {
  Box,
  Button,
  Grid,
  TextField,
  DialogActions,
  DialogContent,
  Autocomplete,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { countriesAndSubdivisions } from "@/utils/countriesAndSubdivisions";
import { countriesAndSubdivisionsTypes } from "@/types/utils/countriesAndSubdivisionsTypes";
import supabase from "@/lib/supabase/supabase";
import { toast } from "react-toastify";

export default function Addaddress() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state: RootState) => state.address.isEditing);
  const addressForm = useSelector(
    (state: RootState) => state.address.addressForm
  );
  const userid = useSelector((state: RootState) => state.user.userid!);
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error: selectError } = await supabase
      .from("user_addresses")
      .upsert({
        userid,
        fullname,
        phone,
        addressline1,
        addressline2,
        city,
        postalcode,
        landmark,
        province: province?.code,
        country: country?.countryCode,
      })
      .eq("userid", userid)
      .select()
      .single();

    if (data) {
      dispatch(addressSetSave(data));
      toast("Address saved", { type: "success" });
    }

    if (selectError && selectError.code !== "PGRST116") {
      console.error("Supabase select error:", selectError.message);
      toast(selectError.message, { type: "error" });
      return;
    }
    const address_id = isEditing ? (addressForm as any).address_id : uuidv4();

    // Here you should actually dispatch addressSetSave with all field values
    // dispatch(addressSetSave({...}))

    dispatch(addressSetEditing(false));
    dispatch(dialogToggle());
  };

  const t = useTranslations("addressPage");

  const [fullname, setfullname] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [addressline1, setaddressline1] = React.useState<string>("");
  const [addressline2, setaddressline2] = React.useState<string>("");
  const [city, setcity] = React.useState<string>("");
  const [province, setprovince] = React.useState<{
    code: string;
    name: string;
  } | null>(null);
  const [postalcode, setpostalcode] = React.useState<string>("");
  const [landmark, setlandmark] = React.useState<string>("");
  const [country, setcountry] =
    React.useState<countriesAndSubdivisionsTypes | null>(null);

  const selectedCountry: countriesAndSubdivisionsTypes | undefined =
    countriesAndSubdivisions.find(
      (c) => c.countryCode === country?.countryCode
    );
  const isProvinceAvailable = selectedCountry?.subdivisions?.length! > 0;

  return (
    <React.Fragment>
      <DialogModel
        dialogTitle={isEditing ? t("addressEditForm") : t("addressAddForm")}
      >
        <Box component="form" onSubmit={handleSave}>
          <DialogContent>
            <TextField
              fullWidth
              label={t("addressFormFullName")}
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormPhone")}
              value={phone}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) {
                  setPhone(val);
                }
              }}
              margin="normal"
              type="tel"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormLine1")}
              value={addressline1}
              onChange={(e) => setaddressline1(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormLine2")}
              value={addressline2}
              onChange={(e) => setaddressline2(e.target.value)}
              margin="normal"
            />

            <Grid container spacing={2}>
              <Grid size={isProvinceAvailable ? 6 : 12}>
                <Autocomplete
                  options={countriesAndSubdivisions}
                  getOptionLabel={(option) => option.countryName}
                  onChange={(_, newValue) => {
                    setcountry(newValue);
                    setprovince(null); // reset province
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t("addressFormCountry")}
                      variant="outlined"
                      required
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              {isProvinceAvailable && (
                <Grid size={6}>
                  <Autocomplete
                    options={country?.subdivisions || []}
                    getOptionLabel={(option) => option.name}
                    onChange={(_, newValue) => {
                      setprovince(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={t("addressFormState")}
                        variant="outlined"
                        required
                        margin="normal"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              )}
            </Grid>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormCity")}
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormPincode")}
                  value={postalcode}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,6}$/.test(val)) {
                      setpostalcode(val);
                    }
                  }}
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label={t("addressFormLandmark")}
              value={landmark}
              onChange={(e) => setlandmark(e.target.value)}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              {isEditing ? t("addressFormUpdate") : t("addressFormSave")}
            </Button>
          </DialogActions>
        </Box>
      </DialogModel>
    </React.Fragment>
  );
}
