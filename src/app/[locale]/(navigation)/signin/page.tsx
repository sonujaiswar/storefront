"use client";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { useState } from "react";

import { useTranslations } from "next-intl";
import LoginWithEmail from "@/components/ui/signin/LoginWithEmail";
import LoginWithSocial from "@/components/ui/signin/LoginWithSocial";
import SocialIcon from "@/components/ui/signin/SocialIcon";
import { useUserManagement } from "@/hooks/useUserManagement";
export default function SignInPage() {
  const [useEmail, setUseEmail] = useState(false);

  const t = useTranslations("signinPage");
  const { redirectAfterLogin } = useUserManagement();
  React.useEffect(() => {
    redirectAfterLogin();
  }, [redirectAfterLogin]);

  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontFamily: "Playfair Display", mb: 1 }}>
        {t("title")}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        {t("description")}
      </Typography>

      {useEmail ? (
        <>
          <LoginWithEmail />
        </>
      ) : (
        <>
          {/* Google Sign-in */}
          <LoginWithSocial />
        </>
      )}

      {/* Toggle Sign-In Method */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {useEmail ? `${t("useSocial")}` : `${t("useEmail")}`}
        </Typography>
        <Button
          variant="text"
          onClick={() => setUseEmail((prev) => !prev)}
          sx={{ mt: 1, textTransform: "unset" }}
        >
          {useEmail ? <SocialIcon /> : `${t("useEmailButton")}`}
        </Button>
      </Box>
    </Container>
  );
}
