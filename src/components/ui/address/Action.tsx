import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  Box,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  Autocomplete,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

import DialogModel from "@/components/layouts/dialog/DialogModel";
import {
  addressSetEditing,
  addressSetSave,
} from "@/controllers/slices/addressSlice";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import { RootState } from "@/types/stateTypes";
import { countriesAndSubdivisions } from "@/utils/countriesAndSubdivisions";
import { countriesAndSubdivisionsTypes } from "@/types/utils/countriesAndSubdivisionsTypes";
import supabase from "@/lib/supabase/supabase";

const initialFormState = {
  fullname: "",
  phone: "",
  addressline1: "",
  addressline2: "",
  city: "",
  postalcode: "",
  landmark: "",
};

// Custom hook to handle address form state & logic
function useAddressForm(
  isDialogOpen: boolean,
  isEditing: boolean,
  addressForm: any
) {
  const [form, setForm] = useState(initialFormState);
  const [country, setCountry] = useState<countriesAndSubdivisionsTypes | null>(
    null
  );
  const [province, setProvince] = useState<{
    code: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    if (isDialogOpen && isEditing) {
      setForm({
        fullname: addressForm.fullname || "",
        phone: addressForm.phone || "",
        addressline1: addressForm.addressline1 || "",
        addressline2: addressForm.addressline2 || "",
        city: addressForm.city || "",
        postalcode: addressForm.postalcode || "",
        landmark: addressForm.landmark || "",
      });

      const selected = countriesAndSubdivisions.find(
        (c) => c.countryCode === addressForm.country
      );
      setCountry(selected || null);

      if (selected && addressForm.province) {
        const prov = selected.subdivisions?.find(
          (p) => p.code === addressForm.province
        );
        setProvince(prov || null);
      } else {
        setProvince(null);
      }
    } else if (isDialogOpen === false && isEditing === false) {
      setForm(initialFormState);
      setCountry(null);
      setProvince(null);
    }
  }, [isDialogOpen, isEditing, addressForm]);

  const handleChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (field === "phone" && !/^\d{0,10}$/.test(value)) return;
      if (field === "postalcode" && !/^\d{0,6}$/.test(value)) return;
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  return {
    form,
    setForm,
    country,
    setCountry,
    province,
    setProvince,
    handleChange,
  };
}

// Reusable autocomplete renderer
function RenderAutocomplete<T>({
  options,
  value,
  onChange,
  getOptionLabel,
  label,
  required = false,
}: {
  options: T[];
  value: T | null;
  onChange: (_: any, value: T | null) => void;
  getOptionLabel: (option: T) => string;
  label: string;
  required?: boolean;
}) {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          margin="normal"
          required={required}
          fullWidth
        />
      )}
    />
  );
}

export default function Addaddress() {
  const t = useTranslations("addressPage");
  const dispatch = useDispatch();
  const { isEditing, addressForm } = useSelector(
    (state: RootState) => state.address
  );
  const userid = useSelector((state: RootState) => state.user.userid!);
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen);

  const {
    form,
    setForm,
    country,
    setCountry,
    province,
    setProvince,
    handleChange,
  } = useAddressForm(isDialogOpen, isEditing, addressForm);

  const [loading, setLoading] = useState(false);

  const selectedCountry = useMemo(
    () =>
      countriesAndSubdivisions.find(
        (c) => c.countryCode === country?.countryCode
      ),
    [country]
  );

  const isProvinceAvailable = (selectedCountry?.subdivisions?.length ?? 0) > 0;

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const addressid = isEditing ? addressForm.addressid : uuidv4();

    const { data, error } = await supabase
      .from("user_addresses")
      .upsert({
        addressid,
        userid,
        ...form,
        province: province?.code,
        country: country?.countryCode,
      })
      .select()
      .single();

    setLoading(false);

    if (data) {
      dispatch(addressSetSave(data));
      toast.success("Address saved");
    }

    if (error && error.code !== "PGRST116") {
      console.error("Supabase error:", error.message);
      toast.error(error.message);
      return;
    }

    setForm(initialFormState);
    setProvince(null);
    setCountry(null);

    dispatch(addressSetEditing(false));
    dispatch(dialogToggle());
  };

  const renderTextField = (
    label: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    required = false
  ) => (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      margin="normal"
      required={required}
    />
  );

  return (
    <DialogModel
      dialogTitle={isEditing ? t("addressEditForm") : t("addressAddForm")}
      key={isEditing ? addressForm.addressid : "add"}
      dialogKey={"addaddress"}
    >
      <Box component="form" onSubmit={handleSave}>
        <DialogContent>
          {renderTextField(
            t("addressFormFullName"),
            form.fullname,
            handleChange("fullname"),
            true
          )}
          {renderTextField(
            t("addressFormPhone"),
            form.phone,
            handleChange("phone"),
            true
          )}
          {renderTextField(
            t("addressFormLine1"),
            form.addressline1,
            handleChange("addressline1"),
            true
          )}
          {renderTextField(
            t("addressFormLine2"),
            form.addressline2,
            handleChange("addressline2")
          )}

          <Grid container spacing={2}>
            <Grid size={isProvinceAvailable ? 6 : 12}>
              <RenderAutocomplete
                options={countriesAndSubdivisions}
                getOptionLabel={(option) => option.countryName}
                value={country}
                onChange={(_, val) => {
                  setCountry(val);
                  setProvince(null);
                }}
                label={t("addressFormCountry")}
                required
              />
            </Grid>

            {isProvinceAvailable && (
              <Grid size={6}>
                <RenderAutocomplete
                  options={country?.subdivisions || []}
                  getOptionLabel={(option) => option.name}
                  value={province}
                  onChange={(_, val) => setProvince(val)}
                  label={t("addressFormState")}
                  required
                />
              </Grid>
            )}
          </Grid>

          <Grid container spacing={2}>
            <Grid size={6}>
              {renderTextField(
                t("addressFormCity"),
                form.city,
                handleChange("city"),
                true
              )}
            </Grid>
            <Grid size={6}>
              {renderTextField(
                t("addressFormPincode"),
                form.postalcode,
                handleChange("postalcode"),
                true
              )}
            </Grid>
          </Grid>

          {renderTextField(
            t("addressFormLandmark"),
            form.landmark,
            handleChange("landmark")
          )}
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading
              ? t("addressFormSaving")
              : isEditing
              ? t("addressFormUpdate")
              : t("addressFormSave")}
          </Button>
        </DialogActions>
      </Box>
    </DialogModel>
  );
}
