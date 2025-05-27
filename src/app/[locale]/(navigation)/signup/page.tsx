"use client";
import React from "react";
import { useEmailPassword } from "@/hooks/useEmailPassword";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FormInputField } from "@/components/ui/security/Action";

export default function signUpPage() {
  const t = useTranslations("signupPage");
  const { signUpWithEmail } = useEmailPassword();
  const [firstname, setFirstName] = React.useState<string>("");
  const [lastname, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpWithEmail(email, password);
  };
  return (
    <>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" align="center">
          {t("title")}
        </Typography>
        <Typography>{t("description")}</Typography>
        <Box component={"form"} onSubmit={handleSubmit}>
          <TextField
            label={t("formFirstName")}
            name="Firstname"
            fullWidth
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />
          <TextField
            label={t("formLastName")}
            name="Lastname"
            fullWidth
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            label={t("formEmail")}
            name="email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <FormInputField
            name="password"
            label={t("formPassword")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <TextField
            label={t("formPassword")}
            name="password"
            type="password"
            fullWidth
            margin="normal"
          /> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {t("buttonText")}
          </Button>
        </Box>
        <Button variant="text" LinkComponent={Link} href="/signin">
          {t("buttonTextSignIn")}
        </Button>
      </Box>
    </>
  );
}
