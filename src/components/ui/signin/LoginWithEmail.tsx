"use client";

import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavigationRoutes } from "@/constants/NavigationRoutes";

export default function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("signinPage");
  return (
    <>
      {/* Email/Password Sign-in */}
      <TextField
        label={t("textfieldEmail")}
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          },
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label={t("textfieldPassword")}
        type="password"
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
          },
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Button
        fullWidth
        variant="contained"
        startIcon={<LockOpenIcon />}
        sx={{ fontWeight: 600, py: 1.3, borderRadius: 2 }}
      >
        {t("emailButtonText")}
      </Button>
      <Stack sx={{ mt: 2 }}>
        <Stack justifyContent={"flex-end"} direction={"row"}>
          <Button
            variant="text"
            LinkComponent={Link}
            href={NavigationRoutes.signinPage.url}
          >
            Forget password?
          </Button>
        </Stack>

        <Button
          LinkComponent={Link}
          href={NavigationRoutes.signupPage.url}
          sx={{ mt: 2 }}
        >
          {t("signup.action")}
        </Button>
      </Stack>
    </>
  );
}
