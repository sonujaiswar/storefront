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
import Address from "@/components/ui/address/Address";

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
        <Address /> {/* Render the Address component */}
      </Grid>

      <Addaddress />
    </Box>
  );
}
