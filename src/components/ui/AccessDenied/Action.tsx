"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SinglePage from "@/components/layouts/common/SinglePage";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import { useRouter } from "next/navigation";

export default function AccessDenied() {
  const t = useTranslations("access-denied");
  const router = useRouter();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push(NavigationRoutes.signinPage.url);
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SinglePage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: 2,
          gap: 2,
          minWidth: "40vw",
          minHeight: "20vh",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {t("title")}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t("description")}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          LinkComponent={Link}
          startIcon={NavigationRoutes.signinPage.icon}
          href={NavigationRoutes.signinPage.url}
        >
          {t("buttonText")}
        </Button>
      </Box>
    </SinglePage>
  );
}
