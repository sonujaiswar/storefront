"use client";
import React from "react";
import { useEmailPassword } from "@/hooks/useEmailPassword";
import {
  Alert,
  Box,
  Button,
  Collapse,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FormInputField } from "@/components/ui/security/Action";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import splitDisplayName from "@/utils/splitDisplayName";
import { userSetFullName } from "@/controllers/slices/userSlice";
export default function signUpPage() {
  const t = useTranslations("signupPage");
  const { signUpWithEmail, error } = useEmailPassword();
  const [fullname, setfullname] = React.useState<string>("");

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { first_name, last_name } = splitDisplayName(fullname);
    dispatch(userSetFullName({ first_name, last_name }));
    signUpWithEmail(email, password);
  };
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (error) {
      setIsOpen(true);
    }
  }, [error]);

  return (
    <>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" align="center">
          {t("title")}
        </Typography>
        <Typography>{t("description")}</Typography>
        {error && (
          <Collapse in={isOpen} sx={{ mb: 2 }}>
            <Alert severity="error" onClose={() => setIsOpen(false)}>
              {error}
            </Alert>
          </Collapse>
        )}
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{ gap: 2, display: "flex", flexDirection: "column" }}
        >
          <TextField
            label={t("formfullname")}
            name="fullname"
            fullWidth
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label={t("formEmail")}
            name="email"
            type="email"
            fullWidth
            value={email}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInputField
            name="password"
            label={t("formPassword")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
