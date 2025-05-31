"use client";
// src/components/CustomerAddressUI.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  CardActionArea,
} from "@mui/material";
import { AddLocation } from "@mui/icons-material";
import Addaddress from "@/components/ui/address/Action";
import Address from "@/components/ui/address/Address";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { dialogSetKey, dialogToggle } from "@/controllers/slices/dialogSlice";
import { addressSetEditing } from "@/controllers/slices/addressSlice";

export default function CustomerAddressUI() {
  const t = useTranslations("addressPage");
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4" gutterBottom>
          {t("title")}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>{t("description")}</Typography>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined">
              <CardActionArea
                onClick={() => {
                  // dispatch(dialogToggle());
                  dispatch(dialogSetKey("addaddress"));
                  dispatch(addressSetEditing(false));
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 240,
                  }}
                >
                  <AddLocation sx={{ fontSize: 92, color: "primary.main" }} />
                  <Typography variant="h6">
                    {t("addAddressCardAction")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Address /> {/* Render the Address component */}
        </Grid>
      </Grid>
      <Addaddress />
    </Grid>
  );
}
