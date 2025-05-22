import DialogModel from "@/components/layouts/dialog/DialogModel";
import {
  addressResetForm,
  addressSetEditing,
  addressSetFormField,
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
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function Addaddress() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state: RootState) => state.address.isEditing);
  const addressForm = useSelector(
    (state: RootState) => state.address.addressForm
  );

  const handleChange = (field: keyof typeof addressForm, value: string) => {
    dispatch(addressSetFormField({ field, value }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const address_id = isEditing ? (addressForm as any).address_id : uuidv4();
    dispatch(addressSetSave({ address_id, ...addressForm }));
    dispatch(addressResetForm());
    dispatch(addressSetEditing(false));
    dispatch(dialogToggle());
  };

  const t = useTranslations("addressPage");

  return (
    <>
      <DialogModel
        dialogTitle={isEditing ? t("addressEditForm") : t("addressAddForm")}
      >
        <Box component="form" onSubmit={handleSave}>
          <DialogContent>
            <TextField
              fullWidth
              label={t("addressFormFullName")}
              value={addressForm.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormPhone")}
              value={addressForm.phone}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) {
                  handleChange("phone", val);
                }
              }}
              margin="normal"
              type="tel"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormLine1")}
              value={addressForm.addressLine1}
              onChange={(e) => handleChange("addressLine1", e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label={t("addressFormLine2")}
              value={addressForm.addressLine2}
              onChange={(e) => handleChange("addressLine2", e.target.value)}
              margin="normal"
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormCity")}
                  value={addressForm.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormState")}
                  value={addressForm.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormPincode")}
                  value={addressForm.postalCode}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,6}$/.test(val)) {
                      handleChange("postalCode", val);
                    }
                  }}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label={t("addressFormCountry")}
                  value={addressForm.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label={t("addressFormLandmark")}
              value={addressForm.landmark}
              onChange={(e) => handleChange("landmark", e.target.value)}
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
    </>
  );
}
