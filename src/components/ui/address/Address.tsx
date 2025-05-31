import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

import {
  addressSetAll,
  addressSetDelete,
  addressSetEditing,
  addressSetForm,
} from "@/controllers/slices/addressSlice";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import supabase from "@/lib/supabase/supabase";

import { AddressTypes } from "@/types/address/addressTypes";
import { RootState } from "@/types/stateTypes";

export default function AddressList() {
  const dispatch = useDispatch();
  const addresses = useSelector((state: RootState) => state.address.addresses);
  const userid = useSelector((state: RootState) => state.user.userid!);

  const handleEditAddress = (address: AddressTypes) => {
    dispatch(addressSetEditing(true));
    dispatch(addressSetForm(address));

    dispatch(dialogToggle());
  };

  const handleDeleteAddress = (id: string) => {
    dispatch(addressSetDelete(id));
  };

  const loadAddresses = async (id: string) => {
    const { data, error } = await supabase
      .from("user_addresses")
      .select("*")
      .eq("userid", id);
    dispatch(addressSetAll(data as AddressTypes[]));
    if (data?.length! > 0) {
      toast.success("Addresses loaded");
    }

    if (error && error.code !== "PGRST116") {
      console.error("Supabase error:", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userid) loadAddresses(userid);
  }, [userid]);

  return (
    <>
      {addresses?.map((addr: AddressTypes) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={addr.addressid}>
          <Card variant="outlined">
            <CardContent sx={{ minHeight: 240 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {addr.fullname} {addr.addressid}
              </Typography>
              <Typography>{addr.phone}</Typography>
              <Typography>{addr.addressline1}</Typography>
              <Typography>{addr.addressline2}</Typography>
              <Typography>
                {addr.city}, {addr.province} - {addr.postalcode}
              </Typography>
              <Typography>{addr.country}</Typography>

              <Box mt={2} display="flex" gap={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleEditAddress(addr)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteAddress(addr.addressid)}
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
