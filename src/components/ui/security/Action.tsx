"use client";
import {
  PasswordForm,
  passwordResetForm,
  passwordSetFormField,
} from "@/controllers/slices/securitySilce";
import React from "react";
import { RootState } from "@/types/stateTypes";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SecurityUI() {
  const dispatch = useDispatch();
  const t = useTranslations("securityPage");
  const passwordForm = useSelector(
    (state: RootState) => state.security.passwordForm
  );
  const isPasswordMatched =
    passwordForm.newPassword === passwordForm.confirmPassword;

  function handlechange(field: keyof PasswordForm, value: string) {
    dispatch(passwordSetFormField({ field, value }));
  }
  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(passwordResetForm());
  }
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        component={"form"}
        onSubmit={handleSave}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormInputField
              name="oldPassword"
              label={t("passwordFormCurrent")}
              value={passwordForm.oldPassword}
              onChange={(e) => handlechange("oldPassword", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormInputField
              name="newPassword"
              label={t("passwordFormNewPassword")}
              value={passwordForm.newPassword}
              onChange={(e) => handlechange("newPassword", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormInputField
              name="confirmPassword"
              label={t("passwordFormConfirmPassword")}
              value={passwordForm.confirmPassword}
              onChange={(e) => handlechange("confirmPassword", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
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
      </Box>
    </>
  );
}

function FormInputField({
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
