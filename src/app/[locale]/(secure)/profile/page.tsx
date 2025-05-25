"use client";
import AccountAction from "@/components/ui/profile/AccountAction";
import Basic from "@/components/ui/profile/Basic";
import Profile from "@/components/ui/profile/Profile";
import ProfileRow from "@/components/ui/profile/ProfileRow";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const t = useTranslations("profilePage");
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4">{t("title")}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>{t("description")}</Typography>
      </Grid>

      <Grid size={12}>
        <Basic />
      </Grid>

      <Grid size={12}>
        <Profile />
      </Grid>
      <Grid size={12}>
        <AccountAction />
      </Grid>
    </Grid>
  );
}
