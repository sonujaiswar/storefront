"use client";
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";

import Link from "next/link";

import Attirebella from "@/components/layouts/brand/Attirebella";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import { useDispatch } from "react-redux";

import { sessionReset } from "@/controllers/slices/sessionSlice";
import { useSignOut } from "@/hooks/useSignOut";
import { signOut } from "firebase/auth";

const LogoutPage = () => {
  const router = useRouter();
  const redirectUrl = NavigationRoutes.homePage.url;
  const t = useTranslations("logoutPage");
  const dispatch = useDispatch();
  const { signOut } = useSignOut();
  //   const { logOut } = useLogOut(); // ✅ Call the hook to get logOut function

  // Run logout only once on mount
  useEffect(() => {
    dispatch(sessionReset());
    signOut();
    //logOut(); // ✅ Call logout from hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  Redirect after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      //   router.push(redirectUrl);
    }, 3000);
    return () => clearTimeout(timer);
  }, [router, redirectUrl]);

  const handleLoginRedirect = () => {
    router.push(redirectUrl);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
        }}
      >
        <Attirebella />

        <Divider sx={{ mt: 2, width: "100%" }} />
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          {t("title")}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {t("description")}
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoginRedirect}
            LinkComponent={Link}
            href={redirectUrl}
          >
            {t("buttonText")}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LogoutPage;
