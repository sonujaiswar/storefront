import DialogModel from "@/components/layouts/dialog/DialogModel";
import {
  addressSetDelete,
  addressSetEditing,
  addressSetForm,
} from "@/controllers/slices/addressSlice";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import { AddressTypes } from "@/types/address/addressTypes";
import { RootState } from "@/types/stateTypes";
import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Address() {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address.addresses);
  function handleOpenDialog(address: AddressTypes) {
    dispatch(addressSetEditing(true));
    dispatch(addressSetForm(address));
    dispatch(dialogToggle());
  }

  function handleDeleteAddress(id: string) {
    dispatch(addressSetDelete(id));
  }

  return (
    <>
      {address.map((addr: AddressTypes) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={addr.address_id}>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent sx={{ minHeight: 240 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {addr.full_name}
              </Typography>
              <Typography>{addr.phone}</Typography>
              <Typography>{addr.addressLine1}</Typography>
              <Typography>{addr.addressLine2}</Typography>
              <Typography>
                {addr.city}, {addr.state} - {addr.postalCode}
              </Typography>
              <Typography>{addr.country}</Typography>

              <Box mt={2}>
                <IconButton
                  color="primary"
                  onClick={() => handleOpenDialog(addr)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => handleDeleteAddress(addr.address_id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
