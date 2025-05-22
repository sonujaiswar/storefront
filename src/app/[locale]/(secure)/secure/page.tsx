"use client";
import React from "react";
import { Typography, Divider, Grid, Card, CardContent } from "@mui/material";
import SecurityUI from "@/components/ui/security/Action";
import { useTranslations } from "next-intl";

const SecurityPage: React.FC = () => {
  const t = useTranslations("securityPage");
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
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t("ChangePassword")}
            </Typography>
            <SecurityUI />
          </CardContent>
        </Card>
      </Grid>
      {/* Password Change */}
    </Grid>
  );
};

export default SecurityPage;
