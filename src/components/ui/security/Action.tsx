"use client";
import {
  PasswordForm,
  passwordResetForm,
  passwordSetFormField,
} from "@/controllers/slices/securitySilce";
import React from "react";
import { RootState } from "@/types/stateTypes";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordIcon from "@mui/icons-material/Password";

import supabase from "@/lib/supabase/supabase";
import { toast } from "react-toastify";
import { useEmailPassword } from "@/hooks/useEmailPassword";

export default function SecurityUI() {
  const t = useTranslations("securityPage");
  const provider = useSelector((state: RootState) => state.user.providerid);
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const tm = useTranslations("toastMessage");
  const uid = useSelector((state: RootState) => state.user.uid!);
  const isPasswordMatched = password === confirmPassword;
  const { updatePasswordFirebase } = useEmailPassword();
  // function handlechange(field: keyof PasswordForm, value: string) {
  //   dispatch(passwordSetFormField({ field, value }));
  // }
  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updatePasswordFirebase(password);
    const { data, error: selectError } = await supabase
      .from("users")
      .update({ password })
      .eq("uid", uid)
      .select()
      .single();

    if (data) {
      toast(tm("textFieldPassword"), { type: "success" });
    }

    if (selectError && selectError.code !== "PGRST116") {
      console.error("Supabase select error:", selectError.message);
      toast(selectError.message, { type: "error" });
      return;
    }
    setConfirmPassword("");
    setPassword("");
  }
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        component={"form"}
        onSubmit={handleSave}
      >
        {provider === "password" ? (
          <>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputField
                  name="newPassword"
                  label={t("passwordFormNewPassword")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormInputField
                  name="confirmPassword"
                  label={t("passwordFormConfirmPassword")}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isPasswordMatched ? false : true}
                >
                  {t("passwordFormButton")}
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="subtitle1">
              {`${t("passwordless")}`}
            </Typography>
            <Typography>{`${t("nopassword")} ${provider}`}</Typography>
          </>
        )}
      </Box>
    </>
  );
}

export function FormInputField({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        required
        autoComplete="new-password"
        fullWidth
        slotProps={{
          input: {
            autoComplete: "new-password",
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
}
