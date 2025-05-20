"use client";
// src/components/CustomerAddressUI.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Addaddress from "@/components/ui/address/Action";

interface Address {
  id: number;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const initialAddresses: Address[] = [
  {
    id: 1,
    name: "Vivek Jaiswar",
    phone: "9876543210",
    addressLine1: "123 Station Road",
    addressLine2: "Near LTT",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400088",
    country: "India",
  },
];

export default function CustomerAddressUI() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleOpenDialog = (address?: Address) => {
    setEditingAddress(address || null);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setEditingAddress(null);
    setDialogOpen(false);
  };

  const handleSaveAddress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newAddress: Address = {
      id: editingAddress?.id || Date.now(),
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      addressLine1: formData.get("addressLine1") as string,
      addressLine2: formData.get("addressLine2") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      postalCode: formData.get("postalCode") as string,
      country: formData.get("country") as string,
    };

    if (editingAddress) {
      setAddresses(
        addresses.map((addr) =>
          addr.id === editingAddress.id ? newAddress : addr
        )
      );
    } else {
      setAddresses([...addresses, newAddress]);
    }

    handleCloseDialog();
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Saved Addresses
      </Typography>

      <Grid container spacing={2}>
        {addresses.map((address) => (
          <Grid size={{ xs: 12, md: 6 }} key={address.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {address.name}
                </Typography>
                <Typography>{address.phone}</Typography>
                <Typography>{address.addressLine1}</Typography>
                <Typography>{address.addressLine2}</Typography>
                <Typography>
                  {address.city}, {address.state} - {address.postalCode}
                </Typography>
                <Typography>{address.country}</Typography>

                <Box mt={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenDialog(address)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button variant="contained" onClick={() => handleOpenDialog()}>
          Add New Address
        </Button>
      </Box>
      <Addaddress />
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editingAddress ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <form onSubmit={handleSaveAddress}>
          <DialogContent>
            <TextField
              fullWidth
              name="name"
              label="Full Name"
              defaultValue={editingAddress?.name || ""}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="phone"
              label="Phone Number"
              defaultValue={editingAddress?.phone || ""}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="addressLine1"
              label="Address Line 1"
              defaultValue={editingAddress?.addressLine1 || ""}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              name="addressLine2"
              label="Address Line 2"
              defaultValue={editingAddress?.addressLine2 || ""}
              margin="normal"
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  defaultValue={editingAddress?.city || ""}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  defaultValue={editingAddress?.state || ""}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  name="postalCode"
                  label="Postal Code"
                  defaultValue={editingAddress?.postalCode || ""}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  name="country"
                  label="Country"
                  defaultValue={editingAddress?.country || ""}
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
