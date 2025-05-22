"use client";
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
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Account</Typography>
          <Divider sx={{ my: 2 }} />

          <ProfileRow
            label="Email address"
            value="a6GxO@example.com"
            tooltip="The email address you use to sign in to your account."
            onEdit={() => console.log("Edit DOB")}
            editLabel="Edit email"
          />
          <Divider sx={{ my: 1 }} />

          <ProfileRow
            label="Phone number"
            value="+91 1234567890"
            onEdit={() => console.log("Edit location")}
            editLabel="Edit phone"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
