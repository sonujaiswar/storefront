import { Box, Button, Grid, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

export default function SecurityUI() {
  const t = useTranslations("securityPage");
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }} component={"form"}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              name="password"
              label={t("passwordFormCurrent")}
              type="password"
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              name="password"
              label={t("passwordFormNewPassword")}
              type="password"
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              name="confirmPassword"
              label={t("passwordFormConfirmPassword")}
              type="password"
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Button variant="contained" color="primary" type="submit">
              {t("passwordFormButton")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
