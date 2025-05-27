"use client";

import { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Alert,
  Box,
  Button,
  Collapse,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import { useEmailPassword } from "@/hooks/useEmailPassword";
import { FormInputField } from "../security/Action";

export default function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("signinPage");
  const { signInWithEmail, error } = useEmailPassword();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (error) {
      setIsOpen(true);
    }
  }, [error]);

  return (
    <>
      {error && (
        <Collapse in={isOpen} sx={{ mb: 2 }}>
          <Alert severity="error" onClose={() => setIsOpen(false)}>
            {error}
          </Alert>
        </Collapse>
      )}
      <Box
        component="form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsOpen(true);
          signInWithEmail(email, password);
        }}
        sx={{ gap: 2, display: "flex", flexDirection: "column" }}
      >
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
        />
        <FormInputField
          name="password"
          label={t("textfieldPassword")}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* <TextField
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
        /> */}
        <Button
          fullWidth
          variant="contained"
          type="submit"
          startIcon={<LockOpenIcon />}
          sx={{ fontWeight: 600, py: 1.3, borderRadius: 2 }}
        >
          {t("emailButtonText")}
        </Button>
      </Box>
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
          {t("signUpAction")}
        </Button>
      </Stack>
    </>
  );
}
