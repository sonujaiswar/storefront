"use client";

import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";

import { useTranslations } from "next-intl";

export default function LoginWithSocial() {
  const t = useTranslations("signinPage");

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        sx={{ mb: 3, fontWeight: 600, py: 1.3, borderRadius: 2 }}
      >
        {t("socialGoogleButtonText")}
      </Button>
    </>
  );
}
