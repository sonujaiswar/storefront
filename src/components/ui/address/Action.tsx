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

  const handleSave = () => {
    const address_id = isEditing ? (addressForm as any).address_id : uuidv4();
    dispatch(addressSetSave({ address_id, ...addressForm }));
    dispatch(addressResetForm());
    dispatch(addressSetEditing(false));
    dispatch(dialogToggle());
  };

  return (
    <>
      <DialogModel dialogTitle={isEditing ? "Edit Address" : "Add Address"}>
        <Box component="form">
          <DialogContent>
            <TextField
              fullWidth
              label="Full Name"
              value={addressForm.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              value={addressForm.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address Line 1"
              value={addressForm.addressLine1}
              onChange={(e) => handleChange("addressLine1", e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address Line 2"
              value={addressForm.addressLine2}
              onChange={(e) => handleChange("addressLine2", e.target.value)}
              margin="normal"
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="City"
                  value={addressForm.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="State"
                  value={addressForm.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  value={addressForm.postalCode}
                  onChange={(e) => handleChange("postalCode", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Country"
                  value={addressForm.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Landmark"
              value={addressForm.landmark}
              onChange={(e) => handleChange("landmark", e.target.value)}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </DialogActions>
        </Box>
      </DialogModel>

      <Button variant="outlined" onClick={() => dispatch(dialogToggle())}>
        Add Address
      </Button>
    </>
  );
}
